import { projectSlugs } from "@/data/project-order.mjs";

export type ProjectArtifact = { src: string; alt: string; caption: string; credit?: string; format: "landscape" | "portrait"; aspect?: string; crop?: { left: number; top: number; width: number; height: number } };
export type Project = {
  slug: string; chapterNumber: string; chapter: string; title: string; navTitle?: string;
  metaTitle: string; kicker: string; headline: string; homepagePremise?: string;
  cardSummary: string; summary: string;
  image: string; imageAlt: string; imageCaption: string; imageCredit?: string;
  imageFit?: "cover" | "contain"; imagePosition?: string; imageAspect?: string;
  homepageImage?: string; homepageImageAlt?: string; homepageImageCaption?: string;
  homepageImageCredit?: string; homepageImageFit?: "cover" | "contain";
  homepageImagePosition?: string; homepageImageAspect?: string;
  role: string; scope: string; year: string; place: string; engagementType: string;
  status: string; ownership: string; collaboration: string;
  collaborationExample?: { request: string; response: string; href: string; label: string };
  liveUrl?: string; liveLabel?: string; liveIsReference?: boolean; accessNote?: string;
  decisionTitle: string; decision: string[]; artifactTitle: string; artifactIntro: string;
  outcomeTitle: string; outcome: string[]; artifacts: ProjectArtifact[];
  leadArtifacts?: ProjectArtifact[];
  detailArtifact?: ProjectArtifact;
  comparisonNotes?: { title: string; detail: string }[];
  theme: "archive" | "field" | "workshop" | "studio";
  motionStudy?: { src: string; poster: string; description: string };
  verificationNotes?: string[];
};

