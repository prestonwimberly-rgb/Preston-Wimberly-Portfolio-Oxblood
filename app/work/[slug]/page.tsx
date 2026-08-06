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
      <header className="site-header work-header">
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">
          Preston Wimberly
        </Link>
        <nav className="site-nav" aria-label="Case study navigation">
          <Link href="/#work">Work</Link>
          <Link href="/#writing">Writing</Link>
          <Link href="/#about">About</Link>
          <a className="nav-contact" href="mailto:preston@prestonwimberly.com">
            Start a project
          </a>
        </nav>
      </header>

      <main className="case-study">
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

        <section className="case-body">
          <div className="case-section">
            <p className="section-number">01 / The challenge</p>
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
            <p className="section-number">02 / The approach</p>
            <div>
              <h2>{project.approachTitle}</h2>
              {project.approach.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </div>

          <div className="deliverables">
            <p className="section-number inverse">03 / The work</p>
            <h2>What I delivered</h2>
            <ul>
              {project.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
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
