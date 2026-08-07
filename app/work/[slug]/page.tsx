import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResponsiveImage } from "@/components/responsive-image";
import { getProject, projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";

type WorkPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const canonicalPath = `/work/${project.slug}/`;
  const socialTitle = `${project.title} — Preston Wimberly`;
  return {
    title: project.title,
    description: project.cardSummary,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: socialTitle,
      description: project.cardSummary,
      type: "article",
      url: canonicalPath,
      siteName: siteConfig.name,
      images: [
        {
          url: `/social/${project.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${project.title} case study by Preston Wimberly`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.cardSummary,
      images: [`/social/${project.slug}.jpg`],
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <>
      <a className="skip-link" href="#case-content">
        Skip to case study
      </a>
      <header className="site-header work-header">
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">
          Preston Wimberly
        </Link>
        <nav className="site-nav" aria-label="Case study navigation">
          <Link href="/#work">Work</Link>
          <Link className="nav-narrow-secondary" href="/#about">About</Link>
          <a className="nav-contact" href="mailto:preston@prestonwimberly.com">
            <span className="nav-contact-long">Start a project</span>
            <span className="nav-contact-short">Contact</span>
          </a>
        </nav>
      </header>

      <main
        className={`case-study case-study-${project.slug} case-theme-${project.theme}`}
        id="case-content"
      >
        <section className="case-hero">
          <p className="eyebrow">{project.kicker}</p>
          <h1>{project.headline}</h1>
          <p className="case-summary">{project.summary}</p>
          <dl className="case-meta">
            <div>
              <dt>Engagement</dt>
              <dd>{project.engagementType}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{project.role}</dd>
            </div>
            <div>
              <dt>Scope</dt>
              <dd>{project.scope}</dd>
            </div>
            <div>
              <dt>Year</dt>
              <dd>{project.year}</dd>
            </div>
            <div>
              <dt>Status</dt>
              <dd>{project.status}</dd>
            </div>
          </dl>
        </section>

        <figure className="case-image">
          <ResponsiveImage
            src={project.image}
            alt={project.imageAlt}
            priority
            sizes="100vw"
            style={{ objectPosition: project.imagePosition ?? "center" }}
          />
        </figure>

        <section className="case-context" aria-label="Project context">
          <div>
            <p className="section-number">My ownership</p>
            <p>{project.ownership}</p>
          </div>
          <div>
            <p className="section-number">Collaboration</p>
            <p>{project.collaboration}.</p>
          </div>
          <div>
            <p className="section-number">Constraint</p>
            <p>{project.constraint}</p>
          </div>
        </section>

        <section className="case-body">
          <div className="case-section">
            <p className="section-number">01 / Context</p>
            <div>
              <h2>{project.challengeTitle}</h2>
              {project.challenge.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="case-pullquote">
            <p>{project.closing}</p>
          </div>

          <div className="case-section">
            <p className="section-number">02 / The decision</p>
            <div>
              <h2>{project.decisionTitle}</h2>
              {project.decision.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="deliverables">
            <p className="section-number inverse">03 / Selected work</p>
            <h2>What I made</h2>
            <ul>
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="case-artifacts" aria-labelledby="artifacts-title">
          <div className="case-artifacts-heading">
            <p className="section-number">04 / Finished experience</p>
            <h2 id="artifacts-title">The work in use.</h2>
          </div>
          <div className="artifact-grid">
            {project.artifacts.map((artifact, index) => (
              <figure
                className={`artifact artifact-${artifact.format} artifact-${index + 1}`}
                key={artifact.src}
              >
                <div className="artifact-image">
                  <ResponsiveImage
                    src={artifact.src}
                    alt={artifact.alt}
                    sizes={artifact.format === "portrait" ? "(max-width: 760px) 72vw, 28vw" : "(max-width: 760px) 100vw, 70vw"}
                  />
                </div>
                <figcaption>{artifact.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-outcome">
          <p className="section-number">05 / Observable change</p>
          <div>
            <h2>{project.outcomeTitle}</h2>
            {project.outcome.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            {project.liveUrl && project.liveLabel ? (
              <a href={project.liveUrl} target="_blank" rel="noreferrer">
                {project.liveLabel} <span aria-hidden="true">↗</span>
              </a>
            ) : project.accessNote ? (
              <p className="case-access-note">{project.accessNote}</p>
            ) : null}
          </div>
        </section>

        <section className="next-project">
          <p>Next case study</p>
          <Link href={`/work/${nextProject.slug}`}>
            <span className="next-project-title">{nextProject.title}</span>
            <span className="next-project-arrow" aria-hidden="true">→</span>
          </Link>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Preston Wimberly</p>
        <Link href="/">Home</Link>
        <a href="mailto:preston@prestonwimberly.com">Start a conversation ↗</a>
      </footer>
    </>
  );
}
