import HeroText from "./HeroText";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-background via-background to-raised pb-[clamp(70px,9vw,130px)] pt-[calc(clamp(70px,9vw,130px)+80px)] text-center">
      <div className="mx-auto max-w-[720px] px-6">
        <HeroText />
      </div>
    </section>
  );
}
