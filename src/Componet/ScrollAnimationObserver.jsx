import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollAnimationObserver = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Select elements to animate on scroll
    const selectors = [
      ".scroll-reveal",
      ".scroll-reveal-left",
      ".scroll-reveal-right",
      ".scroll-reveal-scale",
      ".section-head",
      ".service-card-modern",
      ".estimator-wrapper",
      ".case-card",
      ".review-card",
      ".pillar-card",
      ".team-card",
      ".milestone-card",
      ".faq-item",
      ".service-detail-card",
      ".process-step-card",
      ".service-appointment-card",
      ".portfolio-item-card",
      ".article-card",
      ".featured-article-card",
      ".sidebar-widget",
      ".c-info-card",
      ".contact-main-grid",
      ".newsletter-card",
      ".hero-trust-box",
    ];

    const elements = document.querySelectorAll(selectors.join(", "));

    elements.forEach((el, index) => {
      // If element doesn't have a specific reveal type, default to standard scroll-reveal
      if (
        !el.classList.contains("scroll-reveal") &&
        !el.classList.contains("scroll-reveal-left") &&
        !el.classList.contains("scroll-reveal-right") &&
        !el.classList.contains("scroll-reveal-scale")
      ) {
        el.classList.add("scroll-reveal");
      }

      // Add staggered delay for grid items if not explicitly set
      if (index % 3 === 1 && !el.classList.contains("delay-1")) {
        el.classList.add("delay-1");
      } else if (index % 3 === 2 && !el.classList.contains("delay-2")) {
        el.classList.add("delay-2");
      }
    });

    // IntersectionObserver to trigger animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            // Optional: unobserve once revealed for performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return null;
};

export default ScrollAnimationObserver;
