import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abim Joshi - Senior Software Engineer - Mobile Technologies",
  description: "Portfolio of Abim Joshi, Senior Software Engineer specializing in Flutter, Kotlin Multiplatform (KMP), and native Android development. 5+ years of mobile app development experience.",
  keywords: ["Mobile Developer", "Software Engineer", "Flutter", "Kotlin", "KMP", "Android", "iOS", "Kotlin Multiplatform", "Room", "Ktor", "WorkManager"],
  authors: [{ name: "Abim Joshi" }],
  openGraph: {
    title: "Abim Joshi - Senior Software Engineer - Mobile Technologies",
    description: "Portfolio showcasing mobile development projects with Flutter, KMP, and native Android",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abim Joshi - Senior Software Engineer - Mobile Technologies",
    description: "Portfolio showcasing mobile development projects with Flutter, KMP, and native Android",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
