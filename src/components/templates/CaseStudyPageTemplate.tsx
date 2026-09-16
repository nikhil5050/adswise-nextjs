import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import type { CaseStudy } from "@/data/case-studies";

export default function CaseStudyPageTemplate({ study }: { study: CaseStudy }) {
  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">
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

      <section className="border-t border-white/10 bg-surface px-6 py-16 md:px-10 md:py-20">
        <div className="mx-auto flex max-w-5xl flex-wrap gap-12">
          {study.results.map((result) => (
            <div key={result.label}>
              <p className="font-display text-4xl text-sand md:text-5xl">{result.value}</p>
              <p className="mt-1 text-xs uppercase tracking-widest text-muted">{result.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">The Challenge</p>
          <p className="text-base text-muted">{study.challenge}</p>
          <ul className="mt-8 space-y-4">
            {study.challengePoints.map((point) => (
              <li key={point} className="border-l-2 border-teal pl-6 text-sm text-ink/80">
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Our Strategy</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {study.strategy.map((item) => (
              <div key={item.title} className="rounded-2xl border border-white/10 p-8">
                <h3 className="font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
