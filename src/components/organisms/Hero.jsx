import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ArrowRight, Sparkles } from "lucide-react";
import { SocialLinks } from "../molecules/SocialLinks";
import { FaMapPin } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";
import { HiOutlineMapPin } from "react-icons/hi2";

export function Hero() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".hero-eyebrow", { y: 20, opacity: 0, duration: 0.6 })
        .from(".hero-title-line", {
          y: 60,
          opacity: 0,
          duration: 0.9,
          stagger: 0.12,
        }, "-=0.3")
        .from(".hero-sub", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
        .from(".hero-cta > *", {
          y: 20,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
        }, "-=0.3")
        .from(".hero-social", { opacity: 0, duration: 0.6 }, "-=0.2")
        .from(".hero-shape", {
          scale: 0.4,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
        }, 0);
    }, root);

    return () => ctx.revert();
  }, []);
const STATS = [
  { value: "2+", label: "Years" },
  { value: "20+", label: "Projects" },
  { value: "15+", label: "Clients" },
];
  return (
    <section
      ref={root}
      className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden"
    >
      {/* Floating shapes */}
      <div className="hero-shape pointer-events-none absolute -top-32 -left-24 h-[420px] w-[420px] rounded-full bg-lavender-400 opacity-40  blur-3xl animate-float-slow" />
      <div className="hero-shape pointer-events-none absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full bg-lavender-300 opacity-50 blur-3xl animate-float-slower" />
      <div className="hero-shape pointer-events-none absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-primary opacity-20 blur-3xl animate-float-slow" />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        <div>
          <div className="hero-eyebrow inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 mb-6 text-xs">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Available for freelance · Q3 2026</span>
          </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            <span className="hero-title-line block">Hi, I'm</span>
            <span className="hero-title-line block text-gradient">Tanzeela Jabbar</span>
            <span className="hero-title-line block text-3xl md:text-5xl text-muted-foreground font-medium mt-2">
              Front-End Developer
            </span>
          </h1>

          <p className="hero-sub text-base md:text-lg text-muted-foreground max-w-lg mb-6 leading-relaxed">
            I craft modern, responsive web experiences with{" "}
            <span className="text-foreground font-medium">React</span>,{" "}
            <span className="text-foreground font-medium">Next.js</span> &{" "}
            <span className="text-foreground font-medium">GSAP</span> — turning ideas into smooth, pixel-perfect interfaces.
          </p>
           {/* Location */}
          <div className="hero-meta flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <HiOutlineMapPin className="h-4 w-4 text-primary" />
            <span>Karachi, Pakistan</span>
            <span className="opacity-40">•</span>
            <span>Open to remote</span>
          </div>

          <div className="hero-cta flex flex-wrap items-center gap-4 mb-10">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:scale-105 transition-transform glow-ring"
            >
              View work{" "}
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:scale-105 transition-transform"
            >
              Let's talk
            </a>
                <a href="/resume.pdf" 
                  download="Tanzeela-Jabbar-Resume.pdf"
                    className="inline-flex items-center gap-2 rounded-full glass px-6 py-3 font-medium hover:scale-105 transition-transform">
              <FiDownload  className="h-4 w-4 group-hover:translate-x-1 transition-transform "/> Resume
            </a>
          </div>
           {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-md mb-8">
            {STATS.map((s) => (
              <div key={s.label} className="hero-stat glass rounded-2xl px-4 py-3 text-center">
                <div className="text-2xl md:text-3xl font-bold text-gradient">{s.value}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        

          <div className="hero-social">
            <SocialLinks />
          </div>
        </div>

        {/* Right visual */}
        <div className="hero-shape relative aspect-square max-w-md mx-auto">
          <div className="absolute inset-0 rounded-[2.5rem] glass-strong glow-ring p-8 flex flex-col justify-between">
            <div className="flex gap-2">
              <span className="h-3 w-3 rounded-full bg-destructive/70" />
              <span className="h-3 w-3 rounded-full bg-lavender-400" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
            </div>

          </div>

          <div className="absolute -bottom-6 -right-6 h-24 w-24 rounded-2xl bg-primary opacity-80 glow-ring rotate-12 animate-float-slow" />
          <div className="absolute -top-6 -left-6 h-16 w-16 rounded-full bg-lavender-400 glow-ring animate-float-slower" />
        </div>
      </div>
    </section>
  );
}