import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryPageTemplate from "@/components/templates/IndustryPageTemplate";
import { industries } from "@/data/industries";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return industries.map((industry) => ({ slug: industry.slug }));
}

type Params = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) return {};

  return pageMetadata({
    title: `${industry.title} Digital Marketing Agency in Pune`,
    description: industry.shortDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryDetailPage({ params }: Params) {
  const { slug } = await params;
  const industry = industries.find((i) => i.slug === slug);
  if (!industry) notFound();

  return <IndustryPageTemplate industry={industry} />;
}
