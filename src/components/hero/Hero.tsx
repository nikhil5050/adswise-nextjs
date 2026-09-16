"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { ChevronDown } from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import HeroScene from "./HeroScene";
import HeroText from "./HeroText";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!sectionRef.current || !contentRef.current || reducedMotion) return;

      gsap.to(contentRef.current, {
        scale: 0.85,
        opacity: 0,
        yPercent: -15,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: sectionRef, dependencies: [reducedMotion] }
  );

  return (
    <section ref={sectionRef} className="relative flex h-[100svh] items-center overflow-hidden bg-background">
      <HeroScene />
      <div ref={contentRef} className="mx-auto w-full max-w-7xl px-6 md:px-10">
        <HeroText />
      </div>
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted">
        <ChevronDown className="animate-bounce" size={22} />
      </div>
    </section>
  );
}
