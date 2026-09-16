import type { Metadata } from "next";
import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Strategy consulting, performance marketing, SEO, creative and technology services from AdsWise Marketing.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["WHAT WE DO"]}
            className="font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-xl text-lg text-muted">
            Thirteen disciplines, one connected growth system — strategy, creative, media and
            technology working together.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-background p-8 transition-colors hover:bg-surface md:p-10"
              >
                <Icon className="text-sand" size={28} strokeWidth={1.5} />
                <h2 className="mt-6 font-display text-xl text-ink transition-colors group-hover:text-sand">
                  {service.title}
                </h2>
                <p className="mt-3 text-sm text-muted">{service.shortDescription}</p>
              </Link>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
