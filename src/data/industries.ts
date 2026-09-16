export interface IndustrySolution {
  title: string;
  description: string;
}

export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  overview: string;
  icon: string;
  challenges: string[];
  solutions: IndustrySolution[];
}

export const industries: Industry[] = [
  {
    slug: "real-estate",
    title: "Real Estate",
    shortDescription:
      "Supplying real estate developers, builders and brokers with steady leads and quicker sales.",
    overview:
      "AdsWise Marketing is a results-driven marketing partner for developers, brokers and proptech brands. Using a combination of search ads, social media ads, listing optimization and automation, we convert online interest into site visits and site visits into bookings.",
    icon: "Building2",
    challenges: [
      "Ads target a broad audience while producing poor quality leads.",
      "Project pages do not perform well in search engines for localities and floor plans.",
      "Listings are not updated or tracked consistently from portal to portal.",
      "Slow response times lead to lost walk-ins and unclaimed reservations.",
    ],
    solutions: [
      {
        title: "Local Search & SEO",
        description:
          "Keyword-optimized project pages, structured sitemaps, Google Business Profile setup, and micro-market and locality landing pages.",
      },
      {
        title: "Paid Media (PPC & Social)",
        description:
          "High-intent Google search campaigns, hyper-local dynamic remarketing on social, lead-form campaigns, and open-house traffic generation.",
      },
      {
        title: "Exposure, Content & Pictures",
        description:
          "Maximizing titles and photos across leading property portals, A/B testing pricing/headlines/CTAs, and clear videos, EMI calculators and floor-plan visuals.",
      },
      {
        title: "Automation, Nurturing & Analytics",
        description:
          "WhatsApp/SMS response flows, email nurture sequences, broker dashboards, lead scoring, heatmaps and conversion testing.",
      },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing",
    shortDescription:
      "B2B growth engines for factories, OEMs and machinery suppliers to generate qualified leads and shorten sales cycles.",
    overview:
      "AdsWise Marketing designs specialized digital marketing systems for manufacturers. Our methodology combines technical understanding with measurable marketing to put your equipment, components and plant services in front of the right buyer groups at the right moment.",
    icon: "Factory",
    challenges: [
      "Manufacturers frequently miss deals before a potential customer discovers them.",
      "Technical products need precision messaging, not generic advertisements.",
      "Long sales cycles without proper lead nurturing leave prospects cold.",
      "SEO generally doesn't cater to buyers searching for machinery or industrial intent.",
      "Marketing and sales working in silos leads to missed opportunities.",
    ],
    solutions: [
      {
        title: "SEO & Content Marketing",
        description:
          "Targeted keyword strategy for machine models and part numbers, plus technical content — white papers, spec sheets and 'how it works' material for engineers and procurement teams.",
      },
      {
        title: "B2B Digital Advertising & ABM",
        description:
          "PPC campaigns for purchase-intent keywords, account-based marketing for large accounts, and LinkedIn/programmatic advertising to reach procurement decision-makers.",
      },
      {
        title: "Site & Lead Systems",
        description:
          "Conversion-focused product pages, spec downloads, ROI calculators, CRM integration with lead scoring, and demo/installation walkthrough videos.",
      },
      {
        title: "Distributor & Channel Growth",
        description:
          "Dealer portals, distributor landing pages and co-marketing packages, backed by dashboarding for leads, opportunity value and channel ROI.",
      },
    ],
  },
  {
    slug: "interior-design",
    title: "Interior Design",
    shortDescription:
      "Turning gorgeous interiors into booked projects for solo designers, studios and design groups.",
    overview:
      "AdsWise Marketing builds performance-oriented programs that connect interior design studios with high-value clients — integrating visual storytelling, targeted ads and localized SEO to generate the right leads rather than just more traffic.",
    icon: "Sofa",
    challenges: [
      "Great work stays buried on slow-loading portfolio pages that don't rank.",
      "Social posts earn likes but don't convert into consultation requests.",
      "Paid ads drive clicks but not qualified design leads.",
      "Prospects have no clear path to book a consultation after discovering the studio.",
    ],
    solutions: [
      {
        title: "Portfolio / Web Optimization",
        description:
          "Fast-loading, filterable project galleries and SEO service pages built around specific design services and service areas.",
      },
      {
        title: "Paid Social & Search",
        description:
          "Instagram and Pinterest campaigns for visual discovery, plus Google search ads for high-intent terms like 'designer near me' or room-specific searches.",
      },
      {
        title: "Content & Visual Storytelling",
        description:
          "Studio story pages, process videos, before/after galleries, and blog content answering common budget, timeline and material questions.",
      },
      {
        title: "Capturing & Nurturing Leads",
        description:
          "Conversion-focused contact forms, automated follow-up emails, and WhatsApp/email flows that turn leads into booked consultations.",
      },
      {
        title: "Local Advertising & Reputation",
        description:
          "Google Business Profile optimization, review generation, local citations, and targeted campaigns toward key neighborhoods and developments.",
      },
    ],
  },
  {
    slug: "healthcare",
    title: "Healthcare",
    shortDescription:
      "Compliant, measurable marketing for hospitals, clinics and healthcare providers that builds trust and appointments.",
    overview:
      "AdsWise Marketing focuses on developing legally compliant and measurable campaigns for healthcare providers — acquiring new patients, building referral relationships and strengthening reputation, while keeping spend on quality connections rather than distraction marketing.",
    icon: "HeartPulse",
    challenges: [
      "Non-compliant or clinically inaccurate ad copy risks restriction or bans.",
      "Local search, physician directories and appointment scheduling are often poorly optimized.",
      "A handful of bad reviews can undo months of marketing effort.",
      "Generic messaging fails to convert patients searching for specific procedures.",
    ],
    solutions: [
      {
        title: "Search & Local SEO",
        description:
          "SEO for clinics and departments around condition/treatment searches, plus Google Business Profile optimization for direction clicks and appointment links.",
      },
      {
        title: "Paid Media & Ads",
        description:
          "Conversion-oriented search ads for appointment bookings and teleconsults, with remarketing to users who viewed symptoms, services or doctors.",
      },
      {
        title: "Advertising & Creative",
        description:
          "Compliant ad copy, condition-specific landing pages, educational content, explainer videos and trusted patient-testimonial formats.",
      },
      {
        title: "Patient Conversion",
        description:
          "Mobile-first appointment and telehealth paths with reminders, plus responsible live chat/triage setups for capturing critical leads.",
      },
      {
        title: "Reputation & PR",
        description:
          "Review generation strategy, crisis response playbooks, and thought-leadership content that builds trust and referrals among specialists.",
      },
      {
        title: "Analytics & Compliance",
        description:
          "HIPAA-aware tracking and consent handling, monthly dashboards, and clinically reviewed A/B messaging tests.",
      },
    ],
  },
  {
    slug: "education",
    title: "Education",
    shortDescription:
      "Branding and admissions marketing that helps schools, colleges and institutes turn values into brands.",
    overview:
      "AdsWise Marketing helps educational institutions position clearly, build credible digital brands, and connect creative storytelling with admissions objectives — moving prospective students and parents from 'who are you?' to 'we want in.'",
    icon: "GraduationCap",
    challenges: [
      "Students can't tell the institution apart from a sea of competitors.",
      "Great programs undersell themselves through poor messaging, costing enrollments.",
      "Parents need trust — a weak digital brand creates doubt.",
      "Inconsistent tone and language across channels confuses prospective candidates.",
      "Marketing spend runs without clear metrics for student acquisition.",
    ],
    solutions: [
      {
        title: "Brand Strategy & Positioning",
        description:
          "Audience segmentation, competitive mapping and a positioning statement that connects with students and parents alike.",
      },
      {
        title: "Identity & Visual Design",
        description:
          "Logos, color systems, typography and brand guidelines that work across uniforms, websites and signage.",
      },
      {
        title: "Admissions Marketing",
        description:
          "Landing pages, lead magnets, paid ads and event campaigns built to generate qualified enquiries.",
      },
      {
        title: "Content & Communications",
        description:
          "Curriculum storytelling, faculty profiles, student success stories and content aimed at parents.",
      },
      {
        title: "Website & UX for Institutes",
        description:
          "SEO-friendly websites, course catalogs and mobile-first application journeys.",
      },
      {
        title: "Analytics & Growth",
        description:
          "Funnel optimization, CRM integration and monthly reporting tied directly to admissions KPIs.",
      },
    ],
  },
];
