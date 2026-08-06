import type { Metadata } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const sans = DM_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bright-cobbler-8f540b.netlify.app"),
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
      <body className={`${sans.variable} ${serif.variable}`}>{children}</body>
    </html>
  );
}
