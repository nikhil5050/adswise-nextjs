import React, { useState } from "react";
import { Linkedin } from "lucide-react";

const Team = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Shalmali Shinde",
      role: "CONSULTING HEAD",
      skills: ["Strategy", "Business Consulting", "Growth Planning"],
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Shalmali%20Shinde",
      image:
        "https://i.pinimg.com/736x/32/4f/a4/324fa4d50eab63a93f12dc9fee6720cc.jpg?w=400&h=400&fit=crop",
    },
    {
      name: "Rohit Kanse",
      role: "Media Department Head",
      skills: ["Media Buying", "Campaign Strategy", "Performance Ads"],
      linkedin: "https://www.linkedin.com/in/rohit-kanse-82a3b8179/",
      image:
        "https://adswisemarketing.com//public/team/rohitkanase.jpeg?w=400&h=400&fit=crop",
    },
    {
      name: "Nikhil M",
      role: "Web Developer Head ",
      skills: ["Web Development", "Frontend Development"],
      linkedin: "https://www.linkedin.com/in/nikhil-mandlik-574973322/",
      image:
        "https://adswisemarketing.com/public/team/nikhil.jpeg?w=400&h=400&fit=crop",
    },
    {
      name: "Sujal Gupta",
      role: "Graphic Designer",
      skills: ["Graphic Design", "Branding", "photoshop"],
      linkedin: "https://www.linkedin.com/in/sujal-gupta-852b0a27b/",
      // Added https://i.pinimg.com prefix to fix the broken link you had
      image: "https://adswisemarketing.com//public/team/sujal%20gupta.jpeg",
    },
    // {
    //   name: "Pooja Shete",
    //   role: "Graphic Designer",
    //   // Added https://i.pinimg.com prefix to fix the broken link you had
    //   image: "https://adswisemarketing.com/public/team/pooja.jpeg",
    // },
    {
      name: "Pradnya Apune",
      role: "Digital Marketer",
      skills: ["Digital Marketing Executive", "| Passionate About SEO, SMM, SEM & Content Strategya"],
      linkedin: "https://www.linkedin.com/in/pradnya-aapune-2194b4344/",
      // Added https://i.pinimg.com prefix to fix the broken link you had
      image: "https://adswisemarketing.com/public/team/pradnya.jpeg",
    },
    {
      name: "Jayashri Naphade",
      role: "Digital Marketer",
      skills: ["Google Ads", "Marketing Automation", "E-commerce Management"],
      linkedin: "https://www.linkedin.com/in/jayashri-patil93",
      // Added https://i.pinimg.com prefix to fix the broken link you had
      image:
        "https://adswisemarketing.com/public/team/jayashri.jpeg",
    },
    {
      name: "Karishma Sharma ",
      role: "Jr. Digital Marketer",
      skills: ["Content Creation", "Social Media", "Campaign Support"],
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Karishma%20Sharma",
      image:
        "https://adswisemarketing.com/public/team/karishma.png",
    },
    {
      name: "Pooja Pushkar",
      role: "Jr. Digital Marketer",
      skills: ["Digital Marketing", "Content Planning", "Research"],
      linkedin: "https://www.linkedin.com/search/results/people/?keywords=Pooja%20Pushkar",
      image:
        "https://adswisemarketing.com/public/team/PoojaPushkar.jpeg",

    },
    {
      name: "Ganesh More",
      role: "Senior Business Development Manager",
      skills: ["Performance marketer", "Content writer"],
      linkedin: "https://www.linkedin.com/in/ganesh-more-992215300/",
      image:
        "https://adswisemarketing.com/public/team/GaneshAdswise.jpeg",
    },
    {
      name: "Priyanka Mali",
      role: "Content Creator",
      skills: ["Social Media Marketing", "Content Strategy & Content Planning", "Sales Strategy"],
      linkedin: "https://www.linkedin.com/in/priyanka-mali-716995247/",
      image:
        "https://adswisemarketing.com/public/team/pradnyaAdswise.PNG",
    },
    {
      name: "Komal kumari ",
      role: "Content Writer",
      skills: ["Content Creation", "Social Media Management", "SEO"],
      linkedin: "linkedin.com/in/komal-kumari-b7a655276",
      image:
        "https://adswisemarketing.com/public/team/komalAdswise.jpeg",
    }
  ];

  return (
    <div className="min-h-screen bg-[#D3D3D3] text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div
          className="text-center mb-12 animate-fadeIn"
          style={{ animationDelay: "0s" }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-12 text-center">
            Meet The Minds Behind Adswise
          </h1>
          <p className="text-gray-500 text-sm md:text-lg">
            Every great campaign has a team that is devoted to strategy,
            innovation, and results. At Adswise Marketing, our strategists
            collaborate to create meaningful digital journeys, sustainable
            strategies, and scalable growth for all of our clients.
          </p>
        </div>

        {/* TEAM GRID SECTION - UPDATED FOR RESPONSIVENESS */}
        {/* Changes made:
            1. Changed flex to grid.
            2. grid-cols-1: Shows 1 card per row on Mobile.
            3. sm:grid-cols-2: Shows 2 cards per row on Tablets.
            4. lg:grid-cols-4: Shows 4 cards per row on Desktop.
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group relative cursor-pointer w-full max-w-[280px]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `slideUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] overflow-hidden  border border-gray-800">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                  style={{
                    filter:
                      hoveredIndex === index
                        ? "grayscale(0%)"
                        : "grayscale(100%)",
                  }}
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />

                {/* Text Content */}
                <div className="absolute bottom-0 left-0 right-0 min-w-0 p-4 sm:p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white break-words">
                    {member.name}
                  </h3>
                  <p className="text-xs text-yellow-500 font-semibold uppercase tracking-wider mt-1">
                    {member.role}
                  </p>
                  <div className="flex flex-wrap gap-1.5 mt-3">
                    {member.skills.map((skill) => (
                      <span
                        key={skill}
                        className="max-w-full rounded-sm bg-black/55 px-2 py-1 text-[10px] leading-tight text-gray-100"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center gap-2 text-xs text-[#B0C4DE] hover:text-white mt-3 transition-colors"
                    aria-label={`View ${member.name.trim()}'s LinkedIn profile`}
                  >
                    <Linkedin size={14} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-gray-500 text-sm md:text-lg mt-12 text-xl">
          Together, we unite strategy, imagination, and innovation to generate
          digital success with bottom-line results.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default Team;
