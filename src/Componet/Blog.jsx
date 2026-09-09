import React, { useState } from "react";
import "./Blog.css";
import { Link } from "react-router-dom";

// Assets
import blogImage from "../assest/homeimage/blogimage.webp";
import blog1 from "../assest/homeimage/blog1.png";
import user1 from "../assest/homeimage/user1.png";

// Icons
import {
  FaLinkedin,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaRegClock,
  FaUserAlt,
  FaSearch,
  FaTag,
  FaArrowRight,
  FaBookOpen,
  FaLaptopCode,
  FaShieldAlt
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi2";

const Blog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("all");

  const articles = [
    {
      id: "google-march-update",
      slug: "/blogpage",
      title: "How Google's March Core Algorithm Update Impacts Enterprise Websites & Technical SEO",
      summary:
        "An in-depth architectural and algorithmic breakdown of Google's latest core rollout, its emphasis on deep technical UX, and exact action items to safeguard your search visibility.",
      category: "Technical SEO & Search",
      tag: "seo",
      readTime: "6 min read",
      date: "March 28, 2025",
      image: blogImage,
      featured: true,
      author: "Engineering & Growth Team",
    },
    {
      id: "vite-vs-cra",
      slug: "/blogpage",
      title: "Migrating from Legacy CRA to Vite: Why Modern Web Apps Need Lightning-Fast Build Tooling",
      summary:
        "Learn how migrating to native ES modules and Vite accelerates developer productivity, eliminates legacy Babel overhead, and provides instant Hot Module Replacement (HMR).",
      category: "Web Engineering",
      tag: "web",
      readTime: "5 min read",
      date: "March 24, 2025",
      image: blog1,
      featured: false,
      author: "Solutions Architecture Desk",
    },
    {
      id: "flutter-vs-react-native",
      slug: "/blogpage",
      title: "Flutter vs. React Native: Choosing the Optimal Cross-Platform Mobile Stack",
      summary:
        "A pragmatic architectural comparison covering rendering pipelines, native bridging, package ecosystems, and development velocity for high-growth mobile apps.",
      category: "Mobile Architecture",
      tag: "mobile",
      readTime: "8 min read",
      date: "March 18, 2025",
      image: blogImage,
      featured: false,
      author: "Mobile Engineering Lead",
    },
  ];

  const filteredArticles = articles.filter((art) => {
    const matchesTag = selectedTag === "all" || art.tag === selectedTag;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesTag && matchesSearch;
  });

  const featuredArticle = articles.find((a) => a.featured) || articles[0];

  return (
    <div className="blog-page-root">
      {/* =========================================================================
          HERO BANNER
         ========================================================================= */}
      <section className="blog-hero-section">
        <div className="blog-glow-orb"></div>
        <div className="container text-center">
          <div className="badge-pill">
            <span className="pulse-dot"></span>
            <span>Knowledge Base</span>
          </div>
          <h1 className="blog-main-title">
            Engineering & <span className="gradient-text-red">Digital Insights</span>
          </h1>
          <p className="blog-hero-sub">
            Practical technical blueprints, software architecture benchmarks, and digital growth
            strategies curated by the InstaTech Hub engineering team.
          </p>

          {/* Search & Category Filter */}
          <div className="blog-filter-bar">
            <div className="search-input-wrap">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search technical articles, algorithms, or frameworks..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="blog-tags-pill-row">
              {[
                { id: "all", label: "All Insights" },
                { id: "seo", label: "Technical SEO" },
                { id: "web", label: "Web Engineering" },
                { id: "mobile", label: "Mobile Apps" },
              ].map((pill) => (
                <button
                  key={pill.id}
                  className={`blog-tag-btn ${selectedTag === pill.id ? "active" : ""}`}
                  onClick={() => setSelectedTag(pill.id)}
                >
                  {pill.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MAIN BLOG LAYOUT (Articles + Enterprise Sidebar)
         ========================================================================= */}
      <section className="blog-content-section">
        <div className="container blog-layout-grid">
          {/* Left Column: Articles */}
          <div className="blog-articles-col">
            {/* Featured Article Spotlight */}
            {selectedTag === "all" && !searchQuery && (
              <div className="featured-article-card glass-panel">
                <div className="featured-badge">
                  <HiSparkles /> FEATURED ANALYSIS
                </div>
                <div className="featured-image-box">
                  <img src={featuredArticle.image} alt={featuredArticle.title} />
                </div>
                <div className="featured-content">
                  <div className="article-meta-row">
                    <span className="category-label">{featuredArticle.category}</span>
                    <span className="meta-item">
                      <FaRegClock /> {featuredArticle.readTime}
                    </span>
                    <span className="meta-item">{featuredArticle.date}</span>
                  </div>
                  <h2>{featuredArticle.title}</h2>
                  <p>{featuredArticle.summary}</p>
                  <Link to={featuredArticle.slug} className="read-article-btn">
                    <span>Read Full Article</span>
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            )}

            {/* Articles List */}
            <div className="articles-list-grid">
              {filteredArticles.map((art) => (
                <div key={art.id} className="article-card glass-panel">
                  <div className="card-thumb-wrap">
                    <img src={art.image} alt={art.title} />
                    <span className="thumb-category">{art.category}</span>
                  </div>
                  <div className="card-body-content">
                    <div className="card-meta">
                      <span>
                        <FaRegClock /> {art.readTime}
                      </span>
                      <span>•</span>
                      <span>{art.date}</span>
                    </div>
                    <h3>{art.title}</h3>
                    <p>{art.summary}</p>
                    <div className="card-author-row">
                      <div className="author-info">
                        <FaUserAlt className="author-icon" />
                        <span>{art.author}</span>
                      </div>
                      <Link to={art.slug} className="card-read-link">
                        <span>Read</span>
                        <FaArrowRight />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Editorial & Tech Insights Sidebar */}
          <aside className="blog-sidebar-col">
            {/* Tech Editorial Desk Card */}
            <div className="sidebar-widget glass-panel">
              <div className="widget-header">
                <div className="badge-pill">
                  <span className="pulse-dot"></span>
                  <span>Editorial Board</span>
                </div>
                <h3>InstaTech Hub Engineering Desk</h3>
              </div>
              <div className="editorial-team-badge">
                <img src={user1} alt="Editorial Team" className="editorial-avatar" />
                <div>
                  <strong>Enterprise Tech Analysts</strong>
                  <p>Solutions Architects & SEO Specialists</p>
                </div>
              </div>
              <p className="editorial-bio">
                Our in-house team of software architects, developers, and performance marketers publishes
                battle-tested guidelines on building resilient digital systems and scaling modern web products.
              </p>
              <div className="sidebar-social-links">
                <a
                  href="https://www.linkedin.com/in/instatech-hub-b55615367/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-link"
                >
                  <FaLinkedin /> LinkedIn
                </a>
                <a
                  href="https://wa.me/919522886131"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="s-link whatsapp"
                >
                  <FaWhatsapp /> WhatsApp Desk
                </a>
              </div>
            </div>

            {/* Trending Topics */}
            <div className="sidebar-widget glass-panel">
              <h4 className="widget-title">Trending Tech Topics</h4>
              <ul className="trending-list">
                <li>
                  <Link to="/blogpage">
                    <span className="trending-num">01</span>
                    <div>
                      <strong>Google March 2025 Algorithm Impact</strong>
                      <small>March 28, 2025</small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/blogpage">
                    <span className="trending-num">02</span>
                    <div>
                      <strong>Vite Migration: 10x Developer Velocity</strong>
                      <small>March 24, 2025</small>
                    </div>
                  </Link>
                </li>
                <li>
                  <Link to="/blogpage">
                    <span className="trending-num">03</span>
                    <div>
                      <strong>Cross-Platform Mobile Performance in 2025</strong>
                      <small>March 18, 2025</small>
                    </div>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Free Technical Consultation Widget */}
            <div className="sidebar-widget consultation-widget glass-panel">
              <span className="c-widget-badge">
                <HiSparkles /> FREE ARCHITECTURE REVIEW
              </span>
              <h3>Need Expert Technical Advice on Your Codebase?</h3>
              <p>
                Connect with our senior engineering team for an objective technical audit of your web or mobile app.
              </p>
              <Link to="/contact" className="btn-primary w-full text-center">
                <span>Book Discovery Call</span>
                <FaArrowRight />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default Blog;
