import { Section, SectionHeading, TextLink } from "./primitives";

const initiatives = [
  {
    label: "Flagship Platform · Board & Casual Esports",
    title: "ProtoArena Esports",
    description:
      "Hybrid tournament & slot booking platform where players compete in popular casual games for real rankings, sponsored prize pools, and local championships.",
    items: ["Speed Chess", "Ludo Masters", "Carrom Cup", "8-Ball Pool"],
    note: "Slots System • Free & VIP Brackets • Live Streamed Finals",
    cta: "Book Slot / View Arena",
  },
  {
    label: "Primary, Matric & FSc STEM",
    title: "Youth & Kids Academy",
    description:
      "Practical 3-tier tech literacy path from Scratch block coding to Python, Arduino robotics, and AI mobile app development.",
    items: [
      "Class 1–5 — Little Bytes (Scratch & Logic)",
      "Class 6–10 — Code Builders (Python & Web)",
      "FSc / Inter — Future Innovators (AI & App Dev)",
    ],
    cta: "Explore STEM Tracks",
  },
  {
    label: "Skill & Degree Roadmaps",
    title: "ProtoPath Career Advisory",
    description:
      "Specialized advisory mapping CS, Data Science, AI, and non-traditional tech career transitions for school and college students.",
    items: [
      "Tech Trajectory — CS, Data Science, AI, Cyber Security",
      "Non-Tech Entry — UI/UX, Product & Digital Marketing",
    ],
    cta: "Explore Career Guidance",
  },
  {
    label: "Psychological & Mental Health",
    title: "ProtoMind Wellness Wing",
    description:
      "Structured mental wellness wing for students and young developers offering confidential tele-sessions and stress management.",
    items: [
      "Stress Management — exam anxiety & career burnout",
      "Tele-Sessions — confidential 1-on-1 clinical psychologists",
    ],
    cta: "Discover ProtoMind Support",
  },
];

export function Ecosystem() {
  return (
    <Section id="ecosystem">
      <SectionHeading
        label="Community & Youth Initiatives"
        title="ProtoTech"
        highlight="Ecosystem"
        description="Empowering Pakistani youth, competitive gamers, and emerging developers through STEM education, career guidance, and mental wellness."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {initiatives.map((item) => (
          <article
            key={item.title}
            className="flex flex-col rounded-3xl border border-border bg-background p-8 transition-colors hover:border-brand"
          >
            <p className="text-[11px] font-semibold tracking-[0.16em] text-brand uppercase">
              {item.label}
            </p>
            <h3 className="mt-4 text-xl font-semibold text-foreground">{item.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            <ul className="mt-6 flex flex-wrap gap-2">
              {item.items.map((sub) => (
                <li
                  key={sub}
                  className="rounded-full bg-surface px-3 py-1.5 text-xs font-medium text-secondary-foreground"
                >
                  {sub}
                </li>
              ))}
            </ul>
            {item.note ? (
              <p className="mt-5 text-xs text-muted-foreground">{item.note}</p>
            ) : null}
            <div className="mt-auto pt-7">
              <TextLink href="#contact">{item.cta}</TextLink>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-10 text-center">
        <TextLink href="#contact">Explore All Initiatives</TextLink>
      </div>
    </Section>
  );
}