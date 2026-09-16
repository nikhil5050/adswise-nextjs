import type { MetadataRoute } from "next";
import { company } from "@/data/company";
import { services } from "@/data/services";
import { industries } from "@/data/industries";
import { caseStudies } from "@/data/case-studies";
import { blogs } from "@/data/blogs";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/industry",
    "/case-studies",
    "/blog",
    "/about-us",
    "/contact",
    "/career",
    "/privacy-policy",
  ].map((route) => ({
    url: `${company.domain}${route}`,
    lastModified: new Date(),
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${company.domain}/services/${service.slug}`,
    lastModified: new Date(),
  }));

  const industryRoutes = industries.map((industry) => ({
    url: `${company.domain}/industries/${industry.slug}`,
    lastModified: new Date(),
  }));

  const caseStudyRoutes = caseStudies.map((study) => ({
    url: `${company.domain}${study.route}`,
    lastModified: new Date(),
  }));

  const blogRoutes = blogs.map((post) => ({
    url: `${company.domain}/blog/${post.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...serviceRoutes, ...industryRoutes, ...caseStudyRoutes, ...blogRoutes];
}
