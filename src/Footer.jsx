import React, { useState } from "react";
import "./Footer.css";
import logo from "./assest/homeimage/logo2.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaPaperPlane,
  FaCheckCircle,
  FaShieldAlt,
  FaCode,
  FaClock
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleNewsletter = (e) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail("");
      setSubscribed(false);
    }, 3500);
  };

  return (
    <footer className="site-footer">
      {/* Top CTA / Newsletter Banner */}
      <div className="footer-top-banner">
        <div className="container">
          <div className="newsletter-card">
            <div className="newsletter-text">
              <span className="newsletter-tag">
                <FaShieldAlt /> Enterprise-Grade IT Engineering
              </span>
              <h2>Ready to build something extraordinary?</h2>
              <p>
                Get our technical insights, architecture blueprints, and exclusive
                digital growth strategies delivered to your inbox.
              </p>
            </div>
            <form className="newsletter-form" onSubmit={handleNewsletter}>
              {subscribed ? (
                <div className="newsletter-success">
                  <FaCheckCircle /> Thank you for subscribing! We'll stay in touch.
                </div>
              ) : (
                <div className="input-wrap">
                  <input
                    type="email"
                    placeholder="Enter your work email address..."
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                  />
                  <button type="submit" className="subscribe-btn">
                    <span>Subscribe</span>
                    <FaPaperPlane />
                  </button>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="footer-main">
        <div className="container footer-grid">
          {/* Brand Info */}
          <div className="footer-col brand-col">
            <Link to="/" className="footer-logo">
              <img src={logo} alt="InstaTech Hub" />
            </Link>
            <p className="brand-desc">
              InstaTech Hub is a full-cycle technology consulting and digital engineering
              agency. We engineer high-performance web systems, native & cross-platform
              mobile apps, enterprise desktop software, and ROI-driven marketing campaigns.
            </p>
            <div className="trust-pills">
              <span className="trust-pill">
                <FaCode /> Modern Architecture
              </span>
              <span className="trust-pill">
                <FaClock /> 24/7 SLA Support
              </span>
            </div>
            <div className="social-links-row">
              <a
                href="https://www.linkedin.com/in/instatech-hub-b55615367/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn linkedin"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.facebook.com/share/16mho9p5tf/"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn facebook"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/instatech_hub?igsh=b2dsM3p6b296aWNh"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn instagram"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
              <a
                href="https://wa.me/919522886131"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn whatsapp"
                aria-label="WhatsApp"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* IT Services */}
          <div className="footer-col">
            <h4 className="footer-title">IT Engineering Services</h4>
            <ul className="footer-links">
              <li>
                <Link to="/service">Custom Web Development</Link>
              </li>
              <li>
                <Link to="/service">Mobile Apps (iOS & Android)</Link>
              </li>
              <li>
                <Link to="/service">Desktop Software & Automation</Link>
              </li>
              <li>
                <Link to="/service">Digital Marketing & SEO</Link>
              </li>
              <li>
                <Link to="/service">Cloud Infrastructure & DevOps</Link>
              </li>
              <li>
                <Link to="/service">AI & Business Automation</Link>
              </li>
              <li>
                <Link to="/service">UI/UX Product Design</Link>
              </li>
              <li>
                <Link to="/service">Custom Enterprise IT Solutions</Link>
              </li>
            </ul>
          </div>

          {/* Company & Portfolio */}
          <div className="footer-col">
            <h4 className="footer-title">Company & Resources</h4>
            <ul className="footer-links">
              <li>
                <Link to="/about">About InstaTech Hub</Link>
              </li>
              <li>
                <Link to="/portfolio">Featured Case Studies</Link>
              </li>
              <li>
                <Link to="/blog">Tech Insights & Articles</Link>
              </li>
              <li>
                <Link to="/contact">Book Technical Consultation</Link>
              </li>
              <li>
                <Link to="/portfolio">Recent Client Work</Link>
              </li>
              <li>
                <Link to="/contact">Career Opportunities</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-col contact-col">
            <h4 className="footer-title">Headquarters</h4>
            <div className="contact-details">
              <a
                href="https://maps.app.goo.gl/rj9Sz7mD5hj8v5rg9"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <FaMapMarkerAlt className="c-icon location" />
                <span>203, Mangal City Mall, Vijay Nagar, Scheme No 54, Indore, MP 452010</span>
              </a>

              <a href="tel:+919522886131" className="contact-item">
                <FaPhoneAlt className="c-icon phone" />
                <span>+91 95228 86131</span>
              </a>

              <a href="mailto:info@instatechhub.com" className="contact-item">
                <FaEnvelope className="c-icon email" />
                <span>info@instatechhub.com</span>
              </a>

              <div className="support-badge">
                <span className="live-ping"></span>
                <span>Support Team: 24/7 Response Guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="container bottom-inner">
          <p className="copyright-text">
            © {new Date().getFullYear()}{" "}
            <span className="brand-highlight">InstaTech Hub</span>. All rights reserved.
            Engineered for scalable business transformation.
          </p>
          <div className="bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="dot">•</span>
            <Link to="/terms-of-service">Terms of Service</Link>
            <span className="dot">•</span>
            <Link to="/security">Security</Link>
          </div>
        </div>
      </div>

      {/* Developer Terminal Telemetry Bar */}
      <div className="footer-dev-telemetry">
        <div className="container dev-telemetry-inner">
          <div className="telemetry-left">
            <span className="dev-cli-sign">&gt;_</span>
            <span>EOF // git:(main)</span>
            <span className="t-sep">•</span>
            <span className="telemetry-ok">STATUS 200 OK</span>
            <span className="t-sep">•</span>
            <span>PING 14ms SLA</span>
          </div>
          <div className="telemetry-right">
            <span>TLS 1.3 // ZERO-TRUST // MULTI-AZ AWS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
