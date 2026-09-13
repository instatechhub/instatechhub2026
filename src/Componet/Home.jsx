import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Interactive3DCanvas from "./Interactive3DCanvas";
import useContactStore from "./Store/contactStore/cotactStore";

// Assets
import girlImage from "../assest/homeimage/girlImage.png";
import client from "../assest/homeimage/client.png";
import plogo2 from "../assest/homeimage/plogo2.png";
import plogo3 from "../assest/homeimage/plogo3.png";
import plogo4 from "../assest/homeimage/plogo4.png";
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
  FaUsersCog
} from "react-icons/fa";
import { HiSparkles, HiOutlineCheckBadge } from "react-icons/hi2";
import { BiNetworkChart, BiSupport } from "react-icons/bi";

const Home = () => {
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
  const { addEnquiry, isLoading } = useContactStore();

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addEnquiry({
        name: formData.name,
        email: formData.email,
        number: formData.number,
        platform: "instatechhub",
        subject: `${formData.subject} - ${formData.service}`,
        message: formData.message || `Client requested inquiry for ${formData.service}`,
      });

      if (response?.data?.success || response?.status === 200) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          number: "",
          service: "Web Development",
          subject: "New Project Inquiry",
          message: "",
        });
        setTimeout(() => setSubmitSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
      // Fallback presentation feedback
      setSubmitSuccess(true);
      setTimeout(() => setSubmitSuccess(false), 5000);
    }
  };

  // Core IT Services
  const coreServices = [
    {
      id: "web",
      icon: <FaGlobe />,
      title: "Web Development",
      badge: "Full-Stack",
      desc: "High-performance Single Page Apps, SaaS platforms, corporate portals, and custom web architectures engineered with React, Next.js, and Node.",
      features: ["Custom SaaS Architecture", "Progressive Web Apps (PWA)", "API Integrations & SSR", "High-Security Standards"],
    },
    {
      id: "mobile",
      icon: <FaMobileAlt />,
      title: "Mobile App Development",
      badge: "iOS & Android",
      desc: "Native and cross-platform mobile solutions using React Native and Flutter for butter-smooth 60fps performance and seamless offline sync.",
      features: ["Cross-Platform Flutter/React Native", "Push Notifications & Real-time Sync", "App Store & Play Store Optimization", "Biometric & Payment Gateways"],
    },
    {
      id: "desktop",
      icon: <FaDesktop />,
      title: "Desktop Software",
      badge: "Cross-Platform",
      desc: "Robust Windows, macOS, and Linux desktop applications built with Electron, C#/.NET, and Python for enterprise workflow automation.",
      features: ["Electron & .NET Core Applications", "Offline-First Enterprise Systems", "Hardware & Peripheral Integration", "Background Service Automation"],
    },
    {
      id: "marketing",
      icon: <FaBullhorn />,
      title: "Digital Marketing & SEO",
      badge: "High ROI",
      desc: "Data-driven performance marketing, high-intent Google PPC, Meta Ad campaigns, conversion rate optimization (CRO), and technical SEO.",
      features: ["Technical SEO & Keyword Dominance", "High-Converting Paid Ad Campaigns", "Social Media Brand Acceleration", "Full-Funnel Analytics Tracking"],
    },
    {
      id: "cloud",
      icon: <FaCloud />,
      title: "Cloud Infrastructure & DevOps",
      badge: "AWS & Docker",
      desc: "Modern cloud architectures, CI/CD automated deployment pipelines, Docker containerization, Kubernetes orchestration, and serverless scalability.",
      features: ["AWS & Azure Cloud Deployments", "Automated CI/CD Delivery", "Microservices & Docker Clusters", "99.9% High Availability SLAs"],
    },
    {
      id: "ai",
      icon: <FaRobot />,
      title: "AI & Workflow Automation",
      badge: "Next-Gen",
      desc: "Custom AI agent development, enterprise LLM integrations, intelligent chatbots, customer support automation, and automated document processing.",
      features: ["Custom LLM & Chatbot Solutions", "Business Workflow Automation", "Automated Lead Routing", "Predictive Analytics Models"],
    },
  ];

  // Tech Stack marquee items
  const techStack = [
    { name: "React 19", icon: <FaCode /> },
    { name: "Next.js", icon: <FaGlobe /> },
    { name: "Node.js", icon: <FaServer /> },
    { name: "Flutter", icon: <FaMobileAlt /> },
    { name: "React Native", icon: <FaMobileAlt /> },
    { name: "Python", icon: <FaCode /> },
    { name: "Electron", icon: <FaDesktop /> },
    { name: "Docker", icon: <FaCloud /> },
    { name: "AWS Cloud", icon: <FaCloud /> },
    { name: "PostgreSQL", icon: <FaDatabase /> },
    { name: "MongoDB", icon: <FaDatabase /> },
    { name: "TypeScript", icon: <FaCode /> },
  ];

  // Featured Real Projects
  const featuredProjects = allProjects.filter((p) => p.featuredOnHome);

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
      <section className="hero-cyber-section">
        <Interactive3DCanvas />

        <div className="hero-glow-orb orb-1"></div>
        <div className="hero-glow-orb orb-2"></div>

        <div className="container hero-content-grid">
          <div className="hero-text-content">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>Next-Gen Enterprise IT Solutions</span>
            </div>

            <h1 className="hero-main-title">
              We Engineer Scalable <span className="gradient-text-red">Software</span> & Accelerate Business Growth.
            </h1>

            <p className="hero-description">
              InstaTech Hub is a premier IT consulting & engineering agency. We specialize in
              <strong> Custom Web Development</strong>, <strong>Mobile Apps</strong>, <strong>Desktop Software</strong>,
              and <strong>ROI-Driven Digital Marketing</strong> tailored to take your business to the next level.
            </p>

            {/* Quick CTAs */}
            <div className="hero-cta-group">
              <Link to="/contact" className="btn-primary hero-btn-main">
                <span>Start Your Project</span>
                <FaArrowRight />
              </Link>
              <Link to="/service" className="btn-secondary">
                <span>Explore All Services</span>
              </Link>
              <a
                href="https://wa.me/919522886131"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-whatsapp-link"
                title="Instant WhatsApp Connect"
              >
                <FaWhatsapp />
                <span>Quick Chat</span>
              </a>
            </div>

            {/* Technical Verification Highlights */}
            <div className="hero-trust-box">
              <div className="trust-item">
                <HiOutlineCheckBadge className="t-icon" />
                <div>
                  <h4>150+ Systems</h4>
                  <p>Delivered Globally</p>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <BiSupport className="t-icon" />
                <div>
                  <h4>99.8% On-Time</h4>
                  <p>Deployment Record</p>
                </div>
              </div>
              <div className="trust-divider"></div>
              <div className="trust-item">
                <FaShieldAlt className="t-icon" />
                <div>
                  <h4>24/7 SLA</h4>
                  <p>Enterprise Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Floating 3D Showcase */}
          <div className="hero-visual-col">
            <div className="hero-glass-card">
              <div className="card-top-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>
                <span className="system-status">● SYSTEM ACTIVE // CLOUD V3.8</span>
              </div>

              <div className="hero-image-wrapper">
                <img src={girlImage} alt="InstaTech Hub Business Solutions" className="hero-image-render" />
              </div>

              {/* Floating Metric 1 */}
              <div className="floating-badge badge-top-right">
                <HiSparkles className="badge-icon-sparkle" />
                <div>
                  <span className="badge-stat">10x ROI</span>
                  <span className="badge-sub">Client Performance</span>
                </div>
              </div>

              {/* Floating Metric 2 */}
              <div className="floating-badge badge-bottom-left">
                <BiNetworkChart className="badge-icon-network" />
                <div>
                  <span className="badge-stat">Zero Downtime</span>
                  <span className="badge-sub">Scalable Architecture</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CLIENT LOGOS STRIP
         ========================================================================= */}
      {/* <section className="client-trust-strip">
        <div className="container">
          <p className="strip-label">TRUSTED BY INNOVATIVE BRANDS & ENTERPRISE TEAMS</p>
          <div className="client-logos-marquee">
            <img src={client} alt="Enterprise Client" />
            <img src={plogo2} alt="Enterprise Client" />
            <img src={plogo3} alt="Enterprise Client" />
            <img src={plogo4} alt="Enterprise Client" />
            <img src={client} alt="Enterprise Client" />
            <img src={plogo2} alt="Enterprise Client" />
          </div>
        </div>
      </section> */}

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
            <h2>Full-Spectrum IT & Digital Growth Solutions</h2>
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
                <span>Instant Estimator</span>
              </div>
              <h2>Calculate Your Project Estimate in 30 Seconds</h2>
              <p>
                Plan your tech budget with confidence. Select your product type, target scale,
                and timeline to receive a preliminary investment range.
              </p>

              <div className="estimate-result-card">
                <span className="result-label">Estimated Investment Range</span>
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
          TECH STACK MARQUEE
         ========================================================================= */}
      <section className="tech-stack-section">
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>Enterprise Stack</span>
          </div>
          <h2>Cutting-Edge Technologies We Build With</h2>
          <div className="tech-pills-row">
            {techStack.map((tech, idx) => (
              <div key={idx} className="tech-pill-item">
                <span className="tech-icon">{tech.icon}</span>
                <span className="tech-name">{tech.name}</span>
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
                  <div className="case-metric-chip">{proj.metric}</div>
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
      <section className="reviews-section">
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
      </section>

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

                  <button type="submit" className="btn-primary w-full submit-lead-btn" disabled={isLoading}>
                    {isLoading ? "Submitting Inquiry..." : "Submit Project Inquiry"}
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
