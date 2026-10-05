import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { getServicePackage, type ServicePackage } from "@/data/service-packages";

export default function RecommendedPackages({ slugs, title }: { slugs: string[]; title: string }) {
  const packages = slugs.map(getServicePackage).filter((p): p is ServicePackage => Boolean(p));

  return (
    <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">{title}</p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {packages.map((pkg) => (
            <Link
              key={pkg.slug}
              href={`/services/${pkg.slug}`}
              className="glow-card group rounded-2xl border border-ink/10 bg-ink/[0.03] p-8 transition-colors hover:border-growth/40"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="font-display text-xl text-ink transition-colors group-hover:text-growth">{pkg.name}</h3>
                <ArrowUpRight size={20} className="shrink-0 text-muted transition-colors group-hover:text-growth" />
              </div>
              <p className="mt-3 text-sm text-muted">{pkg.bestFor}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {pkg.groups.map((g) => (
                  <span key={g.title} className="rounded-full border border-ink/10 px-3 py-1 text-[11px] text-ink/70">
                    {g.title}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
