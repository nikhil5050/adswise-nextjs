"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import Image, { type ImageProps } from "next/image";
import { gsap } from "@/lib/animations/gsap";
import { useReducedMotion } from "@/lib/hooks/useReducedMotion";
import { cn } from "@/lib/utils/cn";

export default function ImageReveal({ className, wrapperClassName, ...props }: ImageProps & { wrapperClassName?: string }) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const reducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (!wrapperRef.current || !imgRef.current) return;
      if (reducedMotion) {
        gsap.set(imgRef.current, { scale: 1, clipPath: "inset(0% 0% 0% 0%)" });
        return;
      }

      gsap.fromTo(
        wrapperRef.current,
        { clipPath: "inset(0% 0% 100% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          duration: 1.2,
          ease: "expo.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%" },
        }
      );
      gsap.fromTo(
        imgRef.current,
        { scale: 1.15 },
        {
          scale: 1,
          duration: 1.4,
          ease: "expo.out",
          scrollTrigger: { trigger: wrapperRef.current, start: "top 85%" },
        }
      );
    },
    { scope: wrapperRef, dependencies: [reducedMotion] }
  );

  return (
    <div ref={wrapperRef} className={cn("overflow-hidden", wrapperClassName)}>
      <Image ref={imgRef} className={cn("h-full w-full object-cover", className)} {...props} />
    </div>
  );
}
