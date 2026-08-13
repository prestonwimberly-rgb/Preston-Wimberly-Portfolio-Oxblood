import { projectSlugs } from "@/data/project-order.mjs";

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

export type ProjectDirectionRecord = {
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
  homepageImage?: string;
  homepageImageAlt?: string;
  homepageImageCaption?: string;
  homepageImageCredit?: string;
  homepageImageFit?: "cover" | "contain";
  homepageImagePosition?: string;
  homepageImageAspect?: string;
  role: string;
  scope: string;
  year: string;
  place: string;
  engagementType: string;
  status: string;
  ownership: string;
  collaboration: string;
  directionRecord: ProjectDirectionRecord[];
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
    metaTitle: "The Wild Feathers Archive Creative Direction",
    kicker: "Creative direction · Archive strategy · Editorial",
    headline: "Reconstructing a band’s history without turning memory into myth.",
    cardSummary:
      "I directed an evidence-first archive across 384 performance records, 193 archive records, seven flagship stories, six chronological chapters, and 110 source records.",
    summary:
      "I lived inside this story, but firsthand memory is not a complete record. I reconstructed the band’s public history across tour records, photographs, releases, interviews, and source trails.",
    image: "/images/wild-feathers-laugh.png",
    imageAlt: "The five members of The Wild Feathers seated together outside, laughing",
    imageCaption: "The Wild Feathers, archival band photograph.",
    imageFit: "cover",
    imagePosition: "center 45%",
    imageAspect: "33 / 14",
    role: "Creative Director / Writer",
    scope: "Archive strategy, research, editorial direction, writing",
    year: "2025–2026",
    place: "Nashville, Tennessee",
    engagementType: "Independent editorial archive",
    status: "Complete · Owned-domain deployment pending",
    ownership:
      "I set the archive strategy, separated evidence from memory, established the editorial rules, wrote the narrative, and directed the visual and digital system.",
    collaboration:
      "Source-led independent work using credited band history and documented rights records",
    directionRecord: [
      {
        label: "Creative mandate",
        value: "Turn a lived band history into a usable editorial archive without promoting memory to fact.",
      },
      {
        label: "Direction set",
        value: "Archive strategy, narrative structure, evidence rules, rights workflow, typography, and digital reading system.",
      },
      {
        label: "Made by Preston",
        value: "Research, writing, record architecture, captions, editorial design, and the complete digital archive.",
      },
      {
        label: "Collaboration & record",
        value: "Firsthand accounts, published sources, band history, and rights records remain credited at item level.",
      },
    ],
    accessNote:
      "The complete archive is cleared for portfolio review; deployment to the owned domain remains a separate release step.",
    constraint:
      "A lived history still had to meet the same source, rights, and fact-checking standards as any other archive.",
    challengeTitle: "I knew the story. The record was still incomplete.",
    challenge: [
      "Years inside the band made firsthand memory available. It did not make every date, caption, credit, or recollection reliable. I separated documented fact, firsthand memory, and open questions.",
      "The archive needed to work for listeners, fans, and future editors without presenting access as proof or history as atmosphere.",
    ],
    decisionTitle: "Build the evidence before polishing the story.",
    decision: [
      "I organized songs, shows, photographs, narrative, sources, rights, and provenance as one editorial record. I wrote from that record and kept the source trails visible.",
      "I used large type for scale, then kept captions, source notes, and verification language close to the claims.",
    ],
    evidenceEyebrow: "Archive method",
    evidenceTitle: "Keep the source attached to the story.",
    evidenceIntro:
      "The working system preserves the difference between a documented record, a firsthand memory, and an open question.",
    evidence: [
      {
        label: "Records",
        value: "384 performance records and 193 archive records keep the road and its surviving objects visible.",
      },
      {
        label: "Reading system",
        value: "Seven flagship stories provide the edited path; six chronological chapters preserve the complete history.",
      },
      {
        label: "Source ledger",
        value: "110 source records keep fact, memory, inference, and the still-unknown visibly distinct.",
      },
    ],
    deliverables: [
      "Archive and information architecture",
      "Narrative chapter structure",
      "Performance and photo records",
      "Rights and provenance workflow",
      "Editorial design and writing",
      "Visual direction and digital archive",
    ],
    artifactTitle: "The archive as a working system.",
    artifactIntro:
      "The interface keeps photographs, narrative, source notes, and publication status in one reading system.",
    outcomeTitle: "Editors can trace the public narrative back to its records and sources.",
    outcome: [
      "I organized performance, photography, narrative, and collection records so editors can move between the story, its source trail, and the related rights information.",
      "The archive is complete and cleared for portfolio review. Deployment to the owned domain remains the final publication step.",
    ],
    artifacts: [
      {
        src: "/images/wild-feathers-story-live.png",
        alt: "The Wild Feathers story index introducing seven flagship stories and six chronological chapters",
        caption: "The edited reading path and the complete chronology are presented as related, not interchangeable, records.",
        credit: "Live archive capture · August 2026",
        format: "landscape",
        aspect: "36 / 25",
      },
      {
        src: "/images/wild-feathers-timeline-live.png",
        alt: "The Wild Feathers timeline interface with filters for milestones, shows, releases, lineup, television, and recording",
        caption: "The timeline lets readers change the view without changing the underlying evidence.",
        credit: "Live archive capture · August 2026",
        format: "landscape",
        aspect: "36 / 25",
      },
      {
        src: "/images/wild-feathers-sources-live.png",
        alt: "The Wild Feathers source ledger explaining fact, memory, inference, and unknown evidence states",
        caption: "The source ledger keeps conflicts and limits visible instead of polishing them away.",
        credit: "Live archive capture · August 2026",
        format: "landscape",
        aspect: "36 / 25",
      },
      {
        src: "/images/wild-feathers-site.jpg",
        alt: "Desktop view of The Wild Feathers archive homepage",
        caption: "The private archive opens with the band and its documentary record.",
        credit: "Archive direction and screenshot by Preston Wimberly",
        format: "landscape",
      },
      {
        src: "/images/wild-feathers-mobile.jpg",
        alt: "Mobile view of The Wild Feathers archive homepage",
        caption: "The same evidence hierarchy holds at a narrow reading width.",
        credit: "Archive direction and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing: "Each published memory stays linked to its source.",
    theme: "archive",
    verificationNotes: [
      "Owned-domain deployment remains a separate release task and is not authorized by this portfolio change.",
    ],
  },
  {
    slug: "texas-aviation-partners",
    chapterNumber: "01",
    chapter: "The Airfield",
    premise:
      "How do you make airport infrastructure feel consequential without turning it into corporate aviation marketing?",
    title: "Texas Aviation Partners",
    metaTitle: "Texas Aviation Partners Creative Direction",
    kicker: "Creative direction · Brand strategy · Editorial",
    headline: "Making the real scale of an aviation company visible.",
    cardSummary:
      "I repositioned the company around its full operating record, then directed the writing, photography, and public system that made it visible.",
    summary:
      "Texas Aviation Partners manages, develops, and advises airports. Its old public presence made a multi-airport operating company look like one location and one category of work.",
    image: "/images/tap-hay-windsock.jpg",
    imageAlt: "A hay bale beside an airport windsock beneath a wide sky",
    imageCaption: "Hay bales and an airport windsock in the working landscape.",
    imageCredit: "Photograph by Preston Wimberly",
    imageFit: "cover",
    imagePosition: "center 46%",
    homepageImage: "/images/tap-site-after.jpg",
    homepageImageAlt:
      "The redesigned Texas Aviation Partners homepage in its Netlify review build",
    homepageImageCaption:
      "The proposed Texas Aviation Partners homepage, shown in the Netlify review build.",
    homepageImageCredit: "Netlify deploy capture · August 2026",
    homepageImageFit: "cover",
    homepageImageAspect: "8 / 5",
    role: "Creative Director / Brand Strategy",
    scope: "Positioning, message architecture, writing, photography direction",
    year: "2026",
    place: "San Marcos, Texas",
    engagementType: "Client engagement",
    status: "Live",
    ownership:
      "I had full creative control of the redesign: positioning, information architecture, copy, photography, visual design, and implementation.",
    collaboration:
      "Independent execution with company leadership approval",
    directionRecord: [
      {
        label: "Creative mandate",
        value: "Make a multi-airport operating and development company legible as one connected practice.",
      },
      {
        label: "Direction set",
        value: "Positioning, message architecture, information hierarchy, editorial standards, and photography direction.",
      },
      {
        label: "Made by Preston",
        value: "Strategy, copy, original field photography, visual design, and digital implementation.",
      },
      {
        label: "Collaboration & approval",
        value: "The work was developed directly with company leadership, which reviewed and approved the public direction.",
      },
    ],
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
      "I shifted the public position from a small company associated with one regional airport to a development partner working in one of the country’s fastest-growing corridors. I organized the company around three connected areas of work—operate, develop, and advise—then rewrote the story in plain language.",
      "I changed the reading order so services lead to projects, leadership, reporting, and contact. A visitor can move from a claim to the work behind it.",
    ],
    evidenceEyebrow: "Public proof",
    evidenceTitle: "Move from the claim to the work behind it.",
    evidenceIntro:
      "The system connects plain-language positioning with projects, leadership information, reporting, and original field photography.",
    evidence: [
      {
        label: "Position",
        value: "From a one-airport operator to a development partner serving a fast-growing regional corridor.",
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
      "Editorial strategy and public narrative",
      "Leadership and service language",
      "Original airport photography",
      "Project and editorial structure",
      "Design direction and digital system",
    ],
    artifactTitle: "Field record, public proof, and the next editorial system.",
    artifactIntro:
      "The sequence separates the earlier public presentation, the editorial review build, original airport photography, and the live project pages that carry the proof.",
    outcomeTitle: "The new public system increased website traffic 40% in its first month.",
    outcome: [
      "The company now has one public system for its services, projects, leadership, field reporting, and direct inquiries. It can add development reporting without rebuilding the story each time.",
      "Google Analytics recorded a 40% increase in website traffic in the first month after launch.",
    ],
    artifacts: [
      {
        src: "/images/tap-site-before.jpg",
        alt: "The current Texas Aviation Partners homepage",
        caption:
          "Current public homepage: a conventional corporate aviation frame led by services and broad positioning.",
        credit: "Public website capture · August 2026",
        format: "landscape",
        aspect: "1363 / 852",
      },
      {
        src: "/images/tap-site-after.jpg",
        alt: "The redesigned Texas Aviation Partners homepage in its Netlify review build",
        caption:
          "Proposed homepage: an evidence-led editorial system grounded in operating work, place, and public proof.",
        credit: "Netlify deploy capture · August 2026",
        format: "landscape",
        aspect: "8 / 5",
      },
      {
        src: "/images/tap-surveyor.jpg",
        alt: "A surveyor working on an airport runway beneath a wide Texas sky",
        caption: "A surveyor records runway conditions in the operating landscape.",
        credit: "Photograph by Preston Wimberly",
        format: "landscape",
        aspect: "4 / 3",
      },
      {
        src: "/images/tap-tractor.jpg",
        alt: "A tractor and runway-maintenance equipment crossing an airport runway beneath large clouds",
        caption: "Runway maintenance makes the operating work visible without resorting to corporate aviation imagery.",
        credit: "Photograph by Preston Wimberly",
        format: "landscape",
        aspect: "3 / 2",
      },
      {
        src: "/images/tap-projects-live.png",
        alt: "The live Texas Aviation Partners project index connecting company positioning to airport work across Texas",
        caption: "The live project index moves from the company position to airport-specific engagements.",
        credit: "Public website capture · August 2026",
        format: "landscape",
        aspect: "36 / 25",
      },
      {
        src: "/images/tap-san-marcos-live.png",
        alt: "The live San Marcos Regional Airport project page presenting cited economic-impact results",
        caption: "The San Marcos project page connects the brand claim to a cited TxDOT economic-impact record.",
        credit: "Public website capture · August 2026",
        format: "landscape",
        aspect: "36 / 25",
      },
    ],
    closing:
      "A claim should lead to a project, a person, or a public record.",
    theme: "field",
  },
  {
    slug: "wimberly-guitars",
    chapterNumber: "03",
    chapter: "The Object",
    premise: "Objects meant to acquire history.",
    homepagePremise:
      "How do you build a guitar brand from real materials without borrowing generic vintage language?",
    title: "Wimberly Custom Guitars",
    metaTitle: "Wimberly Custom Guitars Creative Direction",
    kicker: "Creative direction · Product storytelling · Brand",
    headline: "Building a guitar brand from the materials up.",
    cardSummary:
      "I founded a guitar company with its own material language, visual code, model architecture, and waitlist.",
    summary:
      "Wimberly Custom Guitars makes small-run electric guitars from walnut, leather, steel, brass, oil, and wire. I needed a brand as considered as the instruments, with no claim to factory scale.",
    image: "/images/wimberly-jack-antique-bronze-knobs.jpeg",
    imageAlt: "Close view of a walnut Wimberly guitar with a hand-tooled leather pickguard and antique bronze knobs",
    imageCaption: "Walnut, hand-tooled leather, and antique bronze hardware.",
    imageFit: "cover",
    imagePosition: "center 52%",
    role: "Founder / Creative Director",
    scope: "Positioning, product language, art direction, launch",
    year: "2026",
    place: "Texas",
    engagementType: "Founder-led workshop brand",
    status: "Live · Waitlist",
    ownership:
      "As founder, I set the position, voice, material vocabulary, model architecture, and visual direction, then carried those decisions through the public experience.",
    collaboration:
      "Developed with the workshop around the instruments, materials, and build process",
    directionRecord: [
      {
        label: "Creative mandate",
        value: "Build a premium guitar brand from the instruments’ real material character, not borrowed vintage language.",
      },
      {
        label: "Direction set",
        value: "Position, voice, material vocabulary, model family, visual codes, product story, and inquiry journey.",
      },
      {
        label: "Made by Preston",
        value: "Brand strategy, naming architecture, writing, art direction, product presentation, and digital experience.",
      },
      {
        label: "Collaboration & workshop",
        value: "Product and workshop decisions were developed with Jim Wimberly; Preston led the brand and public expression.",
      },
    ],
    liveUrl: "https://wimberlycustomguitars.com/",
    liveLabel: "Visit Wimberly Custom Guitars",
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
        value: "A small workshop building a few instruments at a time through a waitlist.",
      },
    ],
    deliverables: [
      "Brand position and voice",
      "Model and materials architecture",
      "Product and process writing",
      "Art direction and digital experience",
      "Availability and inquiry journey",
      "Build journal and launch structure",
    ],
    artifactTitle: "The object and its language.",
    artifactIntro:
      "The public system carries the instruments’ material vocabulary into model, product, and availability decisions.",
    outcomeTitle: "The workshop now has a clear inquiry path.",
    outcome: [
      "Players can compare models and materials, learn how the workshop builds, and join the waitlist.",
    ],
    artifacts: [
      {
        src: "/images/wimberly-site.jpg",
        alt: "Desktop view of the Wimberly Guitars homepage",
        caption: "The opening centers the workshop, an unfinished instrument, and the material language.",
        credit: "Creative direction and screenshot by Preston Wimberly",
        format: "landscape",
        aspect: "1417 / 892",
      },
      {
        src: "/images/wimberly-reference.avif",
        alt: "A nineteenth-century lever-action rifle with a walnut stock and blued steel barrel",
        caption: "The workshop reference object set practical rules for walnut, blued steel, fitted parts, and surfaces that record use.",
        credit: "Rights-cleared workshop reference image",
        format: "landscape",
        aspect: "4 / 3",
      },
      {
        src: "/images/wimberly-mobile.jpg",
        alt: "Mobile view of the Wimberly Guitars homepage",
        caption: "The model and material hierarchy stays direct at a narrow reading width.",
        credit: "Creative direction and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing: "A material choice has to earn its place in the story.",
    theme: "workshop",
  },
  {
    slug: "preston-session-site",
    chapterNumber: "04",
    chapter: "The Musician",
    premise:
      "Identity for a working musician without turning the person into an influencer.",
    title: "prestonwimberly.com",
    metaTitle: "prestonwimberly.com Creative Direction",
    kicker: "Creative direction · Positioning · Music",
    headline: "Turning a musician’s range into one direct invitation.",
    cardSummary:
      "A focused session-musician site where producers can hear the work, understand the process, and start a project.",
    summary:
      "Producers need to hear the work, understand the offer, and know how to book the session. I reduced two decades across touring, studio recording, and television—on guitar, pedal steel, and bass—to those three decisions.",
    image: "/images/preston-session-site.jpg",
    imageAlt: "prestonwimberly.com homepage with a musician playing guitar",
    imageCaption: "prestonwimberly.com, desktop opening.",
    role: "Creative Director / Writer",
    scope: "Positioning, offer design, writing, visual direction",
    year: "2026",
    place: "San Marcos, Texas · Salt Lake City, Utah",
    engagementType: "Self-directed practice",
    status: "Live",
    ownership:
      "I reduced a broad music résumé to one commercial position, wrote the offer and service language, and directed the finished experience.",
    collaboration: "Independent work for my own session practice",
    directionRecord: [
      {
        label: "Creative mandate",
        value: "Turn a broad performing résumé into a focused commercial offer for artists and producers.",
      },
      {
        label: "Direction set",
        value: "Positioning, service hierarchy, voice, listening sequence, visual tone, and inquiry path.",
      },
      {
        label: "Made by Preston",
        value: "Offer strategy, writing, work selection, visual direction, and the complete one-page experience.",
      },
      {
        label: "Collaboration",
        value: "Independent work for Preston’s own session practice; no outside team or client role is implied.",
      },
    ],
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
      "Visual direction and digital experience",
      "Audio and work-sample presentation",
      "Inquiry and booking path",
    ],
    artifactTitle: "The offer in one sequence.",
    artifactIntro:
      "Listening, service information, process, and inquiry stay in one direct reading order.",
    outcomeTitle: "Producers can hear the work and start a project on one page.",
    outcome: [
      "Artists and producers can hear the work, understand the available instruments and process, and begin an inquiry.",
    ],
    artifacts: [
      {
        src: "/images/preston-session-site.jpg",
        alt: "Desktop view of prestonwimberly.com",
        caption: "The opening puts the core offer before the résumé.",
        credit: "Creative direction and screenshot by Preston Wimberly",
        format: "landscape",
        aspect: "1417 / 900",
      },
      {
        src: "/images/preston-session-mobile.jpg",
        alt: "Mobile view of prestonwimberly.com",
        caption: "The listening and inquiry path stays intact at a narrow reading width.",
        credit: "Creative direction and screenshot by Preston Wimberly",
        format: "portrait",
      },
    ],
    closing:
      "The work should make the offer clear before the biography has to.",
    theme: "studio",
    verificationNotes: [
      "Add verified inquiry or booking evidence only if it becomes available.",
    ],
  },
];

export const projects = projectSlugs.map((slug) => {
  const project = projectRecords.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing portfolio project: ${slug}`);
  return project;
});

const featuredProjectOrder = [
  "texas-aviation-partners",
  "wild-feathers",
  "wimberly-guitars",
];

export const featuredProjects = featuredProjectOrder.map((slug) => {
  const project = projects.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing featured portfolio project: ${slug}`);
  return project;
});

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
