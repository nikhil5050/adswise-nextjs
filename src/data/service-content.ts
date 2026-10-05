import type { ServiceFaq } from "@/data/services";

/**
 * Search, answer-engine and generative-engine content for each service page:
 * a direct definition, audience, benefits, extra FAQs and internal-link targets.
 * Keyed by service slug from services.ts.
 */
export interface ServiceContent {
  /** One-paragraph answer to "What is <service>?" — written to be quoted by AI answers. */
  quickAnswer: string;
  whoFor: string[];
  benefits: { title: string; description: string }[];
  faqs: ServiceFaq[];
  relatedServices: string[];
  relatedPackages: string[];
  relatedIndustries: string[];
  relatedBlogs: string[];
  caseStudies: string[];
}

export const serviceContent: Record<string, ServiceContent> = {
  "strategy-consulting": {
    quickAnswer:
      "Marketing strategy consulting is a structured process that defines who your best customers are, what makes your brand the obvious choice for them, and which channels, messages and budgets will grow revenue fastest. At AdsWise Marketing in Pune, strategy consulting ends with a written growth plan, KPIs and a 90-day action roadmap your team can execute.",
    whoFor: [
      "Founders who are spending on marketing but cannot see what is working",
      "Businesses entering a new city, category or customer segment",
      "Brands planning a rebrand, product launch or price repositioning",
      "In-house teams that need an outside view and a clear priority list",
    ],
    benefits: [
      { title: "Clarity on positioning", description: "A sharp value proposition and message hierarchy that sales, ads and the website all repeat." },
      { title: "Budget that follows data", description: "Channel mix and spend decisions based on research, unit economics and test results instead of guesswork." },
      { title: "Measurable roadmap", description: "Every initiative is tied to a KPI such as cost per lead, conversion rate or customer lifetime value." },
      { title: "Faster execution", description: "Prioritised 30-60-90 day actions so your team knows exactly what to do first." },
    ],
    faqs: [
      {
        question: "What do I get at the end of a strategy consulting engagement?",
        answer:
          "You receive a written strategy document covering market and competitor research, customer segments, positioning, messaging pillars, recommended channels and budget split, KPIs, and a prioritised 90-day execution roadmap.",
      },
      {
        question: "Do you only advise, or can you also execute the strategy?",
        answer:
          "Both. Many clients take the strategy in-house; others ask AdsWise to run execution through our performance marketing, SEO, social media, website and branding teams so strategy and delivery stay connected.",
      },
    ],
    relatedServices: ["brand-development", "performance-marketing", "search-engine-optimization"],
    relatedPackages: ["business-growth-and-consulting", "complete-growth-system"],
    relatedIndustries: ["startups-and-technology-businesses", "professional-services", "manufacturing-msmes", "ecommerce-and-product-businesses"],
    relatedBlogs: ["digital-marketing-7-types-you-must-know-in-2026", "what-is-digital-marketing-5-basics-for-beginners"],
    caseStudies: ["footwear-growth"],
  },
  "social-media-marketing": {
    quickAnswer:
      "Social media marketing is the planned use of platforms such as Instagram, Facebook, LinkedIn and YouTube to build awareness, community and sales through organic content and paid ads. AdsWise Marketing, a social media marketing agency in Pune, handles strategy, content production, posting, community management and paid social, and reports results against enquiries and revenue rather than likes alone.",
    whoFor: [
      "Local businesses that want footfall, calls and WhatsApp enquiries",
      "D2C and ecommerce brands that sell through Instagram and Facebook ads",
      "B2B companies building authority and leads on LinkedIn",
      "Founders and professionals growing a personal brand",
    ],
    benefits: [
      { title: "Consistent brand presence", description: "A content calendar with reels, carousels and stories published on schedule, in your brand voice." },
      { title: "Content that converts", description: "Hooks, offers and calls-to-action designed to move followers to enquiries, not just engagement." },
      { title: "Paid social that scales", description: "Meta and LinkedIn campaigns tested and optimised for cost per lead and return on ad spend." },
      { title: "Clear reporting", description: "Monthly dashboards that link reach and engagement to leads, sales and cost per acquisition." },
    ],
    faqs: [
      {
        question: "Which social media platforms should my business be on?",
        answer:
          "It depends on where your buyers spend time. Instagram and Facebook suit most consumer and local businesses, LinkedIn suits B2B and professional services, and YouTube suits products or services that need explanation. We recommend platforms after a channel and audience audit.",
      },
      {
        question: "How many posts per month are included in social media management?",
        answer:
          "Plans are built around your goals and budget. A typical plan includes a mix of reels, carousels, static posts and stories every week, plus community management and monthly reporting. We confirm the exact volume in your proposal.",
      },
      {
        question: "How long does social media marketing take to show results?",
        answer:
          "Paid social campaigns can generate enquiries within the first one to two weeks. Organic growth in reach, followers and inbound messages usually builds over two to four months of consistent posting.",
      },
      {
        question: "Do you create the content or do we need to provide it?",
        answer:
          "We handle the full process: content strategy, copywriting, graphic design, reel editing and, where needed, on-site shoots. You only approve the calendar and share business updates or offers.",
      },
    ],
    relatedServices: ["graphics-designing", "video-production", "performance-marketing"],
    relatedPackages: ["social-media-management", "content-engine"],
    relatedIndustries: ["beauty-and-wellness-businesses", "food-travel-and-hospitality-businesses", "local-retail-businesses", "personal-and-creator-businesses"],
    relatedBlogs: ["social-media-marketing-5-steps-to-grow-fast", "social-media-strategy-5-5-5-rule-explained-simply", "top-10-tools-every-social-media-marketing-agency-should-use"],
    caseStudies: ["interior-design-marketing"],
  },
  "graphics-designing": {
    quickAnswer:
      "Graphic design for marketing is the creation of visuals — logos, social posts, ads, brochures, packaging and website graphics — that communicate a brand message clearly and persuade people to act. AdsWise Marketing designs on-brand creative for digital and print, with ad variants built for testing on Google, Meta and LinkedIn.",
    whoFor: [
      "Brands that need a steady supply of social media and ad creatives",
      "Businesses launching a product that needs packaging and print collateral",
      "Companies whose visuals look inconsistent across channels",
      "Marketing teams that need design capacity without hiring",
    ],
    benefits: [
      { title: "Consistent identity", description: "Every asset follows your brand guidelines, so customers recognise you instantly." },
      { title: "Creative built for performance", description: "Ad designs produced in multiple variants and sizes for A/B testing and higher ROAS." },
      { title: "Print and digital in one place", description: "Brochures, catalogues, signage, packaging and social graphics from one team." },
      { title: "Fast turnaround", description: "A defined brief, review and revision process keeps campaigns on schedule." },
    ],
    faqs: [
      {
        question: "How many revisions are included in your design work?",
        answer:
          "Each design deliverable includes structured revision rounds agreed in the proposal. Clear briefs and early moodboards keep revisions focused and turnaround quick.",
      },
      {
        question: "Will I get the source files for my designs?",
        answer:
          "Yes. On project completion we hand over final files in the formats you need, including editable source files for logos and brand assets.",
      },
    ],
    relatedServices: ["brand-development", "social-media-marketing", "video-production"],
    relatedPackages: ["branding-and-identity", "content-engine"],
    relatedIndustries: ["fast-moving-consumer-goods", "ecommerce-and-product-businesses", "local-retail-businesses", "food-travel-and-hospitality-businesses"],
    relatedBlogs: ["branding-in-marketing-7-pillars-that-build-trust"],
    caseStudies: ["interior-design-marketing"],
  },
  "video-production": {
    quickAnswer:
      "Marketing video production is the planning, shooting and editing of videos — brand films, product videos, reels, testimonials and video ads — designed to capture attention and drive a specific business result. AdsWise Marketing produces short-form and long-form video in Pune and across India, from script to final edit, optimised for each platform.",
    whoFor: [
      "Brands that need regular reels and short-form content",
      "Businesses launching a product, project or service",
      "Companies that want customer testimonial and case-study videos",
      "Advertisers who need fresh video creatives for paid campaigns",
    ],
    benefits: [
      { title: "Higher attention and recall", description: "Video stops the scroll and explains your offer faster than text or images." },
      { title: "Platform-native formats", description: "Vertical reels, YouTube edits and ad cut-downs from a single shoot." },
      { title: "End-to-end production", description: "Concept, scripting, shoot, editing, motion graphics and captions handled by one team." },
      { title: "Videos that sell", description: "Hooks, structure and calls-to-action planned around conversions and ad performance." },
    ],
    faqs: [
      {
        question: "Do you shoot on location in Pune?",
        answer:
          "Yes. We shoot at your office, store, factory, project site or a studio in and around Pune, and can plan shoots in other Indian cities for larger projects.",
      },
      {
        question: "Can one shoot produce content for several platforms?",
        answer:
          "Yes. We plan shoots so one session yields a hero video, multiple reels, YouTube Shorts and ad variants in the right aspect ratios for each platform.",
      },
    ],
    relatedServices: ["social-media-marketing", "performance-marketing", "graphics-designing"],
    relatedPackages: ["content-engine", "pr-influencer-and-publicity"],
    relatedIndustries: ["real-estate-and-construction", "media-and-entertainment", "personal-and-creator-businesses", "food-travel-and-hospitality-businesses"],
    relatedBlogs: ["social-media-marketing-5-steps-to-grow-fast"],
    caseStudies: ["real-estate-growth"],
  },
  "performance-marketing": {
    quickAnswer:
      "Performance marketing is paid advertising where every rupee is measured against an action — a lead, call, sale or app install — on platforms such as Google Ads, Meta (Facebook and Instagram) Ads and LinkedIn Ads. AdsWise Marketing, a performance marketing agency in Pune, plans, launches and optimises campaigns to lower cost per acquisition (CPA) and increase return on ad spend (ROAS).",
    whoFor: [
      "Businesses that need a predictable flow of leads or sales",
      "Ecommerce brands that want profitable ROAS at scale",
      "Real estate, education and healthcare brands with high-value enquiries",
      "Companies whose current ads spend money without clear returns",
    ],
    benefits: [
      { title: "Pay for results you can measure", description: "Conversion tracking on every campaign shows exactly which ads generate leads and revenue." },
      { title: "Lower cost per lead", description: "Continuous testing of audiences, keywords, creatives and landing pages to reduce CPA." },
      { title: "Scalable growth", description: "Budgets scale into what works, with remarketing to recover lost visitors." },
      { title: "Transparent reporting", description: "Weekly optimisation and monthly reports on spend, leads, CPA and ROAS." },
    ],
    faqs: [
      {
        question: "Is Google Ads or Meta Ads better for my business?",
        answer:
          "Google Ads captures people already searching for your service, so it suits high-intent demand. Meta Ads creates demand through targeting and creative, so it suits visual products, local offers and awareness. Most businesses get the best results from a tested mix of both.",
      },
      {
        question: "What is a good minimum ad budget to start?",
        answer:
          "The right budget depends on your industry, competition and lead value. We recommend a test budget large enough to gather conversion data within the first month, then scale what works. We share a budget recommendation after a free audit.",
      },
    ],
    relatedServices: ["media-buying-planning", "website-development", "email-whatsapp-marketing"],
    relatedPackages: ["advertising-growth", "lead-generation-and-sales-funnel"],
    relatedIndustries: ["real-estate-and-construction", "education-businesses", "healthcare-businesses", "ecommerce-and-product-businesses"],
    relatedBlogs: ["meta-ads-explained-5-things-you-must-know-first", "digital-marketing-7-types-you-must-know-in-2026"],
    caseStudies: ["real-estate-growth", "footwear-growth"],
  },
  "website-development": {
    quickAnswer:
      "Website development is the design and build of a fast, secure, mobile-friendly website that explains your business, ranks on search engines and converts visitors into enquiries or sales. AdsWise Marketing develops business websites, landing pages and web apps in Pune, combining UI/UX design, SEO-ready code and conversion tracking from day one.",
    whoFor: [
      "Businesses without a website, or with an outdated one",
      "Companies whose site is slow, hard to update or not mobile-friendly",
      "Brands running ads that need high-converting landing pages",
      "Startups that need a website or web app to launch",
    ],
    benefits: [
      { title: "Built to convert", description: "Clear messaging, trust signals and calls-to-action placed where visitors decide." },
      { title: "SEO-ready foundation", description: "Clean structure, metadata, schema markup and Core Web Vitals performance built in." },
      { title: "Fast and secure", description: "Optimised images, modern frameworks, SSL and regular backups." },
      { title: "Easy to grow", description: "Scalable architecture and analytics so the site keeps improving after launch." },
    ],
    faqs: [
      {
        question: "Will my website be optimised for Google and mobile?",
        answer:
          "Yes. Every site we build is responsive, optimised for page speed and Core Web Vitals, and includes on-page SEO basics such as titles, meta descriptions, headings, sitemaps and structured data.",
      },
      {
        question: "Do you provide website maintenance after launch?",
        answer:
          "Yes. We offer maintenance plans covering updates, security, backups, content changes and ongoing SEO and conversion improvements.",
      },
    ],
    relatedServices: ["search-engine-optimization", "ecommerce-development", "graphics-designing"],
    relatedPackages: ["website-and-digital-presence", "complete-growth-system"],
    relatedIndustries: ["professional-services", "startups-and-technology-businesses", "manufacturing-and-engineering", "healthcare-businesses"],
    relatedBlogs: ["seo-golden-rules-7-ways-to-rank-in-2026"],
    caseStudies: ["footwear-growth", "interior-design-marketing"],
  },
  "ecommerce-development": {
    quickAnswer:
      "Ecommerce development is building an online store — on Shopify, WooCommerce or a custom stack — with product catalogues, payments, shipping and a checkout designed for conversions. AdsWise Marketing builds and grows ecommerce websites for Indian brands, connecting the store to SEO, Google Shopping, Meta ads and marketplaces like Amazon and Flipkart.",
    whoFor: [
      "Manufacturers and wholesalers starting to sell direct to consumers",
      "D2C brands moving off marketplaces to their own store",
      "Retailers adding online sales to physical stores",
      "Stores with high traffic but low conversion rates",
    ],
    benefits: [
      { title: "Right platform choice", description: "Shopify, WooCommerce or custom, picked for your catalogue, budget and growth plans." },
      { title: "Checkout that converts", description: "Fewer steps, Indian payment options (UPI, cards, COD) and trust signals reduce cart abandonment." },
      { title: "Product pages that rank", description: "SEO-structured categories and product pages that win organic search traffic." },
      { title: "Growth after launch", description: "Shopping ads, retargeting and email/WhatsApp flows to drive repeat orders." },
    ],
    faqs: [
      {
        question: "Should I use Shopify or WooCommerce?",
        answer:
          "Shopify is faster to launch and easier to manage, which suits most D2C brands. WooCommerce gives more control and lower platform fees, which suits businesses with custom needs. We recommend a platform after reviewing your catalogue, integrations and budget.",
      },
      {
        question: "Can you integrate payment gateways and shipping for India?",
        answer:
          "Yes. We integrate Indian payment gateways with UPI, cards, net banking and cash on delivery, plus shipping aggregators for automatic rates and tracking.",
      },
    ],
    relatedServices: ["website-development", "platform-listing-optimization", "performance-marketing"],
    relatedPackages: ["e-commerce-growth", "website-and-digital-presence"],
    relatedIndustries: ["ecommerce-and-product-businesses", "retail-and-ecommerce", "fast-moving-consumer-goods", "local-retail-businesses"],
    relatedBlogs: ["digital-marketing-tools-5-must-have-tools-for-success"],
    caseStudies: ["footwear-growth"],
  },
  "search-engine-optimization": {
    quickAnswer:
      "Search engine optimization (SEO) is the process of improving a website so it ranks higher in Google and other search engines for the terms customers use, bringing in organic traffic without paying per click. AdsWise Marketing, an SEO company in Pune, combines technical SEO, content, local SEO and link building, and also optimises content to be cited in AI answers from tools such as Google AI Overviews and ChatGPT.",
    whoFor: [
      "Businesses that want leads from Google without paying per click",
      "Local businesses that want to appear in Google Maps results",
      "Ecommerce stores that need category and product pages to rank",
      "Brands that want to be cited in AI search answers",
    ],
    benefits: [
      { title: "Compounding organic traffic", description: "Rankings keep delivering visitors month after month, lowering blended acquisition cost." },
      { title: "Local visibility", description: "Google Business Profile optimisation, citations and reviews to win the local map pack." },
      { title: "AI search readiness", description: "Answer-first content, FAQs and structured data that answer engines can understand and quote." },
      { title: "Technical health", description: "Speed, crawlability, indexing and schema issues fixed so content can rank." },
    ],
    faqs: [
      {
        question: "How long does SEO take to work?",
        answer:
          "Technical fixes and local SEO improvements can show movement in four to eight weeks. Competitive keywords usually take three to six months of consistent content and link building to reach page one.",
      },
      {
        question: "What is the difference between SEO, AEO and GEO?",
        answer:
          "SEO (search engine optimization) helps pages rank in search results. AEO (answer engine optimization) structures content so it appears as direct answers, such as featured snippets and voice results. GEO (generative engine optimization) makes your brand and content easy for AI tools like ChatGPT, Gemini and Google AI Overviews to understand and cite. AdsWise covers all three.",
      },
      {
        question: "Do you guarantee first-page rankings?",
        answer:
          "No ethical SEO agency can guarantee rankings because search engines control them. We commit to a transparent process, clear monthly reporting and measurable growth in visibility, traffic and leads.",
      },
    ],
    relatedServices: ["website-development", "platform-listing-optimization", "strategy-consulting"],
    relatedPackages: ["seo-and-organic-growth", "website-and-digital-presence"],
    relatedIndustries: ["professional-services", "healthcare-businesses", "home-and-local-services", "education-businesses"],
    relatedBlogs: ["seo-2026-4-trends-to-adopt", "seo-golden-rules-7-ways-to-rank-in-2026", "voice-visual-search-optimization-the-future-of-seo-in-2025"],
    caseStudies: ["footwear-growth", "interior-design-marketing"],
  },
  "mobile-app-development": {
    quickAnswer:
      "Mobile app development is designing and building applications for Android and iOS — either native or cross-platform with frameworks like React Native and Flutter — that solve a specific user problem and scale with your business. AdsWise Marketing takes apps from idea and UX design through development, launch on the Play Store and App Store, and post-launch growth.",
    whoFor: [
      "Startups building an MVP to validate an idea",
      "Businesses that want customer self-service, booking or ordering apps",
      "Companies digitising internal operations for field teams",
      "Brands that want an app to drive repeat purchases and loyalty",
    ],
    benefits: [
      { title: "User-first design", description: "Research-led UX and UI that make the app simple to adopt and use." },
      { title: "Cross-platform efficiency", description: "One codebase for Android and iOS where it fits, reducing cost and time to market." },
      { title: "Scalable architecture", description: "Secure backends, APIs and admin panels ready for growth." },
      { title: "Launch and growth support", description: "App store optimisation, analytics and campaigns to drive installs and retention." },
    ],
    faqs: [
      {
        question: "How long does it take to build a mobile app?",
        answer:
          "A focused MVP typically takes eight to sixteen weeks depending on features, integrations and design complexity. We break the project into milestones with demos at each stage.",
      },
      {
        question: "Do you help with app store submission and marketing?",
        answer:
          "Yes. We handle Play Store and App Store submission, app store optimisation (ASO), and can run install and engagement campaigns through our performance marketing team.",
      },
    ],
    relatedServices: ["website-development", "performance-marketing", "strategy-consulting"],
    relatedPackages: ["website-and-digital-presence", "crm-and-automation"],
    relatedIndustries: ["startups-and-technology-businesses", "information-technology-and-software", "logistics-and-supply-chain", "banking-and-financial-services"],
    relatedBlogs: ["how-ai-is-revolutionizing-digital-marketing-agencies-in-pune"],
    caseStudies: [],
  },
  "platform-listing-optimization": {
    quickAnswer:
      "Platform listing optimization means creating and improving your business listings on Google Business Profile, Bing Places, Apple Maps, Justdial, IndiaMART, Amazon, Flipkart and industry directories so your name, address, phone (NAP), photos, categories and reviews are accurate and persuasive. AdsWise Marketing manages listings so local customers and marketplace shoppers find and choose you first.",
    whoFor: [
      "Local businesses that want more calls and visits from Google Maps",
      "Multi-location brands with inconsistent listings",
      "Sellers on Amazon, Flipkart and other marketplaces",
      "B2B suppliers listed on IndiaMART and trade portals",
    ],
    benefits: [
      { title: "More local discovery", description: "Optimised categories, photos and posts help you appear in the Google local map pack." },
      { title: "Consistent NAP data", description: "Matching details across directories strengthen local SEO trust signals." },
      { title: "Review growth", description: "Systems to collect and respond to reviews, improving ratings and conversions." },
      { title: "Marketplace conversions", description: "Keyword-rich titles, images and A+ content that lift marketplace rankings and sales." },
    ],
    faqs: [
      {
        question: "Why is Google Business Profile important for local businesses?",
        answer:
          "Google Business Profile controls how you appear in Google Maps and local search results. A complete, active profile with good reviews is one of the strongest drivers of calls, direction requests and walk-ins for local businesses.",
      },
      {
        question: "Can you optimise Amazon and Flipkart listings?",
        answer:
          "Yes. We optimise product titles, bullet points, descriptions, backend keywords, images and A+ content, and can manage marketplace advertising to increase visibility.",
      },
    ],
    relatedServices: ["search-engine-optimization", "ecommerce-development", "performance-marketing"],
    relatedPackages: ["offline-and-local-marketing", "e-commerce-growth"],
    relatedIndustries: ["home-and-local-services", "local-retail-businesses", "healthcare-businesses", "ecommerce-and-product-businesses"],
    relatedBlogs: ["voice-visual-search-optimization-the-future-of-seo-in-2025"],
    caseStudies: ["footwear-growth"],
  },
  "media-buying-planning": {
    quickAnswer:
      "Media planning decides where, when and how often your ads should appear to reach the right audience; media buying is negotiating and purchasing that ad space across digital, TV, radio, print and outdoor. AdsWise Marketing plans and buys media for brands in India using audience insights to maximise reach and results for every rupee of budget.",
    whoFor: [
      "Brands launching a campaign across several channels",
      "Businesses running outdoor, print, radio or cinema advertising",
      "Companies that want programmatic and OTT reach",
      "Marketers who need better rates and placement control",
    ],
    benefits: [
      { title: "Right audience, right moment", description: "Channel and timing choices based on audience data, not habit." },
      { title: "Better rates", description: "Negotiated placements and efficient buying stretch your budget further." },
      { title: "Online and offline together", description: "Digital, outdoor, print and broadcast plans that reinforce one message." },
      { title: "Measured impact", description: "Reach, frequency and response tracking with post-campaign analysis." },
    ],
    faqs: [
      {
        question: "What is the difference between media planning and media buying?",
        answer:
          "Media planning is the strategy: choosing audiences, channels, timing and budget split. Media buying is the execution: negotiating, booking and managing the ad placements. AdsWise handles both so the plan and the buy stay aligned.",
      },
      {
        question: "Do you buy offline media like hoardings and newspapers?",
        answer:
          "Yes. Alongside digital and programmatic, we plan and book outdoor hoardings, transit ads, newspapers, radio and cinema advertising, mainly across Pune and Maharashtra and nationally for larger campaigns.",
      },
    ],
    relatedServices: ["performance-marketing", "strategy-consulting", "video-production"],
    relatedPackages: ["advertising-growth", "offline-and-local-marketing"],
    relatedIndustries: ["fast-moving-consumer-goods", "real-estate-and-construction", "automotive-and-mobility", "government-and-public-sector"],
    relatedBlogs: ["meta-ads-explained-5-things-you-must-know-first"],
    caseStudies: ["real-estate-growth"],
  },
  "email-whatsapp-marketing": {
    quickAnswer:
      "Email and WhatsApp marketing uses automated messages and broadcast campaigns to nurture leads, recover abandoned carts and bring customers back to buy again. AdsWise Marketing sets up the WhatsApp Business API, email platforms, segmented lists and automated flows, so every enquiry gets a fast reply and every customer gets relevant follow-ups.",
    whoFor: [
      "Businesses that lose leads because follow-ups are slow or manual",
      "Ecommerce brands that want abandoned-cart and repeat-purchase flows",
      "Clinics, institutes and service firms sending reminders and updates",
      "B2B companies nurturing long sales cycles",
    ],
    benefits: [
      { title: "Instant lead response", description: "Automated WhatsApp and email replies the moment an enquiry arrives." },
      { title: "More repeat revenue", description: "Win-back, cross-sell and loyalty flows increase customer lifetime value." },
      { title: "Owned audience", description: "Your contact list is an asset you control, independent of ad platforms." },
      { title: "Compliant messaging", description: "Opt-in collection and approved WhatsApp templates that follow platform policies." },
    ],
    faqs: [
      {
        question: "Is WhatsApp marketing allowed for businesses?",
        answer:
          "Yes, through the official WhatsApp Business Platform with opted-in contacts and approved message templates. We set this up correctly so your number stays in good standing.",
      },
      {
        question: "Which works better, email or WhatsApp?",
        answer:
          "WhatsApp gets faster reads and replies, which suits enquiries, reminders and offers in India. Email suits longer content, newsletters and detailed nurture sequences. Most businesses use both for different moments in the customer journey.",
      },
    ],
    relatedServices: ["performance-marketing", "ecommerce-development", "strategy-consulting"],
    relatedPackages: ["crm-and-automation", "lead-generation-and-sales-funnel"],
    relatedIndustries: ["ecommerce-and-product-businesses", "education-businesses", "healthcare-businesses", "banking-and-financial-services"],
    relatedBlogs: ["digital-marketing-tools-5-must-have-tools-for-success"],
    caseStudies: [],
  },
  "brand-development": {
    quickAnswer:
      "Brand development is the process of defining and building how a business is perceived — its strategy, positioning, name, logo, visual identity, voice and messaging — so it is recognisable, trusted and preferred. AdsWise Marketing, a branding agency in Pune, develops brands from research and strategy through to identity systems and brand guidelines.",
    whoFor: [
      "New businesses and startups building a brand from scratch",
      "Established companies that have outgrown their identity",
      "Businesses entering premium segments or new markets",
      "Product companies launching a new brand or range",
    ],
    benefits: [
      { title: "Stand out from competitors", description: "Clear positioning and a distinctive identity make you memorable in a crowded market." },
      { title: "Charge what you are worth", description: "A strong brand builds trust that supports premium pricing." },
      { title: "Consistency everywhere", description: "Guidelines keep the website, social, packaging and sales material aligned." },
      { title: "Marketing works harder", description: "Recognisable brands get better ad response and more word-of-mouth." },
    ],
    faqs: [
      {
        question: "What is included in a brand identity package?",
        answer:
          "Typically brand strategy and positioning, logo design, colour palette, typography, brand voice and messaging, key brand assets, and a brand guidelines document. Packaging, stationery and business profiles can be added.",
      },
      {
        question: "How long does a branding project take?",
        answer:
          "A complete brand identity usually takes four to eight weeks, covering research, strategy, creative routes, refinement and final guidelines.",
      },
    ],
    relatedServices: ["graphics-designing", "strategy-consulting", "website-development"],
    relatedPackages: ["branding-and-identity", "pr-influencer-and-publicity"],
    relatedIndustries: ["startups-and-technology-businesses", "fast-moving-consumer-goods", "personal-and-creator-businesses", "beauty-and-wellness-businesses"],
    relatedBlogs: ["branding-in-marketing-7-pillars-that-build-trust", "branding-basics-4-ps-every-business-should-know"],
    caseStudies: ["footwear-growth"],
  },
};

