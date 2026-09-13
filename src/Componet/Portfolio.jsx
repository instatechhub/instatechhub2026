import React, { useState } from "react";
import "./Portfolio.css";
import { Link } from "react-router-dom";
import { allProjects } from "../data/projectsData";

// Icons
import {
  FaArrowRight,
  FaTimes,
  FaCheckCircle,
  FaExternalLinkAlt,
  FaGlobe,
  FaMobileAlt,
  FaDatabase,
  FaBuilding,
  FaGooglePlay
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = [
    { id: "all", label: "All Projects", count: allProjects.length },
    { id: "web", label: "Web Applications", count: allProjects.filter((p) => p.category === "web").length },
    { id: "mobile", label: "Mobile Apps", count: allProjects.filter((p) => p.category === "mobile").length },
    { id: "crm", label: "CRM & ERP Systems", count: allProjects.filter((p) => p.category === "crm").length },
  ];

  const filtered = allProjects.filter((item) => {
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
            Featured <span className="gradient-text-red">Engineering Work</span> & Production Projects
          </h1>
          <p className="portfolio-hero-sub">
            Explore live production web systems, high-growth mobile applications, and
            enterprise CRM platforms engineered by InstaTech Hub.
          </p>

          {/* Category Filter Row */}
          <div className="portfolio-filter-row">
            {categories.map((tab) => (
              <button
                key={tab.id}
                className={`p-filter-btn ${activeCategory === tab.id ? "active" : ""}`}
                onClick={() => setActiveCategory(tab.id)}
              >
                <span>{tab.label}</span>
                <span className="p-filter-count">({tab.count})</span>
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

                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-live-link-chip ${proj.linkType === "playstore" ? "playstore" : ""}`}
                      onClick={(e) => e.stopPropagation()}
                      title={proj.linkType === "playstore" ? `Open ${proj.title} on Google Play Store` : `Visit ${proj.title} live`}
                    >
                      <span className="live-dot"></span>
                      <span>{proj.linkType === "playstore" ? "Google Play" : "Visit Live"}</span>
                      {proj.linkType === "playstore" ? <FaGooglePlay /> : <FaExternalLinkAlt />}
                    </a>
                  )}

                  <div className="p-hover-overlay">
                    <span className="view-case-tag">
                      <span>View Case Study</span>
                      <FaExternalLinkAlt />
                    </span>
                  </div>
                </div>

                <div className="p-card-body">
                  <div className="p-card-header-meta">
                    <span className="p-category-tag">{proj.categoryName}</span>
                    <span className="p-card-brand-badge">
                      <FaBuilding /> {proj.brandName}
                    </span>
                  </div>

                  <h3 className="p-project-title">
                    <span className="p-num-badge">#{proj.id}</span>
                    <span>{proj.title}</span>
                  </h3>
                  <p className="p-subtitle">{proj.subtitle}</p>
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

          {filtered.length === 0 && (
            <div className="p-no-results text-center">
              <p>No projects found for the selected filter.</p>
              <button
                className="btn-primary"
                onClick={() => {
                  setActiveCategory("all");
                }}
              >
                Reset All Filters
              </button>
            </div>
          )}
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
              <div className="p-modal-meta-row">
                <span className="p-category-tag">{selectedProject.categoryName}</span>
                <span className="p-modal-brand-tag">
                  <FaBuilding /> Client Brand: <strong>{selectedProject.brandName}</strong>
                </span>
                {selectedProject.liveUrl ? (
                  <span className="p-modal-live-indicator">
                    <span className="live-dot"></span>
                    {selectedProject.linkType === "playstore"
                      ? "Available on Google Play"
                      : "Live in Production"}
                  </span>
                ) : (
                  <span className="p-modal-dev-indicator">
                    {selectedProject.category === "mobile"
                      ? "Upcoming on App Stores"
                      : "Enterprise Cloud System"}
                  </span>
                )}
              </div>
              <h2>{selectedProject.title}</h2>
              <p className="p-modal-sub">{selectedProject.subtitle}</p>
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
                  <h4>The Business Challenge</h4>
                  <p>{selectedProject.challenge}</p>
                </div>
                <div className="p-section-block">
                  <h4>Our Engineering Solution</h4>
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
                <h4>Technologies & Tools Utilized</h4>
                <div className="p-tags-row modal-tags">
                  {selectedProject.techStack.map((tech, idx) => (
                    <span key={idx} className="p-tag-pill tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-modal-cta">
                {selectedProject.liveUrl && (
                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn-live-site ${selectedProject.linkType === "playstore" ? "btn-playstore" : ""}`}
                  >
                    {selectedProject.linkType === "playstore" ? <FaGooglePlay /> : <FaExternalLinkAlt />}
                    <span>
                      {selectedProject.linkType === "playstore"
                        ? "Open in Google Play Store"
                        : "Visit Live Website"}
                    </span>
                  </a>
                )}
                <Link
                  to="/contact"
                  className="btn-primary"
                  onClick={() => setSelectedProject(null)}
                >
                  <span>Inquire Similar Project</span>
                  <FaArrowRight />
                </Link>
                <a
                  href={`https://wa.me/919522886131?text=Hi%20InstaTech%20Hub,%20I%20am%20interested%20in%20a%20project%20similar%20to%20${encodeURIComponent(
                    selectedProject.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* =========================================================================
          PROMOTION & CTA BANNER
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
              Join ambitious businesses who trust InstaTech Hub for fast, reliable,
              and high-converting software and digital platforms.
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
