"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function ScrollSpotlight() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const primaryRef = useRef<HTMLDivElement>(null);
  const secondaryRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (reducedMotion || !primaryRef.current || !secondaryRef.current) return;

      gsap.fromTo(
        primaryRef.current,
        { yPercent: -20, xPercent: -60 },
        {
          yPercent: 120,
          xPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );

      gsap.fromTo(
        secondaryRef.current,
        { yPercent: 10, xPercent: 10 },
        {
          yPercent: 140,
          xPercent: -70,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: wrapperRef, dependencies: [reducedMotion] }
  );

  return (
    <div ref={wrapperRef} aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden mix-blend-screen">
      <div ref={primaryRef} className="absolute left-1/2 top-0 h-[70vw] w-[70vw] max-h-[900px] max-w-[900px]">
        <div
          className="h-full w-full animate-[spotlight-pulse_8s_ease-in-out_infinite] rounded-full blur-[140px]"
          style={{ background: "radial-gradient(circle, #ff3b3b 0%, rgba(255,59,59,0) 70%)" }}
        />
      </div>
      <div ref={secondaryRef} className="absolute left-1/2 top-1/3 h-[40vw] w-[40vw] max-h-[560px] max-w-[560px]">
        <div
          className="h-full w-full animate-[spotlight-pulse_10s_ease-in-out_infinite_1.5s] rounded-full blur-[120px]"
          style={{ background: "radial-gradient(circle, #ff6b57 0%, rgba(255,107,87,0) 70%)" }}
        />
      </div>

      <style>{`
        @keyframes spotlight-pulse {
          0%, 100% { opacity: 0.22; transform: scale(1); }
          50% { opacity: 0.36; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
}
