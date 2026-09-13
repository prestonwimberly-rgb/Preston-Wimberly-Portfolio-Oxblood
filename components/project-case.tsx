import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { GuitarCampaign } from "@/components/guitar-campaign";
import imageManifest from "@/config/images.json";
import type { Project, ProjectArtifact } from "@/data/projects";

function ArtifactImage({ artifact, priority = false }: { artifact: ProjectArtifact; priority?: boolean }) {
  const source = imageManifest[artifact.src as keyof typeof imageManifest];
  const crop = artifact.crop;
  const scale = crop ? source.width / crop.width : 1;
  return (
    <a className="artifact-image" href={artifact.src} aria-label={`Open full-size image: ${artifact.alt}`}
      style={{ aspectRatio: crop ? `${crop.width} / ${crop.height}` : artifact.aspect ?? (artifact.format === "portrait" ? "390 / 844" : "8 / 5") }}>
      <ResponsiveImage src={artifact.src} alt={artifact.alt} priority={priority}
        sizes={artifact.format === "portrait" ? "(max-width: 760px) 74vw, 24vw" : `(max-width: 760px) ${Math.ceil(100 * scale)}vw, ${Math.ceil(60 * scale)}vw`}
        objectFit="contain" style={crop ? {
          width: `${source.width / crop.width * 100}%`, height: `${source.height / crop.height * 100}%`,
          left: `${-crop.left / crop.width * 100}%`, top: `${-crop.top / crop.height * 100}%`,
          maxWidth: "none",
        } : undefined} />
    </a>
  );
}

