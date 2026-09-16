"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import { ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { services } from "@/data/services";

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<number | null>(null);

  useGSAP(
    () => {
      const rows = gsap.utils.toArray<HTMLElement>(".service-row", sectionRef.current!);
      gsap.fromTo(
        rows,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.06,
          ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section ref={sectionRef} className="bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <p className="mb-14 text-xs uppercase tracking-[0.3em] text-muted">What We Do</p>
        <div className="border-t border-white/10">
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              data-cursor="VIEW"
              className="service-row group relative block border-b border-white/10 py-6 transition-colors md:py-8"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="flex items-center justify-between gap-6">
                <div className="flex items-baseline gap-6">
                  <span className="font-display text-sm text-muted">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-display text-2xl text-ink transition-colors group-hover:text-sand md:text-4xl">
                    {service.title}
                  </span>
                </div>
                <ArrowUpRight
                  className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-sand"
                  size={22}
                />
              </div>
              <div
                className="grid overflow-hidden transition-all duration-500 ease-expo-out"
                style={{ gridTemplateRows: active === i ? "1fr" : "0fr" }}
              >
                <div className="min-h-0">
                  <p className="max-w-xl pt-4 pl-0 text-sm text-muted md:pl-16">
                    {service.shortDescription}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
