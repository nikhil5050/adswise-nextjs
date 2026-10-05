import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryTypeTemplate from "@/components/templates/IndustryTypeTemplate";
import { getIndustryType, industryCategories, inSentence } from "@/data/industry-categories";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return industryCategories.flatMap((c) => c.types.map((t) => ({ category: c.slug, type: t.slug })));
}

type Params = { params: Promise<{ category: string; type: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category, type } = await params;
  const match = getIndustryType(category, type);
  if (!match) return {};

  // A few business types appear in two categories; name the category so titles stay unique.
  const shared = industryCategories.some((c) => c.slug !== category && c.types.some((t) => t.slug === type));
  const title = shared
    ? `Digital Marketing for ${match.type.name} — ${match.category.name}`
    : `Digital Marketing for ${match.type.name}`;
  const description = `Digital marketing for ${inSentence(match.type.name)} in Pune and across India: advertising, social media, SEO, websites and lead generation by Adswise.`;
  const path = `/industry/${match.category.slug}/${match.type.slug}`;
  return pageMetadata({ title, description, path });
}

export default async function IndustryTypePage({ params }: Params) {
  const { category, type } = await params;
  const match = getIndustryType(category, type);
  if (!match) notFound();

  return <IndustryTypeTemplate category={match.category} type={match.type} />;
}
