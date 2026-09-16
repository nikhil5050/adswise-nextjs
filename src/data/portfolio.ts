export type PortfolioCategoryId =
  | "creative-design"
  | "website"
  | "reels"
  | "seo"
  | "performance";

export interface PortfolioCategoryMeta {
  id: "all" | PortfolioCategoryId;
  label: string;
}

export interface PortfolioProject {
  id: number;
  title: string;
  category: PortfolioCategoryId;
  image: string;
  video?: string;
  link?: string;
}

export const portfolioCategories: PortfolioCategoryMeta[] = [
  { id: "all", label: "All Work" },
  { id: "creative-design", label: "Brand & Creative Design" },
  { id: "website", label: "Web Design & Development" },
  { id: "reels", label: "Reels & Video Editing" },
  { id: "seo", label: "SEO & Organic Growth" },
  { id: "performance", label: "Performance & Paid Ads" },
];

const CATEGORY_LABEL: Record<PortfolioCategoryId, string> = {
  "creative-design": "Brand & Creative Design",
  website: "Web Design & Development",
  reels: "Reels & Video Editing",
  seo: "SEO & Organic Growth",
  performance: "Performance & Paid Ads",
};

export const getCategoryLabel = (category: PortfolioCategoryId) =>
  CATEGORY_LABEL[category];

