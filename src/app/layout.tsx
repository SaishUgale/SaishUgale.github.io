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
  title: "Saish Ugale | Product Management | AI Prototyping",
  description:
    "Explore Saish Ugale's Product Management portfolio, featuring AI-powered prototyping, product research, EdTech experience, product case studies, and product innovation.",
  keywords: [
    "Saish Ugale",
    "Product Management",
    "AI Prototyping",
    "Product Innovation",
    "EdTech SaaS",
    "Product Strategy",
    "Product Discovery",
    "Google Student Ambassador",
    "Edzy.ai",
  ],
  authors: [{ name: "Saish Ugale", url: "https://saishugale.me" }],
  creator: "Saish Ugale",
  metadataBase: new URL("https://saishugale.me"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://saishugale.me",
    title: "Saish Ugale | Product Management | AI Prototyping",
    description:
      "Explore Saish Ugale's Product Management portfolio, featuring AI-powered prototyping, product research, EdTech experience, product case studies, and product innovation.",
    siteName: "Saish Ugale Portfolio",
    images: [
      {
        url: "/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Saish Ugale - Product Management & AI Prototyping",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Saish Ugale | Product Management | AI Prototyping",
    description:
      "Explore Saish Ugale's Product Management portfolio, featuring AI-powered prototyping, product research, EdTech experience, product case studies, and product innovation.",
    images: ["/profile.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
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
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
