import Hero from "@/components/hero/Hero";
import IntroSection from "@/components/sections/IntroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import WorkSection from "@/components/sections/WorkSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import ResultsSection from "@/components/sections/ResultsSection";
import WhyAdswiseSection from "@/components/sections/WhyAdswiseSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";

export default function Home() {
  return (
    <>
      <Hero />
      <IntroSection />
      <ServicesSection />
      <ProcessSection />
      <WorkSection />
      <IndustriesSection />
      <ResultsSection />
      <WhyAdswiseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}
