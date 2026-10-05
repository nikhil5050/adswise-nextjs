"use client";

import { Fragment, useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";

interface RevealTextProps {
  lines: string[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p";
  stagger?: number;
  scrub?: boolean;
}

export default function RevealText({
  lines,
  className,
  lineClassName,
  as = "h2",
  stagger = 0.12,
  scrub = false,
}: RevealTextProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const reducedMotion = useReducedMotion();
  const Tag = as;

  useGSAP(
    () => {
      const targets = gsap.utils.toArray<HTMLElement>(".reveal-line-inner", containerRef.current!);
      if (reducedMotion) {
        gsap.set(targets, { yPercent: 0, opacity: 1 });
        return;
      }

      gsap.fromTo(
        targets,
        { yPercent: 110, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger,
          scrollTrigger: scrub
            ? undefined
            : {
                trigger: containerRef.current,
                start: "top 85%",
              },
        }
      );
    },
    { scope: containerRef, dependencies: [reducedMotion] }
  );

  // One heading element for all lines, so a multi-line title is a single h1/h2 to crawlers.
  // The space between lines keeps the text readable ("SYSTEMS, NOT SERVICES.") but is not rendered in flex layout.
  return (
    <Tag ref={containerRef} className={cn("flex flex-col gap-2", className)}>
      {lines.map((line, i) => (
        <Fragment key={i}>
          {i > 0 && " "}
          <span className="block overflow-hidden">
            <span className={cn("reveal-line-inner block", lineClassName)}>{line}</span>
          </span>
        </Fragment>
      ))}
    </Tag>
  );
}
