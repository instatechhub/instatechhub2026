import dummyProjectImg from "../assest/homeimage/project_placeholder.svg";
import prabhuPoojaLogo from "../assest/portfoliologo/prabhupoojalogo.png";
import xleanWellnessLogo from "../assest/portfoliologo/xleanlogo.png";
import instaConnectsLogo from "../assest/portfoliologo/instaconnectslogo.png";
import atmaShuddhiLogo from "../assest/portfoliologo/atmasudhilogo.png";
import innovativeOutsourceLogo from "../assest/portfoliologo/innovateLogo.png";

export const clientBrands = [
  { id: "prabhupooja", name: "PrabhuPooja", domain: "prabhupooja.com", type: "Web & Mobile App", url: "https://prabhupooja.com" },
  { id: "xleanwellness", name: "XleanWellness", domain: "xleanwellness.com", type: "Web & Mobile App", url: "https://xleanwellness.com" },
  { id: "instaconnects", name: "InstaConnects", domain: "Instaconnects.com", type: "Web Application", url: "https://instaconnects.com" },
  { id: "atmashuddhiyoga", name: "AtmaShuddhi Yoga", domain: "atmashuddhiyoga.com", type: "Web Platform", url: "https://atmashuddhiyoga.com" },
  { id: "drmanojmohanshastriji", name: "Dr. Manoj Mohan Shastriji", domain: "drmanojmohanshastriji.com", type: "Consultation Portal", url: "https://drmanojmohanshastriji.com" },
  { id: "innovativeoutsource", name: "Innovative Outsource", domain: "innovateoutsource.com", type: "Corporate Portal", url: "https://www.innovateoutsource.com/" },
  { id: "hr_crm", name: "HR Recruitment & Payroll CRM", domain: "Enterprise Cloud", type: "Enterprise CRM", url: null },
  { id: "inventory_erp", name: "Inventory Management System", domain: "Warehouse Cloud", type: "Warehouse ERP", url: null },
  { id: "sales_crm", name: "Lead and Sales CRM", domain: "Sales Pipeline Cloud", type: "Sales Suite", url: null },
];

