export const profile = {
  name: "Tayyab Hussayn",
  short: "Tayyab",
  role: "Full-stack Developer",
  focus: "AI Automation Engineer",
  location: "Lahore, Pakistan",
  timezone: "Asia/Karachi",
  email: "tayyabhussayn@gmail.com",
  github: "https://github.com/Tayyab-Hussayn",
  linkedin: "https://www.linkedin.com/in/tayyab-hussayn/",
  twitter: "https://x.com/tayyabhusayn",
  intro:
    "I build full-stack web applications and AI-powered automation systems, from n8n workflows and agentic pipelines to production Next.js products.",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export const stack = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Python",
  "Flask",
  "FastAPI",
  "n8n",
  "Playwright",
  "PostgreSQL",
  "MongoDB",
  "Supabase",
  "Tailwind CSS",
  "Framer Motion",
  "Docker",
  "Claude API",
  "OpenAI",
  "Gemini",
  "Vue",
  "Three.js",
];

export type Service = {
  slug: string;
  kicker: string;
  title: string;
  body: string;
  tags: string[];
  icon: "code" | "bot" | "chat" | "scrape" | "db" | "saas";
};

export const services: Service[] = [
  {
    slug: "web",
    kicker: "Fast, scalable and production-ready",
    title: "Full-stack Web Development",
    body: "Production web apps built with Next.js, React and TypeScript, taken from the first sketch to a live deployment.",
    tags: ["Next.js", "React", "Node.js"],
    icon: "code",
  },
  {
    slug: "automation",
    kicker: "Work that runs while you sleep",
    title: "AI Automation & Agentic Workflows",
    body: "n8n orchestration, LLM agents and automation pipelines that take repetitive work off your team's plate.",
    tags: ["n8n", "Agents", "Pipelines"],
    icon: "bot",
  },
  {
    slug: "chatbots",
    kicker: "Conversations that actually help",
    title: "Chatbots & LLM Integration",
    body: "Custom assistants and LLM features powered by Claude, OpenAI and Gemini, wired into the tools you already use.",
    tags: ["Claude", "OpenAI", "Gemini"],
    icon: "chat",
  },
  {
    slug: "scraping",
    kicker: "Clean data from messy sources",
    title: "Web Scraping & Data Extraction",
    body: "Reliable extraction with Playwright, Python and headless browsers, delivered as CSV exports, APIs or live feeds.",
    tags: ["Playwright", "Python", "ETL"],
    icon: "scrape",
  },
  {
    slug: "database",
    kicker: "Foundations that scale",
    title: "Database Design & Management",
    body: "PostgreSQL, MongoDB and Supabase architecture: schema design, migrations, indexing and performance tuning.",
    tags: ["PostgreSQL", "MongoDB", "Supabase"],
    icon: "db",
  },
  {
    slug: "saas",
    kicker: "From idea to paying users",
    title: "SaaS Product Development",
    body: "End-to-end SaaS builds with auth, billing, multi-tenancy and infrastructure that grows with your users.",
    tags: ["Auth", "Billing", "Infra"],
    icon: "saas",
  },
];

export const process = [
  {
    n: "01",
    title: "Discovery & Planning",
    body: "I don't start coding until I understand the business goal. We define specs, user flows and edge cases upfront.",
  },
  {
    n: "02",
    title: "Architecture & Design",
    body: "Scalable schemas, clean API contracts and interfaces designed before a single component gets built.",
  },
  {
    n: "03",
    title: "Build & Testing",
    body: "Type-safe code, short sprints and transparent progress updates, so you always know where things stand.",
  },
  {
    n: "04",
    title: "Launch & Growth",
    body: "CI/CD, SSL, DNS and server tuning handled for you, plus support after launch as the product grows.",
  },
];

