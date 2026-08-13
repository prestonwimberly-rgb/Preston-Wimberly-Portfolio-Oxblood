import type { Project } from "@/data/projects";
import { absoluteUrl, siteConfig } from "@/lib/site";

const personId = `${siteConfig.origin}/#person`;
const websiteId = `${siteConfig.origin}/#website`;
const profilePageId = `${siteConfig.origin}/#profile-page`;

function personNode() {
  return {
    "@type": "Person",
    "@id": personId,
    name: siteConfig.name,
    url: siteConfig.origin,
    email: siteConfig.email,
    jobTitle: "Creative Director",
    description: siteConfig.description,
    knowsAbout: [
      "Creative direction",
      "Brand strategy",
      "Communications",
      "Editorial direction",
      "Writing",
      "Photography",
      "Web design",
    ],
  };
}

function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    url: siteConfig.origin,
    name: siteConfig.title,
    description: siteConfig.description,
    inLanguage: "en-US",
    publisher: { "@id": personId },
  };
}

function projectUrl(project: Project) {
  return absoluteUrl(`/work/${project.slug}/`);
}

function creativeWorkNode(project: Project) {
  const url = projectUrl(project);
  return {
    "@type": "CreativeWork",
    "@id": `${url}#creative-work`,
    url,
    name: project.title,
    headline: project.headline,
    description: project.cardSummary,
    creator: { "@id": personId },
    isPartOf: { "@id": websiteId },
    mainEntityOfPage: { "@id": `${url}#web-page` },
    image: absoluteUrl(`/social/${project.slug}.jpg`),
    genre: project.kicker.split(" · "),
    keywords: project.scope,
    spatialCoverage: {
      "@type": "Place",
      name: project.place,
    },
    ...(project.year.match(/^\d{4}$/) ? { dateCreated: project.year } : {}),
    ...(project.liveUrl && project.liveLabel
      ? {
          workExample: {
            "@type": "WebSite",
            name: project.liveLabel,
            url: project.liveUrl,
          },
        }
      : {}),
  };
}

function sandpaperWorkNode() {
  const url = absoluteUrl("/sandpaper/");
  return {
    "@type": "CreativeWork",
    "@id": `${url}#creative-work`,
    url,
    name: "SANDPAPER",
    headline: "A memoir structured through the material language of guitar finishing.",
    description:
      "A 50,000-word memoir built from photographs, records, and lived memory across a three-part editorial architecture.",
    creator: { "@id": personId },
    isPartOf: { "@id": websiteId },
    mainEntityOfPage: { "@id": `${url}#web-page` },
    image: absoluteUrl("/images/sandpaper-cover.png"),
    genre: ["Memoir", "Editorial direction", "Book design"],
    keywords: "Writing, long-form structure, documentary method, book design",
    dateCreated: "2026",
  };
}

function webPageNode(project: Project) {
  const url = projectUrl(project);
  return {
    "@type": "WebPage",
    "@id": `${url}#web-page`,
    url,
    name: project.metaTitle,
    description: project.cardSummary,
    isPartOf: { "@id": websiteId },
    about: { "@id": `${url}#creative-work` },
    inLanguage: "en-US",
  };
}

function sandpaperWebPageNode() {
  const url = absoluteUrl("/sandpaper/");
  return {
    "@type": "WebPage",
    "@id": `${url}#web-page`,
    url,
    name: "SANDPAPER, a memoir | Preston Wimberly",
    description:
      "A 50,000-word memoir structured through guitar finishing and built from photographs, records, and lived memory.",
    isPartOf: { "@id": websiteId },
    about: { "@id": `${url}#creative-work` },
    inLanguage: "en-US",
  };
}

export function homeStructuredData(projects: Project[]) {
  const selectedWork = [...projects.map(creativeWorkNode), sandpaperWorkNode()];
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        ...personNode(),
        subjectOf: selectedWork.map((work) => ({ "@id": work["@id"] })),
      },
      websiteNode(),
      {
        "@type": "ProfilePage",
        "@id": profilePageId,
        url: siteConfig.origin,
        name: siteConfig.title,
        description: siteConfig.description,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": websiteId },
        hasPart: selectedWork.map((work) => ({ "@id": work["@id"] })),
        inLanguage: "en-US",
      },
      ...selectedWork,
    ],
  };
}

export function projectStructuredData(project: Project) {
  return {
    "@context": "https://schema.org",
    "@graph": [personNode(), websiteNode(), webPageNode(project), creativeWorkNode(project)],
  };
}

export function sandpaperStructuredData() {
  return {
    "@context": "https://schema.org",
    "@graph": [personNode(), websiteNode(), sandpaperWebPageNode(), sandpaperWorkNode()],
  };
}
