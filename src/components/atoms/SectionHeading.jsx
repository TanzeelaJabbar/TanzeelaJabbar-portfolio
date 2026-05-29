export function SectionHeading({ eyebrow, title, subtitle }) {
  return (
    <div className="text-center mb-14 max-w-2xl mx-auto">
      
      <p className="text-xs uppercase tracking-[0.3em] text-primary mb-3 font-semibold">
        {eyebrow}
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">
        {title}
      </h2>

      {subtitle && (
        <p className="text-muted-foreground text-base md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}