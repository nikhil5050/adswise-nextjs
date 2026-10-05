"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import * as Icons from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { differentiators } from "@/data/about";

export default function WhyAdswiseSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".why-card", sectionRef.current!);
      gsap.fromTo(
        cards,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-surface px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-14 text-xs uppercase tracking-[0.3em] text-growth">Why AdsWise</p>
        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
          {differentiators.map((item) => {
            const Icon = (Icons as unknown as Record<string, Icons.LucideIcon>)[item.icon] ?? Icons.Sparkles;
            return (
              <div key={item.title} className="why-card bg-surface p-8 md:p-10">
                <Icon className="text-growth" size={28} strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl text-ink">{item.title}</h3>
                <p className="mt-3 text-sm text-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