export type Project = {
  slug: string;
  title: string;
  category: string;
  filter: "AI & Automation" | "Web Apps" | "Tools" | "UI & 3D";
  year: string;
  tagline: string;
  summary: string;
  features: string[];
  stack: string[];
  tint: "volt" | "iris" | "coral" | "aqua";
  cover?: string;
  gallery?: string[];
  video?: string;
  live?: string;
  repo?: string;
  mock?: "terminal" | "chat" | "voice" | "pipeline" | "orders" | "ring" | "nav";
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "querylens",
    title: "QueryLens",
    category: "Database Tooling",
    filter: "Tools",
    year: "2026",
    tagline: "One visual home for Postgres, MySQL, MongoDB and SQLite.",
    summary:
      "A visual database management platform that replaces raw CLI workflows with a fast GUI, without giving up direct SQL access. It auto-discovers installed database engines, pre-fills connection details and gives full control over schema, relationships, indexes, backups and queries from the browser.",
    features: [
      "Auto-detects installed engines and existing databases, so connecting usually needs only a password",
      "Create, edit and drop tables and columns with full constraint support",
      "Visual schema viewer and foreign-key relationship diagram",
      "CSV and JSON import with live progress, plus CSV, JSON and SQL export",
      "Backups and restore through pg_dump, mysqldump and native snapshots",
      "Connection health monitoring with auto-reconnect",
    ],
    stack: ["Next.js 15", "TypeScript", "Tailwind v4", "Zustand", "Flask", "PostgreSQL", "MySQL", "MongoDB", "SQLite"],
    tint: "volt",
    cover: "/work/querylens-12.webp",
    gallery: ["/work/querylens-12.webp", "/work/querylens-6.webp", "/work/querylens-20.webp", "/work/querylens-28.webp"],
    video: "/video/querylens.mp4",
    repo: "https://github.com/Tayyab-Hussayn/querylens",
    featured: true,
  },
  {
    slug: "qalam",
    title: "Qalam",
    category: "SaaS Product",
    filter: "Web Apps",
    year: "2026",
    tagline: "Publish on LinkedIn without sounding like everyone else.",
    summary:
      "A LinkedIn publishing system with voice memory. Users bring their ideas, facts and writing samples, and Qalam drafts posts in their own voice. Drafts, versions, reviewer approvals and scheduling all live in one workspace, and agencies get an isolated workspace per client.",
    features: [
      "Voice profiles trained on the writing samples each user saves",
      "Drafts written from real points, checked against saved examples",
      "Reviewer approvals, versioning and scheduling in one workspace",
      "Separate workspaces for agencies managing multiple clients",
      "Interactive demo that lets people try the product before signing up",
    ],
    stack: ["Python", "LLM pipelines", "Web app", "GitHub Actions CI"],
    tint: "iris",
    cover: "/work/byqalam.webp",
    gallery: ["/work/byqalam.webp", "/work/byqalam_1.webp", "/work/byqalam_2.webp", "/work/byqalam_3.webp"],
    live: "https://www.byqalam.com/",
    featured: true,
  },
  {
    slug: "axon-lead-suite",
    title: "Axon Lead Suite",
    category: "Lead Generation",
    filter: "AI & Automation",
    year: "2026",
    tagline: "Find businesses without a website, then reach them on WhatsApp.",
    summary:
      "An AI-powered lead generation tool for freelancers and agencies. It scrapes Google Maps by location and category, keeps only the businesses that have no website, and runs personalized WhatsApp campaigns straight from the dashboard, with Axon, a built-in AI assistant, helping write the messages.",
    features: [
      "Google Maps lead hunter that checks every listing for a website",
      "Clean lead lists with name, phone number and Maps link",
      "Bulk, personalized WhatsApp outreach with QR-code login",
      "Live dashboard with job progress and logs",
      "Axon AI chat for outreach drafts and coding help",
    ],
    stack: ["Python", "Flask", "Playwright", "WhatsApp Web", "OpenAI API", "Vanilla JS"],
    tint: "coral",
    cover: "/work/leadsgen-3.webp",
    gallery: ["/work/leadsgen-3.webp", "/work/leadsgen-1.webp", "/work/leadsgen-35.webp", "/work/leadsgen-33.webp"],
    video: "/video/leadsgen.mp4",
    repo: "https://github.com/Tayyab-Hussayn/leadsGen",
    featured: true,
  },
  {
    slug: "alvis",
    title: "Alvis Agency",
    category: "Agency Website",
    filter: "Web Apps",
    year: "2026",
    tagline: "A full-stack website for a results-driven digital agency.",
    summary:
      "A full-stack website for a digital marketing agency, with a cinematic hero slider, a nine-service catalogue, case studies, a blog and a consultation funnel. The design leans on bold typography and a deep red accent to sell outcomes rather than activity.",
    features: [
      "Cinematic hero slider with performance metrics",
      "Service catalogue with dedicated detail pages",
      "Case studies, blog and contact funnel",
      "Floating 'talk to an expert' entry point",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Full-stack"],
    tint: "aqua",
    cover: "/work/alvis.webp",
    gallery: ["/work/alvis.webp", "/work/alvis_1.webp", "/work/alvis_2.webp", "/work/alvis_3.webp"],
    live: "https://alvis-six.vercel.app",
    repo: "https://github.com/Tayyab-Hussayn/alvis",
    featured: true,
  },
  {
    slug: "gobind-field-app",
    title: "Gobind Trades Field App",
    category: "Operations Platform",
    filter: "Web Apps",
    year: "2026",
    tagline: "Time, tasks and field reports for a trades workforce.",
    summary:
      "An employee operations app for Gobind Trades Ltd. Field staff sign in to log time, manage tasks and file reports, and access is scoped so each person only sees the projects they're authorized to work on.",
    features: [
      "Secure sign-in, account creation and claiming of existing employee records",
      "Time tracking and task management for field staff",
      "Field reports kept private and scoped to authorized projects",
      "Mobile-first interface built for use on site",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tint: "volt",
    cover: "/work/employee.webp",
    gallery: ["/work/employee.webp"],
    live: "https://employee-dash-zeta.vercel.app",
    repo: "https://github.com/Tayyab-Hussayn/employee-dash",
  },
  {
    slug: "newsletter-agent",
    title: "Newsletter Automation Agent",
    category: "AI Automation",
    filter: "AI & Automation",
    year: "2026",
    tagline: "Tech news from five sources, written up and delivered to WhatsApp.",
    summary:
      "An automated ETL pipeline built in n8n that pulls tech news from Reddit, YouTube, GitHub and Hacker News. Claude turns the raw items into a structured newsletter, and a custom bridge delivers it straight to WhatsApp.",
    features: [
      "Scheduled collection from Reddit, YouTube, GitHub and Hacker News",
      "Deduplication and ranking before anything reaches the model",
      "Claude API writes and structures each newsletter issue",
      "WhatsApp bridge for direct delivery",
    ],
    stack: ["n8n", "Claude API", "OpenRouter", "WhatsApp Bridge"],
    tint: "iris",
    mock: "pipeline",
  },
  {
    slug: "order-online",
    title: "Order Online",
    category: "E-commerce",
    filter: "Web Apps",
    year: "2026",
    tagline: "A restaurant storefront with a real-time owner dashboard.",
    summary:
      "A full-stack restaurant ordering platform with a fast customer storefront and a real-time owner dashboard. Google Maps powers live delivery tracking, and Supabase keeps orders in sync between customers and the kitchen.",
    features: [
      "Customer storefront with cart and checkout",
      "Real-time owner dashboard for incoming orders",
      "Live delivery tracking with Google Maps",
      "Supabase real-time sync",
    ],
    stack: ["React", "TypeScript", "Supabase", "Tailwind CSS", "Google Maps API"],
    tint: "coral",
    mock: "orders",
    repo: "https://github.com/Tayyab-Hussayn/orderOnline",
  },
  {
    slug: "vocalize-ai",
    title: "Vocalize AI",
    category: "Text-to-Speech",
    filter: "AI & Automation",
    year: "2026",
    tagline: "Free, open-source text-to-speech with natural voices.",
    summary:
      "An open-source text-to-speech app that turns written text into natural, human-like voice, with no subscriptions and no paywalls. It offers 50+ voices across 15+ languages, with control over speed, pitch and volume.",
    features: [
      "50+ natural voices with multiple accents",
      "Speech generated in under two seconds",
      "Speed, pitch and volume controls",
      "Glassmorphism UI with smooth motion",
    ],
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "FastAPI", "Edge-TTS"],
    tint: "aqua",
    mock: "voice",
    repo: "https://github.com/Tayyab-Hussayn/vocalize-ai",
  },
  {
    slug: "aeiden-ai",
    title: "Aeiden AI",
    category: "AI Chatbot",
    filter: "AI & Automation",
    year: "2025",
    tagline: "A Gemini-powered chatbot with a 3D animated backdrop.",
    summary:
      "An interactive AI chatbot powered by Google Gemini, wrapped in a futuristic glassmorphism interface with a floating-sphere 3D background drawn on the Canvas API.",
    features: [
      "Real-time chat with typing indicators",
      "Gemini integration with environment-based key management",
      "3D floating sphere background with perspective projection",
      "Responsive on desktop and mobile",
    ],
    stack: ["Python", "Flask", "Gemini API", "JavaScript", "Canvas API"],
    tint: "volt",
    mock: "chat",
    repo: "https://github.com/Tayyab-Hussayn/Aeiden-AI",
  },
  {
    slug: "taskflow-pro",
    title: "TaskFlow Pro",
    category: "Productivity",
    filter: "Tools",
    year: "2025",
    tagline: "A distraction-free stopwatch and task manager.",
    summary:
      "A time management system for developers and working professionals that combines a precise stopwatch with task tracking. It runs fully offline from a single file, so your data stays private.",
    features: ["Advanced stopwatch and time tracking", "Task tracking and management", "Private by design, with no accounts and no servers"],
    stack: ["HTML", "CSS", "JavaScript"],
    tint: "iris",
    cover: "/work/taskflow.webp",
    gallery: ["/work/taskflow.webp"],
    repo: "https://github.com/Tayyab-Hussayn/TaskFlow-Pro",
  },
  {
    slug: "particle-ring",
    title: "Particle Ring",
    category: "3D Component",
    filter: "UI & 3D",
    year: "2025",
    tagline: "A rotating 3D particle ring for React.",
    summary:
      "A reusable React Three Fiber component that renders a rotating 3D ring of particles, with orbit controls and customizable colors and particle positions.",
    features: ["3D rotating particle ring", "Drag to rotate, scroll to zoom", "Customizable colors and layouts"],
    stack: ["React", "React Three Fiber", "Drei", "Three.js"],
    tint: "coral",
    mock: "ring",
    repo: "https://github.com/Tayyab-Hussayn/particle-ring-component",
  },
  {
    slug: "flexible-navbar",
    title: "Flexible Navbar",
    category: "UI Component",
    filter: "UI & 3D",
    year: "2025",
    tagline: "An animated, theme-aware navigation bar.",
    summary:
      "A modern navigation bar component built with React, TypeScript and Framer Motion, with smooth hover animations, a dark and light theme toggle and a fully responsive layout.",
    features: ["Smooth hover animations", "Dark and light theme toggle", "Responsive layout"],
    stack: ["React", "TypeScript", "Framer Motion"],
    tint: "aqua",
    mock: "nav",
    repo: "https://github.com/Tayyab-Hussayn/Flexible-Navbar",
  },
];

