export interface MetaItem {
  icon: string;
  text: string;
  accent: "primary" | "tertiary" | "primary-container";
}

export interface PipelineNode {
  label: string;
  meta: string;
  dotColor: string;
}

export interface TerminalPanel {
  windowTitle: string;
  status: string;
  codeLine: string;
  nodes: PipelineNode[];
  telemetry: string;
}

export interface HeroContent {
  eyebrow: string;
  name: string;
  role: string;
  pitch: string;
  meta: MetaItem[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  terminal: TerminalPanel;
}

export interface AboutBlock {
  icon: string;
  title: string;
  body: string;
}

export interface SkillGroup {
  index: string;
  title: string;
  tags: string[];
}

export interface AboutContent {
  headline: string;
  blocks: AboutBlock[];
  skillGroups: SkillGroup[];
}

export interface ExperienceEntry {
  id: string;
  commit: string;
  headRef?: string;
  title: string;
  org: string;
  dateRange: string;
  description: string;
  tags: string[];
  current?: boolean;
}

export interface ProjectEntry {
  title: string;
  badge: string;
  status: string;
  description: string;
  tags: string[];
  linkLabel: string;
  linkHref: string;
}

export interface ContactLink {
  command: string;
  label: string;
  href: string;
  icon: string;
}

export const hero: HeroContent = {
  eyebrow: "~$ whoami --verbose",
  name: "Alex Rodrigues",
  role: "AI Engineer & Staff-Level Mobile Engineer",
  pitch:
    "I build retrieval and agentic systems — RAG, MCP, LLM agents, vector search — and ship them the way 11+ years of production mobile engineering teaches you to: measured, tested, and built to survive contact with real users.",
  meta: [
    { icon: "payments", text: "11+ yrs · Fintech & Payments", accent: "primary" },
    { icon: "public", text: "Remote US/EU · GMT-3", accent: "tertiary" },
    { icon: "location_on", text: "São Paulo, Brazil", accent: "primary-container" },
  ],
  ctaPrimary: { label: "View Experience", href: "#experience" },
  ctaSecondary: { label: "Get in Touch", href: "#contact" },
  terminal: {
    windowTitle: "pipeline_v2.py — retrieval-eval",
    status: "RUNNING",
    codeLine: "def execute_retrieval_dag():",
    nodes: [
      { label: "Source Code (iOS/Android/Web)", meta: "AST-walk", dotColor: "text-tertiary" },
      { label: "AST Chunking", meta: "tree-sitter", dotColor: "text-primary-container" },
      { label: "Local Embeddings", meta: "0 leaks // airgapped", dotColor: "text-primary" },
      { label: "Vector Search (LanceDB)", meta: "cosine-sim", dotColor: "text-[#f59e0b]" },
      { label: "LLM Agent via MCP", meta: "tool-call", dotColor: "text-[#a855f7]" },
    ],
    telemetry: "hit@10 94.2% · MRR 0.88 · 0 bytes leaked",
  },
};

export const about: AboutContent = {
  headline: "Engineering with production discipline, from mobile cores to agentic systems.",
  blocks: [
    {
      icon: "psychology",
      title: "Agentic Systems & Local Retrieval",
      body: "AI Engineer with a Staff-level mobile engineering foundation. Since March 2026 I've been building the AI and retrieval layer that powers an engineering team's tooling: an indexing and retrieval pipeline in Python with AST-aware chunking, agent integrations distributed over MCP, and an evaluation harness (hit@k, MRR) that turns 'does this change help retrieval' into a number instead of a guess — all running on local embeddings, so no proprietary source ever leaves the machine.",
    },
    {
      icon: "phone_iphone",
      title: "Staff Mobile & Platform Foundations",
      body: "Before that: 11+ years building mobile at fintech and payments scale — native Android (Kotlin, Jetpack Compose), Flutter, and iOS (Swift/SwiftUI) — most recently as a Staff Mobile Engineer across large-scale fintech and global payments platforms, including a Kotlin Multiplatform migration for a fintech client.",
    },
  ],
  skillGroups: [
    {
      index: "01",
      title: "AI / Retrieval",
      tags: ["RAG", "Vector Search (LanceDB)", "MCP", "LLM Agents", "Python", "Eval (hit@k / MRR)"],
    },
    {
      index: "02",
      title: "Mobile",
      tags: ["Kotlin · Jetpack Compose", "Swift · SwiftUI", "Flutter · Dart", "Kotlin Multiplatform"],
    },
    {
      index: "03",
      title: "Engineering",
      tags: ["CI/CD Automation", "Performance Optimization", "Testing (XCUITest, Espresso, Maestro)", "Mentorship"],
    },
  ],
};

export const experience: ExperienceEntry[] = [
  {
    id: "ai-engineer",
    commit: "commit 9e4f21a",
    headRef: "[HEAD -> origin/main]",
    title: "AI Engineer",
    org: "Consultant via Ambush, placed at a global payments platform",
    dateRange: "Mar 2026 – Present",
    description:
      "Built the retrieval infrastructure an engineering team's AI tooling runs on: a Python RAG pipeline over backend, web, iOS and Android codebases with AST-aware chunking; semantic search exposed to LLM coding agents over MCP; an eval harness (hit@k, MRR) that surfaced real retrieval defects; all on local embeddings for privacy.",
    tags: ["Python", "AST Parser", "MCP Protocol", "LanceDB", "Eval Harness"],
    current: true,
  },
  {
    id: "staff-mobile-ai-engineer",
    commit: "commit d72b904",
    title: "Staff Mobile & AI Engineer",
    org: "Consultant via Ambush, placed at a top-tier global crypto exchange · ~19 months",
    dateRange: "Dec 2024 – Jul 2026",
    description:
      "Shipped a One-Click Buy & Sell flow end-to-end in one month; built Voucher, Token Recommendation, Boost & Staking and One-Click Multi-Buy features; core engineer on a native-to-Flutter migration pilot; ~2,500 commits, 76 PRs authored across Android/iOS/Flutter.",
    tags: ["Flutter", "Android / Kotlin", "iOS / Swift", "Crypto Trading"],
  },
  {
    id: "kmp-migration",
    commit: "commit 5c128fe",
    title: "Mobile Engineer, KMP Migration",
    org: "Consultant via Ambush, placed at a fintech client",
    dateRange: "~6 months",
    description:
      "Contributed to a native-to-Kotlin-Multiplatform migration; the architecture shift remained in place after the engagement.",
    tags: ["Kotlin Multiplatform", "Shared Architecture"],
  },
  {
    id: "xp-inc",
    commit: "commit a3091e4",
    title: "Senior Mobile Engineer → Staff Engineer",
    org: "XP Inc.",
    dateRange: "Jun 2019 – Oct 2023",
    description:
      "Co-led XP's Credit Card app from scratch on iOS and Android, MVP in three months during the pandemic. Promoted to Staff Engineer with a cross-tribe mandate; grew the next generation of mobile engineers org-wide.",
    tags: ["Fintech Credit Card", "Staff Leadership", "iOS / Android"],
  },
  {
    id: "sky-brasil",
    commit: "commit b8824df",
    title: "Senior Mobile Engineer (iOS & Android)",
    org: "SKY Brasil",
    dateRange: "Jul 2016 – Jun 2019",
    description:
      "Led the complete revamp of a national pay-TV app; built an early AI-powered media assistant on IBM Watson and a voice-controlled Alexa Skill for set-top boxes.",
    tags: ["IBM Watson AI", "Alexa Skills", "Streaming Media"],
  },
  {
    id: "bradesco",
    commit: "commit 21b409a",
    title: "iOS Developer",
    org: "Bradesco",
    dateRange: "Nov 2015 – Jul 2016",
    description:
      "Built OTP and secure tokenization for a major Brazilian bank's retail iOS app; engineered remote cheque deposit.",
    tags: ["Banking Security", "OTP Tokenization"],
  },
  {
    id: "prodesp",
    commit: "commit 03e91aa",
    title: "iOS Developer",
    org: "Prodesp (São Paulo State Technology Company)",
    dateRange: "Apr 2015 – Nov 2015",
    description:
      "Built public-sector apps for the State of São Paulo, including the state DMV-equivalent vehicle registration app.",
    tags: ["Civic Tech", "Public Sector"],
  },
];

export const projects: ProjectEntry[] = [
  {
    title: "SafeMind",
    badge: "Founder & Engineer · Live Product",
    status: "status: online",
    description:
      "A live two-sided marketplace connecting patients with support providers. Built solo end-to-end — product, design, engineering, growth — in Next.js, Tailwind CSS and Firebase (Auth, Firestore).",
    tags: ["Next.js", "Tailwind CSS", "Firebase", "Firestore"],
    linkLabel: "Visit safemind.app.br",
    linkHref: "https://safemind.app.br",
  },
  {
    title: "DroidPokedex",
    badge: "Open-Source Tooling",
    status: "status: active",
    description:
      "An autonomous Python agent that intercepts pull requests, analyzes architectural git diffs with RAG/LLM, and dynamically generates ready-to-use Maestro YAML UI tests for newly detected surface areas in an Android codebase.",
    tags: ["GitHub Actions", "Python", "OpenAI API", "RAG", "Maestro"],
    linkLabel: "View Repository",
    linkHref: "https://github.com/alexrodrigues/droidpokedex",
  },
  {
    title: "GithubKotlinBackend",
    badge: "Backend · API",
    status: "status: completed",
    description:
      "A Kotlin backend (Ktor) serving GitHub repository data through a clean layered architecture — Controller, Service, Repository, Mapper — with coroutine-based async fetch and JSON serialization.",
    tags: ["Kotlin", "Ktor", "Coroutines", "Clean Architecture"],
    linkLabel: "View Repository",
    linkHref: "https://github.com/alexrodrigues/GithubKotlinBackend",
  },
  {
    title: "Cross-Platform Lab",
    badge: "Multi-Stack Build",
    status: "status: active",
    description:
      "The same app, built four native ways — Android (Kotlin), iOS (Swift/VIPER), Flutter, and Kotlin Multiplatform — backed by a shared Ktor API, to master each platform's own idioms rather than relying on one cross-platform shortcut.",
    tags: ["Android", "iOS", "Flutter", "KMP"],
    linkLabel: "View Architecture Specs",
    linkHref: "https://github.com/alexrodrigues?tab=repositories&q=githubstars",
  },
];

export const contactHeadline = "Let's build something that survives contact with real users.";
export const contactSubline =
  "Whether you need high-precision retrieval systems, agentic developer tooling, or battle-tested staff mobile architecture.";

const whatsappNumber = "5511968312375"; // +55 11 96831-2375, digits only
const whatsappMessage = "Hi Alex, I saw your portfolio and I'd like to talk about...";
export const whatsappHref = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

export const contactLinks: ContactLink[] = [
  {
    command: "$ open",
    label: "wa.me/5511968312375",
    href: whatsappHref,
    icon: "whatsapp",
  },
  {
    command: "$ open",
    label: "linkedin.com/in/alex-rodrigues",
    href: "https://linkedin.com/in/alex-rodrigues",
    icon: "open_in_new",
  },
  {
    command: "$ open",
    label: "github.com/alexrodrigues",
    href: "https://github.com/alexrodrigues",
    icon: "code",
  },
];

export const footer = {
  copyright: "Alex Rodrigues — São Paulo, Brazil · Remote US/EU · GMT-3 · © 2026",
  status: "Deployed via GitHub Actions // System status: all green",
  links: [
    { label: "github", href: "https://github.com/alexrodrigues" },
    { label: "linkedin", href: "https://linkedin.com/in/alex-rodrigues" },
    { label: "pgp-key", href: "#about" },
    { label: "system-telemetry ↑", href: "#hero" },
  ],
};

export const nav = {
  wordmark: "alex.rodrigues",
  links: [
    { label: "// 01 about", href: "#about" },
    { label: "// 02 experience", href: "#experience" },
    { label: "// 03 projects", href: "#projects" },
    { label: "// 04 contact", href: "#contact" },
  ],
  openToWork: "Open to work",
};
