"use client";

import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils/cn";
import { industries } from "@/data/industries";

export default function IndustriesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="relative bg-surface px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-14 text-xs uppercase tracking-[0.3em] text-growth">Industries We Grow</p>

        <div className="flex flex-col md:flex-row md:gap-16">
          <div className="flex flex-col md:w-1/2">
            {industries.map((industry, i) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "border-b border-ink/10 py-6 font-display text-3xl uppercase transition-colors duration-300 md:text-5xl",
                  active === i ? "text-growth" : "text-ink/50 hover:text-ink"
                )}
              >
                {industry.title}
              </Link>
            ))}
          </div>

          <div className="mt-10 flex md:mt-0 md:w-1/2 md:items-center">
            <div key={active} className="animate-[fadein_0.5s_ease]">
              <p className="text-sm text-muted md:text-base">{industries[active].shortDescription}</p>
              <ul className="mt-6 space-y-3">
                {industries[active].solutions.slice(0, 3).map((solution) => (
                  <li key={solution.title} className="text-sm text-ink/80">
                    <span className="text-growth">— </span>
                    {solution.title}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadein {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
