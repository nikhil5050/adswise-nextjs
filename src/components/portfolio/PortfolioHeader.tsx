import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";

interface PortfolioHeaderProps {
  projectCount: number;
}

const CountUp = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: "easeOut",
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
};

const PortfolioHeader = ({ projectCount }: PortfolioHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative mx-auto max-w-[900px] text-center px-4"
    >
      {/* Glow behind heading */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-64 w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[100px]"
        style={{ background: "radial-gradient(circle, #536186 0%, transparent 70%)" }}
      />

      <motion.span
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="inline-flex items-center gap-2 rounded-full border border-[#B0C4DE]/30 bg-[#B0C4DE]/[0.06] px-4 py-1.5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#B0C4DE] backdrop-blur-sm"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[#B0C4DE] shadow-[0_0_8px_2px_rgba(176,196,222,0.6)]" />
        Our Work
      </motion.span>

      <motion.h2
        id="portfolio-heading"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.12 }}
        className="mt-5 text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-white tracking-tight"
      >
        Our Portfolio of{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(120deg, #B0C4DE 0%, #536186 100%)",
          }}
        >
          Impactful Solutions
        </span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mx-auto mt-5 max-w-[700px] text-base sm:text-lg text-gray-300 leading-relaxed"
      >
        Showcase our successful projects across Creative Design, Website
        Development, Reels Editing, SEO and Performance Marketing. Every
        project reflects innovation, measurable growth and exceptional user
        experiences.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.28 }}
        className="mt-8 flex items-center justify-center"
      >
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] px-8 py-4 backdrop-blur-sm">
          <p className="text-3xl sm:text-4xl font-extrabold text-white">
            <CountUp value={projectCount * 6 + 12} />
          </p>
          <p className="mt-1 text-xs sm:text-sm uppercase tracking-[0.18em] text-[#B0C4DE]">
            Projects Delivered
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default PortfolioHeader;
