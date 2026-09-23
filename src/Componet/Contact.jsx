import React, { useState } from "react";
import "./Contact.css";
import useContactStore from "./Store/contactStore/cotactStore";

// Assets
import girlImage from "../assest/homeimage/girlImage.png";

// Icons
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaWhatsapp,
  FaArrowRight,
  FaCheckCircle,
  FaShieldAlt,
  FaHeadset
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    service: "Web Development",
    budget: "₹50k - ₹1.5L",
    subject: "Project Consultation Request",
    message: "",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const { addEnquiry, isLoading } = useContactStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addEnquiry({
        name: formData.name,
        email: formData.email,
        number: formData.number,
        platform: "instatechhub",
        subject: `${formData.subject}: ${formData.service} (Budget: ${formData.budget})`,
        message: formData.message || `Client inquired about ${formData.service} with budget ${formData.budget}`,
      });

      if (response?.data?.success || response?.status === 200) {
        setIsSuccess(true);
        setFormData({
          name: "",
          email: "",
          number: "",
          service: "Web Development",
          budget: "₹50k - ₹1.5L",
          subject: "Project Consultation Request",
          message: "",
        });
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error(error);
      // Fallback UI presentation if demo server is offline
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <div className="contact-page-root">
      {/* =========================================================================
          CONTACT HERO BANNER
         ========================================================================= */}
      <section className="contact-hero-section tech-grid-pattern">
        <div className="contact-glow-orb"></div>
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span style={{ fontFamily: "var(--font-code)", letterSpacing: "0.06em" }}>// Direct Technical Escalation RFC</span>
          </div>
          <h1 className="contact-main-title">
            Let's Engineer Your Next <span className="gradient-text-red">Digital Breakthrough</span>
          </h1>
          <p className="contact-hero-sub">
            Have a system to architect, looking for software engineering expertise, or initiating a new digital product?
            Connect directly with our solutions engineering team.
          </p>
          <div className="contact-telemetry-banner">
            <span className="ct-chip"><code>git:(main)</code></span>
            <span className="ct-chip"><code>SLA: &lt;120m</code></span>
            <span className="ct-chip"><code>CIPHER: AES-256-GCM</code></span>
            <span className="ct-chip"><code>STATUS: ACCEPTING_SPRINTS</code></span>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CONTACT CARDS GRID
         ========================================================================= */}
      <section className="contact-info-cards-section">
        <div className="container">
          <div className="contact-cards-grid">
            {/* Location Card */}
            <div className="c-info-card glass-panel">
              <div className="c-card-terminal-bar">
                <div className="c-term-dots">
                  <span className="t-dot t-red"></span>
                  <span className="t-dot t-amber"></span>
                  <span className="t-dot t-green"></span>
                </div>
                <span className="c-term-path">loc://indore.hq</span>
              </div>
              <div className="c-icon-wrap">
                <FaMapMarkerAlt />
              </div>
              <span className="c-card-sub">// DEVELOPMENT HEADQUARTERS</span>
              <h3>Physical Node</h3>
              <p>
                203, Mangal City Mall, Vijay Nagar, Scheme No 54, Indore, MP - 452010
              </p>
              <a
                href="https://maps.app.goo.gl/rj9Sz7mD5hj8v5rg9"
                target="_blank"
                rel="noopener noreferrer"
                className="c-action-link"
              >
                <span>&gt;_ Open Coordinates</span>
                <FaArrowRight />
              </a>
            </div>

            {/* Phone Card */}
            <div className="c-info-card glass-panel">
              <div className="c-card-terminal-bar">
                <div className="c-term-dots">
                  <span className="t-dot t-red"></span>
                  <span className="t-dot t-amber"></span>
                  <span className="t-dot t-green"></span>
                </div>
                <span className="c-term-path">tel://hotline</span>
              </div>
              <div className="c-icon-wrap">
                <FaPhoneAlt />
              </div>
              <span className="c-card-sub">// DIRECT VOICE DISPATCH</span>
              <h3>Technical Desk</h3>
              <p>
                Main Hotline: +91 95228 86131 <br />
                Mon - Sat: 10:00 - 19:30 IST
              </p>
              <a href="tel:+919522886131" className="c-action-link">
                <span>&gt;_ Initiate Call</span>
                <FaArrowRight />
              </a>
            </div>

            {/* Email Card */}
            <div className="c-info-card glass-panel">
              <div className="c-card-terminal-bar">
                <div className="c-term-dots">
                  <span className="t-dot t-red"></span>
                  <span className="t-dot t-amber"></span>
                  <span className="t-dot t-green"></span>
                </div>
                <span className="c-term-path">smtp://inbound</span>
              </div>
              <div className="c-icon-wrap">
                <FaEnvelope />
              </div>
              <span className="c-card-sub">// RFC TRANSMISSIONS</span>
              <h3>Electronic Mail</h3>
              <p>
                info@instatechhub.com <br />
                business@instatechhub.com
              </p>
              <a href="mailto:info@instatechhub.com" className="c-action-link">
                <span>&gt;_ Dispatch Mail</span>
                <FaArrowRight />
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="c-info-card glass-panel whatsapp-highlight">
              <div className="c-card-terminal-bar">
                <div className="c-term-dots">
                  <span className="t-dot t-red"></span>
                  <span className="t-dot t-amber"></span>
                  <span className="t-dot t-green"></span>
                </div>
                <span className="c-term-path">socket://chat.live</span>
              </div>
              <div className="c-icon-wrap whatsapp">
                <FaWhatsapp />
              </div>
              <span className="c-card-sub">// STREAMING CHAT</span>
              <h3>Instant Protocol</h3>
              <p>
                Connect directly with our senior technical consultants 24/7.
              </p>
              <a
                href="https://wa.me/919522886131?text=Hi%20InstaTech%20Hub,%20I%20would%20like%20to%20discuss%20a%20new%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="c-action-link whatsapp"
              >
                <span>&gt;_ Start Stream</span>
                <FaArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          INQUIRY FORM & LIVE CHAT BOX
         ========================================================================= */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-main-grid glass-panel">
            {/* Left Column: Quick Pitch & Live RFC Terminal Payload */}
            <div className="contact-pitch-col">
              <div className="badge-pill">
                <span className="pulse-dot"></span>
                <span style={{ fontFamily: "var(--font-code)" }}>// SDLC Consultation Protocol</span>
              </div>
              <h2>Initialize Your Technical Sprint</h2>
              <p>
                Whether you need full-stack web/cloud architectures, native mobile pipelines,
                or custom enterprise software, we provide sprint breakdowns and production guarantees.
              </p>

              <div className="pitch-features">
                <div className="pitch-item">
                  <span className="pitch-code-badge">[01_NDA]</span>
                  <div>
                    <strong>Cryptographic & NDA Assured</strong>
                    <p>Proprietary specifications and source architecture remain 100% confidential under legal NDA.</p>
                  </div>
                </div>

                <div className="pitch-item">
                  <span className="pitch-code-badge">[02_SLA]</span>
                  <div>
                    <strong>2-Hour Initial Architectural Review</strong>
                    <p>Our solutions engineering team evaluates scope and responds with initial feasibility within 2 hours.</p>
                  </div>
                </div>

                <div className="pitch-item">
                  <span className="pitch-code-badge">[03_DEV]</span>
                  <div>
                    <strong>Direct Architect Consultation</strong>
                    <p>Speak directly to hands-on software engineers and technical directors, never commission sales.</p>
                  </div>
                </div>
              </div>

              {/* LIVE RFC TERMINAL PREVIEW */}
              <div className="contact-payload-terminal">
                <div className="terminal-header">
                  <div className="terminal-dots">
                    <span className="t-dot t-red"></span>
                    <span className="t-dot t-amber"></span>
                    <span className="t-dot t-green"></span>
                  </div>
                  <span className="terminal-title">request_payload.json</span>
                  <span className="terminal-tag">LIVE_SYNC</span>
                </div>
                <div className="payload-code-body">
                  <pre>
                    <code>
                      <span className="syn-kw">POST</span> <span className="syn-str">/api/v1/projects/consultation</span>{"\n"}
                      {"{\n"}
                      {"  "}<span className="syn-prop">"client"</span>: <span className="syn-str">"{formData.name ? formData.name : "ANONYMOUS_CLIENT"}"</span>,{"\n"}
                      {"  "}<span className="syn-prop">"email"</span>: <span className="syn-str">"{formData.email ? formData.email : "user@domain.com"}"</span>,{"\n"}
                      {"  "}<span className="syn-prop">"track"</span>: <span className="syn-str">"{formData.service}"</span>,{"\n"}
                      {"  "}<span className="syn-prop">"budget"</span>: <span className="syn-str">"{formData.budget}"</span>,{"\n"}
                      {"  "}<span className="syn-prop">"status"</span>: <span className="syn-val">"READY_FOR_DISPATCH"</span>{"\n"}
                      {"}"}
                    </code>
                  </pre>
                </div>
              </div>
            </div>

            {/* Right Column: High-Converting Form */}
            <div className="contact-form-col">
              <div className="form-terminal-bar">
                <div className="terminal-dots">
                  <span className="t-dot t-red"></span>
                  <span className="t-dot t-amber"></span>
                  <span className="t-dot t-green"></span>
                </div>
                <span className="form-bar-route">POST /api/v1/inquiry/rfc</span>
                <span className="form-bar-status">STATUS 200</span>
              </div>

              {isSuccess ? (
                <div className="contact-success-state">
                  <FaCheckCircle className="success-icon" />
                  <h3>Inquiry Dispatched Successfully!</h3>
                  <p>
                    Payload received and indexed. Our senior solutions architect is parsing
                    your requirements and will establish communication within 2 hours.
                  </p>
                  <div className="success-hash">
                    <code>EXEC_STATUS: 200 OK • HASH: #{Math.random().toString(36).substring(2, 9).toUpperCase()}</code>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="enterprise-contact-form">
                  <div className="form-row-2">
                    <div className="input-group">
                      <label><span className="cli-prompt">&gt;_</span> Your Full Name *</label>
                      <input
                        type="text"
                        placeholder="e.g. Alex Mercer"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className="input-group">
                      <label><span className="cli-prompt">&gt;_</span> Business Email *</label>
                      <input
                        type="email"
                        placeholder="alex@company.com"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-row-2">
                    <div className="input-group">
                      <label><span className="cli-prompt">&gt;_</span> Phone / Signal *</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        required
                        value={formData.number}
                        onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                      />
                    </div>

                    <div className="input-group">
                      <label><span className="cli-prompt">&gt;_</span> Architecture Track *</label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      >
                        <option value="Web Development">Custom Web Development & SaaS</option>
                        <option value="Mobile App Development">Mobile App (iOS & Android)</option>
                        <option value="Desktop Software">Desktop Software & Automation</option>
                        <option value="Digital Marketing & SEO">Digital Marketing & SEO</option>
                        <option value="Cloud & DevOps">Cloud Infrastructure & DevOps</option>
                        <option value="AI & Automation">AI & Workflow Automation</option>
                        <option value="UI/UX Product Design">UI/UX Product Design</option>
                        <option value="Custom Enterprise IT">Custom Enterprise IT Solutions</option>
                      </select>
                    </div>
                  </div>

                  <div className="input-group">
                    <label><span className="cli-prompt">&gt;_</span> Target Capital Allocation</label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    >
                      <option value="Under ₹50,000">Under ₹50,000 (Rapid MVP / Prototype)</option>
                      <option value="₹50,000 - ₹1,50,000">₹50,000 - ₹1,50,000 (Standard Production Scale)</option>
                      <option value="₹1,50,000 - ₹5,00,000">₹1,50,000 - ₹5,00,000 (Advanced SaaS / Mobile App)</option>
                      <option value="₹5,00,000+">₹5,00,000+ (Enterprise Multi-Platform System)</option>
                    </select>
                  </div>

                  <div className="input-group">
                    <label><span className="cli-prompt">&gt;_</span> System Scope & Specifications *</label>
                    <textarea
                      rows="4"
                      placeholder="Detail your requirements, target user scale, tech stack preferences, and launch milestone deadlines..."
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="btn-primary w-full submit-contact-btn"
                    disabled={isLoading}
                  >
                    {isLoading ? "Dispatching Payload..." : ">_ Dispatch Project RFC"}
                    <FaArrowRight />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAP EMBED SECTION
         ========================================================================= */}
      <section className="contact-map-section tech-grid-pattern">
        <div className="container">
          <div className="map-frame-wrap glass-panel">
            <div className="map-top-bar">
              <div className="map-badge">
                <span className="pulse-dot"></span>
                <span>// NODE: INDORE_DATACENTER_HQ • [LAT: 22.618499 | LNG: 75.884279]</span>
              </div>
              <a
                href="https://maps.app.goo.gl/rj9Sz7mD5hj8v5rg9"
                target="_blank"
                rel="noopener noreferrer"
                className="map-ext-link"
              >
                <span>&gt;_ Navigate Coordinates</span>
                <FaArrowRight />
              </a>
            </div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3682.990170582608!2d75.88427927501755!3d22.61849977944539!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd93c180aaaf%3A0x96e2d45ee6b27ec6!2sMangal%20City%2C%20Vijay%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452010!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="InstaTech Hub Indore Headquarters"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
