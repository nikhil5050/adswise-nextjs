import CaseStudyPageTemplate from "@/components/templates/CaseStudyPageTemplate";
import { caseStudies } from "@/data/case-studies";
import { pageMetadata } from "@/lib/seo/metadata";

const study = caseStudies.find((s) => s.slug === "real-estate-growth")!;

export const metadata = pageMetadata({
  title: study.headline,
  description: study.summary.length > 160 ? `${study.summary.slice(0, 157).trimEnd()}…` : study.summary,
  path: study.route,
  type: "article",
});

export default function RealEstateCaseStudyPage() {
  return <CaseStudyPageTemplate study={study} />;
}
