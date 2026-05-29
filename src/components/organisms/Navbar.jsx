"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/atoms/ThemeToggle";

const nav = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const ref = useRef(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    gsap.from(ref.current, {
      y: -40,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
    });
  }, []);

  return (
    <header
      ref={ref}
      className="fixed top-4 left-1/2 z-50 w-[min(96%,1100px)] -translate-x-1/2"
    >
      <div className="glass-strong rounded-2xl px-5 py-3">
        
        {/* Top Bar */}
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-lg font-bold tracking-tight"
          >
            <span className="text-gradient">Tan</span>zeela
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7 text-sm">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">
            
            {/* Desktop Button */}
            <a
              href="#contact"
              className="hidden sm:inline-flex rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
            >
              Hire me
            </a>

            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(!open)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background/60 backdrop-blur md:hidden"
            >
              {open ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            open ? "max-h-96 pt-5 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="flex flex-col gap-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {n.label}
              </a>
            ))}

            {/* Mobile Hire Me */}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground"
            >
              Hire me
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}