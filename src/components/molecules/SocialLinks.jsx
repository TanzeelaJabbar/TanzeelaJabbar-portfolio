import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

const links = [
  { icon: FaGithub, href: "https://github.com/tanzeelajabbar", label: "GitHub" },
  { icon: FaLinkedin, href: "https://linkedin.com/in/tanzeelajabbar/", label: "LinkedIn" },
  { icon: MdEmail, href: "mailto:tanzeela.dev@gmail.com", label: "Email" },
  { icon: MdPhone, href: "tel:+923071343345", label: "Phone" },
];

export function SocialLinks() {
  return (
    <div className="flex gap-3">
      {links.map(({ icon: Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="glass rounded-full p-3 hover:scale-110 hover:text-primary transition-all duration-300"
        >
          <Icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
}