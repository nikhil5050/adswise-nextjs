import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { company } from "@/data/company";

const COLUMNS = [
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/gauravjagtap-about" },
      { label: "Careers", href: "/career" },
      { label: "Contact", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
  {
    title: "Work",
    links: [
      { label: "Case Studies", href: "/case-studies" },
      { label: "Services", href: "/services" },
      { label: "Industries", href: "/industry" },
      { label: "Blog", href: "/blog" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "SEO Services", href: "/services/search-engine-optimization" },
      { label: "Performance Marketing", href: "/services/performance-marketing" },
      { label: "Social Media Marketing", href: "/services/social-media-marketing" },
      { label: "Website Development", href: "/services/website-development" },
      { label: "Brand Development", href: "/services/brand-development" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-ink/10 bg-background px-6 py-16 text-ink md:px-10">
      <div className="mx-auto flex max-w-7xl flex-col gap-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <Image src="/images/logo.png" alt="AdsWise Marketing" width={36} height={36} />
              <span className="font-display text-xl">AdsWise Marketing</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-muted">
              Creative advertising, performance marketing and digital experiences for brands
              that want to be impossible to ignore.
            </p>
            <p className="mt-3 text-sm text-muted">
              Founded by{" "}
              <Link href="/gauravjagtap-about" className="text-ink/80 transition-colors hover:text-growth">
                Gaurav Jagtap
              </Link>
              , Founder &amp; CEO.
            </p>
            <div className="mt-6 flex gap-4">
              <a href={company.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <Facebook size={18} className="text-muted transition-colors hover:text-growth" />
              </a>
              <a href={company.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <Instagram size={18} className="text-muted transition-colors hover:text-growth" />
              </a>
              <a href={company.social.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Linkedin size={18} className="text-muted transition-colors hover:text-growth" />
              </a>
            </div>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h3 className="text-xs uppercase tracking-widest text-muted">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-ink/80 transition-colors hover:text-growth">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-xs uppercase tracking-widest text-muted">Contact</h3>
            <ul className="mt-4 space-y-3 text-sm text-ink/80">
              <li>
                <a href={`mailto:${company.email}`} className="break-all hover:text-growth">
                  {company.email}
                </a>
              </li>
              <li>
                <a href={company.phoneHref} className="hover:text-growth">
                  {company.phone}
                </a>
              </li>
              <li>
                {company.address.street}, {company.address.city}, {company.address.region}{" "}
                {company.address.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-ink/10 pt-8 text-xs text-muted md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AdsWise Marketing. All rights reserved.</p>
          <Link href="/privacy-policy" className="hover:text-growth">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
