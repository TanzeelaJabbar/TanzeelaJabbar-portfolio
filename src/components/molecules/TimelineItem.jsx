import { Pill } from "../atoms/Pill";

export function TimelineItem({
  company,
  role,
  period,
  stack,
  description,
  side,
}) {
  return (
    <div
      className={`relative md:grid md:grid-cols-2 md:gap-12 timeline-item ${
        side === "right" ? "md:[&>div:first-child]:col-start-2" : ""
      }`}
    >
      <div
        className={`pl-12 md:pl-0 ${
          side === "right" ? "md:text-left" : "md:text-right"
        }`}
      >
        <div className="glass rounded-2xl p-6 hover:glow-ring transition-all duration-500">
          <p className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
            {period}
          </p>

          <h3 className="text-xl font-semibold">{role}</h3>

          <p className="text-muted-foreground text-sm mb-3">{company}</p>

          <p className="text-sm mb-4">{description}</p>

          <div
            className={`flex flex-wrap gap-2 ${
              side === "right" ? "" : "md:justify-end"
            }`}
          >
            {stack.map((s) => (
              <Pill key={s}>{s}</Pill>
            ))}
          </div>
        </div>
      </div>

      {/* timeline dot */}
      <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-ring border-2 border-background" />
    </div>
  );
}