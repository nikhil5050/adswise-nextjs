// ServicesPage.jsx
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  BarChart3,
  Instagram,
  Palette,
  Video,
  TrendingUp,
  Globe,
  ShoppingCart,
  Search,
  ArrowRight,
  X,
} from "lucide-react";

export default function ServicesHome() {
  const [visibleCards, setVisibleCards] = useState(new Set());
  const [activeIndex, setActiveIndex] = useState(null);
  const cardRefs = useRef([]);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            if (index !== -1) {
              setVisibleCards((prev) => new Set([...prev, index]));
            }
          }
        });
      },
      { threshold: 0.12 },
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: BarChart3,
      title: "Strategy & Consulting",
      description:
        "We audit your current digital presence, competitors, and customer journey, then create a practical growth plan covering positioning, channels, content, ad funnels, and measurement to ensure a scalable roadmap for your business.",
      color: "#536186",
      slug: "strategy-consulting",
    },
    {
      icon: Instagram,
      title: "Social Media Marketing",
      description:
        "Beyond just posting, we build data-driven social strategies that foster community and brand loyalty. We manage content curation, community engagement, and platform-specific storytelling to keep your brand at the center of the conversation.",
      color: "#536186",
      slug: "social-media-marketing",
    },
    {
      icon: Palette,
      title: "Graphics Designing",
      description:
        "We develop a cohesive visual language that goes beyond aesthetics. From premium brand identities and logos to high-converting marketing collateral, we ensure every touchpoint reflects your brand’s authority and professionalism.",
      color: "#536186",
      slug: "graphics-designing",
    },
    {
      icon: Video,
      title: "Video Production",
      description:
        "High-impact video storytelling designed for the modern buyer. We produce professional commercial shoots, motion graphics, and short-form content (Reels/TikToks) that capture attention within seconds and drive meaningful action.",
      color: "#536186",
      slug: "video-production",
    },
    {
      icon: TrendingUp,
      title: "Performance Marketing",
      description:
        "Aggressive, ROI-focused advertising across Google, Meta, and LinkedIn. We optimize every stage of the funnel—from precise audience targeting to A/B testing—ensuring your ad spend translates into qualified leads and revenue.",
      color: "#536186",
      slug: "performance-marketing",
    },
    {
      icon: Globe,
      title: "Industrial & Corporate Website Development",
      description:
        "We build high-performance digital sales engines. Our websites are fast, mobile-responsive, and engineered to answer buyer objections, establish trust through UX design, and convert anonymous visitors into high-intent inquiries.",
      color: "#536186",
      slug: "website-development",
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce Development",
      description:
        "End-to-end e-commerce solutions built for scale. We focus on seamless checkout experiences, robust inventory management, and secure payment integrations to minimize cart abandonment and maximize your online sales potential.",
      color: "#536186",
      slug: "ecommerce-development",
    },
    {
      icon: Search,
      title: "Search Engine Optimization",
      description:
        "Sustainable organic growth driven by technical SEO, in-depth keyword research, and high-authority link building. We ensure your brand dominates search results for the terms that actually move the needle for your bottom line.",
      color: "#536186",
      slug: "search-engine-optimization",
    },
  ];

  const openFeatured = (index) => {
    setActiveIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeFeatured = () => {
    setActiveIndex(null);
    document.body.style.overflow = "";
  };

  // navigate to service detail page
  const goToService = (service) => {
    // close overlay and restore scroll before navigation
    setActiveIndex(null);
    document.body.style.overflow = "";
    navigate(`/services/${service.slug}`);
  };

  return (
    <div className="min-h-screen bg-[#D3D3D3] from-[#4D6473] via-[#2C4657] to-[#172531] py-10 px-6 md:px-12 relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-[#363636] mb-4 text-center">
            Our <span className="text-[#536186]">Services</span>
          </h2>

          <h2 className="text-base sm:text-lg md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#363636] mb-6 text-center leading-tight">
            COMPREHENSIVE B2B MARKETING — FROM STRATEGY TO SCALABLE GROWTH
          </h2>
          <p className="text-[#536186] text-sm md:text-lg max-w-4xl mx-auto leading-relaxed">
            We bring strategy, creative, and technology together to build a
            predictable digital growth engine for your business.​
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 relative">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isVisible = visibleCards.has(index);
            const hideWhileActive =
              activeIndex !== null && activeIndex === index;
            return (
              <div
                key={index}
                ref={(el) => (cardRefs.current[index] = el)}
                onClick={() => openFeatured(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openFeatured(index);
                }}
                className={`
                  bg-white p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105
                  ${isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-95"}
                  ${hideWhileActive ? "opacity-0 pointer-events-none" : ""}
                  cursor-pointer
                `}
                style={{
                  transitionDelay: `${(index % 4) * 80}ms`,
                  animationDelay: `${(index % 4) * 80}ms`,
                }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 transform transition-transform duration-300 hover:scale-110 hover:rotate-6"
                  style={{ backgroundColor: service.color }}
                >
                  <Icon size={32} className="text-white" strokeWidth={2} />
                </div>

                <h3 className="text-xl font-bold text-[#172531] mb-3 leading-tight">
                  {service.title}
                </h3>

                <div
                  className="w-12 h-1 mb-4"
                  style={{ backgroundColor: service.color }}
                />

                <p className="text-[#4D6473] leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center gap-2 text-[#172531] font-semibold hover:text-[#C7843B] transition-colors duration-300 group">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      goToService(service);
                    }}
                    className="flex items-center gap-2 focus:outline-none"
                    aria-label={`Learn more about ${service.title}`}
                  >
                    <span>Learn More</span>
                    <ArrowRight
                      size={20}
                      className="transform group-hover:translate-x-1 transition-transform duration-300"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Background Elements (kept unchanged) */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div
          className="absolute top-20 left-10 w-64 h-64 rounded-full opacity-5 blur-3xl animate-float"
          style={{ backgroundColor: "#C7843B" }}
        />
        <div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-5 blur-3xl animate-float-delayed"
          style={{ backgroundColor: "#F3BD68" }}
        />
        <div
          className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-5 blur-3xl animate-float-slow"
          style={{ backgroundColor: "#4D6473" }}
        />
      </div>

      {/* FEATURED OVERLAY */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 flex items-center justify-center z-50"
          aria-modal="true"
          role="dialog"
          onClick={closeFeatured}
        >
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

          <div
            className="relative z-60 max-w-3xl w-[92%] md:w-2/3 lg:w-1/2 rounded-3xl p-10 shadow-2xl transform transition-all duration-500 featured-zoom"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: `linear-gradient(180deg, ${services[activeIndex].color}, #F3BD68)`,
            }}
          >
            <button
              onClick={closeFeatured}
              aria-label="Close featured service"
              className="absolute -top-4 -right-4 bg-white rounded-full p-2 shadow-lg hover:scale-105 transition-transform"
            >
              <X size={18} />
            </button>

            <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
              <div
                className="w-28 h-28 rounded-3xl flex items-center justify-center flex-shrink-0 transform transition-transform duration-500"
                style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
              >
                {React.createElement(services[activeIndex].icon, {
                  size: 44,
                  className: "text-white",
                  strokeWidth: 2,
                })}
              </div>

              <div className="flex-1 text-white">
                <h2 className="text-2xl md:text-3xl font-extrabold leading-tight mb-2">
                  {services[activeIndex].title}
                </h2>
                <div
                  className="w-20 h-1 mb-4"
                  style={{ backgroundColor: "rgba(0,0,0,0.12)" }}
                />
                <p className="mb-6 text-white/90">
                  {services[activeIndex].description}
                </p>

                <div className="flex gap-3">
                  <button
                    onClick={() => goToService(services[activeIndex])}
                    className="bg-black/90 text-white px-6 py-3 rounded-full font-semibold shadow-md hover:translate-y-[-2px] transition-transform"
                  >
                    Learn More
                  </button>

                  <button
                    onClick={closeFeatured}
                    className="bg-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Inline CSS for animations & small utilities (unchanged) */}
      <style>{`
        @keyframes fade-in { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes float { 0%,100% { transform: translate(0, 0);} 50% { transform: translate(20px, -20px);} }
        @keyframes float-delayed { 0%,100% { transform: translate(0, 0);} 50% { transform: translate(-30px, 30px);} }
        @keyframes float-slow { 0%,100% { transform: translate(-50%, -50%);} 50% { transform: translate(calc(-50% + 40px), calc(-50% - 40px));} }

        @keyframes gridPop { 0% { transform: translateY(10px) scale(.96); opacity: 0; } 60% { transform: translateY(-4px) scale(1.02); opacity: 1; } 100% { transform: translateY(0) scale(1); opacity: 1; } }
        @keyframes featuredZoomIn { 0% { transform: scale(.72) rotate(-6deg); opacity: 0; } 60% { transform: scale(1.06) rotate(-6deg); opacity: 1; } 100% { transform: scale(1) rotate(-6deg); opacity: 1; } }

        .animate-fade-in { animation: fade-in 1s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 1s ease-out 0.6s forwards; opacity: 0; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 10s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 12s ease-in-out infinite; }

        .opacity-100.translate-y-0.scale-100 { animation: gridPop 420ms cubic-bezier(.2,.9,.2,1) both; }
        .featured-zoom { animation: featuredZoomIn 420ms cubic-bezier(.2,.9,.2,1) both; rotate: -6deg; }
      `}</style>
    </div>
  );
}
