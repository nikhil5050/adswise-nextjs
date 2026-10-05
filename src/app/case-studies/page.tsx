import Link from "next/link";
import ImageReveal from "@/components/animations/ImageReveal";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import { caseStudies } from "@/data/case-studies";
import JsonLd from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo/metadata";
import { breadcrumbLd, itemListLd, webPageLd } from "@/lib/seo/schema";

const CASE_STUDY_IMAGES: Record<string, string> = {
  "footwear-growth": "/images/case-studies/footwear/hero-banner.png",
  "interior-design-marketing": "https://adswisemarketing.com/public/spacethemupp.png",
  "real-estate-growth": "https://adswisemarketing.com/public/casestudy/1.jpeg",
};

export const metadata = pageMetadata({
  title: "Digital Marketing Case Studies & Client Results",
  description:
    "Real results from AdsWise Marketing clients: +250% organic traffic for a footwear brand, +200% for an interior design studio and 400+ clients for a real estate firm.",
  path: "/case-studies",
});

export default function CaseStudiesPage() {
  return (
    <div className="bg-background">
      <JsonLd
        data={[
          webPageLd({
            type: "CollectionPage",
            name: "Case Studies",
            description: "Client growth stories from AdsWise Marketing.",
            path: "/case-studies",
          }),
          breadcrumbLd([{ name: "Case Studies", path: "/case-studies" }]),
          itemListLd(caseStudies.map((c) => ({ name: c.headline, path: c.route }))),
        ]}
      />
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["SELECTED WORK"]}
            className="font-display text-5xl leading-tight text-ink md:text-8xl"
          />
        </div>
      </section>

      <section className="border-t border-ink/10 px-6 py-16 md:px-10 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-24 md:gap-32">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={study.route}
              className={`group flex flex-col gap-8 md:flex-row md:items-center md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <ImageReveal
                src={CASE_STUDY_IMAGES[study.slug]}
                alt={study.client}
                width={800}
                height={600}
                className="transition-transform duration-700 ease-expo-out group-hover:scale-105"
                wrapperClassName="w-full md:w-1/2 aspect-[4/3] rounded-2xl"
              />
              <div className="md:w-1/2">
                <span className="text-xs uppercase tracking-widest text-muted">{study.industry}</span>
                <h2 className="mt-3 font-display text-3xl text-ink transition-colors group-hover:text-growth md:text-4xl">
                  {study.headline}
                </h2>
                <p className="mt-4 max-w-lg text-sm text-muted">{study.summary}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
