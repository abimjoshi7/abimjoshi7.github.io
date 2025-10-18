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
  title: "John Doe - Mobile & Software Engineer Portfolio",
  description: "Portfolio of John Doe, a passionate Mobile and Software Engineer specializing in React Native, Flutter, and modern web technologies. Explore my projects and experience.",
  keywords: ["Mobile Developer", "Software Engineer", "React Native", "Flutter", "Web Development", "Portfolio"],
  authors: [{ name: "John Doe" }],
  openGraph: {
    title: "John Doe - Mobile & Software Engineer Portfolio",
    description: "Portfolio showcasing mobile and web development projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Mobile & Software Engineer",
    description: "Portfolio showcasing mobile and web development projects",
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
