import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import FaqAccordion from "@/components/templates/FaqAccordion";
import CTASection from "@/components/sections/CTASection";
import type { Service } from "@/data/services";

export default function ServicePageTemplate({ service }: { service: Service }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <Icon className="text-sand" size={36} strokeWidth={1.5} />
          <RevealText
            as="h1"
            lines={[service.title]}
            className="mt-6 font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{service.shortDescription}</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm leading-relaxed text-muted md:text-base">{service.overview}</p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">What&apos;s Included</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {service.offerings.map((offering) => (
              <div key={offering.title} className="rounded-2xl border border-white/10 p-8">
                <h3 className="font-display text-xl text-ink">{offering.title}</h3>
                <p className="mt-3 text-sm text-muted">{offering.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {service.process && (
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-5xl">
            <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Our Process</p>
            <div className="flex flex-col gap-10">
              {service.process.map((step, i) => (
                <div key={step.step} className="flex gap-6 border-b border-white/10 pb-10">
                  <span className="font-display text-3xl text-moss">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="font-display text-xl text-ink">{step.step}</h3>
                    <p className="mt-2 text-sm text-muted">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {service.faqs && (
        <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-4xl">
            <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Frequently Asked</p>
            <FaqAccordion faqs={service.faqs} />
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
