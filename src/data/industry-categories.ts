// Generated from adswise-website-v8-services-header.html — edit freely.
export interface IndustryType {
  code: string;
  name: string;
  slug: string;
}

export type IndustrySegment = "small-business" | "major-industry";

export interface IndustryCategory {
  slug: string;
  name: string;
  segment: IndustrySegment;
  /** Slugs of the service packages most relevant to this category. */
  packages: string[];
  types: IndustryType[];
}

export const industrySegments: { id: IndustrySegment; label: string }[] = [
  { id: "small-business", label: "Small businesses" },
  { id: "major-industry", label: "Major industries" },
];

export const industryCategories: IndustryCategory[] = [
  {
    "slug": "local-retail-businesses",
    "name": "Local Retail Businesses",
    "segment": "small-business",
    "packages": [
      "social-media-management",
      "offline-and-local-marketing",
      "seo-and-organic-growth",
      "advertising-growth"
    ],
    "types": [
      {
        "code": "LRB-01",
        "name": "Clothing and fashion stores",
        "slug": "clothing-and-fashion-stores"
      },
      {
        "code": "LRB-02",
        "name": "Jewellery stores",
        "slug": "jewellery-stores"
      },
      {
        "code": "LRB-03",
        "name": "Footwear stores",
        "slug": "footwear-stores"
      },
      {
        "code": "LRB-04",
        "name": "Gift shops",
        "slug": "gift-shops"
      },
      {
        "code": "LRB-05",
        "name": "Furniture stores",
        "slug": "furniture-stores"
      },
      {
        "code": "LRB-06",
        "name": "Electronics stores",
        "slug": "electronics-stores"
      },
      {
        "code": "LRB-07",
        "name": "Grocery and convenience stores",
        "slug": "grocery-and-convenience-stores"
      },
      {
        "code": "LRB-08",
        "name": "Medical stores",
        "slug": "medical-stores"
      },
      {
        "code": "LRB-09",
        "name": "Home decor stores",
        "slug": "home-decor-stores"
      },
      {
        "code": "LRB-10",
        "name": "Automobile accessories stores",
        "slug": "automobile-accessories-stores"
      },
      {
        "code": "LRB-11",
        "name": "Mobile and computer shops",
        "slug": "mobile-and-computer-shops"
      },
      {
        "code": "LRB-12",
        "name": "Pet stores",
        "slug": "pet-stores"
      }
    ]
  },
  {
    "slug": "beauty-and-wellness-businesses",
    "name": "Beauty and Wellness Businesses",
    "segment": "small-business",
    "packages": [
      "social-media-management",
      "content-engine",
      "advertising-growth",
      "seo-and-organic-growth"
    ],
    "types": [
      {
        "code": "BWB-01",
        "name": "Beauty salons",
        "slug": "beauty-salons"
      },
      {
        "code": "BWB-02",
        "name": "Hair salons",
        "slug": "hair-salons"
      },
      {
        "code": "BWB-03",
        "name": "Makeup studios",
        "slug": "makeup-studios"
      },
      {
        "code": "BWB-04",
        "name": "Spas",
        "slug": "spas"
      },
      {
        "code": "BWB-05",
        "name": "Nail studios",
        "slug": "nail-studios"
      },
      {
        "code": "BWB-06",
        "name": "Skincare studios",
        "slug": "skincare-studios"
      },
      {
        "code": "BWB-07",
        "name": "Fitness centres",
        "slug": "fitness-centres"
      },
      {
        "code": "BWB-08",
        "name": "Yoga studios",
        "slug": "yoga-studios"
      },
      {
        "code": "BWB-09",
        "name": "Personal trainers",
        "slug": "personal-trainers"
      },
      {
        "code": "BWB-10",
        "name": "Nutrition consultants",
        "slug": "nutrition-consultants"
      },
      {
        "code": "BWB-11",
        "name": "Wellness centres",
        "slug": "wellness-centres"
      }
    ]
  },
  {
    "slug": "food-travel-and-hospitality-businesses",
    "name": "Food Travel and Hospitality Businesses",
    "segment": "small-business",
    "packages": [
      "social-media-management",
      "content-engine",
      "advertising-growth",
      "pr-influencer-and-publicity"
    ],
    "types": [
      {
        "code": "FTH-01",
        "name": "Restaurants",
        "slug": "restaurants"
      },
      {
        "code": "FTH-02",
        "name": "Cafes",
        "slug": "cafes"
      },
      {
        "code": "FTH-03",
        "name": "Bakeries",
        "slug": "bakeries"
      },
      {
        "code": "FTH-04",
        "name": "Cloud kitchens",
        "slug": "cloud-kitchens"
      },
      {
        "code": "FTH-05",
        "name": "Catering businesses",
        "slug": "catering-businesses"
      },
      {
        "code": "FTH-06",
        "name": "Food product brands",
        "slug": "food-product-brands"
      },
      {
        "code": "FTH-07",
        "name": "Hotels",
        "slug": "hotels"
      },
      {
        "code": "FTH-08",
        "name": "Resorts",
        "slug": "resorts"
      },
      {
        "code": "FTH-09",
        "name": "Homestays",
        "slug": "homestays"
      },
      {
        "code": "FTH-10",
        "name": "Banquet halls",
        "slug": "banquet-halls"
      },
      {
        "code": "FTH-11",
        "name": "Event venues",
        "slug": "event-venues"
      },
      {
        "code": "FTH-12",
        "name": "Travel agencies",
        "slug": "travel-agencies"
      }
    ]
  },
  {
    "slug": "healthcare-businesses",
    "name": "Healthcare Businesses",
    "segment": "small-business",
    "packages": [
      "seo-and-organic-growth",
      "website-and-digital-presence",
      "lead-generation-and-sales-funnel",
      "social-media-management"
    ],
    "types": [
      {
        "code": "HCB-01",
        "name": "Individual doctors",
        "slug": "individual-doctors"
      },
      {
        "code": "HCB-02",
        "name": "Dental clinics",
        "slug": "dental-clinics"
      },
      {
        "code": "HCB-03",
        "name": "Dermatology clinics",
        "slug": "dermatology-clinics"
      },
      {
        "code": "HCB-04",
        "name": "Physiotherapy clinics",
        "slug": "physiotherapy-clinics"
      },
      {
        "code": "HCB-05",
        "name": "Diagnostic centres",
        "slug": "diagnostic-centres"
      },
      {
        "code": "HCB-06",
        "name": "Ayurvedic clinics",
        "slug": "ayurvedic-clinics"
      },
      {
        "code": "HCB-07",
        "name": "Homeopathy clinics",
        "slug": "homeopathy-clinics"
      },
      {
        "code": "HCB-08",
        "name": "Veterinary clinics",
        "slug": "veterinary-clinics"
      },
      {
        "code": "HCB-09",
        "name": "Small hospitals",
        "slug": "small-hospitals"
      },
      {
        "code": "HCB-10",
        "name": "Medical consultants",
        "slug": "medical-consultants"
      },
      {
        "code": "HCB-11",
        "name": "Pharmacies",
        "slug": "pharmacies"
      }
    ]
  },
  {
    "slug": "education-businesses",
    "name": "Education Businesses",
    "segment": "small-business",
    "packages": [
      "lead-generation-and-sales-funnel",
      "advertising-growth",
      "social-media-management",
      "crm-and-automation"
    ],
    "types": [
      {
        "code": "EDB-01",
        "name": "Coaching classes",
        "slug": "coaching-classes"
      },
      {
        "code": "EDB-02",
        "name": "Training institutes",
        "slug": "training-institutes"
      },
      {
        "code": "EDB-03",
        "name": "Preschools",
        "slug": "preschools"
      },
      {
        "code": "EDB-04",
        "name": "Skill development centres",
        "slug": "skill-development-centres"
      },
      {
        "code": "EDB-05",
        "name": "Language institutes",
        "slug": "language-institutes"
      },
      {
        "code": "EDB-06",
        "name": "Computer training institutes",
        "slug": "computer-training-institutes"
      },
      {
        "code": "EDB-07",
        "name": "Overseas education consultants",
        "slug": "overseas-education-consultants"
      },
      {
        "code": "EDB-08",
        "name": "Career counsellors",
        "slug": "career-counsellors"
      },
      {
        "code": "EDB-09",
        "name": "Online course creators",
        "slug": "online-course-creators"
      },
      {
        "code": "EDB-10",
        "name": "Private tutors",
        "slug": "private-tutors"
      },
      {
        "code": "EDB-11",
        "name": "Small schools and colleges",
        "slug": "small-schools-and-colleges"
      }
    ]
  },
  {
    "slug": "professional-services",
    "name": "Professional Services",
    "segment": "small-business",
    "packages": [
      "branding-and-identity",
      "website-and-digital-presence",
      "seo-and-organic-growth",
      "lead-generation-and-sales-funnel"
    ],
    "types": [
      {
        "code": "PRS-01",
        "name": "Chartered accountants",
        "slug": "chartered-accountants"
      },
      {
        "code": "PRS-02",
        "name": "Company secretaries",
        "slug": "company-secretaries"
      },
      {
        "code": "PRS-03",
        "name": "Legal firms",
        "slug": "legal-firms"
      },
      {
        "code": "PRS-04",
        "name": "Financial consultants",
        "slug": "financial-consultants"
      },
      {
        "code": "PRS-05",
        "name": "Insurance advisors",
        "slug": "insurance-advisors"
      },
      {
        "code": "PRS-06",
        "name": "Tax consultants",
        "slug": "tax-consultants"
      },
      {
        "code": "PRS-07",
        "name": "Architects",
        "slug": "architects"
      },
      {
        "code": "PRS-08",
        "name": "Interior designers",
        "slug": "interior-designers"
      },
      {
        "code": "PRS-09",
        "name": "Business consultants",
        "slug": "business-consultants"
      },
      {
        "code": "PRS-10",
        "name": "Human resource consultants",
        "slug": "human-resource-consultants"
      },
      {
        "code": "PRS-11",
        "name": "Recruitment agencies",
        "slug": "recruitment-agencies"
      },
      {
        "code": "PRS-12",
        "name": "Real estate agents",
        "slug": "real-estate-agents"
      },
      {
        "code": "PRS-13",
        "name": "Property consultants",
        "slug": "property-consultants"
      }
    ]
  },
  {
    "slug": "home-and-local-services",
    "name": "Home and Local Services",
    "segment": "small-business",
    "packages": [
      "seo-and-organic-growth",
      "lead-generation-and-sales-funnel",
      "advertising-growth",
      "offline-and-local-marketing"
    ],
    "types": [
      {
        "code": "HLS-01",
        "name": "Plumbers",
        "slug": "plumbers"
      },
      {
        "code": "HLS-02",
        "name": "Electricians",
        "slug": "electricians"
      },
      {
        "code": "HLS-03",
        "name": "Cleaning companies",
        "slug": "cleaning-companies"
      },
      {
        "code": "HLS-04",
        "name": "Pest control businesses",
        "slug": "pest-control-businesses"
      },
      {
        "code": "HLS-05",
        "name": "Security agencies",
        "slug": "security-agencies"
      },
      {
        "code": "HLS-06",
        "name": "Packers and movers",
        "slug": "packers-and-movers"
      },
      {
        "code": "HLS-07",
        "name": "Repair services",
        "slug": "repair-services"
      },
      {
        "code": "HLS-08",
        "name": "Appliance service providers",
        "slug": "appliance-service-providers"
      },
      {
        "code": "HLS-09",
        "name": "Construction contractors",
        "slug": "construction-contractors"
      },
      {
        "code": "HLS-10",
        "name": "Landscaping companies",
        "slug": "landscaping-companies"
      },
      {
        "code": "HLS-11",
        "name": "Solar installers",
        "slug": "solar-installers"
      },
      {
        "code": "HLS-12",
        "name": "Home automation businesses",
        "slug": "home-automation-businesses"
      }
    ]
  },
  {
    "slug": "startups-and-technology-businesses",
    "name": "Startups and Technology Businesses",
    "segment": "small-business",
    "packages": [
      "business-growth-and-consulting",
      "branding-and-identity",
      "lead-generation-and-sales-funnel",
      "analytics-and-optimization"
    ],
    "types": [
      {
        "code": "STB-01",
        "name": "Software startups",
        "slug": "software-startups"
      },
      {
        "code": "STB-02",
        "name": "Artificial intelligence startups",
        "slug": "artificial-intelligence-startups"
      },
      {
        "code": "STB-03",
        "name": "Software as a Service companies",
        "slug": "software-as-a-service-companies"
      },
      {
        "code": "STB-04",
        "name": "Mobile application developers",
        "slug": "mobile-application-developers"
      },
      {
        "code": "STB-05",
        "name": "Information technology service companies",
        "slug": "information-technology-service-companies"
      },
      {
        "code": "STB-06",
        "name": "Cybersecurity companies",
        "slug": "cybersecurity-companies"
      },
      {
        "code": "STB-07",
        "name": "Automation service providers",
        "slug": "automation-service-providers"
      },
      {
        "code": "STB-08",
        "name": "Technology consultants",
        "slug": "technology-consultants"
      },
      {
        "code": "STB-09",
        "name": "Web development companies",
        "slug": "web-development-companies"
      },
      {
        "code": "STB-10",
        "name": "Business to business startups",
        "slug": "business-to-business-startups"
      }
    ]
  },
  {
    "slug": "ecommerce-and-product-businesses",
    "name": "Ecommerce and Product Businesses",
    "segment": "small-business",
    "packages": [
      "e-commerce-growth",
      "advertising-growth",
      "content-engine",
      "analytics-and-optimization"
    ],
    "types": [
      {
        "code": "EPB-01",
        "name": "Direct to consumer brands",
        "slug": "direct-to-consumer-brands"
      },
      {
        "code": "EPB-02",
        "name": "Amazon sellers",
        "slug": "amazon-sellers"
      },
      {
        "code": "EPB-03",
        "name": "Flipkart sellers",
        "slug": "flipkart-sellers"
      },
      {
        "code": "EPB-04",
        "name": "Shopify stores",
        "slug": "shopify-stores"
      },
      {
        "code": "EPB-05",
        "name": "Handmade product businesses",
        "slug": "handmade-product-businesses"
      },
      {
        "code": "EPB-06",
        "name": "Jewellery brands",
        "slug": "jewellery-brands"
      },
      {
        "code": "EPB-07",
        "name": "Fashion brands",
        "slug": "fashion-brands"
      },
      {
        "code": "EPB-08",
        "name": "Beauty and skincare brands",
        "slug": "beauty-and-skincare-brands"
      },
      {
        "code": "EPB-09",
        "name": "Food and beverage brands",
        "slug": "food-and-beverage-brands"
      },
      {
        "code": "EPB-10",
        "name": "Home and lifestyle brands",
        "slug": "home-and-lifestyle-brands"
      },
      {
        "code": "EPB-11",
        "name": "Consumer product startups",
        "slug": "consumer-product-startups"
      }
    ]
  },
  {
    "slug": "manufacturing-msmes",
    "name": "Manufacturing MSMEs",
    "segment": "small-business",
    "packages": [
      "website-and-digital-presence",
      "lead-generation-and-sales-funnel",
      "branding-and-identity",
      "business-growth-and-consulting"
    ],
    "types": [
      {
        "code": "MSM-01",
        "name": "Engineering workshops",
        "slug": "engineering-workshops"
      },
      {
        "code": "MSM-02",
        "name": "Auto component manufacturers",
        "slug": "auto-component-manufacturers"
      },
      {
        "code": "MSM-03",
        "name": "Packaging manufacturers",
        "slug": "packaging-manufacturers"
      },
      {
        "code": "MSM-04",
        "name": "Textile manufacturers",
        "slug": "textile-manufacturers"
      },
      {
        "code": "MSM-05",
        "name": "Food processing companies",
        "slug": "food-processing-companies"
      },
      {
        "code": "MSM-06",
        "name": "Chemical manufacturers",
        "slug": "chemical-manufacturers"
      },
      {
        "code": "MSM-07",
        "name": "Furniture manufacturers",
        "slug": "furniture-manufacturers"
      },
      {
        "code": "MSM-08",
        "name": "Jewellery manufacturers",
        "slug": "jewellery-manufacturers"
      },
      {
        "code": "MSM-09",
        "name": "Electrical equipment manufacturers",
        "slug": "electrical-equipment-manufacturers"
      },
      {
        "code": "MSM-10",
        "name": "Plastic product manufacturers",
        "slug": "plastic-product-manufacturers"
      },
      {
        "code": "MSM-11",
        "name": "Industrial suppliers",
        "slug": "industrial-suppliers"
      },
      {
        "code": "MSM-12",
        "name": "Export businesses",
        "slug": "export-businesses"
      }
    ]
  },
  {
    "slug": "personal-and-creator-businesses",
    "name": "Personal and Creator Businesses",
    "segment": "small-business",
    "packages": [
      "branding-and-identity",
      "social-media-management",
      "content-engine",
      "pr-influencer-and-publicity"
    ],
    "types": [
      {
        "code": "PCB-01",
        "name": "Coaches",
        "slug": "coaches"
      },
      {
        "code": "PCB-02",
        "name": "Consultants",
        "slug": "consultants"
      },
      {
        "code": "PCB-03",
        "name": "Authors",
        "slug": "authors"
      },
      {
        "code": "PCB-04",
        "name": "Speakers",
        "slug": "speakers"
      },
      {
        "code": "PCB-05",
        "name": "Trainers",
        "slug": "trainers"
      },
      {
        "code": "PCB-06",
        "name": "Content creators",
        "slug": "content-creators"
      },
      {
        "code": "PCB-07",
        "name": "Influencers",
        "slug": "influencers"
      },
      {
        "code": "PCB-08",
        "name": "Artists",
        "slug": "artists"
      },
      {
        "code": "PCB-09",
        "name": "Photographers",
        "slug": "photographers"
      },
      {
        "code": "PCB-10",
        "name": "Videographers",
        "slug": "videographers"
      },
      {
        "code": "PCB-11",
        "name": "Freelancers",
        "slug": "freelancers"
      },
      {
        "code": "PCB-12",
        "name": "Public figures",
        "slug": "public-figures"
      }
    ]
  },
  {
    "slug": "real-estate-and-construction",
    "name": "Real Estate and Construction",
    "segment": "small-business",
    "packages": [
      "lead-generation-and-sales-funnel",
      "advertising-growth",
      "crm-and-automation",
      "content-engine"
    ],
    "types": [
      {
        "code": "REC-01",
        "name": "Real estate developers",
        "slug": "real-estate-developers"
      },
      {
        "code": "REC-02",
        "name": "Commercial property companies",
        "slug": "commercial-property-companies"
      },
      {
        "code": "REC-03",
        "name": "Residential property companies",
        "slug": "residential-property-companies"
      },
      {
        "code": "REC-04",
        "name": "Construction companies",
        "slug": "construction-companies"
      },
      {
        "code": "REC-05",
        "name": "Infrastructure developers",
        "slug": "infrastructure-developers"
      },
      {
        "code": "REC-06",
        "name": "Property management companies",
        "slug": "property-management-companies"
      },
      {
        "code": "REC-07",
        "name": "Architecture and engineering firms",
        "slug": "architecture-and-engineering-firms"
      }
    ]
  },
  {
    "slug": "healthcare-and-pharmaceuticals",
    "name": "Healthcare and Pharmaceuticals",
    "segment": "major-industry",
    "packages": [
      "complete-growth-system",
      "seo-and-organic-growth",
      "pr-influencer-and-publicity",
      "analytics-and-optimization"
    ],
    "types": [
      {
        "code": "HCP-01",
        "name": "Hospital groups",
        "slug": "hospital-groups"
      },
      {
        "code": "HCP-02",
        "name": "Pharmaceutical companies",
        "slug": "pharmaceutical-companies"
      },
      {
        "code": "HCP-03",
        "name": "Healthcare networks",
        "slug": "healthcare-networks"
      },
      {
        "code": "HCP-04",
        "name": "Medical device companies",
        "slug": "medical-device-companies"
      },
      {
        "code": "HCP-05",
        "name": "Diagnostic chains",
        "slug": "diagnostic-chains"
      },
      {
        "code": "HCP-06",
        "name": "Health technology companies",
        "slug": "health-technology-companies"
      },
      {
        "code": "HCP-07",
        "name": "Biotechnology companies",
        "slug": "biotechnology-companies"
      }
    ]
  },
  {
    "slug": "education",
    "name": "Education",
    "segment": "major-industry",
    "packages": [
      "lead-generation-and-sales-funnel",
      "advertising-growth",
      "crm-and-automation",
      "complete-growth-system"
    ],
    "types": [
      {
        "code": "EDU-01",
        "name": "Universities",
        "slug": "universities"
      },
      {
        "code": "EDU-02",
        "name": "College groups",
        "slug": "college-groups"
      },
      {
        "code": "EDU-03",
        "name": "School chains",
        "slug": "school-chains"
      },
      {
        "code": "EDU-04",
        "name": "Education technology companies",
        "slug": "education-technology-companies"
      },
      {
        "code": "EDU-05",
        "name": "Professional training companies",
        "slug": "professional-training-companies"
      },
      {
        "code": "EDU-06",
        "name": "Coaching networks",
        "slug": "coaching-networks"
      },
      {
        "code": "EDU-07",
        "name": "Online learning platforms",
        "slug": "online-learning-platforms"
      }
    ]
  },
  {
    "slug": "banking-and-financial-services",
    "name": "Banking and Financial Services",
    "segment": "major-industry",
    "packages": [
      "complete-growth-system",
      "lead-generation-and-sales-funnel",
      "crm-and-automation",
      "analytics-and-optimization"
    ],
    "types": [
      {
        "code": "BFS-01",
        "name": "Banks",
        "slug": "banks"
      },
      {
        "code": "BFS-02",
        "name": "Non banking financial companies",
        "slug": "non-banking-financial-companies"
      },
      {
        "code": "BFS-03",
        "name": "Insurance companies",
        "slug": "insurance-companies"
      },
      {
        "code": "BFS-04",
        "name": "Investment companies",
        "slug": "investment-companies"
      },
      {
        "code": "BFS-05",
        "name": "Financial technology companies",
        "slug": "financial-technology-companies"
      },
      {
        "code": "BFS-06",
        "name": "Mutual fund companies",
        "slug": "mutual-fund-companies"
      },
      {
        "code": "BFS-07",
        "name": "Lending platforms",
        "slug": "lending-platforms"
      },
      {
        "code": "BFS-08",
        "name": "Wealth management firms",
        "slug": "wealth-management-firms"
      }
    ]
  },
  {
    "slug": "automotive-and-mobility",
    "name": "Automotive and Mobility",
    "segment": "major-industry",
    "packages": [
      "advertising-growth",
      "lead-generation-and-sales-funnel",
      "pr-influencer-and-publicity",
      "offline-and-local-marketing"
    ],
    "types": [
      {
        "code": "AMB-01",
        "name": "Automobile manufacturers",
        "slug": "automobile-manufacturers"
      },
      {
        "code": "AMB-02",
        "name": "Automobile dealerships",
        "slug": "automobile-dealerships"
      },
      {
        "code": "AMB-03",
        "name": "Electric vehicle companies",
        "slug": "electric-vehicle-companies"
      },
      {
        "code": "AMB-04",
        "name": "Auto component companies",
        "slug": "auto-component-companies"
      },
      {
        "code": "AMB-05",
        "name": "Logistics companies",
        "slug": "logistics-companies"
      },
      {
        "code": "AMB-06",
        "name": "Transportation businesses",
        "slug": "transportation-businesses"
      },
      {
        "code": "AMB-07",
        "name": "Mobility platforms",
        "slug": "mobility-platforms"
      }
    ]
  },
  {
    "slug": "information-technology-and-software",
    "name": "Information Technology and Software",
    "segment": "major-industry",
    "packages": [
      "business-growth-and-consulting",
      "lead-generation-and-sales-funnel",
      "seo-and-organic-growth",
      "analytics-and-optimization"
    ],
    "types": [
      {
        "code": "ITS-01",
        "name": "Information technology companies",
        "slug": "information-technology-companies"
      },
      {
        "code": "ITS-02",
        "name": "Software companies",
        "slug": "software-companies"
      },
      {
        "code": "ITS-03",
        "name": "Artificial intelligence companies",
        "slug": "artificial-intelligence-companies"
      },
      {
        "code": "ITS-04",
        "name": "Cloud service providers",
        "slug": "cloud-service-providers"
      },
      {
        "code": "ITS-05",
        "name": "Cybersecurity companies",
        "slug": "cybersecurity-companies"
      },
      {
        "code": "ITS-06",
        "name": "Enterprise technology companies",
        "slug": "enterprise-technology-companies"
      },
      {
        "code": "ITS-07",
        "name": "Data and analytics companies",
        "slug": "data-and-analytics-companies"
      }
    ]
  },
  {
    "slug": "manufacturing-and-engineering",
    "name": "Manufacturing and Engineering",
    "segment": "major-industry",
    "packages": [
      "website-and-digital-presence",
      "lead-generation-and-sales-funnel",
      "branding-and-identity",
      "business-growth-and-consulting"
    ],
    "types": [
      {
        "code": "MFE-01",
        "name": "Industrial manufacturers",
        "slug": "industrial-manufacturers"
      },
      {
        "code": "MFE-02",
        "name": "Heavy engineering companies",
        "slug": "heavy-engineering-companies"
      },
      {
        "code": "MFE-03",
        "name": "Machinery manufacturers",
        "slug": "machinery-manufacturers"
      },
      {
        "code": "MFE-04",
        "name": "Electronics manufacturers",
        "slug": "electronics-manufacturers"
      },
      {
        "code": "MFE-05",
        "name": "Chemical companies",
        "slug": "chemical-companies"
      },
      {
        "code": "MFE-06",
        "name": "Defence manufacturers",
        "slug": "defence-manufacturers"
      },
      {
        "code": "MFE-07",
        "name": "Aerospace companies",
        "slug": "aerospace-companies"
      },
      {
        "code": "MFE-08",
        "name": "Industrial automation companies",
        "slug": "industrial-automation-companies"
      }
    ]
  },
  {
    "slug": "retail-and-ecommerce",
    "name": "Retail and Ecommerce",
    "segment": "major-industry",
    "packages": [
      "e-commerce-growth",
      "complete-growth-system",
      "advertising-growth",
      "analytics-and-optimization"
    ],
    "types": [
      {
        "code": "RTE-01",
        "name": "Retail chains",
        "slug": "retail-chains"
      },
      {
        "code": "RTE-02",
        "name": "Supermarket groups",
        "slug": "supermarket-groups"
      },
      {
        "code": "RTE-03",
        "name": "Online marketplaces",
        "slug": "online-marketplaces"
      },
      {
        "code": "RTE-04",
        "name": "Large direct to consumer brands",
        "slug": "large-direct-to-consumer-brands"
      },
      {
        "code": "RTE-05",
        "name": "Consumer electronics companies",
        "slug": "consumer-electronics-companies"
      },
      {
        "code": "RTE-06",
        "name": "Fashion and lifestyle groups",
        "slug": "fashion-and-lifestyle-groups"
      },
      {
        "code": "RTE-07",
        "name": "Jewellery chains",
        "slug": "jewellery-chains"
      }
    ]
  },
  {
    "slug": "fast-moving-consumer-goods",
    "name": "Fast Moving Consumer Goods",
    "segment": "major-industry",
    "packages": [
      "complete-growth-system",
      "pr-influencer-and-publicity",
      "content-engine",
      "offline-and-local-marketing"
    ],
    "types": [
      {
        "code": "FMC-01",
        "name": "Food and beverage companies",
        "slug": "food-and-beverage-companies"
      },
      {
        "code": "FMC-02",
        "name": "Personal care companies",
        "slug": "personal-care-companies"
      },
      {
        "code": "FMC-03",
        "name": "Household product companies",
        "slug": "household-product-companies"
      },
      {
        "code": "FMC-04",
        "name": "Packaged food companies",
        "slug": "packaged-food-companies"
      },
      {
        "code": "FMC-05",
        "name": "Consumer health companies",
        "slug": "consumer-health-companies"
      },
      {
        "code": "FMC-06",
        "name": "Beauty and cosmetics companies",
        "slug": "beauty-and-cosmetics-companies"
      }
    ]
  },
  {
    "slug": "travel-and-hospitality",
    "name": "Travel and Hospitality",
    "segment": "major-industry",
    "packages": [
      "advertising-growth",
      "content-engine",
      "pr-influencer-and-publicity",
      "seo-and-organic-growth"
    ],
    "types": [
      {
        "code": "TRH-01",
        "name": "Hotel chains",
        "slug": "hotel-chains"
      },
      {
        "code": "TRH-02",
        "name": "Resort groups",
        "slug": "resort-groups"
      },
      {
        "code": "TRH-03",
        "name": "Airlines",
        "slug": "airlines"
      },
      {
        "code": "TRH-04",
        "name": "Travel platforms",
        "slug": "travel-platforms"
      },
      {
        "code": "TRH-05",
        "name": "Tour operators",
        "slug": "tour-operators"
      },
      {
        "code": "TRH-06",
        "name": "Tourism organisations",
        "slug": "tourism-organisations"
      },
      {
        "code": "TRH-07",
        "name": "Restaurant chains",
        "slug": "restaurant-chains"
      }
    ]
  },
  {
    "slug": "media-and-entertainment",
    "name": "Media and Entertainment",
    "segment": "major-industry",
    "packages": [
      "social-media-management",
      "pr-influencer-and-publicity",
      "content-engine",
      "advertising-growth"
    ],
    "types": [
      {
        "code": "MDE-01",
        "name": "Media companies",
        "slug": "media-companies"
      },
      {
        "code": "MDE-02",
        "name": "Film production companies",
        "slug": "film-production-companies"
      },
      {
        "code": "MDE-03",
        "name": "Music companies",
        "slug": "music-companies"
      },
      {
        "code": "MDE-04",
        "name": "Streaming platforms",
        "slug": "streaming-platforms"
      },
      {
        "code": "MDE-05",
        "name": "Gaming companies",
        "slug": "gaming-companies"
      },
      {
        "code": "MDE-06",
        "name": "Sports organisations",
        "slug": "sports-organisations"
      },
      {
        "code": "MDE-07",
        "name": "Event management companies",
        "slug": "event-management-companies"
      }
    ]
  },
  {
    "slug": "telecommunications",
    "name": "Telecommunications",
    "segment": "major-industry",
    "packages": [
      "complete-growth-system",
      "advertising-growth",
      "analytics-and-optimization",
      "crm-and-automation"
    ],
    "types": [
      {
        "code": "TEL-01",
        "name": "Telecommunications operators",
        "slug": "telecommunications-operators"
      },
      {
        "code": "TEL-02",
        "name": "Internet service providers",
        "slug": "internet-service-providers"
      },
      {
        "code": "TEL-03",
        "name": "Network infrastructure companies",
        "slug": "network-infrastructure-companies"
      },
      {
        "code": "TEL-04",
        "name": "Communication technology companies",
        "slug": "communication-technology-companies"
      }
    ]
  },
  {
    "slug": "energy-and-utilities",
    "name": "Energy and Utilities",
    "segment": "major-industry",
    "packages": [
      "branding-and-identity",
      "pr-influencer-and-publicity",
      "lead-generation-and-sales-funnel",
      "offline-and-local-marketing"
    ],
    "types": [
      {
        "code": "ENU-01",
        "name": "Oil and gas companies",
        "slug": "oil-and-gas-companies"
      },
      {
        "code": "ENU-02",
        "name": "Power companies",
        "slug": "power-companies"
      },
      {
        "code": "ENU-03",
        "name": "Renewable energy companies",
        "slug": "renewable-energy-companies"
      },
      {
        "code": "ENU-04",
        "name": "Solar energy businesses",
        "slug": "solar-energy-businesses"
      },
      {
        "code": "ENU-05",
        "name": "Utility providers",
        "slug": "utility-providers"
      },
      {
        "code": "ENU-06",
        "name": "Electric vehicle charging companies",
        "slug": "electric-vehicle-charging-companies"
      }
    ]
  },
  {
    "slug": "logistics-and-supply-chain",
    "name": "Logistics and Supply Chain",
    "segment": "major-industry",
    "packages": [
      "website-and-digital-presence",
      "lead-generation-and-sales-funnel",
      "business-growth-and-consulting",
      "seo-and-organic-growth"
    ],
    "types": [
      {
        "code": "LSC-01",
        "name": "Logistics companies",
        "slug": "logistics-companies"
      },
      {
        "code": "LSC-02",
        "name": "Courier companies",
        "slug": "courier-companies"
      },
      {
        "code": "LSC-03",
        "name": "Warehousing businesses",
        "slug": "warehousing-businesses"
      },
      {
        "code": "LSC-04",
        "name": "Shipping companies",
        "slug": "shipping-companies"
      },
      {
        "code": "LSC-05",
        "name": "Freight companies",
        "slug": "freight-companies"
      },
      {
        "code": "LSC-06",
        "name": "Supply chain technology businesses",
        "slug": "supply-chain-technology-businesses"
      }
    ]
  },
  {
    "slug": "agriculture-and-agribusiness",
    "name": "Agriculture and Agribusiness",
    "segment": "major-industry",
    "packages": [
      "branding-and-identity",
      "offline-and-local-marketing",
      "website-and-digital-presence",
      "lead-generation-and-sales-funnel"
    ],
    "types": [
      {
        "code": "AGR-01",
        "name": "Agricultural product companies",
        "slug": "agricultural-product-companies"
      },
      {
        "code": "AGR-02",
        "name": "Food processing companies",
        "slug": "food-processing-companies"
      },
      {
        "code": "AGR-03",
        "name": "Agricultural technology companies",
        "slug": "agricultural-technology-companies"
      },
      {
        "code": "AGR-04",
        "name": "Fertiliser companies",
        "slug": "fertiliser-companies"
      },
      {
        "code": "AGR-05",
        "name": "Seed companies",
        "slug": "seed-companies"
      },
      {
        "code": "AGR-06",
        "name": "Dairy businesses",
        "slug": "dairy-businesses"
      },
      {
        "code": "AGR-07",
        "name": "Agricultural export companies",
        "slug": "agricultural-export-companies"
      }
    ]
  },
  {
    "slug": "government-and-public-sector",
    "name": "Government and Public Sector",
    "segment": "major-industry",
    "packages": [
      "pr-influencer-and-publicity",
      "offline-and-local-marketing",
      "social-media-management",
      "content-engine"
    ],
    "types": [
      {
        "code": "GPS-01",
        "name": "Government departments",
        "slug": "government-departments"
      },
      {
        "code": "GPS-02",
        "name": "Municipal organisations",
        "slug": "municipal-organisations"
      },
      {
        "code": "GPS-03",
        "name": "Public sector companies",
        "slug": "public-sector-companies"
      },
      {
        "code": "GPS-04",
        "name": "Political organisations",
        "slug": "political-organisations"
      },
      {
        "code": "GPS-05",
        "name": "Public awareness campaigns",
        "slug": "public-awareness-campaigns"
      },
      {
        "code": "GPS-06",
        "name": "Social development programmes",
        "slug": "social-development-programmes"
      }
    ]
  }
];

export function getIndustryCategory(slug: string) {
  return industryCategories.find((c) => c.slug === slug);
}

export function getIndustryType(categorySlug: string, typeSlug: string) {
  const category = getIndustryCategory(categorySlug);
  const type = category?.types.find((t) => t.slug === typeSlug);
  return category && type ? { category, type } : undefined;
}

const PROPER_NOUNS = ["Amazon", "Flipkart", "Shopify"];

/** "Dental clinics" -> "dental clinics" for use mid-sentence; brand names keep their capital. */
export function inSentence(name: string) {
  const first = name.split(" ")[0];
  return PROPER_NOUNS.includes(first) ? name : name.charAt(0).toLowerCase() + name.slice(1);
}
