"use client";

import { useEffect } from "react";
import RevealText from "@/components/animations/RevealText";

export default function TestimonialsSection() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://widgets.sociablekit.com/google-reviews/widget.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="bg-background px-6 py-28 md:px-10 md:py-40">
      <div className="mx-auto max-w-6xl">
        <RevealText
          as="h2"
          lines={["WHAT OUR CLIENTS SAY"]}
          className="font-display text-3xl text-ink md:text-5xl"
        />
        <p className="mt-4 text-sm text-muted">Real reviews from Google, updated live.</p>
        <div className="mt-14 min-h-[400px] rounded-2xl bg-ink/[0.03] p-2 md:p-6">
          <div className="sk-ww-google-reviews" data-embed-id="25663233" />
        </div>
      </div>
    </section>
  );
}
