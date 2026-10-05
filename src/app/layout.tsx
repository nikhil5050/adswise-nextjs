import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import GlowField from "@/components/effects/GlowField";
// import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { company } from "@/data/company";
import JsonLd from "@/components/seo/JsonLd";
import { DEFAULT_OG_IMAGE } from "@/lib/seo/metadata";
import { FOUNDER_PAGE, siteGraph } from "@/lib/seo/schema";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const verification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: "AdsWise Marketing | Digital Marketing Agency in Pune",
    template: "%s | AdsWise Marketing",
  },
  description:
    "AdsWise Marketing is a strategy-first digital marketing agency in Pune founded by Gaurav Jagtap — SEO, Google & Meta ads, social media, branding, websites and lead generation that deliver measurable growth.",
  applicationName: "AdsWise Marketing",
  keywords: [
    "digital marketing agency in Pune",
    "SEO company in Pune",
    "Google Ads agency Pune",
    "social media marketing Pune",
    "website development Pune",
    "branding agency Pune",
    "performance marketing agency",
    "AdsWise Marketing",
    "Gaurav Jagtap",
  ],
  authors: [{ name: company.founder.name, url: `${company.domain}${FOUNDER_PAGE}` }],
  creator: company.name,
  publisher: company.name,
  category: "Digital Marketing",
  formatDetection: { telephone: false, email: false, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: "AdsWise Marketing",
    locale: "en_IN",
    title: "AdsWise Marketing | Digital Marketing Agency in Pune",
    description:
      "Strategy-first digital marketing agency in Pune: SEO, performance ads, social media, branding and websites that turn attention into growth.",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsWise Marketing | Digital Marketing Agency in Pune",
    description:
      "Strategy-first digital marketing agency in Pune: SEO, performance ads, social media, branding and websites that turn attention into growth.",
    images: [DEFAULT_OG_IMAGE],
  },
  icons: {
    icon: "/images/logo2.png",
    apple: "/images/logo2.png",
  },
  ...(verification && { verification: { google: verification } }),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <JsonLd data={siteGraph()} />
        <CustomCursor />
        <GlowField />
        <SmoothScroll>
          <Navbar />
          <PageTransition>
            <main>{children}</main>
          </PageTransition>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
