"use client";

import { Navbar } from "@/components/organisms/Navbar";

import { Hero } from "@/components/organisms/Hero";
import About  from "@/components/organisms/About";
import { Experience } from "@/components/organisms/Experience";
import { Projects } from "@/components/organisms/Project";
import { Contact } from "@/components/organisms/Contact";
import { Footer } from "@/components/organisms/Footer";

export function HomeTemplate() {
  return (
    <div className="relative min-h-screen">
      <Navbar />

      <main>
          <Hero />
        <About /> 
        <Experience />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}