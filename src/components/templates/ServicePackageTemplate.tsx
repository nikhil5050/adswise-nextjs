import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/templates/FaqSection";
import QuickAnswer from "@/components/templates/QuickAnswer";
import RelatedLinks from "@/components/templates/RelatedLinks";
import { packageServices } from "@/data/service-content";
import { servicePackages, type ServicePackage } from "@/data/service-packages";
import { industryCategories } from "@/data/industry-categories";
import { breadcrumbLd, serviceLd } from "@/lib/seo/schema";
import { serviceLinks } from "@/lib/seo/links";

const splitFlow = (text: string) => text.split("→").map((s) => s.trim()).filter(Boolean);

export default function ServicePackageTemplate({ pkg }: { pkg: ServicePackage }) {
  const index = servicePackages.findIndex((p) => p.slug === pkg.slug);
  const next = servicePackages[(index + 1) % servicePackages.length];
  const relatedIndustries = industryCategories.filter((c) => c.packages.includes(pkg.slug));
  const serviceCount = pkg.groups.reduce((n, g) => n + g.items.length, 0);
  const path = `/services/${pkg.slug}`;
  const areas = pkg.groups.map((g) => g.title.toLowerCase());
  const areaList = `${areas.slice(0, -1).join(", ")}${areas.length > 1 ? " and " : ""}${areas[areas.length - 1]}`;
  const flow = splitFlow(pkg.flow);
  const summary = `The ${pkg.name} package from AdsWise Marketing is a done-for-you programme covering ${areaList} — ${serviceCount} services delivered by one team in Pune for clients across India. ${pkg.bestFor}`;
  const faqs = [
    {
      question: `What is included in the ${pkg.name} package?`,
      answer: `The package covers ${pkg.groups.length} areas and ${serviceCount} services: ${pkg.groups
        .map((g) => `${g.title} (${g.items.slice(0, 3).join(", ")}${g.items.length > 3 ? " and more" : ""})`)
        .join("; ")}.`,
    },
    { question: `Who is the ${pkg.name} package best for?`, answer: pkg.bestFor },
    {
      question: `How does the ${pkg.name} package work?`,
      answer: `Work runs in ${flow.length} stages: ${flow.join(", then ")}. You get a dedicated team, a shared plan and regular reporting at every stage.`,
    },
    {
      question: `Can the ${pkg.name} package be customised?`,
      answer: `Yes. Every package is scoped to your goals and budget after a free growth audit${
        pkg.addons.length > 0 ? `, and can be extended with add-ons such as ${pkg.addons.slice(0, 4).join(", ")}` : ""
      }.`,
    },
  ];

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          serviceLd({ name: `${pkg.name} Package`, description: summary, path, serviceType: "Digital marketing package" }),
          breadcrumbLd([
            { name: "Services", path: "/services" },
            { name: pkg.name, path },
          ]),
        ]}
      />
      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">
            <Link href="/services" className="hover:text-ink">Services</Link>
            <span className="mx-2">/</span>
            Package {String(index + 1).padStart(2, "0")}
          </p>
          <RevealText
            as="h1"
            lines={[pkg.name]}
            className="mt-6 font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <div className="mt-8 flex flex-wrap gap-2">
            {splitFlow(pkg.short).map((step) => (
              <span key={step} className="rounded-full border border-growth/25 px-3 py-1 text-xs text-ink/80">
                {step}
              </span>
            ))}
          </div>
          <p className="mt-10 max-w-2xl border-l-2 border-growth pl-5 text-lg text-muted">
            <strong className="text-ink">Best for:</strong> {pkg.bestFor}
          </p>
        </div>
      </section>

      <QuickAnswer question={`What is the ${pkg.name} package?`} answer={summary} />

      <section className="border-t border-ink/10 bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-xs uppercase tracking-[0.3em] text-growth">What&apos;s Included</h2>
            <p className="text-sm text-muted">
              {pkg.groups.length} areas · {serviceCount} services
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {pkg.groups.map((group) => (
              <div key={group.title} className="glow-card rounded-2xl border border-ink/10 bg-ink/[0.03] p-8">
                <h2 className="font-display text-xl text-ink">{group.title}</h2>
                <ul className="mt-5 grid gap-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-muted">
                      <Check size={16} className="mt-0.5 shrink-0 text-growth" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {pkg.addons.length > 0 && (
            <div className="mt-8 rounded-2xl border border-growth/30 bg-growth/[0.06] p-8">
              <p className="text-sm font-semibold text-ink">Optional add-ons</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {pkg.addons.map((addon) => (
                  <span key={addon} className="rounded-full border border-growth/25 px-3 py-1.5 text-xs text-growth">
                    {addon}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">How It Runs</h2>
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {flow.map((step, i) => (
              <li key={step} className="bg-background p-6">
                <span className="font-display text-2xl text-growth">{String(i + 1).padStart(2, "0")}</span>
                <p className="mt-3 text-sm text-ink">{step}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {relatedIndustries.length > 0 && (
        <section className="border-t border-ink/10 px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">Popular With</h2>
            <div className="flex flex-wrap gap-3">
              {relatedIndustries.map((c) => (
                <Link
                  key={c.slug}
                  href={`/industry/${c.slug}`}
                  className="rounded-full border border-growth/25 px-4 py-2 text-sm text-ink/80 transition-colors hover:border-growth hover:text-growth"
                >
                  {c.name} Marketing
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <RelatedLinks title="Services in This Package" links={serviceLinks(packageServices[pkg.slug] ?? [])} />

      <FaqSection faqs={faqs} />

      <section className="border-t border-ink/10 px-6 md:px-10">
        <Link
          href={`/services/${next.slug}`}
          className="group mx-auto flex max-w-6xl items-center justify-between py-12"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-growth">Next package</p>
            <p className="mt-2 font-display text-2xl text-ink transition-colors group-hover:text-growth md:text-4xl">
              {next.name}
            </p>
          </div>
          <ArrowUpRight className="text-muted transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-growth" />
        </Link>
      </section>

      <CTASection />
    </div>
  );
}
