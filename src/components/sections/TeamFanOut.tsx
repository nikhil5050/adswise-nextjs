"use client";

import { useRef, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { leadership, type Leader } from "@/data/team";

// Side circles are 86% of the centre circle. Sliding a side wrapper by 117% of its own width
// leaves a small gap between it and the centre circle.
const SIDE_SHIFT = 117;

function Person({ person, side }: { person: Leader; side: "left" | "center" | "right" }) {
  const isCenter = side === "center";
  return (
    <div
      className={`tf-person tf-${side} ${isCenter ? "relative z-[2] mx-auto" : "absolute left-1/2 top-0 z-[1] opacity-0"}`}
      style={{
        width: isCenter ? "var(--s)" : "var(--ss)",
        ...(isCenter ? {} : { marginLeft: "calc(var(--ss) / -2)", marginTop: "calc((var(--s) - var(--ss)) / 2)" }),
      }}
    >
      <div
        role="img"
        aria-label={person.name}
        className={`tf-circle aspect-square w-full rounded-full bg-no-repeat ${
          isCenter
            ? "border-4 border-growth shadow-[0_0_60px_-6px_rgba(215,255,0,0.55)]"
            : "border-[3px] border-ink/80 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.9)]"
        }`}
        style={{
          backgroundImage: `url("${encodeURI(person.image)}")`,
          backgroundSize: person.focus.size,
          backgroundPosition: person.focus.position,
        }}
      />
      {/* Text block is as wide as the centre circle, centred under this circle */}
      <div className="tf-text mt-5 text-center opacity-0" style={{ width: "var(--s)", marginLeft: "calc((100% - var(--s)) / 2)" }}>
        <h3
          className={`font-display font-semibold uppercase tracking-[0.04em] ${
            isCenter ? "text-sm text-growth sm:text-lg" : "text-xs text-ink sm:text-base"
          }`}
        >
          {person.name}
        </h3>
        <p className="mt-1 text-[11px] text-muted sm:text-sm">{person.role}</p>
        <ul className="mt-3 hidden space-y-1 text-xs text-muted sm:block">
          {person.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function TeamFanOut() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      if (reducedMotion) {
        gsap.set(".tf-left", { xPercent: -SIDE_SHIFT, opacity: 1, scale: 1 });
        gsap.set(".tf-right", { xPercent: SIDE_SHIFT, opacity: 1, scale: 1 });
        gsap.set(".tf-text", { opacity: 1, y: 0 });
        return;
      }

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: 0.8 },
      });

      // 1. Centre portrait settles in
      tl.fromTo(".tf-center .tf-circle", { scale: 0.88 }, { scale: 1, duration: 0.3, ease: "power2.out" }, 0);
      // 2. Side portraits slide out from behind the centre one
      tl.fromTo(".tf-left", { xPercent: 0, scale: 0.72 }, { xPercent: -SIDE_SHIFT, scale: 1, duration: 1, ease: "power3.out" }, 0.15);
      tl.fromTo(".tf-right", { xPercent: 0, scale: 0.72 }, { xPercent: SIDE_SHIFT, scale: 1, duration: 1, ease: "power3.out" }, 0.15);
      tl.fromTo([".tf-left", ".tf-right"], { opacity: 0 }, { opacity: 1, duration: 0.25, ease: "none" }, 0.15);
      // 3. Names and roles rise in, left to right
      tl.fromTo(".tf-text", { y: 28, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, stagger: 0.12, ease: "power2.out" }, 0.85);
      // Hold the finished layout for the last stretch of scrolling
      tl.to({}, { duration: 0.4 });
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  return (
    <section ref={ref} className="tf-sec relative" style={{ height: reducedMotion ? "auto" : "240vh" }}>
      <div
        className={`${reducedMotion ? "py-20 md:py-28" : "sticky top-0 h-screen"} flex flex-col items-center justify-center overflow-hidden px-4`}
      >
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 h-[min(720px,120vw)] w-[min(720px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,0,0.12),transparent_65%)]"
        />
        <p className="relative text-xs uppercase tracking-[0.3em] text-growth">The People Behind AdsWise</p>

        <div
          className="relative mt-12 w-full md:mt-16"
          style={{ "--s": "clamp(120px, 28vw, 280px)", "--ss": "calc(var(--s) * 0.86)" } as CSSProperties}
        >
          <Person person={leadership.left} side="left" />
          <Person person={leadership.center} side="center" />
          <Person person={leadership.right} side="right" />
        </div>
      </div>
    </section>
  );
}
