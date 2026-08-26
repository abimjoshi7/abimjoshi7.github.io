export const SITE_URL = "https://abimjoshi7.github.io";

export const siteConfig = {
  url: SITE_URL,
  name: "Abim Joshi",
  jobTitle: "Software Engineer",
  title: "Abim Joshi - Software Engineer",
  shortTitle: "Abim Joshi",
  description:
    "Portfolio of Abim Joshi, Software Engineer and Senior Flutter Developer. Five-plus years building production-ready hybrid mobile apps with Flutter, Dart, Kotlin and Java.",
  socialDescription:
    "Portfolio showcasing production Flutter apps built with Dart, Kotlin and Java",
  email: "abimjoshi7@gmail.com",
  locality: "Kathmandu",
  country: "NP",
  employer: "Raindrop Inc.",
  socials: [
    "https://github.com/abimjoshi7",
    "https://www.linkedin.com/in/abim-joshi-011a77181/",
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Kotlin",
    "Java",
    "Bash",
    "SQL",
    "PostgreSQL",
    "Firestore",
    "Drift",
    "Isar",
    "Bloc Pattern",
    "SOLID Principles",
  ],
  keywords: [
    "Abim Joshi",
    "Flutter Developer",
    "Mobile Developer",
    "Software Engineer",
    "Flutter",
    "Dart",
    "Kotlin",
    "Java",
    "Android",
    "iOS",
    "PostgreSQL",
    "Firestore",
  ],
} as const;

/** Apps shipped by Abim, surfaced as SoftwareApplication structured data. */
export const featuredApps = [
  {
    name: "Mero School",
    category: "EducationalApplication",
    platform: "iOS, Android",
    description:
      "School management app connecting students, teachers, and parents with attendance tracking, grade management, and real-time notifications.",
    url: "https://play.google.com/store/apps/details?id=school.mero.lms",
  },
  {
    name: "Mero Lagani",
    category: "FinanceApplication",
    platform: "iOS, Android",
    description:
      "Nepal's stock market and investment app with real-time analytics dashboards, portfolio tracking, and compliance monitoring.",
    url: "https://play.google.com/store/apps/details?id=com.podamibe.merolagani&hl=en-US",
  },
  {
    name: "Mero Health Care",
    category: "HealthApplication",
    platform: "Android",
    description:
      "Healthcare management platform with offline data sync, appointment scheduling, and medical records management.",
    url: "https://play.google.com/store/apps/details?id=com.merohealth&hl=en",
  },
  {
    name: "Homaale",
    category: "BusinessApplication",
    platform: "Android",
    description:
      "Property listing and management app with location-based services and personalized content for buyers and sellers in Nepal.",
    url: "https://play.google.com/store/apps/details?id=com.cagtu.cipher&hl=en_US",
  },
  {
    name: "One Corner",
    category: "ShoppingApplication",
    platform: "iOS, Android",
    description:
      "E-commerce platform with push notifications, user engagement analytics, and a streamlined shopping experience.",
    url: "https://play.google.com/store/apps/details?id=com.onecorner.orderapp",
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
  phone: "+977 9860920006",
  phoneHref: "tel:+9779860920006",
  location: "Shankhamul, Kathmandu 44600",
  github: "https://github.com/abimjoshi7",
  linkedin: "https://www.linkedin.com/in/abim-joshi-011a77181/",
} as const;

/** Headline numbers. Shown once, in the hero — not repeated per section. */
export const stats = [
  { label: "YEARS", value: "5+" },
  { label: "PRODUCTION APPS", value: "5" },
  { label: "COMPANIES", value: "3" },
] as const;

/** Spoken languages, from the résumé sidebar. */
export const spokenLanguages = ["Nepali", "English", "Hindi"] as const;
