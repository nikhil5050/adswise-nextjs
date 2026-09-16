export interface CaseStudyResult {
  label: string;
  value: string;
}

export interface CaseStudy {
  slug: string;
  route: string;
  client: string;
  industry: string;
  location: string;
  headline: string;
  summary: string;
  challenge: string;
  challengePoints: string[];
  strategy: { title: string; description: string }[];
  results: CaseStudyResult[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "footwear-growth",
    route: "/case-study-footwear-growth",
    client: "DTK Footwear",
    industry: "Footwear / E-commerce",
    location: "India",
    headline: "How We Tripled Revenue for a Premium Handcrafted Footwear Brand",
    summary:
      "DTK, a boutique manufacturer of handcrafted leather shoes with three decades of wholesale experience, had no digital presence to match its premium, full-grain-leather craftsmanship. We built their entire e-commerce platform from scratch and layered SEO, content, local search and paid media on top.",
    challenge:
      "Despite creating high-quality, long-lasting footwear, the brand had no proper digital presence to showcase its value or reach online customers.",
    challengePoints: [
      "No existing website to showcase product details like sizing, leather type, or maintenance.",
      "No digital platform to communicate the brand's craftsmanship and premium positioning.",
      "No mobile-optimized experience to capture online users effectively.",
      "Lack of content storytelling to justify premium pricing.",
      "No Google Business optimization, limiting local search visibility.",
    ],
    strategy: [
      {
        title: "Technical SEO Foundation",
        description:
          "Built the platform from scratch with a structured architecture, optimized internal linking, mobile responsiveness, fast page speed and schema markup.",
      },
      {
        title: "Content & Product Page Optimization",
        description:
          "Rewrote every product description around the craftsmanship story and added detailed specifications to each shoe page.",
      },
      {
        title: "Local Search Dominance",
        description:
          "Optimized Google Business Profile with professional photos, posts, reviews and local keyword targeting for 'near me' searches.",
      },
      {
        title: "Targeted Paid Advertising",
        description:
          "Segmented Meta Ads for premium shoe buyers, gift buyers and corporate bulk buyers, telling the craftsmanship story in-ad.",
      },
      {
        title: "Conversion Rate Optimization",
        description:
          "A/B tested product pages and checkout, added trust badges and reviews, and built cart-abandonment recovery flows.",
      },
    ],
    results: [
      { label: "Organic Traffic", value: "+250%" },
      { label: "Revenue Growth", value: "+180%" },
      { label: "ROAS", value: "3.2x" },
    ],
  },
  {
    slug: "interior-design-marketing",
    route: "/interior-design-marketing-case-study",
    client: "Space Them Upp",
    industry: "Interior Design",
    location: "Pune",
    headline: "How We Doubled Leads for a Premium Pune Interior Design Studio",
    summary:
      "Space Them Upp had completed 500+ premium interior projects over 10 years but had no digital presence and struggled to generate new leads. Within six months, we rebuilt their technical SEO foundation, portfolio and local search presence, and added targeted paid advertising.",
    challenge:
      "The studio's website received a maximum of 100 visitors a month, mostly existing clients checking in — with almost no new-lead generation.",
    challengePoints: [
      "Poor online visibility: barely 100 maximum visitors each month.",
      "Inconsistent lead generation: very few inquiries coming organically.",
      "Weak local search presence: Google Business Profile barely optimized with only 2 reviews.",
      "Portfolio not optimized for conversion: strong work on social handles but no engagement triggers.",
    ],
    strategy: [
      { title: "Technical SEO Foundation", description: "Rebuilt the site architecture, speed and structured data to support organic growth." },
      { title: "Content & Portfolio Optimization", description: "Restructured the portfolio into filterable, fast-loading galleries with conversion-focused copy." },
      { title: "Local SEO Dominance", description: "Optimized Google Business Profile and built local citations and reviews." },
      { title: "Targeted Paid Advertising", description: "Launched Meta campaigns aimed at premium residential and commercial clients." },
      { title: "Social Media Showcase Strategy", description: "Turned existing high-quality project photography into a consistent lead-generating content engine." },
    ],
    results: [
      { label: "Organic Traffic", value: "+200%" },
      { label: "Revenue Growth", value: "+120%" },
      { label: "ROAS", value: "3.0x" },
    ],
  },
  {
    slug: "real-estate-growth",
    route: "/real-estate-case-study",
    client: "Bhumkar Realty",
    industry: "Real Estate",
    location: "Wakad & Chinchwad, Pune",
    headline: "Real Estate Growth Strategy for Builders and Developers in Pune",
    summary:
      "Bhumkar Realty, known for quality construction and timely delivery in Wakad and Chinchwad, needed more than exposure — they needed a performance-driven digital solution to attract the right buyers and generate qualified leads.",
    challenge:
      "Bhumkar Realty needed a solution to attract the right crowd and generate leads in a highly competitive Pune real estate market.",
    challengePoints: [
      "Poor quality leads failing to convert effectively.",
      "A lack of consistent social media presence.",
      "Low brand visibility in a highly competitive market.",
      "A poorly optimized website with a bad conversion flow.",
      "A brand message that failed to convey quality and timely delivery.",
    ],
    strategy: [
      { title: "Paid Search & Social", description: "Targeted ads across Google and Meta focused on generating qualified leads." },
      { title: "SEO & Website Optimization", description: "Improved site structure and organic visibility to build long-term trust and traffic." },
      { title: "Social Media Presence", description: "Established a consistent posting and engagement strategy to build credibility." },
    ],
    results: [
      { label: "Clients Generated", value: "400+" },
      { label: "Inquiries & Site Visits", value: "Significant increase" },
    ],
  },
];
