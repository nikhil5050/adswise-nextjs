import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AdsWise Marketing — Digital Marketing Agency in Pune",
    short_name: "AdsWise",
    description: "Strategy-first digital marketing agency in Pune: SEO, ads, social media, branding and websites.",
    start_url: "/",
    display: "standalone",
    background_color: "#050505",
    theme_color: "#050505",
    icons: [{ src: "/images/logo2.png", sizes: "any", type: "image/png" }],
  };
}
