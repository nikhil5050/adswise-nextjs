import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <div className="bg-background px-6 pb-32 pt-40 md:px-10 md:pt-52">
      <div className="mx-auto max-w-3xl">
        <p className="text-xs uppercase tracking-[0.3em] text-growth">404</p>
        <h1 className="mt-6 font-display text-4xl leading-tight text-ink md:text-6xl">This page doesn&apos;t exist.</h1>
        <p className="mt-6 text-lg text-muted">The link may be old or mistyped. These pages are a good place to start:</p>
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { href: "/", label: "Home" },
            { href: "/services", label: "Services" },
            { href: "/industry", label: "Industries" },
            { href: "/case-studies", label: "Case Studies" },
            { href: "/contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-full border border-growth/25 px-4 py-2 text-sm text-ink/80 transition-colors hover:border-growth hover:text-growth"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
