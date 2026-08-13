import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ResponsiveImage } from "@/components/responsive-image";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getProject, projects } from "@/data/projects";
import { mailtoHref, siteConfig } from "@/lib/site";
import { projectStructuredData } from "@/lib/structured-data";

type WorkPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const canonicalPath = `/work/${project.slug}/`;
  const socialTitle = `${project.metaTitle} | Preston Wimberly`;
  return {
    title: project.metaTitle,
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
  const inquiryHref = mailtoHref("Creative direction inquiry");
  const imageFirst = project.theme === "archive" || project.theme === "workshop";
  const caseImage = (
    <figure
      className={`case-image case-image-${project.imageFit ?? "contain"}`}
      style={{ aspectRatio: project.imageAspect }}
    >
      <ResponsiveImage
        src={project.image}
        alt={project.imageAlt}
        priority
        sizes="100vw"
        style={{ objectPosition: project.imagePosition ?? "center" }}
      />
      <figcaption>
        {project.imageCaption}
        {project.imageCredit ? <span>{project.imageCredit}</span> : null}
      </figcaption>
    </figure>
  );
  const caseHero = (
    <section className="case-hero">
      <div className="case-hero-meta">
        <p className="case-chapter">
          {`${project.chapterNumber} / ${project.chapter}`}
        </p>
        <p className="eyebrow">{project.kicker}</p>
      </div>
      <h1>{project.headline}</h1>
      <p className="case-premise">{project.premise}</p>
      <p className="case-summary">{project.summary}</p>
    </section>
  );
  const caseDetails = (
    <section className="case-details" aria-label="Project details">
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
        <div>
          <dt>Place</dt>
          <dd>{project.place}</dd>
        </div>
      </dl>
    </section>
  );
  const caseDirectionRecord = (
    <section className="case-direction-record" aria-labelledby="direction-record-title">
      <div className="case-direction-heading">
        <p className="section-number">Direction record</p>
        <h2 id="direction-record-title">What I set, made, and directed.</h2>
      </div>
      <dl className="case-direction-list">
        {project.directionRecord.map((item) => (
          <div key={item.label}>
            <dt>{item.label}</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
        <div>
          <dt>Constraint</dt>
          <dd>{project.constraint}</dd>
        </div>
      </dl>
    </section>
  );
  const caseEvidence = (
    <section className="case-evidence" aria-labelledby="evidence-title">
      <div className="case-evidence-intro">
        <p className="section-number">{project.evidenceEyebrow}</p>
        <h2 id="evidence-title">{project.evidenceTitle}</h2>
        <p>{project.evidenceIntro}</p>
      </div>
      <dl className="case-evidence-list">
        {project.evidence.map((item, index) => (
          <div key={item.label}>
            <dt>
              <span aria-hidden="true">0{index + 1}</span>
              {item.label}
            </dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
  const contextSection = (
    <div className="case-section">
      <p className="section-number">
        {`${project.theme === "workshop" ? "02" : "01"} / Context`}
      </p>
      <div>
        <h2>{project.challengeTitle}</h2>
        {project.challenge.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
  const principleSection = (
    <aside className="case-principle" aria-label="Working principle">
      <p className="section-number">Working principle</p>
      <p>{project.closing}</p>
    </aside>
  );
  const decisionSection = (
    <div className="case-section">
      <p className="section-number">
        {`${project.theme === "workshop" ? "01" : "02"} / The decision`}
      </p>
      <div>
        <h2>{project.decisionTitle}</h2>
        {project.decision.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
  const deliverablesSection = (
    <div className="deliverables">
      <p className="section-number inverse">03 / Direction in practice</p>
      <h2>System in use</h2>
      <ul>
        {project.deliverables.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <StructuredData data={projectStructuredData(project)} />
      <SiteHeader
        skipHref="#case-content"
        skipLabel="Skip to case study"
        variant="work"
        navAriaLabel="Case study navigation"
        workLink={{ href: "/#work", label: "Work" }}
        secondaryLink={{ href: "/#about", label: "About", narrow: true }}
        contactHref={inquiryHref}
        contactLongLabel="Start a project"
      />

      <main
        className={`case-study case-study-${project.slug} case-theme-${project.theme}`}
        id="case-content"
      >
        {imageFirst ? caseImage : null}
        {caseHero}
        {!imageFirst ? caseImage : null}
        {project.theme !== "field" ? caseEvidence : null}
        {caseDetails}
        {caseDirectionRecord}
        {project.theme === "field" ? caseEvidence : null}

        <section className="case-body">
          {project.theme === "studio" ? principleSection : null}
          {project.theme === "workshop" ? decisionSection : contextSection}
          {project.theme === "studio" ? null : principleSection}
          {project.theme === "workshop" ? contextSection : decisionSection}
          {deliverablesSection}
        </section>

        <section className="case-artifacts" aria-labelledby="artifacts-title">
          <div className="case-artifacts-heading">
            <p className="section-number">04 / Evidence</p>
            <div>
              <h2 id="artifacts-title">{project.artifactTitle}</h2>
              <p>{project.artifactIntro}</p>
            </div>
          </div>
          <div className="artifact-grid">
            {project.artifacts.map((artifact, index) => (
              <figure
                className={`artifact artifact-${artifact.format} artifact-${index + 1}`}
                key={artifact.src}
              >
                <div
                  className="artifact-image"
                  style={artifact.aspect ? { aspectRatio: artifact.aspect } : undefined}
                >
                  <ResponsiveImage
                    src={artifact.src}
                    alt={artifact.alt}
                    sizes={artifact.format === "portrait" ? "(max-width: 760px) 72vw, 28vw" : "(max-width: 760px) 100vw, 70vw"}
                  />
                </div>
                <figcaption>
                  {artifact.caption}
                  {artifact.credit ? <span>{artifact.credit}</span> : null}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="case-outcome">
          <p className="section-number">05 / Result</p>
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
        <a href={inquiryHref}>Start a project ↗</a>
      </footer>
    </>
  );
}
