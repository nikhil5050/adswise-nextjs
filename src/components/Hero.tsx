import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Settings,
  Video,
  TrendingUp,
  Code,
  ArrowRight,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import SEO from "./SEO";

// GSAP Imports
import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "react-router-dom";

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    { icon: Settings, title: "Smart", subtitle: "Strategy" },
    { icon: Video, title: "Content", subtitle: "Creation" },
    { icon: TrendingUp, title: "Growth", subtitle: "Marketing" },
    { icon: Code, title: "Design And", subtitle: "Development" },
  ];

  // GSAP Animation Logic for the Reveal
  /*
  useGSAP(() => {
    gsap.fromTo(
      ".dark-reveal-layer",
      { clipPath: "inset(0% 100% 0% 0%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: {
          trigger: ".reveal-main-container",
          start: "top top",
          end: "+=150%",
          scrub: true,
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
        },
      }
    );
  });
  */

  // A sleek B2B Visual to replace the floating logo
  const GrowthVisual = ({ isDark }: { isDark: boolean }) => (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center">
      {/* Background Decorative Rings */}
      <div
        className={`absolute inset-0 border-[1px] rounded-full scale-110 opacity-20 ${isDark ? "border-white" : "border-[#536186]"}`}
      />
      <div
        className={`absolute inset-0 border-[1px] rounded-full scale-75 opacity-10 ${isDark ? "border-white" : "border-[#536186]"}`}
      />

      {/* The "Growth Card" */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`relative z-10 p-8 rounded-3xl shadow-2xl backdrop-blur-md border ${
          isDark
            ? "bg-white/10 border-white/20 text-white"
            : "bg-white border-slate-200 text-[#363636]"
        }`}
      >
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl ${isDark ? "bg-blue-500" : "bg-[#536186] text-white"}`}
          >
            <BarChart3 size={32} />
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest opacity-70">
              Pipeline Value
            </p>
            <p className="text-2xl font-bold">+248% Growth</p>
          </div>
        </div>

        <div className="space-y-3">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className={`h-2 rounded-full w-full ${isDark ? "bg-white/20" : "bg-slate-100"}`}
            >
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${40 + i * 15}%` }}
                transition={{ duration: 1.5, delay: 0.5 }}
                className={`h-full rounded-full ${isDark ? "bg-blue-400" : "bg-[#536186]"}`}
              />
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t border-current/10 flex justify-between items-center">
          <span className="text-sm font-medium">Qualified Leads</span>
          <CheckCircle2
            size={18}
            className={isDark ? "text-green-400" : "text-green-600"}
          />
        </div>
      </motion.div>
    </div>
  );

  const HeroContent = ({ isDark = false, headingAs = "h1" }: { isDark?: boolean; headingAs?: "h1" | "h2" }) => {
    return (
      <div
        className={`w-full min-h-[100dvh] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 md:px-12 lg:px-20 py-24 md:py-32 lg:py-20 gap-12 lg:gap-8 ${isDark ? "text-white" : "text-[#363636]"}`}
      >
        {/* Left Content Column */}
        <div className="flex flex-col flex-[1.4] max-w-4xl lg:pr-12 w-full mt-12 lg:mt-0">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 border ${
              isDark ? 'border-white/30 text-white' : 'border-[#536186]/30 text-[#536186]'
            }`}>
              Strategy-Driven Marketing
            </span> */}

            {headingAs === "h1" ? (
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight mt-16">
                B2B Digital Marketing Company in Pune 
                <br className="hidden lg:block" />
              </h1>
            ) : (
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-extrabold leading-[1.05] mb-6 tracking-tight mt-16">
                B2B Digital Marketing Company in Pune 
                <br className="hidden lg:block" />
              </h2>
            )}

            <div className="space-y-6 mb-10">
              {/* <h2 className="text-xl md:text-2xl font-medium leading-tight max-w-2xl opacity-90">
                No vanity metrics. Only qualified pipeline growth.
                <span className="block  decoration-2 underline-offset-4">
                  Strategy-driven marketing built for serious B2B brands.
                </span>
              </h2> */}
              <h2 className="text-xl md:text-3xl font-medium leading-tight max-w-2xl opacity-90">
                <span
                  className={`block mt-1 lg:mt-3 ${isDark ? "text-blue-200" : "text-[#536186]"}`}
                >
                  FOR GROWTH-FOCUSED BRANDS.
                </span>
              </h2>
              <p
                className={`text-base md:text-lg lg:text-xl font-light max-w-2xl leading-relaxed ${
                  isDark ? "text-gray-300" : "text-gray-600"
                }`}
              >
                <span className="font-semibold">Adswise Marketing</span> is a results-driven
                B2B digital marketing agency helping businesses grow through SEO, Google Ads,
                social media marketing, website development and lead generation. We create
                data-driven strategies that increase traffic, generate qualified leads and
                deliver measurable business growth.
              </p>
            </div>

            {/* CTA Section */}
            <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-5 items-start sm:items-center mb-10 w-full">
              <Link
                to="/contact"
                className={`group w-full sm:w-auto justify-center px-8 py-4 rounded-lg font-bold flex items-center gap-3 transition-all ${
                  isDark
                    ? "bg-white text-[#536186] hover:bg-blue-50"
                    : "bg-[#536186] text-white hover:bg-[#3d4866]"
                }`}
              >
                Book a Personalized Strategy Call
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
            </div>

            {/* Service Ribbon */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 opacity-80 w-full">
              {services.map((s, i) => (
                <div key={i} className="flex items-center gap-2">
                  <s.icon
                    size={18}
                    strokeWidth={2}
                    className={`shrink-0 ${isDark ? "text-blue-300" : "text-[#536186]"}`}
                  />
                  <span className="text-[10px] md:text-[11px] font-bold uppercase tracking-wider">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right Visual Column */}
        <div className="hidden lg:flex flex-1 items-center justify-center">
          <GrowthVisual isDark={isDark} />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full font-sans antialiased">
      <SEO
        title="B2B Digital Marketing Agency in India | Adswise Marketing"
        description="Adswise Marketing is a B2B digital marketing agency in India helping manufacturing, real estate and service brands with industrial SEO."
      />

      <div className="reveal-main-container relative overflow-hidden w-full">
        {/* LIGHT LAYER - Professional Slate Gray */}
        <div className="relative bg-[#F8FAFC] z-10 w-full h-full">
          <HeroContent isDark={false} />
        </div>

        {/* DARK LAYER - Deep Indigo B2B */}
        <div className="dark-reveal-layer absolute inset-0 bg-[#1E293B] z-20 overflow-hidden w-full h-full">
          {/* Background Video */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <video
              src="https://adswisemarketing.com//bg3.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            {/* Overlay to ensure text readability */}
            <div className="absolute inset-0 bg-[#1E293B]/80" />
          </div>
          <div className="relative z-10 w-full h-full">
            <HeroContent isDark={true} headingAs="h2" />
          </div>
        </div>
      </div>

      <style>{`
        /* Clean scroll reset */
        body { overflow-x: hidden; margin: 0; background: #F8FAFC; }
        
        /* Modern font smoothing */
        * { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
      `}</style>
    </div>
  );
}
