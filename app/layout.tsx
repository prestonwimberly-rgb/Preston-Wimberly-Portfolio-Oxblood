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

export const metadata: Metadata = {
  metadataBase: new URL("https://preston-wimberly-portfolio.netlify.app"),
  title: {
    default: "Preston Wimberly — Writer, Brand Builder & Website Maker",
    template: "%s — Preston Wimberly",
  },
  description:
    "Writing, brand strategy, websites, marketing, and communications for organizations with a complicated story to tell.",
  openGraph: {
    title: "Preston Wimberly — Writer, Brand Builder & Website Maker",
    description:
      "Clear words, useful websites, and brands with a point of view.",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1536,
        height: 1024,
        alt: "Preston Wimberly, writer, brand builder, and website maker",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Preston Wimberly — Writer, Brand Builder & Website Maker",
    description: "Clear words, useful websites, and brands with a point of view.",
    images: ["/og.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
