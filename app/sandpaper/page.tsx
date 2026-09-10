import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { mailtoHref, siteConfig } from "@/lib/site";
import { sandpaperStructuredData } from "@/lib/structured-data";
import { sandpaperExcerpt } from "@/data/sandpaper";

export const metadata: Metadata = {
  title: "SANDPAPER, a memoir",
  description:
    "A 50,000-word memoir by Preston Wimberly, structured through the material language of guitar finishing and built from photographs, records, and lived memory.",
  alternates: {
    canonical: "/sandpaper/",
  },
  openGraph: {
    title: "SANDPAPER, a memoir | Preston Wimberly",
    description:
      "A 50,000-word memoir structured through guitar finishing and built from photographs, records, and lived memory.",
    type: "article",
    url: "/sandpaper/",
    siteName: siteConfig.name,
    images: [
      {
        url: "/social/sandpaper.jpg",
        width: 1200,
        height: 630,
        alt: "SANDPAPER, a memoir and editorial project by Preston Wimberly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SANDPAPER, a memoir | Preston Wimberly",
    description:
      "A 50,000-word memoir structured through guitar finishing and built from photographs, records, and lived memory.",
    images: ["/social/sandpaper.jpg"],
  },
};

const inquiryHref = mailtoHref("SANDPAPER manuscript inquiry");

export default function SandpaperPage() {
  return (
    <>
      <StructuredData data={sandpaperStructuredData()} />
      <SiteHeader
        skipHref="#main-content"
        navAriaLabel="Primary navigation"
        workLink={{ href: "/#work", label: "Work" }}
        secondaryLink={{ href: "/#writing", label: "Writing", narrow: true }}
        contactHref={inquiryHref}
        contactLongLabel="Ask about the manuscript"
      />

      <main className="memoir-page" id="main-content">
        <section className="memoir-hero" aria-labelledby="memoir-title">
          <div className="memoir-copy">
            <p className="eyebrow">Book project · Memoir · 2026</p>
            <h1 id="memoir-title"><em>SANDPAPER</em></h1>
            <p className="memoir-deck">
              A book-length memoir about talent, addiction, fatherhood, and the work of becoming useful.
              Written, edited, and typeset by Preston Wimberly.
            </p>
            <dl className="memoir-meta">
              <div><dt>Length</dt><dd>50,000 words</dd></div>
              <div><dt>Form</dt><dd>Three parts · 38 chapters</dd></div>
              <div><dt>Edition</dt><dd>141 pages · 6 × 9 inches</dd></div>
            </dl>
            <a className="text-link" href="#excerpt">Read an excerpt <span aria-hidden="true">↓</span></a>
          </div>
          <figure className="memoir-cover">
            <div className="memoir-cover-frame">
              <ResponsiveImage
                src="/images/sandpaper-cover.png"
                alt="Title page for SANDPAPER, a memoir by Preston Wimberly"
                priority
                sizes="(max-width: 760px) 86vw, 30vw"
                objectFit="contain"
              />
            </div>
            <figcaption>Complete manuscript · First edition</figcaption>
          </figure>
        </section>

        <section className="memoir-excerpt" id="excerpt" aria-labelledby="excerpt-title">
          <header><p className="section-number">From part three / Finer Grits</p><h2 id="excerpt-title">Four Hundred</h2><p className="excerpt-note">An excerpt from pages 115–116.</p></header>
          <div className="excerpt-text">{sandpaperExcerpt.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
          <p className="excerpt-note">The chapter continues in the manuscript.</p>
          <a className="text-link" href="/downloads/sandpaper-four-hundred.pdf">Read the complete chapter <span>PDF · 2 pages</span> <span aria-hidden="true">↓</span></a>
        </section>

        <section className="memoir-interiors" aria-labelledby="interiors-title">
          <header><p className="section-number">Inside the manuscript</p><h2 id="interiors-title">Type, pace, and the page.</h2><p>Original pages from the 6 × 9-inch manuscript, typeset in EB Garamond.</p></header>
          {[[114, 115], [116, 117]].map((pages, index) => (
            <figure className="book-spread" key={pages[0]}>
              <div className="book-spread-pages">{pages.map(page => <a href={`/images/sandpaper-page-${page}.jpg`} key={page} aria-label={`Open manuscript page ${page} at full size`}>
                <ResponsiveImage src={`/images/sandpaper-page-${page}.jpg`} alt={`SANDPAPER manuscript page ${page}, ${page === 114 ? "Part three: Finer Grits" : page === 117 ? "No Plastic" : "Four Hundred"}`} sizes="(max-width: 760px) 44vw, 40vw" objectFit="contain" />
              </a>)}</div>
              <figcaption>{index === 0 ? "Part three and the opening of Four Hundred · Pages 114–115" : "Four Hundred concludes; No Plastic opens · Pages 116–117"}<span> Select a page to read it at full size.</span></figcaption>
            </figure>
          ))}
        </section>

        <section className="memoir-method" aria-labelledby="memoir-method-title">
          <p className="section-number">The editorial decision</p>
          <div className="memoir-method-copy">
            <h2 id="memoir-method-title">Finishing a guitar gave the book its shape.</h2>
            <p>
              Three parts move from the surface of a life, through its stripping away, to the slower work of repair.
              Photographs, emails, contracts, medical records, and calendars test the narrator’s memory.
              Thirty-eight short chapters keep the story moving between music, family, craft, and work.
            </p>
            <div className="memoir-parts">
              <div><span>Part one</span><h3>The Finish</h3></div>
              <div><span>Part two</span><h3>Removal</h3></div>
              <div><span>Part three</span><h3>Finer Grits</h3></div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer memoir-footer">
        <p>© 2026 Preston Wimberly</p>
        <p>Creative Director · Writer · Maker</p>
        <Link href="/#writing">Back to writing ↑</Link>
      </footer>
    </>
  );
}
