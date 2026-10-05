import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { blogs } from "@/data/blogs";
import { servicePackages } from "@/data/service-packages";
import { industryCategories } from "@/data/industry-categories";
import { isoDate } from "@/lib/seo/schema";

export const dynamic = "force-static";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entry = (
    path: string,
    priority: number,
    changeFrequency: Entry["changeFrequency"] = "monthly",
    lastModified: Date | string = now,
  ): Entry => ({ url: `${company.domain}${path}`, lastModified, changeFrequency, priority });

  return [
    entry("", 1, "weekly"),
    entry("/services", 0.9, "weekly"),
    entry("/industry", 0.8, "weekly"),
    entry("/gauravjagtap-about", 0.8),
    entry("/contact", 0.8),
    entry("/case-studies", 0.7),
    entry("/blog", 0.7, "weekly"),
    entry("/career", 0.4),
    entry("/privacy-policy", 0.2, "yearly"),
    ...services.map((s) => entry(`/services/${s.slug}`, 0.9)),
    ...servicePackages.map((p) => entry(`/services/${p.slug}`, 0.8)),
    ...industries.map((i) => entry(`/industries/${i.slug}`, 0.7)),
    ...industryCategories.flatMap((c) => [
      entry(`/industry/${c.slug}`, 0.7),
      ...c.types.map((t) => entry(`/industry/${c.slug}/${t.slug}`, 0.5)),
    ]),
    ...caseStudies.map((c) => entry(c.route, 0.7)),
    ...blogs.map((b) => entry(`/blog/${b.slug}`, 0.6, "monthly", isoDate(b.date) ?? now)),
  ];
}
