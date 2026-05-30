import { ExternalLink, GitHub } from "lucide-react";
import { Pill } from "@/components/atoms/Pill";
import { PhotoView } from "react-photo-view";

export function ProjectCard({ project }) {
  return (
    <article className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 hover:glow-ring transition-all duration-500 flex flex-col">

      {/* IMAGE */}
      <PhotoView src={project?.image}>
        <div className="relative aspect-[16/10] overflow-hidden bg-accent cursor-pointer">
          <div
            className="absolute inset-0 bg-gradient-to-br from-lavender-300 to-lavender-400 group-hover:scale-110 transition-transform duration-700"
            style={{
              backgroundImage: `url(${project.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
        </div>
      </PhotoView>

      {/* CONTENT */}
      <div className="p-6 flex-1 flex flex-col">

        <h3 className="text-xl font-semibold mb-2">
          {project.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 flex-1">
          {project.description}
        </p>

        {/* STACK */}
        <div className="flex flex-wrap gap-2 mb-5">
          {project.stack.map((s) => (
            <Pill key={s}>{s}</Pill>
          ))}
        </div>

        {/* LINKS */}
        <div className="flex gap-3">

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:scale-105 transition-transform"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Live
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full glass px-4 py-2 text-sm font-medium hover:scale-105 transition-transform"
          >
            {/* <GitHub className="h-3.5 w-3.5" /> */}
            Code
          </a>

        </div>
      </div>
    </article>
  );
}