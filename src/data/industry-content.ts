import type { ServiceFaq } from "@/data/services";

/**
 * SEO / AEO / GEO content for each industry category page (and reused by its business-type pages).
 * Keyed by category slug from industry-categories.ts.
 */
export interface IndustryContent {
  /** Answer-first summary of how Adswise markets this kind of business. */
  intro: string;
  challenges: string[];
  /** Service slugs from services.ts, most important first. */
  services: string[];
  faqs: ServiceFaq[];
  /** In-depth playbook slug from industries.ts, when one exists. */
  playbook?: string;
  /** Case study slugs from case-studies.ts. */
  caseStudies?: string[];
}

export const industryContent: Record<string, IndustryContent> = {
  "local-retail-businesses": {
    intro:
      "Local retail stores grow when nearby shoppers find them on Google Maps, see them regularly on Instagram and Facebook, and have a reason to visit now. AdsWise Marketing helps retailers in Pune and across India drive footfall, calls and WhatsApp orders with local SEO, Google Business Profile optimisation, social media and geo-targeted ads.",
    challenges: [
      "Competing with ecommerce prices and convenience",
      "Low visibility in 'near me' and Google Maps searches",
      "Footfall that depends on seasons, festivals and word of mouth",
    ],
    services: ["platform-listing-optimization", "social-media-marketing", "performance-marketing", "search-engine-optimization"],
    faqs: [
      {
        question: "How can a local store get more walk-in customers from digital marketing?",
        answer:
          "Start with a fully optimised Google Business Profile and fresh reviews, then add geo-targeted Meta and Google ads within a few kilometres of the store, festival and new-arrival offers on Instagram, and WhatsApp catalogues for quick ordering.",
      },
      {
        question: "Is social media useful for small retail shops?",
        answer:
          "Yes. Reels showing new stock, store tours and customer moments build familiarity with local shoppers, and paid boosts targeted around your store turn that attention into visits and WhatsApp enquiries.",
      },
    ],
    caseStudies: ["footwear-growth"],
  },
  "beauty-and-wellness-businesses": {
    intro:
      "Salons, spas, fitness centres and wellness studios win clients through visual proof, reviews and easy booking. AdsWise Marketing grows beauty and wellness businesses with before-and-after content, Instagram reels, local SEO, review generation and booking-focused ad campaigns that fill appointment calendars.",
    challenges: [
      "Empty weekday slots and uneven bookings",
      "Clients choosing competitors based on reviews and Instagram presence",
      "Low repeat-visit and membership renewal rates",
    ],
    services: ["social-media-marketing", "video-production", "platform-listing-optimization", "performance-marketing"],
    faqs: [
      {
        question: "What is the best marketing strategy for a salon or spa?",
        answer:
          "Combine a strong Google Business Profile with steady reviews, Instagram reels showing transformations and your team, targeted offers for slow days through Meta ads, and WhatsApp reminders that bring clients back for their next appointment.",
      },
      {
        question: "How do gyms and fitness studios get more members online?",
        answer:
          "Trial-class and transformation campaigns on Meta, local search visibility for 'gym near me' queries, member success stories and an automated follow-up sequence for every trial enquiry convert interest into memberships.",
      },
    ],
  },
  "food-travel-and-hospitality-businesses": {
    intro:
      "Restaurants, cafes, hotels and travel businesses are chosen on looks, reviews and timing. AdsWise Marketing helps food and hospitality brands get discovered on Google, Instagram, Zomato, Swiggy and booking platforms with mouth-watering content, influencer collaborations, review management and seasonal ad campaigns.",
    challenges: [
      "Heavy dependence on aggregator and OTA commissions",
      "Reviews and ratings that make or break new customers",
      "Seasonal demand and weekday slowdowns",
    ],
    services: ["social-media-marketing", "video-production", "platform-listing-optimization", "performance-marketing"],
    faqs: [
      {
        question: "How can a restaurant or cafe get more customers through social media?",
        answer:
          "Post short food reels and behind-the-scenes content consistently, work with local food creators, run location-targeted offers for slow days, and keep your Google and Zomato listings updated with fresh photos and replies to reviews.",
      },
      {
        question: "How can hotels and resorts increase direct bookings?",
        answer:
          "Invest in a fast booking-ready website, Google Hotel and search ads for your destination, retargeting for visitors who did not book, and email/WhatsApp offers to past guests to reduce reliance on OTA commissions.",
      },
    ],
  },
  "healthcare-businesses": {
    intro:
      "Patients search on Google before choosing a doctor, clinic or diagnostic centre, so visibility and trust decide who gets the appointment. AdsWise Marketing helps clinics and healthcare practices with local SEO, patient-friendly websites, review management, educational content and compliant lead generation that brings in more consultations.",
    challenges: [
      "Ranking for treatment and 'near me' searches in a competitive area",
      "Building trust while following medical advertising guidelines",
      "Converting phone and WhatsApp enquiries into booked appointments",
    ],
    services: ["search-engine-optimization", "website-development", "platform-listing-optimization", "performance-marketing"],
    faqs: [
      {
        question: "How do doctors and clinics get more patients online?",
        answer:
          "Clinics grow fastest with an optimised Google Business Profile, a mobile-friendly website with treatment pages, steady patient reviews, helpful educational content and search ads for high-intent treatment keywords, backed by quick appointment follow-up.",
      },
      {
        question: "Is healthcare marketing allowed in India?",
        answer:
          "Yes, within professional and platform guidelines. We focus on education, transparent information and patient experience, and avoid misleading claims or guarantees of treatment outcomes.",
      },
    ],
    playbook: "healthcare",
  },
  "education-businesses": {
    intro:
      "Coaching classes, institutes and preschools fill seats by being visible when parents and students compare options, and by following up fast. AdsWise Marketing runs admission-focused campaigns for education businesses: lead generation ads, result-driven social content, local SEO and CRM-based counselling follow-ups.",
    challenges: [
      "Admission seasons that leave little time to generate leads",
      "Large lead volumes with low counselling conversion",
      "Standing out against bigger institutes and edtech platforms",
    ],
    services: ["performance-marketing", "social-media-marketing", "email-whatsapp-marketing", "search-engine-optimization"],
    faqs: [
      {
        question: "How can a coaching class get more admissions?",
        answer:
          "Run lead-generation campaigns on Meta and Google ahead of admission season, showcase results and student testimonials on social media, rank for local course searches, and use WhatsApp automation so every enquiry is contacted within minutes.",
      },
      {
        question: "When should education businesses start admission marketing?",
        answer:
          "Ideally eight to twelve weeks before the admission window opens, so awareness, retargeting audiences and lead nurturing are in place when parents and students start deciding.",
      },
    ],
    playbook: "education",
  },
  "professional-services": {
    intro:
      "Clients hire accountants, lawyers, architects and consultants they trust, which makes expertise, reputation and search visibility the main growth levers. AdsWise Marketing builds authority for professional service firms with personal and firm branding, expert content, LinkedIn presence, SEO and a website designed to turn visitors into consultations.",
    challenges: [
      "Growth that relies only on referrals",
      "Explaining expertise without sounding like everyone else",
      "Professional rules that limit direct advertising for some firms",
    ],
    services: ["brand-development", "website-development", "search-engine-optimization", "social-media-marketing"],
    faqs: [
      {
        question: "How do CA, legal and consulting firms get clients online?",
        answer:
          "By publishing helpful expert content, ranking for service and location searches, building a credible website and LinkedIn presence, and collecting reviews, so prospects who search for help find and trust you first.",
      },
      {
        question: "Is LinkedIn marketing useful for professional services?",
        answer:
          "Yes. LinkedIn lets partners and consultants share insights with business owners and decision-makers, which builds authority and generates referrals and direct enquiries over time.",
      },
    ],
    playbook: "interior-design",
    caseStudies: ["interior-design-marketing"],
  },
  "home-and-local-services": {
    intro:
      "When someone needs a plumber, electrician, pest control or packers and movers, they search 'near me' and call the first credible result. AdsWise Marketing helps home and local service businesses win those calls with local SEO, Google Business Profile optimisation, Google Local Services-style search ads and review generation.",
    challenges: [
      "Not appearing in the Google Maps top three for local searches",
      "Paying aggregator platforms for low-quality leads",
      "Missed calls and slow replies losing urgent jobs",
    ],
    services: ["platform-listing-optimization", "search-engine-optimization", "performance-marketing", "email-whatsapp-marketing"],
    faqs: [
      {
        question: "How do local service businesses get more calls from Google?",
        answer:
          "Optimise your Google Business Profile with the right categories, service areas, photos and reviews, build location and service pages on your website, and run call-focused search ads for urgent, high-intent keywords.",
      },
      {
        question: "Are online reviews important for service businesses?",
        answer:
          "Very. Reviews influence both Google Maps rankings and whether a customer calls you. A simple post-job review request by WhatsApp steadily builds your rating and visibility.",
      },
    ],
  },
  "startups-and-technology-businesses": {
    intro:
      "Startups and tech companies need positioning that makes a new product easy to understand, and a growth engine that can be measured and scaled. AdsWise Marketing helps software, SaaS, AI and IT service businesses with go-to-market strategy, brand identity, product websites, B2B lead generation, content and analytics.",
    challenges: [
      "Explaining a complex or new product simply",
      "Limited budgets that must show traction quickly",
      "Long B2B sales cycles with several decision-makers",
    ],
    services: ["strategy-consulting", "brand-development", "website-development", "performance-marketing"],
    faqs: [
      {
        question: "What marketing should an early-stage startup focus on first?",
        answer:
          "Clear positioning and messaging, a conversion-focused website, one or two acquisition channels tested with small budgets, and analytics to measure cost per acquisition — then scale the channels that prove profitable.",
      },
      {
        question: "How do B2B tech companies generate qualified leads?",
        answer:
          "Through search ads on problem-aware keywords, LinkedIn targeting by role and industry, thought-leadership content and SEO, and nurture sequences that move prospects from interest to demo.",
      },
    ],
  },
  "ecommerce-and-product-businesses": {
    intro:
      "Product brands grow by turning ad spend into profitable orders and first-time buyers into repeat customers. AdsWise Marketing grows D2C brands, Shopify stores and Amazon and Flipkart sellers with conversion-focused stores, listing optimisation, Meta and Google Shopping ads, content and retention flows.",
    challenges: [
      "Rising ad costs eating into margins",
      "Low conversion rates and abandoned carts",
      "Dependence on marketplaces and low repeat purchase rates",
    ],
    services: ["ecommerce-development", "performance-marketing", "platform-listing-optimization", "email-whatsapp-marketing"],
    faqs: [
      {
        question: "How can a D2C brand improve return on ad spend?",
        answer:
          "Test creatives continuously, structure campaigns by funnel stage, retarget engaged visitors, improve product page conversion and increase average order value with bundles — then use email and WhatsApp to drive repeat purchases.",
      },
      {
        question: "Should I sell on my own website or on Amazon and Flipkart?",
        answer:
          "Most brands benefit from both: marketplaces for reach and trust, and an owned website for margins, customer data and repeat sales. We help you balance and grow both channels.",
      },
    ],
    caseStudies: ["footwear-growth"],
  },
  "manufacturing-msmes": {
    intro:
      "MSME manufacturers win new buyers when procurement teams can find them online, understand their capabilities and request a quote easily. AdsWise Marketing helps manufacturers and exporters with professional websites, product catalogues, IndiaMART and directory listings, B2B search ads and LinkedIn outreach.",
    challenges: [
      "Relying on dealers, exhibitions and existing contacts for new business",
      "Outdated websites that do not explain capabilities",
      "Being invisible when buyers search for products and part numbers",
    ],
    services: ["website-development", "search-engine-optimization", "platform-listing-optimization", "brand-development"],
    faqs: [
      {
        question: "How can a small manufacturer get B2B leads online?",
        answer:
          "Build a website with detailed product and capability pages, optimise for product-specific searches, maintain strong IndiaMART and trade-directory listings, and run search and LinkedIn campaigns targeted at procurement roles.",
      },
      {
        question: "Does digital marketing work for export businesses?",
        answer:
          "Yes. An export-ready website, international SEO, B2B marketplace listings and targeted LinkedIn and search campaigns help overseas buyers discover and evaluate Indian manufacturers.",
      },
    ],
    playbook: "manufacturing",
  },
  "personal-and-creator-businesses": {
    intro:
      "Coaches, consultants, authors and creators grow when their personal brand is clear, consistent and visible where their audience spends time. AdsWise Marketing builds personal brands with positioning, content strategy, reels and YouTube production, PR features and funnels that turn followers into clients.",
    challenges: [
      "Posting consistently while running the business",
      "Followers who engage but do not buy",
      "Standing out in a crowded creator space",
    ],
    services: ["brand-development", "social-media-marketing", "video-production", "graphics-designing"],
    faqs: [
      {
        question: "How do I build a personal brand on social media?",
        answer:
          "Define a clear niche and point of view, share useful content in a consistent format, show proof and stories, and give your audience a simple next step such as a lead magnet, consultation or course.",
      },
      {
        question: "Can AdsWise manage content for coaches and creators?",
        answer:
          "Yes. We plan topics, script and shoot reels, edit videos, design posts and manage publishing so you can focus on delivering your expertise.",
      },
    ],
  },
  "real-estate-and-construction": {
    intro:
      "Real estate developers and construction firms need a steady flow of qualified buyers and site visits, not just clicks. AdsWise Marketing generates real estate leads with project-specific Google and Meta campaigns, walkthrough videos, locality SEO, CRM integration and fast WhatsApp follow-up that turns enquiries into bookings.",
    challenges: [
      "High lead volumes with poor buyer quality",
      "Long decision cycles and lost follow-ups",
      "Rising cost per lead on portals and ads",
    ],
    services: ["performance-marketing", "video-production", "email-whatsapp-marketing", "search-engine-optimization"],
    faqs: [
      {
        question: "How do real estate developers get quality leads?",
        answer:
          "Use high-intent search campaigns, budget and location filters in lead forms, project walkthrough videos, retargeting and instant CRM-linked WhatsApp follow-up to qualify buyers before handing them to sales.",
      },
      {
        question: "Which ads work best for real estate projects?",
        answer:
          "Google Search for buyers actively looking in a locality, Meta lead ads and video for awareness and launches, and remarketing to keep the project in mind through the long decision cycle.",
      },
    ],
    playbook: "real-estate",
    caseStudies: ["real-estate-growth"],
  },
  "healthcare-and-pharmaceuticals": {
    intro:
      "Hospital groups, pharma and health-tech companies must build trust with patients, doctors and partners while staying compliant. AdsWise Marketing supports healthcare enterprises with brand strategy, search visibility, medical content, reputation management, PR and analytics across every location and product line.",
    challenges: [
      "Strict regulatory and compliance requirements",
      "Managing reputation across many locations and specialities",
      "Reaching both patients and healthcare professionals",
    ],
    services: ["search-engine-optimization", "strategy-consulting", "brand-development", "performance-marketing"],
    faqs: [
      {
        question: "How do hospital groups improve their online reputation?",
        answer:
          "Through consistent listings and reviews for every location, doctor profile pages, responsive review management, patient stories and educational content that answers common health questions.",
      },
      {
        question: "Can pharmaceutical companies do digital marketing in India?",
        answer:
          "Yes, within regulatory limits. Disease awareness, professional education, corporate branding and digital engagement with healthcare professionals are common compliant approaches.",
      },
    ],
    playbook: "healthcare",
  },
  education: {
    intro:
      "Universities, school chains and edtech platforms compete nationally for students and parents who research extensively online. AdsWise Marketing delivers enrolment marketing at scale: brand positioning, programme-level SEO, multi-channel lead generation, CRM automation and analytics that track cost per admission.",
    challenges: [
      "Rising cost per enrolment across channels",
      "Long, research-heavy decision journeys",
      "Coordinating marketing across many campuses and programmes",
    ],
    services: ["performance-marketing", "search-engine-optimization", "email-whatsapp-marketing", "brand-development"],
    faqs: [
      {
        question: "How do universities generate more admission enquiries?",
        answer:
          "Programme-specific landing pages and SEO, search and social lead campaigns timed to admission cycles, student-led content, virtual tours and automated counselling follow-ups through CRM.",
      },
      {
        question: "How is education marketing measured?",
        answer:
          "Beyond leads, we track application starts, completed applications, counselling conversions and cost per enrolment, so budgets move toward the channels that produce admissions.",
      },
    ],
    playbook: "education",
  },
  "banking-and-financial-services": {
    intro:
      "Banks, NBFCs, insurers and fintechs grow by building trust and converting high-intent prospects through secure, compliant digital journeys. AdsWise Marketing helps financial brands with customer acquisition campaigns, content that explains financial products simply, CRM automation and conversion analytics.",
    challenges: [
      "Earning trust for financial products online",
      "Regulatory and compliance review on every message",
      "High drop-off during application and KYC journeys",
    ],
    services: ["performance-marketing", "email-whatsapp-marketing", "search-engine-optimization", "strategy-consulting"],
    faqs: [
      {
        question: "How do financial services companies acquire customers online?",
        answer:
          "Through high-intent search campaigns, educational content that ranks for financial questions, comparison-friendly landing pages, and automated nurture journeys that guide prospects through applications.",
      },
      {
        question: "How can fintech apps reduce application drop-offs?",
        answer:
          "By analysing funnel analytics to find friction, simplifying forms, adding trust signals, and sending timely reminders by WhatsApp, SMS and email to users who start but do not finish.",
      },
    ],
  },
  "automotive-and-mobility": {
    intro:
      "Automotive buyers research online for weeks before visiting a showroom or booking a test drive. AdsWise Marketing helps dealerships, EV brands and mobility companies with model launch campaigns, test-drive lead generation, local dealer marketing, video content and outdoor media.",
    challenges: [
      "Turning online research into showroom visits and test drives",
      "Coordinating brand and dealer-level marketing",
      "Educating buyers about EVs and new technology",
    ],
    services: ["performance-marketing", "video-production", "media-buying-planning", "platform-listing-optimization"],
    faqs: [
      {
        question: "How do car dealerships generate test-drive leads?",
        answer:
          "With model-specific search and Meta lead campaigns, inventory-led ads, a strong Google Business Profile for each showroom and fast follow-up through WhatsApp and calls.",
      },
      {
        question: "How should EV companies market to new buyers?",
        answer:
          "Address range, charging and cost-of-ownership questions with clear content and video, use influencers and test-ride events for trust, and target early adopters with performance campaigns.",
      },
    ],
  },
  "information-technology-and-software": {
    intro:
      "IT, software and cloud companies sell to informed buyers who compare vendors carefully. AdsWise Marketing helps technology companies build pipeline with positioning, technical SEO and content, account-based LinkedIn campaigns, search ads and analytics that connect marketing to revenue.",
    challenges: [
      "Differentiating in crowded technology categories",
      "Reaching multiple stakeholders in buying committees",
      "Proving marketing contribution to pipeline and revenue",
    ],
    services: ["strategy-consulting", "search-engine-optimization", "performance-marketing", "website-development"],
    faqs: [
      {
        question: "What is the best lead generation strategy for IT companies?",
        answer:
          "Combine SEO and thought-leadership content for inbound demand, search ads on solution keywords, account-based LinkedIn campaigns for target companies, and nurture sequences that move leads toward demos.",
      },
      {
        question: "How long does B2B technology marketing take to deliver results?",
        answer:
          "Paid campaigns can produce leads within weeks, while SEO and content typically build meaningful pipeline over three to six months. Most programmes run both for short- and long-term growth.",
      },
    ],
  },
  "manufacturing-and-engineering": {
    intro:
      "Industrial and engineering companies need marketing that speaks the language of engineers and procurement teams. AdsWise Marketing helps manufacturers build credibility and pipeline with technical websites, product SEO, corporate branding, trade-show support, LinkedIn and account-based campaigns.",
    challenges: [
      "Highly technical products that generic marketing cannot explain",
      "Long sales cycles with many stakeholders",
      "Marketing and sales teams working in silos",
    ],
    services: ["website-development", "search-engine-optimization", "brand-development", "strategy-consulting"],
    faqs: [
      {
        question: "How do industrial manufacturers use digital marketing?",
        answer:
          "Through technical product pages and spec sheets that rank in search, corporate videos, LinkedIn and account-based campaigns aimed at buyers, and CRM-linked lead tracking that connects marketing to sales.",
      },
      {
        question: "Is SEO effective for B2B manufacturing?",
        answer:
          "Yes. Engineers and buyers search for products, specifications and part numbers. Ranking for these specific terms brings highly qualified enquiries at a lower cost than most paid channels.",
      },
    ],
    playbook: "manufacturing",
  },
  "retail-and-ecommerce": {
    intro:
      "Retail chains and large ecommerce brands need omnichannel growth that connects stores, websites and marketplaces. AdsWise Marketing supports retail groups with performance marketing at scale, local store marketing, marketplace growth, CRM and loyalty, and analytics for every channel.",
    challenges: [
      "Connecting online and in-store customer journeys",
      "Managing marketing across many locations and categories",
      "Measuring true return across channels",
    ],
    services: ["performance-marketing", "ecommerce-development", "platform-listing-optimization", "email-whatsapp-marketing"],
    faqs: [
      {
        question: "What is omnichannel marketing for retail?",
        answer:
          "Omnichannel marketing gives customers a connected experience across stores, website, app, marketplaces, social media and messaging, using shared data so offers and communication stay consistent.",
      },
      {
        question: "How can retail chains drive store visits with digital ads?",
        answer:
          "Use store-level Google Business Profiles, local inventory and location-targeted campaigns, and measure store visits and offline conversions alongside online sales.",
      },
    ],
  },
  "fast-moving-consumer-goods": {
    intro:
      "FMCG brands grow through mass awareness, distinctive branding and constant presence at the moment of purchase. AdsWise Marketing helps consumer goods companies with brand campaigns, packaging design, influencer marketing, content at scale, quick-commerce and retail visibility, and integrated online and offline media.",
    challenges: [
      "Standing out on crowded shelves and quick-commerce apps",
      "Building brand recall across many regions",
      "Balancing brand building with short-term sales",
    ],
    services: ["brand-development", "graphics-designing", "media-buying-planning", "social-media-marketing"],
    faqs: [
      {
        question: "How do FMCG brands use digital marketing?",
        answer:
          "With high-reach video and social campaigns, influencer partnerships, regional content, quick-commerce and marketplace advertising, and sampling or offer campaigns that drive trial.",
      },
      {
        question: "Can AdsWise design packaging for FMCG products?",
        answer:
          "Yes. Our design team creates packaging and label design aligned with your brand strategy and built to stand out on shelves and in online listings.",
      },
    ],
  },
  "travel-and-hospitality": {
    intro:
      "Hotel chains, airlines and tour operators compete for travellers who plan with search, reviews and social inspiration. AdsWise Marketing grows travel brands with destination content, SEO, performance campaigns for bookings, influencer collaborations and reputation management.",
    challenges: [
      "Dependence on online travel agencies and their commissions",
      "Highly seasonal and price-sensitive demand",
      "Reputation shaped by reviews across many platforms",
    ],
    services: ["social-media-marketing", "video-production", "search-engine-optimization", "performance-marketing"],
    faqs: [
      {
        question: "How do travel companies get more direct bookings?",
        answer:
          "With destination and experience content that ranks in search, booking-focused campaigns, retargeting of interested visitors, and loyalty offers to past guests through email and WhatsApp.",
      },
      {
        question: "Does influencer marketing work for hotels and tourism?",
        answer:
          "Yes. Travel creators show real experiences that inspire bookings, and their content can be reused in ads and on your website for social proof.",
      },
    ],
  },
  "media-and-entertainment": {
    intro:
      "Media, film, music, gaming and events companies live on attention. AdsWise Marketing builds audiences for entertainment brands with social-first content, launch and release campaigns, influencer and PR amplification, and paid media that drives views, tickets and subscriptions.",
    challenges: [
      "Short attention windows around launches and releases",
      "Fragmented audiences across platforms",
      "Converting buzz into tickets, streams or subscriptions",
    ],
    services: ["social-media-marketing", "video-production", "performance-marketing", "media-buying-planning"],
    faqs: [
      {
        question: "How do you market a film, show or event release?",
        answer:
          "Build a phased campaign: teasers and creator partnerships for awareness, trailers and PR around launch, targeted ads for tickets or streams, and community engagement to keep momentum after release.",
      },
      {
        question: "Which platforms matter most for entertainment brands?",
        answer:
          "Instagram, YouTube and short-video platforms drive discovery, while X, communities and PR shape conversation. The right mix depends on your audience and content format.",
      },
    ],
  },
  telecommunications: {
    intro:
      "Telecom operators and internet service providers compete on coverage, price and service in markets where switching is easy. AdsWise Marketing helps telecom brands with acquisition campaigns, local area marketing, CRM-led retention, plan-comparison content and analytics.",
    challenges: [
      "Price-driven competition and high churn",
      "Area-specific coverage that needs hyperlocal targeting",
      "Explaining plans and bundles clearly",
    ],
    services: ["performance-marketing", "email-whatsapp-marketing", "media-buying-planning", "strategy-consulting"],
    faqs: [
      {
        question: "How do internet service providers get new connections?",
        answer:
          "Through hyperlocal search and social campaigns in serviceable areas, society and building-level offline activations, referral offers and fast follow-up on every enquiry.",
      },
      {
        question: "How can telecom companies reduce churn?",
        answer:
          "Use CRM data to spot at-risk customers, send timely renewal and upgrade offers by WhatsApp and SMS, and improve service communication to build loyalty.",
      },
    ],
  },
  "energy-and-utilities": {
    intro:
      "Energy, solar and utility companies need trust, education and long-term relationships with customers and stakeholders. AdsWise Marketing helps energy brands with corporate branding, sustainability communication, PR, lead generation for solar and EV charging, and local awareness campaigns.",
    challenges: [
      "Explaining technical and financial benefits simply",
      "Building public trust and sustainability credibility",
      "Generating qualified leads for solar and EV solutions",
    ],
    services: ["brand-development", "performance-marketing", "video-production", "media-buying-planning"],
    faqs: [
      {
        question: "How do solar companies generate leads?",
        answer:
          "With savings-focused search and Meta campaigns, rooftop calculators on landing pages, local SEO, customer installation stories and quick site-survey booking through WhatsApp.",
      },
      {
        question: "Why is branding important for energy companies?",
        answer:
          "Energy decisions are long-term and high-value. A credible brand with clear sustainability communication reassures customers, investors, regulators and partners.",
      },
    ],
  },
  "logistics-and-supply-chain": {
    intro:
      "Logistics, courier and warehousing companies win contracts when shippers trust their reliability and can quickly see coverage and capabilities. AdsWise Marketing helps logistics businesses with professional websites, B2B SEO, LinkedIn and search lead generation, and growth consulting.",
    challenges: [
      "Commoditised services competing on price",
      "Long B2B sales cycles for contract logistics",
      "Low online visibility for service and route searches",
    ],
    services: ["website-development", "search-engine-optimization", "performance-marketing", "strategy-consulting"],
    faqs: [
      {
        question: "How do logistics companies get B2B clients online?",
        answer:
          "With service and route-specific pages that rank in search, case studies that prove reliability, LinkedIn campaigns aimed at supply chain decision-makers and quote-request forms connected to a CRM.",
      },
      {
        question: "What should a logistics company website include?",
        answer:
          "Clear services, coverage areas, fleet and warehouse capabilities, industries served, certifications, client proof, tracking access and an easy quote request.",
      },
    ],
  },
  "agriculture-and-agribusiness": {
    intro:
      "Agribusinesses must reach farmers, distributors and food companies across regions and languages. AdsWise Marketing helps agri-input, dairy, agritech and agri-export companies with brand building, regional-language content, dealer and farmer outreach, websites and B2B lead generation.",
    challenges: [
      "Reaching rural audiences across regions and languages",
      "Building farmer trust in new products",
      "Managing dealer and distributor networks",
    ],
    services: ["brand-development", "media-buying-planning", "website-development", "social-media-marketing"],
    faqs: [
      {
        question: "How do agriculture companies market to farmers?",
        answer:
          "Through regional-language video on YouTube and WhatsApp, demonstration and field-day content, dealer point-of-sale material, and local outdoor and event activations.",
      },
      {
        question: "Can digital marketing help agri-export businesses?",
        answer:
          "Yes. An export-ready website, B2B marketplace presence, certifications and quality content, and targeted search and LinkedIn campaigns help overseas buyers find and trust you.",
      },
    ],
  },
  "government-and-public-sector": {
    intro:
      "Government departments, public sector companies and social programmes need clear communication that reaches citizens at scale. AdsWise Marketing supports public awareness campaigns with content strategy, social media management, outdoor and print media, PR and multilingual creative.",
    challenges: [
      "Reaching diverse audiences across languages and regions",
      "Making policies and schemes easy to understand",
      "Measuring awareness and behaviour change",
    ],
    services: ["social-media-marketing", "media-buying-planning", "video-production", "graphics-designing"],
    faqs: [
      {
        question: "How are public awareness campaigns planned?",
        answer:
          "Define the behaviour you want to change, understand the audience, craft simple multilingual messages, and combine social media, outdoor, print, radio and community activations, with reach and response tracked throughout.",
      },
      {
        question: "Does AdsWise manage social media for public organisations?",
        answer:
          "Yes. We plan content calendars, create multilingual posts and videos, handle community responses and report on reach and engagement.",
      },
    ],
  },
};

