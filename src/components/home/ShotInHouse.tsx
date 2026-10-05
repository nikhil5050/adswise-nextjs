"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const REELS = [
  {
    handle: "flatNplot Realty",
    video: "/ShotInHouse/flatNplot.mp4",
    caption: "Walk through a 2 BHK in 30 seconds.",
    tag: "Real estate",
    bg: "linear-gradient(165deg, #2A3300 0%, #121600 55%, #050505 100%)",
    accent: "#D7FF00",
  },
  {
    handle: "Cherish Derma Clinic",
    video: "/ShotInHouse/cherishdermaclinic.mp4",
    caption: "What happens at your first skin consult.",
    tag: "Clinic",
    bg: "linear-gradient(165deg, #303030 0%, #181818 55%, #050505 100%)",
    accent: "#D7FF00",
  },
  {
    handle: "Vylore Jewellers",
    video: "/ShotInHouse/vylore jewellery.mp4",
    caption: "Unboxing: 925 sterling, hallmarked.",
    tag: "Premium brand",
    bg: "linear-gradient(165deg, #232323 0%, #0D0D0D 55%, #050505 100%)",
    accent: "#FFFFFF",
  },
];

const POINTS = [
  { b: "Scripted around your buyer", s: "Every reel answers one doubt that stops people from booking." },
  { b: "Shot by our own creators", s: "No stock footage. Our team comes to your site, clinic or studio." },
  { b: "Delivered every week", s: "Edited, captioned and ready to post, or run as an ad." },
];

// Fallback progress-bar length until the video reports its real duration
const DURATION = 10000;

export default function ShotInHouse() {
  const ref = useRef<HTMLElement>(null);
  const [idx, setIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [duration, setDuration] = useState(DURATION);
  const videoRef = useRef<HTMLVideoElement>(null);
  const reducedMotion = useReducedMotion();

  // Only auto-advance while the section is on screen
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.3 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // Play the reel only while the section is on screen; the next reel starts when it ends
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    if (visible && !reducedMotion) v.play().catch(() => {});
    else v.pause();
  }, [idx, visible, reducedMotion]);

  const showReel = (i: number) => {
    setDuration(DURATION);
    setIdx(i);
  };

  useGSAP(
    () => {
      if (!ref.current || reducedMotion) return;
      gsap.fromTo(
        ".sih-phone.main",
        { y: 120, rotate: 0 },
        {
          y: 0,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top bottom", end: "center center", scrub: 0.6 },
        }
      );
      gsap.fromTo(
        ".sih-phone.left",
        { x: 80, rotate: 0, opacity: 0 },
        {
          x: 0,
          rotate: -9,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "center center", scrub: 0.6 },
        }
      );
      gsap.fromTo(
        ".sih-phone.right",
        { x: -80, rotate: 0, opacity: 0 },
        {
          x: 0,
          rotate: 9,
          opacity: 1,
          ease: "none",
          scrollTrigger: { trigger: ref.current, start: "top 80%", end: "center center", scrub: 0.6 },
        }
      );
      gsap.fromTo(
        ".sih-text > *",
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.9,
          ease: "expo.out",
          scrollTrigger: { trigger: ref.current, start: "top 70%" },
        }
      );
    },
    { scope: ref, dependencies: [reducedMotion] }
  );

  const reel = REELS[idx];
  const prev = REELS[(idx + REELS.length - 1) % REELS.length];
  const next = REELS[(idx + 1) % REELS.length];

  return (
    <section ref={ref} className="sih">
      <div className="wrap-wide sih-grid">
        <div className="sih-text">
          <p className="label">Reels and content</p>
          <h2 className="h-l" style={{ marginTop: 8 }}>
            Shot in-house.
            <br />
            <span className="silver">Every week.</span>
          </h2>
          <p className="sih-lead">
            Content that sells is made by people who know why your customer is hesitating. So we
            write it, shoot it and edit it ourselves.
          </p>
          <ul className="sih-points">
            {POINTS.map((p) => (
              <li key={p.b}>
                <b>{p.b}</b>
                <span>{p.s}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sih-stage">
          <div className="sih-phone left" aria-hidden="true">
            <div className="sih-scr" style={{ background: prev.bg }}>
              <video className="sih-video" src={`${encodeURI(prev.video)}#t=0.5`} muted playsInline preload="metadata" />
            </div>
          </div>
          <div className="sih-phone right" aria-hidden="true">
            <div className="sih-scr" style={{ background: next.bg }}>
              <video className="sih-video" src={`${encodeURI(next.video)}#t=0.5`} muted playsInline preload="metadata" />
            </div>
          </div>

          <div className="sih-phone main">
            <div className="sih-scr" style={{ background: reel.bg }}>
              <video
                key={idx}
                ref={videoRef}
                className="sih-video sih-footage"
                src={encodeURI(reel.video)}
                muted
                playsInline
                preload="auto"
                aria-label={`${reel.handle} reel: ${reel.caption}`}
                onLoadedMetadata={(e) => {
                  const d = e.currentTarget.duration;
                  if (Number.isFinite(d) && d > 0) setDuration(d * 1000);
                }}
                onEnded={() => showReel((idx + 1) % REELS.length)}
              />

              <div className="sih-progress">
                {REELS.map((r, i) => (
                  <button
                    key={r.handle}
                    aria-label={`Show reel ${i + 1}`}
                    onClick={() => showReel(i)}
                    className={i < idx ? "done" : i === idx ? "on" : ""}
                  >
                    <i
                      key={i === idx ? `on-${idx}` : r.handle}
                      style={{ animationDuration: `${duration}ms`, animationPlayState: visible && !reducedMotion ? "running" : "paused" }}
                    />
                  </button>
                ))}
              </div>

              <div className="sih-side" aria-hidden="true">
                <span>♥<small>2.4k</small></span>
                <span>💬<small>86</small></span>
                <span>➤<small>312</small></span>
              </div>

              <div className="sih-cap" key={`cap-${idx}`}>
                <div className="who">
                  <i style={{ background: reel.accent }} />
                  <b>{reel.handle}</b>
                  <em>{reel.tag}</em>
                </div>
                <p>{reel.caption}</p>
                <span className="sih-cta">Book a visit</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
