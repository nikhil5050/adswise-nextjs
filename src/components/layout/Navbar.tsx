"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useGSAP } from "@gsap/react";
import { ChevronDown, Mail, Menu, MessageCircle, Phone, X } from "lucide-react";
import { gsap } from "@/lib/animations/gsap";
import { cn } from "@/lib/utils/cn";
import { IndustriesMenu, MobileMenuSections, ServicesMenu } from "@/components/layout/NavMenus";
import { company } from "@/data/company";

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

  // While the mobile menu is open: lock page scroll, close on Escape or when resized to desktop.
  useEffect(() => {
    if (!open) return;
    const html = document.documentElement;
    const prevOverflow = html.style.overflow;
    html.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    const desktop = window.matchMedia("(min-width: 768px)");
    const onResize = () => desktop.matches && setOpen(false);
    document.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onResize);
    return () => {
      html.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onResize);
    };
  }, [open]);

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
    <>
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        open
          ? "border-b border-ink/10 bg-background"
          : scrolled || dropdown
            ? "border-b border-ink/10 bg-background/80 backdrop-blur-md"
            : "bg-transparent"
      )}
    >
      <nav ref={navRef} className="relative mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-10 md:py-5">
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
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="-mr-2 flex h-11 w-11 items-center justify-center rounded-full text-ink transition-colors hover:bg-ink/[0.06] md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>

    {/* Mobile menu lives outside <header>: the header's backdrop-filter would otherwise
        confine this fixed overlay to the header strip once the page is scrolled. */}
    <div
      id="mobile-menu"
      ref={menuRef}
      data-lenis-prevent
      className="fixed inset-0 z-40 hidden flex-col overflow-y-auto overscroll-contain bg-background px-5 pb-10 pt-24 md:hidden"
      style={{ clipPath: "inset(0% 0% 100% 0%)" }}
    >
      <nav aria-label="Mobile" className="flex flex-col divide-y divide-ink/10 border-b border-ink/10">
        {LINKS_BEFORE.map((link) => (
          <div key={link.href} className="overflow-hidden">
            <Link
              href={link.href}
              onClick={closeAll}
              className={cn("mobile-nav-link block py-4 font-display text-3xl", pathname === link.href ? "text-growth" : "text-ink")}
            >
              {link.label}
            </Link>
          </div>
        ))}
        <MobileMenuSections onNavigate={closeAll} />
        {LINKS_AFTER.map((link) => (
          <div key={link.href} className="overflow-hidden">
            <Link
              href={link.href}
              onClick={closeAll}
              className={cn("mobile-nav-link block py-4 font-display text-3xl", pathname === link.href ? "text-growth" : "text-ink")}
            >
              {link.label}
            </Link>
          </div>
        ))}
      </nav>

      <div className="mt-8 overflow-hidden">
        <Link
          href="/contact"
          onClick={closeAll}
          className="mobile-nav-link block rounded-full bg-growth py-4 text-center text-sm font-semibold uppercase tracking-widest text-background"
        >
          Let&apos;s Talk
        </Link>
      </div>

      <div className="mt-8 grid grid-cols-3 gap-2 text-center text-xs text-muted">
        <a href={company.phoneHref} className="flex flex-col items-center gap-2 rounded-2xl border border-ink/10 py-4 hover:text-growth">
          <Phone size={18} className="text-growth" />
          Call
        </a>
        <a
          href={`https://wa.me/${company.phone.replace(/\D/g, "")}`}
          target="_blank"
          rel="noreferrer"
          className="flex flex-col items-center gap-2 rounded-2xl border border-ink/10 py-4 hover:text-growth"
        >
          <MessageCircle size={18} className="text-growth" />
          WhatsApp
        </a>
        <a href={`mailto:${company.email}`} className="flex flex-col items-center gap-2 rounded-2xl border border-ink/10 py-4 hover:text-growth">
          <Mail size={18} className="text-growth" />
          Email
        </a>
      </div>
    </div>
    </>
  );
}
