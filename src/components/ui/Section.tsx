import { richText } from "@/lib/richText";

/** Page-width container with the Figma side gutters (96px on desktop). */
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1440px] px-5 sm:px-10 lg:px-24 ${className}`}>{children}</div>;
}

/** Small uppercase label, e.g. "01 / ABOUT". */
export function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`text-xs font-semibold uppercase tracking-[var(--tracking-label)] ${light ? "text-white/70" : "text-muted"}`}>
      {children}
    </p>
  );
}

/** Large serif heading. Supports "\n" and {accent} markup from content/site.ts. */
export function SectionHeading({ children, as: Tag = "h2", className = "" }: { children: string; as?: "h1" | "h2"; className?: string }) {
  return <Tag className={`display text-[52px] sm:text-[72px] lg:text-[88px] ${className}`}>{richText(children)}</Tag>;
}
