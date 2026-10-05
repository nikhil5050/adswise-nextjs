"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export default function Preloader() {
  const [done, setDone] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = done ? "" : "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [done]);

  useGSAP(() => {
    if (reducedMotion) {
      setDone(true);
      return;
    }

    const counter = { value: 0 };
    const tl = gsap.timeline({ onComplete: () => setDone(true) });

    tl.to(counter, {
      value: 100,
      duration: 1.3,
      ease: "power2.inOut",
      onUpdate: () => {
        if (countRef.current) countRef.current.textContent = String(Math.round(counter.value));
        if (barRef.current) barRef.current.style.width = `${counter.value}%`;
      },
    }).to(wrapperRef.current, {
      yPercent: -100,
      duration: 0.7,
      ease: "expo.inOut",
      delay: 0.1,
    });
  }, [reducedMotion]);

  if (done) return null;

  return (
    <div
      ref={wrapperRef}
      className="fixed inset-0 z-[1000] flex flex-col items-center justify-center gap-8 bg-background"
    >
      <Image src="/images/logo.png" alt="AdsWise Marketing" width={64} height={64} priority />
      <div className="flex items-baseline gap-2 font-display text-sm uppercase tracking-[0.3em] text-growth">
        <span ref={countRef}>0</span>
        <span>%</span>
      </div>
      <div className="h-px w-40 overflow-hidden bg-growth/15">
        <div ref={barRef} className="h-full w-0 bg-growth" />
      </div>
    </div>
  );
}