/** Which individual services deliver each growth package (for package → service links). */
export const packageServices: Record<string, string[]> = {
  "complete-growth-system": ["strategy-consulting", "brand-development", "website-development", "search-engine-optimization", "performance-marketing", "social-media-marketing"],
  "advertising-growth": ["performance-marketing", "media-buying-planning", "graphics-designing", "video-production"],
  "social-media-management": ["social-media-marketing", "graphics-designing", "video-production"],
  "branding-and-identity": ["brand-development", "graphics-designing", "strategy-consulting"],
  "website-and-digital-presence": ["website-development", "ecommerce-development", "search-engine-optimization", "mobile-app-development"],
  "seo-and-organic-growth": ["search-engine-optimization", "platform-listing-optimization", "website-development"],
  "content-engine": ["social-media-marketing", "video-production", "graphics-designing"],
  "lead-generation-and-sales-funnel": ["performance-marketing", "email-whatsapp-marketing", "website-development"],
  "crm-and-automation": ["email-whatsapp-marketing", "website-development", "mobile-app-development"],
  "e-commerce-growth": ["ecommerce-development", "platform-listing-optimization", "performance-marketing", "email-whatsapp-marketing"],
  "pr-influencer-and-publicity": ["social-media-marketing", "video-production", "brand-development"],
  "business-growth-and-consulting": ["strategy-consulting", "brand-development", "performance-marketing"],
  "analytics-and-optimization": ["performance-marketing", "search-engine-optimization", "strategy-consulting"],
  "offline-and-local-marketing": ["media-buying-planning", "platform-listing-optimization", "graphics-designing"],
  "industry-specific-solutions": ["strategy-consulting", "performance-marketing", "search-engine-optimization", "social-media-marketing"],
};
