import React, { useState } from "react";
import "./About.css";
import { Link } from "react-router-dom";

// Assets
import rightImage from "../assest/homeimage/patner.jpg";
import leftImage from "../assest/aboutimage/image.jpg";
import client from "../assest/homeimage/client.png";
import plogo2 from "../assest/homeimage/plogo2.png";
import plogo3 from "../assest/homeimage/plogo3.png";
import plogo4 from "../assest/homeimage/plogo4.png";
import userimg from "../assest/homeimage/user1.png";
import userimg1 from "../assest/homeimage/user2.png";

// Icons
import {
  FaRocket,
  FaShieldAlt,
  FaCode,
  FaLightbulb,
  FaUsers,
  FaAward,
  FaArrowRight,
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaLaptopCode,
  FaCloudDownloadAlt,
  FaHandshake
} from "react-icons/fa";
import { HiSparkles, HiOutlineCheckBadge } from "react-icons/hi2";

const About = () => {
  const [activeFaq, setActiveFaq] = useState(0);

  const toggleFAQ = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  // Strategic Engineering Pillars
  const pillars = [
    {
      codeTag: "01_clean_architecture.ts",
      icon: <FaCode />,
      title: "Clean Modern Engineering",
      desc: "We write clean, modular, and heavily tested codebases using React 19, Next.js, Node, and Flutter to ensure zero technical debt.",
    },
    {
      codeTag: "02_cloud_infrastructure.yml",
      icon: <FaShieldAlt />,
      title: "Enterprise Architecture",
      desc: "Scalable microservices, automated CI/CD pipelines, robust database indexing, and 99.99% uptime deployment infrastructures.",
    },
    {
      codeTag: "03_agile_sprints.sh",
      icon: <FaRocket />,
      title: "Rapid Agile Sprints",
      desc: "Weekly sprints with transparent client demos, real-time collaboration, and predictable delivery cycles that guarantee on-time launches.",
    },
    {
      codeTag: "04_growth_engine.py",
      icon: <FaLightbulb />,
      title: "Business Growth Driven",
      desc: "We don't just build code; we engineer software that converts visitors into customers, cuts operational costs, and drives real revenue.",
    },
  ];

  // Core Technical Leadership (Enterprise roles)
  const leadershipTeam = [
    {
      name: "Senior Solutions Architect",
      role: "Enterprise Cloud & Web Systems",
      exp: "8+ Years Engineering Experience",
      skills: ["Cloud Architecture", "Next.js 15", "PostgreSQL", "System Design"],
      img: userimg,
    },
    {
      name: "Lead Full-Stack Engineer",
      role: "Distributed Systems & API Design",
      exp: "6+ Years Modern Full-Stack",
      skills: ["React 19", "Node.js v22", "Docker", "Microservices"],
      img: userimg1,
    },
    {
      name: "Mobile & Desktop Solutions Lead",
      role: "Cross-Platform Engineering",
      exp: "5+ Years Cross-Platform Development",
      skills: ["Flutter 3.x", "React Native", "Electron", "C#/.NET"],
      img: userimg,
    },
    {
      name: "Digital Growth & Analytics Lead",
      role: "Performance Marketing & CRO",
      exp: "6+ Years Data-Driven Growth",
      skills: ["Technical SEO", "Google PPC", "Meta Ads", "Conversion CRO"],
      img: userimg1,
    },
  ];

  // Company Milestones
  const milestones = [
    {
      year: "git tag v1.0.0",
      title: "Agency Foundation & Core Web",
      desc: "Established high-performance engineering standards delivering scalable SaaS portals and modern web applications.",
    },
    {
      year: "git tag v2.0.0",
      title: "Mobile & Desktop Expansion",
      desc: "Broadened delivery capabilities with cross-platform Flutter/React Native mobile applications and desktop software.",
    },
    {
      year: "git tag v3.0.0",
      title: "DevOps & Cloud Orchestration",
      desc: "Adopted AWS/Azure microservices, containerization with Docker, and automated CI/CD pipelines for 99.99% uptime SLAs.",
    },
    {
      year: "git tag v3.8.0",
      title: "Global Enterprise Scale & AI",
      desc: "Now serving 150+ client systems worldwide with custom AI automations, digital growth engines, and 24/7 technical support.",
    },
  ];

  // FAQ Data
  const faqData = [
    {
      question: "What core IT services does InstaTech Hub provide?",
      answer:
        "InstaTech Hub is a full-lifecycle digital agency providing Custom Web Development, Cross-Platform Mobile Apps (iOS & Android), Desktop Software Engineering, Digital Marketing & Technical SEO, Cloud Infrastructure & DevOps, and Custom AI & Workflow Automation.",
    },
    {
      question: "How do you ensure project quality and on-time delivery?",
      answer:
        "We follow an agile sprint framework with 1-2 week milestone deliverables. Every sprint undergoes automated unit tests, cross-browser validation, and security reviews before staging demos with clients.",
    },
    {
      question: "Can you take over an existing legacy codebase or upgrade it?",
      answer:
        "Yes. We frequently modernize legacy codebases—migrating outdated stacks to modern frameworks like Vite, React, Next.js, and Node, while optimizing database queries and infrastructure costs.",
    },
    {
      question: "Do you offer ongoing post-launch maintenance and SLA support?",
      answer:
        "Absolutely. We offer tailored monthly maintenance SLAs that cover security patching, server performance monitoring, feature enhancements, and 24/7 emergency incident response.",
    },
    {
      question: "What makes your digital marketing different from traditional agencies?",
      answer:
        "Our digital marketing is deeply technical and data-driven. We align keyword strategies with conversion rate optimization (CRO), high-speed page performance, and custom analytics dashboards to maximize ROAS (Return on Ad Spend).",
    },
  ];

  return (
    <div className="about-page-root">
      {/* =========================================================================
          HERO BANNER
         ========================================================================= */}
      <section className="about-hero-section tech-grid-pattern">
        <div className="about-glow-orb"></div>
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>// Architectural Heritage</span>
          </div>
          <h1 className="about-main-title">
            Engineering Type-Safe Software, <br />
            <span className="gradient-text-red">Empowering Enterprise Scale.</span>
          </h1>
          <p className="about-hero-sub">
            InstaTech Hub is an enterprise IT agency committed to delivering robust,
            scalable software products and data-driven digital growth strategies for visionary companies.
          </p>

          <div className="about-stats-strip">
            <div className="about-stat-item">
              <h3 className="code-stat">150+</h3>
              <p>Production Deploys</p>
            </div>
            <div className="stat-separator"></div>
            <div className="about-stat-item">
              <h3 className="code-stat">99.99%</h3>
              <p>Uptime SLA Guarantee</p>
            </div>
            <div className="stat-separator"></div>
            <div className="about-stat-item">
              <h3 className="code-stat">12+</h3>
              <p>Global Markets Served</p>
            </div>
            <div className="stat-separator"></div>
            <div className="about-stat-item">
              <h3 className="code-stat">24/7</h3>
              <p>SLA Engineering Support</p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STORY & STRATEGY SECTION
         ========================================================================= */}
      <section className="about-story-section">
        <div className="container story-grid">
          <div className="story-image-col">
            <div className="story-glass-frame">
              <img src={leftImage} alt="InstaTech Hub Engineering Team" className="story-img" />
              <div className="story-float-card">
                <FaAward className="award-icon" />
                <div>
                  <strong>Enterprise IT Partner</strong>
                  <span>Committed to Excellence</span>
                </div>
              </div>
            </div>
          </div>

          <div className="story-text-col">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>Our Vision</span>
            </div>
            <h2>We Build Systems That Scale With Your Ambition</h2>
            <p className="lead-para">
              Founded on the belief that modern software should be robust, lightning-fast,
              and conversion-focused, InstaTech Hub bridges high-level architectural engineering
              with strategic market growth.
            </p>
            <p>
              Whether you are an ambitious startup launching an MVP or an established enterprise
              upgrading legacy workflows, our cross-functional engineering teams bring deep technical
              rigor, agile velocity, and relentless focus on measurable business ROI.
            </p>

            <div className="story-checklist">
              <div className="check-item">
                <FaCheckCircle className="c-icon" />
                <span>Modern React, Next.js, Node & Flutter architectures</span>
              </div>
              <div className="check-item">
                <FaCheckCircle className="c-icon" />
                <span>Zero vendor lock-in with clean, maintainable codebases</span>
              </div>
              <div className="check-item">
                <FaCheckCircle className="c-icon" />
                <span>Strict security compliance and performance benchmarks</span>
              </div>
            </div>

            <Link to="/service" className="btn-primary mt-20">
              <span>Discover Our Capabilities</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CORE PILLARS
         ========================================================================= */}
      <section className="about-pillars-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>Our Philosophy</span>
            </div>
            <h2>The Four Pillars of Our Engineering Culture</h2>
            <p>Every line of code and every digital campaign we create is guided by these principles.</p>
          </div>

          <div className="pillars-grid">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card glass-panel">
                <div className="pillar-header-row">
                  <div className="pillar-icon-wrap">{pillar.icon}</div>
                  <span className="pillar-code-badge">{pillar.codeTag}</span>
                </div>
                <h3>{pillar.title}</h3>
                <p>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TECHNICAL LEADERSHIP
         ========================================================================= */}
      <section className="about-team-section tech-grid-pattern">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>// Core Engineering Team</span>
            </div>
            <h2>Enterprise Technical Leadership</h2>
            <p>
              Our multidisciplinary engineering and growth leads deliver world-class technical execution.
            </p>
          </div>

          <div className="team-grid">
            {leadershipTeam.map((member, idx) => (
              <div key={idx} className="team-card glass-panel">
                <div className="team-avatar-box">
                  <img src={member.img} alt={member.name} />
                  <div className="team-badge-pill">{member.exp}</div>
                </div>
                <div className="team-info">
                  <h3>{member.name}</h3>
                  <span className="team-role">{member.role}</span>

                  <div className="team-skills">
                    {member.skills.map((skill, sIdx) => (
                      <span key={sIdx} className="team-skill-tag">
                        [ {skill} ]
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          TIMELINE & MILESTONES
         ========================================================================= */}
      <section className="about-milestones-section">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>// Release Roadmap</span>
            </div>
            <h2>Evolution of Our Technical Capabilities</h2>
          </div>

          <div className="milestones-grid">
            {milestones.map((m, idx) => (
              <div key={idx} className="milestone-card glass-panel">
                <span className="milestone-year">{m.year}</span>
                <h3>{m.title}</h3>
                <p>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          FAQ ACCORDION
         ========================================================================= */}
      <section className="about-faq-section tech-grid-pattern">
        <div className="container">
          <div className="section-head text-center">
            <div className="badge-pill">
              <span className="pulse-dot"></span>
              <span>// Technical FAQ</span>
            </div>
            <h2>Frequently Asked Questions</h2>
            <p>Everything you need to know about partnering with InstaTech Hub.</p>
          </div>

          <div className="faq-accordion-wrap">
            {faqData.map((faq, index) => {
              const isOpen = activeFaq === index;
              return (
                <div
                  key={index}
                  className={`faq-item glass-panel ${isOpen ? "open" : ""}`}
                  onClick={() => toggleFAQ(index)}
                >
                  <div className="faq-question-bar">
                    <div className="faq-q-text">
                      <span className="cli-prompt">&gt;_</span>
                      <h3>{faq.question}</h3>
                    </div>
                    <div className="faq-toggle-icon">
                      {isOpen ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>
                  {isOpen && (
                    <div className="faq-answer-body">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* CTA Banner */}
          <div className="about-cta-card glass-panel text-center">
            <h2>Ready to Elevate Your Technology Infrastructure?</h2>
            <p>Let's collaborate on your next digital breakthrough.</p>
            <div className="about-cta-btns">
              <Link to="/contact" className="btn-primary">
                <span className="quote-cli-prompt">&gt;_</span>
                <span>Schedule a Technical Call</span>
                <FaArrowRight />
              </Link>
              <a href="tel:+919522886131" className="btn-secondary">
                <span>Call +91 95228 86131</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
