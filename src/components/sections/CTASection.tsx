import Link from "next/link";
import RevealText from "@/components/animations/RevealText";
import MagneticButton from "@/components/animations/MagneticButton";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-teal/20 px-6 py-32 text-center md:px-10 md:py-48">
      <div className="mx-auto max-w-4xl">
        <RevealText
          as="h2"
          lines={["READY TO BUILD", "WHAT'S NEXT?"]}
          className="font-display text-5xl leading-tight text-ink md:text-7xl"
        />
        <p className="mx-auto mt-8 max-w-lg text-base text-muted">
          Let&apos;s design a growth system for your brand — strategy, creative and performance,
          working together.
        </p>
        <div className="mt-12 flex justify-center">
          <MagneticButton as="div" strength={0.4}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-sm uppercase tracking-widest text-ink transition-colors hover:border-sand hover:text-sand"
            >
              Start A Project
            </Link>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
