import FaqAccordion from "@/components/templates/FaqAccordion";
import JsonLd from "@/components/seo/JsonLd";
import { faqLd } from "@/lib/seo/schema";
import type { ServiceFaq } from "@/data/services";

/** FAQ block plus matching FAQPage schema. Answers stay in the DOM while collapsed, so crawlers read them. */
export default function FaqSection({ faqs, title = "Frequently Asked Questions" }: { faqs: ServiceFaq[]; title?: string }) {
  if (faqs.length === 0) return null;

  return (
    <section className="bg-surface px-6 py-20 md:px-10 md:py-28">
      <JsonLd data={faqLd(faqs)} />
      <div className="mx-auto max-w-4xl">
        <h2 className="mb-12 text-xs uppercase tracking-[0.3em] text-growth">{title}</h2>
        <FaqAccordion faqs={faqs} />
      </div>
    </section>
  );
}
