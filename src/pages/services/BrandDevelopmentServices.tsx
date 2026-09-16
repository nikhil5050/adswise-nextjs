import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  CheckCircle,
  BarChart2,
  ChevronRight,
  Target,
  PenTool,
  Film,
  Megaphone,
  Briefcase,
  ChevronUp,
  ChevronDown,
  Layers,
  Search,
  Star,
  Globe,
  Share2,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

// ============================================================================
// ANIMATED SECTION WRAPPER
// ============================================================================

const AnimatedSection: React.FC<{
  children: React.ReactNode;
  className?: string;
  delay?: number;
}> = ({ children, className = "", delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

// ============================================================================
// MAIN COMPONENT
// ============================================================================

const BrandDevelopmentServices = () => {
  // Monochromatic Color Palette:
  // #536186 - Stone Gray (Primary Accent)
  // #D3D3D3 - Fog Gray (Light Background)
  // #363636 - Charcoal Gray (Text/Dark Background)
  // #C0C0C0 - Silver (Borders/Secondary Accent)
  // #B0C4DE - Ash Gray (Highlighting)

  const HeroSection = () => {
    return (
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#D3D3D3] text-[#363636] py-20 lg:py-0">
        <Helmet>
          <title>
            best branding agency | Adswise Marketing — Brand Experts
          </title>
          <meta
            name="description"
            content="Looking for the best branding agencies to shape a memorable identity? Adswise Marketing builds strategic brand experiences that boost   long-term growth."
          />
        </Helmet>
        {/* --- BACKGROUND ANIMATION LAYER --- */}
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.15]"
            style={{
              backgroundImage: `linear-gradient(#536186 1px, transparent 1px), linear-gradient(90deg, #536186 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-[#D3D3D3]"
              animate={{ opacity: [0.1, 0.3, 0.1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />
          </div>

          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bg-[#536186]/20 rounded-full"
              style={{
                width: Math.random() * 100 + 50,
                height: Math.random() * 100 + 50,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -40, 0],
                x: [0, 20, 0],
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 4 + i,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          ))}

          <div className="absolute top-0 right-0 w-3/4 md:w-[600px] h-[600px] bg-[#B0C4DE] rounded-full blur-[80px] md:blur-[120px] opacity-60"></div>
          <div className="absolute bottom-0 left-0 w-3/4 md:w-[600px] h-[600px] bg-[#C0C0C0] rounded-full blur-[80px] md:blur-[120px] opacity-60"></div>
        </div>

        {/* --- CONTENT LAYER --- */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 text-center max-w-5xl pt-12 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="pointer-events-auto"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-[#536186]/10 border border-[#536186]/20 text-[#536186] rounded-full mt-10"
            >
              Premium Brand Building
            </motion.span>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-6 mt-4 leading-tight text-[#363636]">
              Best branding agency - <br />
              <span className="text-[#536186]">Adswise Marketing</span>
            </h1>

            <p className="text-lg sm:text-xl text-[#363636]/80 mb-10 leading-relaxed font-medium max-w-3xl mx-auto">
              At Adswise Marketing, we assist ambitious businesses in partnering
              with the best branding agency to transform ideas into unique,
              revenue-driven brands. Our team of brand builders at the best
              branding agencies leverages market research, strategy, and
              creative design to develop brand identities that not only resonate
              on an emotional level but also deliver commercially. If you're
              looking to evaluate the best branding firms or searching through
              branding companies to enhance your presence in the market, our
              brand-building strategy and commercial focus make us the ideal
              partner for you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-white bg-[#536186] shadow-lg shadow-[#536186]/30 transform transition hover:scale-105 hover:bg-[#363636] active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                Get Your Free Brand Audit <ChevronRight size={18} />
              </Link>
              <Link
                to="/case-studies#branding"
                className="w-full sm:w-auto px-10 py-4 rounded-lg font-bold text-[#363636] bg-white border border-[#C0C0C0] hover:border-[#536186] shadow-lg transform transition hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative z-50 hover:cursor-pointer pointer-events-auto"
              >
                See Related Case Studies <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>
      </header>
    );
  };

  const IntroductionSection = () => (
    <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Brand value is more than just a{" "}
              <span className="text-[#536186]">visual representation</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium mb-6">
              It’s a perception that people carry, a promise that you make, and
              an experience that you deliver. Organizations that invest in
              branding can enjoy better customer recognition, higher margins,
              and higher customer value. At Adswise Marketing, we are an
              experienced brand building agency that specializes in helping
              startups, growing businesses, and enterprises create brands that
              can grow with their organizations.
            </p>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium">
              Our process is centered around a data-driven approach and creative
              execution. We understand that brands require a flexible,
              defensible, and measurable solution, and we can help you create a
              brand identity or run targeted campaigns to refine perception and
              create a better value proposition for your customers.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhatIsSection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3]/50 border-b border-[#C0C0C0]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              What is <span className="text-[#536186]">Branding?</span>
            </h2>
            <p className="text-lg sm:text-xl text-[#363636]/70 leading-relaxed font-medium">
              Branding is the deliberate process of building how you want your
              company to be received, every time. Branding is a combination of
              science and magic and includes:
            </p>
          </div>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Target size={32} className="text-[#536186]" />,
              title: "Brand Strategy",
              desc: "Positioning, Promise, and Value Proposition.",
            },
            {
              icon: <Search size={32} className="text-[#536186]" />,
              title: "Visual Identity",
              desc: "Logo, Color Systems, Typography, and Supporting Graphic Elements.",
            },
            {
              icon: <Megaphone size={32} className="text-[#536186]" />,
              title: "Verbal Identity",
              desc: "Name, Tagline, Messaging Pillars, and Tone of Voice.",
            },
            {
              icon: <Layers size={32} className="text-[#536186]" />,
              title: "Customer Experience",
              desc: "All the touchpoints from digital and advertising to packaging and services.",
            },
          ].map((item, idx) => (
            <AnimatedSection key={idx} delay={idx * 0.1}>
              <div className="bg-white rounded-2xl p-8 border border-[#C0C0C0] hover:border-[#536186] hover:shadow-[0_8px_30px_rgba(83,97,134,0.15)] transition-all duration-300 h-full group">
                <div className="bg-[#D3D3D3]/50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#363636] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#363636]/70 font-medium leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <p className="text-center text-lg text-[#363636]/80 max-w-3xl mx-auto mt-12 font-medium">
            Good branding helps your customers and your team behind the scenes.
            It helps you build recognition, trust, and even drive purchase
            decisions, which is why the best branding agencies approach brand
            work as a strategic and creative endeavor.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );

  const WhySection = () => (
    <section className="py-16 sm:py-24 bg-[#D3D3D3] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-40 mix-blend-multiply"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-6 text-[#363636]">
              Why Your Business Needs{" "}
              <span className="text-[#536186]">Branding</span>
            </h2>
            <p className="text-lg text-[#363636]/80 mb-8 font-medium">
              (and how branding companies help) <br />
              <br />
              Investing in brand strategy and execution can reduce long-term
              marketing costs and enhance customer loyalty. A strong brand can
              provide:
            </p>
            <div className="space-y-6">
              <ul className="space-y-4">
                {[
                  "Differentiation that sets you apart in competitive markets.",
                  "Faster conversion with clear communication.",
                  "Consistency in trust-building with customers.",
                  "Scalable identity systems that can support new product or market expansion.",
                ].map((item, idx) => (
                  <li key={idx} className="flex gap-4 items-start">
                    <div className="flex-shrink-0 mt-1 w-6 h-6 rounded-full bg-[#536186] flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-[#363636]/80 font-medium text-lg">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <div className="bg-[#363636] p-8 md:p-10 rounded-3xl shadow-2xl relative border border-[#C0C0C0]/20">
              <div className="absolute -top-6 -right-6 bg-[#C0C0C0] w-24 h-24 rounded-full blur-[30px] opacity-20"></div>
              <div className="bg-[#536186] w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
                <Target className="text-white" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
                A successful engagement with an established branding agency can
                provide the governance, expertise, and process that can help an
                organization avoid the pitfalls of incremental fixes or copying
                others.
              </h3>
              <p className="text-[#D3D3D3] font-medium leading-relaxed mb-8">
                A trusted branding agency/firm can create an unified identity
                based on the needs of the audience and the strategy of the
                business.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#D3D3D3] text-[#363636] font-bold rounded-lg hover:bg-white transition"
              >
                Schedule Consultation <ChevronRight size={18} />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our <span className="text-[#536186]">branding services</span>
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                Adswise Marketing offers an end-to-end branding solution,
                specifically developed to fit the objectives and phase of your
                business:
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Strategy Development
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Discovery sessions and stakeholder interviews.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Market
                    research, segmentation, and competitor mapping.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Brand
                    positioning, mission, vision, and value architecture.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Development of brand names and taglines, and messaging
                    frameworks.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <PenTool className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Visual Identity & Design
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Primary
                    logos, secondary logos, and iconography.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Color
                    palettes, typography, and grid systems.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Brand
                    style guides, including usage and implementation.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Design
                    of packaging and offline materials, including retail and
                    POS.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Megaphone className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Content Creation & Storytelling
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Messaging playbooks and tone of voice.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Content
                    for the web, including website, landing pages, and SEO.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Sales
                    tools, product storytelling, and short-form brand films.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Content
                    calendars and storytelling blueprints.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Briefcase className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Campaign Management & Activation
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Brand
                    launch blueprints.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Integrated campaigns, including digital and offline.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Coordination of creative and paid media execution.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Influencer, partnership, and experience marketing.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.5}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <BarChart2 className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Insights & Performance Tracking
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> Brand
                    diagnostics and perception tracking.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" /> KPI
                    development: awareness, consideration, NPS, and LTV.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Attribution modeling for creative and campaign performance.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Quarterly reviews and iteration planning for long-term brand
                    development.
                  </li>
                </ul>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.6}>
              <div className="bg-[#B0C4DE]/20 p-8 rounded-3xl h-full border border-[#C0C0C0]">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-[#536186] rounded-xl flex justify-center items-center">
                    <Target className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-[#363636]">
                    Paid Advertising (Brand-Led)
                  </h3>
                </div>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Brand-first paid social and search.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Creative experimentation and testing.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Retargeting and funnel optimization.
                  </li>
                  <li className="flex items-center gap-2 text-[#363636]/80 font-medium">
                    <CheckCircle size={18} className="text-[#536186]" />{" "}
                    Performance measurement and optimization, including brand
                    and commercial metrics.
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    );
  };

  const PlatformsSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50 border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Platforms We Work With
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                We create brand experiences where your customers spend time:
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                name: "Instagram",
                desc: "Visual storytelling, Reels, and community building.",
              },
              {
                name: "Facebook",
                desc: "Awareness, social proof, and retargeting funnels.",
              },
              {
                name: "LinkedIn",
                desc: "B2B positioning and thought leadership.",
              },
              {
                name: "YouTube",
                desc: "Brand films, tutorials, and long-form content.",
              },
              {
                name: "Twitter/X",
                desc: "PR amplification and real-time engagement.",
              },
              {
                name: "Custom Websites",
                desc: "Builds that capture the essence of your brand.",
              },
            ].map((platform, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white p-6 rounded-2xl border border-[#C0C0C0] shadow-sm flex flex-col gap-2 hover:border-[#536186] transition-colors h-full">
                  <div className="flex items-center gap-2">
                    <CheckCircle
                      className="text-[#536186] flex-shrink-0"
                      size={20}
                    />
                    <span className="font-bold text-[#363636] text-lg">
                      {platform.name}
                    </span>
                  </div>
                  <p className="text-[#363636]/80 text-sm">{platform.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="bg-[#363636] text-white p-8 rounded-2xl text-center max-w-3xl mx-auto shadow-xl">
              <p className="text-[#D3D3D3]/90 font-medium leading-relaxed">
                We make sure the designs we create for you are platform-ready
                and consistent across all platforms.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  const ProcessSection = () => {
    const processSteps = [
      {
        t: "Brand Discovery & Deep Audits",
        d: "Complete health checks, stakeholder alignment, and precise audience understanding.",
      },
      {
        t: "Define Strategy",
        d: "Positioning statements, messaging frameworks, and design briefs.",
      },
      {
        t: "Design & Prototyping",
        d: "Complete visual identity systems, ready-to-use templates, and pilot project deliverables.",
      },
      {
        t: "Build & Package",
        d: "Website, social packages, and launch materials.",
      },
      {
        t: "Launch & Promote",
        d: "Launch planning, seeding programs.",
      },
      {
        t: "Measure & Iterate",
        d: "Review of analytics, user feedback, and creative refresh.",
      },
      {
        t: "Scale & Systematize",
        d: "Playbooks for scaled growth.",
      },
    ];

    return (
      <section className="py-16 sm:py-24 bg-[#B0C4DE]/15">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center mb-16">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Our process (5–7 steps)
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                We have a transparent and reproducible process to eliminate
                confusion and deliver results quickly. This is the secret behind
                the success of the top brand building companies in the industry.
              </p>
            </AnimatedSection>
          </div>

          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-[#C0C0C0] flex items-center gap-6 shadow-sm hover:border-[#536186] transition-colors">
                  <div className="w-12 h-12 bg-[#D3D3D3]/50 rounded-full flex items-center justify-center font-bold text-[#536186]">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-[#363636] mb-1">
                      {step.t}
                    </h3>
                    <p className="text-[#363636]/80 font-medium">{step.d}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const AdditionalInfoSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-white border-b border-[#C0C0C0]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 mb-24">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Benefits of choosing our branding service
              </h2>
              <p className="text-lg text-[#363636]/80 font-medium mb-6">
                When you choose to work with Adswise Marketing, you receive:
              </p>
              <div className="space-y-4 mb-6">
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Star size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Clarity in strategy that ensures brand activities are
                    directly related to business goals.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <PenTool size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Creativity that is both beautiful and conversion-focused.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Layers size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Consistency in all channels, providing a cohesive brand
                    experience.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <BarChart2 size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Informed decisions that are backed by research and data
                    analysis.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Target size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Scalability that is easy and straightforward, making it
                    perfect for licensing.
                  </span>
                </div>
                <div className="bg-[#363636] text-white p-4 rounded-xl shadow-md border border-[#363636]/20 flex gap-4 items-center">
                  <Users size={24} className="text-[#B0C4DE] shrink-0" />
                  <span className="font-semibold">
                    Collaboration that is clear and transparent, with regular
                    checks, workshops, and shared ownership.
                  </span>
                </div>
              </div>
              <p className="text-lg text-[#363636]/80 font-bold mb-6">
                These are the benefits that distinguish a premium branding
                agency from a design company that simply offers a singular
                service.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="bg-[#B0C4DE]/15 rounded-3xl p-8 sm:p-10 border border-[#C0C0C0] h-full">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                  Why choose Adswise Marketing
                </h2>
                <p className="text-lg text-[#363636]/80 font-medium mb-6">
                  Finding the right agency to work with is crucial. Adswise
                  Marketing offers high-level strategy and in-house creative
                  capabilities:
                </p>
                <ul className="space-y-6 mb-8">
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Strategy:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        Experienced strategists with hard evidence of results
                        delivered to clients.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Interdisciplinary teams:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        strategists, designers, writers, and analysts.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Real evidence of success:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        proven results in building awareness and driving
                        revenue.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Flexible engagement models:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        project, retainer, and growth partnership.
                      </p>
                    </div>
                  </li>
                  <li className="flex gap-4 items-start">
                    <div className="bg-white rounded-full p-2 border border-[#C0C0C0] shadow-sm">
                      <CheckCircle className="text-[#536186]" size={20} />
                    </div>
                    <div>
                      <strong className="text-xl text-[#363636]">
                        Practical brand management:
                      </strong>
                      <p className="text-[#363636]/70 mt-1 font-medium">
                        for teams, partners, and franchises.
                      </p>
                    </div>
                  </li>
                </ul>
                <div className="text-center font-bold text-lg text-[#363636]">
                  We don’t just make pretty pictures. We make brands that
                  deliver, grow, and sustain competitive advantage.
                </div>
              </div>
            </AnimatedSection>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-12">
            <AnimatedSection>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                Industries we serve
              </h2>
              <p className="text-lg text-[#363636]/70 leading-relaxed font-medium">
                Our frameworks are flexible enough to accommodate
                sector-specific requirements. Our branding solutions have been
                implemented in:
              </p>
            </AnimatedSection>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 max-w-6xl mx-auto">
            {[
              "Technology & Software as a Service",
              "FMCG & Retail",
              "Healthcare, Wellness & Biotech",
              "Wealth & Fintech Innovators",
              "Hospitality, Wanderlust & Leisure",
              "Education & EdTech",
              "Professional Services & B2B Solutions",
            ].map((item, idx) => (
              <AnimatedSection key={idx} delay={idx * 0.1}>
                <div className="bg-[#D3D3D3]/20 p-6 rounded-2xl border border-[#C0C0C0] flex items-center justify-center text-center h-full">
                  <h3 className="text-lg font-bold text-[#363636]">{item}</h3>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="text-center mb-16">
            <a
              href="https://adswisemarketing.com/brand-playbook"
              className="inline-flex justify-center items-center py-4 px-8 text-white font-bold bg-[#536186] rounded-xl shadow-lg hover:bg-[#363636] transition-colors"
            >
              Download Our Brand Playbook{" "}
              <ChevronRight size={18} className="ml-2" />
            </a>
          </div>
        </div>
      </section>
    );
  };

  const FAQSection = () => {
    const faqs = [
      {
        q: "What makes Adswise Marketing one of the best branding agencies?",
        a: "Our unique mix of research-driven strategy, creative excellence, and performance measurement ensures brand work is tied directly to business results. We focus on outcomes across channels and across time.",
      },
      {
        q: "How long does a full brand build typically take?",
        a: "Timelines vary by scope; full identity projects generally complete between 8–16 weeks. We provide milestone-driven plans and can offer expedited tracks when needed.",
      },
      {
        q: "Can you work with both startups and enterprise companies?",
        a: "Absolutely. We scale our approach — lean, investor-ready brands for startups and robust ecosystem builds for large enterprises.",
      },
      {
        q: "Do you handle both digital and offline brand activation?",
        a: "Yes. We coordinate integrated launches covering web, social, paid media, packaging, events, and retail collaterals.",
      },
      {
        q: "What deliverables can I expect from a branding engagement?",
        a: "Typical deliverables include a brand strategy brief, logo files and guidelines, website templates, social asset packs, launch plans, and performance dashboards.",
      },
    ];
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
      <section className="py-16 sm:py-24 bg-[#D3D3D3]/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#363636] mb-6">
                FAQs
              </h2>
            </div>
          </AnimatedSection>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="bg-white rounded-2xl shadow-sm border border-[#C0C0C0] overflow-hidden">
                  <button
                    className="w-full px-6 py-5 text-left flex justify-between items-center bg-white hover:bg-[#D3D3D3]/20 transition-colors"
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                  >
                    <span className="font-bold text-[#363636] pr-8">
                      {faq.q}
                    </span>
                    {openIndex === index ? (
                      <ChevronUp className="text-[#536186] flex-shrink-0" />
                    ) : (
                      <ChevronDown className="text-[#536186] flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 text-[#363636]/80 font-medium">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const CallToAction = () => {
    return (
      <section className="py-16 sm:py-24 relative overflow-hidden bg-[#363636] text-white">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#B0C4DE] rounded-full blur-[100px] opacity-20 mt-10 mr-10 z-0"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#536186] rounded-full blur-[100px] opacity-30 z-0"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-20 max-w-4xl text-center">
          <AnimatedSection>
            <h2 className="text-3xl sm:text-5xl font-extrabold mb-8 leading-tight">
              Ready to work with one of the <br />
              <span className="text-[#536186] text-white">
                best branding agencies?
              </span>
            </h2>
            <p className="text-lg sm:text-xl text-[#D3D3D3] mb-10 leading-relaxed max-w-3xl mx-auto">
              If you’re prepared to work with one of the best branding agencies
              to design a brand that attracts attention and drives business,
              Adswise Marketing is ready to collaborate. From strategic
              foundations to full-scale launches and ongoing optimization, our
              brand building agency expertise ensures clarity, consistency, and
              commercial growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold bg-[#D3D3D3] text-[#363636] hover:bg-white transform transition hover:scale-105"
              >
                Schedule a Free Brand Discovery Call
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold border border-[#C0C0C0] text-white hover:bg-white/10 transition-colors"
              >
                View Services Overview
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans text-[#363636]">
      <HeroSection />
      <IntroductionSection />
      <WhatIsSection />
      <WhySection />
      <ServicesSection />
      <PlatformsSection />
      <ProcessSection />
      <AdditionalInfoSection />
      <FAQSection />
      <CallToAction />
    </div>
  );
};

export default BrandDevelopmentServices;
