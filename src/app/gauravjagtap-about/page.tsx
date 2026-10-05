import Image from "next/image";
import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import TeamFanOut from "@/components/sections/TeamFanOut";
import TeamGrid from "@/components/sections/TeamGrid";
import { founder, companyStory, strategicGrowthFramework, differentiators, industriesWeWorkWith } from "@/data/about";
import { team } from "@/data/team";
import JsonLd from "@/components/seo/JsonLd";
import QuickAnswer from "@/components/templates/QuickAnswer";
import { pageMetadata } from "@/lib/seo/metadata";
import { FOUNDER_ID, FOUNDER_IMAGE, FOUNDER_PAGE, breadcrumbLd, webPageLd } from "@/lib/seo/schema";

const founderAnswer =
  "Gaurav Jagtap is the Founder and CEO of AdsWise Marketing, a strategy-first digital marketing agency based in Pune, Maharashtra. He started AdsWise to make digital marketing generate measurable business outcomes — qualified enquiries and revenue — rather than impressions and clicks, and leads the agency's growth strategy, marketing systems and performance analytics for clients across India.";

export const metadata = pageMetadata({
  title: "Gaurav Jagtap — Founder of AdsWise Marketing | About Us",
  description:
    "Meet Gaurav Jagtap, Founder & CEO of AdsWise Marketing — a strategy-first digital marketing agency in Pune. Our story, leadership team, growth framework and the industries we serve.",
  path: FOUNDER_PAGE,
  image: FOUNDER_IMAGE,
  type: "profile",
  absoluteTitle: true,
  keywords: ["Gaurav Jagtap", "Gaurav Jagtap AdsWise", "AdsWise Marketing founder", "digital marketing agency Pune"],
});

export default function AboutUsPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={[
          webPageLd({
            type: "ProfilePage",
            name: "Gaurav Jagtap — Founder & CEO of AdsWise Marketing",
            description: founderAnswer,
            path: FOUNDER_PAGE,
            mainEntity: { "@id": FOUNDER_ID },
          }),
          breadcrumbLd([{ name: "About Gaurav Jagtap", path: FOUNDER_PAGE }]),
        ]}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">{companyStory.positioning}</p>
          <RevealText
            as="h1"
            lines={["SYSTEMS,", "NOT SERVICES."]}
            className="mt-6 font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">{companyStory.intro}</p>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <p className="text-sm leading-relaxed text-muted md:text-base">{companyStory.origin}</p>
        </div>
      </section>

      <QuickAnswer question="Who is Gaurav Jagtap?" answer={founderAnswer} />

      <section id="gaurav-jagtap" className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-center">
            <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-growth/30">
              <Image
                src={FOUNDER_IMAGE}
                alt="Gaurav Jagtap, Founder and CEO of AdsWise Marketing, Pune"
                fill
                sizes="112px"
                className="object-cover"
                style={{ objectPosition: "40% 33%" }}
              />
            </div>
            <div>
              <h2 className="font-display text-3xl text-ink md:text-4xl">{founder.name}</h2>
              <p className="mt-2 text-sm uppercase tracking-widest text-growth">Founder &amp; CEO, AdsWise Marketing</p>
            </div>
          </div>
          <p className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">From the Founder</p>
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
            className="mt-6 inline-block text-sm uppercase tracking-widest text-growth hover:underline"
          >
            {founder.name} — {founder.role.replace("Founder & CEO, AdsWise Marketing", "Founder & CEO")}
          </Link>
        </div>
      </section>

      {/* Leadership fan-out: side portraits slide out from behind Gaurav on scroll */}
      <TeamFanOut />

      <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">The Team</h2>
          <TeamGrid members={team} />
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Our Strategic Growth Framework</h2>
          <div className="flex flex-col gap-10">
            {strategicGrowthFramework.map((step) => (
              <div key={step.num} className="flex gap-6 border-b border-ink/10 pb-10">
                <span className="font-display text-3xl text-growth">{step.num}</span>
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
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">What Sets Us Apart</h2>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {differentiators.map((item) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.Sparkles;
              return (
                <div key={item.title} className="bg-surface p-8 md:p-10">
                  <Icon className="text-growth" size={28} strokeWidth={1.5} />
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
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">Industries We Work With</h2>
          <div className="flex flex-wrap gap-4">
            {industriesWeWorkWith.map((tag) => {
              const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[tag.icon] ?? Icons.Sparkles;
              return (
                <div
                  key={tag.title}
                  className="flex items-center gap-3 rounded-full border border-ink/10 px-5 py-3"
                >
                  <Icon className="text-growth" size={16} />
                  <span className="text-sm text-ink/80">{tag.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-xs uppercase tracking-[0.3em] text-growth">{companyStory.pune.heading}</h2>
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
