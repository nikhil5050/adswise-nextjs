"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

type Props = {
  text: string;
  // Words drawn in white once lit, the rest settle to silver
  highlight?: string[];
};

export default function ScrollFillText({ text, highlight = [] }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const words = text.split(" ");
  const strong = new Set(highlight.map((w) => w.toLowerCase()));

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;
      gsap.fromTo(
        ref.current.querySelectorAll(".sf-word"),
        { color: "rgba(255,255,255,0.14)" },
        {
          color: (_i: number, el: HTMLElement) => (el.dataset.hl ? "#D7FF00" : "#FFFFFF"),
          ease: "none",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 60%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  return (
    <div ref={ref} className={`sf-track${reducedMotion ? " is-static" : ""}`}>
      <div className="sf-stick">
        <p className="scroll-fill" aria-label={text}>
          {words.map((w, i) => {
            const hl = strong.has(w.toLowerCase().replace(/[^\w]/g, ""));
            return (
              <span
                key={i}
                aria-hidden="true"
                className="sf-word"
                data-hl={hl ? "1" : undefined}
                style={reducedMotion ? { color: hl ? "#D7FF00" : "#FFFFFF" } : undefined}
              >
                {w}{" "}
              </span>
            );
          })}
        </p>
      </div>
    </div>
  );
}
