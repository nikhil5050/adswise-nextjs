"use client";

import { useRef } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import LogoMarquee from "./LogoMarquee";

const WA_LINK = "https://wa.me/919730266648";

const PROOF = [
  { value: "5.0", label: "Google rating" },
  { value: "50+", label: "brands marketed" },
  { value: "5+ yrs", label: "in business" },
];

export default function HeroText() {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current) return;
      const items = gsap.utils.toArray<HTMLElement>(".hero-item", ref.current);
      if (reducedMotion) {
        gsap.set(items, { y: 0, opacity: 1 });
        return;
      }
      gsap.fromTo(
        items,
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "expo.out",
          stagger: 0.12,
          delay: 0.3,
        },
      );
    },
    { scope: ref, dependencies: [reducedMotion] },
  );

  return (
    <div ref={ref} className="flex flex-col items-center">
      <p className="hero-item mt-1 text-[clamp(24px,2vw,24px)] font-small tracking-[-0.02em] text-ink">
        <span className="text-growth">Ads</span>Wise <span className="text-growth">Marketing</span> Company in Pune, India
      </p>
      <h1 className="hero-item text-[clamp(38px,6vw,68px)] leading-[1.05] tracking-[-0.02em] text-ink font-display font-semibold">
       Take Your Business to More Customers
      </h1>
      
      <p className="hero-item mx-auto mt-[18px] max-w-[640px] text-[19px] leading-[1.5] text-muted">
        We manage your online ads, social media, Google visibility and website to help customers find your business, understand what you offer and contact you. We serve businesses across India and internationally.
      </p>
      <div className="hero-item mt-[30px] flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/contact"
          className="inline-block rounded-full bg-growth px-[26px] py-3.5 text-base font-semibold text-background shadow-[0_10px_30px_rgba(215,255,0,0.25)] transition-transform duration-300 hover:scale-[1.03] hover:opacity-90"
        >
          Book a free growth audit
        </Link>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="border-b border-current pb-0.5 font-semibold text-growth transition-colors hover:text-ink"
        >
          Chat on WhatsApp
        </a>
      </div>
      <div className="hero-item mt-[50px] w-full">
        <p className="mb-5 text-[13px] uppercase tracking-[0.12em] text-muted">
          Trusted by brands across India
        </p>
        <LogoMarquee />
      </div>
      <div className="hero-item mt-[50px] flex flex-wrap justify-center gap-10">
        {PROOF.map(({ value, label }) => (
          <div key={label} className="text-center">
            <strong className="block text-2xl font-bold text-ink">
              {value}
            </strong>
            <span className="text-[13px] text-muted">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