function CaseArtifacts({ project, leading = false }: { project: Project; leading?: boolean }) {
  const artifacts = leading ? project.leadArtifacts ?? project.artifacts : project.artifacts;
  const showHeading = leading || !project.leadArtifacts?.length;
  return (
    <section className={`case-artifacts${leading ? " case-artifacts-lead" : ""}`}
      aria-labelledby={showHeading ? "case-artifacts-title" : undefined}
      aria-label={showHeading ? undefined : "Supporting photographs"}>
      {showHeading ? leading ? <header className="case-artifact-label"><h2 id="case-artifacts-title">{project.artifactTitle}</h2></header> : <header className="case-section-heading"><p className="section-number">The work</p><div><h2 id="case-artifacts-title">{project.artifactTitle}</h2><p>{project.artifactIntro}</p></div></header> : null}
      <div className="artifact-grid">
        {artifacts.filter(a => a.src !== project.image).map(artifact => (
          <figure className={`artifact artifact-${artifact.format}`} key={artifact.src}>
            <ArtifactImage artifact={artifact} priority={leading} />
            <figcaption>{artifact.caption}{artifact.credit ? <span>{artifact.credit}</span> : null}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

function CaseDecision({ project }: { project: Project }) {
  return (
    <section className="case-decision" aria-labelledby="case-decision-title">
      <p className="section-number">The decision</p>
      <div><h2 id="case-decision-title">{project.decisionTitle}</h2>{project.decision.map(p => <p key={p}>{p}</p>)}</div>
      {project.detailArtifact ? <figure className="case-detail">
        <ArtifactImage artifact={project.detailArtifact} />
        <figcaption>{project.detailArtifact.caption}<span>{project.detailArtifact.credit}</span></figcaption>
      </figure> : null}
      {project.comparisonNotes ? (
        <ol className="case-comparison-notes" aria-label="What changed in the redesign">
          {project.comparisonNotes.map(note => <li key={note.title}><h3>{note.title}</h3><p>{note.detail}</p></li>)}
        </ol>
      ) : null}
    </section>
  );
}

export function ProjectCase({ project, nextProject }: { project: Project; nextProject: Project }) {
  const hasLeadArtifacts = Boolean(project.leadArtifacts?.length);
  const isWorkshop = project.slug === "wimberly-guitars";
  const image = project.slug === "wimberly-guitars" ? null : (
    <figure className="case-image">
      <div className="case-image-frame" style={{ aspectRatio: project.imageAspect ?? (project.imageFit === "cover" ? "16 / 9" : "8 / 5") }}>
        <ResponsiveImage src={project.image} alt={project.imageAlt} priority={!hasLeadArtifacts} sizes="100vw"
          style={{ objectPosition: project.imagePosition ?? "center" }} objectFit={project.imageFit ?? "contain"} />
      </div>
      <figcaption>{project.imageCaption}{project.imageCredit ? <span>{project.imageCredit}</span> : null}</figcaption>
    </figure>
  );
  return (
    <main className={`case-study case-theme-${project.theme}`} id="case-content">
      <header className="case-hero">
        <p className="section-number">{project.chapterNumber} / {project.chapter} · {project.year}</p>
        <h1>{project.headline}</h1>
        <p className="case-summary">{project.summary}</p>
        <p className="case-role-line">{project.role}</p>
        <div className="case-status"><span>{project.engagementType}</span><strong>{project.status}</strong></div>
        {project.accessNote ? <p className="case-access-note">{project.accessNote}</p> : null}
        {project.liveUrl && project.slug !== "preston-session-site" ? (
          <a className="text-link case-live-link" href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel} <span aria-hidden="true">↗</span></a>
        ) : null}
      </header>

      {hasLeadArtifacts || isWorkshop ? <CaseArtifacts project={project} leading /> : image}
      {hasLeadArtifacts ? <CaseDecision project={project} /> : null}

      <section className="case-ownership" aria-label="Role and collaboration">
        <div><h2>My role</h2><p className="case-role">{project.role}</p><p>{project.ownership}</p></div>
        <div><h2>Working together</h2><p>{project.collaboration}</p>
          {project.collaborationExample ? <>
            <h3 className="collaboration-label">The request</h3>
            <p>{project.collaborationExample.request}</p>
            <h3 className="collaboration-label">My response</h3>
            <p>{project.collaborationExample.response}</p>
            <a className="text-link" href={project.collaborationExample.href} target="_blank" rel="noreferrer">{project.collaborationExample.label} <span aria-hidden="true">↗</span></a>
          </> : null}
          <p className="case-place">{project.place}</p>
        </div>
      </section>

      {hasLeadArtifacts ? image : null}

      {project.slug === "wild-feathers" ? (
        <aside className="case-reading" aria-label="Read the writing">
          <p className="section-number">From “Willie in Las Vegas”</p>
          <blockquote>“We left the most spiritual moment of my professional life and walked straight to a craps table.”</blockquote>
          <p>A firsthand account from the 2013 tour, written from memory and labeled as such.</p>
          <a className="text-link" href="https://thewildfeathersband.com/field-notes/willie-in-las-vegas/" target="_blank" rel="noreferrer">Read the essay <span aria-hidden="true">↗</span></a>
        </aside>
      ) : null}

      {!isWorkshop ? <CaseArtifacts project={project} /> : null}

      {!hasLeadArtifacts ? <CaseDecision project={project} /> : null}

      <section className="case-outcome" aria-labelledby="case-outcome-title">
        <p className="section-number">What changed</p>
        <div><h2 id="case-outcome-title">{project.outcomeTitle}</h2>{project.outcome.map(p => <p key={p}>{p}</p>)}
          {project.liveUrl ? <a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">{project.liveLabel} <span aria-hidden="true">↗</span></a> : null}
        </div>
      </section>
      {isWorkshop ? <GuitarCampaign /> : null}
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
      <nav className="next-project" aria-label="Next project">
        <p className="section-number inverse">Next project</p>
        <Link href={`/work/${nextProject.slug}`}><span>{nextProject.navTitle ?? nextProject.title}</span><span aria-hidden="true">↗</span></Link>
        <Link className="all-work" href="/#work">All selected work</Link>
      </nav>
    </main>
  );
}
