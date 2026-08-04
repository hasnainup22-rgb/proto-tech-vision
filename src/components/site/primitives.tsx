import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("scroll-mt-28 px-5 py-20 md:py-28", className)}>
      <div className="mx-auto w-full max-w-6xl">{children}</div>
    </section>
  );
}

export function Pill({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] text-accent-foreground uppercase">
      {children}
    </span>
  );
}

export function SectionHeading({
  label,
  title,
  highlight,
  description,
  align = "center",
}: {
  label: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left")}>
      <Pill>{label}</Pill>
      <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
        {title} {highlight ? <span className="text-brand-deep">{highlight}</span> : null}
      </h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{description}</p>
      ) : null}
    </div>
  );
}

export function PillLink({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  return (
    <a
      href={href}
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
        variant === "solid"
          ? "bg-brand-deep text-primary-foreground hover:bg-brand"
          : "border border-border bg-background text-foreground hover:border-brand hover:text-brand-deep",
      )}
    >
      {children}
    </a>
  );
}

export function TextLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep transition-colors hover:text-brand"
    >
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}