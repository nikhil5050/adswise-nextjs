"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { gsap, ScrollTrigger, SplitText } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

export interface TagItem {
  id?: string;
  text: string;
  background: string;
  color?: string;
}

export interface HeroScrollVideoRevealProps {
  topText?: React.ReactNode;
  headingText?: React.ReactNode;
  tags?: TagItem[];
  subText?: string;
  videoSrc?: string;
  bottomText?: React.ReactNode;
  badgeImgSrc?: string;
  className?: string;
}

const DEFAULT_TAGS: TagItem[] = [
  { text: "Strategy-led growth", background: "#68735F", color: "#F3F0EA" },
  { text: "Performance marketing", background: "#143D4A", color: "#F3F0EA" },
  { text: "Creative that converts", background: "#CBB8A0", color: "#1E1E1E" },
  { text: "Technology-backed systems", background: "#F3F0EA", color: "#1E1E1E" },
];

export const HeroScrollVideoReveal: React.FC<HeroScrollVideoRevealProps> = ({
  topText = (
    <>
      We make brands
      <br />
      impossible to ignore.
    </>
  ),
  headingText = (
    <>
      We don&apos;t just run campaigns.
      <br />
      We build growth systems that compound.
    </>
  ),
  tags = DEFAULT_TAGS,
  subText = "Strategy, creative, performance and technology — working as one connected system.",
  videoSrc = "https://adswisemarketing.com/bgnew.mp4",
  bottomText = (
    <>
      And the growth
      <br />
      continues below.
    </>
  ),
  badgeImgSrc = "/images/logo.png",
  className = "",
}) => {
  const benefitRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const videoBoxRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const tagRefs = useRef<(HTMLDivElement | null)[]>([]);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(() => {});
    }

    if (reducedMotion) {
      // Show the final state statically, no scroll-jacking / word-split animation.
      if (paraRef.current) gsap.set(paraRef.current, { opacity: 1 });
      tagRefs.current.forEach((tagEl) => {
        if (tagEl) gsap.set(tagEl, { opacity: 1, clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" });
      });
      gsap.set(videoBoxRef.current, { clipPath: "circle(150% at 50% 50%)" });
      return;
    }

    let split: ReturnType<typeof SplitText.create> | null = null;
    let words: Element[] = [];

    try {
      split = SplitText.create(paraRef.current, {
        type: "words",
        wordsClass: "reveal-word inline-block origin-left mr-[0.25em] will-change-transform",
      });
      words = split.words;
    } catch {
      if (paraRef.current) words = Array.from(paraRef.current.querySelectorAll(".reveal-word"));
    }

    if (words.length > 0) {
      gsap.set(words, { opacity: 0, rotate: 8, yPercent: 30 });
    }

    const revealTl = gsap.timeline({
      scrollTrigger: {
        trigger: benefitRef.current,
        start: "top 70%",
        end: "top -10%",
        scrub: 1.5,
      },
    });

    if (words.length > 0) {
      revealTl.to(words, {
        stagger: 0.2,
        opacity: 1,
        rotate: 0,
        yPercent: 0,
        ease: "power1.inOut",
      });
    }

    tagRefs.current.forEach((tagEl) => {
      if (!tagEl) return;
      revealTl.to(
        tagEl,
        {
          duration: 1,
          opacity: 1,
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          ease: "circ.out",
        },
        ">-0.4"
      );
    });

    const mm = gsap.matchMedia();

    const breakpoints: [string, number, number][] = [
      ["(max-width: 639.9px)", 18, 1500],
      ["(min-width: 640px) and (max-width: 1023.9px)", 12, 2000],
      ["(min-width: 1024px)", 8, 2500],
    ];

    breakpoints.forEach(([query, startPercent, scrollDistance]) => {
      mm.add(query, () => {
        if (!videoBoxRef.current || !videoWrapperRef.current) return;

        gsap.set(videoBoxRef.current, { clipPath: `circle(${startPercent}% at 50% 50%)` });

        const pinTl = gsap.timeline({
          scrollTrigger: {
            trigger: videoWrapperRef.current,
            start: "top top",
            end: `+=${scrollDistance}`,
            scrub: 1.2,
            pin: true,
            pinSpacing: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        pinTl.fromTo(
          videoBoxRef.current,
          { clipPath: `circle(${startPercent}% at 50% 50%)` },
          { clipPath: "circle(150% at 50% 50%)", ease: "none" }
        );

        return () => pinTl.scrollTrigger?.kill();
      });
    });

    const refreshId = requestAnimationFrame(() => ScrollTrigger.refresh());

    return () => {
      cancelAnimationFrame(refreshId);
      split?.revert();
      revealTl.kill();
      mm.revert();
    };
  }, [reducedMotion]);

  return (
    <div className={`w-full bg-background text-ink ${className}`}>
      {/* Section 1: opening statement */}
      <section className="flex min-h-screen w-full items-center justify-center bg-background px-4 py-8 text-center text-[clamp(1.8rem,4.5vw,4.5rem)] font-display font-bold leading-tight tracking-tight text-ink sm:px-8">
        {topText}
      </section>

      {/* Section 2: kinetic headline + tags + pinned video reveal */}
      <section ref={benefitRef} className="relative min-h-[140vh] w-full bg-background pb-16 md:min-h-[160vh] md:pb-20">
        <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-16 text-center sm:px-6 md:py-24">
          <div className="mb-8 w-full sm:mb-12 md:mb-14">
            <p
              ref={paraRef}
              className="overflow-visible font-display text-[clamp(2rem,5vw,5rem)] font-extrabold leading-tight tracking-tight text-ink"
            >
              {headingText}
            </p>
          </div>

          <div className="mx-auto my-4 mb-8 flex max-w-4xl flex-wrap justify-center gap-2.5 sm:my-6 sm:mb-14 sm:gap-4">
            {tags.map((tag, idx) => (
              <div
                key={tag.id || `tag-${idx}`}
                ref={(el) => {
                  tagRefs.current[idx] = el;
                }}
                className="rounded-full px-5 py-2.5 text-[clamp(0.95rem,2vw,1.8rem)] font-semibold tracking-tight opacity-0 shadow-2xl will-change-[clip-path,opacity] sm:px-8 sm:py-4"
                style={{
                  backgroundColor: tag.background,
                  color: tag.color || "#F3F0EA",
                  clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)",
                }}
              >
                {tag.text}
              </div>
            ))}
          </div>

          {subText && (
            <p className="mt-2 max-w-xl px-4 text-[clamp(0.95rem,1.5vw,1.35rem)] font-normal text-muted sm:mt-4">
              {subText}
            </p>
          )}
        </div>

        {/* Pinned video reveal */}
        <div className="relative w-full bg-background">
          <div ref={videoWrapperRef} className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-background">
            <div className="pointer-events-none absolute inset-0 z-[1] h-full w-full bg-background" />

            <div ref={videoBoxRef} className="relative z-[2] flex h-full w-full items-center justify-center overflow-hidden bg-background will-change-[clip-path]">
              {badgeImgSrc && (
                <Image
                  src={badgeImgSrc}
                  alt="AdsWise Marketing"
                  width={80}
                  height={80}
                  className="pointer-events-none absolute left-1/2 top-1/2 z-20 h-16 w-16 -translate-x-1/2 -translate-y-1/2 select-none opacity-90 [animation:spin_18s_linear_infinite] sm:h-24 sm:w-24 md:h-28 md:w-28"
                />
              )}

              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                className="h-full w-full bg-background object-cover"
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              <div className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-white/20 shadow-xl backdrop-blur-md sm:h-12 sm:w-12 md:h-16 md:w-16">
                  <Play className="h-4 w-4 fill-ink text-ink sm:h-5 sm:w-5 md:h-6 md:w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: closing line */}
      <section className="flex min-h-[60vh] w-full items-center justify-center bg-background px-4 py-8 text-center text-[clamp(1.8rem,4.5vw,4.5rem)] font-display font-bold leading-tight tracking-tight text-ink sm:px-8">
        {bottomText}
      </section>
    </div>
  );
};

export default HeroScrollVideoReveal;
