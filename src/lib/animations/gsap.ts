"use client";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
  });
}

export { gsap, ScrollTrigger, SplitText };
