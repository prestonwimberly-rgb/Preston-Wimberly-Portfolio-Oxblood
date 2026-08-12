import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { StructuredData } from "@/components/structured-data";
import { projects } from "@/data/projects";
import { siteConfig } from "@/lib/site";
import { homeStructuredData } from "@/lib/structured-data";

const workingMethod = ["Report", "Position", "Direct", "Write", "Photograph", "Build"];

const services = [
  {
    number: "01",
    title: "Creative direction",
    description:
      "Find what is distinctive, decide what the whole expression should become, and set the standards that keep it coherent.",
    scope: "Positioning · Point of view · Creative standards · Decision-making",
  },
  {
    number: "02",
    title: "Brand & editorial systems",
    description:
      "Turn real work, people, history, and evidence into a clear public narrative that others can use.",
    scope: "Message architecture · Voice · Editorial structure · Photography direction",
  },
  {
    number: "03",
    title: "Hands-on execution",
    description:
      "Write, photograph, design, or build when direct making is the clearest way to carry the direction through.",
    scope: "Writing · Photography · Design · Digital production",
  },
];

const inquiryHref = `mailto:${siteConfig.email}?subject=${encodeURIComponent("Freelance project inquiry")}`;

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
          <a className="nav-contact" href={inquiryHref}>
            <span className="nav-contact-long">Start a project</span>
            <span className="nav-contact-short">Contact</span>
          </a>
        </nav>
      </header>

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="eyebrow">
              Creative Director
            </p>
            <h1 id="hero-title">
              Find what is true.<br />
              <em>Give it form.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                I find what is distinctive in a business, set the creative
                direction, and carry it through words, images, and finished work.
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
            <h2 id="work-title">The industries change. The method does not.</h2>
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
                    {project.role} · {project.year}
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

        <section className="section services-section" id="services" aria-labelledby="services-title">
          <div className="section-heading compact-heading">
            <p className="section-number">02 / Ways to work together</p>
            <div>
              <h2 id="services-title">Direction first. Execution when it helps.</h2>
              <p className="services-intro">
                I am most useful when the business is better than the way it
                currently presents itself. The assignment begins with what is
                true and ends with a system people can understand and use.
              </p>
            </div>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.title}>
                <p>{service.number}</p>
                <h3>{service.title}</h3>
                <div>
                  <p>{service.description}</p>
                  <span>{service.scope}</span>
                </div>
              </article>
            ))}
          </div>
          <div className="services-cta">
            <p>
              A good fit usually starts with a meaningful change: a new offer,
              a clearer position, a body of work that needs a story, or a site
              that no longer represents the business.
            </p>
            <a className="text-link" href={inquiryHref}>
              Tell me what is changing <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="practice-note" aria-labelledby="practice-title">
          <div>
            <p className="section-number inverse">03 / Working method</p>
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
            <p className="section-number">04 / Writing & editorial work</p>
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
            <p className="section-number">05 / About</p>
            <h2 id="about-title">Different fields. The same editorial judgment.</h2>
            <p className="about-lead">
              I’m Preston Wimberly, a Creative Director based between San Marcos,
              Texas, and Salt Lake City, Utah.
            </p>
            <p>
              From 2008 to 2011, I sold advertising at Texas Monthly. It was my
              first job out of college, and I read every issue front to back,
              learning how reporting, typography, layout, and editing make a
              story land. As The Wild Feathers’ lead guitarist, songwriter, and
              pedal steel player through its Warner Bros. years, I also
              contributed to photography and album artwork. I later toured and
              recorded with Jamestown Revival. Building guitars turned that
              judgment toward materials, construction, repair, and aging.
              Aviation brought the same method into an operational business,
              where every claim has to hold up against the work. The fields
              change. The method does not.
            </p>
            <a className="text-link" href={inquiryHref}>
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Creative direction · Independent engagements</p>
          <h2 id="contact-title">What are you trying to make clear?</h2>
          <p className="contact-fit">
            If the business is better than the way it currently presents itself,
            send a short note about what is changing and what needs to become clear.
          </p>
          <a href={inquiryHref}>Start a project ↗</a>
        </section>
      </main>

      <footer className="site-footer">
        <p>© 2026 Preston Wimberly</p>
        <p>Creative Director · Brand strategy · Editorial direction</p>
        <a href="#hero-title">Back to top ↑</a>
      </footer>
    </>
  );
}
