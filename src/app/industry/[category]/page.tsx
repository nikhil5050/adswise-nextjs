import type { Metadata } from "next";
import { notFound } from "next/navigation";
import IndustryCategoryTemplate from "@/components/templates/IndustryCategoryTemplate";
import { getIndustryCategory, industryCategories, inSentence } from "@/data/industry-categories";
import { pageMetadata } from "@/lib/seo/metadata";

export function generateStaticParams() {
  return industryCategories.map((c) => ({ category: c.slug }));
}

type Params = { params: Promise<{ category: string }> };

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { category: slug } = await params;
  const category = getIndustryCategory(slug);
  if (!category) return {};

  const examples = category.types
    .slice(0, 4)
    .map((t) => inSentence(t.name))
    .join(", ");
  const description = `Digital marketing for ${examples} and more. Advertising, branding, websites and lead generation by Adswise.`;
  return pageMetadata({ title: `Digital Marketing for ${category.name}`, description, path: `/industry/${category.slug}` });
}

export default async function IndustryCategoryPage({ params }: Params) {
  const { category: slug } = await params;
  const category = getIndustryCategory(slug);
  if (!category) notFound();

  return <IndustryCategoryTemplate category={category} />;
}
