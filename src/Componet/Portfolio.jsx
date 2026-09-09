import React, { useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";

// Assets
import project1 from "../assest/homeimage/project1.jpg";
import project2 from "../assest/homeimage/project2.jpg";
import project3 from "../assest/homeimage/project3.jpg";
import project4 from "../assest/homeimage/project4.jpg";
import project5 from "../assest/homeimage/project5.jpg";
import project6 from "../assest/homeimage/project6.jpg";

// Icons
import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaRocket,
  FaCode,
  FaChartLine,
  FaLaptopCode
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const portfolioProjects = [
    {
      id: 1,
      title: "FinTech Cloud Banking & Analytics Dashboard",
      category: "web",
      categoryName: "Web Application",
      image: project1,
      metric: "+310% Latency Improvement",
      overview:
        "Engineered a high-frequency financial analytics dashboard delivering real-time transactions, currency conversions, and automated audit reporting for enterprise financial advisors.",
      challenge:
        "The client had an older legacy platform suffering from 4-second API latencies and data sync bottlenecks during high-volume market hours.",
      solution:
        "Re-architected the frontend using React and Vite with WebSocket streaming, backed by Node.js microservices and Redis caching to achieve sub-100ms updates.",
      results: [
        "99.99% Availability during peak trading sessions",
        "Sub-100ms live chart render times",
        "Automated compliance reporting saving 15 hours weekly"
      ],
      techStack: ["React", "Node.js", "WebSockets", "PostgreSQL", "Redis", "AWS"],
    },
    {
      id: 2,
      title: "LogiTrack Enterprise Logistics & Fleet ERP",
      category: "desktop",
      categoryName: "Desktop & Web Software",
      image: project2,
      metric: "99.98% Operational Uptime",
      overview:
        "Comprehensive cross-platform desktop ERP and dispatching software managing multi-fleet telemetry, barcode scanning, route optimization, and driver payroll.",
      challenge:
        "Remote dispatchers needed offline-capable desktop software that could sync gracefully whenever warehouse connectivity dipped.",
      solution:
        "Built with Electron and Python, utilizing SQLite local persistence and background workers with automated bidirectional cloud synchronization.",
      results: [
        "Eliminated shipment tracking discrepancies by 94%",
        "Offline-first architecture handling 20,000+ daily package updates",
        "Integrated hardware thermal label printers and Bluetooth scanners"
      ],
      techStack: ["Electron", "Python", "SQLite", "Docker", "REST API"],
    },
    {
      id: 3,
      title: "AuraCare Telemedicine & Patient Portal",
      category: "mobile",
      categoryName: "Mobile App (iOS/Android)",
      image: project3,
      metric: "50,000+ Active Patients",
      overview:
        "HIPAA-ready cross-platform mobile healthcare app connecting patients with licensed specialists via encrypted video consults and digital prescriptions.",
      challenge:
        "Providing low-bandwidth WebRTC video consultation without dropouts across heterogeneous Android and iOS devices in suburban areas.",
      solution:
        "Developed with Flutter for cross-platform efficiency, WebRTC adaptive video streaming, and automated SMS appointment reminders.",
      results: [
        "Over 50,000 active registered patients across 8 cities",
        "4.8/5 average rating on Google Play Store & Apple App Store",
        "Under 2-minute doctor consultation connection time"
      ],
      techStack: ["Flutter", "WebRTC", "Firebase", "Node.js", "GCP"],
    },
    {
      id: 4,
      title: "OmniCart High-Scale E-Commerce Ecosystem",
      category: "web",
      categoryName: "Web & Digital Marketing",
      image: project4,
      metric: "4.8x Return on Ad Spend (ROAS)",
      overview:
        "Modern headless Next.js e-commerce storefront with sub-second page transitions, integrated dynamic inventory, and multi-channel marketing campaigns.",
      challenge:
        "High cart abandonment rate caused by sluggish mobile checkouts and disorganized paid ad targeting.",
      solution:
        "Rebuilt store as a PWA with 1-click mobile checkouts, combined with Google Shopping Ads and dynamic retargeting funnels.",
      results: [
        "+185% increase in mobile checkout conversion rate",
        "4.8x ROAS on monthly advertising spend",
        "0.6s average mobile page speed index"
      ],
      techStack: ["Next.js", "Tailored CSS", "Stripe API", "Google Ads", "Meta Ads"],
    },
    {
      id: 5,
      title: "CoreFlow SaaS Project & Resource Manager",
      category: "web",
      categoryName: "Web Application",
      image: project5,
      metric: "+240% Team Productivity",
      overview:
        "Cloud-native project planning SaaS with interactive Gantt charts, sprint poker, automated Slack notifications, and enterprise role-based permissions.",
      challenge:
        "Managing complex collaborative states and real-time cursor tracking across distributed remote teams.",
      solution:
        "Engineered with React 19, Zustand state management, and optimized canvas rendering for complex project dependency graphs.",
      results: [
        "Adopted by 30+ corporate teams in first quarter",
        "Zero UI lag when rendering 5,000+ tasks simultaneously",
        "Seamless integration with GitHub, Jira, and Slack"
      ],
      techStack: ["React", "Zustand", "Node.js", "Docker", "AWS ECS"],
    },
    {
      id: 6,
      title: "PulseWave Smart Health & Fitness Companion",
      category: "mobile",
      categoryName: "Mobile App (iOS/Android)",
      image: project6,
      metric: "120k+ Workouts Logged",
      overview:
        "Bluetooth-connected fitness application tracking real-time vitals, heart rate zones, personalized AI meal recommendations, and community leaderboards.",
      challenge:
        "Maintaining background Bluetooth Low Energy (BLE) sync without draining device battery.",
      solution:
        "Implemented efficient native background BLE protocols in React Native with localized batching and SQLite caching.",
      results: [
        "60% reduction in battery consumption compared to previous build",
        "120,000+ active workout logs recorded in 6 months",
        "Featured on App Store 'New & Noteworthy' health category"
      ],
      techStack: ["React Native", "BLE API", "Node.js", "MongoDB", "Redux"],
    },
  ];

  const filtered = portfolioProjects.filter((item) => {
    if (activeCategory === "all") return true;
    return item.category === activeCategory;
  });

  return (
    <div className="portfolio-page-root">
      {/* =========================================================================
          HERO BANNER
         ========================================================================= */}
      <section className="portfolio-hero-section">
        <div className="portfolio-glow-orb"></div>
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>Client Portfolio</span>
          </div>
          <h1 className="portfolio-main-title">
            Featured <span className="gradient-text-red">Engineering Work</span> & Case Studies
          </h1>
          <p className="portfolio-hero-sub">
            Explore how InstaTech Hub engineers scalable web systems, cross-platform mobile apps,
            desktop software, and high-ROI digital campaigns for visionary businesses.
          </p>

          {/* Filter Pills */}
          <div className="portfolio-filter-row">
            {[
              { id: "all", label: "All Projects" },
              { id: "web", label: "Web Applications" },
              { id: "mobile", label: "Mobile Apps" },
              { id: "desktop", label: "Desktop Software" },
            ].map((tab) => (
              <button
                key={tab.id}
                className={`p-filter-btn ${activeCategory === tab.id ? "active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          PORTFOLIO GRID
         ========================================================================= */}
      <section className="portfolio-grid-section">
        <div className="container">
          <div className="portfolio-case-grid">
            {filtered.map((proj) => (
              <div
                key={proj.id}
                className="portfolio-item-card glass-panel"
                onClick={() => setSelectedProject(proj)}
              >
                <div className="p-img-box">
                  <img src={proj.image} alt={proj.title} />
                  <div className="p-metric-badge">{proj.metric}</div>
                  <div className="p-hover-overlay">
                    <span className="view-case-tag">
                      <span>View Case Study</span>
                      <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>

                <div className="p-card-body">
                  <span className="p-category-tag">{proj.categoryName}</span>
                  <h3>{proj.title}</h3>
                  <p className="p-overview-snippet">{proj.overview}</p>

                  <div className="p-card-footer">
                    <div className="p-tags-row">
                      {proj.techStack.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="p-tag-pill">
                          {t}
                        </span>
                      ))}
                      {proj.techStack.length > 3 && (
                        <span className="p-tag-pill more">+{proj.techStack.length - 3}</span>
                      )}
                    </div>
                    <span className="p-read-more-btn">
                      <span>Deep Dive</span>
                      <FaArrowRight />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          CASE STUDY DETAIL MODAL
         ========================================================================= */}
      {selectedProject && (
        <div className="p-modal-backdrop" onClick={() => setSelectedProject(null)}>
          <div className="p-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="p-modal-close" onClick={() => setSelectedProject(null)}>
              <FaTimes />
            </button>

            <div className="p-modal-header">
              <span className="p-category-tag">{selectedProject.categoryName}</span>
              <h2>{selectedProject.title}</h2>
              <div className="p-modal-metric">
                <HiSparkles /> {selectedProject.metric}
              </div>
            </div>

            <div className="p-modal-image-wrap">
              <img src={selectedProject.image} alt={selectedProject.title} />
            </div>

            <div className="p-modal-body">
              <div className="p-section-block">
                <h4>Project Overview</h4>
                <p>{selectedProject.overview}</p>
              </div>

              <div className="p-dual-grid">
                <div className="p-section-block">
                  <h4>The Challenge</h4>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="p-section-block">
                  <h4>Engineering Solution</h4>
                  <p>{selectedProject.solution}</p>
                </div>
              </div>

              <div className="p-section-block">
                <h4>Key Measurable Results</h4>
                <ul className="results-list">
                  {selectedProject.results.map((res, idx) => (
                    <li key={idx}>
                      <FaCheckCircle className="check-icon" />
                      <span>{res}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-section-block">
                <h4>Technologies Utilized</h4>
                <div className="p-tags-row modal-tags">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="p-tag-pill tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-modal-cta">
                <Link
                  to="/contact"
                  className="btn-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  <span>Inquire Similar Project</span>
                  <FaArrowRight />
                </Link>
                <a
                  href="https://wa.me/919522886131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Chat Technical Specs</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PROMOTION & NEWSLETTER BANNER
         ========================================================================= */}
      <section className="portfolio-cta-section">
        <div className="container">
          <div className="p-subscribe-card glass-panel text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>Collaborate With Us</span>
            </div>
            <h2>Have a Vision Ready for Engineering?</h2>
            <p>
              Join ambitious leaders who trust InstaTech Hub for fast, reliable,
              and high-converting software delivery.
            </p>
            <div className="p-cta-btn-group">
              <Link to="/contact" className="btn-primary">
                <span>Start Your Project</span>
                <FaArrowRight />
              </Link>
              <a href="tel:+919522886131" className="btn-secondary">
                <span>Direct Line: +91 95228 86131</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
