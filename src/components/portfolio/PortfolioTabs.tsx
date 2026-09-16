import { motion } from "framer-motion";
import {
  PortfolioCategoryMeta,
  portfolioProjects,
} from "../../data/portfolio";

interface PortfolioTabsProps {
  categories: PortfolioCategoryMeta[];
  active: string;
  onChange: (id: string) => void;
}

const countFor = (id: string) =>
  id === "all"
    ? portfolioProjects.length
    : portfolioProjects.filter((p) => p.category === id).length;

const PortfolioTabs = ({ categories, active, onChange }: PortfolioTabsProps) => {
  return (
    <motion.nav
      aria-label="Filter portfolio by category"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.15 }}
      className="relative mt-12 sm:mt-14"
    >
      <div className="scrollbar-hide flex snap-x snap-mandatory items-center gap-2.5 overflow-x-auto px-4 pb-2 sm:justify-center sm:overflow-visible sm:px-0">
        {categories.map((cat) => {
          const isActive = active === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => onChange(cat.id)}
              className={`group relative flex shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-full border px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0C4DE] focus-visible:ring-offset-2 focus-visible:ring-offset-black ${
                isActive
                  ? "border-transparent text-white"
                  : "border-white/15 text-white/80 hover:border-[#B0C4DE]/50 hover:text-white"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="portfolio-active-tab"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  className="absolute inset-0 -z-10 rounded-full"
                  style={{
                    background: "linear-gradient(120deg, #536186 0%, #B0C4DE 100%)",
                    boxShadow: "0 0 22px 2px rgba(83,97,134,0.55)",
                  }}
                />
              )}
              {cat.label}
              <span
                className={`rounded-full px-1.5 py-0.5 text-[10px] font-bold ${
                  isActive ? "bg-white/25 text-white" : "bg-white/10 text-white/50"
                }`}
              >
                {countFor(cat.id)}
              </span>
            </button>
          );
        })}
      </div>
    </motion.nav>
  );
};

export default PortfolioTabs;
