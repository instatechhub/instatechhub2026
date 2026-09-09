import React, { useEffect, useRef } from "react";

const Interactive3DCanvas = ({ className = "", style = {} }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let width = (canvas.width = canvas.parentElement?.offsetWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.offsetHeight || window.innerHeight);

    let mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      isHovered: false,
    };

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.offsetWidth || window.innerWidth;
      height = canvas.height = canvas.parentElement.offsetHeight || window.innerHeight;
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - rect.left;
      mouse.targetY = e.clientY - rect.top;
      mouse.isHovered = true;
    };

    const handleMouseLeave = () => {
      mouse.targetX = width / 2;
      mouse.targetY = height / 2;
      mouse.isHovered = false;
    };

    window.addEventListener("resize", handleResize);
    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("mouseleave", handleMouseLeave);

    // 3D Particles
    const PARTICLE_COUNT = Math.min(85, Math.floor(width / 16));
    const particles = [];
    const FOV = 400;

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 1.5,
        y: (Math.random() - 0.5) * height * 1.5,
        z: Math.random() * 800 - 400,
        vx: (Math.random() - 0.5) * 0.7,
        vy: (Math.random() - 0.5) * 0.7,
        vz: (Math.random() - 0.5) * 0.9,
        size: Math.random() * 2.5 + 1.2,
        pulse: Math.random() * Math.PI * 2,
        color: Math.random() > 0.4 ? "255, 46, 46" : "255, 100, 100",
      });
    }

    // 3D Geometric Ring / Wireframe Node points
    const RING_POINTS = 32;
    const ringRadius = Math.min(width, height) * 0.28;
    const ringNodes = [];
    for (let i = 0; i < RING_POINTS; i++) {
      const angle = (i / RING_POINTS) * Math.PI * 2;
      ringNodes.push({
        baseX: Math.cos(angle) * ringRadius,
        baseY: Math.sin(angle) * ringRadius,
        baseZ: (Math.sin(angle * 3) * ringRadius) * 0.35,
        phase: angle,
      });
    }

    let rotX = 0;
    let rotY = 0;
    let time = 0;

    const render = () => {
      time += 0.015;

      // Smooth mouse interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const targetRotY = ((mouse.x - width / 2) / (width / 2)) * 0.35;
      const targetRotX = -((mouse.y - height / 2) / (height / 2)) * 0.25;

      rotX += (targetRotX - rotX) * 0.05;
      rotY += (targetRotY - rotY) * 0.05;

      ctx.clearRect(0, 0, width, height);

      // Cyber ambient glow overlay
      const gradient = ctx.createRadialGradient(
        width / 2 + rotY * 150,
        height / 2 + rotX * 100,
        20,
        width / 2,
        height / 2,
        Math.max(width, height) * 0.75
      );
      gradient.addColorStop(0, "rgba(255, 46, 46, 0.06)");
      gradient.addColorStop(0.5, "rgba(225, 29, 72, 0.02)");
      gradient.addColorStop(1, "rgba(248, 250, 252, 0)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);

      // Project & render 3D particles
      const projected = [];
      const cosY = Math.cos(rotY + time * 0.1);
      const sinY = Math.sin(rotY + time * 0.1);
      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Move particles
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        p.pulse += 0.03;

        // Wrap around bounds in 3D box
        const boundX = width * 0.8;
        const boundY = height * 0.8;
        if (p.x < -boundX) p.x = boundX;
        if (p.x > boundX) p.x = -boundX;
        if (p.y < -boundY) p.y = boundY;
        if (p.y > boundY) p.y = -boundY;
        if (p.z < -400) p.z = 400;
        if (p.z > 400) p.z = -400;

        // 3D Rotation along Y then X
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y2 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        // Perspective projection
        const depth = z2 + FOV;
        if (depth <= 20) continue;

        const scale = FOV / depth;
        const screenX = width / 2 + x1 * scale;
        const screenY = height / 2 + y2 * scale;

        projected.push({
          x: screenX,
          y: screenY,
          scale,
          depth: z2,
          color: p.color,
          size: p.size * (1 + Math.sin(p.pulse) * 0.25),
        });
      }

      // Draw connection lines in 3D
      ctx.lineWidth = 0.85;
      for (let i = 0; i < projected.length; i++) {
        const p1 = projected[i];
        for (let j = i + 1; j < projected.length; j++) {
          const p2 = projected[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            const alpha = (1 - dist / 120) * 0.22 * Math.min(p1.scale, p2.scale);
            ctx.strokeStyle = `rgba(255, 60, 60, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D nodes
      for (let i = 0; i < projected.length; i++) {
        const p = projected[i];
        const rad = Math.max(0.8, p.size * p.scale);
        const alpha = Math.min(0.9, Math.max(0.15, p.scale * 0.7));

        // Node halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${alpha * 0.25})`;
        ctx.fill();

        // Node core
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color}, ${alpha})`;
        ctx.fill();
      }

      // Render 3D Cyber Orbital Ring
      ctx.beginPath();
      let first = true;
      for (let i = 0; i <= ringNodes.length; i++) {
        const node = ringNodes[i % ringNodes.length];
        const ringTime = time * 0.4;
        const dynamicZ = node.baseZ + Math.sin(node.phase + ringTime) * 35;

        // Apply 3D rotation
        const rx1 = node.baseX * cosY - dynamicZ * sinY;
        const rz1 = dynamicZ * cosY + node.baseX * sinY;

        const ry2 = node.baseY * cosX - rz1 * sinX;
        const rz2 = rz1 * cosX + node.baseY * sinX;

        const depth = rz2 + FOV + 150;
        if (depth <= 20) continue;

        const scale = (FOV + 150) / depth;
        const sx = width / 2 + rx1 * scale;
        const sy = height / 2 + ry2 * scale;

        if (first) {
          ctx.moveTo(sx, sy);
          first = false;
        } else {
          ctx.lineTo(sx, sy);
        }
      }
      ctx.strokeStyle = "rgba(255, 46, 46, 0.18)";
      ctx.lineWidth = 1.2;
      ctx.setLineDash([4, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`interactive-3d-canvas ${className}`}
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    />
  );
};

export default Interactive3DCanvas;
