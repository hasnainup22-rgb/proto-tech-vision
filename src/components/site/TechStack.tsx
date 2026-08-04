import { Section, SectionHeading, PillLink } from "./primitives";

const groups = [
  {
    label: "Servers & Data",
    description: "Strong systems to keep your app running.",
    tech: ["Node.js", "Python", "ASP.NET Core", "Go"],
  },
  {
    label: "Web Engineering",
    description: "Modern interfaces built for speed and scale.",
    tech: ["MERN", "Laravel", "WordPress", "Shopify"],
  },
  {
    label: "Mobile & Product",
    description: "Apps that ship to every screen your users carry.",
    tech: ["React Native", "Flutter", "Android", "iOS"],
  },
];

export function TechStack() {
  return (
    <Section id="tech">
      <SectionHeading
        label="Technology Stack"
        title="Modern"
        highlight="Technologies"
        description="Cutting-edge tools and frameworks that power exceptional digital experiences."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {groups.map((group, index) => (
          <article key={group.label} className="rounded-3xl border border-border bg-background p-8">
            <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {String(index + 1).padStart(2, "0")} / {group.tech.length} technologies
            </p>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{group.label}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{group.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {group.tech.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap justify-center gap-3">
        <PillLink href="#products">Explore Services</PillLink>
        <PillLink href="#contact" variant="outline">
          Book a demo
        </PillLink>
      </div>
    </Section>
  );
}