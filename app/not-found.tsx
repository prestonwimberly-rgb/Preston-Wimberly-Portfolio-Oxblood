import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page is not part of Preston Wimberly’s portfolio.",
};

export default function NotFound() {
  return (
    <>
      <a className="skip-link" href="#not-found-content">
        Skip to content
      </a>
      <header className="site-header work-header">
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">
          Preston Wimberly
        </Link>
        <nav className="site-nav" aria-label="Page not found navigation">
          <Link href="/#work">Work</Link>
          <a className="nav-contact" href="mailto:preston@prestonwimberly.com">
            <span className="nav-contact-long">Get in touch</span>
            <span className="nav-contact-short">Contact</span>
          </a>
        </nav>
      </header>
      <main className="not-found-page" id="not-found-content">
        <p className="eyebrow">404 / Page not found</p>
        <h1>That page<br />is not here.</h1>
        <p>
          The address may have changed, or the page may no longer be part of the
          portfolio.
        </p>
        <Link className="text-link" href="/">
          Return to selected work <span aria-hidden="true">→</span>
        </Link>
      </main>
      <footer className="site-footer">
        <p>Preston Wimberly</p>
        <p>Brand strategy · Communications · Editorial · Web</p>
        <a href="mailto:preston@prestonwimberly.com">Email Preston</a>
      </footer>
    </>
  );
}
