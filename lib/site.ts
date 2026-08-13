import site from "@/config/site.json";
import deployment from "@/config/deployment.json";
import { isIndexableContext } from "@/lib/deployment.mjs";

const configuredOrigin = process.env.SITE_URL ?? site.defaultOrigin;
const deploymentContext = process.env.CONTEXT ?? "local";

export const siteConfig = {
  ...site,
  origin: configuredOrigin.replace(/\/$/, ""),
  deploymentContext,
  isIndexable: isIndexableContext(
    deploymentContext,
    deployment.nonIndexableContexts,
  ),
};

export function absoluteUrl(path = "/"): string {
  return new URL(path, `${siteConfig.origin}/`).toString();
}

export function mailtoHref(subject?: string): string {
  return subject
    ? `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}`
    : `mailto:${siteConfig.email}`;
}
