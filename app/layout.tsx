import type { Metadata } from "next";
import "@fontsource/bodoni-moda/latin-400.css";
import "@fontsource/bodoni-moda/latin-400-italic.css";
import "@fontsource/bodoni-moda/latin-600.css";
import "@fontsource/source-serif-4/latin-400.css";
import "@fontsource/source-serif-4/latin-400-italic.css";
import "@fontsource/source-serif-4/latin-700.css";
import "@fontsource/source-sans-3/latin-400.css";
import "@fontsource/source-sans-3/latin-600.css";
import "@fontsource/source-sans-3/latin-700.css";
import "./globals.css";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.origin),
  title: {
    default: siteConfig.title,
    template: "%s — Preston Wimberly",
  },
  description: siteConfig.description,
  alternates: {
    canonical: `${siteConfig.origin}/`,
  },
  robots: siteConfig.isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false, noarchive: true },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "64x64" },
    ],
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: siteConfig.title,
    description:
      "Clear words, useful websites, and brands with a point of view.",
    type: "website",
    url: "/",
    siteName: siteConfig.name,
    images: [
      {
        url: "/social/home.jpg",
        width: 1200,
        height: 630,
        alt: "Preston Wimberly, writer, brand builder, and website maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: "Clear words, useful websites, and brands with a point of view.",
    images: ["/social/home.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
