import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import RelatedLinks from "@/components/templates/RelatedLinks";
import type { CaseStudy } from "@/data/case-studies";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";
import { categoryLinks, serviceLinks } from "@/lib/seo/links";
import { articleLd, breadcrumbLd } from "@/lib/seo/schema";

/** Services and industry pages each case study demonstrates, for internal linking. */
const RELATED: Record<string, { services: string[]; industries: string[] }> = {
  "footwear-growth": {
    services: ["ecommerce-development", "search-engine-optimization", "performance-marketing"],
    industries: ["ecommerce-and-product-businesses", "local-retail-businesses"],
  },
  "interior-design-marketing": {
    services: ["search-engine-optimization", "social-media-marketing", "performance-marketing"],
    industries: ["professional-services", "real-estate-and-construction"],
  },
  "real-estate-growth": {
    services: ["performance-marketing", "search-engine-optimization", "social-media-marketing"],
    industries: ["real-estate-and-construction"],
  },
};

export default function CaseStudyPageTemplate({ study }: { study: CaseStudy }) {
  const related = RELATED[study.slug];

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          articleLd({
            headline: study.headline,
            description: study.summary,
            path: study.route,
            image: DEFAULT_OG_IMAGE,
            section: "Case Study",
          }),
          breadcrumbLd([
            { name: "Case Studies", path: "/case-studies" },
            { name: study.client, path: study.route },
          ]),
        ]}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">
            {study.industry} — {study.location}
          </p>
          <RevealText
            as="h1"
            lines={[study.client]}
            className="mt-6 font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{study.headline}</p>
        </div>
      </section>

      <section className="border-t border-ink/10 bg-surface px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-12">
          {study.results.map((result) => (
            <div key={result.label}>
              <p className="font-display text-4xl text-growth md:text-5xl">{result.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">{result.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-growth">The Challenge</h2>
          <p className="text-base text-muted">{study.challenge}</p>
          <ul className="mt-8 space-y-4">
            {study.challengePoints.map((point) => (
              <li key={point} className="border-l-2 border-growth pl-6 text-sm text-ink/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Our Strategy</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {study.strategy.map((item) => (
              <div key={item.title} className="glow-card rounded-2xl border border-ink/10 p-8">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related && (
        <>
          <RelatedLinks title="Services Behind These Results" links={serviceLinks(related.services)} />
          <RelatedLinks title="Related Industries" links={categoryLinks(related.industries)} />
        </>
      )}

      <CTASection />
    </div>
  );
}
