import { Heart } from "lucide-react";
import { SocialLinks } from "../molecules/SocialLinks";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-display text-lg font-bold">
          <span className="text-gradient">tan</span>zeela
        </p>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-foreground transition-colors">{l.label}</a>
          ))}
        </nav>
        <SocialLinks />
      </div>
      <div className="container mx-auto px-6 mt-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-muted-foreground">
        <p>© {new Date().getFullYear()} Tanzeela Jabbar. All rights reserved.</p>
        <p className="inline-flex items-center gap-1.5">
          Designed & Developed By  Tanzeela <Heart className="h-3 w-3 text-primary" />
        </p>
      </div>
    </footer>
  );
}
