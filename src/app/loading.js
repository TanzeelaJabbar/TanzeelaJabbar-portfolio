"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const NAME = "TANZEELA";

export default function Loading() {
  const [hidden, setHidden] = useState(false);
  const rootRef = useRef(null);
  const lettersRef = useRef([]);
  const barRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    const handleLoad = () => {
      const tl = gsap.timeline({
        onComplete: () => setHidden(true),
      });

      gsap.set(lettersRef.current, {
        yPercent: 120,
        opacity: 0,
        rotate: 8,
      });

      tl.to(lettersRef.current, {
        yPercent: 0,
        opacity: 1,
        rotate: 0,
        duration: 0.7,
        ease: "power4.out",
        stagger: 0.06,
      })
        .to(
          barRef.current,
          { scaleX: 1, duration: 1.1, ease: "power2.inOut" },
          "-=0.4"
        )
        .to(subRef.current, { opacity: 1, y: 0, duration: 0.4 }, "-=0.6")
        .to(
          lettersRef.current,
          {
            yPercent: -120,
            opacity: 0,
            rotate: -6,
            duration: 0.55,
            ease: "power3.in",
            stagger: 0.04,
          },
          "+=0.25"
        )
        .to(subRef.current, { opacity: 0, y: -10, duration: 0.3 }, "<")
        .to(rootRef.current, {
          yPercent: -100,
          duration: 0.9,
          ease: "expo.inOut",
        });
    };

    if (document.readyState === "complete") {
      setTimeout(handleLoad, 50);
    } else {
      window.addEventListener("load", handleLoad);
    }

    const fallback = setTimeout(handleLoad, 3500);

    return () => {
      window.removeEventListener("load", handleLoad);
      clearTimeout(fallback);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = hidden ? "" : "hidden";
  }, [hidden]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
        <div className="absolute -bottom-32 -right-32 h-[28rem] w-[28rem] rounded-full bg-lavender-400/40 blur-3xl animate-float-slower" />
      </div>

      <div className="relative flex overflow-hidden px-4">
        {NAME.split("").map((ch, i) => (
          <span
            key={i}
            ref={(el) => (lettersRef.current[i] = el)}
            className="inline-block font-display text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight text-gradient"
          >
            {ch}
          </span>
        ))}
      </div>

      <div className="relative mt-10 h-[2px] w-56 overflow-hidden rounded-full bg-foreground/10">
        <div
          ref={barRef}
          className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-primary via-lavender-400 to-primary"
        />
      </div>

      <div
        ref={subRef}
        className="mt-4 translate-y-2 opacity-0 text-xs uppercase tracking-[0.4em] text-muted-foreground"
      >
        Crafting Experience
      </div>
    </div>
  );
}