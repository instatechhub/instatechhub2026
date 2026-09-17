import React from "react";
import "./LegalPage.css";

const legalContent = {
  "privacy-policy": {
    badge: "Privacy & Data Protection",
    title: "Privacy Policy",
    intro:
      "InstaTech Hub values the trust you place in us. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you engage with our services, visit our website, request a quote, or interact with our team.",
    meta: "Last updated: September 2026",
    sections: [
      {
        title: "1. Information We Collect",
        body:
          "We collect information that helps us provide the best possible service to your business. This may include your name, email address, phone number, company name, project requirements, location details, and any communication exchanged through forms, calls, email, WhatsApp, or meetings. We may also collect technical information such as browser type, device data, IP address, referral source, and usage patterns to improve website performance and user experience.",
      },
      {
        title: "2. How We Use Your Information",
        body:
          "Your information is used to respond to inquiries, prepare project estimates, deliver consulting services, manage ongoing engagements, and maintain professional communication. We may also use data to understand website usage trends, improve our offerings, fulfil legal, tax, and compliance obligations, and protect against fraud, abuse, or security threats.",
      },
      {
        title: "3. Sharing & Disclosure",
        body:
          "We do not sell your personal information. We may share it with trusted internal teams, third-party service providers who support our operations (such as hosting, analytics, communication tools, payment gateways, or customer support platforms), and only when necessary for service delivery, operational support, or legal compliance.",
      },
      {
        title: "4. Data Security",
        body:
          "We use reasonable administrative, technical, and organisational safeguards to protect personal information from unauthorised access, accidental disclosure, modification, or loss. However, no system is completely immune to risks, and we cannot guarantee absolute security in every circumstance.",
      },
      {
        title: "5. Cookies & Website Analytics",
        body:
          "Our website may use cookies or similar technologies to remember your preferences, analyse traffic, and improve usability. You can manage cookie settings through your browser, though some parts of the website may not function optimally if cookies are disabled.",
      },
      {
        title: "6. Retention",
        body:
          "We keep personal information only for as long as needed to provide services, satisfy business requirements, comply with legal obligations, resolve disputes, and enforce our agreements. When information is no longer needed, we securely delete or anonymise it where practicable.",
      },
      {
        title: "7. Your Rights",
        body:
          "Depending on applicable law, you may have the right to access, correct, update, or request deletion of your personal information. You may also object to certain processing activities or request a copy of the data we hold about you. To exercise these rights, please contact us using the details below.",
      },
      {
        title: "8. Contact Us",
        body:
          "If you have questions, concerns, or requests regarding this Privacy Policy, please contact our team at info@instatechhub.com or call +91 95228 86131. We are committed to handling your data responsibly and in accordance with applicable privacy laws.",
      },
    ],
  },
  "terms-of-service": {
    badge: "Legal Terms",
    title: "Terms of Service",
    intro:
      "These Terms of Service outline the rights and responsibilities governing your use of InstaTech Hub's website, services, and business engagement process. By accessing our website or discussing a project with us, you agree to the terms below.",
    meta: "Last updated: September 2026",
    sections: [
      {
        title: "1. Scope of Services",
        body:
          "InstaTech Hub provides technology consulting, software engineering, digital product development, cloud enablement, and digital marketing support services. The specific scope, timeline, deliverables, and commercial terms of each project are governed by a signed proposal, statement of work, or client agreement.",
      },
      {
        title: "2. Client Responsibilities",
        body:
          "Clients are expected to provide accurate project information, timely approvals, access to required stakeholders, and necessary assets such as branding content, infrastructure access, credentials, and feedback during delivery. Delays caused by incomplete information or late decisions may extend timelines and affect delivery milestones.",
      },
      {
        title: "3. Intellectual Property",
        body:
          "Unless otherwise agreed in writing, intellectual property rights in custom software, design assets, and deliverables created specifically for a client remain subject to the terms of the project agreement. Client-provided materials and pre-existing assets remain the property of the respective owners and must not be reused without permission.",
      },
      {
        title: "4. Fees, Payments & Cancellations",
        body:
          "Project costs, payment schedules, and refund policies are outlined in the relevant proposal or agreement. Deposits, milestone payments, and late payment terms may apply. Delayed payments may result in a pause or suspension of work, and any outstanding amounts remain payable even if a project is paused or cancelled.",
      },
      {
        title: "5. Confidentiality",
        body:
          "Both parties agree to protect confidential information shared during the course of business. We will use reasonable care to protect non-public information, but clients are also responsible for appropriately classifying and protecting their internal data and business-sensitive information.",
      },
      {
        title: "6. Warranties & Limitations",
        body:
          "We aim to deliver professional, reliable, and quality-focused services. However, no service provider can guarantee uninterrupted operation, zero defects, or future business outcomes beyond the specific commitments stated in the signed engagement agreement. Our liability is limited to the scope set out in that agreement and applicable law.",
      },
      {
        title: "7. Use of Website Content",
        body:
          "All website content, including text, code, graphics, logos, designs, and media, is owned by or licensed to InstaTech Hub, unless otherwise stated. You may browse the website for informational purposes, but unauthorised copying, reproduction, distribution, or commercial use is prohibited.",
      },
      {
        title: "8. Governing Law",
        body:
          "These terms are governed by the laws of India, and any disputes arising from them shall be subject to the exclusive jurisdiction of courts located in Indore, Madhya Pradesh, India, unless otherwise required by applicable law.",
      },
      {
        title: "9. Contact",
        body:
          "For any legal or service-related questions, please contact us at info@instatechhub.com or +91 95228 86131. We are happy to clarify project terms, commercial arrangements, or service scope before work begins.",
      },
    ],
  },
  security: {
    badge: "Security & Trust",
    title: "Security Policy",
    intro:
      "Security is a foundational part of our engineering practices. InstaTech Hub is committed to protecting client data, software assets, infrastructure, and operational processes with strong safeguards, disciplined delivery practices, and transparent incident response procedures.",
    meta: "Last updated: September 2026",
    sections: [
      {
        title: "1. Secure Development Practices",
        body:
          "We design systems with security in mind from the beginning. Our engineering teams follow structured development workflows, access control policies, secure coding principles, code review practices, and environment-based segregation to reduce risks across the software lifecycle.",
      },
      {
        title: "2. Data Protection",
        body:
          "We aim to protect sensitive information using encryption in transit and at rest where appropriate, access restrictions for internal teams, secure authentication standards, and controlled storage practices. We also require appropriate handling of credentials and secrets in development and deployment workflows.",
      },
      {
        title: "3. Infrastructure & Hosting",
        body:
          "Our cloud and hosting environments are configured to align with modern security practices, including environment isolation, least-privilege user access, patch management, monitoring, and audit-friendly deployment controls. Infrastructure reviews are conducted as part of project implementation and ongoing operations.",
      },
      {
        title: "4. Incident Response",
        body:
          "In the event of a security concern, our team follows defined escalation procedures to assess impact, contain the issue, communicate with relevant stakeholders, and restore safe operations as quickly as possible. Clients are informed when required by contract, operational impact, or legal obligations.",
      },
      {
        title: "5. Client Responsibilities",
        body:
          "While we apply reasonable security measures, clients remain responsible for securing their own privileged accounts, internal environment access, business policies, and any data they provide to us. We recommend using strong passwords, enabling multi-factor authentication, and limiting user access to the minimum required.",
      },
      {
        title: "6. Third-Party Integrations",
        body:
          "When we integrate external tools, APIs, payment systems, or communication providers, we assess their security posture and configure access controls carefully. We monitor integrations for reliability, performance, and abuse indicators to reduce operational risk.",
      },
      {
        title: "7. Continuous Improvement",
        body:
          "We continuously review our engineering and operational practices to improve resilience, security posture, and process quality. Security is treated as an evolving discipline, not a one-time checklist item.",
      },
      {
        title: "8. Reporting a Concern",
        body:
          "If you believe there is a vulnerability, security issue, or suspicious activity related to our systems, please contact us immediately at info@instatechhub.com with a clear description of the concern, affected scope, and any relevant evidence. We appreciate responsible disclosure and will review matters promptly.",
      },
    ],
  },
};

const LegalPage = ({ pageKey }) => {
  const page = legalContent[pageKey] || legalContent["privacy-policy"];

  return (
    <div className="legal-page-shell">
      <section className="legal-page-hero">
        <div className="container legal-hero-inner">
          <span className="legal-badge">{page.badge}</span>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
          <div className="legal-meta">{page.meta}</div>
        </div>
      </section>

      <section className="legal-page-content">
        <div className="container legal-content-grid">
          {page.sections.map((section) => (
            <article className="legal-card" key={section.title}>
              <h2>{section.title}</h2>
              <p>{section.body}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LegalPage;
