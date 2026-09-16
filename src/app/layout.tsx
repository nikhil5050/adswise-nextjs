import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import CustomCursor from "@/components/animations/CustomCursor";
import Preloader from "@/components/layout/Preloader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PageTransition from "@/components/layout/PageTransition";
import { company } from "@/data/company";

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

export const metadata: Metadata = {
  metadataBase: new URL(company.domain),
  title: {
    default: "AdsWise Marketing | Creative Advertising & Digital Growth Agency",
    template: "%s | AdsWise Marketing",
  },
  description:
    "AdsWise Marketing is a Pune-based digital marketing agency building creative campaigns, performance marketing and brand experiences that turn attention into growth.",
  keywords:
    "Digital Marketing Agency Pune, SEO Company Pune, Google Ads Agency Pune, Social Media Marketing Pune, Website Development Pune, Branding Agency Pune, Performance Marketing, AdsWise Marketing",
  openGraph: {
    type: "website",
    url: company.domain,
    siteName: "AdsWise Marketing",
    title: "AdsWise Marketing | Creative Advertising & Digital Growth Agency",
    description:
      "We build creative campaigns, performance marketing and brand experiences that turn attention into growth.",
    images: ["/images/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AdsWise Marketing",
    description:
      "We build creative campaigns, performance marketing and brand experiences that turn attention into growth.",
    images: ["/images/logo.png"],
  },
  icons: {
    icon: "/images/logo2.png",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: company.name,
  url: company.domain,
  logo: `${company.domain}/images/logo.png`,
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
  sameAs: [company.social.facebook, company.social.instagram, company.social.linkedin],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Preloader />
        <CustomCursor />
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
