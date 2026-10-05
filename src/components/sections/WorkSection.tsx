import Link from "next/link";
import ImageReveal from "@/components/animations/ImageReveal";
import { caseStudies } from "@/data/case-studies";

const CASE_STUDY_IMAGES: Record<string, string> = {
  "footwear-growth": "/images/case-studies/footwear/hero-banner.png",
  "interior-design-marketing": "https://adswisemarketing.com/public/spacethemupp.png",
  "real-estate-growth": "https://adswisemarketing.com/public/casestudy/1.jpeg",
};

export default function WorkSection() {
  return (
    <section className="bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-7xl">
        <p className="mb-14 text-xs uppercase tracking-[0.3em] text-growth">Selected Work</p>

        <div className="flex flex-col gap-24 md:gap-32">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              href={study.route}
              data-cursor="EXPLORE"
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
                <h3 className="mt-3 font-display text-3xl text-ink transition-colors group-hover:text-growth md:text-4xl">
                  {study.headline}
                </h3>
                <p className="mt-4 max-w-lg text-sm text-muted">{study.summary}</p>
                <div className="mt-6 flex flex-wrap gap-8">
                  {study.results.map((result) => (
                    <div key={result.label}>
                      <p className="font-display text-2xl text-growth">{result.value}</p>
                      <p className="text-xs uppercase tracking-widest text-muted">{result.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-20 text-center">
          <Link
            href="/case-studies"
            className="text-sm uppercase tracking-widest text-ink underline decoration-growth/50 underline-offset-8 transition-colors hover:text-growth"
          >
            View All Case Studies
          </Link>
        </div>
      </div>
    </section>
  );
}
