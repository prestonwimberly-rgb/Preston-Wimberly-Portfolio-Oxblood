import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { mailtoHref } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The requested page is not part of Preston Wimberly’s portfolio.",
};

export default function NotFound() {
  return (
    <>
      <SiteHeader
        skipHref="#not-found-content"
        variant="work"
        navAriaLabel="Page not found navigation"
        workLink={{ href: "/#work", label: "Work" }}
        contactHref={mailtoHref()}
        contactLongLabel="Get in touch"
      />
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
        <a href={mailtoHref()}>Email Preston</a>
      </footer>
    </>
  );
}
