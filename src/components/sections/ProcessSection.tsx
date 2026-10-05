"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { strategicGrowthFramework } from "@/data/about";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !trackRef.current || !sectionRef.current) return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const track = trackRef.current;
        const section = sectionRef.current;
        if (!track || !section) return;

        const getDistance = () => Math.max(0, track.scrollWidth - window.innerWidth);
        if (getDistance() <= 0) return;

        const tween = gsap.to(track, {
          x: () => -getDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: () => `+=${getDistance()}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        return () => tween.scrollTrigger?.kill();
      });

      const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

      return () => {
        cancelAnimationFrame(refreshId);
        mm.revert();
      };
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface">
      <div className="px-6 pt-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-growth">How We Build Growth</p>
      </div>
      <div
        ref={trackRef}
        className="flex flex-col gap-10 px-6 py-16 md:flex-row md:items-stretch md:gap-6 md:px-10 md:py-24"
      >
        {strategicGrowthFramework.map((step) => (
          <div
            key={step.num}
            className="glow-card group flex w-full shrink-0 flex-col overflow-hidden rounded-2xl border border-ink/10 bg-ink/[0.03] md:w-[420px]"
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden">
              <Image
                src={step.image}
                alt={step.title}
                fill
                sizes="(min-width: 768px) 420px, 100vw"
                className="object-cover transition-transform duration-700 ease-expo-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/10 to-transparent" />
              <span className="absolute bottom-4 left-6 font-display text-6xl text-growth">{step.num}</span>
            </div>
            <div className="flex flex-1 flex-col justify-between p-8 md:p-10">
              <div>
                <h3 className="font-display text-2xl text-ink md:text-3xl">{step.title}</h3>
                <p className="mt-4 text-sm text-muted">{step.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
