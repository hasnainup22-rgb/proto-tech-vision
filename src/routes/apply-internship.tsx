import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, PillLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Apply for ProtoTech Internship";
const description =
  "Apply to ProtoTech's hybrid internship with basic university details. Our team will respond with the next steps. ";

const tracks = [
  "Web Engineering",
  "Mobile Product",
  "Backend & Data",
  "Digital Marketing",
];

export const Route = createFileRoute("/apply-internship")({
  component: ApplyInternshipPage,
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

function ApplyInternshipPage() {
  return (
    <PageShell>
      <PageHero
        label="University Internship"
        title="Apply for the"
        highlight="6-week internship"
        description="Submit your details and preferred track. We will review your profile and guide you through the internship onboarding process."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[2rem] border border-border bg-background p-8 shadow-sm shadow-black/5">
            <SectionHeading
              label="Application form"
              title="Start your"
              highlight="internship journey"
              description="Provide your academic details, preferred track and a short note so we can place you in the right program."
            />
            <form className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-foreground/90">
                  Full name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </label>
                <label className="flex flex-col gap-2 text-sm text-foreground/90">
                  Email
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  />
                </label>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-foreground/90">
                  Semester
                  <select
                    name="semester"
                    className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option>Choose semester</option>
                    {Array.from({ length: 8 }, (_, i) => i + 1).map((semester) => (
                      <option key={semester} value={semester}>
                        Semester {semester}
                      </option>
                    ))}
                  </select>
                </label>
                <label className="flex flex-col gap-2 text-sm text-foreground/90">
                  Preferred track
                  <select
                    name="track"
                    className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option>Choose track</option>
                    {tracks.map((track) => (
                      <option key={track} value={track}>
                        {track}
                      </option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-foreground/90">
                Phone number
                <input
                  name="phone"
                  type="tel"
                  placeholder="03XX XXXXXXX"
                  className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm text-foreground/90">
                Tell us about your goals
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Why do you want this internship and what do you hope to learn?"
                  className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-brand-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-brand"
              >
                Submit application
              </button>
            </form>
          </Reveal>
          <Reveal className="grid gap-6 rounded-[2rem] border border-border bg-surface p-8">
            <div>
              <p className="text-sm uppercase tracking-[0.22em] text-muted-foreground">Why join?</p>
              <h3 className="mt-4 text-2xl font-semibold text-foreground">Gain real world experience</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Interns work on live client projects with mentorship from senior engineers and product architects.
              </p>
            </div>
            <div className="grid gap-4 rounded-3xl border border-border bg-background p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Hybrid format</p>
                <p className="mt-2 text-sm text-foreground">Flexible on-site and remote mentor support.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Certificate</p>
                <p className="mt-2 text-sm text-foreground">Receive a verified completion certificate.</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">Career growth</p>
                <p className="mt-2 text-sm text-foreground">Recommendation letters and placement advice.</p>
              </div>
            </div>
            <div className="space-y-4 text-sm text-muted-foreground">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=900&q=80"
                alt="Interns working together with a mentor"
                className="h-48 w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80"
                alt="Student using a laptop during internship"
                className="h-48 w-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          label="Internship highlights"
          title="What you get"
          highlight="from this program"
          description="Key benefits for every student accepted into ProtoTech's internship track."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            "Live client projects",
            "Weekly mentor reviews",
            "Certificate & recommendation",
          ].map((benefit) => (
            <Reveal key={benefit} className="rounded-3xl border border-border bg-background p-8">
              <p className="text-lg font-semibold text-foreground">{benefit}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Detailed mentorship and project delivery experience designed for practical learning.
              </p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <PillLink to="/contact">Contact our team</PillLink>
          <PillLink to="/courses" variant="outline">
            View courses
          </PillLink>
        </div>
      </Section>
    </PageShell>
  );
}
