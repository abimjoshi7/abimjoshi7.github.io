import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE_URL, siteConfig, publishedApps, webProjects } from "@/lib/site";
import MotionProvider from "@/components/MotionProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [...siteConfig.keywords],
  authors: [{ name: siteConfig.name, url: SITE_URL }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  category: "technology",
  alternates: {
    canonical: "/",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.socialDescription,
    type: "profile",
    firstName: "Abim",
    lastName: "Joshi",
    username: "abimjoshi7",
    url: SITE_URL,
    siteName: siteConfig.name,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.socialDescription,
  },
};

export const viewport = {
  themeColor: "#0d1117",
  colorScheme: "dark",
};

const person = {
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: siteConfig.name,
  url: SITE_URL,
  email: `mailto:${siteConfig.email}`,
  jobTitle: siteConfig.jobTitle,
  description: siteConfig.description,
  knowsAbout: [...siteConfig.knowsAbout],
  address: {
    "@type": "PostalAddress",
    addressLocality: siteConfig.locality,
    addressCountry: siteConfig.country,
  },
  worksFor: {
    "@type": "Organization",
    name: siteConfig.employer,
  },
  sameAs: [...siteConfig.socials],
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    person,
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.title,
      description: siteConfig.description,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
    {
      "@type": "ProfilePage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: siteConfig.title,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#person` },
      mainEntity: { "@id": `${SITE_URL}/#person` },
      inLanguage: "en",
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_URL}/#projects`,
      name: "Applications and projects by Abim Joshi",
      itemListElement: [
        ...publishedApps.map((app, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: {
            "@type": "SoftwareApplication",
            name: app.name,
            applicationCategory: app.schemaCategory,
            operatingSystem: [
              app.playStore ? "Android" : null,
              app.appStore ? "iOS" : null,
            ]
              .filter(Boolean)
              .join(", "),
            description: app.description,
            url: app.appStore ?? app.playStore,
            author: { "@id": `${SITE_URL}/#person` },
          },
        })),
        ...webProjects.map((project, index) => ({
          "@type": "ListItem",
          position: publishedApps.length + index + 1,
          item: {
            "@type": "WebApplication",
            name: project.name,
            applicationCategory: "BusinessApplication",
            operatingSystem: "Web",
            description: project.description,
            url: project.url,
            author: { "@id": `${SITE_URL}/#person` },
          },
        })),
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
