"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Logo = { src: string; alt: string };

const logos: Logo[] = [
  { src: "/logos/clients/suncreast-financials.png", alt: "Suncreast Financials" },
  { src: "/logos/clients/dtk-footwear.png", alt: "DTK Footwear" },
  { src: "/logos/clients/cherish-derma-clinic.png", alt: "Cherish Derma Clinic" },
  { src: "/logos/logo8.jpg", alt: "Client logo" },
  { src: "/logos/vylore.png", alt: "Silver Jewellery" },
  { src: "/logos/client.jpg", alt: "Client logo" },
  { src: "/logos/nivastu.jpeg", alt: "Nivastu" },
  { src: "/logos/theformales.jpeg", alt: "The Formales" },
  { src: "/logos/PROFIT%20TETRA%20Final.jpg", alt: "Profit Tetra" },
  { src: "/logos/oraa%20logo.jpeg", alt: "Oraa Stay" },
  { src: "/logos/logoset.png", alt: "SET" },
  { src: "/logos/Kalpasi Solar.png", alt: "Solar" },
  { src: "/logos/spacethemupp.png", alt: "Space Them upp" },

];

const COLUMNS = 3;

export default function ClientsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  // Fade the logo wall in once, the first time it scrolls into view
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="clients">
      <div className="wrap-wide clients-grid">
        <div ref={ref} className={`clients-wall${visible ? " is-visible" : ""}`}>
          {Array.from({ length: COLUMNS }, (_, col) => {
            // Start each column at a different logo so rows don't line up
            const offset = Math.round((col * logos.length) / COLUMNS);
            const column = [...logos.slice(offset), ...logos.slice(0, offset)];
            return (
              <div key={col} className="clients-col">
                <div className="clients-track" style={{ animationDuration: `${22 + col * 5}s` }}>
                  {/* Rendered twice so the -50% loop is seamless */}
                  {[...column, ...column].map((logo, i) => (
                    <div
                      key={`${col}-${i}`}
                      className="clients-card"
                      style={{ transitionDelay: `${(i % column.length) * 60}ms` }}
                      aria-hidden={i >= column.length || undefined}
                    >
                      <Image src={logo.src} alt={logo.alt} fill sizes="160px" />
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="clients-copy">
          <p className="label">Our clients</p>
          <h2 className="h-l" style={{ marginTop: 8 }}>
            Brands that <span className="lime">trust us.</span>
          </h2>
          <p className="clients-lead">Powering growth for businesses across industries.</p>
          <p>
            At Adswise Marketing, we believe every brand has a distinct growth path, and our
            mission is to architect that growth with precision-driven strategies. We blend deep
            market intelligence and sharp creative thinking.
          </p>
          <p>
            Our approach integrates <strong>SEO, design, and analytics</strong> into a single,
            structured growth system. This ensures your brand doesn&apos;t just attract attention,
            but earns trust.
          </p>
          <Link href="/contact" className="btn" style={{ marginTop: 12 }}>
            Partner with us
          </Link>
        </div>
      </div>
    </section>
  );
}
