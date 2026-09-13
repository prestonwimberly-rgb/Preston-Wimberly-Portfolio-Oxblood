import Link from "next/link";
import { ResponsiveImage } from "@/components/responsive-image";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { featuredProjects } from "@/data/projects";
import { sandpaperExcerpt } from "@/data/sandpaper";
import { mailtoHref } from "@/lib/site";
import { homeStructuredData } from "@/lib/structured-data";

const workingMethod = ["Report", "Position", "Direct", "Write", "Photograph", "Build"];

const inquiryHref = mailtoHref("Creative direction conversation");

const sandpaperFeature = {
  chapterNumber: "04",
  chapter: "The Manuscript",
  title: "SANDPAPER",
  premise:
    "A memoir about music, addiction, fatherhood, and the patient work of becoming useful.",
  role: "Writer / Creative Director",
  year: "2026",
  outcome:
    "A complete 50,000-word manuscript, edited into 38 chapters and typeset as a 141-page book.",
};

const writing = [
  {
    type: "Essay · Craft & brand voice",
    title: "On the slowness of oil",
    description:
      "A letter from the guitar bench about patience, inheritance, and the time real materials require.",
    href: "https://wimberlycustomguitars.com/build-journal",
  },
  {
    type: "First-person essay · Music",
    title: "Willie in Las Vegas",
    description:
      "My father’s Martin, Willie Nelson’s stage, and a badly timed visit to a craps table. A firsthand account of the 2013 tour.",
    href: "https://thewildfeathersband.com/field-notes/willie-in-las-vegas/",
  },
  {
    type: "Profile · Aviation leadership",
    title: "Jim Wimberly: Fifty years on the field",
    description:
      "A profile of Jim Wimberly, from municipal airports through Southwest Airlines and back to Texas aviation.",
    href: "https://texasaviationpartners.com/about/jim-wimberly/",
  },
  {
    type: "Independent practice · Positioning",
    title: "The right part, played like it matters.",
    description:
      "A focused session-musician offer where producers can hear the work, understand the process, and start a project.",
    href: "/work/preston-session-site",
  },
];

