export const SITE_URL = "https://abimjoshi7.github.io";

export const siteConfig = {
  url: SITE_URL,
  name: "Abim Joshi",
  jobTitle: "Software Engineer",
  title: "Abim Joshi - Software Engineer",
  shortTitle: "Abim Joshi",
  description:
    "Portfolio of Abim Joshi, Software Engineer with 6+ years building full-stack web and production-grade mobile apps — Next.js, Rust (Axum), Spring Boot, Flutter, Jetpack Compose and SwiftUI.",
  socialDescription:
    "Full-stack and mobile engineer — Next.js, Rust, Spring Boot, Flutter, Jetpack Compose, SwiftUI",
  email: "abimjoshi7@gmail.com",
  phone: "+977-9860920006",
  locality: "Kathmandu",
  country: "NP",
  employer: "Shrig Solutions",
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
    "Full Stack Developer",
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

/** Full-stack web work. Listed before the mobile showcase. */
export const webProjects = [
  {
    id: "ghumtibags",
    name: "Ghumti Bags",
    icon: "🎒",
    gradient: "from-amber-500 via-orange-500 to-red-500",
    category: "E-commerce",
    description:
      "Full-stack e-commerce platform for a Nepali bag brand — product catalogue, cart and checkout, order management and an admin dashboard.",
    url: "https://www.ghumtibags.com",
    appsComingSoon: true,
  },
  {
    id: "erpesque",
    name: "Erpesque",
    icon: "📊",
    gradient: "from-sky-500 via-blue-600 to-indigo-600",
    category: "ERP",
    description:
      "Full-stack ERP platform covering accounting, inventory and multi-branch reporting, built for SMEs with complex operational workflows.",
    url: "https://erpesque.web.app",
    appsComingSoon: true,
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
  { label: "PUBLISHED APPS", value: "7" },
  { label: "COMPANIES", value: "4" },
] as const;

export const spokenLanguages = ["Nepali", "English", "Hindi"] as const;

export interface PublishedApp {
  id: string;
  name: string;
  icon: string;
  gradient: string;
  category: string;
  /** schema.org applicationCategory */
  schemaCategory: string;
  description: string;
  tech: string[];
  playStore?: string;
  appStore?: string;
}

/**
 * The published applications from the résumé. Single source for both the phone
 * showcase and the SoftwareApplication structured data, so the two cannot drift.
 * Store URLs are taken verbatim from the résumé's embedded links.
 */
export const publishedApps: PublishedApp[] = [
  {
    id: "fishtechy",
    name: "Flytechy / Fishtechy",
    icon: "🎣",
    gradient: "from-cyan-500 via-sky-600 to-blue-700",
    category: "AI · Fishing",
    schemaCategory: "SportsApplication",
    description:
      "AI-powered fishing apps that use computer vision to auto-measure fish dimensions from photos. Competition leaderboards, verified catch logging and community sharing with ethical catch-and-release promotion. Flytechy on Android, Fishtechy on iOS.",
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
    description:
      "AI-driven aquarium management app with a 600+ species compatibility engine, real-time water parameter tracking, maintenance scheduling and integrated AI chat support for fish care advice.",
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
    description:
      "Nepal NEPSE stock market app with live share prices, real-time floor sheet, portfolio tracker, watchlists, price alerts, IPO results and market analytics.",
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
    description:
      "School management and e-learning platform covering student records, attendance tracking, assignment submission, exam results, fee management and teacher–parent communication.",
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
    description:
      "Healthcare platform with doctor discovery, appointment booking, teleconsultation, digital prescriptions, medical history records and pharmacy-to-door delivery.",
    tech: ["Flutter", "Dart", "Clean Architecture"],
  },
  {
    id: "homaale",
    name: "Homaale",
    icon: "🏠",
    gradient: "from-orange-500 via-amber-500 to-yellow-500",
    category: "Marketplace",
    schemaCategory: "BusinessApplication",
    description:
      "Home services marketplace connecting customers with local service providers, with location-based discovery and push notifications.",
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
    description:
      "Community and hospitality platform with ordering, push notifications and engagement analytics.",
    tech: ["Flutter", "Dart", "Isar", "Retrofit"],
    playStore:
      "https://play.google.com/store/apps/details?id=com.onecorner.orderapp",
    appStore:
      "https://apps.apple.com/us/app/one-corner-hospitality/id1580080019",
  },
];
