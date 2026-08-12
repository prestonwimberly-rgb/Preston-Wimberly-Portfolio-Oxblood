import type { Metadata } from "next";
import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "SANDPAPER, a memoir | Preston Wimberly",
  description:
    "A 50,000-word memoir by Preston Wimberly, structured through the material language of guitar finishing and built from photographs, records, and lived memory.",
};

const inquiryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("SANDPAPER manuscript inquiry")}`;

export default function SandpaperPage() {
  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">Preston Wimberly</Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <Link href="/#work">Work</Link>
          <Link className="nav-narrow-secondary" href="/#writing">Writing</Link>
          <a className="nav-contact" href={inquiryHref}>
            <span className="nav-contact-long">Ask about the manuscript</span>
            <span className="nav-contact-short">Contact</span>
          </a>
        </nav>
      </header>

      <main className="memoir-page" id="main-content">
        <section className="memoir-hero" aria-labelledby="memoir-title">
          <div className="memoir-copy">
            <p className="eyebrow">Book project · Memoir · 2026</p>
            <h1 id="memoir-title"><em>SANDPAPER</em></h1>
            <p className="memoir-deck">
              A book-length memoir about talent, addiction, fatherhood, and the work of becoming useful.
              The manuscript applies the same method as the rest of my practice: find the record, strip
              away the performance, and make the structure carry the truth.
            </p>
            <dl className="memoir-meta">
              <div><dt>Length</dt><dd>50,000 words</dd></div>
              <div><dt>Form</dt><dd>Three parts · 38 chapters</dd></div>
              <div><dt>Edition</dt><dd>141 pages · 6 × 9 inches</dd></div>
            </dl>
          </div>
          <figure className="memoir-cover">
            <div className="memoir-cover-frame">
              <ResponsiveImage
                src="/images/sandpaper-cover.png"
                alt="Title page for SANDPAPER, a memoir by Preston Wimberly"
                priority
                sizes="(max-width: 760px) 86vw, 30vw"
              />
            </div>
            <figcaption>Complete manuscript · First edition</figcaption>
          </figure>
        </section>

        <section className="memoir-method" aria-labelledby="memoir-method-title">
          <p className="section-number">01 / Editorial architecture</p>
          <div className="memoir-method-copy">
            <h2 id="memoir-method-title">The material process became the narrative system.</h2>
            <p>
              Guitar finishing supplies the book’s structure without becoming decoration. The manuscript
              moves from surface, through removal, to the slower work of repair. Each movement changes the
              pace, evidence, and degree of distance between the narrator and the life being examined.
            </p>
            <div className="memoir-parts">
              <div><span>Part one</span><h3>The Finish</h3></div>
              <div><span>Part two</span><h3>Removal</h3></div>
              <div><span>Part three</span><h3>Finer Grits</h3></div>
            </div>
          </div>
        </section>

        <section className="memoir-proof" aria-labelledby="memoir-proof-title">
          <header>
            <p className="section-number">02 / What the work demonstrates</p>
            <h2 id="memoir-proof-title">Voice held accountable by evidence.</h2>
          </header>
          <div className="memoir-proof-grid">
            <article>
              <h3>Long-form structure</h3>
              <p>Thirty-eight short chapters carry one argument across music, addiction, family, craft, and work without flattening them into a single lesson.</p>
            </article>
            <article>
              <h3>Documentary method</h3>
              <p>Photographs, emails, contracts, medical records, and calendars test memory and keep consequential claims attached to a record.</p>
            </article>
            <article>
              <h3>Book design</h3>
              <p>The first edition is designed and typeset in EB Garamond, with restrained pacing, documentary photographs, and quiet chapter transitions.</p>
            </article>
          </div>
        </section>

        <section className="memoir-passage" aria-label="Selected passage">
          <blockquote>
            <p>“The piece has to look worse before it can look honest.”</p>
            <cite>SANDPAPER · Bare Wood: The Inventory</cite>
          </blockquote>
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
