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
  homepagePremise?: string;
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
      "I began with firsthand memory and used documentary records to set the archive’s limits.",
    title: "The Wild Feathers",
    metaTitle: "The Wild Feathers Archive Direction",
    kicker: "Creative direction · Archive strategy · Editorial",
    headline: "Reconstructing sixteen years of a band from records and firsthand memory.",
    cardSummary:
      "I directed an evidence-first music archive that keeps songs, shows, photographs, firsthand accounts, sources, and rights records connected.",
    summary:
      "I lived part of The Wild Feathers’ history. I reconstructed it across tour records, photographs, releases, interviews, and firsthand memory while keeping provenance, rights, and uncertainty attached to each item.",
    image: "/images/wild-feathers-laugh.png",
    imageAlt: "The five members of The Wild Feathers seated together outside, laughing",
    imageCaption: "The Wild Feathers, archival band photograph.",
    imageFit: "cover",
    imagePosition: "center 45%",
    imageAspect: "33 / 14",
    role: "Creative Director / Archive Editor",
    scope: "Research, archive strategy, editorial architecture, writing",
    year: "2025–2026",
    place: "Nashville, Tennessee",
    engagementType: "Independent editorial archive",
    status: "Private working archive",
    ownership:
      "I set the archive strategy, defined the record model, researched and structured the material, wrote the narrative, and established the editorial system.",
    collaboration:
      "Source-led independent work using credited band history and documented rights records",
    accessNote:
      "I’m keeping the public link offline while image rights and fact-checking remain open.",
    constraint:
      "Image rights and fact-checking remain open, so I’m keeping the working archive private.",
    challengeTitle: "Firsthand memory was useful, but it was not enough.",
    challenge: [
      "I knew the people, places, and road life from the inside. That made the material vivid, but it did not make every date, caption, or repeated story reliable. I separated documented fact, firsthand memory, and open questions.",
      "The archive needed to work for listeners, fans, and future editors without turning sixteen years into a nostalgia project.",
    ],
    decisionTitle: "Treat memory as a source, not proof.",
    decision: [
      "I organized the material as connected records: performances, photographs, story chapters, collections, sources, rights, and provenance. The narrative is written from those records, with the source trail kept beside the story.",
      "Songs give listeners an entry point. Shows establish chronology. Captions, source notes, and verification language keep the history from becoming atmosphere.",
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
      "Archive strategy and information architecture",
      "Narrative chapter structure",
      "Performance and photo records",
      "Rights and provenance workflow",
      "Editorial direction and writing",
      "Publication and image system",
    ],
    artifactTitle: "The archive as a working system.",
    artifactIntro:
      "The editorial structure makes the source trail visible without presenting the private archive as publication-ready.",
    outcomeTitle: "The story can be edited without separating it from the record.",
    outcome: [
      "Performance, photography, narrative, and collection records now connect the story to its source trail and related rights information.",
      "I have kept publication limited until the rights review and fact-checking close.",
    ],
    artifacts: [
      {
        src: "/images/wild-feathers-site.jpg",
        alt: "Desktop view of The Wild Feathers archive homepage",
        caption: "The private archive opens with the band, the period, and the first editorial question.",
        credit: "Archive design and screenshot by Preston Wimberly",
        format: "landscape",
      },
      {
        src: "/images/wild-feathers-mobile.jpg",
        alt: "Mobile view of The Wild Feathers archive homepage",
        caption: "The opening sequence keeps the band, chronology, and archive status legible on a narrow screen.",
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
      "The company’s operating range was stronger than the way it presented itself.",
    title: "Texas Aviation Partners",
    metaTitle: "Texas Aviation Partners Creative Direction",
    kicker: "Creative direction · Brand strategy · Editorial",
    headline: "Making the real scale of an aviation company visible.",
    cardSummary:
      "I set the position, message hierarchy, editorial direction, and field record that made Texas Aviation Partners’ full operating range visible.",
    summary:
      "Texas Aviation Partners manages and develops airports. Its old public presence made the company look narrower: one location, one category of work, and little connection between services, projects, leadership, and public reporting.",
    image: "/images/tap-hay-windsock.jpg",
    imageAlt: "A hay bale beside an airport windsock beneath a wide sky",
    imageCaption: "Hay bales and an airport windsock in the working landscape.",
    imageCredit: "Photograph by Preston Wimberly",
    imageFit: "cover",
    imagePosition: "center 46%",
    role: "Creative Director / Brand Strategy",
    scope: "Positioning, message architecture, editorial, photography",
    year: "2026",
    place: "San Marcos, Texas",
    engagementType: "Client engagement",
    status: "Live",
    ownership:
      "I diagnosed the mismatch, set the position and message hierarchy, wrote and edited the public narrative, made the original field photography, and carried the direction through the finished site.",
    collaboration:
      "Website and communications work within a broader company and public-sector operating context",
    liveUrl: "https://texasaviationpartners.com/",
    liveLabel: "Visit Texas Aviation Partners",
    constraint:
      "The company’s range had to become clear without making a claim that could not lead to a project, person, or public record.",
    challengeTitle: "The public expression made a broad operating company look narrow.",
    challenge: [
      "Airport management, development, capital projects, public-sector coordination, land strategy, and advisory work were difficult to see as one connected practice.",
      "The business already had the substance. Its information hierarchy hid the company’s range and gave prospective partners no clear path from a claim to the work behind it.",
    ],
    decisionTitle: "Make the work the organizing principle.",
    decision: [
      "I replaced category-first marketing language with a plain-language service model and a hierarchy built around operating work. Projects, leadership, services, reporting, and contact became one connected public system.",
      "I made original photographs at the airports and working landscapes where the language had to hold up. The photography shows land, infrastructure, maintenance, and people at work rather than corporate aviation imagery.",
    ],
    evidenceEyebrow: "Public proof",
    evidenceTitle: "Move from the claim to the work behind it.",
    evidenceIntro:
      "The public system connects plain-language positioning with projects, leadership information, reporting, and original field photography.",
    evidence: [
      {
        label: "Position",
        value: "Airport management and development presented as one connected practice.",
      },
      {
        label: "Hierarchy",
        value: "Services, projects, leadership, reporting, and contact now read as one connected operating story.",
      },
      {
        label: "Field record",
        value: "Original photographs keep the public language tied to airport work and place.",
      },
    ],
    deliverables: [
      "Creative direction and brand position",
      "Message and information architecture",
      "Leadership and service language",
      "Original airport photography and art direction",
      "Project and reporting structure",
      "Digital production and metadata",
    ],
    artifactTitle: "Work recorded in the field.",
    artifactIntro:
      "Original photography keeps the direction grounded in airport land, runway maintenance, and people doing the work.",
    outcomeTitle: "The company has one public system for showing how its work fits together.",
    outcome: [
      "Prospective partners can move from a service to related work, leadership, reporting, or a direct conversation. The same hierarchy gives the company a place to publish development news without separating it from the operating story.",
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
    homepagePremise:
      "The instruments had their own material character. The brand needed language to match.",
    title: "Wimberly Guitars",
    metaTitle: "Wimberly Guitars Creative Direction",
    kicker: "Creative direction · Product storytelling · Brand",
    headline: "Building a guitar brand from the materials up.",
    cardSummary:
      "For a father-and-son workshop, I established a product brand with its own language, visual code, model architecture, and inquiry path.",
    summary:
      "Wimberly Guitars makes small-run electric guitars from walnut, leather, steel, brass, oil, and wire. We needed a brand as considered as the instruments, with no claim to factory scale.",
    image: "/images/wimberly-jack-antique-bronze-knobs.jpeg",
    imageAlt: "Close view of a walnut Wimberly guitar with a hand-tooled leather pickguard and antique bronze knobs",
    imageCaption: "Walnut, hand-tooled leather, and antique bronze hardware.",
    imageFit: "cover",
    imagePosition: "center 52%",
    role: "Creative Director / Writer",
    scope: "Positioning, product language, art direction, inquiry system",
    year: "2026",
    place: "Texas",
    engagementType: "Independent workshop brand",
    status: "Live",
    ownership:
      "I set the position and voice, established the material and model language, directed the product story, and carried it through the public presentation and inquiry journey.",
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
      "Website direction and product system",
      "Availability and inquiry journey",
      "Build journal and launch structure",
    ],
    artifactTitle: "The object and its language.",
    artifactIntro:
      "The public presentation carries the instruments’ material vocabulary into a focused model and product system.",
    outcomeTitle: "The workshop now has a clear inquiry path.",
    outcome: [
      "Players can compare models and materials, learn how the workshop builds, and ask directly about availability.",
    ],
    artifacts: [
      {
        src: "/images/wimberly-site.jpg",
        alt: "Desktop view of the Wimberly Guitars homepage",
        caption: "The opening centers the workshop, an unfinished instrument, and the material language.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
        aspect: "1417 / 892",
      },
      {
        src: "/images/wimberly-mobile.jpg",
        alt: "Mobile view of the Wimberly Guitars homepage",
        caption: "The model and material story remains direct on a narrow screen.",
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
      "A long musical résumé had to become one clear commercial offer.",
    title: "prestonwimberly.com",
    metaTitle: "prestonwimberly.com Creative Direction",
    kicker: "Creative direction · Positioning · Service design",
    headline: "Turning a musician’s range into one direct invitation.",
    cardSummary:
      "A focused session-musician site where producers can hear the work, understand the process, and start a project.",
    summary:
      "Producers need to hear the work, understand the offer, and know how to book the session. I built one site for those three decisions.",
    image: "/images/preston-session-site.jpg",
    imageAlt: "prestonwimberly.com homepage with a musician playing guitar",
    imageCaption: "The core offer and listening path on prestonwimberly.com.",
    role: "Creative Director / Positioning",
    scope: "Offer strategy, copy, service design, digital production",
    year: "2026",
    place: "San Marcos, Texas · Salt Lake City, Utah",
    engagementType: "Self-directed practice",
    status: "Live",
    ownership:
      "I set the offer, wrote the positioning and service language, established the experience, and carried the direction through the finished site.",
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
      "Visual direction and digital production",
      "Audio and work-sample presentation",
      "Inquiry and booking path",
    ],
    artifactTitle: "The offer in one sequence.",
    artifactIntro:
      "The reading order keeps listening, service information, process, and inquiry direct.",
    outcomeTitle: "Producers can hear the work and start a project on one page.",
    outcome: [
      "Artists and producers can hear the work, understand the available instruments and process, and begin an inquiry.",
    ],
    artifacts: [
      {
        src: "/images/preston-session-site.jpg",
        alt: "Desktop view of prestonwimberly.com",
        caption: "The opening states the offer, then gives producers a direct path to the work.",
        credit: "Website design and screenshot by Preston Wimberly",
        format: "landscape",
        aspect: "1417 / 900",
      },
      {
        src: "/images/preston-session-mobile.jpg",
        alt: "Mobile view of prestonwimberly.com",
        caption: "The narrow-screen sequence keeps the offer ahead of the résumé.",
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
