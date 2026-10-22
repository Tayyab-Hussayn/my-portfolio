export const profile = {
  name: "Tayyab Hussain",
  short: "Tayyab",
  role: "AI & Automation Developer",
  focus: "Full Stack Developer at Gobind Trades Ltd",
  location: "Lahore, Pakistan",
  timezone: "Asia/Karachi",
  email: "tayyabhussayn@gmail.com",
  github: "https://github.com/Tayyab-Hussayn",
  linkedin: "https://www.linkedin.com/in/tayyab-hussayn/",
  twitter: "https://x.com/tayyabhusayn",
  intro:
    "I'm an AI & Automation Developer and a Full Stack Developer at Gobind Trades Ltd. I build AI agents that handle real business work, like WhatsApp ordering bots, LinkedIn publishing and lead finding, plus the web apps around them.",
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
  role?: string;
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
      "A browser-based database manager for PostgreSQL, MySQL, MongoDB and SQLite. It detects installed database engines automatically, and lets you edit schemas, view table relationships, run backups and write queries in a SQL console with autocomplete.",
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
    title: "byQalam",
    category: "AI Content Agent",
    filter: "Web Apps",
    year: "Aug 2025",
    role: "Full Stack & AI Developer (independent product)",
    tagline: "A LinkedIn agent that writes your posts and publishes them.",
    summary:
      "My own product: a LinkedIn AI content agent that drafts posts for users and publishes them to LinkedIn on its own. I owned the whole product from backend to UI, using agentic coding workflows.",
    features: [
      "Drafts LinkedIn posts for each user",
      "Publishes the posts to LinkedIn automatically",
      "Built end to end by one developer, backend to UI",
    ],
    stack: ["Python", "TypeScript", "Docker", "LLM pipelines"],
    tint: "iris",
    cover: "/work/byqalam.webp",
    gallery: ["/work/byqalam.webp", "/work/byqalam_1.webp", "/work/byqalam_2.webp", "/work/byqalam_3.webp"],
    live: "https://www.byqalam.com/",
    featured: true,
  },
  {
    slug: "axon-lead-suite",
    title: "LeadsGen",
    category: "Lead Generation",
    filter: "AI & Automation",
    year: "2026",
    tagline: "Find businesses without a website, then reach them on WhatsApp.",
    summary:
      "Scrapes Google Maps for businesses in any area and category, keeps only the ones without a website, and sends them personalized WhatsApp messages in bulk. It comes with a live dashboard and a built-in AI assistant for drafting outreach messages.",
    features: [
      "Google Maps lead hunter that checks every listing for a website",
      "Clean lead lists with name, phone number and Maps link",
      "Bulk, personalized WhatsApp outreach (WhatsApp only, no email)",
      "Live dashboard with job progress and logs",
      "Built-in AI assistant for drafting outreach messages",
    ],
    stack: ["Python", "Flask", "Playwright", "OpenAI API"],
    tint: "coral",
    cover: "/work/leadsgen-3.webp",
    gallery: ["/work/leadsgen-3.webp", "/work/leadsgen-1.webp", "/work/leadsgen-35.webp", "/work/leadsgen-33.webp"],
    video: "/video/leadsgen.mp4",
    repo: "https://github.com/Tayyab-Hussayn/leadsGen",
    featured: true,
  },
  {
    slug: "alvis",
    title: "Alvis",
    category: "Agency Website",
    filter: "Web Apps",
    year: "Sep 2026",
    role: "Full Stack & AI Developer (freelance)",
    tagline: "A production website and AI voice assistant for a digital marketing agency.",
    summary:
      "The full production website for Alvis, a digital marketing, web and AI services agency. I built it alone in one week, writing the code with AI coding agents, and built an AI voice calling assistant for the agency alongside it. This was a side project during my job at Gobind Trades Ltd.",
    features: [
      "Full production website, built solo in one week",
      "Code written with AI coding agents",
      "AI voice calling assistant built for the agency",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "AI coding agents"],
    tint: "aqua",
    cover: "/work/alvis.webp",
    gallery: ["/work/alvis.webp", "/work/alvis_1.webp", "/work/alvis_2.webp", "/work/alvis_3.webp"],
    live: "https://alvismarketing.com/",
    repo: "https://github.com/Tayyab-Hussayn/alvis",
    featured: true,
  },
  {
    slug: "gobind-field-app",
    title: "Gobind Trades Employee App",
    category: "Construction Management",
    filter: "Web Apps",
    year: "May 2026 – Present",
    role: "Full Stack Developer (full-time)",
    tagline: "The employee app for a construction management platform.",
    summary:
      "The employee app for Gobind Trades Ltd's construction management software. I built it end to end with one other developer, from the database and API to the screens employees work in. I also worked with the team on the admin dashboard, which together with the employee app makes up the company's platform.",
    features: [
      "Employee app built full stack, database to screens",
      "Admin dashboard built together with the team",
      "Two apps that together form the construction management platform",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    tint: "volt",
    cover: "/work/employee.webp",
    gallery: ["/work/employee.webp"],
    live: "https://gtos-employee.srv1763060.hstgr.cloud/",
    repo: "https://github.com/Tayyab-Hussayn/employee-dash",
  },
  {
    slug: "myhomedoc",
    title: "MyHomeDoc",
    category: "Doctor Website",
    filter: "Web Apps",
    year: "2026 – Present",
    role: "Frontend Developer (freelance)",
    tagline: "A practice website for a US doctor.",
    summary:
      "The website for a US doctor's practice. I built the frontend under a senior developer, and I still handle the client's change requests and fixes on the live site.",
    features: ["Frontend built under a senior developer", "Ongoing client change requests and fixes on the live site"],
    stack: ["Frontend"],
    tint: "aqua",
    mock: "nav",
    live: "https://myhomedoc.care",
  },
  {
    slug: "techspirex",
    title: "Techspirex",
    category: "Company Website",
    filter: "Web Apps",
    year: "2023 – 2024",
    role: "WordPress Developer (full-time)",
    tagline: "A software company's website in custom code, no page builders.",
    summary:
      "The website for Techspirex, a software development company. I built it in custom code with no page builders, covering frontend structure, responsive design and deployment, and kept it running after launch with updates and technical support.",
    features: ["Custom-coded WordPress site, no page builders", "Responsive design and deployment", "Updates and technical support after launch"],
    stack: ["WordPress", "Custom code"],
    tint: "coral",
    mock: "nav",
    live: "https://www.techspirex.com/",
  },
  {
    slug: "restaurant-agent",
    title: "Restaurant WhatsApp Agent",
    category: "AI Agent",
    filter: "AI & Automation",
    year: "2026",
    role: "Personal project",
    tagline: "A WhatsApp bot that takes restaurant orders.",
    summary:
      "A WhatsApp bot that chats with restaurant customers in short, natural Roman Urdu, sends menu photos, takes the order and confirms it before placing it. Totals are calculated in code rather than by the model, and the confirmed order goes straight to the owner's WhatsApp. If staff reply from the restaurant's phone, the bot steps back from that chat.",
    features: [
      "Chats in short, natural Roman Urdu and sends menu photos",
      "Confirms the order with the customer before placing it",
      "Totals calculated in code, not by the model",
      "Confirmed order sent to the owner's WhatsApp",
      "Steps back when staff reply from the restaurant's phone",
    ],
    stack: ["Python", "FastAPI", "Claude API", "WhatsApp", "Docker"],
    tint: "iris",
    mock: "chat",
  },
  {
    slug: "smart-notes",
    title: "Smart Sticky Notes",
    category: "Mobile App",
    filter: "Tools",
    year: "2026",
    role: "Personal project (in development)",
    tagline: "Notes, reminders and to-dos on the phone's home screen.",
    summary:
      "A Kotlin app that puts notes, reminders and to-dos right on the phone's home screen, so they stay in view without opening the app. It runs on a FastAPI and PostgreSQL backend. I built it by running several AI coding agents in parallel, each owning one part of the codebase. Still in development.",
    features: [
      "Notes, reminders and to-dos on the home screen",
      "FastAPI and PostgreSQL backend",
      "Built with several AI coding agents working in parallel",
    ],
    stack: ["Kotlin", "Compose Multiplatform", "FastAPI", "PostgreSQL"],
    tint: "volt",
    mock: "terminal",
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
    tagline: "A restaurant website with online ordering and an owner admin panel.",
    summary:
      "A restaurant website with an online menu, cart, ordering and table reservations. The owner gets an admin panel to manage menu items, categories, photos and settings, with all data stored in Supabase.",
    features: [
      "Online menu, cart and ordering",
      "Table reservations",
      "Admin panel for menu items, categories, photos and settings",
      "All data stored in Supabase",
    ],
    stack: ["React", "Vite", "TypeScript", "Supabase", "Tailwind CSS"],
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
    live: "https://vocalize-ai-five.vercel.app",
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
  { year: "2026", title: "Built the Alvis website", note: "Full production site in one week, plus an AI voice calling assistant" },
  { year: "2026", title: "Joined Gobind Trades Ltd", note: "Full Stack Developer on the employee app and admin dashboard" },
  { year: "2026", title: "Built LeadsGen", note: "Maps scraping and WhatsApp outreach, end to end" },
  { year: "2025", title: "Launched byQalam", note: "LinkedIn AI content agent, live at byqalam.com" },
  { year: "2023", title: "WordPress Developer at Techspirex", note: "Company website in custom code, 2023 – 2024" },
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
