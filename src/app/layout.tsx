import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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

const verification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "CoKCajIP6VVZdIq3L9uZJ2BuVeEIK28O1dwsHkPs7uI";

const GTM_ID = "GTM-MVDNTV2R";
const GA_ID = "G-2D2F88PPWX";
// Meta (Facebook) Pixel ID — set NEXT_PUBLIC_META_PIXEL_ID or paste the ID here. Pixel is skipped while empty.
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "";

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
      <head>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>
        {/* End Google Tag Manager */}
        {/* Google tag (gtag.js) */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', '${GA_ID}');`}
        </Script>
        {/* Meta Pixel Code */}
        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${META_PIXEL_ID}');
fbq('track', 'PageView');`}
          </Script>
        )}
        {/* End Meta Pixel Code */}
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        {META_PIXEL_ID && (
          <noscript>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              alt=""
              src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            />
          </noscript>
        )}
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
