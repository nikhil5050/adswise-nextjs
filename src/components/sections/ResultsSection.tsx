"use client";

import dynamic from "next/dynamic";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { stats } from "@/data/stats";

const PixelBlast = dynamic(() => import("@/components/three/PixelBlast"), { ssr: false });

export default function ResultsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      const values = gsap.utils.toArray<HTMLElement>(".stat-value", sectionRef.current!);
      values.forEach((el) => {
        const target = Number(el.dataset.value);
        const counter = { value: 0 };
        gsap.to(counter, {
          value: target,
          duration: reducedMotion ? 0 : 1.8,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.textContent = Math.round(counter.value).toString();
          },
        });
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-background px-6 py-28 md:px-10 md:py-40">
      {!reducedMotion && (
        <div className="absolute inset-0 opacity-30">
          <PixelBlast variant="circle" color="#A8C900" pixelSize={4} patternDensity={1.1} liquid={false} />
        </div>
      )}
      <div className="relative mx-auto max-w-6xl">
        <p className="mb-14 text-xs uppercase tracking-[0.3em] text-growth">By The Numbers</p>
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-5xl text-ink md:text-6xl">
                <span className="stat-value" data-value={stat.value}>
                  0
                </span>
                {stat.suffix}
              </p>
              <p className="mt-2 text-xs uppercase tracking-widest text-muted">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
