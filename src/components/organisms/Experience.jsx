import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "../atoms/SectionHeading";
import { TimelineItem } from "../molecules/TimelineItem";

gsap.registerPlugin(ScrollTrigger);

const items = [
  {
    company: "Tafsol Technologies — Karachi",
    role: "Junior Frontend Developer",
    period: "Dec 2024 — Present",
    stack: ["Next.js", "React", "Redux", "WebSockets"],
    description:
      "Building reusable, optimized components and refactoring legacy React into modular Next.js — reducing code complexity by ~30%.",
  },
  {
    company: "Tafsol Technologies — Karachi",
    role: "Frontend Intern",
    period: "Jun 2024 — Dec 2024",
    stack: ["React", "Next.js", "Tailwind"],
    description:
      "Shipped responsive UI features, integrated REST APIs and contributed to authentication flows across multiple client projects.",
  },
  {
    company: "APTECH Learning — Karachi",
    role: "IT Faculty",
    period: "May 2024 — Jun 2024",
    stack: ["HTML", "CSS", "JavaScript"],
    description:
      "Created lesson plans and led hands-on lab sessions, boosting student engagement and practical web-dev skills.",
  },
  {
    company: "IQRA University",
    role: "BS Computer Science · CGPA 3.84",
    period: "Jul 2020 — Jul 2024",
    stack: ["CS Fundamentals", "Web", "Algorithms"],
    description:
      "Graduated with distinction, focusing on modern web technologies and software engineering practices.",
  },
];

export function Experience() {
  const root = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".timeline-line", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 70%",
          end: "bottom 60%",
          scrub: true,
        },
        scaleY: 0,
        transformOrigin: "top",
      });

      gsap.utils.toArray(".timeline-item").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
          },
          y: 60,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        });
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} id="experience" className="relative py-28 bg-muted/40">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Journey"
          title="Experience"
          subtitle="Roles, milestones, and the path so far."
        />

        <div className="relative max-w-5xl mx-auto">
          <div className="timeline-line absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-lavender-400 to-transparent" />

          <div className="space-y-14">
            {items.map((it, i) => (
              <TimelineItem
                key={it.company + it.period}
                {...it}
                side={i % 2 === 0 ? "left" : "right"}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}