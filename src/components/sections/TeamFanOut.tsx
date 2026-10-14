"use client";

import { useRef, type CSSProperties } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { leadership, type Leader } from "@/data/team";

// Side circles are 86% of the centre circle. Sliding a side wrapper by 117% of its own width
// leaves a small gap between it and the centre circle.
const SIDE_SHIFT = 117;
const DESKTOP = "(min-width: 768px)";

function portraitStyle(person: Leader): CSSProperties {
  return {
    backgroundImage: `url("${encodeURI(person.image)}")`,
    backgroundSize: person.focus.size,
    backgroundPosition: person.focus.position,
  };
}

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
        style={portraitStyle(person)}
      />
      {/* Text block is as wide as the centre circle, centred under this circle */}
      <div className="tf-text mt-5 text-center opacity-0" style={{ width: "var(--s)", marginLeft: "calc((100% - var(--s)) / 2)" }}>
        <h3
          className={`font-display font-semibold uppercase tracking-[0.04em] ${
            isCenter ? "text-lg text-growth" : "text-base text-ink"
          }`}
        >
          {person.name}
        </h3>
        <p className="mt-1 text-sm text-muted">{person.role}</p>
        <ul className="mt-3 space-y-1 text-xs text-muted">
          {person.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/** Phone layout: founder on top, the two department heads side by side, all details visible. */
function MobilePerson({ person, featured = false }: { person: Leader; featured?: boolean }) {
  return (
    <div className="tf-m-item flex flex-col items-center text-center">
      <div
        role="img"
        aria-label={person.name}
        className={`aspect-square rounded-full bg-no-repeat ${
          featured
            ? "w-40 border-4 border-growth shadow-[0_0_50px_-8px_rgba(215,255,0,0.55)]"
            : "w-28 border-[3px] border-ink/80"
        }`}
        style={portraitStyle(person)}
      />
      <h3
        className={`mt-4 font-display font-semibold uppercase tracking-[0.04em] ${
          featured ? "text-lg text-growth" : "text-sm text-ink"
        }`}
      >
        {person.name}
      </h3>
      <p className="mt-1 text-xs text-muted">{person.role}</p>
      <ul className="mt-3 flex flex-wrap justify-center gap-1.5">
        {person.points.map((p) => (
          <li key={p} className="rounded-full border border-ink/10 px-2.5 py-1 text-[11px] leading-tight text-ink/70">
            {p}
          </li>
        ))}
      </ul>
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

      const mm = gsap.matchMedia();

      mm.add(DESKTOP, () => {
        const tl = gsap.timeline({
          scrollTrigger: { trigger: ".tf-desktop-track", start: "top top", end: "bottom bottom", scrub: 0.8 },
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
      });

      // Phones: a light reveal instead of a pinned scroll. `from` keeps items visible if JS never runs.
      mm.add("(max-width: 767px)", () => {
        gsap.from(".tf-m-item", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: ".tf-mobile", start: "top 80%" },
        });
      });

      return () => mm.revert();
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  return (
    <section ref={ref} className="tf-sec relative">
      {/* Desktop / tablet: pinned fan-out */}
      <div className="tf-desktop-track hidden md:block" style={{ height: reducedMotion ? "auto" : "240vh" }}>
        <div
          className={`${reducedMotion ? "py-28" : "sticky top-0 h-screen"} flex flex-col items-center justify-center overflow-hidden px-4`}
        >
          <span
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-1/2 h-[min(720px,120vw)] w-[min(720px,120vw)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,0,0.12),transparent_65%)]"
          />
          <p className="relative text-xs uppercase tracking-[0.3em] text-growth">The People Behind AdsWise</p>

          <div
            className="relative mt-16 w-full"
            style={{ "--s": "clamp(160px, 22vw, 280px)", "--ss": "calc(var(--s) * 0.86)" } as CSSProperties}
          >
            <Person person={leadership.left} side="left" />
            <Person person={leadership.center} side="center" />
            <Person person={leadership.right} side="right" />
          </div>
        </div>
      </div>

      {/* Phones */}
      <div className="tf-mobile relative overflow-hidden px-6 py-20 md:hidden">
        <span
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-40 h-[120vw] w-[120vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(215,255,0,0.12),transparent_65%)]"
        />
        <p className="relative text-center text-xs uppercase tracking-[0.3em] text-growth">The People Behind AdsWise</p>
        <div className="relative mt-10">
          <MobilePerson person={leadership.center} featured />
          <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-10">
            <MobilePerson person={leadership.left} />
            <MobilePerson person={leadership.right} />
          </div>
        </div>
      </div>
    </section>
  );
}
