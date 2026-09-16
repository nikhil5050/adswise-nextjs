"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";

const DigitalOrb = dynamic(() => import("@/components/three/DigitalOrb"), {
  ssr: false,
});

export default function HeroScene() {
  const reducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 767px)").matches);
  }, []);

  if (reducedMotion) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <DigitalOrb reducedMotion={reducedMotion} isMobile={isMobile} />
    </div>
  );
}
