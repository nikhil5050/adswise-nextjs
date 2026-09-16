// ClientsSection.tsx
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

type Logo = {
  id: string;
  src: string;
  alt?: string;
};

const logos: Logo[] = [
  {
    id: "logo1",
    src: "https://suncreastfinancials.com//public/FINAL%20LOGO.png",
    alt: "Client 1",
  },
  {
    id: "logo2",
    src: "https://www.dtkfootwear.com//logo.png",
    alt: "Client 2",
  },
  {
    id: "logo3",
    src: "https://believe-properties.com//public/logo.png",
    alt: "Client 3",
  },
  {
    id: "logo4",
    src: "https://vishwaswamiinteriors.com//logo.png",
    alt: "Client 4",
  },
  {
    id: "logo5",
    src: "https://adswisemarketing.com//client2jpg",
    alt: "Client 5",
  },
  {
    id: "logo6",
    src: " https://adswisemarketing.com//logo8.jpg",
    alt: "Client 6",
  },
  {
    id: "logo7",
    src: "https://adswisemarketing.com/logo%20(3).png",
    alt: "Client 7",
  },
  {
    id: "logo8",
    src: "https://adswisemarketing.com//client.jpg",
    alt: "Client 8",
  },
  {
    id: "logo9",
    src: "https://adswisemarketing.com//nivastu.jpeg",
    alt: "Client 9",
  },
  {
    id: "logo10",
    src: "https://adswisemarketing.com/theformales.jpeg",
    alt: "Client 10",
  },
  {
    id: "logo11",
    src: "https://adswisemarketing.com//PROFIT%20TETRA%20Final.jpg",
    alt: "Client 11",
  },
  {
    id: "logo12",
    src: "https://adswisemarketing.com//oraa%20logo.jpeg",
    alt: "oraa stay logo",
  },
  {
    id: "logo13",
    src: "https://adswisemarketing.com//logoset.png",
    alt: "set logo",
  },
  {
    id: "logo14",
    src: "https://cherishdermaclinic.com/logo.png",
    alt: "cherish derma clinic logo",
  },
];

export default function ClientsSection(): JSX.Element {
  const marqueeRef = useRef<HTMLDivElement | null>(null);
  const [visibleSet, setVisibleSet] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const id = target.dataset.logoId;
          if (entry.isIntersecting && id) {
            setVisibleSet((prev) => {
              if (prev.has(id)) return prev;
              const next = new Set(prev);
              next.add(id);
              return next;
            });
          }
        });
      },
      { root: null, threshold: 0.15 },
    );

    const node = marqueeRef.current;
    if (node) {
      const items = node.querySelectorAll<HTMLElement>(".client-logo-card");
      items.forEach((el) => observer.observe(el));
    }
    return () => observer.disconnect();
  }, []);

  const marqueeLogos = [...logos, ...logos];

  return (
    /* Background: Charcoal Gray #363636 */
    <section className="w-full bg-[#D3D3D3] py-16 px-6 md:px-12 relative overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        {/* LEFT: Scrolling logos */}
        <div className="md:col-span-5 lg:col-span-6 order-2 md:order-1">
          <div className="relative overflow-hidden rounded-3xl bg-[#2b2b2b] p-4 shadow-2xl border border-white/5">
            <div
              ref={marqueeRef}
              className="marquee-columns relative flex gap-4"
              style={{ height: 500 }}
            >
              {[0, 1, 2].map((colIndex) => (
                <div
                  key={colIndex}
                  className="marquee-wrapper flex-1 overflow-hidden"
                >
                  <div
                    className="marquee-track"
                    style={{ animationDuration: `${22 + colIndex * 5}s` }}
                  >
                    {marqueeLogos.map((logo, i) => (
                      <div
                        key={`${logo.id}-${i}-col${colIndex}`}
                        data-logo-id={logo.id}
                        /* Card: Fog Gray #D3D3D3 and Silver #C0C0C0 gradient */
                        className={`client-logo-card my-3 bg-gradient-to-br from-[#D3D3D3] to-[#C0C0C0] rounded-xl shadow-lg flex items-center justify-center p-5 w-full aspect-square
                          transform transition-all duration-700 hover:scale-105
                          ${visibleSet.has(logo.id) ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                        `}
                      >
                        <img
                          src={logo.src}
                          alt={logo.alt ?? "client logo"}
                          className="max-w-[85%] max-h-[85%] object-contain filter grayscale brightness-90 hover:grayscale-0 transition-all duration-300"
                          onError={(e) => {
                            const el = e.currentTarget as HTMLImageElement;
                            el.src = `data:image/svg+xml;utf8,${encodeURIComponent(
                              `<svg xmlns='http://www.w3.org/2000/svg' width='100' height='100'><rect width='100%' height='100%' fill='#D3D3D3'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#536186' font-family='sans-serif' font-size='12'>Logo</text></svg>`,
                            )}`;
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Subtle Overlays: Charcoal to Transparent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#2b2b2b] to-transparent" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2b2b2b] to-transparent" />
          </div>
        </div>

        {/* RIGHT: Content */}
        <div className="md:col-span-7 lg:col-span-6 order-1 md:order-2">
          <div className="sticky top-24 space-y-6">
            <div className="animate-fadeIn">
              {/* Heading: Ash Gray #B0C4DE with Stone Gray #536186 accent */}
              <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#363636] mb-4 tracking-tight">
                B2B Industries <span className="text-[#536186]">We Serve</span>
              </h2>
              <p className="text-[#363636] text-lg font-medium opacity-80">
                Powering growth for businesses across industries.
              </p>
            </div>

            <div className="space-y-4 text-[#363636] opacity-90 leading-relaxed text-base md:text-lg">
              <p>
                At Adswise Marketing, we believe every brand has a distinct
                growth path, and our mission is to architect that growth with
                precision-driven strategies. We blend deep market intelligence
                and sharp creative thinking.
              </p>

              <p>
                Our approach integrates{" "}
                <span className="text-[#536186] font-semibold">
                  SEO, design, and analytics
                </span>{" "}
                into a single, structured growth system. This ensures your brand
                doesn’t just attract attention, but earns trust.
              </p>

              <div className="pt-4">
                <Link
                  to="/contact"
                  className="bg-[#536186] hover:bg-[#B0C4DE] hover:text-[#363636] text-white px-8 py-3 rounded-full font-bold transition-all duration-300 shadow-lg uppercase tracking-widest text-sm"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Rotating Element: Stone Gray #536186 */}
      {/* <div className="hidden lg:block absolute -bottom-10 -right-10 w-64 h-64 opacity-10">
        <img
          src="https://adswisemarketing.com/circle-shape1.webp"
          alt="decoration"
          className="w-full h-full animate-spin-slow filter invert"
          style={{ animationDuration: "20s" }}
        />
      </div> */}

      <style jsx>{`
        .marquee-columns {
          display: flex;
          gap: 1rem;
        }
        .marquee-track {
          display: flex;
          flex-direction: column;
          animation: marqueeScroll linear infinite;
        }
        .marquee-wrapper:hover .marquee-track {
          animation-play-state: paused;
        }
        @keyframes marqueeScroll {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }
        .animate-spin-slow {
          animation: spin linear infinite;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  );
}
