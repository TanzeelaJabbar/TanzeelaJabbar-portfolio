"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/atoms/SectionHeading";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { PhotoProvider } from "react-photo-view";

gsap.registerPlugin(ScrollTrigger);

const FILTERS = ["All", "Next.js", "React", "WordPress"];

const PROJECTS = [
    { title: "Coach Huddle", description: "Admin dashboard with full CRUD, protected routes, and WebSocket-powered real-time notifications.", category: "Next.js", stack: ["Next.js", "WebSockets", "SSR"], image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900", live: "#", repo: "#", },
    { title: "Landlord Logic", description: "Responsive store with Redux state, cart/checkout flow and statically pre-rendered product pages.", category: "Next.js", stack: ["Next.js", "Redux", "Auth"], image: "/images/landloard-logic.png", live: "https://landlord-logic-web.vercel.app/", repo: "#", },
    { title: "Newvana", description: "AI-powered platform for personalized reflections with secure auth and real-time listening features.", category: "Next.js", stack: ["Next.js", "REST APIs", "Auth"], image: "/images/newvana.png", live: "https://newvana.vercel.app/", repo: "#", },
    { title: "Sansaino", description: "Global talent marketplace with categorized grids, in-platform chat, milestones and EOR compliance.", category: "Next.js", stack: ["Next.js", "Carousels", "Payments"], image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=900", live: "#", repo: "#", },
    { title: "Dine Albania", description: "Dining discovery site with dual-theme toggle, i18n internationalization and Google Maps integration.", category: "Next.js", stack: ["Next.js", "i18next", "Google Maps"], image: "/images/armando-web.png", live: "https://armando-web.vercel.app/", repo: "#", },
    { title: "Dental Source", description: "Order-management app with multi-step form wizard, STL/OBJ drag-and-drop uploads and validation.", category: "Next.js", stack: ["Next.js", "File Upload", "Forms"], image: "/images/dental-source.png", live: "https://dental-source.vercel.app/en/login", repo: "#", },
    { title: "Improself", description: "Marketing site with GSAP-driven animations and fully responsive, visually rich UI.", category: "React", stack: ["React", "GSAP", "Responsive"], image: "/images/improself.png", live: "https://zaki-web-seven.vercel.app/", repo: "#", },
    { title: "OutriderX", description: "Performance-tuned WordPress build with custom theming and a modern marketing experience.", category: "WordPress", stack: ["WordPress", "PHP", "Custom Theme"], image: "/images/outriderx.png", live: "https://outriderx.com", repo: "#", },
    { title: "HQPT", description: "Corporate WordPress website with bespoke blocks, animations and optimized Core Web Vitals.", category: "WordPress", stack: ["WordPress", "ACF", "SEO"], image: "/images/hqpt.png", live: "https://hqpt.com", repo: "#", },
    { title: "The Mindful C", description: "Editorial WordPress site with elegant typography, calm UX and content-first layout.", category: "WordPress", stack: ["WordPress", "Gutenberg", "Editorial"], image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=900", live: "https://themindfulc.com", repo: "#", },
    { title: "Lampo Shop", description: "Multi-lingual WooCommerce storefront with product catalog, cart and checkout flow.", category: "WordPress", stack: ["WordPress", "WooCommerce", "i18n"], image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=900", live: "https://en.lamposhop.com", repo: "#", },
    { title: "Anphie Jewels", description: "Luxury jewelry WooCommerce store with refined product galleries and premium aesthetic.", category: "WordPress", stack: ["WordPress", "WooCommerce", "Luxury UI"], image: "/images/anphiejewels.png", live: "https://anphiejewels.com", repo: "#", },
    { title: "Rightways", description: "Corporate WordPress website with services, case studies and lead-generation flows.", category: "WordPress", stack: ["WordPress", "Elementor", "Forms"], image: "/images/rightways.png", live: "https://rightways.com", repo: "#", },];
export function Projects() {
    const root = useRef(null);
    const grid = useRef(null);
    const [filter, setFilter] = useState("All");

    const visible =
        filter === "All"
            ? PROJECTS
            : PROJECTS.filter((p) => p.category === filter);

    // FIRST LOAD ANIMATION
    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(".filter-btn", {
                scrollTrigger: {
                    trigger: root.current,
                    start: "top 80%",
                },
                y: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.05,
            });
        }, root);

        return () => ctx.revert();
    }, []);

    // FILTER CHANGE ANIMATION (FIXED VERSION)
    useEffect(() => {
        if (!grid.current) return;

        const cards = grid.current.querySelectorAll(".project-card");

        // kill old animations
        gsap.killTweensOf(cards);

        // reset state properly
        gsap.set(cards, {
            opacity: 0,
            y: 30,
            scale: 1,
        });

        // animate fresh
        gsap.to(cards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            stagger: 0.05,
            ease: "power3.out",
        });
    }, [filter]);

    return (
        <section ref={root} id="projects" className="relative py-28">
            <div className="container mx-auto px-6">
                <SectionHeading
                    eyebrow="Selected work"
                    title="Projects"
                    subtitle="A curated set of recent builds across Next.js, React and WordPress."
                />

                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {FILTERS.map((f) => {
                        const count =
                            f === "All"
                                ? PROJECTS.length
                                : PROJECTS.filter((p) => p.category === f).length;

                        const active = filter === f;

                        return (
                            <button
                                key={f}
                                onClick={() => setFilter(f)}
                                className={`filter-btn inline-flex items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${active
                                    ? "bg-primary text-primary-foreground glow-ring"
                                    : "glass hover:bg-accent"
                                    }`}
                            >
                                {f}
                                <span
                                    className={`text-xs rounded-full px-2 py-0.5 ${active
                                        ? "bg-primary-foreground/20"
                                        : "bg-foreground/10"
                                        }`}
                                >
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>

                {/* GRID / MOBILE CAROUSEL */}
                <PhotoProvider>

                    <div
                        ref={grid}
                        className="
    flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory
    sm:grid sm:grid-cols-2 sm:overflow-visible
    lg:grid-cols-3
    scrollbar-hide
  "
                    >
                        {visible.map((p) => (
                            <div
                                key={`${p.category}-${p.title}`}
                                className="
        project-card
        min-w-[85%] snap-center
        sm:min-w-0
      "
                            >
                                <ProjectCard project={p} />
                            </div>
                        ))}


                    </div>
                </PhotoProvider>
            </div>
        </section>
    );
}