import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Interactive3DCanvas from "./Interactive3DCanvas";
import { openEnquiryOnWhatsApp } from "../utils/whatsapp";

// Assets
import girlImage from "../assest/homeimage/girlImage.png";
import prabhuPoojaLogo from "../assest/portfoliologo/prabhupoojalogo.png";
import xleanWellnessLogo from "../assest/portfoliologo/xleanlogo.png";
import instaConnectsLogo from "../assest/portfoliologo/instaconnectslogo.png";
import atmaShuddhiLogo from "../assest/portfoliologo/atmasudhilogo.png";
import innovativeOutsourceLogo from "../assest/portfoliologo/innovateLogo.png";
import user1 from "../assest/homeimage/user1.png";
import user2 from "../assest/homeimage/user2.png";
import { allProjects } from "../data/projectsData";

// Icons
import {
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaBullhorn,
  FaCloud,
  FaRobot,
  FaCheckCircle,
  FaArrowRight,
  FaExternalLinkAlt,
  FaGooglePlay,
  FaStar,
  FaPhoneAlt,
  FaWhatsapp,
  FaShieldAlt,
  FaRocket,
  FaCode,
  FaDatabase,
  FaServer,
  FaUsersCog,
  FaTerminal,
  FaGitAlt,
  FaCopy,
  FaCheck
} from "react-icons/fa";
import { HiSparkles, HiOutlineCheckBadge } from "react-icons/hi2";
import { BiNetworkChart, BiSupport } from "react-icons/bi";

