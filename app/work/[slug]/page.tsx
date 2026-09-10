import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectCase } from "@/components/project-case";
import { SiteHeader } from "@/components/site-header";
import { StructuredData } from "@/components/structured-data";
import { getProject, projects } from "@/data/projects";
import { mailtoHref, siteConfig } from "@/lib/site";
import { projectStructuredData } from "@/lib/structured-data";

type WorkPageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: WorkPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  const canonicalPath = `/work/${project.slug}/`;
  const socialTitle = `${project.metaTitle} | Preston Wimberly`;
  return {
    title: project.metaTitle,
    description: project.cardSummary,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: socialTitle,
      description: project.cardSummary,
      type: "article",
      url: canonicalPath,
      siteName: siteConfig.name,
      images: [
        {
          url: `/social/${project.slug}.jpg`,
          width: 1200,
          height: 630,
          alt: `${project.title} case study by Preston Wimberly`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description: project.cardSummary,
      images: [`/social/${project.slug}.jpg`],
    },
  };
}

export default async function WorkPage({ params }: WorkPageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const index = projects.findIndex(item => item.slug === project.slug);
  const inquiryHref = mailtoHref("Creative direction conversation");
  return <>
    <StructuredData data={projectStructuredData(project)} />
    <SiteHeader skipHref="#case-content" variant="work" navAriaLabel="Primary navigation"
      workLink={{ href: "/#work", label: "Work" }} secondaryLink={{ href: "/#about", label: "About", narrow: true }}
      contactHref={inquiryHref} contactLongLabel="Let’s talk" />
    <ProjectCase project={project} nextProject={projects[(index + 1) % projects.length]} />
    <footer className="site-footer"><p>© 2026 Preston Wimberly</p><Link href="/#work">Selected work</Link><a href={inquiryHref}>Let’s talk ↗</a></footer>
  </>;
}
