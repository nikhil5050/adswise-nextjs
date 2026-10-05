import Link from "next/link";
import * as Icons from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import { services } from "@/data/services";
import { servicePackages } from "@/data/service-packages";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, itemListLd, webPageLd } from "@/lib/seo/schema";

export const metadata = pageMetadata({
  title: "Digital Marketing Services in Pune — SEO, Ads, Social & Web",
  description:
    "Explore AdsWise Marketing services in Pune: SEO, Google & Meta ads, social media marketing, branding, website and app development, plus done-for-you growth packages.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={[
          webPageLd({
            type: "CollectionPage",
            name: "Digital Marketing Services",
            description: "Growth packages and individual digital marketing services from AdsWise Marketing, Pune.",
            path: "/services",
          }),
          breadcrumbLd([{ name: "Services", path: "/services" }]),
          itemListLd([
            ...servicePackages.map((p) => ({ name: `${p.name} Package`, path: `/services/${p.slug}` })),
            ...services.map((s) => ({ name: s.title, path: `/services/${s.slug}` })),
          ]),
        ]}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["WHAT WE DO"]}
            className="font-display text-5xl leading-tight text-ink md:text-8xl"
          />
          <p className="mt-8 max-w-xl text-lg text-muted">
            {servicePackages.length} growth packages and {services.length} disciplines, one connected growth
            system — strategy, creative, media and technology working together.
          </p>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-6xl">
          <p className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">Growth Packages</p>
          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
            {servicePackages.map((pkg, i) => (
              <Link
                key={pkg.slug}
                href={`/services/${pkg.slug}`}
                className="group bg-background p-8 transition-colors hover:bg-raised md:p-10"
              >
                <span className="font-display text-2xl text-growth">{String(i + 1).padStart(2, "0")}</span>
                <h2 className="mt-4 font-display text-xl text-ink transition-colors group-hover:text-growth">
                  {pkg.name}
                </h2>
                <p className="mt-3 text-sm text-muted">{pkg.bestFor}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24">
        <p className="mx-auto mb-10 max-w-6xl text-xs uppercase tracking-[0.3em] text-growth">Individual Services</p>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[service.icon] ?? Icons.Sparkles;
            return (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-background p-8 transition-colors hover:bg-raised md:p-10"
              >
                <Icon className="text-growth" size={28} strokeWidth={1.5} />
                <h2 className="mt-6 font-display text-xl text-ink transition-colors group-hover:text-growth">
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
