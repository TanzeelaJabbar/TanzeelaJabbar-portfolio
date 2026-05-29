export function Pill({ children }) {
    return (
        <span className="inline-flex items-center rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs font-medium text-secondary-foreground backdrop-blur-md transition-all hover:bg-accent hover:scale-105">
      {children}
    </span>
    );
}