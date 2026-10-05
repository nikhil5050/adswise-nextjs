"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { cn } from "@/lib/utils/cn";
import type { ServiceFaq } from "@/data/services";

export default function FaqAccordion({ faqs }: { faqs: ServiceFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-ink/10 border-y border-ink/10">
      {faqs.map((faq, i) => (
        <div key={faq.question}>
          <button
            type="button"
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-6 text-left"
          >
            <span className="font-display text-lg text-ink md:text-xl">{faq.question}</span>
            <Plus
              size={20}
              className={cn("shrink-0 text-growth transition-transform duration-300", open === i && "rotate-45")}
            />
          </button>
          <div
            className="grid overflow-hidden transition-all duration-500 ease-expo-out"
            style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
          >
            <div className="min-h-0">
              <p className="max-w-3xl pb-6 text-sm text-muted">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
