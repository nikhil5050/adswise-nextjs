import Link from "next/link";
import RevealText from "@/components/animations/RevealText";
import CTASection from "@/components/sections/CTASection";
import JsonLd from "@/components/seo/JsonLd";
import FaqSection from "@/components/templates/FaqSection";
import QuickAnswer from "@/components/templates/QuickAnswer";
import RelatedLinks from "@/components/templates/RelatedLinks";
import RecommendedPackages from "@/components/templates/RecommendedPackages";
import { inSentence, type IndustryCategory, type IndustryType } from "@/data/industry-categories";
import { industryContent } from "@/data/industry-content";
import { services } from "@/data/services";
import { breadcrumbLd, serviceLd } from "@/lib/seo/schema";
import { caseStudyLinks, playbookLinks, serviceLinks } from "@/lib/seo/links";

const STEPS = [
  { title: "Free growth audit", body: "We study your business, competitors and current marketing to find the quickest wins." },
  { title: "Growth plan", body: "A clear plan of channels, content and budget, matched to how your customers buy." },
  { title: "Launch", body: "We build and run the campaigns, content and systems while you focus on the business." },
  { title: "Report & optimise", body: "Monthly reporting on enquiries, sales and cost per lead, with ongoing improvements." },
];

export default function IndustryTypeTemplate({ category, type }: { category: IndustryCategory; type: IndustryType }) {
  const others = category.types.filter((t) => t.slug !== type.slug);
  const content = industryContent[category.slug];
  const name = inSentence(type.name);
  const path = `/industry/${category.slug}/${type.slug}`;
  const channelNames = (content?.services ?? [])
    .map((slug) => services.find((s) => s.slug === slug)?.title.toLowerCase())
    .filter(Boolean) as string[];
  const channelList = channelNames.length
    ? `${channelNames.slice(0, -1).join(", ")} and ${channelNames[channelNames.length - 1]}`
    : "search, social media, advertising and lead follow-up";

  const answer = `Digital marketing helps ${name} get more customers by making the business easy to find when people search, building trust through reviews and content, and following up quickly with every enquiry. For ${name}, AdsWise Marketing usually combines ${channelList}, planned around your location, customers and budget.`;

  const faqs = [
    {
      question: `What is the best digital marketing strategy for ${name}?`,
      answer: `The best strategy for ${name} starts with being visible where customers look — Google search and Maps, and the social platforms they use — then builds trust with reviews and useful content, and converts interest with clear offers and fast follow-up. The core channels we use are ${channelList}.`,
    },
    {
      question: `How long does it take to see results from marketing for ${name}?`,
      answer:
        "Paid campaigns typically start producing enquiries within one to two weeks. SEO, content and social media build steadily over three to six months and lower your cost per customer over time.",
    },
    {
      question: `Does AdsWise Marketing work with ${name} outside Pune?`,
      answer: `Yes. AdsWise Marketing is based in Pune, Maharashtra, and works with ${name} across India, managing campaigns, content and reporting remotely with regular review calls.`,
    },
    ...(content?.faqs ?? []),
  ];

  return (
    <div className="bg-background">
      <JsonLd
        data={[
          serviceLd({
            name: `Digital Marketing for ${type.name}`,
            description: answer,
            path,
            serviceType: "Digital marketing",
            audience: type.name,
          }),
          breadcrumbLd([
            { name: "Industries", path: "/industry" },
            { name: category.name, path: `/industry/${category.slug}` },
            { name: type.name, path },
          ]),
        ]}
      />

      <section className="px-6 pb-20 pt-40 md:px-10 md:pb-28 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <p className="text-xs uppercase tracking-[0.3em] text-growth">
            <Link href="/industry" className="hover:text-ink">Industries</Link>
            <span className="mx-2">/</span>
            <Link href={`/industry/${category.slug}`} className="hover:text-ink">{category.name}</Link>
            <span className="mx-2">/</span>
            {type.code}
          </p>
          <RevealText
            as="h1"
            lines={[type.name]}
            className="mt-6 font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">
            Digital marketing for {name}. Adswise brings together branding, content, advertising
            and lead systems so more of the right customers find you, trust you and get in touch.
          </p>
          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-block rounded-full border border-growth px-8 py-4 text-sm uppercase tracking-widest text-growth transition-colors hover:bg-growth hover:text-background"
            >
              Book a free growth audit
            </Link>
          </div>
        </div>
      </section>

      <QuickAnswer
        question={`How can digital marketing help ${name} get more customers?`}
        answer={answer}
        points={content?.challenges.map((c) => `Solves: ${c.charAt(0).toLowerCase()}${c.slice(1)}`)}
      />

      {content && (
        <RelatedLinks title={`Marketing Services for ${type.name}`} links={serviceLinks(content.services)} surface />
      )}

      <section className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">How We Work</h2>
          <ol className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl bg-ink/10 sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((step, i) => (
              <li key={step.title} className="bg-background p-6">
                <span className="font-display text-2xl text-growth">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-3 text-base text-ink">{step.title}</h3>
                <p className="mt-2 text-sm text-muted">{step.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <RecommendedPackages slugs={category.packages} title="Recommended Packages" />

      {content && (
        <RelatedLinks
          title="Playbooks & Results"
          links={[
            { href: `/industry/${category.slug}`, label: `${category.name} Marketing`, description: content.intro },
            ...playbookLinks(content.playbook ? [content.playbook] : []),
            ...caseStudyLinks(content.caseStudies ?? []),
          ]}
        />
      )}

      <FaqSection faqs={faqs} />

      {others.length > 0 && (
        <section className="px-6 py-20 md:px-10 md:py-28">
          <div className="mx-auto max-w-6xl">
            <h2 className="mb-10 text-xs uppercase tracking-[0.3em] text-growth">Also in {category.name}</h2>
            <div className="flex flex-wrap gap-3">
              {others.map((t) => (
                <Link
                  key={t.slug}
                  href={`/industry/${category.slug}/${t.slug}`}
                  className="rounded-full border border-growth/25 px-4 py-2 text-sm text-ink/80 transition-colors hover:border-growth hover:text-growth"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTASection />
    </div>
  );
}
