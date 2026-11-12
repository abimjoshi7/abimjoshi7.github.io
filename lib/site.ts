export const SITE_URL = "https://abimjoshi7.github.io";

/**
 * The date the page content last changed, not the date it was last built.
 * `new Date()` in the sitemap churned `lastmod` on every deploy, which teaches
 * crawlers to ignore the field. Bump this when the copy actually changes.
 */
export const CONTENT_LAST_MODIFIED = "2026-11-12";

export const siteConfig = {
  url: SITE_URL,
  name: "Abim Joshi",
  jobTitle: "Software Engineer",
  title: "Abim Joshi - Software Engineer",
  shortTitle: "Abim Joshi",
  description:
    "Portfolio of Abim Joshi — software engineer and founder of Attatva Systems. Builds for daily return visits, systems that stay fast as they grow, evidence before merge, and delivery under real deadlines.",
  socialDescription:
    "Software engineer & Attatva Systems founder — habits, calm scale, proof before ship, deadlines that hold.",
  email: "abimjoshi7@gmail.com",
  phone: "+977-9860920006",
  locality: "Kathmandu",
  country: "NP",
  employer: "Attatva Systems",
  socials: [
    "https://github.com/abimjoshi7",
    "https://www.linkedin.com/in/abimjoshi7",
  ],
  knowsAbout: [
    "Next.js",
    "TypeScript",
    "Rust",
    "Axum",
    "Spring Boot",
    "SQL",
    "Flutter",
    "Dart",
    "Kotlin",
    "Jetpack Compose",
    "Swift",
    "SwiftUI",
    "Java",
    "Clean Architecture",
    "SOLID Principles",
    "CI/CD",
  ],
  keywords: [
    "Abim Joshi",
    "Software Engineer",
    "Attatva Systems",
    "Next.js",
    "TypeScript",
    "Rust",
    "Axum",
    "Spring Boot",
    "Flutter",
    "Jetpack Compose",
    "SwiftUI",
    "Kotlin",
    "Kathmandu",
  ],
} as const;

/** Web platforms. Listed before the published-app showcase. */
export const webProjects = [
  {
    id: "ghumtibags",
    name: "Ghumti Bags",
    icon: "🎒",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    category: "E-commerce",
    outcome: "Buy a Nepali bag brand online — or run the shop behind it.",
    description:
      "Shoppers browse the catalogue, check out, and track orders on the brand’s own storefront. The team manages products, stock and fulfilment from one admin desk instead of juggling marketplace fees and spreadsheets.",
    url: "https://www.ghumtibags.com",
    appsComingSoon: true,
  },
  {
    id: "erpesque",
    name: "ERPesque",
    icon: "📊",
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    category: "ERP",
    outcome: "One source of truth for stock, sales and books across branches.",
    description:
      "SME owners and staff stop reconciling separate ledgers: inventory, POS-style sales, payables/receivables and multi-branch reports live in one system — including when field teams need answers on a weak connection.",
    url: "https://erpesque.web.app",
    appsComingSoon: false,
  },
] as const;

/** Single source for the section links used by both the header and the footer. */
export const navItems = [
  { name: "home", label: "Home", href: "#home" },
  { name: "about", label: "About", href: "#about" },
  { name: "skills", label: "Skills", href: "#skills" },
  { name: "projects", label: "Projects", href: "#projects" },
  { name: "experience", label: "Experience", href: "#experience" },
  { name: "contact", label: "Contact", href: "#contact" },
] as const;

export const contact = {
  email: "abimjoshi7@gmail.com",
  phone: "+977-9860920006",
  phoneHref: "tel:+9779860920006",
  location: "Shankhamul-31, Kathmandu",
  github: "https://github.com/abimjoshi7",
  linkedin: "https://www.linkedin.com/in/abimjoshi7",
} as const;

/** Headline numbers, all backed by the résumé. */
export const stats = [
  { label: "YEARS", value: "6+" },
  { label: "PUBLISHED APPS", value: "13" },
] as const;

export interface PublishedApp {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  category: string;
  /** schema.org applicationCategory */
  schemaCategory: string;
  /** One-line user value — shown first in the project details panel. */
  outcome: string;
  description: string;
  tech: string[];
  playStore?: string;
  appStore?: string;
}

