export const SITE_URL = "https://abimjoshi7.github.io";

export const siteConfig = {
  url: SITE_URL,
  name: "Abim Joshi",
  jobTitle: "Senior Software Engineer",
  title: "Abim Joshi - Senior Software Engineer - Mobile Technologies",
  shortTitle: "Abim Joshi",
  description:
    "Portfolio of Abim Joshi, Senior Software Engineer specializing in Flutter, Kotlin Multiplatform (KMP), and native Android development. 5+ years of mobile app development experience.",
  socialDescription:
    "Portfolio showcasing mobile development projects with Flutter, KMP, and native Android",
  email: "abimjoshi7@gmail.com",
  locality: "Kathmandu",
  country: "NP",
  employer: "Raindrop Inc.",
  socials: [
    "https://github.com/abimjoshi7",
    "https://linkedin.com/in/abimjoshi7",
  ],
  knowsAbout: [
    "Flutter",
    "Dart",
    "Kotlin Multiplatform",
    "Android",
    "iOS",
    "Room",
    "Ktor",
    "WorkManager",
    "Retrofit",
    "Bloc Pattern",
  ],
  keywords: [
    "Abim Joshi",
    "Mobile Developer",
    "Software Engineer",
    "Flutter",
    "Kotlin",
    "KMP",
    "Android",
    "iOS",
    "Kotlin Multiplatform",
    "Room",
    "Ktor",
    "WorkManager",
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
    url: "https://play.google.com/store/apps/details?id=com.meroschool",
  },
  {
    name: "Mero Lagani",
    category: "FinanceApplication",
    platform: "iOS, Android",
    description:
      "Nepal's stock market and investment app with real-time analytics dashboards, portfolio tracking, and compliance monitoring.",
    url: "https://play.google.com/store/apps/details?id=com.merolagani",
  },
  {
    name: "Mero Health Care",
    category: "HealthApplication",
    platform: "Android",
    description:
      "Healthcare management platform with offline data sync, appointment scheduling, and medical records management.",
    url: "https://play.google.com/store/apps/details?id=com.merohealthcare",
  },
  {
    name: "Homaale",
    category: "BusinessApplication",
    platform: "Android",
    description:
      "Property listing and management app with location-based services and personalized content for buyers and sellers in Nepal.",
    url: "https://play.google.com/store/apps/details?id=com.homaale",
  },
  {
    name: "One Corner",
    category: "ShoppingApplication",
    platform: "iOS, Android",
    description:
      "E-commerce platform with push notifications, user engagement analytics, and a streamlined shopping experience.",
    url: "https://play.google.com/store/apps/details?id=com.onecorner",
  },
] as const;
