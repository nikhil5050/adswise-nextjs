import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { PortfolioProject, getCategoryLabel } from "../../data/portfolio";

interface PortfolioModalProps {
  projects: PortfolioProject[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (nextIndex: number) => void;
}

const PortfolioModal = ({
  projects,
  activeIndex,
  onClose,
  onNavigate,
}: PortfolioModalProps) => {
  const closeRef = useRef<HTMLButtonElement>(null);
  const project = projects[activeIndex];

  useEffect(() => {
    closeRef.current?.focus();
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "ArrowLeft" && projects.length > 1) {
        onNavigate((activeIndex - 1 + projects.length) % projects.length);
      } else if (e.key === "ArrowRight" && projects.length > 1) {
        onNavigate((activeIndex + 1) % projects.length);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = originalOverflow;
    };
  }, [activeIndex, projects.length, onClose, onNavigate]);

  if (!project) return null;

  const goPrev = () =>
    onNavigate((activeIndex - 1 + projects.length) % projects.length);
  const goNext = () => onNavigate((activeIndex + 1) % projects.length);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-modal-title"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md sm:p-6"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 10 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#101114]/95 shadow-2xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project preview"
          className="absolute right-4 top-4 z-30 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:border-[#B0C4DE]/60 hover:bg-[#536186]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0C4DE]"
        >
          <X className="h-5 w-5" />
        </button>

        {projects.length > 1 && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label="Previous project"
              className="absolute left-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:border-[#B0C4DE]/60 hover:bg-[#536186]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0C4DE]"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label="Next project"
              className="absolute right-3 top-1/2 z-30 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 bg-black/50 text-white backdrop-blur-md transition-colors hover:border-[#B0C4DE]/60 hover:bg-[#536186]/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B0C4DE]"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </>
        )}

        <div className="flex-1 overflow-y-auto">
          <div className="flex items-center justify-center bg-black">
            <img
              key={project.id}
              src={project.image}
              alt={`${project.title} full preview`}
              className="max-h-[50vh] w-full object-contain sm:max-h-[60vh]"
            />
          </div>

          <div className="p-6 sm:p-8">
            <span className="inline-block rounded-full border border-[#B0C4DE]/30 bg-[#536186]/20 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#B0C4DE]">
              {getCategoryLabel(project.category)}
            </span>
            <h3
              id="portfolio-modal-title"
              className="mt-3 text-xl font-extrabold text-white sm:text-2xl md:text-3xl"
            >
              {project.title}
            </h3>
            {/* Description removed by request */}

            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white transition-transform hover:scale-105"
                style={{
                  background: "linear-gradient(120deg, #536186 0%, #B0C4DE 100%)",
                }}
              >
                Visit Live Project
                <ExternalLink className="h-4 w-4" />
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioModal;
