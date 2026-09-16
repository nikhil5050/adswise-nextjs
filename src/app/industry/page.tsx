import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import { industries } from "@/data/industries";

export const metadata: Metadata = {
  title: "Industries",
  description: "Digital marketing for real estate, manufacturing, interior design, healthcare and education.",
  alternates: { canonical: "/industry" },
};

export default function IndustryPage() {
  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["INDUSTRIES WE GROW"]}
            className="font-display text-4xl leading-tight text-ink md:text-7xl"
          />
        </div>
      </section>

      <section className="border-t border-white/10">
        {industries.map((industry) => {
          const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[industry.icon] ?? Icons.Sparkles;
          return (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group flex items-center justify-between border-b border-white/10 px-6 py-10 transition-colors hover:bg-surface md:px-10 md:py-14"
            >
              <div className="flex items-center gap-6">
                <Icon className="text-sand" size={28} strokeWidth={1.5} />
                <span className="font-display text-2xl text-ink transition-colors group-hover:text-sand md:text-4xl">
                  {industry.title}
                </span>
              </div>
              <Icons.ArrowUpRight
                className="text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sand"
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
