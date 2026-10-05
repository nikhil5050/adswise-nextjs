import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export interface RelatedLink {
  href: string;
  label: string;
  description?: string;
}

/** Internal-link block: cards when links carry descriptions, pills otherwise. */
export default function RelatedLinks({
  title,
  links,
  surface = false,
}: {
  title: string;
  links: RelatedLink[];
  surface?: boolean;
}) {
  if (links.length === 0) return null;
  const asCards = links.some((l) => l.description);

  return (
    <section className={`${surface ? "bg-surface" : "border-t border-ink/10"} px-6 py-20 md:px-10 md:py-24`}>
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">{title}</h2>
        {asCards ? (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="glow-card group rounded-2xl border border-ink/10 p-6 transition-colors hover:border-growth/40 hover:bg-raised"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-lg text-ink transition-colors group-hover:text-growth">
                    {link.label}
                  </h3>
                  <ArrowUpRight size={18} className="shrink-0 text-muted transition-colors group-hover:text-growth" />
                </div>
                {link.description && <p className="mt-2 text-sm text-muted">{link.description}</p>}
              </Link>
            ))}
          </div>
        ) : (
          <div className="flex flex-wrap gap-3">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full border border-growth/25 px-4 py-2 text-sm text-ink/80 transition-colors hover:border-growth hover:text-growth"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
