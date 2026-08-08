export type ProjectArtifact = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  format: "landscape" | "portrait";
  aspect?: string;
};

export type ProjectEvidence = {
  label: string;
  value: string;
};

export type Project = {
  slug: string;
  chapterNumber: string;
  chapter: string;
  premise: string;
  title: string;
  metaTitle: string;
  kicker: string;
  headline: string;
  cardSummary: string;
  summary: string;
  image: string;
  imageAlt: string;
  imageCaption: string;
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
  evidenceEyebrow: string;
  evidenceTitle: string;
  evidenceIntro: string;
  evidence: ProjectEvidence[];
  deliverables: string[];
  artifactTitle: string;
  artifactIntro: string;
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
    chapterNumber: "02",
    chapter: "The Road",
    premise:
      "What happens when a relatively unknown band signs a major-label record deal and spends the next two years on the road?",
    title: "The Wild Feathers",
    metaTitle: "The Wild Feathers Music Archive",
    kicker: "Archive · Editorial · Web",
    headline: "Turning sixteen years of a band into a story people can enter.",
    cardSummary:
      "I built an evidence-first music archive that links songs, shows, photographs, and firsthand accounts to documented sources and rights records.",
    summary:
      "I found The Wild Feathers’ public history across tour records, photographs, releases, interviews, and personal memory. I built a record that keeps provenance, rights, and uncertainty attached to each item.",
    image: "/images/wild-feathers-laugh.png",
    imageAlt: "The five members of The Wild Feathers seated together outside, laughing",
    imageCaption: "The Wild Feathers, archival band photograph.",
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
    evidenceEyebrow: "Archive method",
    evidenceTitle: "Keep the source attached to the story.",
    evidenceIntro:
      "The working system preserves the difference between a documented record, a firsthand memory, and an open question.",
    evidence: [
      {
        label: "Records",
        value: "Songs, shows, photographs, narrative, sources, rights, and provenance remain connected.",
      },
      {
        label: "Editorial rule",
        value: "Verification language stays beside the claim instead of disappearing during polish.",
      },
      {
        label: "Publication status",
        value: "Private while image rights and fact-checking remain open.",
      },
    ],
    deliverables: [
      "Archive and information architecture",
      "Narrative chapter structure",
      "Performance and photo records",
      "Rights and provenance workflow",
      "Editorial design and writing",
      "Static-site build and image pipeline",
    ],
    artifactTitle: "The archive as a working system.",
    artifactIntro:
      "Desktop and mobile views show the editorial structure without presenting the private archive as publication-ready.",
    outcomeTitle: "Editors can trace the public narrative back to its records and sources.",
    outcome: [
      "I organized performance, photography, narrative, and collection records so editors can move between the story, its source trail, and the related rights information.",
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
    closing: "Each published memory stays linked to its source.",
    theme: "archive",
    verificationNotes: [
      "Confirm the counts for performances, canonical photographs, chapters, and archive collections.",
      "Confirm the rights and fact-checking status before restoring any public archive link.",
    ],
  },
  {
    slug: "texas-aviation-partners",
    chapterNumber: "01",
    chapter: "The Airfield",
    premise:
      "How do you make airport infrastructure feel consequential without turning it into corporate aviation marketing?",
    title: "Texas Aviation Partners",
    metaTitle: "Texas Aviation Partners Brand Strategy",
    kicker: "Brand strategy · Editorial · Web",
    headline: "Making the real scale of an aviation company visible.",
    cardSummary:
      "I used positioning, writing, photography, and a new website to show the full operating range of Texas Aviation Partners.",
    summary:
      "Texas Aviation Partners manages and develops airports, but visitors saw one location and one category of work on its old site.",
    image: "/images/tap-hay-windsock.jpg",
    imageAlt: "A hay bale beside an airport windsock beneath a wide sky",
    imageCaption: "Hay bales and an airport windsock in the working landscape.",
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
      "My work covered the position, message architecture, website narrative, original photography, design direction, and front-end build.",
    collaboration:
      "Website and communications work within a broader company and public-sector operating context",
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
    evidenceEyebrow: "Public proof",
    evidenceTitle: "Move from the claim to the work behind it.",
    evidenceIntro:
      "The system connects plain-language positioning with projects, leadership information, reporting, and original field photography.",
    evidence: [
      {
        label: "Position",
        value: "Airport management and development presented as one connected practice.",
      },
      {
        label: "Proof path",
        value: "Services connect to projects, leadership, news, and direct contact.",
      },
      {
        label: "Field record",
        value: "Original photographs keep the public language tied to airport work and place.",
      },
    ],
    deliverables: [
      "Brand position and message architecture",
      "Website strategy, writing, and build",
      "Leadership and service language",
      "Original airport photography",
      "Project and editorial structure",
      "Responsive design and metadata",
    ],
    artifactTitle: "Work recorded in the field.",
    artifactIntro:
      "Original photography keeps the case study grounded in airport land, runway maintenance, and people doing the work.",
    outcomeTitle: "Prospective partners can trace each service to supporting work.",
    outcome: [
      "Prospective partners can move from services to projects, leadership, news, or a direct conversation. The company can publish development reporting in the same system.",
    ],
    artifacts: [
      {
        src: "/images/tap-tractor.jpg",
        alt: "A tractor crossing an airport runway beneath large clouds",
        caption: "A tractor works across an airport runway.",
        credit: "Photograph by Preston Wimberly",
        format: "landscape",
        aspect: "1280 / 851",
      },
      {
        src: "/images/tap-surveyor.jpg",
        alt: "A surveyor working on an airport runway under large clouds",
        caption: "A surveyor works on an airport runway.",
        credit: "Photograph by Preston Wimberly",
        format: "landscape",
        aspect: "4 / 3",
      },
    ],
    closing:
      "A claim should lead to a project, a person, or a public record.",
    theme: "field",
    verificationNotes: [
      "Confirm Preston’s decision authority and the description of stakeholder collaboration.",
      "Add verified post-launch business or communications evidence if it becomes available.",
    ],
  },
  {
    slug: "wimberly-guitars",
    chapterNumber: "03",
    chapter: "The Object",
    premise: "Objects meant to acquire history.",
    title: "Wimberly Guitars",
    metaTitle: "Wimberly Guitars Brand Strategy",
    kicker: "Brand · Product storytelling · Web",
    headline: "Building a guitar brand from the materials up.",
    cardSummary:
      "For a father-and-son workshop, I built a product brand with its own language, visual code, model architecture, and inquiry path.",
    summary:
      "Wimberly Guitars makes small-run electric guitars from walnut, leather, steel, brass, oil, and wire. We needed a brand as considered as the instruments, with no claim to factory scale.",
    image: "/images/wimberly-jack-antique-bronze-knobs.jpeg",
    imageAlt: "Close view of a walnut Wimberly guitar with a hand-tooled leather pickguard and antique bronze knobs",
    imageCaption: "Walnut, hand-tooled leather, and antique bronze hardware.",
    imageFit: "cover",
    imagePosition: "center 52%",
    role: "Writer & brand lead",
    scope: "Positioning, product language, website, launch",
    year: "2026",
    place: "Texas",
    engagementType: "Independent workshop brand",
    status: "Live",
    ownership:
      "I set the position and voice, structured the product story, and designed and built the website and inquiry journey.",
    collaboration:
      "Developed with the workshop around the instruments, materials, and build process",
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
      "I used spare page rhythm, close photography, and direct inquiry steps to help players compare the models.",
    ],
    evidenceEyebrow: "Material system",
    evidenceTitle: "Let the instrument set the rules.",
    evidenceIntro:
      "The brand language comes from the materials, model family, and honest scale of the workshop.",
    evidence: [
      {
        label: "Materials",
        value: "Walnut, hand-tooled leather, blued steel, blackened nickel, and raw brass.",
      },
      {
        label: "Model system",
        value: "The Jack and the Lucio presented as two models in one family.",
      },
      {
        label: "Scale",
        value: "A small workshop building a few instruments at a time.",
      },
    ],
    deliverables: [
      "Brand position and voice",
      "Model and materials architecture",
      "Product and process writing",
      "Website design and front-end build",
      "Availability and inquiry journey",
      "Build journal and launch structure",
    ],
    artifactTitle: "The object and its language.",
    artifactIntro:
      "Desktop and mobile views carry the instruments’ material vocabulary into a focused model and product presentation.",
    outcomeTitle: "The workshop now has a clear inquiry path.",
    outcome: [
      "Players can compare models and materials, learn how the workshop builds, and ask directly about availability.",
    ],
    artifacts: [
      {
        src: "/images/wimberly-site.jpg",
        alt: "Desktop view of the Wimberly Guitars homepage",
        caption: "Desktop opening centered on the workshop, an unfinished instrument, and the material language.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
        aspect: "1417 / 892",
      },
      {
        src: "/images/wimberly-mobile.jpg",
        alt: "Mobile view of the Wimberly Guitars homepage",
        caption: "Wimberly Guitars homepage at a 390-pixel mobile viewport.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing: "A material choice has to earn its place in the story.",
    theme: "workshop",
    verificationNotes: [
      "Confirm the co-founder relationship and whether the public offer should be described as commissions, a waitlist, or commerce.",
      "Confirm the provenance and intended use of the excluded reference and workshop images before publishing either asset.",
    ],
  },
  {
    slug: "preston-session-site",
    chapterNumber: "04",
    chapter: "The Musician",
    premise:
      "Identity for a working musician without turning the person into an influencer.",
    title: "prestonwimberly.com",
    metaTitle: "prestonwimberly.com Website Strategy",
    kicker: "Positioning · Service design · Web",
    headline: "Turning a musician’s range into one direct invitation.",
    cardSummary:
      "A focused session-musician site where producers can hear the work, understand the process, and start a project.",
    summary:
      "Producers need to hear the work, understand the offer, and know how to book the session. I built one site for those three decisions.",
    image: "/images/preston-session-site.jpg",
    imageAlt: "prestonwimberly.com homepage with a musician playing guitar",
    imageCaption: "prestonwimberly.com, desktop opening.",
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
      "I needed to present a wide range of studio and touring experience in one focused offer.",
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
    evidenceEyebrow: "Service sequence",
    evidenceTitle: "Put the listening decision first.",
    evidenceIntro:
      "The site reduces a broad résumé to the information an artist or producer needs before starting a conversation.",
    evidence: [
      {
        label: "Offer",
        value: "The right part, played like it matters.",
      },
      {
        label: "Reading order",
        value: "Work samples, services, process, availability, and inquiry.",
      },
      {
        label: "Audience",
        value: "Artists and producers considering the next recording.",
      },
    ],
    deliverables: [
      "Positioning and core message",
      "Service and process architecture",
      "Website copy and editorial system",
      "Visual direction and responsive build",
      "Audio and work-sample presentation",
      "Inquiry and booking path",
    ],
    artifactTitle: "The offer in one sequence.",
    artifactIntro:
      "Desktop and mobile views keep listening, service information, process, and inquiry in a direct reading order.",
    outcomeTitle: "Producers can hear the work and start a project on one page.",
    outcome: [
      "Artists and producers can hear the work, understand the available instruments and process, and begin an inquiry.",
    ],
    artifacts: [
      {
        src: "/images/preston-session-site.jpg",
        alt: "Desktop view of prestonwimberly.com",
        caption: "Desktop opening with the core offer, project CTA, and work-sample path.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
        aspect: "1417 / 900",
      },
      {
        src: "/images/preston-session-mobile.jpg",
        alt: "Mobile view of prestonwimberly.com",
        caption: "Session-musician homepage at a 390-pixel mobile viewport.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing:
      "The work should make the offer clear before the biography has to.",
    theme: "studio",
    verificationNotes: [
      "Confirm the two-decades claim and specific instrument and service breadth before expanding public copy.",
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
