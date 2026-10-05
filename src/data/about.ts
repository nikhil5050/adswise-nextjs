export interface FrameworkStep {
  num: string;
  title: string;
  description: string;
  image: string;
}

export interface Differentiator {
  icon: string;
  title: string;
  description: string;
}

export interface IndustryTag {
  icon: string;
  title: string;
  tag: string;
}

export const founder = {
  name: "Gaurav Jagtap",
  role: "Founder & CEO, AdsWise Marketing",
  linkedin: "https://www.linkedin.com/in/gauravjagtapadswise/",
  bio: [
    "Gaurav Jagtap is the strategic force behind AdsWise's growth-focused philosophy. He founded the agency with a clear belief: digital marketing must generate measurable business outcomes, not just online attention.",
    "He works closely with founders to understand their market position and long-term ambitions, focusing on building structured marketing systems that combine strategy, creative execution and performance analytics.",
  ],
  quote:
    "Marketing should directly contribute to business growth and be measurable in real results.",
  foundersNote:
    "The goal was never to build 'just another' digital marketing agency... our mission is to help businesses transform digital marketing from an expense into a scalable growth engine.",
};

export const companyStory = {
  positioning: "A Strategy-First B2B Digital Marketing Agency in Pune",
  intro:
    "AdsWise Marketing is a strategy-driven B2B digital marketing agency in Pune that helps growth-focused brands generate qualified leads, strengthen their digital presence, and build predictable marketing systems.",
  origin:
    "AdsWise was created after observing a common problem: many agencies celebrate impressions and clicks, while business owners care about qualified enquiries and measurable growth. Instead of selling predefined 'packages', we design research-driven digital growth frameworks tailored to your industry and revenue goals.",
  approach: [
    "Websites answer buyer questions & establish trust",
    "Search engines attract high-intent prospects",
    "Targeted advertising generates qualified enquiries",
    "Content strengthens brand authority",
    "Analytics & performance data guide optimisation",
  ],
  philosophy: [
    "Strategy defines direction",
    "Websites establish credibility",
    "Search visibility attracts buyers",
    "Ads accelerate demand",
    "Content builds trust",
  ],
  pune: {
    heading: "Our Presence in Pune's Business Ecosystem",
    body: [
      "AdsWise Marketing operates from Pune and works closely with businesses across Maharashtra. As a B2B digital marketing agency in Pune, we understand the local market environment, regional search patterns, and competitive pressures faced by growing companies.",
      "Pune has rapidly evolved into one of India's most active business hubs, with strong growth in manufacturing, technology services, real estate, education, and emerging startups. Our experience working with companies in these sectors allows us to design marketing strategies that align with local buyer behaviour, regional search trends, and industry-specific decision cycles.",
    ],
  },
};

export const strategicGrowthFramework: FrameworkStep[] = [
  {
    num: "01",
    title: "Market Intelligence & Research",
    description:
      "We analyse your industry, competitors, and customer decision journey to identify strategic growth opportunities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "02",
    title: "Strategic Roadmap",
    description:
      "A documented plan covering positioning, channels, messaging, funnel structure, and measurement.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "03",
    title: "Digital Infrastructure",
    description:
      "High-conversion sites, SEO architecture, analytics systems, and CRM integrations.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "04",
    title: "Performance Campaigns",
    description:
      "Targeted search ads, social ads, SEO, and strategic content marketing.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    num: "05",
    title: "Continuous Optimisation",
    description:
      "Refining campaigns to increase conversion rates, reduce cost per lead, and maximise ROI.",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
  },
];

export const differentiators: Differentiator[] = [
  {
    icon: "Layers",
    title: "Strategy Before Campaigns",
    description: "Most agencies begin with ads. We begin with research and business clarity.",
  },
  {
    icon: "Target",
    title: "Focus on Qualified Leads",
    description: "Our objective is not traffic — it is pipeline growth and meaningful enquiries.",
  },
  {
    icon: "Zap",
    title: "Full-Funnel Systems",
    description: "Brand awareness, lead generation, nurturing, and reporting work as one connected system.",
  },
  {
    icon: "Layout",
    title: "Creative That Sells",
    description: "Websites, ad creatives and videos are designed not just to look good, but to drive form fills, calls, and store visits.",
  },
  {
    icon: "BarChart3",
    title: "Transparent Tracking",
    description: "Clear dashboards and campaign reports show exactly how marketing contributes to your business growth.",
  },
  {
    icon: "ShieldCheck",
    title: "Systems, Not Services",
    description: "We build growth architecture that your business can rely on quarter after quarter.",
  },
];

export const industriesWeWorkWith: IndustryTag[] = [
  { icon: "Factory", title: "Manufacturing & Industrial", tag: "B2B Scale" },
  { icon: "Home", title: "Interior & Architecture", tag: "Design Studios" },
  { icon: "Building2", title: "Real Estate", tag: "Developers" },
  { icon: "ShoppingCart", title: "Footwear & Retail", tag: "Consumer Brands" },
  { icon: "GraduationCap", title: "Education", tag: "Institutions" },
  { icon: "HeartPulse", title: "Healthcare", tag: "Medical Brands" },
  { icon: "Briefcase", title: "B2B Services", tag: "Professional Firms" },
  { icon: "Layout", title: "E-commerce", tag: "Digital Scaling" },
];
