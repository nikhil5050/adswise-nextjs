import type { Metadata } from "next";

export const SITE_NAME = "AdsWise Marketing";
export const DEFAULT_OG_IMAGE = "/images/logo.png";

interface PageMetaInput {
  title: string;
  description: string;
  /** Route path, e.g. "/services". Used for the canonical tag and og:url. */
  path: string;
  image?: string;
  type?: "website" | "article" | "profile";
  /** Skip the "| AdsWise Marketing" title template (for titles that already carry the brand). */
  absoluteTitle?: boolean;
  publishedTime?: string;
  keywords?: string[];
}

/**
 * Full per-page metadata: title, description, canonical, Open Graph and Twitter.
 * Page-level openGraph replaces the layout's entirely, so every page sets all fields here.
 */
export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = "website",
  absoluteTitle = false,
  publishedTime,
  keywords,
}: PageMetaInput): Metadata {
  // Keep full titles within ~65 characters so search results don't truncate them.
  const absolute = absoluteTitle || title.length + SITE_NAME.length + 3 > 65;
  const socialTitle = absolute ? title : `${title} | ${SITE_NAME}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    ...(keywords && { keywords }),
    alternates: { canonical: path },
    openGraph: {
      type,
      url: path,
      siteName: SITE_NAME,
      locale: "en_IN",
      title: socialTitle,
      description,
      images: [{ url: image, alt: title }],
      ...(publishedTime && { publishedTime }),
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [image],
    },
  };
}
