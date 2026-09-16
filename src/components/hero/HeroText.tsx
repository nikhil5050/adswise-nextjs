"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const LINES = ["WE MAKE", "BRANDS", "IMPOSSIBLE", "TO IGNORE."];

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const lines = gsap.utils.toArray<HTMLElement>(".hero-line", ref.current);
      if (reducedMotion) {
        gsap.set(lines, { yPercent: 0, opacity: 1 });
        return;
      }
      gsap.fromTo(
        lines,
        { yPercent: 110, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 1.2, ease: "expo.out", stagger: 0.1, delay: 0.4 }
      );
      gsap.fromTo(
        ".hero-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out", delay: 1.1 }
      );
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  return (
    <div ref={ref} className="relative z-10 flex flex-col gap-6">
      <h1 className="font-display text-[13vw] leading-[0.9] tracking-tightest text-ink md:text-[7.5vw]">
        {LINES.map((line) => (
          <span key={line} className="block overflow-hidden">
            <span className="hero-line block">{line}</span>
          </span>
        ))}
      </h1>
      <p className="hero-sub max-w-md text-sm uppercase tracking-[0.3em] text-muted md:text-base">
        A Strategy-First Digital Marketing Agency — Pune
      </p>
    </div>
  );
}
