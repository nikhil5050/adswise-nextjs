"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import { IndustriesMenu, MobileMenuSections, ServicesMenu } from "@/components/layout/NavMenus";

type Dropdown = "services" | "industries";

const LINKS_BEFORE = [{ label: "Home", href: "/" }];
const LINKS_AFTER = [
  { label: "About", href: "/gauravjagtap-about" },
  { label: "Contact", href: "/contact" },
];

const DROPDOWNS: { id: Dropdown; label: string; match: (path: string) => boolean }[] = [
  { id: "services", label: "Services", match: (p) => p.startsWith("/services") },
  { id: "industries", label: "Industries", match: (p) => p.startsWith("/industry") || p.startsWith("/industries") },
];

const linkClass = "text-sm uppercase tracking-widest text-muted transition-colors hover:text-ink";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState<Dropdown | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setDropdown(null);
  }, [pathname]);

  // Close desktop dropdowns on outside click or Escape.
  useEffect(() => {
    if (!dropdown) return;
    const onPointer = (e: PointerEvent) => {
      if (!navRef.current?.contains(e.target as Node)) setDropdown(null);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setDropdown(null);
    };
    document.addEventListener("pointerdown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdown]);

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

  const closeAll = () => {
    setDropdown(null);
    setOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled || dropdown ? "border-b border-ink/10 bg-background/80 backdrop-blur-md" : "bg-transparent"
      )}
    >
      <nav ref={navRef} className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/logo.png" alt="AdsWise Marketing" width={32} height={32} />
          <span className="font-display text-lg tracking-wide text-ink"> <span className="font-bold text-growth">Ads</span>Wise</span>
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {LINKS_BEFORE.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          {DROPDOWNS.map((d) => (
            <button
              key={d.id}
              type="button"
              aria-expanded={dropdown === d.id}
              aria-controls={`${d.id}-menu`}
              onClick={() => setDropdown((cur) => (cur === d.id ? null : d.id))}
              className={cn(
                linkClass,
                "flex items-center gap-1",
                (dropdown === d.id || d.match(pathname)) && "text-ink"
              )}
            >
              {d.label}
              <ChevronDown size={14} className={cn("transition-transform duration-200", dropdown === d.id && "rotate-180")} />
            </button>
          ))}
          {LINKS_AFTER.map((link) => (
            <Link key={link.href} href={link.href} className={linkClass}>
              {link.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="rounded-full border border-growth/30 px-6 py-2.5 text-sm uppercase tracking-widest text-ink transition-colors hover:border-growth hover:text-growth"
          >
            Let&apos;s Talk
          </Link>
        </div>

        <div className="hidden md:block">
          <ServicesMenu open={dropdown === "services"} onNavigate={closeAll} />
          <IndustriesMenu open={dropdown === "industries"} onNavigate={closeAll} />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="relative z-10 text-ink md:hidden"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      <div
        ref={menuRef}
        data-lenis-prevent
        className="fixed inset-0 top-0 hidden flex-col gap-6 overflow-y-auto bg-background px-8 pb-16 pt-28"
        style={{ clipPath: "inset(0% 0% 100% 0%)" }}
      >
        {LINKS_BEFORE.map((link) => (
          <div key={link.href} className="overflow-hidden">
            <Link href={link.href} onClick={closeAll} className="mobile-nav-link block font-display text-4xl text-ink">
              {link.label}
            </Link>
          </div>
        ))}
        <MobileMenuSections onNavigate={closeAll} />
        {LINKS_AFTER.map((link) => (
          <div key={link.href} className="overflow-hidden">
            <Link href={link.href} onClick={closeAll} className="mobile-nav-link block font-display text-4xl text-ink">
              {link.label}
            </Link>
          </div>
        ))}
        <div className="overflow-hidden pt-4">
          <Link href="/contact" onClick={closeAll} className="mobile-nav-link block text-sm uppercase tracking-widest text-growth">
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </header>
  );
}
