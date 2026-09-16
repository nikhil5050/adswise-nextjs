import { AnimatePresence, motion } from "framer-motion";
import { PortfolioProject } from "../../data/portfolio";
import PortfolioCard from "./PortfolioCard";

interface PortfolioGridProps {
  projects: PortfolioProject[];
  activeCategory: string;
  onOpen: (project: PortfolioProject) => void;
}

const PortfolioGrid = ({ projects, activeCategory, onOpen }: PortfolioGridProps) => {
  const isSeo = activeCategory === "seo";

  return (
    <div className="mt-10 sm:mt-14">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className={isSeo ? "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3" : "grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 md:grid-cols-3 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5"}
        >
          {projects.map((project, index) => (
            <PortfolioCard
              key={project.id}
              project={project}
              index={index}
              layoutStyle={isSeo ? "wide" : "square"}
              onOpen={() => onOpen(project)}
            />
          ))}
        </motion.div>
      </AnimatePresence>

      {projects.length === 0 && (
        <p className="mt-10 text-center text-gray-400">
          No projects found in this category yet.
        </p>
      )}
    </div>
  );
};

export default PortfolioGrid;
