import { company } from "@/data/company";
import { services } from "@/data/services";

export interface Crumb {
  name: string;
  path: string;
}

export const absoluteUrl = (path: string) => `${company.domain}${path}`;

/** Stable entity ids so every page's schema points at the same organisation, site and founder. */
export const ORG_ID = absoluteUrl("/#organization");
export const WEBSITE_ID = absoluteUrl("/#website");
export const FOUNDER_ID = absoluteUrl("/gauravjagtap-about#gaurav-jagtap");

export const FOUNDER_PAGE = "/gauravjagtap-about";
export const FOUNDER_IMAGE = "/team/ceoo1.jpeg";

const provider = { "@id": ORG_ID };

/** Sitewide graph: the agency, the website and its founder, rendered once in the root layout. */
export function siteGraph() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "ProfessionalService"],
        "@id": ORG_ID,
        name: company.name,
        alternateName: ["AdsWise", "Adswise Marketing Pune"],
        description:
          "AdsWise Marketing is a strategy-first digital marketing agency in Pune, India, founded by Gaurav Jagtap. It provides SEO, performance marketing, social media marketing, branding, website development and lead generation for businesses across India.",
        url: company.domain,
        logo: { "@type": "ImageObject", url: absoluteUrl("/images/logo.png") },
        image: absoluteUrl("/images/logo.png"),
        email: company.email,
        telephone: company.phone,
        address: {
          "@type": "PostalAddress",
          streetAddress: company.address.street,
          addressLocality: company.address.city,
          addressRegion: company.address.region,
          postalCode: company.address.postalCode,
          addressCountry: company.address.country,
        },
        areaServed: [
          { "@type": "City", name: "Pune" },
          { "@type": "State", name: "Maharashtra" },
          { "@type": "Country", name: "India" },
        ],
        founder: { "@id": FOUNDER_ID },
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: company.phone,
          email: company.email,
          areaServed: "IN",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
        knowsAbout: [
          "Digital marketing",
          "Search engine optimization",
          "Answer engine optimization",
          "Generative engine optimization",
          "Performance marketing",
          "Google Ads",
          "Meta Ads",
          "Social media marketing",
          "Branding",
          "Website development",
          "Lead generation",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital marketing services",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, url: absoluteUrl(`/services/${s.slug}`) },
          })),
        },
        sameAs: [company.social.facebook, company.social.instagram, company.social.linkedin],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        name: company.name,
        url: company.domain,
        inLanguage: "en-IN",
        publisher: { "@id": ORG_ID },
      },
      {
        "@type": "Person",
        "@id": FOUNDER_ID,
        name: company.founder.name,
        jobTitle: company.founder.role,
        description:
          "Gaurav Jagtap is the Founder and CEO of AdsWise Marketing, a digital marketing agency in Pune, India. He builds measurable marketing systems that combine strategy, creative execution and performance analytics.",
        url: absoluteUrl(FOUNDER_PAGE),
        image: absoluteUrl(FOUNDER_IMAGE),
        worksFor: { "@id": ORG_ID },
        knowsAbout: ["Digital marketing strategy", "Growth marketing", "Performance marketing", "Marketing analytics", "Branding"],
        homeLocation: { "@type": "Place", name: "Pune, Maharashtra, India" },
        sameAs: [company.founder.linkedin],
      },
    ],
  };
}

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...crumbs].map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}

export function faqLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function serviceLd({
  name,
  description,
  path,
  serviceType,
  audience,
}: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
  audience?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(path),
    serviceType: serviceType ?? name,
    provider,
    areaServed: [
      { "@type": "City", name: "Pune" },
      { "@type": "State", name: "Maharashtra" },
      { "@type": "Country", name: "India" },
    ],
    ...(audience && { audience: { "@type": "BusinessAudience", name: audience } }),
  };
}

/** A named page (about, contact, listing) tied to the site and organisation. */
export function webPageLd({
  type = "WebPage",
  name,
  description,
  path,
  mainEntity,
}: {
  type?: "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage" | "ProfilePage";
  name: string;
  description: string;
  path: string;
  mainEntity?: object;
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: "en-IN",
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": ORG_ID },
    ...(mainEntity && { mainEntity }),
  };
}

export function itemListLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      url: absoluteUrl(item.path),
    })),
  };
}

export function articleLd({
  type = "Article",
  headline,
  description,
  path,
  image,
  datePublished,
  section,
  keywords,
}: {
  type?: "Article" | "BlogPosting";
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished?: string;
  section?: string;
  keywords?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    headline,
    description,
    image: image.startsWith("http") ? image : absoluteUrl(image),
    url: absoluteUrl(path),
    mainEntityOfPage: absoluteUrl(path),
    inLanguage: "en-IN",
    author: { "@id": ORG_ID },
    publisher: { "@id": ORG_ID },
    ...(datePublished && { datePublished, dateModified: datePublished }),
    ...(section && { articleSection: section }),
    ...(keywords && keywords.length > 0 && { keywords: keywords.join(", ") }),
  };
}

/** "Nov 14, 2025" -> "2025-11-14"; undefined when unparseable. */
export function isoDate(date: string) {
  const d = new Date(`${date} 12:00 UTC`);
  return Number.isNaN(d.getTime()) ? undefined : d.toISOString().slice(0, 10);
}
