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

const siteName = "Abhishek Kumar Jha — Full-Stack Developer & Competitive Programmer";
const siteDescription =
  "Portfolio of Abhishek Kumar Jha, CSE undergrad at MNNIT Allahabad. Builder of real-time, AI-powered web platforms (IntelMeet, CodeMate). LeetCode Knight, 2070 rating, top 1.77% worldwide.";

export const metadata: Metadata = {
  title: {
    default: siteName,
    template: "%s · Abhishek Kumar Jha",
  },
  description: siteDescription,
  keywords: [
    "Abhishek Kumar Jha",
    "Full-Stack Developer",
    "Competitive Programmer",
    "MNNIT Allahabad",
    "React",
    "Next.js",
    "Node.js",
    "WebRTC",
    "AI agents",
    "LeetCode Knight",
  ],
  authors: [{ name: "Abhishek Kumar Jha", url: "https://github.com/abhishekcodes166" }],
  creator: "Abhishek Kumar Jha",
  openGraph: {
    title: siteName,
    description: siteDescription,
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: siteName,
    description: siteDescription,
  },
  robots: {
    index: true,
    follow: true,
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Abhishek Kumar Jha",
  jobTitle: "Full-Stack Developer",
  email: "mailto:abhishekjhaa340@gmail.com",
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Motilal Nehru National Institute of Technology Allahabad",
  },
  sameAs: [
    "https://github.com/abhishekcodes166",
    "https://www.linkedin.com/in/abhishekjha1666",
    "https://leetcode.com/u/abhi-jha/",
  ],
  knowsAbout: [
    "Full-Stack Web Development",
    "Competitive Programming",
    "WebRTC",
    "AI Agents",
    "Machine Learning",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