/** Extra content for the in-depth playbook pages under /industries/[slug]. */
export const playbookContent: Record<
  string,
  { quickAnswer: string; faqs: ServiceFaq[]; services: string[]; categories: string[]; caseStudies: string[] }
> = {
  "real-estate": {
    quickAnswer:
      "Real estate digital marketing uses Google search ads, Meta lead campaigns, locality SEO, project videos and CRM-linked follow-up to turn online interest into site visits and bookings. AdsWise Marketing runs real estate marketing for developers, builders and brokers in Pune and across Maharashtra, focused on lead quality and cost per site visit.",
    faqs: [
      {
        question: "What is the cost per lead for real estate marketing?",
        answer:
          "Cost per lead varies by city, locality, project price and competition. We focus on cost per qualified lead and cost per site visit, using lead-form filters and fast follow-up to improve both over time.",
      },
      {
        question: "How quickly can a real estate campaign generate leads?",
        answer:
          "Search and Meta lead campaigns usually start producing enquiries within the first week. Lead quality and cost improve over the following weeks as targeting and creatives are optimised.",
      },
      {
        question: "Do you handle marketing for new project launches?",
        answer:
          "Yes. We plan pre-launch teasers, launch campaigns, walkthrough videos, landing pages, channel-partner material and outdoor media for new residential and commercial projects.",
      },
    ],
    services: ["performance-marketing", "video-production", "search-engine-optimization", "email-whatsapp-marketing"],
    categories: ["real-estate-and-construction", "professional-services"],
    caseStudies: ["real-estate-growth"],
  },
  manufacturing: {
    quickAnswer:
      "Manufacturing digital marketing helps factories, OEMs and industrial suppliers reach procurement teams and engineers through technical websites, product-level SEO, IndiaMART and directory listings, LinkedIn and search ads. AdsWise Marketing builds B2B lead systems for manufacturers in the Pune industrial belt and across India.",
    faqs: [
      {
        question: "Which digital channels work best for manufacturers?",
        answer:
          "Search engines for product and part-number queries, LinkedIn for reaching procurement and engineering roles, B2B marketplaces like IndiaMART, and email nurturing for long sales cycles.",
      },
      {
        question: "Can you write technical content for industrial products?",
        answer:
          "Yes. We work with your engineers to create accurate product pages, spec sheets, application notes and explainer videos that buyers and search engines understand.",
      },
      {
        question: "Do you support trade shows and exhibitions?",
        answer:
          "Yes. We create exhibition branding, brochures and product videos, and run pre-event and post-event digital campaigns to maximise meetings and follow-ups.",
      },
    ],
    services: ["website-development", "search-engine-optimization", "performance-marketing", "brand-development"],
    categories: ["manufacturing-msmes", "manufacturing-and-engineering"],
    caseStudies: ["footwear-growth"],
  },
  "interior-design": {
    quickAnswer:
      "Interior design marketing turns project portfolios into enquiries through a visual website, Instagram and Pinterest content, local SEO, Meta and Google ads and quick lead follow-up. AdsWise Marketing helps interior designers and design studios in Pune attract premium residential and commercial clients.",
    faqs: [
      {
        question: "How do interior designers get clients online?",
        answer:
          "Showcase finished projects with professional photos and reels, rank on Google for local interior design searches, collect client reviews, and run targeted ads for homeowners in new projects and premium localities.",
      },
      {
        question: "Is Instagram good for interior design businesses?",
        answer:
          "Yes. Interior design is highly visual, so before-and-after reels, walkthroughs and design tips on Instagram build trust and bring in enquiries, especially when supported by targeted ads.",
      },
      {
        question: "What results have you achieved for interior designers?",
        answer:
          "For Space Them Upp, an interior design studio, our SEO, portfolio optimisation and paid campaigns contributed to a 200% increase in organic traffic and 120% revenue growth.",
      },
    ],
    services: ["social-media-marketing", "website-development", "search-engine-optimization", "performance-marketing"],
    categories: ["professional-services", "real-estate-and-construction"],
    caseStudies: ["interior-design-marketing"],
  },
  healthcare: {
    quickAnswer:
      "Healthcare digital marketing helps hospitals, clinics and doctors attract patients through local SEO, Google Business Profile, patient-friendly websites, educational content, reputation management and compliant search ads. AdsWise Marketing supports healthcare providers in Pune and across India with ethical, patient-first marketing.",
    faqs: [
      {
        question: "How can a hospital or clinic rank higher on Google?",
        answer:
          "Optimise each location's Google Business Profile, build treatment and doctor pages, add medical schema markup, earn reviews and publish trustworthy content that answers patients' questions.",
      },
      {
        question: "Do you create medical content?",
        answer:
          "Yes. We create patient education content reviewed by your doctors, so it is accurate, easy to understand and compliant with medical communication guidelines.",
      },
      {
        question: "Can you help with patient appointment booking?",
        answer:
          "Yes. We set up online booking, WhatsApp appointment flows and reminder messages that reduce no-shows and make it easy for patients to reach you.",
      },
    ],
    services: ["search-engine-optimization", "platform-listing-optimization", "website-development", "performance-marketing"],
    categories: ["healthcare-businesses", "healthcare-and-pharmaceuticals"],
    caseStudies: [],
  },
  education: {
    quickAnswer:
      "Education marketing helps schools, colleges, coaching classes and edtech platforms increase admissions through brand positioning, lead-generation ads, programme SEO, student content and CRM-based counselling follow-up. AdsWise Marketing runs admission campaigns for education brands in Pune and across India.",
    faqs: [
      {
        question: "What is the best way to increase admissions?",
        answer:
          "Start campaigns ahead of admission season, combine search and social lead ads with programme landing pages, showcase student outcomes, and contact every enquiry quickly with automated WhatsApp and counsellor follow-up.",
      },
      {
        question: "Do you market online courses and edtech platforms?",
        answer:
          "Yes. We run performance campaigns, webinar funnels, content marketing and email/WhatsApp nurturing for online courses and education technology products.",
      },
      {
        question: "How do you measure admission campaign success?",
        answer:
          "We track leads, counselling sessions, applications and enrolments by channel, so you know your cost per admission and where to invest next.",
      },
    ],
    services: ["performance-marketing", "social-media-marketing", "email-whatsapp-marketing", "website-development"],
    categories: ["education-businesses", "education"],
    caseStudies: [],
  },
};
