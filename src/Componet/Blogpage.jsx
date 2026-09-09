import React, { useState, useEffect } from "react";
import "./Blogpage.css";
import { Link } from "react-router-dom";

// Assets
import blogimage from "../assest/homeimage/blogimage.webp";
import blog1 from "../assest/homeimage/blog1.png";

// Icons
import {
  FaRegClock,
  FaUserAlt,
  FaCalendarAlt,
  FaArrowLeft,
  FaCheckCircle,
  FaShareAlt,
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaArrowRight
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Blogpage = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setScrollProgress((window.scrollY / totalHeight) * 100);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="blogpage-root">
      {/* Top Reading Progress Bar */}
      <div
        className="reading-progress-bar"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="container blogpage-container">
        {/* Breadcrumbs & Back link */}
        <div className="blogpage-breadcrumbs">
          <Link to="/blog" className="back-link">
            <FaArrowLeft /> Back to Insights
          </Link>
          <span className="b-sep">/</span>
          <span className="b-current">Technical SEO & Architecture</span>
        </div>

        {/* Article Header */}
        <header className="article-header">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>Core Update Breakdown</span>
          </div>

          <h1 className="article-title">
            How Google's March Core Algorithm Update Affects Enterprise Websites & Technical SEO Strategy
          </h1>

          <div className="article-meta-bar">
            <div className="meta-author">
              <FaUserAlt className="author-icon" />
              <span>InstaTech Hub Technical Research Desk</span>
            </div>
            <span className="meta-sep">•</span>
            <div className="meta-item">
              <FaCalendarAlt /> March 28, 2025
            </div>
            <span className="meta-sep">•</span>
            <div className="meta-item">
              <FaRegClock /> 6 min read
            </div>
          </div>
        </header>

        {/* Article Banner Image */}
        <div className="article-banner-wrap glass-panel">
          <img src={blogimage} alt="Google Core Update 2025" />
        </div>

        {/* Article Body & Sidebar Grid */}
        <div className="article-content-grid">
          {/* Main Article Content */}
          <main className="article-main-body">
            {/* Key Takeaways Callout */}
            <div className="key-takeaways-box glass-panel">
              <div className="takeaway-header">
                <HiSparkles className="t-sparkle" />
                <h3>Executive Summary & Key Takeaways</h3>
              </div>
              <ul>
                <li>
                  <FaCheckCircle className="chk-icon" />
                  <span>Google's March 2025 update heavily penalizes slow, bloated JavaScript bundles and low-depth content.</span>
                </li>
                <li>
                  <FaCheckCircle className="chk-icon" />
                  <span>Core Web Vitals (specifically INP - Interaction to Next Paint) now carry significantly higher ranking weight.</span>
                </li>
                <li>
                  <FaCheckCircle className="chk-icon" />
                  <span>Enterprises with modern, high-speed single page apps built on Vite, Next.js, or SSR saw average rank gains of +22%.</span>
                </li>
              </ul>
            </div>

            <h2>What Has Changed in Google's Algorithm?</h2>
            <p>
              Google has systematically rolled out its latest core algorithm update, targeting both
              content authenticity and deep technical performance metrics. Unlike previous iterations
              that focused predominantly on backlink quality, this update marks an architectural pivot:
              search bots are actively de-prioritizing websites with sluggish JavaScript rendering and
              high resource consumption.
            </p>

            <p>
              Websites operating on legacy monolithic frameworks with unoptimized client bundles and
              cumulative layout shifts are seeing significant volatility. Conversely, websites built
              with modern build tooling (such as Vite and Next.js SSR) that achieve 90+ Lighthouse
              scores are experiencing substantial indexation and visibility boosts.
            </p>

            <div className="article-quote-box">
              <blockquote>
                "Google is no longer evaluating page content in isolation; browser performance,
                instant user responsiveness, and clean semantic DOM hierarchy are now treated as direct
                ranking signals."
              </blockquote>
            </div>

            <h2>3 Critical Steps to Audit and Fortify Your Architecture</h2>
            <p>
              If your corporate web application or e-commerce platform experienced search traffic
              shifts following the rollout, follow this systematic engineering remediation protocol:
            </p>

            <div className="step-guide-card glass-panel">
              <span className="step-badge">Step 01</span>
              <h3>Audit Interaction to Next Paint (INP)</h3>
              <p>
                Evaluate your main thread blocking time. Replace heavy runtime libraries with modern,
                zero-dependency alternatives. Ensure UI event listeners respond within 50ms of user taps.
              </p>
            </div>

            <div className="step-guide-card glass-panel">
              <span className="step-badge">Step 02</span>
              <h3>Migrate Legacy Bundlers to Native ESM</h3>
              <p>
                Eliminate outdated Create-React-App and Webpack configs. Transition to Vite or Next.js to
                achieve tree-shaking, automated code-splitting, and sub-100ms asset delivery via HTTP/2 or HTTP/3.
              </p>
            </div>

            <div className="step-guide-card glass-panel">
              <span className="step-badge">Step 03</span>
              <h3>Semantic DOM & Schema Structured Markup</h3>
              <p>
                Ensure all landing pages feature rich JSON-LD schema (Organization, Service, FAQPage,
                BreadcrumbList) to enable direct AI-summary extraction and rich search snippets.
              </p>
            </div>

            {/* Share & Consultation Footer */}
            <div className="article-footer-cta glass-panel">
              <div className="share-row">
                <span>Share this analysis:</span>
                <div className="share-btns">
                  <a
                    href="https://www.linkedin.com/sharing/share-offsite/?url=https://instatechhub.com/blogpage"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn linkedin"
                  >
                    <FaLinkedin /> LinkedIn
                  </a>
                  <a
                    href="https://wa.me/?text=Check%20out%20this%20technical%20analysis%20from%20InstaTech%20Hub"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="share-btn whatsapp"
                  >
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>

              <div className="audit-promo-box">
                <div>
                  <h4>Need a Comprehensive Technical SEO & Performance Audit?</h4>
                  <p>Our solutions architects can analyze your site speed, Core Web Vitals, and keyword architecture.</p>
                </div>
                <Link to="/contact" className="btn-primary">
                  <span>Get Free Technical Audit</span>
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </main>

          {/* Right Sidebar */}
          <aside className="article-sidebar">
            <div className="sidebar-box glass-panel">
              <h4>Table of Contents</h4>
              <ul className="toc-list">
                <li>• Executive Summary & Takeaways</li>
                <li>• What Has Changed in Google's Algorithm</li>
                <li>• Impact on Legacy JavaScript Applications</li>
                <li>• 3 Critical Steps to Fortify Architecture</li>
                <li>• Remediation & Performance Audit</li>
              </ul>
            </div>

            <div className="sidebar-box glass-panel">
              <h4>Related Technical Articles</h4>
              <ul className="related-articles-list">
                <li>
                  <Link to="/blog">
                    <strong>Vite vs. Legacy CRA: The 10x Velocity Leap</strong>
                    <small>Web Engineering • 5 min read</small>
                  </Link>
                </li>
                <li>
                  <Link to="/blog">
                    <strong>Flutter vs. React Native: Choosing Modern Stacks</strong>
                    <small>Mobile Architecture • 8 min read</small>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="sidebar-box contact-widget glass-panel">
              <HiSparkles className="w-icon" />
              <h4>Have Questions on Web Architecture?</h4>
              <p>Speak directly with our senior engineering team.</p>
              <Link to="/contact" className="btn-secondary w-full text-center">
                Contact Engineering Desk
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Blogpage;
