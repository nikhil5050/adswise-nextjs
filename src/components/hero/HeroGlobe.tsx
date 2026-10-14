"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { rotationToFace, type Globe3DConfig, type GlobeMarker } from "@/components/ui/3d-globe";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

// three.js is heavy: load it after the hero text so the headline paints first
const Globe3D = dynamic(() => import("@/components/ui/3d-globe"), { ssr: false });

const PUNE = { lat: 18.5204, lng: 73.8567 };

const img = (id: string) => `https://images.unsplash.com/photo-${id}?w=160&h=160&q=70&auto=format&fit=crop`;

// Industry bubbles, spread roughly 50-60° apart in longitude so they never crowd each other
const MARKERS: GlobeMarker[] = [
  // { ...PUNE, src: "/images/logo.png", label: "AdsWise Marketing, Pune", fit: "contain" },
  { lat: 48, lng: 18, src: img("1545324418-cc1a3fa10c00"), label: "Real estate" },
  { lat: -8, lng: 30, src: img("1504917595217-d4dc5ebe6122"), label: "Manufacturing" },
  { lat: 36, lng: -40, src: img("1570172619644-dfd03ed5d881"), label: "Clinics & healthcare" },
  { lat: -18, lng: -95, src: img("1586023492125-27b2c045efd7"), label: "Interior design" },
  { lat: 32, lng: -150, src: img("1524178232363-1fb2b075b655"), label: "Education" },
  { lat: -20, lng: 130, src: img("1605100804763-247f67b3557e"), label: "Premium & D2C brands" },
  // Placed in the gaps between the bubbles above, alternating north/south so none overlap
  { lat: 40, lng: 80, src: img("1517248135467-4c7edcad34c4"), label: "Restaurants & cafés" },
  { lat: 8, lng: 178, src: img("1566073771259-6a8506099945"), label: "Hotels & hospitality" },
  { lat: -42, lng: -12, src: img("1534438327276-14e5300c3a48"), label: "Fitness & gyms" },
  { lat: 58, lng: -100, src: img("1441986300917-64674bd600d8"), label: "Fashion & retail" },
];

export default function HeroGlobe() {
  const reducedMotion = useReducedMotion();

  const config = useMemo<Globe3DConfig>(
    () => ({
      initialRotation: rotationToFace(PUNE.lat, PUNE.lng),
      autoRotateSpeed: reducedMotion ? 0 : 0.3,
      atmosphereColor: "#4da6ff",
      atmosphereIntensity: 20,
      bumpScale: 5,
      markerSize: 0.2,
      markerColor: "#ffffff",
      // Brighter than the defaults (0.6 / 1.5) so the Earth reads well on the black hero
      ambientIntensity: 1.4,
      pointLightIntensity: 2.6,
    }),
    [reducedMotion]
  );

  return (
    // Touch-drag on phones would trap page scrolling, so the globe is only draggable on desktop
    <div className="pointer-events-none mx-auto w-full max-w-[560px] lg:pointer-events-auto">
      <Globe3D className="h-[320px] sm:h-[420px] lg:h-[520px]" markers={MARKERS} config={config} />
    </div>
  );
}
