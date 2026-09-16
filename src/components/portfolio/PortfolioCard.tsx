import { useRef, useState, type KeyboardEvent, type MouseEvent } from "react";
import { motion, useMotionValue, useSpring, type Variants } from "framer-motion";
import { Eye } from "lucide-react";
import { PortfolioProject, getCategoryLabel } from "../../data/portfolio";

interface PortfolioCardProps {
  project: PortfolioProject;
  index: number;
  layoutStyle?: "wide" | "square";
  onOpen: () => void;
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] },
  }),
  exit: { opacity: 0, y: 16, scale: 0.97, transition: { duration: 0.25 } },
};

const PortfolioCard = ({ project, index, layoutStyle = "square", onOpen }: PortfolioCardProps) => {
  const [loaded, setLoaded] = useState(false);
  const cardRef = useRef<HTMLElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 22, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 22, mass: 0.4 });

  const handleMouseMove = (e: MouseEvent<HTMLElement>) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(relX * 10);
    y.set(relY * 10);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      onOpen();
    }
  };

  const isCreative = project.category === "creative-design";
  const computedAspect = isCreative ? "aspect-square" : layoutStyle === "wide" ? "aspect-video" : "aspect-[4/5]";

  return (
    <motion.article
      ref={cardRef}
      layout
      custom={index}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ y: -8 }}
      onClick={onOpen}
      onKeyDown={handleKeyDown}
      role="button"
      tabIndex={0}
      aria-label={`View project details`}
      className={`group relative cursor-pointer overflow-hidden ${isCreative ? "rounded-none" : "rounded-[24px]"} bg-[#20303f] outline-none focus-visible:ring-2 focus-visible:ring-[#B0C4DE] focus-visible:ring-offset-2 ${computedAspect}`}
    >
        {/* removed glow/shadow to keep uniform flat cards */}

      {/* Skeleton while image loads */}
      {!loaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-[#1c1e24] via-[#15171b] to-[#1c1e24]" />
      )}

      <img
        src={project.image}
        alt={`${getCategoryLabel(project.category)} project image`}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full ${layoutStyle === "wide" ? "object-contain" : "object-cover"} transition-transform duration-700 ease-out group-hover:scale-105 ${
          loaded ? "opacity-100 blur-0" : "opacity-0 blur-md"
        }`}
      />

      {/* Dark gradient overlay */}
      

      {/* Category badge */}
      <span className="absolute left-4 top-4 z-20 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-md transition-all duration-500 group-hover:border-[#B0C4DE]/50 group-hover:bg-[#536186]/40">
        {getCategoryLabel(project.category)}
      </span>

      {/* Content reveal */}
      <div className="absolute inset-x-0 bottom-0 z-20 translate-y-3 p-4 sm:p-5 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
        {/* Title hidden by request */}
        <div className="mt-2 flex -translate-y-1 items-center gap-1.5 text-xs font-semibold text-[#B0C4DE] opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Eye className="h-3.5 w-3.5" />
          View Project
        </div>
      </div>
    </motion.article>
  );
};

export default PortfolioCard;
