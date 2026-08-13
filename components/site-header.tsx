import Link from "next/link";

type NavLink = {
  href: string;
  label: string;
  narrow?: boolean;
};

type SiteHeaderProps = {
  skipHref: string;
  skipLabel?: string;
  variant?: "work";
  navAriaLabel: string;
  workLink: NavLink;
  secondaryLink?: NavLink;
  contactHref: string;
  contactLongLabel: string;
  contactShortLabel?: string;
};

export function SiteHeader({
  skipHref,
  skipLabel = "Skip to content",
  variant,
  navAriaLabel,
  workLink,
  secondaryLink,
  contactHref,
  contactLongLabel,
  contactShortLabel = "Contact",
}: SiteHeaderProps) {
  return (
    <>
      <a className="skip-link" href={skipHref}>
        {skipLabel}
      </a>
      <header className={variant === "work" ? "site-header work-header" : "site-header"}>
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">
          Preston Wimberly
        </Link>
        <nav className="site-nav" aria-label={navAriaLabel}>
          <Link href={workLink.href}>{workLink.label}</Link>
          {secondaryLink ? (
            <Link
              className={secondaryLink.narrow ? "nav-narrow-secondary" : undefined}
              href={secondaryLink.href}
            >
              {secondaryLink.label}
            </Link>
          ) : null}
          <a className="nav-contact" href={contactHref}>
            <span className="nav-contact-long">{contactLongLabel}</span>
            <span className="nav-contact-short">{contactShortLabel}</span>
          </a>
        </nav>
      </header>
    </>
  );
}
