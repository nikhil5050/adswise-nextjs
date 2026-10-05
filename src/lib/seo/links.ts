import { services } from "@/data/services";
import { getServicePackage } from "@/data/service-packages";
import { getIndustryCategory } from "@/data/industry-categories";
import { industries } from "@/data/industries";
import { blogs } from "@/data/blogs";
import { caseStudies } from "@/data/case-studies";
import type { RelatedLink } from "@/components/templates/RelatedLinks";

const defined = <T,>(x: T | undefined): x is T => x !== undefined;

export const serviceLinks = (slugs: string[]): RelatedLink[] =>
  slugs
    .map((slug) => services.find((s) => s.slug === slug))
    .filter(defined)
    .map((s) => ({ href: `/services/${s.slug}`, label: s.title, description: s.shortDescription }));

export const packageLinks = (slugs: string[]): RelatedLink[] =>
  slugs
    .map(getServicePackage)
    .filter(defined)
    .map((p) => ({ href: `/services/${p.slug}`, label: `${p.name} Package`, description: p.bestFor }));

export const categoryLinks = (slugs: string[]): RelatedLink[] =>
  slugs
    .map(getIndustryCategory)
    .filter(defined)
    .map((c) => ({ href: `/industry/${c.slug}`, label: `${c.name} Marketing` }));

export const playbookLinks = (slugs: string[]): RelatedLink[] =>
  slugs
    .map((slug) => industries.find((i) => i.slug === slug))
    .filter(defined)
    .map((i) => ({ href: `/industries/${i.slug}`, label: `${i.title} Marketing Playbook`, description: i.shortDescription }));

export const blogLinks = (slugs: string[]): RelatedLink[] =>
  slugs
    .map((slug) => blogs.find((b) => b.slug === slug))
    .filter(defined)
    .map((b) => ({ href: `/blog/${b.slug}`, label: b.title, description: b.excerpt }));

export const caseStudyLinks = (slugs: string[]): RelatedLink[] =>
  slugs
    .map((slug) => caseStudies.find((c) => c.slug === slug))
    .filter(defined)
    .map((c) => ({
      href: c.route,
      label: `${c.client} Case Study`,
      description: `${c.headline} — ${c.results.map((r) => `${r.value} ${r.label}`).join(", ")}.`,
    }));