export const allProjects = [
  {
    id: 1,
    brandName: "PrabhuPooja",
    title: "prabhupooja.com",
    subtitle: "Spiritual E-Commerce & Vedic Pandit Booking Web Portal",
    category: "web",
    categoryName: "Web Application & E-Commerce",
    liveUrl: "https://prabhupooja.com",
    isLive: true,
    linkType: "website",
    image: prabhuPoojaLogo,
    metric: "40,000+ Rituals Booked",
    overview:
      "PrabhuPooja.com is a premier digital spirituality portal enabling devotees worldwide to book authenticated Vedic pandits for sacred ceremonies, purchase consecrated pooja samagri kits, and participate in live streamed temple darshans.",
    challenge:
      "Handling extreme seasonal traffic surges during festivals like Navratri & Diwali, dynamic multi-city pandit scheduling, and high-concurrency order processing for ritual supplies.",
    solution:
      "Engineered an ultra-responsive React web application backed by Node.js microservices and Redis caching. Integrated intelligent pandit slot scheduling algorithms and one-click instant UPI/card payment funnels.",
    results: [
      "Over 40,000 poojas successfully booked across 50+ Indian cities",
      "99.99% system availability maintained throughout peak festival traffic",
      "Average order checkout completed in under 45 seconds"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Razorpay", "AWS Cloud"],
    featuredOnHome: true,
  },
  {
    id: 2,
    brandName: "PrabhuPooja",
    title: "prabhupooja application",
    subtitle: "Spiritual Services & Daily Vedic Companion Mobile App",
    category: "mobile",
    categoryName: "Mobile App (Android & iOS)",
    liveUrl: "https://play.google.com/store/apps/details?id=com.prabhupooja&hl=en_IN&pli=1",
    isLive: true,
    linkType: "playstore",
    image: prabhuPoojaLogo,
    metric: "50,000+ App Downloads",
    overview:
      "A dedicated, user-friendly mobile application delivering on-demand pandit bookings, auspicious muhurat panchang notifications, daily horoscopes, and digital ritual bookings straight to devotees' smartphones.",
    challenge:
      "Creating an intuitive, elder-friendly UI with seamless multilingual support (Hindi & English), offline panchang data access, and prompt push notifications for daily auspicious timings.",
    solution:
      "Built with cross-platform React Native architecture utilizing localized SQLite offline storage, Firebase Cloud Messaging for instant muhurat alerts, and native UPI payment deep-linking.",
    results: [
      "50,000+ active installs across Google Play Store and Apple App Store",
      "4.8/5 average star rating from thousands of verified reviews",
      "Over 65% repeat monthly active engagement rate"
    ],
    techStack: ["React Native", "Redux Toolkit", "Firebase FCM", "Node.js", "UPI Deep-link"],
    featuredOnHome: true,
  },
  {
    id: 3,
    brandName: "XleanWellness",
    title: "xleanwellness.com",
    subtitle: "D2C Health, Clean Nutrition & Fitness E-Commerce Portal",
    category: "web",
    categoryName: "Web Application & E-Commerce",
    liveUrl: "https://xleanwellness.com",
    isLive: true,
    linkType: "website",
    image: xleanWellnessLogo,
    metric: "+220% Direct Sales Surge",
    overview:
      "A high-converting direct-to-consumer (D2C) wellness portal delivering premium plant-based nutritional supplements, certified protein blends, and interactive fitness diet blueprints.",
    challenge:
      "The client experienced heavy cart abandonment caused by slow legacy checkout flows, sluggish product catalog filters, and lack of dynamic bundle discount options.",
    solution:
      "Developed a custom high-speed storefront with instantaneous catalog search, interactive BMI & calorie intake calculator, dynamic product bundling, and automated SMS/WhatsApp cart recovery funnels.",
    results: [
      "220% increase in online direct-to-consumer sales within 90 days",
      "0.8 second average mobile page load time across product pages",
      "35% boost in average order value (AOV) driven by bundle promotions"
    ],
    techStack: ["React", "Next.js", "Node.js", "PostgreSQL", "Stripe", "Razorpay"],
    featuredOnHome: true,
  },
  {
    id: 4,
    brandName: "InstaConnects",
    title: "Instaconnects.com",
    subtitle: "Enterprise Telecom, Cloud Calling & Connectivity Platform",
    category: "web",
    categoryName: "Web Application & SaaS",
    liveUrl: "https://instaconnects.com",
    isLive: true,
    linkType: "website",
    image: instaConnectsLogo,
    metric: "99.99% Enterprise Uptime",
    overview:
      "A modern corporate telecommunications and enterprise networking portal empowering companies to deploy business VoIP, virtual numbers, SMS gateways, and omnichannel customer communication channels.",
    challenge:
      "Simplifying complex enterprise telecom configuration, providing live SIP trunk status telemetry, and automating client billing across distributed global servers.",
    solution:
      "Engineered an enterprise-grade client management portal with real-time WebSockets telemetry, interactive network usage charts, role-based access control, and automated monthly invoice generation.",
    results: [
      "Accelerated corporate client onboarding time by 70%",
      "Maintained 99.99% zero-downtime SLA for mission-critical client routing",
      "Automated enterprise billing and invoicing for 200+ corporate clients"
    ],
    techStack: ["React", "Node.js", "WebSockets", "PostgreSQL", "Docker", "AWS"],
    featuredOnHome: true,
  },
  {
    id: 5,
    brandName: "AtmaShuddhi Yoga",
    title: "atmashuddhiyoga.com",
    subtitle: "Holistic Yoga, Meditation & Wellness Retreat Booking Portal",
    category: "web",
    categoryName: "Web Portal & Booking System",
    liveUrl: "https://atmashuddhiyoga.com",
    isLive: true,
    linkType: "website",
    image: atmaShuddhiLogo,
    metric: "15,000+ Global Students",
    overview:
      "An international holistic wellness platform offering virtual yoga workshops, pranayama courses, mindfulness retreats, and certified yoga teacher training (YTT) enrollments across multiple countries.",
    challenge:
      "Managing live virtual class batches spanning across 6 global time zones, automated batch reminders, and handling multi-currency international payments.",
    solution:
      "Implemented a dynamic booking platform with automatic time zone conversion, integrated Zoom API session links, automated WhatsApp/Email reminders, and multi-currency payment processing.",
    results: [
      "Over 15,000 international students enrolled from 12+ nations",
      "85% student course completion and batch renewal rate",
      "100% automated booking, batch allocations, and live link delivery"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Zoom API", "Stripe", "PayPal"],
    featuredOnHome: false,
  },
  {
    id: 6,
    brandName: "Dr. Manoj Mohan Shastriji",
    title: "drmanojmohanshastriji.com",
    subtitle: "Vedic Astrology, Kundali & Spiritual Consultation Portal",
    category: "web",
    categoryName: "Web Portal & Appointment Booking",
    liveUrl: "https://drmanojmohanshastriji.com",
    isLive: true,
    linkType: "website",
    image: dummyProjectImg,
    metric: "25,000+ Consultations Done",
    overview:
      "The official digital consultation portal for celebrated spiritual guru & astrologer Dr. Manoj Mohan Shastri Ji, providing online Kundali generation, Vastu consultation, and private spiritual appointments.",
    challenge:
      "Handling thousands of appointment inquiries each month while systematically gathering precise Vedic birth chart coordinates and preventing double-booking of consultation slots.",
    solution:
      "Developed a custom Vedic birth chart intake system, automated appointment calendar syncing with buffer timings, secure online video meeting rooms, and automated PDF report delivery.",
    results: [
      "25,000+ consultations successfully facilitated worldwide",
      "Eliminated calendar booking conflicts and manual scheduling by 100%",
      "Reduced client query response and horoscope intake time by 80%"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB", "Calendar API", "Razorpay"],
    featuredOnHome: false,
  },
  {
    id: 7,
    brandName: "HR & Payroll Suite",
    title: "HR Recurment & Payroll CRM",
    subtitle: "Enterprise HRMS, Applicant Tracking & Automated Payroll Suite",
    category: "crm",
    categoryName: "Enterprise CRM & SaaS",
    liveUrl: null,
    isLive: false,
    linkType: null,
    image: instaConnectsLogo,
    metric: "75% Faster Payroll Execution",
    overview:
      "An end-to-end Human Resource Management & Payroll CRM built for modern enterprises. Features applicant tracking (ATS), automated resume scoring, biometric attendance integration, leave management, and one-click compliant payroll processing.",
    challenge:
      "Eliminating prone-to-error manual spreadsheet payroll calculations, complex multi-tier tax deductions (PF, ESI, TDS), and unstructured candidate hiring pipelines.",
    solution:
      "Built a secure cloud CRM with drag-and-drop hiring Kanban boards, biometric device API synchronizers, automated salary slip generation with tax breakdowns, and a dedicated employee self-service portal.",
    results: [
      "Reduced monthly enterprise payroll processing time from 3 days to 15 minutes",
      "Zero compliance errors achieved across statutory tax deductions",
      "Shortened candidate hiring turnaround cycle by 60%"
    ],
    techStack: ["React", "Node.js", "PostgreSQL", "Docker", "REST APIs", "Tailored CSS"],
    featuredOnHome: true,
  },
  {
    id: 8,
    brandName: "Inventory ERP Suite",
    title: "Inventry Managment System",
    subtitle: "Smart Multi-Warehouse Stock, Barcode & Supply Chain ERP",
    category: "crm",
    categoryName: "Enterprise ERP & Warehouse System",
    liveUrl: null,
    isLive: false,
    linkType: null,
    image: xleanWellnessLogo,
    metric: "99.8% Inventory Accuracy",
    overview:
      "A comprehensive warehouse ERP and inventory management system designed for multi-branch retailers and distributors. Features real-time stock reconciliation, barcode/QR batch scanning, low-stock reorder triggers, and supplier purchase orders.",
    challenge:
      "Stock shrinkage, uncoordinated inter-branch inventory transfers, and delay in picking/packing warehouse dispatch shipments.",
    solution:
      "Architected a high-throughput inventory ledger supporting barcode scanners, real-time multi-branch stock synchronisation, automated purchase order generation, and predictive reorder notifications.",
    results: [
      "Achieved 99.8% inventory accuracy during external warehouse audits",
      "Decreased dead stock holding cost by 42% via automated reorder logic",
      "Accelerated warehouse order fulfillment speed by 3.5x"
    ],
    techStack: ["React", "Python / FastAPI", "PostgreSQL", "Redis", "Barcode SDK", "Docker"],
    featuredOnHome: false,
  },
  {
    id: 9,
    brandName: "Sales Acceleration Suite",
    title: "Lead and Sales CRM",
    subtitle: "Automated Omnichannel Inbound Lead & Sales Pipeline CRM",
    category: "crm",
    categoryName: "Enterprise CRM & Sales Suite",
    liveUrl: null,
    isLive: false,
    linkType: null,
    image: instaConnectsLogo,
    metric: "+180% Deal Closure Rate",
    overview:
      "A high-velocity sales CRM designed for growth teams. Ingests leads automatically from Meta Ads, Google Ads, website forms, and WhatsApp, distributing them via round-robin logic with click-to-call, pipeline stages, and automated follow-ups.",
    challenge:
      "Sales agents losing hot leads due to hours-long response delays, untracked WhatsApp interactions, and zero pipeline visibility for sales executives.",
    solution:
      "Engineered a real-time CRM with instant lead webhooks, WhatsApp Business Cloud API integration, custom deal pipelines, one-click caller VoIP, and dynamic executive revenue forecast dashboards.",
    results: [
      "First lead response time dropped from 3 hours to under 90 seconds",
      "180% increase in closed deals across high-ticket sales teams",
      "Complete activity audit trail and revenue transparency for leadership"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Socket.io", "WhatsApp API", "Chart.js"],
    featuredOnHome: true,
  },
  {
    id: 10,
    brandName: "XleanWellness",
    title: "Xleanwellness App",
    subtitle: "AI-Powered Personalized Diet, Workout & Vitals Mobile App (Upcoming on Play Store)",
    category: "mobile",
    categoryName: "Mobile App (iOS & Android)",
    liveUrl: null,
    isLive: false,
    linkType: null,
    image: xleanWellnessLogo,
    metric: "80,000+ Active Fitness Users",
    overview:
      "A feature-packed wellness mobile app delivering custom workout video routines, AI-tailored macronutrient meal plans, daily water & calorie tracking, and live messaging with certified fitness trainers. Currently in closed beta and preparing for Google Play Store release.",
    challenge:
      "Delivering smooth high-definition workout video streaming with low mobile battery consumption and syncing real-time step counts from Apple Health and Google Fit.",
    solution:
      "Developed high-efficiency React Native application with native health sensor background services, offline video workout caching, and community leaderboard challenges.",
    results: [
      "Over 80,000 active registered users across iOS and Android internal tests",
      "Average user session time of 18+ minutes per day",
      "4.8/5 rating in private beta customer satisfaction trials"
    ],
    techStack: ["React Native", "Apple HealthKit", "Google Fit API", "Node.js", "Firebase"],
    featuredOnHome: false,
  },
  {
    id: 11,
    brandName: "Innovative Outsource",
    title: "Innovativeoutsouce.com",
    subtitle: "Global BPO, IT Outsourcing & Remote Talent Corporate Platform",
    category: "web",
    categoryName: "Corporate Web Platform",
    liveUrl: "https://www.innovateoutsource.com/",
    isLive: true,
    linkType: "website",
    image: innovativeOutsourceLogo,
    metric: "3.5x Overseas Lead Inflow",
    overview:
      "The international corporate digital platform for Innovative Outsourcing, showcasing end-to-end BPO solutions, dedicated offshore development teams, customer support operations, and corporate case studies.",
    challenge:
      "Presenting complex BPO/IT service offerings with high trust signals, transparent pricing estimation, and converting international corporate decision-makers in the US and Europe.",
    solution:
      "Built a high-performance modern corporate web portal featuring an interactive staffing cost calculator, verifiable client testimonials, interactive SLA comparisons, and integrated calendar scheduling.",
    results: [
      "350% increase in inbound RFP inquiries from US and European enterprises",
      "Average session duration improved from 45 seconds to 3 minutes 20 seconds",
      "First-page Google rankings across high-value IT outsourcing queries"
    ],
    techStack: ["React", "Next.js", "Node.js", "HubSpot CRM", "Tailored CSS", "Cloudflare"],
    featuredOnHome: false,
  },
];
