import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { Internship } from "@/components/site/Internship";
import { ClosingCta } from "@/components/site/ClosingCta";

const title = "6-Week University Internship Program | ProtoTech";
const description =
  "Hybrid 6-week ProtoTech internship for university students (Semesters 1-8): live client codebases, senior architect mentorship, verified certificate. 2,000 PKR one-time.";

const tracks = [
  {
    name: "Web Engineering Track",
    detail: "MERN, Laravel and WordPress builds on live commercial client projects.",
  },
  {
    name: "Mobile Product Track",
    detail: "React Native and Flutter feature delivery with production release cycles.",
  },
  {
    name: "Backend & Data Track",
    detail: "Node.js, Python and ASP.NET Core services, APIs and database design.",
  },
  {
    name: "Digital Marketing Track",
    detail: "Campaign execution, analytics and content operations for real clients.",
  },
];

const steps = [
  "Apply with your semester details and preferred track",
  "Short screening call with a senior engineer",
  "Pay the 2,000 PKR one-time program fee and get onboarded",
  "Ship work for 6 weeks, then receive certificate & recommendation letter",
];

export const Route = createFileRoute("/internship")({
  component: InternshipPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function InternshipPage() {
  return (
    <PageShell>
      <PageHero
        label="University Student Industry Track"
        title="6-Week University"
        highlight="Internship Program"
        description="Practical industry experience on live commercial client projects under senior engineering mentorship — hybrid, 6 weeks, open to Semesters 1–8."
      />
      <Internship />
      <Section>
        <SectionHeading label="Internship Tracks" title="Choose your" highlight="engineering track" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {tracks.map((track) => (
            <article
              key={track.name}
              className="rounded-3xl border border-border bg-background p-8 transition-colors hover:border-brand"
            >
              <h3 className="text-lg font-semibold text-foreground">{track.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{track.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading label="How It Works" title="Your path from apply to" highlight="certificate" />
        <ol className="mx-auto mt-14 max-w-3xl space-y-5">
          {steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-4 rounded-3xl border border-border bg-background p-6 text-sm leading-relaxed text-foreground/80"
            >
              <span className="font-display text-base font-semibold text-brand-deep">
                {String(index + 1).padStart(2, "0")}
              </span>
              {step}
            </li>
          ))}
        </ol>
      </Section>
      <ClosingCta />
    </PageShell>
  );
}
