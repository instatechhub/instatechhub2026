import React, { useState } from "react";
import "./Service.css";
import { Link } from "react-router-dom";
import {
  FaGlobe,
  FaMobileAlt,
  FaDesktop,
  FaBullhorn,
  FaCloud,
  FaRobot,
  FaPalette,
  FaCogs,
  FaCheckCircle,
  FaArrowRight,
  FaPhoneAlt,
  FaWhatsapp,
  FaLayerGroup,
  FaShieldAlt,
  FaRocket,
  FaSyncAlt
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Service = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const servicesList = [
    {
      id: "web",
      category: "development",
      icon: <FaGlobe />,
      title: "Custom Web Development",
      badge: "Full-Stack",
      tagline: "Scalable, High-Performance Web Applications & SaaS Systems",
      cliSnippet: "npm i @instatech/web-core // Next.js 15, SSR & Microservices",
      desc: "We build enterprise-grade web applications using React 19, Next.js, Node.js, and modern cloud databases. From customer-facing SaaS platforms to complex corporate portals, we deliver blazing-fast load times and seamless UX.",
      deliverables: [
        "Single Page Applications (SPAs) & SSR Platforms",
        "Custom SaaS Architecture & Multi-tenant Systems",
        "E-Commerce & High-Volume Transactional Portals",
        "RESTful & GraphQL High-Concurrency Microservices",
        "Progressive Web Apps (PWA) with Offline Capability"
      ],
      techStack: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL"],
    },
    {
      id: "mobile",
      category: "development",
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      badge: "iOS & Android",
      tagline: "Native & Cross-Platform Mobile Solutions for High Engagement",
      cliSnippet: "flutter build appbundle --release // 60fps Butter-Smooth Sync",
      desc: "Engineered with Flutter and React Native to provide smooth 60fps animations, intuitive native experiences, and effortless cross-platform synchronization for iOS and Android.",
      deliverables: [
        "Cross-Platform Flutter & React Native Apps",
        "Native iOS (Swift) & Android (Kotlin) Optimization",
        "Real-Time Chat, Push Notifications & Geolocation",
        "Secure In-App Purchases & Payment Gateway Integrations",
        "App Store & Google Play Publishing & Compliance"
      ],
      techStack: ["Flutter", "React Native", "Firebase", "WebRTC", "Swift"],
    },
    {
      id: "desktop",
      category: "development",
      icon: <FaDesktop />,
      title: "Desktop Software Development",
      badge: "Cross-Platform",
      cliSnippet: "electron-builder --win --mac --linux // Offline C#/.NET Core",
      desc: "We engineer robust desktop software for Windows, macOS, and Linux using Electron, C#/.NET Core, and Python for specialized workflow automation, data processing, and hardware integrations.",
      tagline: "High-Powered Desktop Software & Enterprise Automation Systems",
      deliverables: [
        "Electron Cross-Platform Applications (Win/Mac/Linux)",
        "Enterprise C#/.NET Core Desktop Business Tools",
        "Offline-First Data Storage & Background Daemons",
        "Peripheral Hardware & POS/Barcode Integrations",
        "High-Volume Data Processing & File Automation"
      ],
      techStack: ["Electron", "C# / .NET", "Python", "SQLite", "Node.js"],
    },
    {
      id: "marketing",
      category: "growth",
      icon: <FaBullhorn />,
      title: "Digital Marketing & SEO",
      badge: "High ROI",
      tagline: "Data-Backed Performance Marketing & Search Engine Dominance",
      cliSnippet: "growthEngine.audit({ seo: 100, roas: '8.4x', googlePPC: true })",
      desc: "Accelerate sales, qualified leads, and brand authority with data-driven marketing campaigns. We combine targeted Google PPC, Meta Ads, Technical SEO, and CRO to maximize your advertising ROI.",
      deliverables: [
        "Technical SEO & Search Ranking Dominance",
        "Google Ads (PPC, Display, Retargeting) Management",
        "Meta Ads (Facebook & Instagram) Growth Funnels",
        "Conversion Rate Optimization (CRO) & A/B Testing",
        "Full-Funnel Analytics & Real-Time Performance Dashboards"
      ],
      techStack: ["Google Ads", "Meta Business", "GA4", "Search Console", "Semrush"],
    },
    {
      id: "cloud",
      category: "infrastructure",
      icon: <FaCloud />,
      title: "Cloud Infrastructure & DevOps",
      badge: "Cloud-Native",
      tagline: "Automated Deployments, Scalable Clusters & 99.9% Availability",
      cliSnippet: "terraform apply -auto-approve // AWS Multi-AZ Docker Clusters",
      desc: "Modernize your IT operations with automated CI/CD pipelines, Docker containerization, Kubernetes orchestration, and cost-optimized AWS/Azure cloud environments.",
      deliverables: [
        "AWS & Azure Cloud Architecture Setup & Optimization",
        "Docker Containerization & Kubernetes Clusters",
        "Zero-Downtime Automated CI/CD Pipelines",
        "Automated Server Monitoring, Logging & Alerting",
        "Disaster Recovery & Redundant Multi-Zone Failovers"
      ],
      techStack: ["AWS", "Docker", "Kubernetes", "GitHub Actions", "Terraform"],
    },
    {
      id: "ai",
      category: "infrastructure",
      icon: <FaRobot />,
      title: "AI & Workflow Automation",
      badge: "Next-Gen",
      tagline: "Intelligent AI Agents, LLM Integrations & Automated Operations",
      cliSnippet: "langchain.agent.run({ model: 'Enterprise-LLM', rag: true })",
      desc: "Harness the power of modern Artificial Intelligence to automate repetitive tasks, power 24/7 intelligent customer interactions, and unlock actionable insights from company data.",
      deliverables: [
        "Custom LLM & AI Chatbot Integrations",
        "Intelligent Lead Qualification & Automated Routing",
        "Automated Document Extraction & Invoice Processing",
        "Custom AI Agent Workflows via API & Webhooks",
        "Predictive Business Analytics Models"
      ],
      techStack: ["OpenAI API", "Python", "LangChain", "FastAPI", "Vector DBs"],
    },
    {
      id: "design",
      category: "growth",
      icon: <FaPalette />,
      title: "UI/UX Product Design",
      badge: "Design Systems",
      tagline: "Intuitive, Modern Interfaces Engineered for Maximum Conversion",
      cliSnippet: "figma.exportSystem({ tokens: 'tokens.json', components: 120 })",
      desc: "We design clean, user-centric interfaces that not only look visually stunning but are mathematically structured to maximize user retention, engagement, and conversion.",
      deliverables: [
        "Comprehensive User Journey & Wireframing",
        "High-Fidelity Interactive Figma Prototypes",
        "Scalable Enterprise Design Systems & UI Kits",
        "Mobile-First Responsive Layouts & Micro-Interactions",
        "Usability Testing & Conversion Flow Audits"
      ],
      techStack: ["Figma", "Design Systems", "Prototyping", "Design Tokens"],
    },
    {
      id: "consulting",
      category: "development",
      icon: <FaCogs />,
      title: "Custom Enterprise IT Solutions",
      badge: "Turnkey",
      tagline: "End-to-End Technology Consulting & Custom Digital Transformation",
      cliSnippet: "enterprise.modernize({ legacy: 'Migrated', downtime: 0 })",
      desc: "Tailored IT solutions built to solve complex organizational challenges. We help enterprises integrate disparate software, modernize legacy tech stacks, and scale seamlessly.",
      deliverables: [
        "Enterprise ERP & CRM Custom Integrations",
        "Legacy Codebase Modernization & Cloud Migration",
        "Database Architecture & Performance Optimization",
        "Custom Business Automation Dashboards",
        "Dedicated Engineering Team Augmentation"
      ],
      techStack: ["Microservices", "REST/GraphQL", "SQL/NoSQL", "Cloud Native"],
    },
  ];

  const filteredServices = servicesList.filter((srv) => {
    if (activeCategory === "all") return true;
    return srv.category === activeCategory;
  });

  // Agile 4-Step Process
  const processSteps = [
    {
      step: "01",
      codeTag: "discovery_spec.rfc",
      title: "Discovery & Architecture Spec",
      desc: "We analyze your business objectives, map technical requirements, draft architectural RFCs, and define database schemas.",
    },
    {
      step: "02",
      codeTag: "figma_tokens.json",
      title: "UI/UX & Design Systems",
      desc: "Our designers craft interactive, high-fidelity prototypes and design tokens for client review before writing production code.",
    },
    {
      step: "03",
      codeTag: "agile_sprint.tsx",
      title: "Type-Safe Sprint Development",
      desc: "Weekly sprints with continuous automated testing, clean modular code, and milestone staging environments for real-time progress.",
    },
    {
      step: "04",
      codeTag: "prod_deploy.yml",
      title: "Zero-Downtime Deployment & SLA",
      desc: "Zero-downtime production deployment, multi-AZ cloud setup, security hardening, and ongoing 24/7 SLA infrastructure support.",
    },
  ];

  return (
    <div className="services-page-root">
      {/* =========================================================================
          SERVICES HERO
         ========================================================================= */}
      <section className="services-hero-section tech-grid-pattern">
        <div className="services-glow-orb"></div>
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>// Architectural Capabilities</span>
          </div>
          <h1 className="services-main-title">
            Enterprise <span className="gradient-text-red">Software Engineering</span> &amp; Cloud Solutions
          </h1>
          <p className="services-hero-sub">
            From modern full-stack web platforms and cross-platform mobile apps to specialized desktop software
            and automated DevOps pipelines, we engineer software designed to scale without technical debt.
          </p>

          {/* Filter Pills */}
          <div className="services-filter-tabs">
            {[
              { id: "all", label: "All IT Services" },
              { id: "development", label: "Software & Web Development" },
              { id: "growth", label: "Marketing & UI/UX Design" },
              { id: "infrastructure", label: "Cloud, DevOps & AI" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`filter-tab-btn ${activeCategory === tab.id ? "active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES DETAILED CARDS
         ========================================================================= */}
      <section className="services-cards-section">
        <div className="container">
          <div className="services-detailed-grid">
            {filteredServices.map((service) => (
              <div key={service.id} className="service-detail-card glass-panel">
                <div className="detail-header">
                  <div className="service-icon-box large">{service.icon}</div>
                  <div className="header-meta">
                    <span className="service-badge-pill">{service.badge}</span>
                    <h3>{service.title}</h3>
                  </div>
                </div>

                <div className="service-cli-snippet">
                  <span className="cli-prompt">&gt;_</span>
                  <code>{service.cliSnippet}</code>
                </div>

                <p className="tagline-text">{service.tagline}</p>
                <p className="service-body-desc">{service.desc}</p>

                <div className="deliverables-box">
                  <h4>Key Deliverables:</h4>
                  <ul className="deliverables-list">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx}>
                        <FaCheckCircle className="check-bullet-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="card-bottom-row">
                  <div className="tech-tags-list">
                    {service.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="tech-tag-chip">
                        [ {tech} ]
                      </span>
                    ))}
                  </div>

                  <Link to="/contact" className="service-action-btn">
                    <span className="btn-dev-sign">&gt;_</span>
                    <span>Inquire Specifications</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          4-STEP AGILE DELIVERY PROCESS
         ========================================================================= */}
      <section className="delivery-process-section tech-grid-pattern">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>// Agile SDLC Protocol</span>
            </div>
            <h2>The 4-Step Agile Delivery Lifecycle</h2>
            <p>A proven engineering framework that turns your concept into market-ready software.</p>
          </div>

          <div className="process-timeline-grid">
            {processSteps.map((step, idx) => (
              <div key={idx} className="process-step-card glass-panel">
                <div className="process-card-top">
                  <div className="step-num-badge">{step.step}</div>
                  <span className="step-code-file">{step.codeTag}</span>
                </div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                <div className="step-card-status">
                  <span className="step-dot-ok"></span>
                  <span>PHASE_VERIFIED</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONSULTATION & PROMOTION BANNER
         ========================================================================= */}
      <section className="services-cta-section">
        <div className="container">
          <div className="service-appointment-card glass-panel">
            <div className="card-left">
              <div className="badge-pill">
                <span className="pulse-dot"></span>
                <span>Free 30-Min Discovery</span>
              </div>
              <h2>Book a Technical Discovery Session Today</h2>
              <p>
                Discuss your project roadmap, architecture requirements, and timeline with our
                engineering leads. Get actionable technical recommendations with zero obligations.
              </p>
            </div>

            <div className="card-right">
              <div className="contact-quick-box">
                <a href="tel:+919522886131" className="quick-btn-phone">
                  <FaPhoneAlt />
                  <div>
                    <small>Direct Engineering Desk</small>
                    <span>+91 95228 86131</span>
                  </div>
                </a>

                <a
                  href="https://wa.me/919522886131?text=Hi%20InstaTech%20Hub,%20I%20would%20like%20to%20discuss%20an%20IT%20service"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="quick-btn-whatsapp"
                >
                  <FaWhatsapp />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>

              <Link to="/contact" className="btn-primary w-full text-center">
                <span>Schedule Project Meeting</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Service;
