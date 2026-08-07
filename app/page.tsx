import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { projects } from "@/data/projects";

const capabilities = [
  {
    number: "01",
    title: "Position",
    text: "Brand strategy, naming, message architecture, audience definition, and the hard sentence that makes the rest of the work make sense.",
  },
  {
    number: "02",
    title: "Write",
    text: "Websites, essays, case studies, executive communications, press materials, newsletters, and editorial systems built to last.",
  },
  {
    number: "03",
    title: "Build",
    text: "Fast, durable websites with a clear point of view, accessible structure, responsive design, and a publishing workflow people can use.",
  },
  {
    number: "04",
    title: "Communicate",
    text: "Marketing plans, public information, stakeholder communications, original photography, image direction, and campaigns grounded in what the organization does best.",
  },
];

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
      "Turning a land transaction into a clear account of aviation growth, public infrastructure, and long-term opportunity.",
    href: "https://texasaviationpartners.com/san-marcos-regional-airport-expands-with-170-acre-land-purchase/",
  },
  {
    type: "Case study · Brand transformation",
    title: "Making the real scale of a business visible",
    description:
      "How positioning, reporting, photography, and a new website changed the first impression of an aviation company.",
    href: "/work/texas-aviation-partners",
  },
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Preston Wimberly, home">
          Preston Wimberly
        </Link>
        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#work">Work</a>
          <a className="nav-secondary" href="#writing">Writing</a>
          <a className="nav-narrow-secondary" href="#about">About</a>
          <a className="nav-contact" href="mailto:preston@prestonwimberly.com">
            <span className="nav-contact-long">Start a project</span>
            <span className="nav-contact-short">Contact</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">Writer · Brand builder · Website maker</p>
            <h1 id="hero-title">
              Clear words.<br />
              Useful websites.<br />
              <em>Brands with a point of view.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                I help organizations with complex work turn it into a clear position,
                useful language, and a website people can act on.
              </p>
              <a className="text-link" href="#work">
                See selected work <span aria-hidden="true">↓</span>
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
              Photograph by Preston Wimberly · San Marcos Regional Airport, Texas
            </figcaption>
          </figure>
        </section>

        <div className="practice-strip" aria-label="Core services">
          <span>Brand strategy</span>
          <span>Editorial</span>
          <span>Web design & build</span>
          <span>Marketing communications</span>
        </div>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-number">01 / Selected work</p>
            <h2 id="work-title">A strategy is only useful when people can see it.</h2>
          </div>

          <div className="project-list">
            {projects.map((project, index) => (
              <article
                className={`project-row project-row-${index + 1} project-image-${project.imageFit ?? "contain"}`}
                key={project.slug}
              >
                <Link className="project-image" href={`/work/${project.slug}`}>
                  <ResponsiveImage
                    src={project.image}
                    alt={project.imageAlt}
                    sizes="(max-width: 760px) 100vw, 54vw"
                    style={{ objectPosition: project.imagePosition ?? "center" }}
                  />
                </Link>
                <div className="project-copy">
                  <p className="project-index">0{index + 1}</p>
                  <p className="project-kicker">{project.kicker}</p>
                  <h3>
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p>{project.cardSummary}</p>
                  <Link className="text-link" href={`/work/${project.slug}`}>
                    Read the case study <span aria-hidden="true">↗</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities" aria-labelledby="capabilities-title">
          <div className="capabilities-intro">
            <p className="section-number inverse">02 / What I do</p>
            <h2 id="capabilities-title">One partner from position to finished page.</h2>
            <p>
              Positioning, writing, design, and build stay connected, so the central
              idea survives from the first decision to the finished experience.
            </p>
          </div>
          <div className="capability-grid">
            {capabilities.map((item) => (
              <article className="capability" key={item.number}>
                <p>{item.number}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="section writing-section" id="writing" aria-labelledby="writing-title">
          <div className="section-heading compact-heading">
            <p className="section-number">03 / Writing & editorial work</p>
            <h2 id="writing-title">Reporting gives the language something to stand on.</h2>
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
          </figure>
          <div className="about-copy">
            <p className="section-number">04 / About</p>
            <h2 id="about-title">I work where strategy, journalism, design, and the web overlap.</h2>
            <p className="about-lead">
              I’m Preston Wimberly, a writer and brand builder based between
              San Marcos, Texas, and Salt Lake City, Utah.
            </p>
            <p>
              I like complex work, real materials, field work, and projects with
              more substance than polish. My job is to find the
              specific story already inside the work and build the right system
              around it.
            </p>
            <p>
              I’ve led work across aviation, handcrafted products, publishing,
              sales, and live production. The settings change; the practice stays
              the same: understand the work, find the specific idea, and carry it
              through words, images, systems, and the finished experience.
            </p>
            <a className="text-link" href="mailto:preston@prestonwimberly.com">
              Talk about your project <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Have complex work to explain?</p>
          <h2 id="contact-title">Let’s make it clear.</h2>
          <p className="contact-fit">
            Brand position, editorial systems, websites, and communications for
            organizations with complex work.
          </p>
          <a href="mailto:preston@prestonwimberly.com">preston@prestonwimberly.com</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Preston Wimberly</p>
        <p>Writer · Brand builder · Website maker</p>
        <a href="#hero-title">Back to top ↑</a>
      </footer>
    </>
  );
}