const projectRecords: Project[] = [
  {
    "slug": "texas-aviation-partners",
    "chapterNumber": "01",
    "chapter": "The Airfield",
    "title": "Texas Aviation Partners",
    "metaTitle": "Texas Aviation Partners Creative Direction",
    "kicker": "Creative direction · Brand strategy · Editorial",
    "headline": "Making the real scale of an aviation company visible.",
    "homepagePremise": "Make the company’s operating, development, and advisory work clear to prospective airport partners.",
    "cardSummary": "Positioning, original photography, writing, and the live website for Texas Aviation Partners.",
    "summary": "A multi-airport operating company needed its website to show the full scope of its work: operate, develop, and advise.",
    "image": "/images/tap-hay-windsock.jpg",
    "imageAlt": "A hay bale beside an airport windsock beneath a wide sky",
    "imageCaption": "Hay bales and an airport windsock in the working landscape.",
    "imageCredit": "Photograph by Preston Wimberly",
    "imageFit": "cover",
    "imagePosition": "center 46%",
    "homepageImage": "/images/tap-site-live-2026-09.jpg",
    "homepageImageAlt": "The live Texas Aviation Partners homepage with airport photography and the headline The runway is only the beginning",
    "homepageImageCaption": "Texas Aviation Partners’ live homepage, organized around operate, develop, and advise.",
    "homepageImageCredit": "Live website capture · September 2026",
    "homepageImageFit": "cover",
    "homepageImageAspect": "8 / 5",
    "role": "Creative Director / Brand Strategy",
    "scope": "Positioning, message architecture, writing, photography direction",
    "year": "2026",
    "place": "San Marcos, Texas",
    "engagementType": "Client engagement",
    "status": "Live",
    "ownership": "I had full creative control of the redesign: positioning, information architecture, copy, photography, visual design, and implementation.",
    "collaboration": "Independent execution with company leadership approval",
    "collaborationExample": {
      "request": "Leadership wanted more of Jim Wimberly’s Southwest Airlines experience in the 1980s and 1990s, and his understanding of what makes an aviation culture work.",
      "response": "I made that experience the center of a dedicated profile, tracing his airport and airline years through to TAP’s approach to people and operations.",
      "href": "https://texasaviationpartners.com/about/jim-wimberly/",
      "label": "Read Jim’s profile"
    },
    "liveUrl": "https://texasaviationpartners.com/",
    "liveLabel": "Visit the live TAP website",
    "decisionTitle": "Operate. Develop. Advise.",
    "decision": [
      "I organized the company around three connected areas of work: operate, develop, and advise. For prospective airport partners, that makes the full scope of the business easier to understand.",
      "The live site connects each service with the company’s operating record. Original field photography shows maintenance, land, and infrastructure rather than a generic aviation image."
    ],
    "artifactTitle": "Before / After",
    "artifactIntro": "The earlier homepage, captured in August 2026, appears beside the live September 2026 site.",
    "detailArtifact": {
      "src": "/images/tap-site-live-2026-09.jpg",
      "alt": "Detail of TAP’s opening message, showing operate, develop, advise and the path to its operating record",
      "caption": "Opening-message detail. The service line, headline, and operating-record link connect the company’s scope to the next step.",
      "credit": "Live website capture · September 2026 · Select to view the complete capture",
      "format": "landscape",
      "crop": { "left": 70, "top": 250, "width": 800, "height": 475 }
    },
    "comparisonNotes": [
      { "title": "Make the scope explicit", "detail": "Operate, develop, and advise give prospective partners three clear ways into the company’s work." },
      { "title": "Connect the promise to a place", "detail": "Airport experience supports the service descriptions, so readers can follow a capability into the operating record." },
      { "title": "Show the work on the ground", "detail": "Original photographs of maintenance, land, and infrastructure establish the company’s field of work." }
    ],
    "outcomeTitle": "The live website connects the company’s services with its airport work.",
    "outcome": [
      "The launched site brings capabilities, airport experience, leadership, Field Notes, and contact into one public website. Visitors can follow the company’s operating, development, and advisory work through to its airport record and start a conversation."
    ],
    "leadArtifacts": [
      {
        "src": "/images/tap-site-before.jpg",
        "alt": "The earlier Texas Aviation Partners homepage",
        "caption": "Earlier homepage, captured in August 2026: a conventional corporate aviation frame led by services and broad positioning.",
        "credit": "Public website capture · August 2026",
        "format": "landscape",
        "aspect": "1363 / 852"
      },
      {
        "src": "/images/tap-site-live-2026-09.jpg",
        "alt": "The live Texas Aviation Partners homepage with airport photography and the headline The runway is only the beginning",
        "caption": "Live homepage: airport photography and the company’s operating, development, and advisory work.",
        "credit": "Live website capture · September 2026",
        "format": "landscape",
        "aspect": "8 / 5",
        "crop": { "left": 0, "top": 0, "width": 1410, "height": 880 }
      }
    ],
    "artifacts": [
      {
        "src": "/images/tap-surveyor.jpg",
        "alt": "A surveyor working on an airport runway beneath a wide Texas sky",
        "caption": "A surveyor records runway conditions in the operating landscape.",
        "credit": "Photograph by Preston Wimberly",
        "format": "landscape",
        "aspect": "4 / 3"
      },
      {
        "src": "/images/tap-tractor.jpg",
        "alt": "A tractor and runway-maintenance equipment crossing an airport runway beneath large clouds",
        "caption": "Runway maintenance makes the operating work visible without resorting to corporate aviation imagery.",
        "credit": "Photograph by Preston Wimberly",
        "format": "landscape",
        "aspect": "3 / 2"
      }
    ],
    "theme": "field",
    "verificationNotes": [
      "The previous copy claimed a 40% increase in website traffic in the first month after launch, attributed to Google Analytics. Confirm the metric, comparison dates, and release measured before restoring this claim; the August 2026 review-build capture does not establish that attribution."
    ]
  },
  {
    "slug": "wild-feathers",
    "chapterNumber": "03",
    "chapter": "The Road",
    "title": "The Wild Feathers",
    "metaTitle": "The Wild Feathers Archive Creative Direction",
    "kicker": "Creative direction · Archive strategy · Editorial",
    "headline": "A band’s history, told from inside.",
    "homepagePremise": "First-person writing, photographs, and a public archive of the years on the road.",
    "cardSummary": "First-person writing and an independent music archive connecting 410 performance records, 209 archive records, and 125 source records.",
    "summary": "As a founding guitarist, I brought scattered photographs, tour dates, and firsthand stories into a public archive, keeping sources and uncertainty visible.",
    "image": "/images/wild-feathers-laugh.jpg",
    "imageAlt": "The five members of The Wild Feathers seated together outside, laughing",
    "imageCaption": "The Wild Feathers, archival band photograph.",
    "imageFit": "cover",
    "imagePosition": "center 45%",
    "imageAspect": "33 / 14",
    "role": "Creative Director / Writer",
    "scope": "Archive strategy, research, editorial direction, writing",
    "year": "2025–2026",
    "place": "Nashville, Tennessee",
    "engagementType": "Independent editorial archive",
    "status": "Live · Independent archive",
    "ownership": "I researched the chronology, wrote the narrative, established source and rights notes, and designed and built the archive.",
    "collaboration": "Independent work using credited photographs, published sources, and attributed memories. My firsthand account is identified as such.",
    "liveUrl": "https://thewildfeathersband.com/",
    "liveLabel": "Explore the live archive",
    "decisionTitle": "Give readers a story and a way to check it.",
    "decision": [
      "Seven flagship stories and one supporting road record provide an edited introduction; six chronological chapters carry the longer history. A reader can begin with a scene, then follow it into the tour dates, photographs, and sources.",
      "The archive contains 410 performance records, 209 archive records, and 125 source records, verified September 12, 2026. Each source note distinguishes documented fact from memory, inference, or an open question."
    ],
    "artifactTitle": "Stories with their sources close by.",
    "artifactIntro": "The reading path and source ledger make the archive useful both to a casual reader and to someone checking a date or credit.",
    "outcomeTitle": "A scattered band history is now a readable, searchable public archive.",
    "outcome": [
      "The finished archive connects the stories to their chronology, surviving objects, sources, and rights information."
    ],
    "artifacts": [
      {
        "src": "/images/wild-feathers-story-live.png",
        "alt": "The Wild Feathers story index introducing seven flagship stories and six chronological chapters",
        "caption": "The edited reading path and the complete chronology are presented as related, not interchangeable, records.",
        "credit": "Live archive capture · August 2026",
        "format": "landscape",
        "aspect": "36 / 25"
      },
      {
        "src": "/images/wild-feathers-sources-live.png",
        "alt": "Detail of the archive’s source ledger distinguishing documented fact from firsthand memory",
        "caption": "Source-ledger detail: documented fact and firsthand memory have different labels. The full ledger also identifies inference and unknowns.",
        "credit": "Live archive capture · August 2026 · Select to view the complete ledger capture",
        "format": "landscape",
        "aspect": "36 / 25",
        "crop": { "left": 43, "top": 748, "width": 677, "height": 252 }
      }
    ],
    "theme": "archive",
    "verificationNotes": [
      "The owned domain and portfolio record were cleared September 12, 2026 in docs/launch-checklist.md. Archive releases remain a separate scope; new material and expanded coverage require confirmation."
    ]
  },
  {
    "slug": "wimberly-guitars",
    "chapterNumber": "02",
    "chapter": "The Object",
    "title": "Wimberly Custom Guitars",
    "metaTitle": "Wimberly Custom Guitars Creative Direction",
    "kicker": "Creative direction · Product storytelling · Brand",
    "headline": "Building a guitar brand from the materials up.",
    "homepagePremise": "A small guitar workshop with a point of view: materials that grow more personal with use.",
    "cardSummary": "Brand strategy, model naming, product writing, and art direction for a small-run guitar workshop.",
    "summary": "A small-run guitar workshop needed a brand as considered as its instruments: walnut, leather, steel, brass, oil, and wire.",
    "image": "/images/wimberly-jack-antique-bronze-knobs.jpeg",
    "imageAlt": "Close view of a walnut Wimberly guitar with a hand-tooled leather pickguard and antique bronze knobs",
    "imageCaption": "Walnut, hand-tooled leather, and antique bronze hardware.",
    "imageFit": "cover",
    "imagePosition": "center 52%",
    "role": "Founder / Creative Director",
    "scope": "Positioning, product language, art direction, launch",
    "year": "2026",
    "place": "Texas",
    "engagementType": "Founder-led workshop brand",
    "status": "Live · Waitlist",
    "ownership": "I founded the company and led its positioning, model naming, writing, art direction, and website.",
    "collaboration": "Product and workshop decisions were developed with Jim Wimberly; I led the brand and public expression.",
    "liveUrl": "https://wimberlycustomguitars.com/",
    "liveLabel": "Visit Wimberly Custom Guitars",
    "decisionTitle": "Let the instrument set the rules.",
    "decision": [
      "For players considering a small workshop, the materials and the maker need to justify the choice. I built the brand around walnut, hand-tooled leather, and metal that changes with use.",
      "The Jack and the Lucio form one model family. Close photography, plain descriptions of the finishes, and a clear waitlist explain what the workshop makes and how to follow its work."
    ],
    "artifactTitle": "The launched website",
    "artifactIntro": "The website brings the models, materials, build journal, and waitlist into one place.",
    "outcomeTitle": "Players can compare two models, explore materials, and join the waitlist.",
    "outcome": [
      "Players can compare models and materials, learn how the workshop builds, and join the waitlist."
    ],
    "artifacts": [
      {
        "src": "/images/wimberly-site.jpg",
        "alt": "Desktop view of the Wimberly Guitars homepage",
        "caption": "The opening centers the workshop, an unfinished instrument, and the material language.",
        "credit": "Creative direction and screenshot by Preston Wimberly",
        "format": "landscape",
        "aspect": "1417 / 892"
      },
      {
        "src": "/images/wimberly-mobile.jpg",
        "alt": "Mobile view of the Wimberly Guitars homepage",
        "caption": "The model and material hierarchy stays direct at a narrow reading width.",
        "credit": "Creative direction and screenshot by Preston Wimberly",
        "format": "portrait"
      }
    ],
    "theme": "workshop",
    "motionStudy": {
      "src": "/video/wimberly-material-study.mp4",
      "poster": "/images/wimberly-jack-antique-bronze-knobs.jpeg",
      "description": "A slow push-in across walnut grain, hand-tooled leather, and bronze hardware. AI-generated motion from the still photograph using Higgsfield; not filmed footage. Silent, five seconds."
    }
  },
  {
    "slug": "preston-session-site",
    "chapterNumber": "05",
    "chapter": "The Musician",
    "title": "prestonwimberly.com",
    "navTitle": "Session musician",
    "metaTitle": "prestonwimberly.com Creative Direction",
    "kicker": "Creative direction · Positioning · Music",
    "headline": "The right part, played like it matters.",
    "cardSummary": "A focused session-musician site where producers can hear the work, understand the process, and start a project.",
    "summary": "Producers need to hear the work, understand the offer, and know how to book the session. I reduced two decades across touring, studio recording, and television—on guitar, pedal steel, and bass—to those three decisions.",
    "image": "/images/preston-session-site.jpg",
    "imageAlt": "prestonwimberly.com homepage with a musician playing guitar",
    "imageCaption": "prestonwimberly.com, desktop opening.",
    "role": "Creative Director / Writer",
    "scope": "Positioning, offer design, writing, visual direction",
    "year": "2026",
    "place": "San Marcos, Texas · Salt Lake City, Utah",
    "engagementType": "Self-directed practice",
    "status": "Live",
    "ownership": "I wrote the offer, selected the work samples, and designed and built the site for my session practice.",
    "collaboration": "Independent work for my own session practice.",
    "liveUrl": "https://prestonwimberly.com/",
    "liveLabel": "Visit prestonwimberly.com",
    "decisionTitle": "Let producers listen before they read the résumé.",
    "decision": [
      "I organized the page around work samples, instruments, process, availability, and inquiry. Guitar, pedal steel, and bass support one clear offer to artists and producers.",
      "The listening examples and service copy give a prospective collaborator enough context to start a conversation. The career history supports that decision farther down the page."
    ],
    "artifactTitle": "One page, from listening to inquiry.",
    "artifactIntro": "The core offer leads on desktop and mobile. Audio, services, process, and direct contact follow in that order.",
    "outcomeTitle": "Producers can hear the work and start a project on one page.",
    "outcome": [
      "Artists and producers can hear the work, understand the available instruments and process, and begin an inquiry."
    ],
    "artifacts": [
      {
        "src": "/images/preston-session-site.jpg",
        "alt": "Desktop view of prestonwimberly.com",
        "caption": "The opening puts the core offer before the résumé.",
        "credit": "Creative direction and screenshot by Preston Wimberly",
        "format": "landscape",
        "aspect": "1417 / 900"
      },
      {
        "src": "/images/preston-session-mobile.jpg",
        "alt": "Mobile view of prestonwimberly.com",
        "caption": "The listening and inquiry path stays intact at a narrow reading width.",
        "credit": "Creative direction and screenshot by Preston Wimberly",
        "format": "portrait"
      }
    ],
    "theme": "studio",
    "verificationNotes": [
      "Add verified inquiry or booking evidence only if it becomes available."
    ]
  }
];

export const projects = projectSlugs.map((slug) => {
  const project = projectRecords.find((item) => item.slug === slug);
  if (!project) throw new Error(`Missing portfolio project: ${slug}`);
  return project;
});
export const featuredProjects = projects.filter(project => project.slug !== "preston-session-site");
export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
