import RevealText from "@/components/animations/RevealText";

export default function IntroSection() {
  return (
    <section className="bg-background px-6 py-32 md:px-10 md:py-48">
      <div className="mx-auto max-w-5xl">
        <RevealText
          as="h2"
          lines={["WE DON'T JUST RUN CAMPAIGNS.", "WE BUILD GROWTH SYSTEMS", "THAT COMPOUND OVER TIME."]}
          className="font-display text-4xl leading-tight text-ink md:text-6xl"
          lineClassName="font-display"
          stagger={0.15}
        />
        <p className="mt-10 max-w-2xl text-base text-muted md:text-lg">
          Strategy defines direction, websites establish credibility, search visibility attracts
          buyers, advertising accelerates demand, and content builds trust — working as one
          connected system, not a bundle of disconnected services.
        </p>
      </div>
    </section>
  );
}
