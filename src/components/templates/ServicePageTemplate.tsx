import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/templates/FaqSection";
import QuickAnswer from "@/components/templates/QuickAnswer";
import RelatedLinks from "@/components/templates/RelatedLinks";
import RecommendedPackages from "@/components/templates/RecommendedPackages";
import { serviceContent } from "@/data/service-content";
import type { Service } from "@/data/services";
import { breadcrumbLd, serviceLd } from "@/lib/seo/schema";
import { blogLinks, caseStudyLinks, categoryLinks, serviceLinks } from "@/lib/seo/links";

export default function ServicePageTemplate({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
  const content = serviceContent[service.slug];
  const path = `/services/${service.slug}`;
  const faqs = [...(service.faqs ?? []), ...(content?.faqs ?? [])];

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          serviceLd({ name: service.title, description: content?.quickAnswer ?? service.shortDescription, path }),
          breadcrumbLd([
            { name: "Services", path: "/services" },
            { name: service.title, path },
          ]),
        ]}
      />

      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">
            <Link href="/services" className="hover:text-ink">Services</Link>
            <span className="mx-2">/</span>
            {service.title}
          </p>
          <Icon className="mt-8 text-growth" size={36} strokeWidth={1.5} />
          <RevealText
            as="h1"
            lines={[service.title]}
            className="mt-6 font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{service.shortDescription}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-full border border-growth px-8 py-4 text-sm uppercase tracking-widest text-growth transition-colors hover:bg-growth hover:text-background"
            >
              Book a free growth audit
            </Link>
            <Link
              href="/case-studies"
              className="inline-block rounded-full border border-ink/15 px-8 py-4 text-sm uppercase tracking-widest text-ink/80 transition-colors hover:border-growth hover:text-growth"
            >
              See our results
            </Link>
          </div>
        </div>
      </section>

      {content && (
        <QuickAnswer question={`What is ${service.title.toLowerCase()}?`} answer={content.quickAnswer} />
      )}

      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-growth">
            {service.title} at AdsWise Marketing, Pune
          </h2>
          <p className="text-sm leading-relaxed text-muted md:text-base">{service.overview}</p>
        </div>
      </section>

      {content && (
        <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">Who It&apos;s For</h2>
            <ul className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {content.whoFor.map((item) => (
                <li key={item} className="border-l-2 border-growth pl-6 text-sm text-ink/80">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">What&apos;s Included</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((offering) => (
              <div key={offering.title} className="glow-card rounded-2xl border border-ink/10 p-8">
                <h3 className="font-display text-xl text-ink">{offering.title}</h3>
                <p className="mt-3 text-sm text-muted">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {content && (
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">
              Benefits of {service.title}
            </h2>
            <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2">
              {content.benefits.map((benefit) => (
                <div key={benefit.title} className="bg-background p-8">
                  <h3 className="font-display text-xl text-ink">{benefit.title}</h3>
                  <p className="mt-3 text-sm text-muted">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.process && (
        <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Our Process</h2>
            <ol className="flex flex-col gap-10">
              {service.process.map((step, i) => (
                <li key={step.step} className="flex gap-6 border-b border-ink/10 pb-10">
                  <span className="font-display text-3xl text-growth">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{step.step}</h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      {content && (
        <>
          <RelatedLinks title="Proven Results" links={caseStudyLinks(content.caseStudies)} />
          <RecommendedPackages slugs={content.relatedPackages} title="Packages That Include This Service" />
          <RelatedLinks title="Industries We Serve With This" links={categoryLinks(content.relatedIndustries)} />
          <RelatedLinks title="Related Services" links={serviceLinks(content.relatedServices)} />
          <RelatedLinks title="Further Reading" links={blogLinks(content.relatedBlogs)} />
        </>
      )}

      <FaqSection faqs={faqs} />

      <CTASection />
    </div>
  );
}