export const milestones = [
  { year: "2026", title: "Launched Qalam", note: "LinkedIn publishing SaaS, live at byqalam.com" },
  { year: "2026", title: "Shipped QueryLens", note: "Visual manager for four database engines" },
  { year: "2026", title: "Built Axon Lead Suite", note: "Maps scraping and WhatsApp outreach, end to end" },
  { year: "2026", title: "Delivered a field operations app", note: "For Gobind Trades Ltd." },
  { year: "2024", title: "Started building in public", note: "26 public repositories and counting" },
];

export const principles = [
  {
    quote:
      "You'll always know where the project stands. Short sprints, a working preview link and honest updates, including when something is harder than expected.",
    who: "Transparent by default",
  },
  {
    quote:
      "I build for the business goal, not the tech stack. If a simpler tool solves the problem faster and cheaper, that's what I'll recommend.",
    who: "Outcomes over output",
  },
  {
    quote:
      "Clean, typed, documented code you can hand to any developer. When we're done, you own everything and you're never locked in.",
    who: "Built to hand over",
  },
];

export const faqs = [
  {
    q: "What kind of projects do you take on?",
    a: "Full-stack web apps, SaaS products, AI automations and chatbots, scraping and data tools, and database work. If it lives in a browser or runs on a server, I can probably help.",
  },
  {
    q: "Do you work with existing engineering teams?",
    a: "Yes. I can slot into your repo, follow your conventions and ship through your review process, or own a self-contained piece of the product end to end.",
  },
  {
    q: "What is your approach to performance?",
    a: "Performance is part of the design from day one: server rendering where it helps, lean bundles, optimized media, indexed queries and caching. I measure with Lighthouse and real-user metrics rather than guessing.",
  },
  {
    q: "How do you handle project handovers?",
    a: "You get the full source in your own repository, environment setup notes, a short walkthrough of the architecture and deployment, and support while your team settles in.",
  },
  {
    q: "How flexible is your tech stack?",
    a: "My home base is Next.js, TypeScript, Python and Postgres, but I pick tools for the problem. I've shipped with Vue, Flask, FastAPI, Supabase, MongoDB, n8n and Playwright.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes. I'm based in Lahore (PKT, UTC+5) and work async-first with clients in any timezone, with overlap hours for calls.",
  },
];
