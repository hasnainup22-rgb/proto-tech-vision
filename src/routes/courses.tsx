import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, TextLink } from "@/components/site/primitives";
import { ClosingCta } from "@/components/site/ClosingCta";

const title = "Courses & STEM Academy Tracks | ProtoTech";
const description =
  "ProtoTech Academy courses: Web Development (MERN / Laravel), Mobile App Development, WordPress & Shopify, Digital Marketing, plus 3-tier school STEM tracks and career advisory.";

const courses = [
  {
    label: "Professional",
    name: "Web Development (MERN / Laravel)",
    detail: "Full-stack web engineering with modern interfaces built for speed and scale.",
  },
  {
    label: "Professional",
    name: "Mobile App Development",
    detail: "React Native, Flutter, Android and iOS apps that ship to every screen.",
  },
  {
    label: "Professional",
    name: "WordPress / Shopify Development",
    detail: "Commerce and content sites, themes and integrations for real clients.",
  },
  {
    label: "Professional",
    name: "Digital Marketing",
    detail: "Campaigns, analytics and content operations for growing businesses.",
  },
];

const academy = [
  {
    tier: "Class 1–5",
    name: "Little Bytes",
    detail: "Scratch block coding and computational logic foundations.",
  },
  {
    tier: "Class 6–10",
    name: "Code Builders",
    detail: "Python programming and web fundamentals with hands-on projects.",
  },
  {
    tier: "FSc / Inter",
    name: "Future Innovators",
    detail: "AI concepts, Arduino robotics and mobile app development.",
  },
];

export const Route = createFileRoute("/courses")({
  component: CoursesPage,
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

function CoursesPage() {
  return (
    <PageShell>
      <PageHero
        label="Academy & Skill Programs"
        title="Courses that build"
        highlight="working engineers"
        description="Professional development courses for aspiring developers and marketers, plus a practical 3-tier STEM literacy path for school and college students."
      />
      <Section>
        <SectionHeading label="Professional Courses" title="Career-ready" highlight="programs" />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {courses.map((course) => (
            <article
              key={course.name}
              className="flex flex-col rounded-3xl border border-border bg-background p-8 transition-colors hover:border-brand"
            >
              <p className="text-[11px] font-semibold tracking-[0.2em] text-brand uppercase">
                {course.label}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{course.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{course.detail}</p>
              <div className="mt-auto pt-7">
                <TextLink to="/" hash="contact">
                  Enquire About This Course
                </TextLink>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          label="Primary, Matric & FSc STEM"
          title="Youth & Kids"
          highlight="Academy"
          description="Practical 3-tier tech literacy path from Scratch block coding to Python, Arduino robotics and AI mobile app development."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {academy.map((tier) => (
            <article key={tier.name} className="rounded-3xl border border-border bg-background p-8">
              <p className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                {tier.tier}
              </p>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{tier.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{tier.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <ClosingCta />
    </PageShell>
  );
}
