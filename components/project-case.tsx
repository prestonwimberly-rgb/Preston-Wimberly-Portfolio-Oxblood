import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { GuitarCampaign } from "@/components/guitar-campaign";
import type { Project } from "@/data/projects";

export function ProjectCase({ project, nextProject }: { project: Project; nextProject: Project }) {
  return (
    <main className={`case-study case-theme-${project.theme}`} id="case-content">
      <header className="case-hero">
        <p className="section-number">{project.chapterNumber} / {project.chapter} · {project.year}</p>
        <h1>{project.headline}</h1>
        <p className="case-summary">{project.summary}</p>
        <div className="case-status"><span>{project.engagementType}</span><strong>{project.status}</strong></div>
        {project.accessNote ? <p className="case-access-note">{project.accessNote}</p> : null}
      </header>

      <figure className="case-image">
        <div className="case-image-frame" style={{ aspectRatio: project.imageAspect ?? (project.imageFit === "cover" ? "16 / 9" : "8 / 5") }}>
          <ResponsiveImage src={project.image} alt={project.imageAlt} priority sizes="100vw"
            style={{ objectPosition: project.imagePosition ?? "center" }} objectFit={project.imageFit ?? "contain"} />
        </div>
        <figcaption>{project.imageCaption}{project.imageCredit ? <span>{project.imageCredit}</span> : null}</figcaption>
      </figure>

      <section className="case-ownership" aria-label="Role and collaboration">
        <div><h2>My role</h2><p className="case-role">{project.role}</p><p>{project.ownership}</p></div>
        <div><h2>Working together</h2><p>{project.collaboration}</p><p className="case-place">{project.place}</p></div>
      </section>

      {project.slug === "wild-feathers" ? (
        <aside className="case-reading" aria-label="Read the writing">
          <p className="section-number">From “Willie in Las Vegas”</p>
          <blockquote>“We left the most spiritual moment of my professional life and walked straight to a craps table.”</blockquote>
          <p>A firsthand account from the 2013 tour, written from memory and labeled as such.</p>
          <a className="text-link" href="https://wildfeathers.netlify.app/field-notes/willie-in-las-vegas/" target="_blank" rel="noreferrer">Read the essay <span aria-hidden="true">↗</span></a>
        </aside>
      ) : null}

      <section className="case-artifacts" aria-labelledby="case-artifacts-title">
        <header className="case-section-heading"><p className="section-number">The work</p><div><h2 id="case-artifacts-title">{project.artifactTitle}</h2><p>{project.artifactIntro}</p></div></header>
        <div className="artifact-grid">
          {project.artifacts.filter(a => a.src !== project.image).map(artifact => (
            <figure className={`artifact artifact-${artifact.format}`} key={artifact.src}>
              <div className="artifact-image" style={{ aspectRatio: artifact.aspect ?? (artifact.format === "portrait" ? "390 / 844" : "8 / 5") }}>
                <ResponsiveImage src={artifact.src} alt={artifact.alt} sizes={artifact.format === "portrait" ? "(max-width: 760px) 74vw, 24vw" : "(max-width: 760px) 100vw, 65vw"} objectFit="contain" />
              </div>
              <figcaption>{artifact.caption}{artifact.credit ? <span>{artifact.credit}</span> : null}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="case-decision" aria-labelledby="case-decision-title">
        <p className="section-number">The decision</p>
        <div><h2 id="case-decision-title">{project.decisionTitle}</h2>{project.decision.map(p => <p key={p}>{p}</p>)}</div>
      </section>

      {project.slug === "wimberly-guitars" ? <GuitarCampaign /> : null}

      {project.motionStudy ? (
        <section className="motion-study" aria-labelledby="motion-study-title">
          <details>
            <summary id="motion-study-title">Supporting motion study <span>Higgsfield · 5 seconds</span></summary>
            <figure>
              <video controls muted playsInline preload="none" poster={project.motionStudy.poster} aria-describedby="motion-study-caption">
                <source src={project.motionStudy.src} type="video/mp4" />
                <a href={project.motionStudy.src}>Download the motion study</a>
              </video>
              <figcaption id="motion-study-caption">{project.motionStudy.description}</figcaption>
            </figure>
          </details>
        </section>
      ) : null}

      <section className="case-outcome" aria-labelledby="case-outcome-title">
        <p className="section-number">What changed</p>
        <div><h2 id="case-outcome-title">{project.outcomeTitle}</h2>{project.outcome.map(p => <p key={p}>{p}</p>)}
          {project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel} <span aria-hidden="true">↗</span></a> : null}
        </div>
      </section>
      <nav className="next-project" aria-label="Next project">
        <p className="section-number inverse">Next project</p>
        <Link href={`/work/${nextProject.slug}`}><span>{nextProject.navTitle ?? nextProject.title}</span><span aria-hidden="true">↗</span></Link>
        <Link className="all-work" href="/#work">All selected work</Link>
      </nav>
    </main>
  );
}
