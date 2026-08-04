import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

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
      <Reveal className="mx-auto w-full max-w-6xl">{children}</Reveal>
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
  to,
  hash,
  children,
  variant = "solid",
}: {
  href?: string;
  to?: string;
  hash?: string;
  children: ReactNode;
  variant?: "solid" | "outline";
}) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-colors",
    variant === "solid"
      ? "bg-brand-deep text-primary-foreground hover:bg-brand"
      : "border border-border bg-background text-foreground hover:border-brand hover:text-brand-deep",
  );

  if (to) {
    return (
      <Link to={to} {...(hash ? { hash } : {})} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
    </a>
  );
}

export function TextLink({
  href,
  to,
  hash,
  children,
}: {
  href?: string;
  to?: string;
  hash?: string;
  children: ReactNode;
}) {
  const classes =
    "inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep transition-colors hover:text-brand";

  if (to) {
    return (
      <Link to={to} {...(hash ? { hash } : {})} className={classes}>
        {children}
        <span aria-hidden="true">→</span>
      </Link>
    );
  }

  return (
    <a href={href} className={classes}>
      {children}
      <span aria-hidden="true">→</span>
    </a>
  );
}

export function PageHero({
  label,
  title,
  highlight,
  description,
}: {
  label: string;
  title: string;
  highlight?: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-surface px-5 pt-16 pb-20 md:pt-20 md:pb-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <Pill>{label}</Pill>
        <h1 className="mt-6 text-3xl leading-tight font-semibold text-foreground md:text-5xl">
          {title} {highlight ? <span className="text-brand-deep">{highlight}</span> : null}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      </Reveal>
    </section>
  );
}