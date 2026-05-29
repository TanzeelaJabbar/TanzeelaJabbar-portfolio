import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
// import SkillBadge from "@/components/atoms/SkillBadge";
import { Code2, Palette, Server, Smartphone } from "lucide-react";
import { SectionHeading } from "../atoms/SectionHeading";
import { Pill } from "../atoms/Pill";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  "HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "React.js", "Next.js",
  "Laravel", "PHP", "WordPress", "Bootstrap", "Tailwind CSS",
  "Redux", "Context API", "React Query", "GSAP", "Framer Motion",
  "Git", "Figma", "REST APIs", "WebSockets", "i18n",
];

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    desc: "Building responsive, performant UIs with React.js & Next.js",
  },
  {
    icon: Server,
    title: "Backend Integration",
    desc: "RESTful APIs, WebSockets, and server-side rendering with Next.js",
  },
  {
    icon: Palette,
    title: "WordPress Development",
    desc: "Custom themes, plugins & full CMS solutions",
  },
  {
    icon: Smartphone,
    title: "Responsive Design",
    desc: "Pixel-perfect layouts with cross-browser compatibility",
  },
];

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const descRef = useRef(null);
  const cardsRef = useRef(null);
  const badgesRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        descRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: descRef.current,
            start: "top 85%",
          },
        }
      );

      const cards = cardsRef.current?.querySelectorAll(".service-card");
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
          }
        );
      }

      const badges = badgesRef.current?.querySelectorAll(".skill-badge");
      if (badges) {
        gsap.fromTo(
          badges,
          { scale: 0, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            stagger: 0.03,
            duration: 0.4,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: badgesRef.current,
              start: "top 85%",
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-background text-foreground"
    >
      <div className="container mx-auto px-6">

        {/* TITLE */}
        <div ref={titleRef} className="opacity-0">
         <SectionHeading
          eyebrow="About"
          title="Front-End Developer with a builder's mindset"
          subtitle="BS-CS from IQRA University (CGPA 3.84). Currently a Junior Front-End Developer at Tafsol Technologies — shipping modular React & Next.js components, real-time WebSocket features, and pixel-perfect responsive UIs."
        />
        </div>



        {/* SERVICES */}
        <div ref={cardsRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16" style={{ perspective: "1000px" }}>
          {services.map((service) => (
            <div key={service.title}
              className="service-card p-6 rounded-2xl bg-card border border-border hover:border-primary/30
                         transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group" style={{ opacity: 0 }}>
              <div className="w-12 h-12 rounded-sm flex items-center justify-center mb-4
                            bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground
                            transition-colors duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-card-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>

        {/* SKILLS */}
        <div
          ref={badgesRef}
          className="flex flex-wrap gap-3 justify-center"
        >
          {skills.map((skill) => (
            <div key={skill} className="skill-badge opacity-0">
              <Pill> {skill}</Pill>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;