"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Linkedin } from "lucide-react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import type { TeamMember } from "@/data/team";

const initials = (name: string) =>
  name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export default function TeamGrid({ members }: { members: TeamMember[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;
      gsap.fromTo(
        ".tg-card",
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "expo.out",
          stagger: 0.08,
          // Hand transform back to CSS so the hover lift works after the entrance
          clearProps: "transform",
          scrollTrigger: { trigger: ref.current, start: "top 80%" },
        }
      );
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  return (
    <div ref={ref} className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
      {members.map((member) => (
        <article
          key={member.name}
          className="tg-card group relative flex flex-col overflow-hidden rounded-2xl border border-ink/10 bg-raised transition-[border-color,box-shadow,transform] duration-500 hover:-translate-y-1 hover:border-growth/50 hover:shadow-[0_20px_60px_-25px_rgba(215,255,0,0.45)]"
        >
          <div className="relative aspect-[4/5] overflow-hidden bg-charcoal">
            {member.image ? (
              <Image
                src={encodeURI(member.image)}
                alt={`${member.name}, ${member.role}`}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[radial-gradient(circle_at_50%_35%,rgba(215,255,0,0.18),transparent_70%)]">
                <span className="font-display text-5xl font-semibold text-growth/80">{initials(member.name)}</span>
              </div>
            )}

            {/* Fade the photo into the card so the name stays readable */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-raised via-raised/10 to-transparent" />

            {member.linkedin && (
              <Link
                href={member.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label={`${member.name} on LinkedIn`}
                className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full border border-ink/15 bg-background/60 text-ink backdrop-blur transition-colors duration-300 hover:border-growth hover:bg-growth hover:text-background"
              >
                <Linkedin size={16} />
              </Link>
            )}

            <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
              <h3 className="font-display text-base leading-tight text-ink sm:text-lg">{member.name}</h3>
              <p className="mt-1 text-[10px] uppercase tracking-[0.15em] text-growth sm:text-xs">{member.role}</p>
            </div>
          </div>

          <ul className="flex flex-wrap gap-1.5 px-4 pb-4 pt-1 sm:px-5 sm:pb-5">
            {member.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-ink/10 px-2.5 py-1 text-[10px] text-muted transition-colors duration-300 group-hover:border-growth/30 sm:text-[11px]"
              >
                {skill}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </div>
  );
}
