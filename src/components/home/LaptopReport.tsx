"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const KPIS = [
  { label: "Cost per customer", value: 6000, prefix: "₹", delta: "18% lower vs Aug", good: true },
  { label: "Qualified leads", value: 412, prefix: "", delta: "22% higher", good: true },
  { label: "Site visits booked", value: 38, prefix: "", delta: "31% higher", good: true },
];

// Cost per customer, last six months (lower is better)
const BARS = [
  { m: "Apr", v: 100 },
  { m: "May", v: 92 },
  { m: "Jun", v: 88 },
  { m: "Jul", v: 79 },
  { m: "Aug", v: 72 },
  { m: "Sep", v: 59 },
];

function fmt(n: number, prefix: string) {
  return prefix + Math.round(n).toLocaleString("en-IN");
}

export default function LaptopReport() {
  const ref = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;
      const q = gsap.utils.selector(ref);
      const nums = q<HTMLElement>(".kpi-num");

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.6,
        },
      });

      tl.fromTo(".lap-intro", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.15 }, 0)
        .fromTo(".laptop", { scale: 0.82, y: 60 }, { scale: 1, y: 0, duration: 0.5 }, 0)
        .fromTo(".lap-lid", { rotateX: -92 }, { rotateX: 0, duration: 0.5, ease: "power1.out" }, 0)
        .fromTo(".lap-glow", { opacity: 0 }, { opacity: 1, duration: 0.2 }, 0.38)
        .fromTo(".lap-ui", { opacity: 0 }, { opacity: 1, duration: 0.15 }, 0.45)
        .fromTo(
          ".lap-bar i",
          { scaleY: 0 },
          { scaleY: 1, duration: 0.3, stagger: 0.03, ease: "power2.out" },
          0.55
        );

      KPIS.forEach((k, i) => {
        const counter = { v: 0 };
        tl.to(
          counter,
          {
            v: k.value,
            duration: 0.3,
            ease: "power2.out",
            onUpdate: () => {
              if (nums[i]) nums[i].textContent = fmt(counter.v, k.prefix);
            },
          },
          0.52 + i * 0.05
        );
      });

      tl.to({}, { duration: 0.15 }); // hold the finished report on screen
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  return (
    <section ref={ref} className={`surface center lap-sec${reducedMotion ? " is-static" : ""}`}>
      <div className="lap-stick">
        <div className="wrap-wide lap-intro">
          <p className="label">Monthly growth report</p>
          <h2 className="h-l" style={{ marginTop: 8 }}>
            Every campaign ends in one number.
            <br />
            <span className="silver">What a customer cost you, and how to make it cheaper.</span>
          </h2>
        </div>

        <div className="laptop" aria-label="Example monthly growth report on a laptop">
          <div className="lap-lid">
            <div className="lap-screen">
              <div className="lap-glow" />
              <div className="lap-ui">
                <div className="lap-head">
                  <b>Adswise · September report</b>
                  <span>Real estate · Wakad project</span>
                </div>
                <div className="lap-kpis">
                  {KPIS.map((k) => (
                    <div key={k.label}>
                      <small>{k.label}</small>
                      <strong className="kpi-num">{fmt(k.value, k.prefix)}</strong>
                      <em className={k.good ? "up" : "down"}>{k.delta}</em>
                    </div>
                  ))}
                </div>
                <div className="lap-chart">
                  <small>Cost per customer, last 6 months</small>
                  <div className="lap-bars">
                    {BARS.map((b, i) => (
                      <div className="lap-bar" key={b.m}>
                        <i
                          style={{ height: `${b.v}%` }}
                          className={i === BARS.length - 1 ? "now" : ""}
                        />
                        <span>{b.m}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lap-base">
            <span />
          </div>
        </div>
      </div>
    </section>
  );
}
