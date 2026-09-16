import type { Metadata } from "next";
import CaseStudyPageTemplate from "@/components/templates/CaseStudyPageTemplate";
import { caseStudies } from "@/data/case-studies";

const study = caseStudies.find((s) => s.slug === "interior-design-marketing")!;

export const metadata: Metadata = {
  title: study.headline,
  description: study.summary,
  alternates: { canonical: study.route },
};

export default function InteriorDesignCaseStudyPage() {
  return <CaseStudyPageTemplate study={study} />;
}
