import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/templates/FaqSection";
import QuickAnswer from "@/components/templates/QuickAnswer";
import RelatedLinks from "@/components/templates/RelatedLinks";
import RecommendedPackages from "@/components/templates/RecommendedPackages";
import { industryCategories, industrySegments, inSentence, type IndustryCategory } from "@/data/industry-categories";
import { industryContent } from "@/data/industry-content";
import { breadcrumbLd, serviceLd } from "@/lib/seo/schema";
import { caseStudyLinks, categoryLinks, playbookLinks, serviceLinks } from "@/lib/seo/links";

export default function IndustryCategoryTemplate({ category }: { category: IndustryCategory }) {
  const segment = industrySegments.find((s) => s.id === category.segment);
  const siblings = industryCategories.filter((c) => c.segment === category.segment && c.slug !== category.slug);
  const content = industryContent[category.slug];
  const path = `/industry/${category.slug}`;
  const lowerName = inSentence(category.name);
  const examples = category.types.slice(0, 3).map((t) => inSentence(t.name)).join(", ");

  const faqs = [
    ...(content?.faqs ?? []),
    {
      question: `Which types of ${lowerName} does AdsWise Marketing work with?`,
      answer: `We work with ${category.types.map((t) => inSentence(t.name)).join(", ")}, in Pune and across India.`,
    },
    {
      question: `How much does digital marketing cost for ${lowerName}?`,
      answer:
        "Cost depends on your goals, the channels involved and your advertising budget. We start with a free growth audit, then share a fixed monthly scope so you know exactly what you pay for and what results to expect.",
    },
  ];

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          serviceLd({
            name: `${category.name} Digital Marketing`,
            description: content?.intro ?? `Digital marketing for ${examples} and more.`,
            path,
            serviceType: "Digital marketing",
            audience: category.name,
          }),
          breadcrumbLd([
            { name: "Industries", path: "/industry" },
            { name: category.name, path },
          ]),
        ]}
      />

      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">
            <Link href="/industry" className="hover:text-ink">Industries</Link>
            <span className="mx-2">/</span>
            {segment?.label}
          </p>
          <RevealText
            as="h1"
            lines={[category.name]}
            className="mt-6 font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">
            Adswise builds digital marketing, advertising and growth systems for {category.types.length} kinds of
            business in this category, from {examples}. Choose yours to see how we can help it grow.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full border border-growth px-8 py-4 text-sm uppercase tracking-widest text-growth transition-colors hover:bg-growth hover:text-background"
            >
              Book a free growth audit
            </Link>
          </div>
        </div>
      </section>

      {content && (
        <QuickAnswer
          question={`How does digital marketing help ${lowerName} grow?`}
          answer={content.intro}
        />
      )}

      {content && (
        <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Challenges We Solve</h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {content.challenges.map((challenge) => (
                <li key={challenge} className="border-l-2 border-growth pl-6 text-sm text-ink/80">
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Business Types</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {category.types.map((type) => (
              <Link
                key={type.slug}
                href={`/industry/${category.slug}/${type.slug}`}
                className="group flex items-center justify-between gap-4 bg-background p-6 transition-colors hover:bg-raised"
              >
                <div>
                  <span className="text-[11px] tracking-widest text-muted">{type.code}</span>
                  <p className="mt-1 text-base text-ink transition-colors group-hover:text-growth">{type.name}</p>
                </div>
                <ArrowUpRight
                  size={18}
                  className="shrink-0 text-muted transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-growth"
                />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {content && <RelatedLinks title="Services That Work Here" links={serviceLinks(content.services)} />}

      <RecommendedPackages slugs={category.packages} title="Packages That Work Here" />

      {content && (
        <RelatedLinks
          title="Playbooks & Results"
          links={[
            ...playbookLinks(content.playbook ? [content.playbook] : []),
            ...caseStudyLinks(content.caseStudies ?? []),
          ]}
        />
      )}

      <FaqSection faqs={faqs} />

      <RelatedLinks title={`More ${segment?.label ?? "Industries"}`} links={categoryLinks(siblings.map((c) => c.slug))} />

      <CTASection />
    </div>
  );
}
