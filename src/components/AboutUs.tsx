import { useEffect, useState, useRef } from "react";
import {
  Target,
  Eye,
  TrendingUp,
  BarChart3,
  Layers,
  Zap,
  ShieldCheck,
  ChevronRight,
  Factory,
  Home,
  Briefcase,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Layout,
  MousePointerClick,
  Building2,
  MapPin,
  CheckCircle2,
  Linkedin,
} from "lucide-react";

import { Link } from "react-router-dom";
import SEO from "./SEO";
import Team from "../homepages/Team";

export default function AboutUs() {
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef({});

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      Object.entries(sectionRefs.current).forEach(([key, element]) => {
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.8) {
            setVisibleSections((prev) => new Set([...prev, key]));
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const differentiators = [
    {
      icon: Layers,
      title: "Strategy Before Campaigns",
      desc: "Most agencies begin with ads. We begin with research and business clarity.",
    },
    {
      icon: Target,
      title: "Focus on Qualified Leads",
      desc: "Our objective is not traffic — it is pipeline growth and meaningful enquiries.",
    },
    {
      icon: Zap,
      title: "Full-Funnel Systems",
      desc: "Brand awareness, lead generation, nurturing, and reporting work as one connected system.",
    },
    {
      icon: Layout,
      title: "Creative That Sells",
      desc: "Websites, ad creatives, and videos are designed not just to look good, but to drive form fills, calls, and store visits.",
    },
    {
      icon: BarChart3,
      title: "Transparent Tracking",
      desc: "Clear dashboards and campaign reports show exactly how marketing contributes to your business growth.",
    },
    {
      icon: ShieldCheck,
      title: "Systems, Not Services",
      desc: "We build growth architecture that your business can rely on quarter after quarter.",
    },
  ];

  const industries = [
    { icon: Factory, title: "Manufacturing & Industrial", desc: "B2B Scale" },
    { icon: Home, title: "Interior & Architecture", desc: "Design Studios" },
    { icon: Building2, title: "Real Estate", desc: "Developers" },
    { icon: ShoppingCart, title: "Footwear & Retail", desc: "Consumer Brands" },
    { icon: GraduationCap, title: "Education", desc: "Institutions" },
    { icon: HeartPulse, title: "Healthcare", desc: "Medical Brands" },
    { icon: Briefcase, title: "B2B Services", desc: "Professional Firms" },
    { icon: Layout, title: "E-commerce", desc: "Digital Scaling" },
  ];

  const framework = [
    {
      num: "01",
      title: "Market Intelligence & Research",
      desc: "We analyse your industry, competitors, and customer decision journey to identify strategic growth opportunities.",
    },
    {
      num: "02",
      title: "Strategic Roadmap",
      desc: "A documented plan covering positioning, channels, messaging, funnel structure, and measurement.",
    },
    {
      num: "03",
      title: "Digital Infrastructure",
      desc: "High-conversion sites, SEO architecture, analytics systems, and CRM integrations.",
    },
    {
      num: "04",
      title: "Performance Campaigns",
      desc: "Targeted search ads, social ads, SEO, and strategic content marketing.",
    },
    {
      num: "05",
      title: "Continuous Optimisation",
      desc: "Refining campaigns to increase conversion rates, reduce cost per lead, and maximise ROI.",
    },
  ];

  return (
    <div className="bg-[#D3D3D3]/10 text-[#363636] font-sans selection:bg-[#536186] selection:text-white">
      <SEO
        title="Driven by Your Success | About Adswise Marketing"
        description="Transform your sales funnel with a leading B2B marketing agency. We specialize in lead generation, ROI-focused digital strategy, and scalable growth."
      />
      {/* --- HERO SECTION --- */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden px-4 sm:px-6 md:px-12 bg-[#536186]">
        {/* GIF Background */}
        <div className="absolute inset-0 pointer-events-none">
          <img
            src="https://i.pinimg.com/originals/88/15/63/881563d6444b370fa4ceea0c3183bb4c.gif"
            alt="Hero Background"
            className="w-full h-full object-cover"
          />
          {/* Overlay to assure text readability */}
          <div className="absolute inset-0 bg-[#536186]/80" />
        </div>

        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at 30% 50%, #B0C4DE 0%, transparent 50%), 
                         radial-gradient(circle at 70% 50%, #363636 0%, transparent 50%)`,
            transform: `translateY(${scrollY * 0.15}px)`,
          }}
        />

        <div className="max-w-5xl mx-auto text-center relative z-10 py-20 mt-12">
          <span className="inline-block text-[#B0C4DE] font-bold tracking-[0.15em] mb-6 text-xs md:text-sm uppercase animate-fade-in px-4 py-1 border border-[#B0C4DE]/30 rounded-full">
            About Adswise Marketing
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black mb-8 animate-fade-in tracking-tighter leading-[1.1] text-white">
            A Strategy-First B2B <br className="hidden md:block" />
            <span className="text-[#B0C4DE]">
              {" "}
              Digital Marketing{" "}
            </span> Agency <br className="hidden md:block" />
            in Pune
          </h1>
          <div className="space-y-6 text-lg sm:text-xl text-[#E5E5E5] font-light max-w-4xl mx-auto animate-fade-in-delay px-4 leading-relaxed tracking-tight">
            <p>
              Adswise Marketing is a strategy-driven B2B digital marketing
              agency in Pune that helps growth-focused brands generate qualified
              leads, strengthen their digital presence, and build predictable
              marketing systems.
            </p>
            <p className="text-base md:text-lg opacity-90">
              Adswise was created after observing a common problem: many
              agencies celebrate impressions and clicks, while business owners
              care about qualified enquiries and measurable growth. Instead of
              selling predefined “packages,” we design research-driven digital
              growth frameworks tailored to your industry and revenue goals.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12 animate-fade-in-delay-2 px-6">
            <button className="bg-white text-[#363636] hover:bg-[#B0C4DE] px-8 py-4 rounded-full font-bold transition-all duration-300 transform hover:scale-105 shadow-xl flex items-center justify-center gap-2 text-sm md:text-base">
              Book Your Strategy Consultation <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* --- APPROACH SECTION --- */}
      <section
        ref={(el) => (sectionRefs.current["approach"] = el)}
        className={`py-16 md:py-28 px-6 bg-white transition-all duration-1000 transform ${
          visibleSections.has("approach")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-[#363636] mb-6 tracking-tight">
              Our Approach to <br /> B2B Digital Growth
            </h2>
            <p className="text-lg text-[#536186] mb-6 leading-relaxed">
              B2B buying cycles are rarely instant. Decision-makers research,
              evaluate credibility, and analyse long-term value before engaging.
            </p>
            <p className="text-lg text-[#536186] leading-relaxed">
              Because of this, we build systems where websites answer buyer
              questions, search engines attract high-intent prospects, and
              targeted advertising generates qualified enquiries.
            </p>
          </div>
          <div className="bg-[#F8F9FA] p-8 md:p-12 rounded-[2rem] border border-[#D3D3D3]">
            <h3 className="text-xl font-bold mb-8 text-[#363636]">
              At Adswise, we build systems where:
            </h3>
            <ul className="space-y-4">
              {[
                "Websites answer buyer questions & establish trust",
                "Search engines attract high-intent prospects",
                "Targeted advertising generates qualified enquiries",
                "Content strengthens brand authority",
                "Analytics & performance data guide optimisation",
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-center text-[#536186]">
                  <CheckCircle2 className="text-[#536186] shrink-0" size={20} />
                  <span className="font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* --- LEADERSHIP / CEO --- */}
      <section className="py-20 bg-[#536186] text-white overflow-hidden relative">
        {/* Video Background */}
        <div className="absolute inset-0 pointer-events-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source
              src="https://v1.pinimg.com/videos/mc/720p/19/29/af/1929afadfcbc1d3ad6c819471afabe94.mp4"
              type="video/mp4"
              muted
              loop
            />
          </video>
          {/* Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-[#536186]/80" />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-2">
              <div className="relative inline-block">
                <div className="w-full aspect-[4/5] bg-[#B0C4DE]/20 rounded-3xl overflow-hidden border border-white/10">
                  <img
                    src="https://adswisemarketing.com/ceoo.jpeg"
                    alt="Gaurav Jagtap - Founder & CEO"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl hidden md:block">
                  <TrendingUp className="text-[#536186]" size={40} />
                </div>
              </div>
            </div>
            <div className="lg:col-span-3">
              <span className="text-[#B0C4DE] font-bold uppercase tracking-widest text-sm">
                Leadership
              </span>
              <h2 className="text-4xl md:text-5xl font-black mt-4 mb-2">
                Gaurav Jagtap
              </h2>
              <p className="text-[#B0C4DE] font-medium text-lg mb-8 italic">
                Founder & CEO — Adswise Marketing
              </p>

              <a
                href="https://www.linkedin.com/in/gauravjagtapadswise/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[#B0C4DE] hover:text-white font-medium text-lg mb-8 "
                title="Connect with Gaurav Jagtap on LinkedIn"
              >
                <Linkedin size={22} />
                <span className="font-bold text-xl">Connect On LinkedIn</span>
              </a>
              <div className="space-y-6 text-[#D3D3D3] text-lg leading-relaxed">
                <p>
                  Gaurav Jagtap is the strategic force behind Adswise’s
                  growth-focused philosophy. He founded the agency with a clear
                  belief: digital marketing must generate measurable business
                  outcomes, not just online attention.
                </p>
                <p>
                  He works closely with founders to understand their market
                  position and long-term ambitions, focusing on building
                  structured marketing systems that combine strategy, creative
                  execution, and performance analytics.
                </p>
                <blockquote className="border-l-4 border-[#B0C4DE] pl-6 py-2 text-white font-bold text-xl">
                  "Marketing should directly contribute to business growth and
                  be measurable in real results."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- TEAM --- */}
      <section className="bg-[#D3D3D3]/20">
        <Team />
      </section>

      {/* --- PHILOSOPHY --- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black mb-12">
            Our Philosophy: Marketing Should Function as a Growth System
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-6 text-lg text-[#536186]">
              <p>
                Many businesses struggle because their website, ads, content,
                and analytics operate in silos. Our philosophy is to connect
                these elements into a single framework.
              </p>
              <p>
                When these components work together, marketing becomes
                predictable.
              </p>
              <p>
                Instead of hoping campaigns work, businesses begin to experience
                a steady flow of qualified enquiries and measurable growth.
              </p>
            </div>
            <div className="bg-[#363636] text-white p-8 rounded-3xl">
              <div className="grid grid-cols-1 gap-4">
                {[
                  "Strategy defines direction",
                  "Websites establish credibility",
                  "Search visibility attracts buyers",
                  "Ads accelerate demand",
                  "Content builds trust",
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border-b border-white/10 pb-2"
                  >
                    <span className="text-[#B0C4DE] font-bold">0{i + 1}</span>
                    <span className="text-sm font-semibold uppercase tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- INDUSTRIES (GRID) --- */}
      <section className="py-20 px-6 bg-[#D3D3D3]/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              Industries We Work With
            </h2>
            <p className="text-[#536186] max-w-2xl mx-auto">
              Adswise Marketing works with companies across a range of B2B and
              high-value sectors, including:
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {industries.map((item, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-2xl text-center shadow-sm border border-transparent hover:border-[#536186] transition-all group flex flex-col items-center"
              >
                <item.icon
                  className="mb-4 text-[#536186] group-hover:scale-110 transition-transform"
                  size={32}
                />
                <h3 className="font-bold text-sm md:text-base text-[#363636]">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
          <p className="text-[#536186] mt-8">
            Each sector has unique buyer behaviour, decision cycles, and
            marketing challenges. Our strategies are designed to align with how
            real buyers research, evaluate vendors, and make decisions.
          </p>
        </div>
      </section>

      {/* --- FOUNDER NOTE --- */}
      <section className="py-12 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto bg-[#363636] rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 relative overflow-hidden">
          <div className="absolute -top-10 -right-10 opacity-5 pointer-events-none">
            <TrendingUp size={300} className="text-white" />
          </div>
          <div className="relative z-10">
            <span className="text-[#B0C4DE] font-bold uppercase tracking-widest text-xs md:text-sm">
              Founder's Note
            </span>
            <h2 className="text-2xl md:text-4xl font-bold text-white mt-4 mb-8 italic leading-relaxed">
              "The goal was never to build 'just another' digital marketing
              agency... our mission is to help businesses transform digital
              marketing from an expense into a scalable growth engine."
            </h2>
            <div className="flex items-center gap-4">
              <div className="w-10 md:w-16 h-[2px] bg-[#B0C4DE]" />
              <div>
                <p className="text-white font-bold text-lg">Gaurav Jagtap</p>
                <p className="text-[#B0C4DE] text-[10px] md:text-xs uppercase tracking-[0.2em]">
                  Founder & CEO, Adswise Marketing
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PUNE CONTEXT --- */}
      <section className="py-20 px-6 bg-[#F8F9FA]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-black mb-6">
              Our Presence in Pune’s Business Ecosystem
            </h2>
            <p className="text-lg text-[#536186] mb-6">
              Adswise Marketing operates from Pune and works closely with
              businesses across Maharashtra. As a B2B digital marketing agency
              in Pune, we understand the local market environment, regional
              search patterns, and competitive pressures faced by growing
              companies.
            </p>
            <p className="text-lg text-[#536186]">
              Pune has rapidly evolved into one of India’s most active business
              hubs, with strong growth in manufacturing, technology services,
              real estate, education, and emerging startups. Our experience
              working with companies in these sectors allows us to design
              marketing strategies that align with local buyer behaviour,
              regional search trends, and industry-specific decision cycles.
            </p>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <MapPin size={120} className="text-[#536186]/20 animate-pulse" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Building2 size={48} className="text-[#536186]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- FRAMEWORK --- */}
      <section
        ref={(el) => (sectionRefs.current["framework"] = el)}
        className={`py-16 md:py-28 px-6 bg-[#536186] transition-all duration-1000 ${
          visibleSections.has("framework")
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              The Strategic Growth Framework
            </h2>
            <p className="text-[#B0C4DE]">
              How we turn digital presence into a scalable growth engine.
            </p>
          </div>
          <div className="space-y-4">
            {framework.map((step, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-6 items-start md:items-center bg-white/5 p-6 md:p-8 rounded-2xl border border-white/10 hover:bg-white/10 transition-all group"
              >
                <span className="text-4xl md:text-6xl font-black text-[#B0C4DE]/30 group-hover:text-[#B0C4DE] transition-colors leading-none">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#D3D3D3] leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-white">
        <Team />
      </section> */}

      {/* --- DIFFERENTIATORS --- */}
      <section className="py-20 px-6 bg-[#536186]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">
              What Makes Adswise Different
            </h2>
            <p className="text-[#B0C4DE] uppercase tracking-widest text-sm font-bold">
              Systems, Not Services
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {differentiators.map((item, index) => (
              <div
                key={index}
                className="bg-[#D3D3D3] p-8 rounded-3xl border border-white/5 hover:border-[#B0C4DE]/40 transition-all"
              >
                <item.icon className="text-[#536186] mb-6" size={32} />
                <h3 className="text-lg md:text-xl font-bold text-[#536186] mb-3">
                  {item.title}
                </h3>
                <p className="text-[#536186] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="py-20 md:py-32 px-6 text-center bg-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-4xl sm:text-5xl md:text-5xl font-black text-[#363636] mb-8 tracking-tighter">
            Ready to Build a Predictable Digital{" "}
            <span className="text-[#536186]">Growth Engine?</span>
          </h2>
          <p className="text-lg md:text-2xl text-[#536186] mb-12 max-w-2xl mx-auto font-medium">
            If you are looking for a B2B digital marketing agency in Pune that
            focuses on strategy, measurable results, and long-term growth,{" "}
            <br />
            <span className="font-bold">
              {" "}
              Adswise Marketing is ready to help.
            </span>
            <br />
            We will review your current digital presence, understand your
            business objectives, and design a practical roadmap to scale your
            brand.
          </p>
          <div className="flex flex-col items-center gap-6">
            <Link
              to="/contact"
              className="w-full sm:w-auto bg-[#363636] hover:bg-[#536186] text-white px-10 py-5 rounded-full font-black text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              BOOK STRATEGY CONSULTATION
            </Link>
            <Link
              to="/contact"
              className="text-[#536186] font-bold border-b-2 border-[#536186] hover:text-[#363636] transition-colors"
            >
              GET A FREE DIGITAL GROWTH AUDIT
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s forwards; opacity: 0; }
        .animate-fade-in-delay-2 { animation: fade-in 0.8s ease-out 0.4s forwards; opacity: 0; }
      `}</style>
    </div>
  );
}