export const portfolioProjects: PortfolioProject[] = [
  {
    id: 1,
    title: "DTK Footwear",
    category: "website",
    image: "https://adswisemarketing.com/public/dtk.png",
    link: "https://www.dtkfootwear.com/",
  },
  {
    id: 2,
    title: "Vishwaswami Interiors",
    category: "website",
    image: "https://adswisemarketing.com/public/interior.png",
    link: "https://vishwaswamiinteriors.com/",
  },
  {
    id: 3,
    title: "Suncreast Financials",
    category: "website",
    image: "https://adswisemarketing.com/public/portfolio/website/phanore.png",
    link: "https://phanore.com/",
  },
  {
    id: 4,
    title: "Believe Properties",
    category: "website",
    image: "https://adswisemarketing.com/public/belive.png",
    link: "https://www.believe-properties.com/",
  },
  {
    id: 5,
    title: "Space Them Upp",
    category: "website",
    image: "https://adswisemarketing.com/public/spacethemupp.png",
    link: "https://spacethemupp.com/",
  },
  {
    id: 6,
    title: "Cherish Derma Clinic",
    category: "website",
    image: "https://adswisemarketing.com/public/cherish.png",
    link: "https://cherishdermaclinic.com/",
  },
  {
    id: 7,
    title: "DTK Footwear — Social Campaign",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics1.jpg",
  },
  {
    id: 8,
    title: "Cherish Derma — Brand Identity",
    category: "creative-design",
    image: "https://adswisemarketing.com//public/portfolio/graphics/graphics2.jpg",
  },
  {
    id: 9,
    title: "Believe Properties — Ad Creatives",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics3.jpg",
  },
  {
    id: 10,
    title: "Space Them Upp — Logo Design",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics15.jpeg",
  },
  {
    id: 11,
    title: "Suncreast Financials — Brand Refresh",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics5.jpg",
  },
  {
    id: 12,
    title: "Vishwaswami Interiors — Logo Design",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics6.jpg",
  },
  {
    id: 13,
    title: "DTK Footwear — Product Photography",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics7.jpg",
  },
  {
    id: 14,
    title: "Cherish Derma — Social Media Graphics",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics8.jpg",
  },
  {
    id: 15,
    title: "Believe Properties — Marketing Collateral",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics9.jpg",
  },
  {
    id: 16,
    title: "Suncreast Financials — Infographics",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics10.jpg",
  },
  {
    id: 17,
    title: "Vishwaswami Interiors — Brochure Design",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics11.jpg",
  },
  {
    id: 18,
    title: "Space Them Upp — Social Media Campaign",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics12.jpg",
  },
  {
    id: 19,
    title: "DTK Footwear — Product Reels",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics13.jpg",
  },
  {
    id: 20,
    title: "Believe Properties — Marketing Collateral",
    category: "creative-design",
    image: "https://adswisemarketing.com/public/portfolio/graphics/graphics4.jpg",
  },
  {
    id: 21,
    title: "DTK Footwear — Product Reels",
    category: "reels",
    image:
      "https://image.pollinations.ai/prompt/sneaker%20product%20reel%20thumbnail%20dynamic%20motion%20studio%20lighting?width=800&height=1000&seed=106",
    video: "https://adswisemarketing.com/public/portfolio/video/curiosity-1.mp4",
  },
  {
    id: 22,
    title: "Space Them Upp — Interior Reels",
    category: "reels",
    image:
      "https://image.pollinations.ai/prompt/interior%20design%20reel%20video%20thumbnail%20cinematic%20room%20tour?width=800&height=1000&seed=104",
    video:
      "https://adswisemarketing.com//public/portfolio/video/Blue%20and%20Orange%20Modern%20Travel%20Mobile%20Video.mp4",
  },
  {
    id: 23,
    title: "Suncreast Financials — Explainer Reels",
    category: "reels",
    image:
      "https://image.pollinations.ai/prompt/finance%20explainer%20video%20reel%20thumbnail%20clean%20professional%20motion%20graphics?width=800&height=1000&seed=105",
    video:
      "https://adswisemarketing.com//public/portfolio/video/Cherish%20Derma%20Reel%2009_Caption_Final.mp4",
  },
  {
    id: 24,
    title: "DTK Heritage — Product Reel",
    category: "reels",
    image: "https://adswisemarketing.com/public/dtk.png",
    video:
      "https://adswisemarketing.com/public/portfolio/video/DTK%20Heritage%20Nagra%20%F0%9F%91%9E%20Premium%20leather%20ethnic%20%26%20formal%20slip-on%20shoes%20for%20men.%20Handcrafted%20in%20Indi.mp4",
  },
  {
    id: 25,
    title: "Transform — Business Reel",
    category: "reels",
    image: "https://adswisemarketing.com/public/spacethemupp.png",
    video:
      "https://adswisemarketing.com/public/portfolio/video/%F0%9F%9A%80%20Transform%20Your%20Business%20from%20Invisible%20to%20Unstoppable!%20www.adswisemarketing.com_Ever%20wonder%20w%20(1).mp4",
  },
  {
    id: 26,
    title: "Vishwaswami Interiors — Local SEO",
    category: "seo",
    image: "https://adswisemarketing.com//public/portfolio/seo/seo1.png",
  },
  {
    id: 27,
    title: "Cherish Derma — Organic Growth",
    category: "seo",
    image: "https://adswisemarketing.com//public/portfolio/seo/seo2.png",
  },
  {
    id: 28,
    title: "Believe Properties — SEO Case Study",
    category: "seo",
    image: "https://adswisemarketing.com//public/portfolio/seo/seo3.png",
  },
  {
    id: 29,
    title: "DTK Footwear — Meta Ads",
    category: "seo",
    image: "https://adswisemarketing.com//public/portfolio/seo/seo4.jpeg",
  },
  {
    id: 30,
    title: "Suncreast Financials — Lead Gen",
    category: "seo",
    image: "https://adswisemarketing.com//public/portfolio/seo/seo5.jpeg",
  },
  {
    id: 31,
    title: "Space Them Upp — Google Ads ROAS",
    category: "seo",
    image: "https://adswisemarketing.com//public/portfolio/seo/seo6.png",
  },
  {
    id: 32,
    title: "DTK Footwear — Meta Ads",
    category: "performance",
    image: "https://adswisemarketing.com/public/portfolio/paid_ad/paid1.jpeg",
  },
  {
    id: 33,
    title: "Suncreast Financials — Lead Gen",
    category: "performance",
    image: "https://adswisemarketing.com/public/portfolio/paid_ad/paid2.jpeg",
  },
  {
    id: 34,
    title: "Space Them Upp — Google Ads ROAS",
    category: "performance",
    image: "https://adswisemarketing.com/public/portfolio/paid_ad/paid3.jpeg",
  },
  {
    id: 35,
    title: "Vylore jewellery",
    category: "website",
    image: "https://adswisemarketing.com/public/vylorewebsite.png",
    link: "https://www.vylore.in/",
  },
  {
    id: 36,
    title: "The Formales",
    category: "website",
    image: "https://adswisemarketing.com/public/theformal.png",
    link: "https://theformales.in/",
  },
  {
    id: 37,
    title: "Nivastu Interior",
    category: "website",
    image: "https://adswisemarketing.com/public/nivastuinterior.png",
    link: "https://nivastuinteriors.in/",
  },
];
