import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/data/projects";

type WorkPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.cardSummary,
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
          <Link href="/#about">About</Link>
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
          </dl>
        </section>

        <figure className="case-image">
          <Image src={project.image} alt={project.imageAlt} fill priority sizes="100vw" />
        </figure>

        <section className="case-context" aria-label="Project context">
          <div>
            <p className="section-number">My ownership</p>
            <p>{project.role}. My work covered {project.scope.toLowerCase()}.</p>
          </div>
          <div>
            <p className="section-number">Collaboration</p>
            <p>{project.collaborators}.</p>
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
                  <Image
                    src={artifact.src}
                    alt={artifact.alt}
                    fill
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
            <a href={project.liveUrl} target="_blank" rel="noreferrer">
              {project.liveLabel} <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="next-project">
          <p>Next case study</p>
          <Link href={`/work/${nextProject.slug}`}>
            {nextProject.title} <span aria-hidden="true">→</span>
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
