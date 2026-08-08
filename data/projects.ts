export type ProjectArtifact = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
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
  imageCredit?: string;
  imageFit?: "cover" | "contain";
  imagePosition?: string;
  imageAspect?: string;
  role: string;
  scope: string;
  year: string;
  place: string;
  engagementType: string;
  status: string;
  ownership: string;
  collaboration: string;
  liveUrl?: string;
  liveLabel?: string;
  accessNote?: string;
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
  verificationNotes?: string[];
};

const projectRecords: Project[] = [
  {
    slug: "wild-feathers",
    title: "The Wild Feathers",
    kicker: "Archive · Editorial · Web",
    headline: "Turning sixteen years of a band into a story people can enter.",
    cardSummary:
      "I built an evidence-first music archive that links songs, shows, photographs, and firsthand accounts to documented sources and rights records.",
    summary:
      "I found The Wild Feathers’ public history across tour records, photographs, releases, interviews, and personal memory. I built a record that keeps provenance, rights, and uncertainty attached to each item.",
    image: "/images/wild-feathers-laugh.png",
    imageAlt: "The five members of The Wild Feathers seated together outside, laughing",
    imageFit: "cover",
    imagePosition: "center 45%",
    imageAspect: "33 / 14",
    role: "Archive editor, writer & site builder",
    scope: "Research, architecture, writing, design, build",
    year: "2025–2026",
    place: "Nashville, Tennessee",
    engagementType: "Independent editorial archive",
    status: "Private working archive",
    ownership:
      "I defined the archive model, researched and structured the records, wrote the narrative, designed the editorial system, and built the site.",
    collaboration:
      "Source-led independent work using credited band history and documented rights records",
    accessNote:
      "I’m keeping the public link offline while image rights and fact-checking remain open.",
    constraint:
      "Image rights and fact-checking remain open, so I’m keeping the working archive private.",
    challengeTitle: "The archive began with uneven evidence.",
    challenge: [
      "People repeat dates without sources, detach captions from photographs, and turn records into atmosphere. I separated verified records, firsthand memory, and open questions.",
      "I designed three entry points: songs for listeners, shows for fans, and source trails for future editors.",
    ],
    decisionTitle: "Build the evidence before polishing the story.",
    decision: [
      "I organized the material as connected records: a performance ledger, canonical photographs, story chapters, archive collections, sources, rights, and provenance. I wrote the public narrative from those records and kept the source trails visible.",
      "I used large type for scale, then kept captions, source notes, and verification language close to the claims.",
    ],
    deliverables: [
      "Archive and information architecture",
      "Six-part narrative structure",
      "Performance and photo records",
      "Rights and provenance workflow",
      "Editorial design and writing",
      "Static-site build and image pipeline",
    ],
    outcomeTitle: "Editors can trace the public narrative back to its records and sources.",
    outcome: [
      "I organized 384 performances, 200 canonical photographs, six story chapters, and eleven archive collections. Visitors can move between music, shows, story, timeline, field notes, sources, and rights information through linked records.",
      "I have kept publication limited until the rights review and fact-checking close.",
    ],
    artifacts: [
      {
        src: "/images/wild-feathers-site.jpg",
        alt: "Desktop view of The Wild Feathers archive homepage",
        caption: "Desktop opening of the private working archive.",
        credit: "Archive design and screenshot by Preston Wimberly",
        format: "landscape",
      },
      {
        src: "/images/wild-feathers-mobile.jpg",
        alt: "Mobile view of The Wild Feathers archive homepage",
        caption: "Working archive homepage at a 375-pixel mobile viewport.",
        credit: "Archive design and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing:
      "Each published memory stays linked to its source.",
    theme: "archive",
    verificationNotes: [
      "Confirm the counts for performances, canonical photographs, chapters, and archive collections.",
      "Confirm the rights and fact-checking status before restoring any public archive link.",
    ],
  },
  {
    slug: "texas-aviation-partners",
    title: "Texas Aviation Partners",
    kicker: "Brand strategy · Editorial · Web",
    headline: "Making the real scale of an aviation company visible.",
    cardSummary:
      "I used positioning, writing, photography, and a new website to show the full operating range of Texas Aviation Partners.",
    summary:
      "Texas Aviation Partners manages and develops airports, but visitors saw one location and one category of work on its old site.",
    image: "/images/tap-hay-windsock.jpg",
    imageAlt: "A hay bale beside an airport windsock beneath a wide sky",
    imageCredit: "Photograph by Preston Wimberly",
    imageFit: "cover",
    imagePosition: "center 46%",
    role: "Brand strategist & creative lead",
    scope: "Positioning, writing, photography, website",
    year: "2026",
    place: "San Marcos, Texas",
    engagementType: "Client engagement",
    status: "Live",
    ownership:
      "I led the position, message architecture, website narrative, original photography, design direction, and front-end build.",
    collaboration:
      "Developed with company leadership, airport teams, and public-sector stakeholders",
    liveUrl: "https://texasaviationpartners.com/",
    liveLabel: "Visit Texas Aviation Partners",
    constraint:
      "I needed to show the company’s full range and keep every claim tied to its record.",
    challengeTitle: "The old site centered on one airport and one category of work.",
    challenge: [
      "The earlier website centered on one airport and one category of work. Airport development, capital projects, public-sector coordination, land strategy, and advisory work were difficult to see as one connected practice.",
      "Prospective partners could not see how the services fit together or trace the claims to projects, people, and public records.",
    ],
    decisionTitle: "Organize the brand around completed work.",
    decision: [
      "I built a plain-language service model and rewrote the company story. I also photographed the airports and landscapes where the claims have to hold up.",
      "I linked projects, leadership, services, and reporting so prospective partners can move from a claim to the work behind it.",
    ],
    deliverables: [
      "Brand position and message architecture",
      "Website strategy, writing, and build",
      "Leadership and service language",
      "Original airport photography",
      "Project and editorial structure",
      "Responsive design and metadata",
    ],
    outcomeTitle: "Prospective partners can trace each service to supporting work.",
    outcome: [
      "Prospective partners can move from services to projects, leadership, news, or a direct conversation. The company can publish development reporting in the same system.",
    ],
    artifacts: [
      {
        src: "/images/tap-projects-site.jpg",
        alt: "Texas Aviation Partners projects page on desktop",
        caption: "Desktop projects index organized around the company’s airport work.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
      },
      {
        src: "/images/tap-mobile.jpg",
        alt: "Texas Aviation Partners homepage on mobile",
        caption: "Texas Aviation Partners homepage at a 375-pixel mobile viewport.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "portrait",
      },
      {
        src: "/images/tap-surveyor.jpg",
        alt: "A surveyor working on an airport runway under large clouds",
        caption: "A surveyor works on the runway at San Marcos Regional Airport.",
        credit: "Photograph by Preston Wimberly",
        format: "landscape",
      },
    ],
    closing:
      "The company now describes its work in practical, specific language.",
    theme: "field",
    verificationNotes: [
      "Confirm Preston’s decision authority and the description of stakeholder collaboration.",
      "Add verified post-launch business or communications evidence if it becomes available.",
    ],
  },
  {
    slug: "wimberly-guitars",
    title: "Wimberly Guitars",
    kicker: "Brand · Product storytelling · Commerce",
    headline: "Building a guitar brand from the materials up.",
    cardSummary:
      "For a father-and-son workshop, I built a product brand with its own language, visual code, model architecture, and commission path.",
    summary:
      "Wimberly Guitars makes small-run electric guitars from walnut, leather, steel, brass, oil, and wire. We needed a brand as considered as the instruments, with no claim to factory scale.",
    image: "/images/wimberly-jack-antique-bronze-knobs.jpeg",
    imageAlt: "Close view of a walnut Wimberly guitar with a hand-tooled leather pickguard and antique bronze knobs",
    imageFit: "cover",
    imagePosition: "center 52%",
    role: "Co-founder, writer & brand lead",
    scope: "Positioning, product language, website, launch",
    year: "2026",
    place: "Texas",
    engagementType: "Co-founded venture",
    status: "Live",
    ownership:
      "As co-founder and brand lead, I set the position and voice, structured the product story, and designed and built the website and commission journey.",
    collaboration:
      "Developed with the workshop’s co-founder around the instruments, materials, and build process",
    liveUrl: "https://wimberlycustomguitars.com/",
    liveLabel: "Visit Wimberly Guitars",
    constraint:
      "Large brands fill the market with vintage cues and generic craft claims. Our workshop builds a few instruments at a time.",
    challengeTitle: "We built the product language from the materials.",
    challenge: [
      "We build with walnut, hand-tooled leather, blued steel, blackened nickel, and raw brass. I turned those choices into model and product language with the same regional character.",
      "I explained unfamiliar finishes and set clear expectations about inventory and build volume.",
    ],
    decisionTitle: "Build every rule from the instruments.",
    decision: [
      "I built the voice around honest materials and the discipline of a small workshop. I organized The Jack and the Lucio as two models in one family.",
      "I used spare page rhythm, close photography, and direct commission steps to help players compare the models.",
    ],
    deliverables: [
      "Brand position and voice",
      "Model and materials architecture",
      "Product and process writing",
      "Website design and front-end build",
      "Commission and waitlist journey",
      "Build journal and launch structure",
    ],
    outcomeTitle: "The workshop now has a clear commission path.",
    outcome: [
      "Players can compare models and materials, learn how we build, and join a commission or waitlist.",
    ],
    artifacts: [
      {
        src: "/images/wimberly-site.jpg",
        alt: "Desktop view of the Wimberly Guitars homepage",
        caption: "Desktop opening centered on the Jack and the workshop’s material language.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
      },
      {
        src: "/images/wimberly-mobile.jpg",
        alt: "Mobile view of the Wimberly Guitars homepage",
        caption: "Wimberly Guitars homepage at a narrow mobile viewport.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "portrait",
      },
      {
        src: "/images/wimberly-reference.avif",
        alt: "A walnut and blued-steel material reference",
        caption: "Walnut and blued steel define the workshop’s material palette.",
        credit: "Photograph by Preston Wimberly",
        format: "landscape",
      },
    ],
    closing:
      "I based the language and visuals on the walnut, leather, steel, and brass we use at the bench.",
    theme: "workshop",
    verificationNotes: [
      "Confirm the co-founder relationship and whether the public offer should be described as commissions, a waitlist, or commerce.",
      "Replace the current low-resolution mobile artifact before launch.",
    ],
  },
  {
    slug: "preston-session-site",
    title: "prestonwimberly.com",
    kicker: "Positioning · Service design · Web",
    headline: "Turning a musician’s range into one direct invitation.",
    cardSummary:
      "A focused session-musician site where producers can hear the work, understand the process, and start a project.",
    summary:
      "Producers need to hear the work, understand the offer, and know how to book the session. I built one site for those three decisions.",
    image: "/images/preston-session-site.jpg",
    imageAlt: "prestonwimberly.com homepage with a musician playing guitar",
    role: "Writer, strategist, designer & builder",
    scope: "Positioning, copy, service design, website",
    year: "2026",
    place: "San Marcos, Texas · Salt Lake City, Utah",
    engagementType: "Self-directed practice",
    status: "Live",
    ownership:
      "I defined the offer, wrote the positioning and service language, designed the experience, and built the site.",
    collaboration: "Independent work for my own session practice",
    liveUrl: "https://prestonwimberly.com/",
    liveLabel: "Visit prestonwimberly.com",
    constraint:
      "I needed to show guitar, pedal steel, bass, studio, television, and touring work in one focused offer.",
    challengeTitle: "A long résumé still left the offer unclear.",
    challenge: [
      "Producers and artists need a quick sense of judgment, feel, working process, and fit. A complete career inventory would slow that decision.",
      "I turned a wide body of work into one specific promise and kept the personality behind it.",
    ],
    decisionTitle: "Lead with the part the client wants.",
    decision: [
      "I organized the site around “The right part, played like it matters.” I used work samples, services, process, availability, and booking to support that promise.",
      "I used dark stage tones, warm wood, and large editorial type. Visitors can hear the work, understand the process, then start a project.",
    ],
    deliverables: [
      "Positioning and core message",
      "Service and process architecture",
      "Website copy and editorial system",
      "Visual direction and responsive build",
      "Audio and work-sample presentation",
      "Inquiry and booking path",
    ],
    outcomeTitle: "Producers can hear the work and start a project on one page.",
    outcome: [
      "Artists and producers can hear the work, understand the available instruments and process, and begin an inquiry.",
    ],
    artifacts: [
      {
        src: "/images/preston-session-site.jpg",
        alt: "Desktop view of prestonwimberly.com",
        caption: "Desktop opening with work samples, services, and inquiry in one sequence.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
      },
      {
        src: "/images/preston-session-mobile.jpg",
        alt: "Mobile view of prestonwimberly.com",
        caption: "Session-musician homepage at a 375-pixel mobile viewport.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing:
      "Visitors get the information they need to start the next recording.",
    theme: "studio",
    verificationNotes: [
      "Confirm the two-decades claim and the listed instrument and service breadth.",
      "Add verified inquiry or booking evidence only if it becomes available.",
    ],
  },
];

const featuredProjectOrder = [
  "texas-aviation-partners",
  "wild-feathers",
  "wimberly-guitars",
  "preston-session-site",
];

export const projects = featuredProjectOrder.map((slug) => {
  const project = projectRecords.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing portfolio project: ${slug}`);
  return project;
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
