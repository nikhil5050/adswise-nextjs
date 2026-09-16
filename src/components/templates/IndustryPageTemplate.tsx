import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import type { Industry } from "@/data/industries";

export default function IndustryPageTemplate({ industry }: { industry: Industry }) {
  const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Icons.Sparkles;

  return (
    <div className="bg-background">
      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <Icon className="text-sand" size={36} strokeWidth={1.5} />
          <RevealText
            as="h1"
            lines={[industry.title.toUpperCase()]}
            className="mt-6 font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{industry.shortDescription}</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm leading-relaxed text-muted md:text-base">{industry.overview}</p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Common Challenges</p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {industry.challenges.map((challenge) => (
              <p key={challenge} className="border-l-2 border-teal pl-6 text-sm text-ink/80">
                {challenge}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">How We Help</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
            {industry.solutions.map((solution) => (
              <div key={solution.title} className="rounded-2xl border border-white/10 p-8">
                <h3 className="font-display text-xl text-ink">{solution.title}</h3>
                <p className="mt-3 text-sm text-muted">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
