import type { Metadata } from "next";
import { Palette, Video, Globe, TrendingUp, PenTool, Zap, Target, Users, Award } from "lucide-react";
import RevealText from "@/components/animations/RevealText";
import MagneticButton from "@/components/animations/MagneticButton";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join AdsWise Marketing — open roles in design, video, development, marketing and content.",
  alternates: { canonical: "/career" },
};

const GOOGLE_FORM =
  "https://docs.google.com/forms/d/e/1FAIpQLSeN_Ckm6tRWFsevqufDkzc4KgwxY4gC3JwaZWg7jiEFZnX7nQ/viewform?usp=publish-editor";

const OPPORTUNITIES = [
  { title: "Graphics Designer", icon: Palette, desc: "Craft visually compelling designs and brand assets for our clients." },
  { title: "Video Editor", icon: Video, desc: "Create engaging video content and produce high-quality marketing reels." },
  { title: "Website Developer", icon: Globe, desc: "Build responsive, high-performance websites and web apps." },
  { title: "Digital Marketer", icon: TrendingUp, desc: "Execute ROI-driven campaigns and lead digital growth strategies." },
  { title: "Content Writer", icon: PenTool, desc: "Write persuasive copy that converts, educates and engages audiences." },
];

const PERKS = [
  { icon: Zap, title: "Fast-Paced Growth", desc: "Work on diverse, high-impact projects that accelerate your learning curve." },
  { icon: Target, title: "Remote Flexibility", desc: "Choose between full-time office or robust work-from-home setups." },
  { icon: Users, title: "Collaborative Culture", desc: "Join a team of passionate, creative and supportive individuals." },
  { icon: Award, title: "Skill Development", desc: "Continuous learning with access to premium tools and mentorship." },
];

export default function CareerPage() {
  return (
    <div className="bg-background">
      <section className="px-6 pb-16 pt-40 md:px-10 md:pb-24 md:pt-52">
        <div className="mx-auto max-w-5xl">
          <RevealText
            as="h1"
            lines={["BUILD YOUR CAREER", "WITH ADSWISE"]}
            className="font-display text-4xl leading-tight text-ink md:text-7xl"
          />
          <p className="mt-8 max-w-2xl text-lg text-muted">
            We are constantly pushing the boundaries of creativity and digital innovation —
            offering full-time and work-from-home roles in adaptable environments for growth.
          </p>
        </div>
      </section>

      <section className="border-t border-white/10 bg-surface px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Why Work With Us</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {PERKS.map((perk) => (
              <div key={perk.title}>
                <perk.icon className="text-sand" size={28} strokeWidth={1.5} />
                <h3 className="mt-4 font-display text-lg text-ink">{perk.title}</h3>
                <p className="mt-2 text-sm text-muted">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="opportunities" className="px-6 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-12 text-xs uppercase tracking-[0.3em] text-muted">Open Positions</p>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {OPPORTUNITIES.map((job) => (
              <div key={job.title} className="flex flex-col rounded-2xl border border-white/10 p-8">
                <job.icon className="text-sand" size={28} strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl text-ink">{job.title}</h3>
                <p className="mt-3 flex-1 text-sm text-muted">{job.desc}</p>
                <a
                  href={GOOGLE_FORM}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 text-sm uppercase tracking-widest text-sand hover:underline"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-teal/20 px-6 py-28 text-center md:px-10 md:py-40">
        <div className="mx-auto max-w-3xl">
          <RevealText
            as="h2"
            lines={["READY TO ACCELERATE", "YOUR JOURNEY?"]}
            className="font-display text-4xl leading-tight text-ink md:text-6xl"
          />
          <div className="mt-10 flex justify-center">
            <MagneticButton as="div" strength={0.4}>
              <a
                href={GOOGLE_FORM}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-10 py-5 text-sm uppercase tracking-widest text-ink transition-colors hover:border-sand hover:text-sand"
              >
                Fill Out Application Form
              </a>
            </MagneticButton>
          </div>
        </div>
      </section>
    </div>
  );
}
