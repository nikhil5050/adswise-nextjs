"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const cards = [
  { cap: "Cost per customer.", sub: "The one number every report starts with." },
  { cap: "Reels that stop the scroll.", sub: "Scripted by us, shot by our in-house creators every week." },
  { cap: "Every enquiry answered in minutes.", sub: "WhatsApp follow-up, set up for you." },
  { cap: "Found first on Google.", sub: "Profile, reviews and local search, managed weekly." },
  { cap: "Websites built to convert.", sub: "Fast, clear, and every enquiry tracked." },
];

export default function HighlightsCarousel() {
  const ref = useRef<HTMLElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();
  const [idx, setIdx] = useState(0);
  // How far the track has to slide so the last card ends at the right edge
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!viewportRef.current || !trackRef.current) return;
      setDistance(Math.max(0, trackRef.current.scrollWidth - viewportRef.current.clientWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useGSAP(
    () => {
      if (!ref.current || !trackRef.current || reducedMotion || distance === 0) return;
      gsap.fromTo(
        trackRef.current,
        { x: 0 },
        {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
            onUpdate: (self) => setIdx(Math.round(self.progress * (cards.length - 1))),
          },
        }
      );
      // Section height just changed, so later scroll animations must re-measure
      ScrollTrigger.refresh();
    },
    { scope: ref, dependencies: [reducedMotion, distance] }
  );

  const pinned = !reducedMotion && distance > 0;

  // Pills jump the page to the scroll position that shows that card
  const goTo = (i: number) => {
    const el = ref.current;
    if (!el || !pinned) return;
    const top = el.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({ top: top + (distance * i) / (cards.length - 1), behavior: "smooth" });
  };

  return (
    <section
      ref={ref}
      className={`hl-sec${pinned ? "" : " is-static"}`}
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className="hl-stick">
        <div className="wrap-wide">
          <h2 className="h-l">Get the highlights.</h2>
          <div className="hl-viewport" ref={viewportRef}>
            <div className="hl-track" ref={trackRef}>
              {cards.map((c) => (
                <article className="hl-card" key={c.cap}>
                  <p className="cap">
                    {c.cap}
                    <span>{c.sub}</span>
                  </p>
                  <div className="visual" style={{ height: 160, background: "linear-gradient(160deg, rgba(215,255,0,.12), rgba(5,5,5,.4))", borderRadius: 16, marginTop: 16, overflow: "hidden" }}>
                    {/* Videos live in /public/highlights/, named after the caption */}
                    <video
                      src={encodeURI(`/highlights/${c.cap}.mp4`)}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      aria-label={c.cap}
                      style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
          {pinned && (
            <div className="hl-controls">
              <div className="pills" role="tablist" aria-label="Highlights">
                {cards.map((c, i) => (
                  <button
                    key={c.cap}
                    className={i === idx ? "active" : ""}
                    aria-label={`Highlight ${i + 1}`}
                    onClick={() => goTo(i)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
