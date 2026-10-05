import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";
import { industryCategories, industrySegments } from "@/data/industry-categories";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, itemListLd, webPageLd } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Industries We Serve — Digital Marketing by Industry",
  description:
    "Industry-specific digital marketing from AdsWise Marketing for retail, healthcare, education, real estate, manufacturing, startups, ecommerce and 30+ industries across India.",
  path: "/industry",
});

export default function IndustryPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={[
          webPageLd({
            type: "CollectionPage",
            name: "Industries We Serve",
            description: "Digital marketing by industry from AdsWise Marketing, Pune.",
            path: "/industry",
          }),
          breadcrumbLd([{ name: "Industries", path: "/industry" }]),
          itemListLd(industryCategories.map((c) => ({ name: c.name, path: `/industry/${c.slug}` }))),
        ]}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["INDUSTRIES WE GROW"]}
            className="font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <p className="mt-8 max-w-xl text-lg text-muted">
            {industryCategories.length} industry categories, from local shops to national brands. Choose yours to see
            the business types we support.
          </p>
        </div>
      </section>

      {industrySegments.map((segment) => (
        <section key={segment.id} className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">{segment.label}</p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industryCategories
                .filter((c) => c.segment === segment.id)
                .map((category) => (
                  <Link
                    key={category.slug}
                    href={`/industry/${category.slug}`}
                    className="glow-card group rounded-2xl border border-ink/10 p-6 transition-all hover:-translate-y-0.5 hover:border-growth/40 hover:bg-raised"
                  >
                    <h2 className="font-display text-xl text-ink transition-colors group-hover:text-growth">
                      {category.name}
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                      {category.types
                        .slice(0, 3)
                        .map((t) => t.name)
                        .join(", ")}
                      …
                    </p>
                    <p className="mt-4 text-xs text-ink/70">{category.types.length} business types →</p>
                  </Link>
                ))}
            </div>
          </div>
        </section>
      ))}

      <section className="border-t border-ink/10">
        <p className="mx-auto max-w-6xl px-6 pt-16 text-xs uppercase tracking-[0.3em] text-growth md:px-10">
          In-Depth Playbooks
        </p>
        {industries.map((industry) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Icons.Sparkles;
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center justify-between border-b border-ink/10 px-6 py-10 transition-colors hover:bg-raised md:px-10 md:py-14"
            >
              <div className="flex items-center gap-6">
                <Icon className="text-growth" size={28} strokeWidth={1.5} />
                <span className="font-display text-2xl text-ink transition-colors group-hover:text-growth md:text-4xl">
                  {industry.title}
                </span>
              </div>
              <Icons.ArrowUpRight
                className="text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-growth"
                size={22}
              />
            </Link>
          );
        })}
      </section>

      <CTASection />
    </div>
  );
}