const Home = () => {
  // Developer IDE State
  const [activeHeroTab, setActiveHeroTab] = useState("arch");
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [techFilter, setTechFilter] = useState("all");

  // Contact & Inquiry Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "Web Development",
    subject: "New Project Inquiry",
    message: "",
  });
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Project Cost Estimator State
  const [calcService, setCalcService] = useState("web");
  const [calcScale, setCalcScale] = useState("growth");
  const [calcSpeed, setCalcSpeed] = useState("standard");

  const calculateEstimate = () => {
    let base = 25000;
    if (calcService === "web") base = 35000;
    if (calcService === "mobile") base = 50000;
    if (calcService === "desktop") base = 45000;
    if (calcService === "marketing") base = 20000;

    let multiplier = 1;
    if (calcScale === "startup") multiplier = 0.8;
    if (calcScale === "growth") multiplier = 1.3;
    if (calcScale === "enterprise") multiplier = 2.4;

    let speedFee = 1;
    if (calcSpeed === "express") speedFee = 1.25;

    const total = Math.round(base * multiplier * speedFee);
    return `₹${total.toLocaleString("en-IN")}`;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const enquiry = {
      name: formData.name,
      email: formData.email,
      number: formData.number,
      subject: `${formData.subject} - ${formData.service}`,
      message: formData.message || `Client requested inquiry for ${formData.service}`,
      service: formData.service,
    };

    openEnquiryOnWhatsApp(enquiry);
    setSubmitSuccess(true);
    setFormData({
      name: "",
      email: "",
      number: "",
      service: "Web Development",
      subject: "New Project Inquiry",
      message: "",
    });
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }, 5000);
  };

  // Developer IDE Code Snippets
  const heroSnippets = {
    arch: `// @instatech/enterprise-architecture v3.8.0
import { CloudCluster, Microservices } from '@instatech/cloud';
import { React19, Next15, TypeScript } from '@instatech/frontend';

export const ProductionSystem = {
  frontend: ['Next.js 15', 'React 19', 'TypeScript 5.x'],
  backend: ['Node.js v22', 'PostgreSQL 16', 'Redis Cache'],
  devops: {
    cloud: 'AWS Multi-AZ Enterprise',
    containers: 'Docker + Kubernetes',
    uptimeSLA: '99.99%',
    security: 'Zero-Trust SSL/TLS 1.3'
  },
  deploy: async () => {
    const cluster = await CloudCluster.provision();
    return cluster.status; // "ONLINE // 14ms latency"
  }
};`,
    deploy: `# CI/CD Automated Production Rollout
$ git checkout -b release/v3.8-prod
$ npm run test:coverage -- --ci
  ✓ 192 unit tests passing (0 failures)
  ✓ Security vulnerability scan: 0 CVEs
$ docker build -t instatech/enterprise-cloud:latest .
$ docker push registry.aws.amazon.com/instatech:latest
$ kubectl rollout restart deployment/enterprise-api
  ✓ Rolling update complete: 4/4 pods online
  ✓ Status: 200 OK • Response Time: 16ms`,
    telemetry: `{
  "cluster_id": "aws-ap-south-1-prod",
  "system_status": "HEALTHY_ONLINE",
  "deployments_count": 150,
  "average_api_latency": "14.2ms",
  "uptime_sla_guarantee": "99.99%",
  "active_microservices": 28,
  "traffic_encryption": "TLS_1_3_AES_256",
  "ci_cd_health": "100%_PASSING"
}`
  };

  const handleCopyCode = () => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(heroSnippets[activeHeroTab]);
      setCopiedSnippet(true);
      setTimeout(() => setCopiedSnippet(false), 2000);
    }
  };

  // Software Engineering Lifecycle Pipeline
  const engineeringPipeline = [
    {
      step: "01",
      filename: "01_architecture_spec.md",
      title: "System Architecture & RFC",
      badge: "Discovery & Spec",
      desc: "Comprehensive technical discovery, API contract definitions, database indexing schemas, and distributed microservice topologies.",
      tags: ["System Design", "API Contracts", "DB Schema", "RFC Doc"]
    },
    {
      step: "02",
      filename: "02_clean_modular_code.tsx",
      title: "Type-Safe Modular Engineering",
      badge: "Zero Debt Dev",
      desc: "Component-driven development using React 19, Next.js, and Node.js. Strict TypeScript linting rules and modular design patterns guarantee zero technical debt.",
      tags: ["TypeScript 5.x", "React 19", "Clean Architecture", "Atomic UI"]
    },
    {
      step: "03",
      filename: "03_ci_cd_automated.yml",
      title: "Automated CI/CD & Security QA",
      badge: "Automated Pipelines",
      desc: "Every commit undergoes automated unit testing, end-to-end regression validation, Docker containerization, and static vulnerability scanning.",
      tags: ["GitHub Actions", "Docker Clusters", "Unit Tests", "Zero CVEs"]
    },
    {
      step: "04",
      filename: "04_cloud_telemetry.io",
      title: "Zero-Downtime Deployment & APM",
      badge: "99.99% Uptime",
      desc: "Zero-downtime rolling updates on multi-AZ AWS clusters with real-time APM telemetry, automated health probes, and 24/7 SLA infrastructure support.",
      tags: ["AWS Multi-AZ", "Real-Time APM", "Zero Downtime", "24/7 SLA"]
    },
  ];

  // Core IT Services with Developer Signatures
  const coreServices = [
    {
      id: "web",
      icon: <FaGlobe />,
      title: "Web Development",
      badge: "Full-Stack",
      devSignature: "const app = new FullStackApp({ ssr: true, framework: 'Next.js 15' });",
      desc: "High-performance Single Page Apps, SaaS platforms, corporate portals, and custom web architectures engineered with React, Next.js, and Node.",
      features: ["Custom SaaS Architecture", "Progressive Web Apps (PWA)", "API Integrations & SSR", "High-Security Standards"],
    },
    {
      id: "mobile",
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      badge: "iOS & Android",
      devSignature: "mobileEngine.compile({ targets: ['iOS', 'Android'], fps: 60 });",
      desc: "Native and cross-platform mobile solutions using React Native and Flutter for butter-smooth 60fps performance and seamless offline sync.",
      features: ["Cross-Platform Flutter/React Native", "Push Notifications & Real-time Sync", "App Store & Play Store Optimization", "Biometric & Payment Gateways"],
    },
    {
      id: "desktop",
      icon: <FaDesktop />,
      title: "Desktop Software",
      badge: "Cross-Platform",
      devSignature: "electron.build({ os: ['Windows', 'macOS', 'Linux'], csharp: true });",
      desc: "Robust Windows, macOS, and Linux desktop applications built with Electron, C#/.NET, and Python for enterprise workflow automation.",
      features: ["Electron & .NET Core Applications", "Offline-First Enterprise Systems", "Hardware & Peripheral Integration", "Background Service Automation"],
    },
    {
      id: "marketing",
      icon: <FaBullhorn />,
      title: "Digital Marketing & SEO",
      badge: "High ROI",
      devSignature: "growthEngine.run({ seoRanking: '#1', conversionCRO: '10x' });",
      desc: "Data-driven performance marketing, high-intent Google PPC, Meta Ad campaigns, conversion rate optimization (CRO), and technical SEO.",
      features: ["Technical SEO & Keyword Dominance", "High-Converting Paid Ad Campaigns", "Social Media Brand Acceleration", "Full-Funnel Analytics Tracking"],
    },
    {
      id: "cloud",
      icon: <FaCloud />,
      title: "Cloud Infrastructure & DevOps",
      badge: "AWS & Docker",
      devSignature: "docker compose -f docker-compose.prod.yml up -d --scale web=4",
      desc: "Modern cloud architectures, CI/CD automated deployment pipelines, Docker containerization, Kubernetes orchestration, and serverless scalability.",
      features: ["AWS & Azure Cloud Deployments", "Automated CI/CD Delivery", "Microservices & Docker Clusters", "99.9% High Availability SLAs"],
    },
    {
      id: "ai",
      icon: <FaRobot />,
      title: "AI & Workflow Automation",
      badge: "Next-Gen",
      devSignature: "aiAgent.orchestrate({ llm: 'Enterprise-RAG', latency: '35ms' });",
      desc: "Custom AI agent development, enterprise LLM integrations, intelligent chatbots, customer support automation, and automated document processing.",
      features: ["Custom LLM & Chatbot Solutions", "Business Workflow Automation", "Automated Lead Routing", "Predictive Analytics Models"],
    },
  ];

  // Categorized Tech Stack Matrix
  const techCategories = [
    { id: "all", label: "All Technologies" },
    { id: "frontend", label: "Frontend & UI" },
    { id: "backend", label: "Backend & APIs" },
    { id: "mobile", label: "Mobile" },
    { id: "cloud", label: "Cloud & DevOps" },
    { id: "data", label: "Database & AI" },
  ];

  const techStackData = [
    { name: "React 19", category: "frontend", version: "v19.1", tag: "Component Architecture", icon: <FaCode /> },
    { name: "Next.js", category: "frontend", version: "v15.2", tag: "SSR & Edge Runtime", icon: <FaGlobe /> },
    { name: "TypeScript", category: "frontend", version: "v5.6", tag: "Strict Type Safety", icon: <FaCode /> },
    { name: "Node.js", category: "backend", version: "v22 LTS", tag: "High-Concurrency APIs", icon: <FaServer /> },
    { name: "Python", category: "backend", version: "v3.12", tag: "Microservices & AI", icon: <FaCode /> },
    { name: "Flutter", category: "mobile", version: "v3.24", tag: "60fps Cross-Platform", icon: <FaMobileAlt /> },
    { name: "React Native", category: "mobile", version: "v0.75", tag: "Native iOS & Android", icon: <FaMobileAlt /> },
    { name: "Electron", category: "frontend", version: "v31.x", tag: "Cross-Platform Desktop", icon: <FaDesktop /> },
    { name: "Docker", category: "cloud", version: "v27.x", tag: "Containerization", icon: <FaCloud /> },
    { name: "AWS Cloud", category: "cloud", version: "Multi-AZ", tag: "Enterprise Scalability", icon: <FaCloud /> },
    { name: "PostgreSQL", category: "data", version: "v16.x", tag: "ACID Relational DB", icon: <FaDatabase /> },
    { name: "MongoDB", category: "data", version: "v7.0", tag: "NoSQL High Throughput", icon: <FaDatabase /> },
    { name: "Redis", category: "data", version: "v7.2", tag: "In-Memory Sub-ms Cache", icon: <FaDatabase /> },
    { name: "Kubernetes", category: "cloud", version: "v1.30", tag: "Automated Orchestration", icon: <FaCloud /> },
  ];

  const filteredTechStack = techStackData.filter((t) => {
    if (techFilter === "all") return true;
    return t.category === techFilter;
  });

  // Featured Real Projects
  const featuredProjects = allProjects.filter((p) => p.featuredOnHome);

  const trustedClientLogos = [
    { src: prabhuPoojaLogo, alt: "PrabhuPooja" },
    { src: xleanWellnessLogo, alt: "XleanWellness" },
    { src: instaConnectsLogo, alt: "InstaConnects" },
    { src: atmaShuddhiLogo, alt: "AtmaShuddhi Yoga" },
    { src: innovativeOutsourceLogo, alt: "Innovative Outsource" },
  ];

  // Client Testimonials
  const testimonials = [
    {
      id: 1,
      name: "PrabhuPooja Operations",
      company: "PrabhuPooja.com",
      rating: 5,
      review:
        "InstaTech Hub engineered both our web booking platform and mobile application. We have facilitated over 40,000 Vedic rituals with 100% rock-solid uptime during high-traffic festival periods like Navratri and Diwali.",
      img: user1,
    },
    {
      id: 2,
      name: "XleanWellness Leadership",
      company: "XleanWellness.com",
      rating: 5,
      review:
        "We partnered with InstaTech Hub to develop our D2C e-commerce platform and mobile wellness app. Their UX attention and speed optimization resulted in a 220% surge in online sales and stellar reviews.",
      img: user2,
    },
    {
      id: 3,
      name: "Enterprise Solutions Head",
      company: "InstaConnects.com",
      rating: 5,
      review:
        "From real-time cloud telecom monitoring to our custom Lead & Sales CRM automation, InstaTech Hub delivered beyond expectations. High-velocity execution and exceptional software engineering.",
      img: user1,
    },
  ];

  return (
    <div className="home-page-root">
      {/* =========================================================================
          HERO SECTION (3D Interactive Canvas + High-Impact Promotion)
         ========================================================================= */}
      <section className="hero-cyber-section tech-grid-pattern">
        <Interactive3DCanvas />

        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>

        <div className="container hero-content-grid">
          <div className="hero-text-content">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>&lt;Enterprise_Software_Engineering /&gt;</span>
            </div>

            <h1 className="hero-main-title">
              We Code &amp; Engineer Scalable <span className="gradient-text-red">Software</span> &amp; Cloud Systems.
            </h1>

            <p className="hero-description">
              InstaTech Hub is a full-cycle technology consulting &amp; software engineering agency. We architect high-throughput
              <strong> Full-Stack Web Platforms</strong>, <strong>Cross-Platform Mobile Apps</strong>,
              <strong> Enterprise Desktop Systems</strong>, and <strong>Automated DevOps</strong> with zero technical debt.
            </p>

            {/* Quick CTAs */}
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-primary hero-btn-main">
                <span className="quote-cli-prompt">&gt;_</span>
                <span>Start Your Project</span>
                <FaArrowRight />
              </Link>
              <Link to="/service" className="btn-secondary">
                <span>View Architecture &amp; Services</span>
              </Link>
              <a
                href="https://wa.me/919522886131"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp-link"
                title="Instant Technical Connect"
              >
                <FaWhatsapp />
                <span>Technical Desk</span>
              </a>
            </div>

            {/* Technical Verification Highlights */}
            <div className="hero-trust-box">
              <div className="trust-item">
                <HiOutlineCheckBadge className="t-icon" />
                <div>
                  <h4>150+ Deploys</h4>
                  <p>Production Cloud Systems</p>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <BiSupport className="t-icon" />
                <div>
                  <h4>99.99% SLA</h4>
                  <p>Uptime &amp; Availability</p>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <FaShieldAlt className="t-icon" />
                <div>
                  <h4>Zero Debt</h4>
                  <p>Strict Type Safety</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Column: Interactive Developer IDE Terminal Showcase */}
          <div className="hero-visual-col">
            <div className="hero-ide-window">
              {/* IDE Top Bar / Title & Controls */}
              <div className="ide-top-bar">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <div className="ide-tab-bar">
                  <button
                    type="button"
                    className={`ide-tab ${activeHeroTab === "arch" ? "active" : ""}`}
                    onClick={() => setActiveHeroTab("arch")}
                  >
                    <span className="file-icon ts">TS</span>
                    <span>Architecture.tsx</span>
                  </button>
                  <button
                    type="button"
                    className={`ide-tab ${activeHeroTab === "deploy" ? "active" : ""}`}
                    onClick={() => setActiveHeroTab("deploy")}
                  >
                    <span className="file-icon sh">SH</span>
                    <span>deploy.sh</span>
                  </button>
                  <button
                    type="button"
                    className={`ide-tab ${activeHeroTab === "telemetry" ? "active" : ""}`}
                    onClick={() => setActiveHeroTab("telemetry")}
                  >
                    <span className="file-icon json">&#123;&#125;</span>
                    <span>telemetry.json</span>
                  </button>
                </div>
                <button
                  type="button"
                  className="ide-copy-btn"
                  onClick={handleCopyCode}
                  title="Copy Snippet"
                >
                  {copiedSnippet ? <FaCheck className="copy-ok" /> : <FaCopy />}
                </button>
              </div>

              {/* IDE Code Editor Body */}
              <div className="ide-editor-body">
                <div className="ide-line-numbers">
                  {heroSnippets[activeHeroTab].split("\n").map((_, i) => (
                    <span key={i}>{i + 1}</span>
                  ))}
                </div>
                <div className="ide-code-scroll">
                  <pre className="ide-code-pre">
                    <code>
                      {activeHeroTab === "arch" && (
                        <>
                          <span className="syn-comment">// @instatech/enterprise-architecture v3.8.0</span>{"\n"}
                          <span className="syn-kw">import</span> &#123; <span className="syn-fn">CloudCluster</span>, <span className="syn-fn">Microservices</span> &#125; <span className="syn-kw">from</span> <span className="syn-str">'@instatech/cloud'</span>;{"\n"}
                          <span className="syn-kw">import</span> &#123; <span className="syn-fn">React19</span>, <span className="syn-fn">Next15</span>, <span className="syn-fn">TypeScript</span> &#125; <span className="syn-kw">from</span> <span className="syn-str">'@instatech/frontend'</span>;{"\n\n"}
                          <span className="syn-kw">export const</span> <span className="syn-type">ProductionSystem</span> = &#123;{"\n"}
                          {"  "}frontend: [<span className="syn-str">'Next.js 15'</span>, <span className="syn-str">'React 19'</span>, <span className="syn-str">'TypeScript 5.x'</span>],{"\n"}
                          {"  "}backend: [<span className="syn-str">'Node.js v22'</span>, <span className="syn-str">'PostgreSQL 16'</span>, <span className="syn-str">'Redis Cache'</span>],{"\n"}
                          {"  "}devops: &#123;{"\n"}
                          {"    "}cloud: <span className="syn-str">'AWS Multi-AZ Enterprise'</span>,{"\n"}
                          {"    "}containers: <span className="syn-str">'Docker + Kubernetes'</span>,{"\n"}
                          {"    "}uptimeSLA: <span className="syn-str">'99.99%'</span>,{"\n"}
                          {"    "}security: <span className="syn-str">'Zero-Trust SSL/TLS 1.3'</span>{"\n"}
                          {"  "}&#125;,{"\n"}
                          {"  "}deploy: <span className="syn-kw">async</span> () =&gt; &#123;{"\n"}
                          {"    "}<span className="syn-kw">const</span> cluster = <span className="syn-kw">await</span> <span className="syn-fn">CloudCluster.provision</span>();{"\n"}
                          {"    "}<span className="syn-kw">return</span> cluster.status; <span className="syn-comment">// "ONLINE // 14ms latency"</span>{"\n"}
                          {"  "}&#125;{"\n"}
                          &#125;;
                        </>
                      )}
                      {activeHeroTab === "deploy" && (
                        <>
                          <span className="syn-comment"># CI/CD Automated Production Rollout</span>{"\n"}
                          <span className="syn-kw">$</span> git checkout -b release/v3.8-prod{"\n"}
                          <span className="syn-kw">$</span> npm run test:coverage -- --ci{"\n"}
                          <span className="syn-str">  ✓ 192 unit tests passing (0 failures)</span>{"\n"}
                          <span className="syn-str">  ✓ Security vulnerability scan: 0 CVEs</span>{"\n"}
                          <span className="syn-kw">$</span> docker build -t instatech/enterprise-cloud:latest .{"\n"}
                          <span className="syn-kw">$</span> docker push registry.aws.amazon.com/instatech:latest{"\n"}
                          <span className="syn-kw">$</span> kubectl rollout restart deployment/enterprise-api{"\n"}
                          <span className="syn-str">  ✓ Rolling update complete: 4/4 pods online</span>{"\n"}
                          <span className="syn-str">  ✓ Status: 200 OK • Response Time: 16ms</span>
                        </>
                      )}
                      {activeHeroTab === "telemetry" && (
                        <>
                          &#123;{"\n"}
                          {"  "}<span className="syn-prop">"cluster_id"</span>: <span className="syn-str">"aws-ap-south-1-prod"</span>,{"\n"}
                          {"  "}<span className="syn-prop">"system_status"</span>: <span className="syn-str">"HEALTHY_ONLINE"</span>,{"\n"}
                          {"  "}<span className="syn-prop">"deployments_count"</span>: <span className="syn-num">150</span>,{"\n"}
                          {"  "}<span className="syn-prop">"average_api_latency"</span>: <span className="syn-str">"14.2ms"</span>,{"\n"}
                          {"  "}<span className="syn-prop">"uptime_sla_guarantee"</span>: <span className="syn-str">"99.99%"</span>,{"\n"}
                          {"  "}<span className="syn-prop">"active_microservices"</span>: <span className="syn-num">28</span>,{"\n"}
                          {"  "}<span className="syn-prop">"traffic_encryption"</span>: <span className="syn-str">"TLS_1_3_AES_256"</span>,{"\n"}
                          {"  "}<span className="syn-prop">"ci_cd_health"</span>: <span className="syn-str">"100%_PASSING"</span>{"\n"}
                          &#125;
                        </>
                      )}
                    </code>
                  </pre>
                </div>
              </div>

              {/* IDE Status Bar */}
              <div className="ide-status-bar">
                <div className="status-bar-left">
                  <span className="git-branch"><FaGitAlt /> git:(main) ✓</span>
                  <span className="sep">•</span>
                  <span className="status-pill-ok">0 errors</span>
                  <span className="sep">•</span>
                  <span>TypeScript</span>
                </div>
                <div className="status-bar-right">
                  <span className="telemetry-live-dot"></span>
                  <span>STATUS 200 OK // 14ms SLA</span>
                </div>
              </div>

              {/* Floating Badges */}
              <div className="floating-badge badge-top-right">
                <HiSparkles className="badge-icon-sparkle" />
                <div>
                  <span className="badge-stat">10x Speed</span>
                  <span className="badge-sub">Score: 99/100 Core Web</span>
                </div>
              </div>

              <div className="floating-badge badge-bottom-left">
                <BiNetworkChart className="badge-icon-network" />
                <div>
                  <span className="badge-stat">Zero-Downtime</span>
                  <span className="badge-sub">Automated CI/CD Deploy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT LOGOS STRIP
         ========================================================================= */}
      <section className="client-trust-strip">
        <div className="container">
          <p className="strip-label">TRUSTED BY INNOVATIVE BRANDS &amp; ENTERPRISE TEAMS</p>
          <div className="client-logos-marquee">
            {trustedClientLogos.map((logo, index) => (  
              <img key={`${logo.alt}-${index}`} src={logo.src} alt={logo.alt} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SOFTWARE ENGINEERING PIPELINE SECTION
         ========================================================================= */}
      <section className="engineering-pipeline-section tech-grid-pattern">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>// Software Engineering Lifecycle</span>
            </div>
            <h2>How We Architect, Code &amp; Deploy Enterprise Software</h2>
            <p>
              Our battle-tested software engineering lifecycle ensures type-safety, zero technical debt,
              and high-velocity automated cloud deployments.
            </p>
          </div>

          <div className="pipeline-grid">
            {engineeringPipeline.map((stage) => (
              <div key={stage.step} className="pipeline-card glass-panel">
                <div className="pipeline-card-header">
                  <span className="pipeline-step-num">{stage.step}</span>
                  <span className="pipeline-file-badge">{stage.filename}</span>
                </div>
                <div className="pipeline-card-body">
                  <span className="pipeline-stage-tag">{stage.badge}</span>
                  <h3>{stage.title}</h3>
                  <p>{stage.desc}</p>
                  <div className="pipeline-tags">
                    {stage.tags.map((t, idx) => (
                      <span key={idx} className="p-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <div className="pipeline-card-footer">
                  <span className="pipeline-status">● VERIFIED_STAGE</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION (Web, Mobile, Desktop, Marketing + Cloud, AI)
         ========================================================================= */}
      <section className="services-showcase-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>Our Core Competencies</span>
            </div>
            <h2>Full-Spectrum IT &amp; Digital Growth Solutions</h2>
            <p>
              From cloud web apps and cross-platform mobile experiences to specialized desktop software
              and data-backed digital marketing campaigns, we build systems that scale your business.
            </p>
          </div>

          <div className="services-grid">
            {coreServices.map((srv) => (
              <div key={srv.id} className="service-card-modern glass-panel">
                <div className="card-top-row">
                  <div className="service-icon-box">{srv.icon}</div>
                  <span className="service-tag-pill">{srv.badge}</span>
                </div>
                <h3>{srv.title}</h3>
                <div className="service-dev-sig">
                  <code>{srv.devSignature}</code>
                </div>
                <p className="service-summary">{srv.desc}</p>

                <ul className="service-feature-list">
                  {srv.features.map((feat, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-bullet" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                <div className="service-card-footer">
                  <Link to="/service" className="service-explore-link">
                    <span>Learn Specifications</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Quick Consultation Callout */}
          <div className="consultation-banner-box glass-panel">
            <div className="banner-left">
              <div className="badge-pill">
                <span className="pulse-dot"></span>
                <span>Free Technical Audit</span>
              </div>
              <h3>Need a customized IT solution for your enterprise?</h3>
              <p>Schedule a 30-minute discovery session with our senior solutions engineers today.</p>
            </div>
            <div className="banner-right">
              <a href="tel:+919522886131" className="call-btn-box">
                <FaPhoneAlt className="call-icon" />
                <div>
                  <span className="call-label">Direct Consultation</span>
                  <span className="call-num">+91 95228 86131</span>
                </div>
              </a>
              <Link to="/contact" className="btn-primary">
                Book Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INTERACTIVE PROJECT COST ESTIMATOR (High-Converting Business Tool)
         ========================================================================= */}
      <section className="estimator-section">
        <div className="container">
          <div className="estimator-wrapper glass-panel">
            <div className="estimator-info">
              <div className="badge-pill">
                <span className="pulse-dot"></span>
                <span>// Sprint Scope Estimator</span>
              </div>
              <h2>Calculate Your Engineering Scope in 30 Seconds</h2>
              <p>
                Configure your architectural specifications, complexity tier, and delivery velocity to evaluate preliminary sprint investment.
              </p>

              <div className="estimate-result-card">
                <span className="result-label">// Estimated Sprint Investment</span>
                <div className="result-val">{calculateEstimate()} <span className="range-sub">+ Taxes</span></div>
                <p className="result-note">
                  *Preliminary estimate based on standard modern architecture. Contact us for detailed sprint breakdown.
                </p>
                <Link to="/contact" className="btn-primary w-full">
                  <span>Lock In This Quote</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>

            <div className="estimator-controls">
              {/* Service Type Selection */}
              <div className="control-group">
                <label className="control-label">1. Select Core Service Type</label>
                <div className="option-chips-grid">
                  {[
                    { id: "web", name: "Web App / SaaS", icon: <FaGlobe /> },
                    { id: "mobile", name: "Mobile App (iOS/Android)", icon: <FaMobileAlt /> },
                    { id: "desktop", name: "Desktop Software", icon: <FaDesktop /> },
                    { id: "marketing", name: "Digital Marketing & SEO", icon: <FaBullhorn /> },
                  ].map((opt) => (
                    <button
                      key={opt.id}
                      type="button"
                      className={`chip-btn ${calcService === opt.id ? "active" : ""}`}
                      onClick={() => setCalcService(opt.id)}
                    >
                      {opt.icon}
                      <span>{opt.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Scale */}
              <div className="control-group">
                <label className="control-label">2. Select Project Scale & Complexity</label>
                <div className="option-chips-grid grid-3">
                  {[
                    { id: "startup", name: "Startup MVP", desc: "Essential features, rapid launch" },
                    { id: "growth", name: "Growth Business", desc: "Full feature set, CRM & APIs" },
                    { id: "enterprise", name: "Enterprise Scale", desc: "Microservices, high SLA" },
                  ].map((scale) => (
                    <button
                      key={scale.id}
                      type="button"
                      className={`chip-btn stacked ${calcScale === scale.id ? "active" : ""}`}
                      onClick={() => setCalcScale(scale.id)}
                    >
                      <strong>{scale.name}</strong>
                      <small>{scale.desc}</small>
                    </button>
                  ))}
                </div>
              </div>

              {/* Delivery Timeline */}
              <div className="control-group">
                <label className="control-label">3. Target Delivery Speed</label>
                <div className="option-chips-grid grid-2">
                  <button
                    type="button"
                    className={`chip-btn ${calcSpeed === "standard" ? "active" : ""}`}
                    onClick={() => setCalcSpeed("standard")}
                  >
                    <span>Standard Agile Sprints (4-8 Weeks)</span>
                  </button>
                  <button
                    type="button"
                    className={`chip-btn ${calcSpeed === "express" ? "active" : ""}`}
                    onClick={() => setCalcSpeed("express")}
                  >
                    <span>🚀 Fast-Track Priority Sprint (2-4 Weeks)</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECH STACK MATRIX (Categorized Developer Grid)
         ========================================================================= */}
      <section className="tech-stack-section tech-grid-pattern">
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>// Production Tech Matrix</span>
          </div>
          <h2>Cutting-Edge Technologies We Build &amp; Scale With</h2>
          <p className="tech-matrix-sub">
            Battle-tested frameworks, modern runtimes, cloud-native containerization, and enterprise database systems.
          </p>

          <div className="tech-filter-tabs">
            {techCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                className={`tech-filter-btn ${techFilter === cat.id ? "active" : ""}`}
                onClick={() => setTechFilter(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="tech-cards-grid">
            {filteredTechStack.map((tech, idx) => (
              <div key={idx} className="tech-matrix-card glass-panel">
                <div className="tech-card-header">
                  <span className="tech-icon">{tech.icon}</span>
                  <span className="tech-version-badge">{tech.version}</span>
                </div>
                <h3 className="tech-name">{tech.name}</h3>
                <span className="tech-tag-label">{tech.tag}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PROJECTS SHOWCASE
         ========================================================================= */}
      <section className="portfolio-preview-section">
        <div className="container">
          <div className="section-head flex-between">
            <div>
              <div className="badge-pill">
                <span className="pulse-dot"></span>
                <span>Proven Results</span>
              </div>
              <h2>Featured Client Case Studies</h2>
            </div>
            <Link to="/portfolio" className="btn-secondary">
              <span>View All Projects</span>
              <FaArrowRight />
            </Link>
          </div>

          <div className="featured-projects-grid">
            {featuredProjects.map((proj) => (
              <div key={proj.id} className="case-card glass-panel">
                <div className="case-image-wrap">
                  <img src={proj.image} alt={proj.title} />
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`case-live-chip ${proj.linkType === "playstore" ? "playstore" : ""}`}
                      onClick={(e) => e.stopPropagation()}
                      title={proj.linkType === "playstore" ? `Open ${proj.title} on Google Play` : `Visit ${proj.title} live`}
                    >
                      <span className="live-dot"></span>
                      <span>{proj.linkType === "playstore" ? "Google Play" : "Live Site"}</span>
                      {proj.linkType === "playstore" ? <FaGooglePlay /> : <FaExternalLinkAlt />}
                    </a>
                  )}
                </div>
                <div className="case-body">
                  <div className="case-header-row">
                    <span className="case-category">{proj.categoryName}</span>
                    <span className="case-brand-badge">{proj.brandName}</span>
                  </div>
                  <h3>{proj.title}</h3>
                  <p className="case-subtitle">{proj.subtitle}</p>
                  <div className="case-tags">
                    {proj.techStack.slice(0, 3).map((t, i) => (
                      <span key={i} className="case-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="case-card-footer">
                    <Link to="/portfolio" className="case-explore-link">
                      <span>Explore Case Study</span>
                      <FaArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT REVIEWS & SOCIAL PROOF
         ========================================================================= */}
      {/* <section className="reviews-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>Client Endorsements</span>
            </div>
            <h2>Trusted by Industry Leaders</h2>
            <p>Read genuine reviews from businesses that scaled with InstaTech Hub.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.map((test) => (
              <div key={test.id} className="review-card glass-panel">
                <div className="review-stars">
                  {[...Array(test.rating)].map((_, i) => (
                    <FaStar key={i} className="star-icon" />
                  ))}
                </div>
                <p className="review-text">"{test.review}"</p>
                <div className="review-client">
                  <img src={test.img} alt={test.name} className="client-avatar" />
                  <div>
                    <h4>{test.name}</h4>
                    <p>{test.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* =========================================================================
          LEAD GENERATION / CONTACT INQUIRY FORM
         ========================================================================= */}
      <section className="home-lead-section">
        <div className="container">
          <div className="lead-box-grid glass-panel">
            <div className="lead-left">
              <div className="badge-pill">
                <span className="pulse-dot"></span>
                <span>Get in Touch</span>
              </div>
              <h2>Have an IT Project in Mind? Let's Engineer It.</h2>
              <p>
                Fill out the form to discuss your software specifications, marketing goals, or schedule
                a detailed architecture consultation.
              </p>

              <div className="contact-quick-list">
                <a href="tel:+919522886131" className="quick-item">
                  <FaPhoneAlt className="q-icon" />
                  <div>
                    <small>Call Our Technical Desk</small>
                    <span>+91 95228 86131</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919522886131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-item whatsapp"
                >
                  <FaWhatsapp className="q-icon" />
                  <div>
                    <small>Direct WhatsApp Chat</small>
                    <span>Available 24/7</span>
                  </div>
                </a>
              </div>
            </div>

            <div className="lead-right">
              {submitSuccess ? (
                <div className="lead-success-card">
                  <FaCheckCircle className="success-check-icon" />
                  <h3>Inquiry Submitted Successfully!</h3>
                  <p>Our solutions architect will contact you within 2 hours with project next steps.</p>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="lead-form">
                  <div className="form-row">
                    <div className="form-field">
                      <label>Your Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label>Phone Number *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>Interested Service *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Web Development">Custom Web Development</option>
                        <option value="Mobile App Development">Mobile App Development</option>
                        <option value="Desktop Software">Desktop Software Development</option>
                        <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                        <option value="Cloud & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="AI & Automation">AI & Workflow Automation</option>
                        <option value="Custom Enterprise IT">Custom Enterprise IT Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Project Details</label>
                    <textarea
                      rows="4"
                      placeholder="Briefly describe your requirements, timeline, or vision..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn-primary w-full submit-lead-btn" disabled={isSubmitting}>
                    {isSubmitting ? "Opening WhatsApp..." : "Submit Project Inquiry"}
                    <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
