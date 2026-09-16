"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  PortfolioCategoryId,
  getCategoryLabel,
  portfolioProjects,
} from "../data/portfolio";

// Adswise brand palette
const GOLD = "#C7843B";
const SLATE = "#536186";

const categories: PortfolioCategoryId[] = [
  "creative-design",
  "website",
  "reels",
  "seo",
  "performance",
];

const getCardAspect = (category: PortfolioCategoryId) =>
  category === "website" || category === "seo"
    ? "aspect-[16/9]"
    : category === "reels"
    ? "aspect-[3/4]"
    : "aspect-square";

const getCardStyle = (category: PortfolioCategoryId) => {
  switch (category) {
    case "creative-design":
      return "bg-[#11202c] border-[#324965] shadow-[0_20px_40px_rgba(0,0,0,0.22)]";
    case "website":
      return "bg-[#152334] border-[#2f576f] shadow-[0_18px_40px_rgba(0,0,0,0.24)]";
    case "seo":
      return "bg-[#0f1a24] border-[#244262] shadow-[0_18px_35px_rgba(0,0,0,0.2)]";
    case "reels":
      return "bg-[#0c1116] border-[#1f2a3b] shadow-[0_18px_40px_rgba(0,0,0,0.3)]";
    case "performance":
      return "bg-[#142432] border-[#2d4c6c] shadow-[0_18px_35px_rgba(0,0,0,0.18)]";
    default:
      return "bg-[#20303f] border-[#2C4657]";
  }
};

export default function PortfolioSection() {
  const [activeTab, setActiveTab] = useState<PortfolioCategoryId>("creative-design");
  const filteredItems = portfolioProjects.filter(
    (item) => item.category === activeTab
  );

  return (
    <section className="bg-[#172531] text-white py-12 sm:py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-7xl mx-auto text-center space-y-5 sm:space-y-6">

        {/* Section Header */}
        <div className="space-y-2">
          <span
            className="font-bold uppercase tracking-wider text-xs sm:text-sm"
            style={{ color: GOLD }}
          >
            OUR WORK
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
            Our Portfolio of Impactful Solutions
          </h2>
        </div>

        {/* Subtitle Description */}
        <p className="max-w-4xl mx-auto text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">
          Adswise Marketing is a full-service digital marketing agency in Pune helping
          brands grow through creative design, website development, reels &amp; video
          editing, SEO and performance marketing. Our portfolio showcases real client
          work across industries — from footwear and interiors to real estate and
          finance — each project reflecting our commitment to innovation, creativity
          and ROI-driven execution. Explore some of our recent work to see how we've
          helped brands grow, engage their audience and strengthen their digital
          presence.
        </p>

        {/* Filter Navigation Tabs */}
        <div className="scrollbar-hide flex items-center gap-3 overflow-x-auto snap-x snap-mandatory px-1 pt-6 pb-4 sm:flex-wrap sm:justify-center sm:gap-6 sm:overflow-visible lg:gap-8">
          {categories.map((category) => {
            const isActive = activeTab === category;
            return (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className="relative shrink-0 snap-start whitespace-nowrap text-xs sm:text-sm md:text-base font-semibold transition-colors duration-200 py-1"
                style={{ color: isActive ? GOLD : "#ffffff" }}
              >
                {getCategoryLabel(category)}
                {/* Active Indicator Underline */}
                {isActive && (
                  <motion.div
                    layoutId="activeTabUnderline"
                    className="absolute left-0 right-0 bottom-0 h-[2px]"
                    style={{ background: GOLD }}
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Portfolio Screenshots Grid */}
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 pt-2 sm:pt-4"
        >
          <AnimatePresence>
            {filteredItems.map((item) => {
              const cardAspect = getCardAspect(item.category);
              const cardStyle = getCardStyle(item.category);
              const imageFit = item.category === "website" || item.category === "seo" ? "object-contain" : "object-cover";
              const hasVideo = Boolean(item.video);

              return (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  className={`group relative ${cardAspect} overflow-hidden rounded-3xl ${cardStyle} cursor-pointer transition-all duration-300`}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = `${SLATE}80`)}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                >
                  {hasVideo ? (
                    <video
                      src={item.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-contain bg-[#111827]"
                    />
                  ) : (
                    <a
                      href={item.link ?? undefined}
                      target={item.link ? "_blank" : undefined}
                      rel={item.link ? "noopener noreferrer" : undefined}
                      className="absolute inset-0 block"
                    >
                      <img
                        src={item.image}
                        alt={`${getCategoryLabel(item.category)} project image`}
                        loading="lazy"
                        className={`absolute inset-0 h-full w-full ${imageFit} transition-transform duration-500 ease-out group-hover:scale-105`}
                      />
                    </a>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
