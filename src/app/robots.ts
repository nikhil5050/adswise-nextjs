import type { MetadataRoute } from "next";
import { company } from "@/data/company";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Raw document export kept in /public as source material, not a page.
      disallow: ["/doc_export.html"],
    },
    sitemap: `${company.domain}/sitemap.xml`,
    host: company.domain,
  };
}
