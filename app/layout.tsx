import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Luna TV - یەکەم ئەپڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم",
  description:
    "یەکەم ئەپڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم و زنجیرەکان بە زمانی کوردی بە باشترین کوالێتی. Luna TV - The first Kurdish app for dubbing movies and series in Kurdish language with best quality.",
  keywords: [
    "Luna TV",
    "Kurdish movies",
    "Kurdish dubbing",
    "فیلمی کوردی",
    "دۆبلاژی کوردی",
    "زنجیرە",
    "ئەپڵیکەیشن",
  ],
  authors: [{ name: "Luna TV Team" }],
  creator: "Luna TV",
  publisher: "Luna TV",
  applicationName: "Luna TV",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/luna-logo.png",
    shortcut: "/luna-logo.png",
    apple: "/luna-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "ku_IQ",
    url: "https://lunatv.app",
    siteName: "Luna TV",
    title: "Luna TV - یەکەم ئەپڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم",
    description:
      "یەکەم ئەپڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم و زنجیرەکان بە زمانی کوردی بە باشترین کوالێتی",
    images: [
      {
        url: "/luna-logo.png",
        width: 512,
        height: 512,
        alt: "Luna TV Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Luna TV - یەکەم ئەپڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم",
    description:
      "یەکەم ئەپڵیکەیشنی کوردی بۆ دۆبلاژکردنی فیلم و زنجیرەکان بە زمانی کوردی",
    images: ["/luna-logo.png"],
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ku" dir="rtl" className="bg-background">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
