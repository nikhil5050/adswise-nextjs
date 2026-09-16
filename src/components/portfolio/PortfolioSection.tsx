import { useMemo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { portfolioCategories, portfolioProjects } from "../../data/portfolio";
import PortfolioHeader from "./PortfolioHeader";
import PortfolioTabs from "./PortfolioTabs";
import PortfolioGrid from "./PortfolioGrid";
import PortfolioModal from "./PortfolioModal";

const NOISE_BG =
  "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>";

const PortfolioSection = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "all") return portfolioProjects;
    return portfolioProjects.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setOpenIndex(null);
  };

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-heading"
      className="relative overflow-hidden bg-[#0b0c10] py-20 sm:py-24 lg:py-28"
    >
      {/* Subtle brand-toned radial gradient */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 50% 0%, rgba(83,97,134,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Blur circles */}
      <div className="pointer-events-none absolute -left-32 top-24 h-72 w-72 rounded-full bg-[#536186]/20 blur-[110px]" />
      <div className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-[#B0C4DE]/10 blur-[120px]" />

      {/* Noise texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{ backgroundImage: `url("${NOISE_BG}")` }}
      />

      <div className="relative mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <PortfolioHeader projectCount={portfolioProjects.length} />

        <PortfolioTabs
          categories={portfolioCategories}
          active={activeCategory}
          onChange={handleCategoryChange}
        />

        <PortfolioGrid
          projects={filteredProjects}
          activeCategory={activeCategory}
          onOpen={(project) =>
            setOpenIndex(filteredProjects.findIndex((p) => p.id === project.id))
          }
        />
      </div>

      <AnimatePresence>
        {openIndex !== null && (
          <PortfolioModal
            projects={filteredProjects}
            activeIndex={openIndex}
            onClose={() => setOpenIndex(null)}
            onNavigate={(nextIndex) => setOpenIndex(nextIndex)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioSection;
