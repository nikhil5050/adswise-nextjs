import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/templates/FaqSection";
import QuickAnswer from "@/components/templates/QuickAnswer";
import RelatedLinks from "@/components/templates/RelatedLinks";
import type { Industry } from "@/data/industries";
import { playbookContent } from "@/data/industry-content";
import { breadcrumbLd, serviceLd } from "@/lib/seo/schema";
import { caseStudyLinks, categoryLinks, serviceLinks } from "@/lib/seo/links";

export default function IndustryPageTemplate({ industry }: { industry: Industry }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Icons.Sparkles;
  const content = playbookContent[industry.slug];
  const path = `/industries/${industry.slug}`;

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          serviceLd({
            name: `${industry.title} Digital Marketing`,
            description: content?.quickAnswer ?? industry.shortDescription,
            path,
            serviceType: "Digital marketing",
            audience: industry.title,
          }),
          breadcrumbLd([
            { name: "Industries", path: "/industry" },
            { name: industry.title, path },
          ]),
        ]}
      />

      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">
            <Link href="/industry" className="hover:text-ink">Industries</Link>
            <span className="mx-2">/</span>
            Playbook
          </p>
          <Icon className="mt-8 text-growth" size={36} strokeWidth={1.5} />
          <RevealText
            as="h1"
            lines={[industry.title.toUpperCase()]}
            className="mt-6 font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{industry.shortDescription}</p>
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
        <QuickAnswer question={`What is ${industry.title.toLowerCase()} digital marketing?`} answer={content.quickAnswer} />
      )}

      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-growth">Our Approach</h2>
          <p className="text-sm leading-relaxed text-muted md:text-base">{industry.overview}</p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Common Challenges</h2>
          <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <li key={challenge} className="border-l-2 border-growth pl-6 text-sm text-ink/80">
                {challenge}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">How We Help</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {industry.solutions.map((solution) => (
              <div key={solution.title} className="glow-card rounded-2xl border border-ink/10 p-8">
                <h3 className="font-display text-xl text-ink">{solution.title}</h3>
                <p className="mt-3 text-sm text-muted">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content && (
        <>
          <RelatedLinks title="Proven Results" links={caseStudyLinks(content.caseStudies)} />
          <RelatedLinks title={`Services for ${industry.title}`} links={serviceLinks(content.services)} />
          <RelatedLinks title="Explore Business Types" links={categoryLinks(content.categories)} />
          <FaqSection faqs={content.faqs} />
        </>
      )}

      <CTASection />
    </div>
  );
}
