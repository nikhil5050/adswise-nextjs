export interface ServiceOffering {
  title: string;
  description: string;
}

export interface ServiceProcessStep {
  step: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  icon: string;
  offerings: ServiceOffering[];
  process?: ServiceProcessStep[];
  faqs?: ServiceFaq[];
}

export const services: Service[] = [
  {
    slug: "strategy-consulting",
    title: "Strategy Consulting",
    shortDescription:
      "Data-driven brand building strategies designed to create lasting brand experiences, build trust, and fuel business growth.",
    overview:
      "Strategy consulting is a collaborative effort between our team and your stakeholders to diagnose business issues and develop impactful solutions: determining a brand's strategic position and value proposition, understanding customer experiences and high-impact touchpoints, and prioritizing activities that build awareness, preference, and purchase intention. Our consultants combine market research, competitor insight, and real-world testing to provide actionable recommendations, resulting in an informed brand architecture, messaging platform, and marketing strategy linked to business outcomes.",
    icon: "Target",
    offerings: [
      {
        title: "Strategy Development",
        description:
          "Discovery, stakeholder interviews, brand audits, positioning and value-proposition workshops, customer segmentation, and competitive landscape mapping.",
      },
      {
        title: "Campaign Management",
        description:
          "Integrated campaign planning, channel orchestration, budget allocation, A/B testing, iterative optimization, and creative briefs with production oversight.",
      },
      {
        title: "Content Creation",
        description:
          "Brand stories and messaging pillars, website copy and landing pages, creative assets like videos and social content, and SEO-friendly content for visibility.",
      },
      {
        title: "Analytics & Reporting",
        description:
          "Defining KPIs and dashboards, attribution and conversion analysis, monthly reviews, and strategic shifts based on real-time data.",
      },
      {
        title: "Paid Advertising",
        description:
          "Paid search, display, and social advertising with audience targeting, retargeting, landing page optimization, and cost-per-acquisition modeling.",
      },
    ],
    process: [
      { step: "Discover", description: "Deep dive research, stakeholder alignment, and KPI establishment." },
      { step: "Define", description: "Brand positioning, message framework, and segmentation." },
      { step: "Design", description: "Creative direction, content strategy, and channel strategy." },
      { step: "Deliver", description: "Campaign execution, content creation, and paid media launch." },
      { step: "Measure", description: "Analytics establishment, reporting rhythm, and optimization." },
      { step: "Scale", description: "Rollout strategy, multi-channel testing, and continuous improvement." },
    ],
    faqs: [
      {
        question: "What are brand building strategies and how do they help my business?",
        answer:
          "Brand building strategies are coordinated efforts — positioning, messaging, content, and distribution — that increase awareness, preference, and customer loyalty, helping businesses charge premium prices, reduce churn, and grow sustainably.",
      },
      {
        question: "How long until I see results from brand building strategies?",
        answer:
          "Short-term improvements in awareness and traffic can appear within 4–8 weeks. Meaningful brand equity and measurable revenue impact typically develop over 3–12 months depending on budget and market dynamics.",
      },
      {
        question: "Do you offer link building as part of brand consulting?",
        answer:
          "Yes. We integrate ethical link building to strengthen domain authority and amplify organic discoverability as part of broader content and PR programs.",
      },
      {
        question: "Can you help with both B2B and B2C brand building?",
        answer:
          "Absolutely. We design audience-specific strategies — B2C focuses on emotion and scale, while B2B emphasizes trust, thought leadership, and relationship building.",
      },
      {
        question: "What metrics do you use to measure brand strategy success?",
        answer:
          "We track brand metrics like awareness and share of voice, performance metrics like traffic, leads, and conversions, and financial KPIs like CAC, LTV, and revenue growth.",
      },
    ],
  },
  {
    slug: "social-media-marketing",
    title: "Social Media Marketing",
    shortDescription:
      "Comprehensive social media marketing solutions, from creative content strategies to data-driven approaches that launch products, drive acquisition, and build brand equity.",
    overview:
      "We take a full-funnel approach to social, designing systems that attract attention, foster consideration, and drive interest into action. Platform ecosystems are constantly evolving — algorithms, ad types, and audience behaviors keep changing — so we don't take a one-size-fits-all approach. Instead we build platform-specific playbooks suited to your product, audience, and commercial objectives, combining creativity with analysis so content makes a measurable difference.",
    icon: "Share2",
    offerings: [
      {
        title: "Brand & Channel Audits",
        description: "Quickly identify opportunities for short-term gain and long-term strategy.",
      },
      {
        title: "Content Strategy & Production",
        description: "Short-form video, static and carousel images, stories, and other native formats.",
      },
      {
        title: "Community Management",
        description: "Safeguard and enhance brand reputation through proactive engagement.",
      },
      {
        title: "Paid Social Campaign Strategy",
        description: "Test and optimize ad campaigns across major platforms for maximum ROAS.",
      },
      {
        title: "Measurement Frameworks",
        description: "Dashboards that reliably link social media activity to tangible business outcomes.",
      },
    ],
    process: [
      {
        step: "Discover",
        description: "Audit channels, competitors, and audiences to set a performance baseline and identify opportunities.",
      },
      {
        step: "Design",
        description: "Set measurable objectives, develop content pillars, and design campaign blueprints.",
      },
      {
        step: "Deliver",
        description: "Produce short-form videos, thumb-stopping hooks, carousel stories, and ad creatives tailored to platform nuances.",
      },
      {
        step: "Scale",
        description: "Design experiments, scale winning creative and audiences, and optimize funnels to improve conversion metrics.",
      },
    ],
  },
  {
    slug: "graphics-designing",
    title: "Graphics Designing",
    shortDescription:
      "Strategic visuals that bring together brand strategy and eye-catching design, from concept to delivery across web, social, print, and packaging.",
    overview:
      "A good visual identity is the fast track to establishing credibility. Good graphic design does more than create beautiful visuals — it understands your market, communicates through the power of design, and delivers creative solutions that increase engagement, shortening the distance between attention, trust, and conversion. Our designers interpret brand strategy through visuals, design logos, typography, and color systems, develop marketing materials for web, social, print, and packaging, and evaluate designs based on user testing and performance metrics.",
    icon: "Palette",
    offerings: [
      {
        title: "Strategy Development",
        description: "Brand audits, visual research, positioning workshops, moodboarding, and visual strategy documents.",
      },
      {
        title: "Brand Identity & Logo Design",
        description: "Logo concepts, lockups, responsive marks, color palettes, typography, iconography, and brand guidelines.",
      },
      {
        title: "Marketing & Campaign Design",
        description: "Social creative, ad visuals, motion assets, email templates, banners, and print collateral.",
      },
      {
        title: "Packaging & Product Design",
        description: "Structural packaging concepts, dielines, label design, point-of-sale, and production-ready files.",
      },
      {
        title: "UX Visuals & Product Graphics",
        description: "UI asset design, icon systems, illustrations, app store visuals, and onboarding graphics.",
      },
      {
        title: "Content Creation & Motion Graphics",
        description: "Short-form videos, animated logos, explainers, GIFs, and motion templates for ads and social.",
      },
      {
        title: "Analytics & Design Optimization",
        description: "A/B testing of creative variants, engagement tracking, and quarterly creative audits tied to campaign KPIs.",
      },
    ],
    process: [
      { step: "Discover & Research", description: "Interviews with the brand, competitor research, and audience research." },
      { step: "Concepting & Ideation", description: "Fast sketching, mood boarding, and direction setting." },
      { step: "Design Execution", description: "Polished drafts, refinements, and approvals from stakeholders." },
      { step: "Prototyping & Testing", description: "Mockups, A/B creative tests, and user tests." },
      { step: "Delivery & Handover", description: "Final files, brand guidelines, and production specifications." },
      { step: "Deploy & Monitor", description: "Testing the live creative across channels and tracking results." },
      { step: "Iterate & Scale", description: "Scaling the visual assets into campaigns or products." },
    ],
    faqs: [
      {
        question: "How do I know if I need a single designer or a full design team?",
        answer:
          "If you need strategy, identity systems, and multi-channel execution, our full team offers end-to-end support. For a single project like a logo or packaging, a smaller engagement can be a great fit — we help evaluate scope and budget.",
      },
      {
        question: "How long does a typical brand identity project take?",
        answer:
          "Most brand identity projects run 6–10 weeks depending on reviews and complexity. Packaging or product systems may take longer due to supplier coordination.",
      },
      {
        question: "Do you provide files ready for print and production?",
        answer: "Yes. We deliver production-ready files, dielines, color specs, and vendor-ready assets for print and manufacturing.",
      },
      {
        question: "Can you adapt designs for social advertising and performance campaigns?",
        answer:
          "Absolutely. Our creative process includes producing variants and motion assets optimized for ad platforms to maximize ROAS.",
      },
      {
        question: "Do you work with specialist illustrators and motion artists?",
        answer:
          "We collaborate with specialist illustrators, typographers, and motion artists to ensure the highest creative standards.",
      },
    ],
  },
  {
    slug: "video-production",
    title: "Video Production",
    shortDescription:
      "Top-notch video content that communicates your message, captures attention, and delivers measurable marketing success.",
    overview:
      "In today's digital world, video is one of the most powerful tools for business growth — across social media, websites, and advertising campaigns, video helps businesses communicate their message more effectively than ever. We ensure your video content represents your brand's identity and drives business forward, producing high-quality videos that grab attention and encourage action.",
    icon: "Video",
    offerings: [
      {
        title: "Strategy & Campaign Management",
        description: "Target audience definition, format selection, product launches, and channel management aligned to your goals.",
      },
      {
        title: "Content Creation",
        description: "Brand intros, product demos, social reels, corporate videos, testimonials, and event videos.",
      },
      {
        title: "Analytics & Reporting",
        description: "Tracking video views and watch time, engagement and retention, and conversion impact.",
      },
      {
        title: "Paid Ads Integration",
        description: "Optimizing videos for YouTube Ads, Meta (Facebook/Instagram), social ads, and remarketing.",
      },
    ],
    process: [
      { step: "Discovery & Planning", description: "Getting to know your brand, objectives, and audience." },
      { step: "Creative Concept Development", description: "Developing the concept, storyline, and script." },
      { step: "Pre-Production", description: "Organizing location, equipment, crew, and logistics." },
      { step: "Production", description: "Actual shooting using quality equipment." },
      { step: "Post-Production", description: "Editing and visual effects to create the final product." },
      { step: "Optimization & Delivery", description: "Preparing the video in different formats for each platform." },
      { step: "Performance Monitoring", description: "Evaluating the performance of the video after launch." },
    ],
    faqs: [
      {
        question: "How long does it take to produce a marketing video?",
        answer:
          "The timeline depends on project complexity. Simple social media videos may take a few days, while larger brand videos may require several weeks including planning, filming, and editing.",
      },
      {
        question: "Do you provide scriptwriting and concept development?",
        answer: "Yes. Our team develops creative concepts, scripts, and storyboards before filming begins.",
      },
      {
        question: "Can videos be optimized for social media platforms?",
        answer: "Absolutely. We produce videos specifically designed for platforms like Instagram, YouTube, and LinkedIn to maximize engagement.",
      },
      {
        question: "Do you offer video marketing along with production?",
        answer: "Yes. We integrate video production with the rest of your digital marketing campaigns.",
      },
      {
        question: "What types of businesses benefit from video marketing?",
        answer: "Almost every industry benefits from video, including retail, technology, education, healthcare, and real estate.",
      },
    ],
  },
  {
    slug: "performance-marketing",
    title: "Performance Marketing",
    shortDescription:
      "Performance marketing that leverages data, creativity, and optimization to reduce CPA, increase ROAS, and drive sustainable growth.",
    overview:
      "Performance marketing is about results, not impressions — leads, sales, signups, and high-value customer acquisition. We create campaigns directly tied to revenue and test aggressively to scale what works, using paid media such as search, social, and programmatic ads, landing pages, and attribution modeling to see exactly what is driving the needle, whether you need a quick acquisition strategy or a full growth roadmap with KPIs and timelines.",
    icon: "TrendingUp",
    offerings: [
      {
        title: "Strategy Development",
        description: "Full funnel analysis, KPI definition, attribution planning, channel mix planning, and a growth experiments roadmap.",
      },
      {
        title: "Campaign Management",
        description: "Account setup, audience architecture, bid automation, creative testing, and real-time budget pacing.",
      },
      {
        title: "Creative & Content",
        description: "Conversion-first ad creative, landing pages, video ads, and dynamic creative optimization.",
      },
      {
        title: "Conversion Rate Optimization",
        description: "Landing page audits, multivariate testing, UX improvements, heatmaps, and session recordings.",
      },
      {
        title: "Analytics & Reporting",
        description: "Unified dashboarding, revenue attribution, cohort analysis, LTV modeling, and strategic reviews.",
      },
      {
        title: "Growth & Paid Media Integration",
        description: "Cross-channel strategies, CRM and email sync for retargeting, and incrementality testing.",
      },
    ],
    process: [
      { step: "Discover & Benchmark", description: "Media, tracking, creative, and conversion funnel audits." },
      { step: "Define Strategy", description: "KPIs, channels, budgets, and an experimentation roadmap." },
      { step: "Build & Launch", description: "Campaign creation, tracking, creative, and landing page construction." },
      { step: "Test & Learn", description: "A/B testing, audience segmentation, and bid experimentation." },
      { step: "Optimize & Scale", description: "Focus on winners, creative optimization, and reach expansion." },
      { step: "Measure & Report", description: "Transparent metrics and outcome-focused reviews." },
      { step: "Iterate for LTV", description: "Retention, cross-sell, and upsell optimization with paid insights." },
    ],
    faqs: [
      {
        question: "What is the difference between performance marketing and traditional advertising?",
        answer:
          "Performance marketing centers on measurable outcomes and continuous optimization, while traditional advertising often focuses on awareness and impressions without direct attribution to conversions.",
      },
      {
        question: "How quickly can performance marketing produce results?",
        answer:
          "Initial learnings often appear in 2–6 weeks; meaningful scale and stable ROAS typically take 3–6 months depending on spend and market dynamics.",
      },
      {
        question: "Do you offer services for small budgets or startups?",
        answer: "Yes. We design lean experimentation plans to validate channels and creative before scaling budgets.",
      },
      {
        question: "How do you measure long-term impact (LTV) from paid campaigns?",
        answer:
          "We use cohort analysis, CRM stitching, and attribution models to connect initial acquisition to lifetime revenue and optimize for LTV, not just first purchase.",
      },
      {
        question: "Can you run region-specific programs, for example in Pune?",
        answer: "Absolutely. We tailor audience definitions, creatives, and media mixes for regional markets.",
      },
    ],
  },
  {
    slug: "website-development",
    title: "Website Development",
    shortDescription:
      "Full-stack, business-growing websites with intuitive user experience, bulletproof development, and conversion-focused strategy.",
    overview:
      "Your website is often the first time a new customer hears about your business, so that first impression needs to be quick, clear, and compelling. We combine user experience, frontend, and backend development with search engine optimization to build websites that achieve marketing, sales, and product goals — whether you're launching a new business, migrating platforms, or scaling an existing portal.",
    icon: "Code",
    offerings: [
      {
        title: "Strategy & Planning",
        description: "Discovery sessions, technical audits, performance benchmarks, and feature road mapping.",
      },
      {
        title: "UI/UX & Design",
        description: "User research, persona-based wireframing, mobile-first responsive design, and accessibility audits.",
      },
      {
        title: "Frontend Development",
        description: "Modern frameworks, pixel-perfect builds, responsive layouts, animations, and cross-browser testing.",
      },
      {
        title: "Backend Development",
        description: "Backend architecture, APIs, microservices, database design, and CMS and tool integrations.",
      },
      {
        title: "eCommerce Development",
        description: "Shopify, WooCommerce, or custom platforms with conversion-optimized product pages and checkout flows.",
      },
      {
        title: "Performance & Security",
        description: "Core Web Vitals optimization, CDN configuration, and secure, managed hosting.",
      },
      {
        title: "Maintenance & SEO",
        description: "SEO-friendly URLs and schema, content workflows, ongoing updates, backups, and analytics setup.",
      },
    ],
    process: [
      { step: "Discover & Define", description: "Strategic workshops, technical audits, key KPIs." },
      { step: "Design & Prototype", description: "Wireframes, visual design, user testing." },
      { step: "Build & Integrate", description: "Frontend development, backend development, third-party integrations." },
      { step: "Test & Launch", description: "Quality assurance, performance tuning, staged rollouts." },
      { step: "Measure & Improve", description: "Analytics, A/B testing, iterative updates." },
      { step: "Maintain & Secure", description: "Backups, updates, iterative optimizations." },
      { step: "Scale", description: "New features, multilingual support, platform migrations." },
    ],
    faqs: [
      {
        question: "How long does a website build take?",
        answer:
          "Timelines vary by complexity. A basic marketing site typically takes 6–10 weeks; complex platforms or eCommerce stores may take 12–20+ weeks. We provide realistic schedules after discovery.",
      },
      {
        question: "Do you provide responsive and mobile-first development?",
        answer: "Yes. Every project follows a mobile-first approach to ensure fast, accessible experiences across devices.",
      },
      {
        question: "Which CMS should I choose — WordPress, Webflow, or headless?",
        answer:
          "It depends on your needs. WordPress fits content-heavy sites, Webflow suits design-led builds, and headless is ideal for scale and custom experiences. We recommend the best option during strategy sessions.",
      },
      {
        question: "Will my site be SEO-friendly out of the box?",
        answer: "Absolutely. We implement technical SEO foundations, schema markup, and SEO-friendly templates as part of standard builds.",
      },
      {
        question: "Do you support post-launch maintenance and updates?",
        answer: "Yes. We offer maintenance plans that include security updates, backups, performance monitoring, and iterative improvements.",
      },
    ],
  },
  {
    slug: "ecommerce-development",
    title: "Ecommerce Development",
    shortDescription:
      "Conversion-focused ecommerce web development, from platform selection through to checkout optimization.",
    overview:
      "Ecommerce web development includes full-cycle development of an online store: strategy, UX/UI design, frontend and backend development, integrations, testing, and a plan for growth after launch. Great ecommerce development combines technical excellence with marketing savvy so your store performs well in search, loads fast, and converts visitors into customers.",
    icon: "ShoppingCart",
    offerings: [
      {
        title: "Strategic Planning",
        description: "Market analysis, competitor research, buyer personas, platform selection, and CRO analysis.",
      },
      {
        title: "Design & User Experience",
        description: "Wireframes and prototypes, mobile-first product pages and checkout, and accessibility and trust elements.",
      },
      {
        title: "Development & Integration",
        description: "Custom-built stores, headless commerce, and ERP/CRM/inventory and payment integrations.",
      },
      {
        title: "SEO Strategy and Content",
        description: "SEO-valued product descriptions and categories, internal linking, and structured data for rich snippets.",
      },
      {
        title: "Analytics and Reporting",
        description: "Enhanced ecommerce tracking in GA4, conversion mapping, KPI reports, and A/B testing.",
      },
      {
        title: "Advertising & Growing",
        description: "Shopping and marketplace feed optimization, dynamic retargeting, and ROAS-driven media strategies.",
      },
    ],
    process: [
      { step: "Discovery & Audit", description: "Business goals, technical audit, benchmark KPIs." },
      { step: "Strategy & Roadmap", description: "Platform decision, sprint plan, success metrics." },
      { step: "Design & Prototype", description: "Wireframes, usability testing, and approvals." },
      { step: "Development Sprint", description: "Agile development, integration, and QA cycles." },
      { step: "Launch & Monitor", description: "Staged roll-out, performance tuning, monitoring." },
      { step: "Grow & Optimize", description: "CRO, content marketing, and paid campaigns." },
      { step: "Support & Scale", description: "Maintenance, updates, feature roadmaps." },
    ],
    faqs: [
      {
        question: "What are ecommerce web development services and why do I need them?",
        answer:
          "Ecommerce web development builds the technical and design foundation of your online store, improving conversions, security, and scalability.",
      },
      {
        question: "How long does a typical ecommerce build take?",
        answer: "Depending on complexity, 8–12 weeks is common for mid-sized stores. Enterprise or highly customized builds may take longer.",
      },
      {
        question: "Can you migrate our store to a new platform with zero data loss?",
        answer: "Yes — we carefully migrate products, customers, and order history with staging and rollback strategies to minimize disruption.",
      },
      {
        question: "Do you provide post-launch ecommerce support and marketing?",
        answer: "Yes. Our offerings include maintenance, CRO, SEO, and paid advertising to grow traffic and sales after launch.",
      },
      {
        question: "How do you price ecommerce web development projects?",
        answer: "We offer fixed-price projects, retainers, and hourly support, with pricing depending on catalog size, integrations, and custom features.",
      },
    ],
  },
  {
    slug: "search-engine-optimization",
    title: "Search Engine Optimization",
    shortDescription:
      "Measurable organic growth, reporting, and an SEO partner that knows how to convert search traffic into customers.",
    overview:
      "We provide the technical, content, and conversion-based SEO services necessary to rank higher, attract more customers, and grow revenue. Search Engine Optimization has three main pillars: technical SEO (crawlability, indexability, site speed, structured data), on-page SEO (titles, headers, content, internal linking), and off-page SEO (authority through quality links and brand signals) — all built around your business's sales, product, and marketing cycles.",
    icon: "Search",
    offerings: [
      {
        title: "Strategy Development",
        description: "Complete SEO audits, keyword research including intent, and a customized roadmap tied to business KPIs.",
      },
      {
        title: "Technical SEO & Site Optimization",
        description: "Crawlability fixes, page speed and Core Web Vitals improvements, mobile-first optimization, and schema implementation.",
      },
      {
        title: "Content Crafting & On-Page Mastery",
        description: "Content strategy targeting buyer intent and local SEO, SEO-friendly copy, meta tags, and internal linking.",
      },
      {
        title: "Campaign Management & Local SEO",
        description: "Google Business Profile optimization, citations, targeted link outreach, and seasonal SEO activations.",
      },
      {
        title: "Performance Intelligence",
        description: "Conversion tracking, attribution modeling, monthly dashboards, and quarterly strategy reviews.",
      },
    ],
    process: [
      { step: "Discovery & Audit", description: "Establish the baseline through benchmarking, crawl, and content inventory." },
      { step: "Strategy & Roadmap", description: "Define keyword targets, content strategy, and link strategy." },
      { step: "Technical Remediation", description: "Execute fixes for crawl, speed, and mobile user experience." },
      { step: "Content Production", description: "Launch optimized, authoritative content." },
      { step: "Link Building", description: "Ethical and impactful link building and outreach." },
      { step: "Measure & Optimize", description: "Analyze, optimize, and scale winners." },
      { step: "Scale", description: "Grow into new keywords, markets, and products." },
    ],
    faqs: [
      {
        question: "How quickly will I see results from SEO?",
        answer: "SEO timelines vary by competition and starting point. Most clients see meaningful movement in 3–6 months, with consistent growth over 6–12 months.",
      },
      {
        question: "Do you provide local SEO for Pune businesses?",
        answer: "Yes — we optimize Google Business Profile, local citations, and on-site signals for stronger visibility in local searches.",
      },
      {
        question: "Are your SEO practices Google-safe?",
        answer: "Absolutely. We follow white-hat techniques — technical fixes, quality content, and ethical outreach designed to maintain long-term rankings.",
      },
      {
        question: "Can SEO and paid ads work together?",
        answer: "Yes. Using SEO and paid search together accelerates traffic and helps test keyword performance for long-term organic focus.",
      },
      {
        question: "Do you offer affordable SEO packages for small businesses?",
        answer: "We have tiered packages and custom solutions to suit different budgets, from small local businesses to scalable enterprise engagements.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    title: "Mobile App Development",
    shortDescription:
      "Product expertise and engineering know-how to design and build native and cross-platform apps that solve real problems and scale with your growth.",
    overview:
      "A successful mobile application is more than code — it's a valuable product that people use every day. We start with product clarity: user research, prioritized roadmaps, and clear goals, then add engineering rigor with modular development, automated testing, and secure infrastructure, supporting Android, iOS, or cross-platform builds from MVP to enterprise scale.",
    icon: "Smartphone",
    offerings: [
      {
        title: "Product Strategy & Discovery",
        description: "Stakeholder workshops, user interviews, competitive analysis, and MVP definition with measurable success criteria.",
      },
      {
        title: "UX/UI Design & Prototyping",
        description: "User journeys, wireframes, interactive prototypes, accessibility checks, and usability testing.",
      },
      {
        title: "Native & Cross-Platform Engineering",
        description: "Swift-based iOS apps, Kotlin-based Android builds, and Flutter or React Native for cross-platform experiences.",
      },
      {
        title: "Backend, APIs & Integrations",
        description: "Scalable backends on AWS, Google Cloud, and Azure, secure APIs, real-time messaging, and third-party integrations.",
      },
      {
        title: "QA, Security & Performance",
        description: "Automated test suites, device labs, performance profiling, secure authentication, and crash monitoring.",
      },
      {
        title: "Launch & App Store Optimization",
        description: "App Store and Google Play submissions, store optimization, phased rollouts, and beta testing.",
      },
    ],
    process: [
      { step: "Discover", description: "Goals, users, constraints, and success metrics." },
      { step: "Design", description: "Wireframing, prototyping, and user testing." },
      { step: "Build", description: "Iterative development with continuous integration and review." },
      { step: "Test", description: "Automated and manual testing, plus device compatibility." },
      { step: "Launch", description: "App store submission, monitoring, and user onboarding support." },
      { step: "Measure", description: "Analytics, user feedback, and app performance audits." },
      { step: "Iterate & Scale", description: "Iterate on features and scale as necessary." },
    ],
    faqs: [
      {
        question: "How long does a typical mobile app take to build?",
        answer:
          "Timelines depend on scope. A focused MVP often completes in 8–12 weeks; feature-rich consumer apps typically take 4–9 months. We provide a detailed timeline after discovery.",
      },
      {
        question: "Should I choose native or cross-platform development?",
        answer:
          "If you need the absolute best performance and platform-specific UX, choose native. If time-to-market and budget are priorities, cross-platform (Flutter/React Native) is a strong option.",
      },
      {
        question: "Do you build Android apps for businesses in Pune?",
        answer: "Yes — we support full Android lifecycles from design to Play Store release for clients in Pune and beyond.",
      },
      {
        question: "How do you ensure app security?",
        answer:
          "Security is integrated into the lifecycle: threat modeling, secure auth, encrypted storage, and regular audits, following best practices and compliance as required.",
      },
      {
        question: "What post-launch services do you offer?",
        answer:
          "Maintenance, performance monitoring, user analytics, feature sprints, and app store optimization, including funnel and cohort analysis for retention.",
      },
    ],
  },
  {
    slug: "platform-listing-optimization",
    title: "Platform Listing Optimization",
    shortDescription:
      "A local business listing service that keeps your name, address, phone number, and business details consistent across search engines, directories, and apps.",
    overview:
      "Platform listing optimization, also known as citation management, is the process of building, verifying, and maintaining your business listings on relevant platforms and directories: accurate and verified listings, NAP (name, address, phone) consistency, description, category and image optimization for conversions, and continuous monitoring so your listings stay accurate and up to date.",
    icon: "MapPin",
    offerings: [
      {
        title: "Strategy Development",
        description: "A local presence audit, competitor citation analysis, and priority platform selection.",
      },
      {
        title: "Campaign Management",
        description: "Claiming and verifying listings, duplicate removal, batch updates for multi-location brands, and ongoing accuracy checks.",
      },
      {
        title: "Content Creation",
        description: "High-intent business descriptions, image optimization, service category optimization, and localized content for city pages.",
      },
      {
        title: "Analytics & Reporting",
        description: "Visibility and ranking reports, a listing health scorecard, call/direction/click tracking, and review sentiment tracking.",
      },
    ],
    process: [
      { step: "Discovery & Audit", description: "Full local footprint audit, competitor analysis, and priority map." },
      { step: "Record Cleanup", description: "De-duplicate data, clean existing records, and standardize NAP." },
      { step: "Claim & Verify", description: "Claim business profiles and complete verification." },
      { step: "Optimize Profiles", description: "Add keyword-rich descriptions, images, categories, and services." },
      { step: "Publish & Distribute", description: "Publish accurate data to primary and secondary sources." },
      { step: "Monitor & Maintain", description: "Regular checks and reviews; update listings as necessary." },
      { step: "Report & Improve", description: "Monthly reporting and constant optimization." },
    ],
    faqs: [
      {
        question: "What is a local business listing service and how does it help my business?",
        answer:
          "It creates and manages your profiles across directories, ensures NAP consistency, and optimizes listings for local search visibility, driving calls, visits, and bookings.",
      },
      {
        question: "Do you provide Google Business Profile verification?",
        answer: "Yes — we handle claiming, verifying, and optimizing your Google Business Profile to improve map pack rankings and conversions.",
      },
      {
        question: "How long before I see results from platform listing optimization?",
        answer: "Many businesses see improved visibility within 4–8 weeks; full benefits accrue as listings propagate and review signals build.",
      },
      {
        question: "Will you remove duplicate or incorrect listings on my behalf?",
        answer: "Absolutely. We identify duplicates, reconcile conflicting records, and suppress incorrect entries across major directories.",
      },
      {
        question: "Can you manage multiple locations and franchises?",
        answer: "Yes — we specialize in multi-location rollouts, bulk verification, and centralized reporting for consistent brand presence.",
      },
    ],
  },
  {
    slug: "media-buying-planning",
    title: "Media Buying & Planning",
    shortDescription:
      "A data-driven approach to media planning and buying that helps maximize the effectiveness of advertising budgets through audience insights and creative execution.",
    overview:
      "Media planning and buying is the strategic process of choosing the most suitable media to reach your target audience at the right time, then buying it at the best possible rates to execute the campaign. Planning establishes clear objectives, audience segments, KPI targets, and budget allocation, while buying is the tactical process of purchasing inventory, negotiating rates, and optimizing placements — whether the goal is brand awareness, leads, or direct sales.",
    icon: "Megaphone",
    offerings: [
      {
        title: "Strategy Development",
        description: "Audience profiling, competitive media audits, channel mix strategy, and budget allocation tied to KPIs like CPA, LTV, and ROAS.",
      },
      {
        title: "Campaign Management",
        description: "Setup, trafficking, ad tagging, bid strategy and pacing, A/B testing, and daily monitoring.",
      },
      {
        title: "Content & Creative Production",
        description: "Conversion-first ad formats, message personalization by audience segment and funnel stage, and creative refresh.",
      },
      {
        title: "Analytics & Reporting",
        description: "Unified dashboards on reach, frequency, CPA, and ROAS, plus custom attribution modeling and incrementality tests.",
      },
      {
        title: "Paid Advertising",
        description: "Programmatic display and native advertising, social advertising, search and shopping campaigns, and connected TV.",
      },
    ],
    process: [
      { step: "Discovery & Goals", description: "Stakeholder workshop and KPI alignment." },
      { step: "Research & Planning", description: "Audience segmentation, media mix modeling, and forecasting." },
      { step: "Buying & Execution", description: "Inventory negotiation, set-up, and launch." },
      { step: "Optimize & Scale", description: "Continuous testing, budget rebalancing, and creative refresh." },
      { step: "Measure & Report", description: "Attribution analysis and learnings." },
    ],
    faqs: [
      {
        question: "What is the difference between media planning and media buying?",
        answer:
          "Media planning defines the strategy — audiences, channels, and budget. Media buying executes that plan by purchasing inventory, negotiating rates, and optimizing placements.",
      },
      {
        question: "How does media planning and buying improve ROI?",
        answer:
          "We use data, negotiation power, and optimization processes to reduce wasted impressions, target the most valuable audiences, and scale what's working.",
      },
      {
        question: "Which platforms are best for media planning and buying?",
        answer:
          "It depends on goals: social channels excel for targeting, YouTube and CTV for reach, and programmatic for scale and efficiency.",
      },
      {
        question: "How do you measure success for media campaigns?",
        answer: "We measure using KPIs like CPA, ROAS, conversions, reach, frequency, and incrementality studies aligned to business objectives.",
      },
      {
        question: "Can you manage cross-channel campaigns and provide a single report?",
        answer: "Yes. We consolidate cross-channel performance into unified dashboards for a holistic view of campaign impact and attribution.",
      },
    ],
  },
  {
    slug: "email-whatsapp-marketing",
    title: "Email & WhatsApp Marketing",
    shortDescription:
      "Targeted email flows, lists, and creative that convert subscribers into repeat customers, plus conversational WhatsApp marketing.",
    overview:
      "An email marketing program is more than newsletter delivery — it's revenue-generating flows: welcome series, cart recovery, re-engagement, and performance reporting, plus deliverability, compliance, and technical integration. Our approach starts with your customers: who they are, what they care about, and when they're ready to buy. We use WhatsApp to add a quick, personal layer — confirmations, reminders, and high-intent nudges — building a trusted owned-channel engine that lowers acquisition cost and increases lifetime value.",
    icon: "Mail",
    offerings: [
      {
        title: "Strategy Development",
        description: "Customer journey mapping, revenue-based KPIs, behavioral and lifecycle segmentation, and a consent and compliance blueprint.",
      },
      {
        title: "Campaign Management & Automation",
        description: "Welcome series, cart recovery, post-purchase flows, win-backs, and WhatsApp templates for confirmations and support.",
      },
      {
        title: "Creative & Copywriting",
        description: "High-conversion subject lines and copy, mobile-first HTML templates, and short-form WhatsApp messages with rich media.",
      },
      {
        title: "Deliverability & Technical Operations",
        description: "SPF/DKIM/DMARC authentication, domain warmup, CRM and ecommerce integrations, and data hygiene.",
      },
      {
        title: "Analytics, Testing & Reporting",
        description: "Revenue attribution, cohort analysis, LTV tracking, and A/B tests for subject lines, send times, and creative.",
      },
      {
        title: "Growth & Paid Coordination",
        description: "Using paid channels to test and scale winning creative, plus WhatsApp nudges in paid retargeting.",
      },
    ],
    process: [
      { step: "Audit & Discovery", description: "List health check, review of previous campaigns, and funnel analysis." },
      { step: "Strategic Roadmap & Planning", description: "Developing a 90-day revenue-focused plan." },
      { step: "Build & Integrate", description: "Templates, triggers, and API integrations." },
      { step: "Test & Launch", description: "Seed testing, deliverability testing, and launch phase." },
      { step: "Analyze & Optimize", description: "Monitoring revenue, experiments, and continuous optimization." },
      { step: "Scale & Automate", description: "Increasing personalization and adding WhatsApp triggers." },
      { step: "Maintain", description: "Continuous list health, compliance, and seasonal campaigns." },
    ],
    faqs: [
      {
        question: "How soon will I see results from email marketing?",
        answer: "Some flows — like welcome and cart recovery — can produce revenue within days. Broader lifecycle improvements compound over weeks to months.",
      },
      {
        question: "Is WhatsApp marketing compliant in India?",
        answer:
          "Yes, when using the WhatsApp Business API with verified templates and proper consent. We help set up template approvals and consent capture to stay compliant.",
      },
      {
        question: "Can you integrate with our Shopify or WooCommerce store?",
        answer: "Absolutely — we connect purchase and browsing data to tailor messages and power dynamic product recommendations.",
      },
      {
        question: "How do you protect deliverability?",
        answer: "We implement SPF/DKIM/DMARC, warm domains, monitor blacklists, and use seed inbox testing to ensure messages reach recipients.",
      },
      {
        question: "Do you offer localized campaigns for specific cities?",
        answer: "Yes — we design location-aware campaigns and can run targeted programs for local markets such as Pune.",
      },
    ],
  },
  {
    slug: "brand-development",
    title: "Brand Development",
    shortDescription:
      "Strategic brand experiences built on market research, strategy, and creative design — identities that resonate emotionally and deliver commercially.",
    overview:
      "Brand value is more than a visual representation — it's a perception people carry, a promise you make, and an experience you deliver. Branding combines science and creativity: brand strategy (positioning, promise, value proposition), visual identity (logo, color systems, typography), verbal identity (name, tagline, messaging, tone of voice), and customer experience across every touchpoint. We help startups, growing businesses, and enterprises build brands that scale with their organizations through a data-driven approach and creative execution.",
    icon: "Award",
    offerings: [
      {
        title: "Strategy Development",
        description: "Discovery sessions, market research, competitor mapping, brand positioning, and messaging frameworks.",
      },
      {
        title: "Visual Identity & Design",
        description: "Primary and secondary logos, color palettes and typography, brand style guides, and packaging design.",
      },
      {
        title: "Content Creation & Storytelling",
        description: "Messaging playbooks, website and landing page content, product storytelling, and content calendars.",
      },
      {
        title: "Campaign Management & Activation",
        description: "Brand launch blueprints, integrated digital and offline campaigns, and influencer and partnership marketing.",
      },
      {
        title: "Insights & Performance Tracking",
        description: "Brand diagnostics, KPI development across awareness and NPS, and attribution modeling for creative performance.",
      },
      {
        title: "Paid Advertising (Brand-Led)",
        description: "Brand-first paid social and search, creative experimentation, and retargeting and funnel optimization.",
      },
    ],
    process: [
      { step: "Brand Discovery & Deep Audits", description: "Complete health checks, stakeholder alignment, and precise audience understanding." },
      { step: "Define Strategy", description: "Positioning statements, messaging frameworks, and design briefs." },
      { step: "Design & Prototyping", description: "Complete visual identity systems and pilot project deliverables." },
      { step: "Build & Package", description: "Website, social packages, and launch materials." },
      { step: "Launch & Promote", description: "Launch planning and seeding programs." },
      { step: "Measure & Iterate", description: "Review of analytics, user feedback, and creative refresh." },
      { step: "Scale & Systematize", description: "Playbooks for scaled growth." },
    ],
    faqs: [
      {
        question: "What makes Adswise Marketing a strong branding partner?",
        answer:
          "Our mix of research-driven strategy, creative excellence, and performance measurement ensures brand work is tied directly to business results across channels and over time.",
      },
      {
        question: "How long does a full brand build typically take?",
        answer: "Timelines vary by scope; full identity projects generally complete between 8–16 weeks, with milestone-driven plans and expedited tracks when needed.",
      },
      {
        question: "Can you work with both startups and enterprise companies?",
        answer: "Absolutely. We scale our approach — lean, investor-ready brands for startups and robust ecosystem builds for large enterprises.",
      },
      {
        question: "Do you handle both digital and offline brand activation?",
        answer: "Yes. We coordinate integrated launches covering web, social, paid media, packaging, events, and retail collateral.",
      },
      {
        question: "What deliverables can I expect from a branding engagement?",
        answer:
          "Typical deliverables include a brand strategy brief, logo files and guidelines, website templates, social asset packs, launch plans, and performance dashboards.",
      },
    ],
  },
];
