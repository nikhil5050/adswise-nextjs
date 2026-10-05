"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { servicePackages } from "@/data/service-packages";
import { industryCategories, industrySegments } from "@/data/industry-categories";
import { cn } from "@/lib/utils/cn";

const panelBase =
  "absolute right-6 top-full z-50 mt-1 rounded-2xl border border-ink/10 bg-gradient-to-b from-background/[0.98] to-raised/[0.98] p-4 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-all duration-200 md:right-10";

function panelState(open: boolean) {
  return open
    ? "visible translate-y-0 opacity-100 pointer-events-auto"
    : "invisible -translate-y-2 opacity-0 pointer-events-none";
}

export function ServicesMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  return (
    <div
      id="services-menu"
      aria-label="Services and packages"
      className={cn(panelBase, "w-[min(760px,calc(100vw-48px))]", panelState(open))}
    >
      <div className="mb-2 flex items-center justify-between border-b border-ink/10 px-2 pb-3">
        <strong className="text-sm font-semibold text-ink">Services &amp; packages</strong>
        <span className="text-xs text-muted">{servicePackages.length} growth packages</span>
      </div>
      <div data-lenis-prevent className="grid max-h-[min(62vh,560px)] grid-cols-2 gap-1 overflow-y-auto pr-1">
        {servicePackages.map((pkg) => (
          <Link
            key={pkg.slug}
            href={`/services/${pkg.slug}`}
            onClick={onNavigate}
            className="rounded-xl border border-transparent px-3 py-2.5 transition-colors hover:border-ink/10 hover:bg-ink/[0.06]"
          >
            <b className="block text-[13px] font-semibold text-ink">{pkg.name}</b>
            <small className="mt-1 line-clamp-2 block text-[11px] leading-snug text-muted">{pkg.short}</small>
          </Link>
        ))}
      </div>
      <Link
        href="/services"
        onClick={onNavigate}
        className="mx-1 mt-2 block border-t border-ink/10 px-2 pt-3 text-xs font-semibold text-growth hover:text-ink"
      >
        Explore all services &amp; packages →
      </Link>
    </div>
  );
}

export function IndustriesMenu({ open, onNavigate }: { open: boolean; onNavigate: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div
      id="industries-menu"
      aria-label="Industry categories"
      className={cn(panelBase, "w-[min(900px,calc(100vw-48px))]", panelState(open))}
    >
      <div className="mb-3 flex items-center justify-between border-b border-ink/10 px-1 pb-3">
        <strong className="text-sm font-semibold text-ink">Industry categories</strong>
        <Link href="/industry" onClick={onNavigate} className="text-xs text-muted hover:text-ink">
          View all
        </Link>
      </div>
      <div data-lenis-prevent className="max-h-[min(62vh,560px)] overflow-y-auto pr-1">
        {industrySegments.map((segment) => (
          <div key={segment.id} className="mb-3 last:mb-0">
            <p className="px-2 pb-2 pt-1 text-[10px] uppercase tracking-[0.25em] text-growth">{segment.label}</p>
            <div className="grid grid-cols-3 items-start gap-1.5">
              {industryCategories
                .filter((c) => c.segment === segment.id)
                .map((category) => {
                  const isOpen = expanded === category.slug;
                  return (
                    <div
                      key={category.slug}
                      className={cn(
                        "overflow-hidden rounded-xl border border-transparent",
                        isOpen && "border-ink/10 bg-ink/[0.03]"
                      )}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : category.slug)}
                        className={cn(
                          "flex min-h-[42px] w-full items-center gap-2 px-3 py-2 text-left text-[13px] leading-tight text-ink/80 transition-colors hover:bg-ink/[0.06] hover:text-ink",
                          isOpen && "bg-ink/[0.06] text-ink"
                        )}
                      >
                        <span>{category.name}</span>
                        <span className="ml-auto whitespace-nowrap pl-2 text-[10px] text-muted">
                          {category.types.length} types
                        </span>
                        <ChevronDown
                          size={14}
                          className={cn("shrink-0 transition-transform duration-200", isOpen && "rotate-180")}
                        />
                      </button>
                      {isOpen && (
                        <div className="grid gap-0.5 px-2 pb-2 pt-1">
                          {category.types.map((type) => (
                            <Link
                              key={type.slug}
                              href={`/industry/${category.slug}/${type.slug}`}
                              onClick={onNavigate}
                              className="rounded-lg px-2 py-1.5 text-[11px] leading-snug text-ink/65 transition-colors hover:bg-ink/[0.06] hover:text-ink"
                            >
                              <span className="text-muted">{type.code}</span> — {type.name}
                            </Link>
                          ))}
                          <Link
                            href={`/industry/${category.slug}`}
                            onClick={onNavigate}
                            className="rounded-lg px-2 py-1.5 text-[11px] font-semibold text-growth hover:bg-ink/[0.06]"
                          >
                            View all {category.name} →
                          </Link>
                        </div>
                      )}
                    </div>
                  );
                })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Nested accordion used inside the full-screen mobile menu. */
export function MobileMenuSections({ onNavigate }: { onNavigate: () => void }) {
  const [section, setSection] = useState<"services" | "industries" | null>(null);
  const [category, setCategory] = useState<string | null>(null);

  const toggle = (s: "services" | "industries") => setSection((cur) => (cur === s ? null : s));

  return (
    <>
      <div className="overflow-hidden">
        <button
          type="button"
          aria-expanded={section === "services"}
          onClick={() => toggle("services")}
          className="mobile-nav-link flex w-full items-center justify-between font-display text-4xl text-ink"
        >
          Services
          <ChevronDown size={26} className={cn("transition-transform", section === "services" && "rotate-180")} />
        </button>
      </div>
      {section === "services" && (
        <div className="grid gap-1 border-l border-ink/10 pl-4">
          {servicePackages.map((pkg) => (
            <Link key={pkg.slug} href={`/services/${pkg.slug}`} onClick={onNavigate} className="py-1.5 text-base text-ink/80">
              {pkg.name}
            </Link>
          ))}
          <Link href="/services" onClick={onNavigate} className="py-1.5 text-sm text-growth">
            Explore all services →
          </Link>
        </div>
      )}

      <div className="overflow-hidden">
        <button
          type="button"
          aria-expanded={section === "industries"}
          onClick={() => toggle("industries")}
          className="mobile-nav-link flex w-full items-center justify-between font-display text-4xl text-ink"
        >
          Industries
          <ChevronDown size={26} className={cn("transition-transform", section === "industries" && "rotate-180")} />
        </button>
      </div>
      {section === "industries" && (
        <div className="grid gap-1 border-l border-ink/10 pl-4">
          {industryCategories.map((c) => {
            const isOpen = category === c.slug;
            return (
              <div key={c.slug}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => setCategory(isOpen ? null : c.slug)}
                  className="flex w-full items-center justify-between gap-3 py-1.5 text-left text-base text-ink/80"
                >
                  <span>{c.name}</span>
                  <ChevronDown size={16} className={cn("shrink-0 transition-transform", isOpen && "rotate-180")} />
                </button>
                {isOpen && (
                  <div className="grid gap-0.5 pb-2 pl-3">
                    {c.types.map((t) => (
                      <Link
                        key={t.slug}
                        href={`/industry/${c.slug}/${t.slug}`}
                        onClick={onNavigate}
                        className="py-1 text-sm text-muted"
                      >
                        {t.name}
                      </Link>
                    ))}
                    <Link href={`/industry/${c.slug}`} onClick={onNavigate} className="py-1 text-sm text-growth">
                      View all →
                    </Link>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
