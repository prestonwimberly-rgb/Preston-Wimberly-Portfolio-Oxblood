export type ProjectArtifact = {
  src: string;
  alt: string;
  caption: string;
  format: "landscape" | "portrait";
};

export type Project = {
  slug: string;
  title: string;
  kicker: string;
  headline: string;
  cardSummary: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  role: string;
  scope: string;
  year: string;
  liveUrl: string;
  liveLabel: string;
  collaborators: string;
  constraint: string;
  challengeTitle: string;
  challenge: string[];
  decisionTitle: string;
  decision: string[];
  deliverables: string[];
  outcomeTitle: string;
  outcome: string[];
  artifacts: ProjectArtifact[];
  closing: string;
  theme: "archive" | "field" | "workshop" | "studio";
};

export const projects: Project[] = [
  {
    slug: "wild-feathers",
    title: "The Wild Feathers",
    kicker: "Archive · Editorial · Web",
    headline: "Turning sixteen years of a band into a story people can enter.",
    cardSummary:
      "An evidence-first music archive that connects songs, shows, photographs, and firsthand history without flattening them into promotion.",
    summary:
      "The Wild Feathers had a long public history scattered across tour records, photographs, releases, interviews, and personal memory. The assignment was to build a useful record while keeping provenance, rights, and uncertainty visible.",
    image: "/images/wild-feathers-site.png",
    imageAlt: "The Wild Feathers working archive homepage",
    role: "Archive editor, writer & site builder",
    scope: "Research, architecture, writing, design, build",
    year: "2025–2026",
    liveUrl: "https://wildfeathers.netlify.app/",
    liveLabel: "View the working archive",
    collaborators:
      "Band history, credited source material, and documented rights records",
    constraint:
      "The working archive is not cleared for a public launch while image rights and fact-checking remain open.",
    challengeTitle: "History was abundant. Evidence was uneven.",
    challenge: [
      "A band story can become mythology quickly. Dates drift, captions lose their sources, and photographs get used as atmosphere rather than documents. The archive needed to distinguish what was verified, what was remembered, and what still required review.",
      "It also had to work at several scales: a listener entering through a song, a fan looking for a show, and a future editor tracing the source behind a claim.",
    ],
    decisionTitle: "Build the evidence before polishing the story.",
    decision: [
      "I organized the material as connected records: a performance ledger, canonical photographs, story chapters, archive collections, sources, rights, and provenance. The public-facing narrative sits on top of that structure rather than replacing it.",
      "The visual system is editorial and restrained. Large type gives the band room to feel cinematic; captions, source notes, and verification language keep the work accountable.",
    ],
    deliverables: [
      "Archive and information architecture",
      "Six-part narrative structure",
      "Performance and photo records",
      "Rights and provenance workflow",
      "Editorial design and writing",
      "Static-site build and image pipeline",
    ],
    outcomeTitle: "A private working archive with a public shape.",
    outcome: [
      "The system now holds a 384-performance ledger, 200 canonical photographs, six story chapters, and eleven archive collections. Music, shows, story, timeline, field notes, sources, and rights information can reinforce one another instead of living as separate fragments.",
      "Publication remains deliberately limited until rights and fact-checking are resolved. That restraint is part of the editorial work, not a missing layer of polish.",
    ],
    artifacts: [
      {
        src: "/images/wild-feathers-site.png",
        alt: "Desktop view of The Wild Feathers archive homepage",
        caption: "The current desktop opening connects music, story, and the living archive.",
        format: "landscape",
      },
      {
        src: "/images/wild-feathers-mobile.png",
        alt: "Mobile view of The Wild Feathers archive homepage",
        caption: "The same editorial hierarchy carried into a narrow mobile viewport.",
        format: "portrait",
      },
    ],
    closing:
      "The central idea is simple: memory becomes useful when the evidence stays attached.",
    theme: "archive",
  },
  {
    slug: "texas-aviation-partners",
    title: "Texas Aviation Partners",
    kicker: "Brand strategy · Editorial · Web",
    headline: "Making the real scale of an aviation company visible.",
    cardSummary:
      "A sharper position, voice, website, and editorial system for an aviation company whose experience had outgrown its public identity.",
    summary:
      "Texas Aviation Partners had years of operational credibility, but its public presentation made a broad airport management and development company look smaller than the work itself.",
    image: "/images/tap-hay-windsock.jpg",
    imageAlt: "A hay bale beside an airport windsock beneath a wide sky",
    imageFit: "cover",
    imagePosition: "center 46%",
    role: "Brand strategist & creative lead",
    scope: "Positioning, writing, photography, website",
    year: "2026",
    liveUrl: "https://texasaviationpartners.com/",
    liveLabel: "Visit Texas Aviation Partners",
    collaborators:
      "Company leadership, airport teams, and public-sector stakeholders",
    constraint:
      "The new position had to show greater range without overstating the company or losing the practical credibility behind it.",
    challengeTitle: "The company had outgrown its own description.",
    challenge: [
      "The earlier website centered on one airport and one category of work. Airport development, capital projects, public-sector coordination, land strategy, and advisory work were difficult to see as one connected practice.",
      "The task was to make the full operating range legible while keeping every claim grounded in real projects, people, and public records.",
    ],
    decisionTitle: "Organize the brand around completed work.",
    decision: [
      "I built a plain-language service model, rewrote the company story, and paired it with original field photography. The airports and landscapes are not background texture; they show the physical setting where the claims have to hold up.",
      "Projects, leadership experience, services, and long-form reporting now work as one system. Each part gives the next conversation more context.",
    ],
    deliverables: [
      "Brand position and message architecture",
      "Website strategy, writing, and build",
      "Leadership and service language",
      "Original airport photography",
      "Project and editorial structure",
      "Responsive design and metadata",
    ],
    outcomeTitle: "A broader business became easier to understand.",
    outcome: [
      "The finished site gives prospective partners direct routes into services, projects, leadership, news, and conversation. The editorial structure also gives the company a durable place to explain development work as it happens.",
      "The change is observable in the first impression: the company now appears as a Texas aviation operator and development partner, not the manager of a single field.",
    ],
    artifacts: [
      {
        src: "/images/tap-projects-site.png",
        alt: "Texas Aviation Partners projects page on desktop",
        caption: "The project system connects airport work to the company’s larger position.",
        format: "landscape",
      },
      {
        src: "/images/tap-mobile.png",
        alt: "Texas Aviation Partners homepage on mobile",
        caption: "The live site at a narrow mobile viewport.",
        format: "portrait",
      },
      {
        src: "/images/tap-surveyor.jpg",
        alt: "A surveyor working on an airport runway under large clouds",
        caption: "Original field photography makes the physical work visible.",
        format: "landscape",
      },
    ],
    closing:
      "The finished system gives the company language equal to the work: practical, experienced, and specific.",
    theme: "field",
  },
  {
    slug: "wimberly-guitars",
    title: "Wimberly Guitars",
    kicker: "Brand · Product storytelling · Commerce",
    headline: "Building a guitar brand from the materials up.",
    cardSummary:
      "A father-and-son workshop shaped into a distinct product brand with its own language, visual code, model architecture, and commission path.",
    summary:
      "Wimberly Guitars makes small-run electric guitars from walnut, leather, steel, brass, oil, and wire. The brand needed to feel as considered as the instruments without pretending the workshop was a factory.",
    image: "/images/wimberly-workshop-hero.avif",
    imageAlt: "A Wimberly guitar resting on a wooden workbench in the workshop",
    imageFit: "cover",
    imagePosition: "center 52%",
    role: "Co-founder, writer & brand lead",
    scope: "Positioning, product language, website, launch",
    year: "2026",
    liveUrl: "https://wimberlycustomguitars.com/",
    liveLabel: "Visit Wimberly Guitars",
    collaborators: "Built with the workshop’s co-founder",
    constraint:
      "The market is crowded with vintage cues and generic craft claims, while the workshop builds slowly and only in small runs.",
    challengeTitle: "A handmade object needs more than handmade language.",
    challenge: [
      "The useful difference was already in the instruments: walnut, hand-tooled leather, blued steel, blackened nickel, and raw brass. The job was to turn those choices into a product system without sanding away their regional character.",
      "The site also had to explain unfamiliar finishes and make commissioning feel direct without implying immediate inventory or volume production.",
    ],
    decisionTitle: "Let the product set every rule.",
    decision: [
      "I built the voice around honest materials, permanence, and the discipline of a small workshop. The Jack and the Lucio became distinct models inside one recognizable family.",
      "Page rhythm, photography, materials language, and the commission journey follow the same standard: spare, tactile, and specific enough to help a player make a decision.",
    ],
    deliverables: [
      "Brand position and voice",
      "Model and materials architecture",
      "Product and process writing",
      "Website design and front-end build",
      "Commission and waitlist journey",
      "Build journal and launch structure",
    ],
    outcomeTitle: "A workshop now has a recognizable front door.",
    outcome: [
      "The live site introduces the workshop through its materials, gives the Jack and Lucio room to feel distinct, and leads an interested player toward a commission or build waitlist.",
      "The finished brand behaves like the product: it values patience, lets detail do the persuading, and leaves room for each instrument to gather its own history.",
    ],
    artifacts: [
      {
        src: "/images/wimberly-site.png",
        alt: "Desktop view of the Wimberly Guitars homepage",
        caption: "The opening position comes directly from the workshop’s pace and materials.",
        format: "landscape",
      },
      {
        src: "/images/wimberly-mobile.png",
        alt: "Mobile view of the Wimberly Guitars homepage",
        caption: "The commission path remains visible without crowding the product story.",
        format: "portrait",
      },
      {
        src: "/images/wimberly-reference.avif",
        alt: "A walnut and blued-steel material reference",
        caption: "Walnut, blued steel, and honest wear supplied the visual vocabulary.",
        format: "landscape",
      },
    ],
    closing:
      "The brand looks and sounds like the instruments: spare, tactile, regional, and built for time.",
    theme: "workshop",
  },
  {
    slug: "preston-session-site",
    title: "prestonwimberly.com",
    kicker: "Positioning · Service design · Web",
    headline: "Turning a musician’s range into one direct invitation.",
    cardSummary:
      "A focused session-musician website that connects two decades of studio and touring experience to a clear way to hear the work and start a project.",
    summary:
      "A working musician can have a long résumé and still leave a producer unsure what to do next. This site had to make the offer, taste, process, and booking path immediately understandable.",
    image: "/images/preston-session-site.png",
    imageAlt: "prestonwimberly.com homepage with a musician playing guitar",
    role: "Writer, strategist, designer & builder",
    scope: "Positioning, copy, service design, website",
    year: "2026",
    liveUrl: "https://prestonwimberly.com/",
    liveLabel: "Visit prestonwimberly.com",
    collaborators: "Independent build for my own session practice",
    constraint:
      "The site needed to show breadth across guitar, pedal steel, bass, studio, television, and touring without reading like a career inventory.",
    challengeTitle: "Experience was not the same as an offer.",
    challenge: [
      "Producers and artists do not need every credit before they understand whether a player belongs on a song. They need a quick sense of judgment, feel, working process, and fit.",
      "The challenge was to turn a wide body of work into a specific promise without losing the personality behind it.",
    ],
    decisionTitle: "Lead with the part the client actually wants.",
    decision: [
      "“The right part, played like it matters” became the organizing idea. Work samples, services, process, availability, and booking all support that sentence rather than compete with it.",
      "The visual direction uses dark stage tones, warm wood, and large editorial type. The conversion path stays plain: hear the work, understand the process, then start a project.",
    ],
    deliverables: [
      "Positioning and core message",
      "Service and process architecture",
      "Website copy and editorial system",
      "Visual direction and responsive build",
      "Audio and work-sample presentation",
      "Inquiry and booking path",
    ],
    outcomeTitle: "The range now resolves into a clear next step.",
    outcome: [
      "The finished site gives artists and producers an immediate route to hear the work, understand the available instruments and process, and begin an inquiry.",
      "It keeps the proof close to the promise while leaving the deeper career history available for people who want it.",
    ],
    artifacts: [
      {
        src: "/images/preston-session-site.png",
        alt: "Desktop view of prestonwimberly.com",
        caption: "Position, proof, and inquiry share one opening view.",
        format: "landscape",
      },
      {
        src: "/images/preston-session-mobile.png",
        alt: "Mobile view of prestonwimberly.com",
        caption: "The mobile version keeps the work and primary action close together.",
        format: "portrait",
      },
    ],
    closing:
      "The site does not try to explain every performance. It makes the next recording easier to begin.",
    theme: "studio",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
