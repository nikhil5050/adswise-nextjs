import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const [isIndustryHovered, setIsIndustryHovered] = useState(false);
  const [isMobileIndustryOpen, setIsMobileIndustryOpen] = useState(false);

  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMobileServicesOpen(false);
    setIsMobileIndustryOpen(false);
    setIsServicesHovered(false);
    setIsIndustryHovered(false);
  }, [location]);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about-us", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/industry", label: "Industry" },
    { to: "/career", label: "Careers" },
    { to: "/contact", label: "Contact" },
    { to: "/case-studies", label: "Case Studies" },
    { to: "/blog", label: "Blog" },
  ];

  const serviceDropdownLinks = [
    { to: "/services/strategy-consulting", label: "Strategy Consulting" },
    { to: "/services/performance-marketing", label: "Performance Marketing" },
    { to: "/services/social-media-marketing", label: "Social Media Marketing" },
    { to: "/services/website-development", label: "Website Development" },
    { to: "/services/video-production", label: "Video Production" },
    { to: "/services/ecommerce-development", label: "E-Commerce" },
    { to: "/services/graphics-designing", label: "Graphics Designing" },
    { to: "/services/search-engine-optimization", label: "SEO" },
    { to: "/services/mobile-app-development", label: "Mobile App Development" },
    {
      to: "/services/Platform-Listing-Optimization",
      label: "Platform Listing Optimization",
    },
    { to: "/services/media-buying-planning", label: "Media Buying & Planning" },
    {
      to: "/services/email-whatsapp-marketing",
      label: "Email & Whatsapp Marketing",
    },
    { to: "/services/brand-development", label: "Brand Development" },
  ];

  const industryDropdownLinks = [
    { to: "/industries/real-estate", label: "Real Estate" },
    { to: "/industries/manufacturing", label: "Manufacturing" },
    { to: "/industries/interior-design", label: "Interior Design" },
    { to: "/industries/healthcare", label: "Healthcare Industry" },
    { to: "/industries/education", label: "Education" },
  ];

  return (
    // Changed bg to Stone Gray #536186
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md bg-[#536186]" : "bg-[#536186]"}`}
    >
      <div className="w-full text-white relative">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 flex-shrink-0">
              <img
                src="https://adswisemarketing.com/logo.png"
                alt="Adswise"
                className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
              />
              <span className="text-xl sm:text-2xl font-extrabold text-[#F4F4F4]">
                Adswise Marketing
              </span>
            </Link>

            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {navLinks.map((link) => {
                if (link.label === "Services" || link.label === "Industry") {
                  const isHovered =
                    link.label === "Services"
                      ? isServicesHovered
                      : isIndustryHovered;
                  const setter =
                    link.label === "Services"
                      ? setIsServicesHovered
                      : setIsIndustryHovered;
                  const dropdownItems =
                    link.label === "Services"
                      ? serviceDropdownLinks
                      : industryDropdownLinks;

                  return (
                    <div
                      key={link.to}
                      className="relative h-20 flex items-center group"
                      onMouseEnter={() => setter(true)}
                      onMouseLeave={() => setter(false)}
                    >
                      {/* Hover text color changed to Ash Gray #B0C4DE */}
                      <Link
                        to={link.to}
                        className="flex items-center gap-1 font-medium text-[#F4F4F4] hover:text-[#B0C4DE] transition-colors"
                      >
                        {link.label}
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${isHovered ? "rotate-180" : ""}`}
                        />
                      </Link>

                      <AnimatePresence>
                        {isHovered && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-[80%] -left-4 w-72 pt-2"
                          >
                            {/* Dropdown background Silver #C0C0C0 with Charcoal #363636 border */}
                            <div className="bg-[#F4F4F4] rounded-lg shadow-xl overflow-y-auto max-h-[400px] py-2 border-t-4 border-[#363636]">
                              {dropdownItems.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className="block px-4 py-2.5 text-sm text-[#363636] hover:bg-[#D3D3D3] hover:text-[#536186] transition-colors"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.to}
                    to={link.to}
                    className="font-medium text-[#F4F4F4] hover:text-[#B0C4DE] transition-colors"
                  >
                    {link.label}
                  </Link>
                );
              })}

              {/* Button updated to Charcoal #363636 with Ash Gray shadow */}
              <Link
                to="/contact"
                className="ml-2 px-6 py-2.5 bg-[#363636] text-[#F4F4F4] rounded-full font-bold text-sm hover:bg-[#536186] transition-colors shadow-lg shadow-[#B0C4DE]/20"
              >
                Free Business Report
              </Link>
            </div>

            <div className="flex items-center lg:hidden">
              <button
                aria-label="Toggle mobile menu"
                onClick={() => setIsMobileMenuOpen((s) => !s)}
                className="p-2 rounded-md text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#B0C4DE]"
              >
                {isMobileMenuOpen ? (
                  <X className="w-7 h-7" />
                ) : (
                  <Menu className="w-7 h-7" />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Menu - Fog Gray #D3D3D3 Background */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden absolute top-full left-0 w-full bg-[#D3D3D3] text-[#363636] shadow-2xl border-t border-slate-200 overflow-hidden"
            >
              <div className="flex flex-col px-4 pt-4 pb-8 max-h-[calc(100vh-80px)] overflow-y-auto">
                {navLinks.map((link) => {
                  if (link.label === "Services" || link.label === "Industry") {
                    const isOpen =
                      link.label === "Services"
                        ? isMobileServicesOpen
                        : isMobileIndustryOpen;
                    const setter =
                      link.label === "Services"
                        ? setIsMobileServicesOpen
                        : setIsMobileIndustryOpen;
                    const dropdownItems =
                      link.label === "Services"
                        ? serviceDropdownLinks
                        : industryDropdownLinks;

                    return (
                      <div
                        key={link.to}
                        className="border-b border-slate-200 last:border-0"
                      >
                        <button
                          onClick={() => setter(!isOpen)}
                          className="flex items-center justify-between w-full px-2 py-4 text-[#363636] font-semibold text-lg"
                        >
                          {link.label}
                          <ChevronDown
                            className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-[#536186]" : "text-slate-400"}`}
                          />
                        </button>

                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-[#F4F4F4] rounded-lg mb-2"
                            >
                              {dropdownItems.map((item) => (
                                <Link
                                  key={item.to}
                                  to={item.to}
                                  className="block px-6 py-3 text-sm text-[#363636] hover:text-[#536186] hover:bg-[#B0C4DE]/20 border-l-4 border-transparent hover:border-[#536186] transition-all"
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="block px-2 py-4 text-[#363636] font-semibold text-lg border-b border-slate-200 last:border-0 hover:text-[#536186] transition-colors"
                    >
                      {link.label}
                    </Link>
                  );
                })}

                <div className="mt-8 space-y-4">
                  <Link
                    to="/contact"
                    className="block w-full text-center px-6 py-4 bg-[#536186] text-white rounded-xl font-bold text-lg shadow-md active:scale-95 transition-transform"
                  >
                    Free Business Report
                  </Link>

                  <div className="text-center text-sm text-slate-500">
                    <p>Call us directly:</p>
                    <a
                      href="tel:+919730266648"
                      className="text-[#363636] font-bold text-lg block mt-1"
                    >
                      +91 9730266648
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
