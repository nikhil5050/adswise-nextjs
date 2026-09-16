"use client";

import { useRef, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { strategicGrowthFramework } from "@/data/about";

export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
  }, []);

  useGSAP(
    () => {
      if (!isDesktop || reducedMotion || !trackRef.current || !sectionRef.current) return;

      const track = trackRef.current;
      const distance = track.scrollWidth - window.innerWidth;
      if (distance <= 0) return;

      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: () => `+=${distance}`,
          scrub: true,
          pin: true,
        },
      });

      return () => ScrollTrigger.getAll().forEach((t) => t.kill());
    },
    { scope: sectionRef, dependencies: [isDesktop, reducedMotion] }
  );

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-surface">
      <div className="px-6 pt-24 md:px-10">
        <p className="text-xs uppercase tracking-[0.3em] text-muted">How We Build Growth</p>
      </div>
      <div
        ref={trackRef}
        className="flex flex-col gap-10 px-6 py-16 md:flex-row md:items-stretch md:gap-6 md:px-10 md:py-24"
      >
        {strategicGrowthFramework.map((step) => (
          <div
            key={step.num}
            className="flex w-full shrink-0 flex-col justify-between rounded-2xl border border-white/10 bg-background/40 p-8 md:w-[420px] md:p-10"
          >
            <span className="font-display text-6xl text-moss">{step.num}</span>
            <div className="mt-10">
              <h3 className="font-display text-2xl text-ink md:text-3xl">{step.title}</h3>
              <p className="mt-4 text-sm text-muted">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