/**
 * The published applications from the résumé. Single source for both the phone
 * showcase and the SoftwareApplication structured data, so the two cannot drift.
 * Store URLs are taken verbatim from the résumé's embedded links.
 * Copy leads with what the end user can do, not a feature laundry list.
 */
export const publishedApps: PublishedApp[] = [
  {
    id: "erpesque",
    name: "ERPesque",
    icon: "📊",
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    category: "ERP · POS",
    schemaCategory: "BusinessApplication",
    outcome: "Ring sales and keep stock honest — even when the network drops.",
    description:
      "Shop and warehouse teams handle inventory, POS-style sales and accounting on Android so multi-branch SMEs stay aligned without waiting for someone back at the office to update a spreadsheet.",
    tech: ["Flutter", "Dart", "PostgreSQL", "REST"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.abimatwork.erpesque",
  },
  {
    id: "vaultesque",
    name: "Vaultesque",
    icon: "🔐",
    gradient: "from-slate-500 via-zinc-600 to-neutral-800",
    category: "Security",
    schemaCategory: "SecurityApplication",
    outcome: "Passwords stay on your device — not in someone else’s cloud.",
    description:
      "Unlock credentials offline with local encryption when you need a login and prefer not to sync secrets to a third-party vault. Built for people who want private access without a subscription tethered to a remote server.",
    tech: ["Flutter", "Dart", "Encryption", "SQLite"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.abimatwork.vaultesque",
  },
  {
    id: "callbreak",
    name: "Callbreak Quest",
    icon: "🃏",
    gradient: "from-rose-500 via-red-600 to-orange-600",
    category: "Games",
    schemaCategory: "GameApplication",
    outcome: "Offline Callbreak — classic hands or a Himalayan rogue-like climb.",
    description:
      "Play five-hand Callbreak against bots with house rules, speed and difficulty controls, or take a rogue-like run through regions and bosses. No account, no ads; English, नेपाली and हिन्दी. Built by Attatva Systems.",
    tech: ["Flutter", "Dart"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.attatvasystems.callbreak",
  },
  {
    id: "kaji",
    name: "Kaji",
    icon: "🎲",
    gradient: "from-lime-500 via-emerald-600 to-teal-700",
    category: "Games",
    schemaCategory: "GameApplication",
    outcome: "Property board nights — pass-and-play or local Wi‑Fi multiplayer.",
    description:
      "Roll, buy, trade and collect rent on themed boards. Solo against bots, pass one phone around the table, or host friends on the same Wi‑Fi with a join code or QR. No account, ads or cloud game server — from Attatva Systems.",
    tech: ["Flutter", "Dart"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.attatvasystems.kaji",
  },
  {
    id: "bizak",
    name: "Bizak",
    icon: "💼",
    gradient: "from-indigo-500 via-blue-600 to-cyan-600",
    category: "ERP",
    schemaCategory: "BusinessApplication",
    outcome: "Run sales, inventory and finance from one ERP in your pocket.",
    description:
      "Bizak: ERP Simplified for SME teams — sales, inventory, finance and field sales management so owners and staff stop juggling separate tools. Published with Raindrop Inc. on Android.",
    tech: ["Flutter", "Dart", "Offline-first", "REST"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.raindropinc.bizak",
  },
  {
    id: "sfm",
    name: "SFM",
    icon: "📍",
    gradient: "from-cyan-500 via-teal-600 to-emerald-700",
    category: "Field sales",
    schemaCategory: "BusinessApplication",
    outcome: "Field sales teams track sales, stock and routes without the office spreadsheet.",
    description:
      "Sales Field Management for Raindrop’s Bizak stack — inventory, finance and field sales workflows built for reps working away from the desk on Android.",
    tech: ["Flutter", "Dart", "Offline-first", "REST"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.bizak.sfm.raindrop",
  },
  {
    id: "fishtechy",
    name: "Flytechy / Fishtechy",
    icon: "🎣",
    gradient: "from-cyan-500 via-sky-600 to-blue-700",
    category: "AI · Fishing",
    schemaCategory: "SportsApplication",
    outcome: "Measure a catch from media — then prove it in competition.",
    description:
      "Anglers skip the tape measure and the argument: media yields length and size, a verified log lands on the leaderboard, and catch-and-release stays part of the story. Flytechy on Android, Fishtechy on iOS.",
    tech: ["Flutter", "Jetpack Compose", "SwiftUI", "Computer Vision", "FFmpeg"],
    playStore: "https://play.google.com/store/apps/details?id=io.futrix.flytechy",
    appStore: "https://apps.apple.com/us/app/fishtechy/id6466132447",
  },
  {
    id: "aquabuildr",
    name: "Aquabuildr",
    icon: "🐠",
    gradient: "from-teal-400 via-emerald-500 to-green-600",
    category: "AI · Aquarium",
    schemaCategory: "LifestyleApplication",
    outcome: "Stock a tank that stays healthy — before fish die from bad mixes.",
    description:
      "Hobbyists check 600+ species for compatibility, watch water parameters, schedule maintenance and ask an in-app AI for care advice. Fewer incompatible tank mates, fewer missed water changes, clearer next steps when something looks wrong.",
    tech: ["Flutter", "Dart", "AI Chat", "WebSocket"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.aquabuildr.Aquabuildr",
    appStore: "https://apps.apple.com/us/app/aquabuildr/id1568234361",
  },
  {
    id: "merolagani",
    name: "Mero Lagani",
    icon: "📈",
    gradient: "from-green-500 via-green-600 to-teal-600",
    category: "Fintech",
    schemaCategory: "FinanceApplication",
    outcome: "Follow NEPSE in your pocket — prices, portfolio and IPO results.",
    description:
      "Nepali investors see live share prices and the floor sheet, track a portfolio and watchlists, get price alerts and check IPO outcomes without waiting on a delayed broker screen or a desktop terminal.",
    tech: ["Flutter", "Dart", "Web-Engage", "Retrofit"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.podamibe.merolagani&hl=en",
    appStore:
      "https://apps.apple.com/np/app/merolagani-nepse-app/id1583525414",
  },
  {
    id: "meroschool",
    name: "Mero School",
    icon: "🎓",
    gradient: "from-blue-500 via-blue-600 to-purple-600",
    category: "Ed-tech",
    schemaCategory: "EducationalApplication",
    outcome: "Students learn online — lessons, practice and progress in one app.",
    description:
      "An online learning platform for students: coursework, practice and progress tracking on the phone so studying doesn’t depend on a classroom clock or a stack of photocopied notes.",
    tech: ["Flutter", "Dart", "Firebase", "Bloc"],
    playStore: "https://play.google.com/store/apps/details?id=school.mero.lms",
    appStore: "https://apps.apple.com/np/app/mero-school/id1581089279",
  },
  {
    id: "merohealthcare",
    name: "Mero Health Care",
    icon: "🏥",
    gradient: "from-red-500 via-pink-500 to-red-600",
    category: "Healthcare",
    schemaCategory: "HealthApplication",
    outcome: "Find a doctor, consult, and get medicine without the clinic queue.",
    description:
      "Patients discover doctors, book visits or teleconsults, receive digital prescriptions, keep medical history handy and order pharmacy delivery to the door — care that fits around work and travel, not the other way around.",
    tech: ["Flutter", "Dart", "Clean Architecture"],
  },
  {
    id: "homaale",
    name: "Homaale",
    icon: "🏠",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    category: "Marketplace",
    schemaCategory: "BusinessApplication",
    outcome: "Book nearby home help — and know when someone’s on the way.",
    description:
      "Households match with local service providers by location, request help and get push updates instead of cold-calling numbers or waiting without status. Providers get discoverable demand in their area.",
    tech: ["Flutter", "Dart", "Firestore", "Bloc"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.cagtu.cipher&hl=en_US",
  },
  {
    id: "onecorner",
    name: "One Corner",
    icon: "🛍️",
    gradient: "from-purple-500 via-indigo-500 to-blue-500",
    category: "Hospitality",
    schemaCategory: "BusinessApplication",
    outcome: "Order from the venue without hunting staff across the floor.",
    description:
      "Guests place orders and stay updated with push alerts while the hospitality team keeps the community engaged — less lost tickets, fewer “where’s my order?” moments during busy service.",
    tech: ["Flutter", "Dart", "Isar", "Retrofit"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.onecorner.orderapp",
    appStore:
      "https://apps.apple.com/us/app/one-corner-hospitality/id1580080019",
  },
];
