import React from "react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "DTK footwear",
      description: "Modern shopping platform",
      image:
        "https://adswisemarketing.com//public/dtk.png?w=400&h=300&fit=crop",
      link: "https://www.dtkfootwear.com/",
    },
    {
      id: 2,
      title: "vishwaswami interiors",
      description: "Elegant home designs",
      image:
        "https://adswisemarketing.com/public/interior.png?w=400&h=300&fit=crop",
      link: "https://vishwaswamiinteriors.com/",
    },
    {
      id: 3,
      title: "suncreast financials",
      description: "Trusted financial services",
      image:
        "https://adswisemarketing.com/public/suncreast.png?w=400&h=300&fit=crop",
      link: "https://www.suncreastfinancials.com/",
    },
    {
      id: 4,
      title: "believe properties",
      description: "Real estate solutions",
      image:
        "https://adswisemarketing.com//public/belive.png?w=400&h=300&fit=crop",
      link: "https://www.believe-properties.com/",
    },
    {
      id: 5,
      title: "space them upp",
      description: "Interior Design Services",
      image:
        "https://adswisemarketing.com//public/spacethemupp.png?w=400&h=300&fit=crop",
      link: "https://spacethemupp.com/",
    },
    {
      id: 6,
      title: "Cherish Derma Clinic",
      description: "Advanced skincare solutions",
      image:
        "https://adswisemarketing.com//public/cherish.png?w=400&h=300&fit=crop",
      link: "https://cherishdermaclinic.com/",
    },
  ];

  return (
    /* Background updated to Fog Gray #D3D3D3 */
    <div className="min-h-screen bg-[#D3D3D3] py-20 px-4">
      <div
        className="text-center mb-12 animate-fadeIn"
        style={{ animationDelay: "0s" }}
      >
        {/* Title updated to Charcoal Gray #363636 with Stone Gray #536186 accent */}
        <h2 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-[#363636] mb-4 tracking-tight">
          Our <span className="text-[#536186]">Projects</span>
        </h2>
        <p className="text-[#536186] text-sm md:text-lg font-medium opacity-80 uppercase tracking-widest">
          A showcase of our diverse and impactful work.
        </p>
      </div>

      {/* Grid of cards */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} in new tab`}
            className="group block transform transition-all will-change-transform card-animation"
            style={{
              animationDelay: `${index * 150}ms`,
            }}
          >
            {/* Card Background: Silver #C0C0C0 / Border: Stone Gray #536186 */}
            <article className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-[#C0C0C0] group-hover:border-[#536186] transition-colors duration-500">
              <div className="relative h-64 overflow-hidden bg-[#F4F4F4]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle Fog Gray overlay on image hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#363636]/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#363636] mb-4 group-hover:text-[#536186] transition-colors">
                  {project.title}
                </h3>

                <div className="flex items-center text-[#536186] font-bold group-hover:translate-x-1 transition-transform">
                  <span className="text-sm uppercase tracking-tighter">
                    View Live Site
                  </span>
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </article>
          </a>
        ))}
      </div>

      <style jsx>{`
        .card-animation {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeSlideUp 0.8s ease forwards;
        }

        @keyframes fadeSlideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Custom Hover Shadow using Stone Gray #536186 */
        .group:hover article {
          box-shadow: 0 20px 40px -15px rgba(83, 97, 134, 0.3);
          transform: translateY(-8px);
        }
      `}</style>
    </div>
  );
};

export default Project;
