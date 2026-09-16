"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { Menu, X } from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";

const NAV_LINKS = [
  { label: "Work", href: "/case-studies" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industry" },
  { label: "About", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useGSAP(
    () => {
      if (!menuRef.current) return;
      if (open) {
        gsap.set(menuRef.current, { display: "flex" });
        gsap.fromTo(
          menuRef.current,
          { clipPath: "inset(0% 0% 100% 0%)" },
          { clipPath: "inset(0% 0% 0% 0%)", duration: 0.7, ease: "expo.inOut" }
        );
        gsap.fromTo(
          ".mobile-nav-link",
          { yPercent: 100, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.6, stagger: 0.06, delay: 0.2, ease: "power3.out" }
        );
      } else {
        gsap.to(menuRef.current, {
          clipPath: "inset(0% 0% 100% 0%)",
          duration: 0.5,
          ease: "expo.inOut",
          onComplete: () => gsap.set(menuRef.current, { display: "none" }),
        });
      }
    },
    { dependencies: [open] }
  );

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "border-b border-white/10 bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="AdsWise Marketing" width={32} height={32} />
          <span className="font-display text-lg tracking-wide text-ink">AdsWise</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm uppercase tracking-widest text-muted transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-white/20 px-6 py-2.5 text-sm uppercase tracking-widest text-ink transition-colors hover:border-sand hover:text-sand"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        ref={menuRef}
        className="fixed inset-0 top-0 hidden flex-col justify-center gap-6 bg-background px-8"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {NAV_LINKS.map((link) => (
          <div key={link.href} className="overflow-hidden">
            <Link
              href={link.href}
              className="mobile-nav-link block font-display text-4xl text-ink"
            >
              {link.label}
            </Link>
          </div>
        ))}
        <div className="overflow-hidden pt-4">
          <Link href="/contact" className="mobile-nav-link block text-sm uppercase tracking-widest text-sand">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
