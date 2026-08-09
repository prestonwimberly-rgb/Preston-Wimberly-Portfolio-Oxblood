import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { StructuredData } from "@/components/structured-data";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import { homeStructuredData } from "@/lib/structured-data";

const workingMethod = ["Research", "Position", "Write", "Photograph", "Design", "Build"];

const writing = [
  {
    type: "Essay · Craft & brand voice",
    title: "On the slowness of oil",
    description:
      "A letter from the guitar bench about patience, inheritance, and the time real materials require.",
    href: "https://wimberlycustomguitars.com/build-journal",
  },
  {
    type: "News · Economic development",
    title: "San Marcos Airport expands with 170-acre land purchase",
    description:
      "A report on a 170-acre land purchase, public infrastructure, and the airport’s growth plans.",
    href: "https://texasaviationpartners.com/san-marcos-regional-airport-expands-with-170-acre-land-purchase/",
  },
  {
    type: "Case study · Brand transformation",
    title: "Making the real scale of a business visible",
    description:
      "The positioning, reporting, photography, and site build behind a broader public identity for Texas Aviation Partners.",
    href: "/work/texas-aviation-partners",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData data={homeStructuredData(projects)} />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">
          Preston Wimberly
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a className="nav-narrow-secondary" href="#about">About</a>
          <a className="nav-contact" href={`mailto:${siteConfig.email}`}>
            <span className="nav-contact-long">Get in touch</span>
            <span className="nav-contact-short">Contact</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              Creative direction · Brand strategy · Communications · Editorial · Web
            </p>
            <h1 id="hero-title">
              Clear words.<br />
              Useful websites.<br />
              <em>Work people can understand.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                I identify the central problem, set the direction, and carry it
                through language, images, and finished digital work.
              </p>
              <a className="text-link" href="#work">
                Read the work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <ResponsiveImage
              src="/images/tap-tractor.jpg"
              alt="A tractor crossing a runway beneath large Texas clouds"
              priority
              sizes="(max-width: 900px) 100vw, 43vw"
            />
            <figcaption>
              A tractor works across an airport runway.
              <span>Photograph by Preston Wimberly</span>
            </figcaption>
          </figure>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-number">01 / Selected work</p>
            <h2 id="work-title">Aviation, instruments, music history, and the web.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-row project-row-${index + 1} project-image-${project.imageFit ?? "contain"}`}
                key={project.slug}
              >
                <figure className="project-visual">
                  <Link
                    className="project-image"
                    href={`/work/${project.slug}`}
                    style={{ aspectRatio: project.imageAspect }}
                  >
                    <ResponsiveImage
                      src={project.image}
                      alt={project.imageAlt}
                      sizes="(max-width: 760px) 100vw, 54vw"
                      style={{ objectPosition: project.imagePosition ?? "center" }}
                    />
                  </Link>
                  <figcaption>
                    {project.imageCaption}
                    {project.imageCredit ? <span>{project.imageCredit}</span> : null}
                  </figcaption>
                </figure>
                <div className="project-copy">
                  <p className="project-index">{project.chapterNumber}</p>
                  <p className="project-kicker">{project.chapter}</p>
                  <h3 className={project.title.includes(" ") ? undefined : "title-nowrap"}>
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="project-premise">
                    {project.homepagePremise ?? project.premise}
                  </p>
                  <p className="project-context">
                    {project.place} · {project.year}
                  </p>
                  <p className="project-proof">
                    <span>What changed</span>
                    {project.outcomeTitle}
                  </p>
                  <Link className="text-link" href={`/work/${project.slug}`}>
                    Read the case study <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="practice-note" aria-labelledby="practice-title">
          <div>
            <p className="section-number inverse">02 / Working method</p>
            <h2 id="practice-title">Start with the record. End with something people can use.</h2>
          </div>
          <div className="practice-note-copy">
            <p>
              I interview the people doing the work, find the useful facts, and
              make one central decision before the writing, photographs, and
              digital system take shape.
            </p>
            <ul aria-label="Working method disciplines">
              {workingMethod.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section writing-section" id="writing" aria-labelledby="writing-title">
          <div className="section-heading compact-heading">
            <p className="section-number">03 / Writing & editorial work</p>
            <h2 id="writing-title">I report before I write.</h2>
          </div>
          <div className="writing-list">
            {writing.map((item) => {
              const external = item.href.startsWith("http");
              return (
                <a
                  className="writing-card"
                  href={item.href}
                  key={item.title}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noreferrer" : undefined}
                >
                  <p>{item.type}</p>
                  <h3>{item.title}</h3>
                  <span>{item.description}</span>
                  <b aria-hidden="true">↗</b>
                </a>
              );
            })}
          </div>
        </section>

        <section className="about-section" id="about" aria-labelledby="about-title">
          <figure>
            <ResponsiveImage
              src="/images/tap-surveyor.jpg"
              alt="A surveyor working on a runway beneath large clouds"
              sizes="(max-width: 760px) 100vw, 46vw"
            />
            <figcaption>
              A surveyor works on an airport runway.
              <span>Photograph by Preston Wimberly</span>
            </figcaption>
          </figure>
          <div className="about-copy">
            <p className="section-number">04 / About</p>
            <h2 id="about-title">I work where strategy, journalism, design, and the web overlap.</h2>
            <p className="about-lead">
              I’m Preston Wimberly, a creative director, brand strategist, and
              writer based between San Marcos, Texas, and Salt Lake City, Utah.
            </p>
            <p>
              I’ve worked across aviation, handcrafted products, publishing,
              sales, and live production. I’m drawn to complex assignments,
              field reporting, and physical materials. The subject changes, but
              the method stays consistent: find the useful facts, establish the
              point of view, and carry it through words, images, and a working
              system.
            </p>
            <a className="text-link" href={`mailto:${siteConfig.email}`}>
              Get in touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Roles, collaborations, and selected projects</p>
          <h2 id="contact-title">Get in touch.</h2>
          <p className="contact-fit">
            Based between San Marcos, Texas, and Salt Lake City, Utah. Creative
            direction, brand strategy, communications, editorial, and digital work.
          </p>
          <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Preston Wimberly</p>
        <p>Creative direction · Brand strategy · Communications · Editorial · Web</p>
        <a href="#hero-title">Back to top ↑</a>
      </footer>
    </>
  );
}
