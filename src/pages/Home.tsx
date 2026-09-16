import Hero from "../components/Hero";
import MicroCredibility from "../homepages/Micro-credibility";
import Features from "../components/Features";
// import CaseStudies from "../components/CaseStudies";
import Services from "../homepages/ServicesHome";
import ClientsSection from "../homepages/ClientsSection";
// import StatsSection from "../homepages/StatsSection";
import Reviews from "../homepages/Reviews";
import Project from "../homepages/Project";
import Portfolio from "../homepages/portfolio";
// import OurGraphics from "../homepages/OurGraphics";

function Home() {
  return (
    <>
      <Hero />
      <MicroCredibility />
      <Features />
      <Portfolio />
      {/* <StatsSection /> */}
      <Services />
      <ClientsSection />
      <Project />
      {/* <OurGraphics /> */}
      <Reviews />
      {/* <CaseStudies /> */}
    </>
  );
}

export default Home;
