import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring, Variants } from "framer-motion";

// --- Types ---
interface CounterProps {
  value: number;
  start?: boolean;
  direction?: "up" | "down";
}

interface StatItem {
  label: string;
  value: number;
}

// --- Helper Component: Animated Counter ---
const Counter: React.FC<CounterProps> = ({
  value,
  start = false,
  direction = "up",
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(direction === "down" ? value : 0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    if (start) {
      motionValue.set(direction === "down" ? 0 : value);
    }
  }, [start, motionValue, direction, value]);

  useEffect(() => {
    const unsub = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(
          Math.floor(latest)
        );
      }
    });
    return () => unsub();
  }, [springValue]);

  return <span ref={ref} className="inline-block min-w-[1ch] text-right" />;
};

// --- Animation Variants ---
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const textVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

// --- Main Component ---
const StatsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  // amount: 0.3 means animation triggers when 30% of component is visible
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });

  const stats: StatItem[] = [
    { label: "Years of Experience", value: 3 },
    { label: "Successful Projects", value: 700 },
    { label: "Brands Transformed", value: 450 },
    { label: "Campaigns Launched", value: 1010 },
  ];

  return (
    <section 
      className="bg-[#D3D3D3] py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative "
    >
      <motion.div 
        ref={containerRef}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center"
      >
        
        {/* LEFT COLUMN: Text Content */}
        <motion.div variants={textVariants} className="space-y-6">
          <header>
            <h3 c
            lassName="text-xl md:text-2xl font-semibold text-[#536186] mb-2">
              Your Brand Deserves More
            </h3>
            <div className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-[#363636] leading-tight tracking-tighter">
              Recognition
            </div>
          </header>

          <p className="text-[#363636] leading-relaxed text-base sm:text-lg text-justify font-medium opacity-90">
            At <strong className="text-[#536186]">Adswise Marketing</strong>, your brand gets more than visibility — it gets measurable growth. We blend creativity, strategy, and technology to build campaigns that genuinely connect with the right audience.
            <br /><br />
            With <strong className="text-[#363636]">Adswise Marketing as your partner, success becomes consistent and predictable.</strong>
          </p>
        </motion.div>

        {/* RIGHT COLUMN: Statistics Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-2 gap-x-6 gap-y-10 sm:gap-x-12 sm:gap-y-16"
        >
          {stats.map((stat, idx) => (
            <motion.div 
              key={idx} 
              variants={itemVariants}
              className="flex flex-col border-l-4 border-[#536186] pl-6 group"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl font-black text-[#363636] mb-2 flex items-baseline gap-1 group-hover:text-[#536186] transition-colors duration-300">
                <Counter value={stat.value} start={isInView} />
                <span className="text-[#536186] font-bold">+</span>
              </div>
              <p className="text-[#536186] text-xs sm:text-sm md:text-base font-bold uppercase tracking-widest leading-snug">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default StatsSection;