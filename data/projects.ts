export type Project = {
  slug: string;
  title: string;
  kicker: string;
  headline: string;
  cardSummary: string;
  summary: string;
  image: string;
  imageAlt: string;
  role: string;
  scope: string;
  year: string;
  liveUrl: string;
  liveLabel: string;
  challengeTitle: string;
  challenge: string[];
  approachTitle: string;
  approach: string[];
  deliverables: string[];
  closing: string;
};

export const projects: Project[] = [
  {
    slug: "texas-aviation-partners",
    title: "Texas Aviation Partners",
    kicker: "Brand strategy · Editorial · Web",
    headline: "Making the real scale of an aviation company visible.",
    cardSummary:
      "A new position, voice, website, and editorial system for an aviation company whose experience had outgrown its public identity.",
    summary:
      "Texas Aviation Partners had decades of operational credibility, but its public presentation made a broad airport management and development company look much smaller than it was.",
    image: "/images/tap-hay-windsock.jpg",
    imageAlt: "A hay bale beside an airport windsock beneath a wide sky",
    role: "Brand strategist & creative lead",
    scope: "Positioning, writing, photography, website",
    year: "2026",
    liveUrl: "https://texasaviationpartners.com/",
    liveLabel: "Visit Texas Aviation Partners",
    challengeTitle: "The company had outgrown its own description.",
    challenge: [
      "The old website centered on one airport and one category of work. It left airport development, capital projects, public-sector coordination, land strategy, and advisory work largely invisible.",
      "The challenge was to present the business at its real scale without inflating it. Every claim needed to come from the work, the team, and the public record.",
    ],
    approachTitle: "Find the structure inside the work.",
    approach: [
      "I organized the company around a plain-language service model, rewrote its core story, developed a more editorial visual system, and used original field photography to show the physical context behind the claims.",
      "The website became both a sales tool and a publishing system: services, airport results, leadership experience, news, and long-form explanation could now reinforce one another.",
    ],
    deliverables: [
      "Brand positioning and message architecture",
      "Website strategy, design, writing, and build",
      "Leadership biographies and service language",
      "Original airport photography and art direction",
      "Case studies, news, and editorial system",
      "Responsive design, accessibility, and metadata",
    ],
    closing:
      "The finished system gives the company language equal to the work: practical, experienced, specific, and built for the next conversation.",
  },
  {
    slug: "wimberly-guitars",
    title: "Wimberly Guitars",
    kicker: "Brand · Product storytelling · Commerce",
    headline: "Building a guitar brand from the materials up.",
    cardSummary:
      "A father-and-son workshop turned into a distinct product brand with its own language, visual code, and direct path to commission.",
    summary:
      "Wimberly Guitars makes small-run electric guitars from walnut, leather, steel, brass, oil, and wire. The brand needed to feel as considered as the instruments.",
    image: "/images/wimberly-reference.avif",
    imageAlt: "An antique lever-action rifle with walnut, blued steel, and case-hardened metal",
    role: "Co-founder, writer & brand lead",
    scope: "Positioning, identity, copy, website, launch",
    year: "2026",
    liveUrl: "https://wimberlycustomguitars.com/",
    liveLabel: "Visit Wimberly Guitars",
    challengeTitle: "A handmade object needs more than handmade language.",
    challenge: [
      "The guitar market is crowded with familiar vintage cues, generic craftsmanship claims, and artificial age. Wimberly needed a position that came from its actual construction choices.",
      "Walnut, hand-tooled leather, blued steel, blackened nickel, and raw brass supplied the answer. The materials became the brand system.",
    ],
    approachTitle: "Let the product set the rules.",
    approach: [
      "I built the voice around permanence, honest wear, and the discipline of a small workshop. Product architecture, photography, page rhythm, and commissioning language all follow the same standard.",
      "The site gives two models room to feel specific, explains unfamiliar finishes, and moves an interested player from story to waitlist without turning the workshop into a volume business.",
    ],
    deliverables: [
      "Brand position, naming system, and voice",
      "Product and materials storytelling",
      "Website design, copy, and front-end build",
      "Commission and waitlist journey",
      "Build journal and email capture",
      "Launch strategy and search foundations",
    ],
    closing:
      "The brand now looks and sounds like the instruments: spare, tactile, regional, and made to gather its own history.",
  },
  {
    slug: "san-marcos-airport",
    title: "San Marcos Regional Airport",
    kicker: "Public information · Marketing · Editorial",
    headline: "Turning daily airport activity into public understanding.",
    cardSummary:
      "A durable communications practice for an airport serving pilots, tenants, public officials, neighbors, and a fast-growing region.",
    summary:
      "An airport communicates with several audiences at once. The work has to be useful on an ordinary Tuesday and credible when a major project changes the field.",
    image: "/images/san-marcos-tower.jpg",
    imageAlt: "Aircraft and the control tower at San Marcos Regional Airport",
    role: "Writer & communications lead",
    scope: "News, newsletters, public information, web",
    year: "Ongoing",
    liveUrl: "https://flysanmarcos.com/",
    liveLabel: "Visit Fly San Marcos",
    challengeTitle: "One airport, many publics.",
    challenge: [
      "Pilots need operational clarity. Tenants need updates. Public officials need context. Neighbors need to understand why a project matters. The website and editorial calendar have to serve all of them without flattening the story.",
      "The work also has a long memory: construction updates, public meetings, newsletters, awards, traffic reports, and development milestones need to remain findable after the moment passes.",
    ],
    approachTitle: "Treat public information as a system.",
    approach: [
      "I developed and maintained a practical editorial rhythm across news, newsletters, project updates, and website pages. Each piece starts with the reader’s question and connects daily activity to the airport’s regional role.",
      "Clear structure and plain language make technical work easier to follow while consistent publishing builds a useful public record over time.",
    ],
    deliverables: [
      "News and long-form web writing",
      "Monthly newsletters and operations updates",
      "Website content and information architecture",
      "Development and construction communications",
      "Stakeholder and public-facing materials",
      "Editorial planning and archive stewardship",
    ],
    closing:
      "The result is communications infrastructure: a clearer front door today and a more useful record of the airport’s growth tomorrow.",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
