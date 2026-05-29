import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, MapPin, Phone, Send, Check } from "lucide-react";
import { SectionHeading } from "../atoms/SectionHeading";
import { SocialLinks } from "../molecules/SocialLinks";

gsap.registerPlugin(ScrollTrigger);

export function Contact() {
  const root = useRef(null);
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".contact-anim", {
        scrollTrigger: {
          trigger: root.current,
          start: "top 75%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power3.out",
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2500);
    e.target.reset();
  };

  const inputCls =
    "w-full rounded-xl glass-strong border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent transition-all backdrop-blur-md";

  return (
    <section ref={root} id="contact" className="relative py-28 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[500px] w-[500px] rounded-full bg-lavender-400 opacity-30 blur-3xl animate-float-slow" />
      </div>

      <div className="container mx-auto px-6 relative">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something"
          subtitle="Have an idea, project, or role in mind? I'd love to hear about it."
        />

        <div className="grid lg:grid-cols-5 gap-8 max-w-5xl mx-auto">
          {/* INFO CARD */}
          <div className="contact-anim lg:col-span-2 glass-strong rounded-2xl p-8 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent p-2 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="font-medium">tanzeela.dev@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent p-2 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Phone</p>
                  <p className="font-medium">+92 307 1343345</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-accent p-2 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Based in</p>
                  <p className="font-medium">Karachi, Pakistan</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs text-muted-foreground mb-3">Find me online</p>
              <SocialLinks />
            </div>
          </div>

          {/* FORM */}
          <form
            onSubmit={onSubmit}
            className="contact-anim lg:col-span-3 glass-strong rounded-2xl p-8 space-y-4"
          >
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium mb-2">Name</label>
                <input required className={inputCls} placeholder="Jane Doe" />
              </div>

              <div>
                <label className="block text-xs font-medium mb-2">Email</label>
                <input
                  required
                  type="email"
                  className={inputCls}
                  placeholder="jane@studio.com"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium mb-2">Subject</label>
              <input required className={inputCls} placeholder="Project inquiry" />
            </div>

            <div>
              <label className="block text-xs font-medium mb-2">Message</label>
              <textarea
                required
                rows={5}
                className={inputCls + " resize-none"}
                placeholder="Tell me about your project…"
              />
            </div>

            <button
              type="submit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 font-medium hover:scale-105 transition-transform glow-ring"
            >
              {sent ? (
                <>
                  <Check className="h-4 w-4" /> Sent!
                </>
              ) : (
                <>
                  Send message{" "}
                  <Send className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}