export default function Home() {
  return (
    <>
      <StructuredData data={homeStructuredData(featuredProjects)} />
      <SiteHeader
        skipHref="#main-content"
        navAriaLabel="Primary navigation"
        workLink={{ href: "#work", label: "Work" }}
        secondaryLink={{ href: "#about", label: "About", narrow: true }}
        contactHref={inquiryHref}
        contactLongLabel="Let’s talk"
      />

      <main id="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="hero-intro">
              <p className="eyebrow">Creative Director</p>
            </div>
            <h1 id="hero-title">
              Find what is true.<br />
              <em>Give it form.</em>
            </h1>
            <div className="hero-bottom">
              <p>
                I set the creative direction for businesses and carry it through
                writing, photography, and design.
              </p>
              <a className="text-link" href="#work">
                Read the work <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <figure className="hero-visual">
            <div className="hero-image">
              <ResponsiveImage
                src="/images/tap-tractor.jpg"
                alt="A tractor crossing a runway beneath large Texas clouds"
                priority
                sizes="(max-width: 900px) 100vw, 43vw"
                style={{ objectPosition: "20% center" }}
              />
            </div>
            <figcaption>
              A tractor works across an airport runway.
              <span>Photograph by Preston Wimberly</span>
            </figcaption>
          </figure>
        </section>

        <section className="section work-section" id="work" aria-labelledby="work-title">
          <div className="section-heading">
            <p className="section-number">01 / Selected work</p>
            <h2 id="work-title">Selected work.</h2>
          </div>

          <div className="project-list">
            {featuredProjects.map((project, index) => {
              const image = project.homepageImage ?? project.image;
              const imageAlt = project.homepageImageAlt ?? project.imageAlt;
              const imageCaption =
                project.homepageImageCaption ?? project.imageCaption;
              const imageCredit =
                project.homepageImageCredit ?? project.imageCredit;
              const imageFit = project.homepageImageFit ?? project.imageFit;
              const imagePosition =
                project.homepageImagePosition ?? project.imagePosition;
              const imageAspect =
                project.homepageImageAspect ?? project.imageAspect;

              return (
              <article
                className={`project-row project-row-${index + 1} project-image-${imageFit ?? "contain"}`}
                key={project.slug}
              >
                <figure className="project-visual">
                  <Link
                    className="project-image"
                    href={`/work/${project.slug}`}
                    style={{ aspectRatio: imageAspect }}
                  >
                    <ResponsiveImage
                      src={image}
                      alt={imageAlt}
                      sizes="(max-width: 760px) 100vw, 54vw"
                      style={{ objectPosition: imagePosition ?? "center" }}
                      objectFit={imageFit ?? "cover"}
                    />
                  </Link>
                  <figcaption>
                    {imageCaption}
                    {imageCredit ? <span>{imageCredit}</span> : null}
                  </figcaption>
                </figure>
                <div className="project-copy">
                  <p className="project-index">{project.chapterNumber}</p>
                  <p className="project-kicker">{project.chapter}</p>
                  <h3 className={project.title.includes(" ") ? undefined : "title-nowrap"}>
                    <Link href={`/work/${project.slug}`}>{project.title}</Link>
                  </h3>
                  <p className="project-premise">
                    {project.homepagePremise ?? project.cardSummary}
                  </p>
                  {project.slug === "wild-feathers" ? (
                    <blockquote className="project-excerpt">
                      <p>“We left the most spiritual moment of my professional life and walked straight to a craps table.”</p>
                      <cite><a href="https://thewildfeathersband.com/field-notes/willie-in-las-vegas/" target="_blank" rel="noreferrer">Read “Willie in Las Vegas” <span aria-hidden="true">↗</span></a></cite>
                    </blockquote>
                  ) : null}
                  <dl className="project-register" aria-label={`${project.title} project details`}>
                    <div>
                      <dt>Role</dt>
                      <dd>{project.role}</dd>
                    </div>
                    <div>
                      <dt>Period</dt>
                      <dd>{project.year}</dd>
                    </div>
                  </dl>
                  <p className="project-proof">
                    <span>{project.status}</span>
                    {project.outcomeTitle}
                  </p>
                  <Link className="text-link" href={`/work/${project.slug}`}>
                    Read the case study <span aria-hidden="true">↗</span>
                  </Link>
                  {project.slug === "wild-feathers" ? <p className="project-live-link"><a className="text-link" href={project.liveUrl} target="_blank" rel="noreferrer">Visit the live archive <span aria-hidden="true">↗</span></a></p> : null}
                </div>
              </article>
              );
            })}
            <article className="project-row project-row-editorial">
              <figure className="project-visual project-visual-manuscript">
                <Link
                  className="project-image project-image-manuscript"
                  href="/sandpaper"
                >
                  <ResponsiveImage
                    src="/images/sandpaper-cover.png"
                    alt="Title page for SANDPAPER, a memoir by Preston Wimberly"
                    sizes="(max-width: 760px) 74vw, 30vw"
                    objectFit="contain"
                  />
                </Link>
                <figcaption>
                  Complete manuscript · 50,000 words · 38 chapters
                  <span>Read an excerpt and see the interior pages</span>
                </figcaption>
              </figure>
              <div className="project-copy">
                <p className="project-index">{sandpaperFeature.chapterNumber}</p>
                <p className="project-kicker">{sandpaperFeature.chapter}</p>
                <h3 className="sandpaper-title">
                  <Link href="/sandpaper">{sandpaperFeature.title}</Link>
                </h3>
                <p className="project-premise">{sandpaperFeature.premise}</p>
                <blockquote className="project-excerpt manuscript-excerpt"><p>“{sandpaperExcerpt[0]}”</p></blockquote>
                <dl className="project-register" aria-label="SANDPAPER project details">
                  <div>
                    <dt>Role</dt>
                    <dd>{sandpaperFeature.role}</dd>
                  </div>
                  <div>
                    <dt>Period</dt>
                    <dd>{sandpaperFeature.year}</dd>
                  </div>
                </dl>
                <p className="project-proof">
                  <span>Complete manuscript</span>
                  {sandpaperFeature.outcome}
                </p>
                <Link className="text-link" href="/sandpaper">
                  Read an excerpt <span aria-hidden="true">↗</span>
                </Link>
              </div>
            </article>
          </div>
        </section>

        <section className="practice-note" aria-labelledby="practice-title">
          <div>
            <p className="section-number inverse">02 / Working method</p>
            <h2 id="practice-title">Start with the people doing the work.</h2>
          </div>
          <div className="practice-note-copy">
            <p>
              I interview the people doing the work, establish the position, and
              carry it through writing, photography, design, and the finished site.
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
            <p className="section-number">03 / Writing & independent work</p>
            <h2 id="writing-title">The work continues in words.</h2>
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
              src="/images/preston-stage.jpeg"
              alt="Preston Wimberly playing electric guitar onstage"
              sizes="(max-width: 760px) 100vw, 46vw"
              style={{ objectPosition: "62% center" }}
              objectFit="contain"
            />
            <figcaption>Preston Wimberly in performance.</figcaption>
          </figure>
          <div className="about-copy">
            <p className="section-number">04 / About</p>
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
              where every claim has to hold up against the work.
            </p>
            <a className="text-link" href={inquiryHref}>
              Start a conversation <span aria-hidden="true">↗</span>
            </a>
            <a className="text-link resume-link" href="/downloads/preston-wimberly-resume.pdf">
              Résumé <span>PDF · 1 page</span> <span aria-hidden="true">↓</span>
            </a>
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-title">
          <p className="eyebrow">Creative direction · Writing · Art direction</p>
          <h2 id="contact-title">Let’s talk about the work.</h2>
          <p className="contact-fit">
            I’m open to agency and in-house roles, as well as independent projects.
            Tell me about the team, the assignment, or the business you’re building.
          </p>
          <a href={inquiryHref}>Start a conversation ↗</a>
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
