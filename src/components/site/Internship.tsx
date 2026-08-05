import { Pill, PillLink } from "./primitives";
import { Reveal } from "./Reveal";

const facts = [
  { label: "Duration", value: "6 Weeks Hybrid" },
  { label: "Eligibility", value: "Semesters 1–8" },
  { label: "Program Fee", value: "2,000 PKR (One-Time)" },
];

const benefits = [
  "Work directly on commercial client codebases & production deployments",
  "1-on-1 code reviews & system architecture guidance from senior architects",
  "Earn a verified Certificate of Completion & Performance Recommendation Letter",
];

export function Internship() {
  return (
    <section id="internship" className="scroll-mt-28 bg-surface px-5 py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">
        <Reveal className="rounded-3xl border border-border bg-background p-8" direction="left">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-brand uppercase">
            Live Engineering Sprints
          </p>
          <h3 className="mt-4 text-2xl font-semibold text-foreground">
            Senior Architects Coaching University Interns
          </h3>
          <dl className="mt-8 space-y-5">
            {facts.map((fact) => (
              <div key={fact.label} className="border-b border-border pb-4 last:border-0 last:pb-0">
                <dt className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                  {fact.label}
                </dt>
                <dd className="mt-1 text-lg font-semibold text-brand-deep">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal direction="right">
          <Pill>University Student Industry Track</Pill>
          <h2 className="mt-5 text-3xl font-semibold text-foreground md:text-4xl">
            6-Week University <span className="text-brand-deep">Internship Program</span>
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            Designed for university students (Semesters 1–8) seeking practical industry experience on
            live commercial client projects under senior engineering mentorship.
          </p>
          <ul className="mt-7 space-y-4">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex gap-3 text-sm leading-relaxed text-foreground/80">
                <span aria-hidden="true" className="mt-1 size-2 shrink-0 rounded-full bg-brand" />
                {benefit}
              </li>
            ))}
          </ul>
          <div className="mt-9 flex flex-wrap gap-3">
            <PillLink to="/apply-internship">Apply for Internship</PillLink>
            <PillLink to="/internship" variant="outline">
              View Internship Tracks
            </PillLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}