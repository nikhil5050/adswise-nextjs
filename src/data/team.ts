export interface TeamMember {
  name: string;
  role: string;
  skills: string[];
  linkedin: string;
  image: string;
}

export const team: TeamMember[] = [
  {
    name: "Shalmali Shinde",
    role: "Consulting Head",
    skills: ["Strategy", "Business Consulting", "Growth Planning"],
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Shalmali%20Shinde",
    image: "https://i.pinimg.com/736x/e6/ab/2a/e6ab2ad55725e1740fe4bd266fa90e9b.jpg" // no photo yet: card shows initials,
  },
  // {
  //   name: "Rohit Kanse",
  //   role: "Media Department Head",
  //   skills: ["Media Buying", "Campaign Strategy", "Performance Ads"],
  //   linkedin: "https://www.linkedin.com/in/rohit-kanse-82a3b8179/",
  //   image: "/team/rohitkanase.jpeg",
  // },
  // {
  //   name: "Nikhil M",
  //   role: "Web Developer Head",
  //   skills: ["Web Development", "Frontend Development"],
  //   linkedin: "https://www.linkedin.com/in/nikhil-mandlik-574973322/",
  //   image: "/team/nikhil.jpeg",
  // },
  {
    name: "Sujal Gupta",
    role: "Graphic Designer",
    skills: ["Graphic Design", "Branding", "Photoshop"],
    linkedin: "https://www.linkedin.com/in/sujal-gupta-852b0a27b/",
    image: "/team/sujal gupta.jpeg",
  },
  {
    name: "Pradnya Apune",
    role: "Digital Marketer",
    skills: ["SEO", "SMM", "SEM", "Content Strategy"],
    linkedin: "https://www.linkedin.com/in/pradnya-aapune-2194b4344/",
    image: "/team/pradnya.jpeg",
  },
  {
    name: "Jayashri Naphade",
    role: "Digital Marketer",
    skills: ["Google Ads", "Marketing Automation", "E-commerce Management"],
    linkedin: "https://www.linkedin.com/in/jayashri-patil93",
    image: "/team/jayashri.jpeg",
  },
  {
    name: "Karishma Sharma",
    role: "Jr. Digital Marketer",
    skills: ["Content Creation", "Social Media", "Campaign Support"],
    linkedin: "https://www.linkedin.com/search/results/people/?keywords=Karishma%20Sharma",
    image: "/team/karishma.png",
  },
  // {
  //   name: "Pooja Pushkar",
  //   role: "Jr. Digital Marketer",
  //   skills: ["Digital Marketing", "Content Planning", "Research"],
  //   linkedin: "https://www.linkedin.com/search/results/people/?keywords=Pooja%20Pushkar",
  //   image: "/team/PoojaPushkar.jpeg",
  // },
  {
    name: "Ganesh More",
    role: "Senior Business Development Manager",
    skills: ["Performance Marketing", "Content Writing","Business Development Executive"],
    linkedin: "https://www.linkedin.com/in/ganesh-more-992215300/",
    image: "/team/GaneshAdswise.jpeg",
  },
  {
    name: "Priyanka Mali",
    role: "Content Creator",
    skills: ["Social Media Marketing", "Content Strategy & Planning", "Sales Strategy"],
    linkedin: "https://www.linkedin.com/in/priyanka-mali-716995247/",
    image: "/team/pradnyaAdswise.PNG",
  },
  {
    name: "Komal Kumari",
    role: "Content Writer",
    skills: ["Content Creation", "Social Media Management", "SEO"],
    linkedin: "https://www.linkedin.com/in/komal-kumari-b7a655276",
    image: "/team/komalAdswise.jpeg",
  },
];

// Leadership trio for the "Meet our team" fan-out on the about page.
// `focus` frames the face inside the circle: background size (% of circle width) and position.
export interface Leader {
  name: string;
  role: string;
  points: string[];
  image: string;
  focus: { size: string; position: string };
}

export const leadership: { left: Leader; center: Leader; right: Leader } = {
  left: {
    name: "Rohit Kanse",
    role: "Media Department Head",
    points: ["Media Buying", "Campaign Strategy", "Performance Ads"],
    image: "/team/rohit1.png",
    focus: { size: "140%", position: "82% 3%" },
  },
  center: {
    name: "Gaurav Jagtap",
    role: "Founder & CEO",
    points: ["Growth Strategy", "Marketing Systems", "Performance Analytics"],
    image: "/team/ceoo1.jpeg",
    focus: { size: "180%", position: "40% 33%" },
  },
  right: {
    name: "Nikhil Mandlik",
    role: "Web Developer Head",
    points: ["Technical Head", "Web Development", "Frontend Development"],
    image: "/team/nikhilmandlik.jpeg",
    focus: { size: "200%", position: "67% 6%" },
  },
};
