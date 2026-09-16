import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import { founder, companyStory, strategicGrowthFramework, differentiators, industriesWeWorkWith } from "@/data/about";
import { team } from "@/data/team";

export const metadata: Metadata = {
  title: "About Us",
  description: companyStory.intro,
  alternates: { canonical: "/about-us" },
};

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-muted">{companyStory.positioning}</p>
          <RevealText
            as="h1"
            lines={["SYSTEMS,", "NOT SERVICES."]}
            className="mt-6 font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{companyStory.intro}</p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm leading-relaxed text-muted md:text-base">{companyStory.origin}</p>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-10 text-xs uppercase tracking-[0.3em] text-muted">From the Founder</p>
          <blockquote className="font-display text-2xl leading-snug text-ink md:text-4xl">
            &ldquo;{founder.quote}&rdquo;
          </blockquote>
          <div className="mt-8 flex flex-col gap-4 text-sm text-muted md:text-base">
            {founder.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <Link
            href={founder.linkedin}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block text-sm uppercase tracking-widest text-sand hover:underline"
          >
            {founder.name} — {founder.role.replace("Founder & CEO, AdsWise Marketing", "Founder & CEO")}
          </Link>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Our Strategic Growth Framework</p>
          <div className="flex flex-col gap-10">
            {strategicGrowthFramework.map((step) => (
              <div key={step.num} className="flex gap-6 border-b border-white/10 pb-10">
                <span className="font-display text-3xl text-moss">{step.num}</span>
                <div>
                  <h3 className="font-display text-xl text-ink">{step.title}</h3>
                  <p className="mt-2 text-sm text-muted">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">What Sets Us Apart</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.Sparkles;
              return (
                <div key={item.title} className="bg-surface p-8 md:p-10">
                  <Icon className="text-sand" size={28} strokeWidth={1.5} />
                  <h3 className="mt-6 font-display text-xl text-ink">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Industries We Work With</p>
          <div className="flex flex-wrap gap-4">
            {industriesWeWorkWith.map((tag) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[tag.icon] ?? Icons.Sparkles;
              return (
                <div
                  key={tag.title}
                  className="flex items-center gap-3 rounded-full border border-white/10 px-5 py-3"
                >
                  <Icon className="text-sand" size={16} />
                  <span className="text-sm text-ink/80">{tag.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">The Team</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <div key={member.name} className="rounded-2xl border border-white/10 p-6">
                <h3 className="font-display text-lg text-ink">{member.name}</h3>
                <p className="mt-1 text-xs uppercase tracking-widest text-muted">{member.role}</p>
                {member.linkedin && (
                  <Link
                    href={member.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block text-xs text-sand hover:underline"
                  >
                    LinkedIn
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-muted">{companyStory.pune.heading}</p>
          <div className="flex flex-col gap-4 text-sm text-muted md:text-base">
            {companyStory.pune.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
