import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, TextLink, PillLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Contact ProtoTech | Get in touch";
const description =
  "Contact ProtoTech for software services, internships, courses, and ecosystem support. Submit your details and we will reach out quickly.";

const solutions = [
  "Hospital Management",
  "School Management",
  "HR Management",
  "Web & Mobile Products",
  "Digital Marketing",
];

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/favicon.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  return (
    <PageShell>
      <PageHero
        label="Talk to Us"
        title="Contact ProtoTech"
        highlight="for solutions and support"
        description="Share your name, email and what solution you are looking for. Our team will contact you to discuss the best path forward."
      />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <Reveal className="rounded-[2rem] border border-border bg-background p-8 shadow-sm shadow-black/5">
            <SectionHeading
              label="Send your request"
              title="Reach our team"
              highlight="today"
              description="Fill in your details and select the solution you need. We reply quickly with a clear next step."
            />
            <form className="mt-10 space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <label className="flex flex-col gap-2 text-sm text-foreground/90">
                  Full name
                  <input
                    name="name"
                    type="text"
                    placeholder="Your full name"
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
              <label className="flex flex-col gap-2 text-sm text-foreground/90">
                Solution
                <select
                  name="solution"
                  className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                >
                  <option>Choose a solution</option>
                  {solutions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
              <label className="flex flex-col gap-2 text-sm text-foreground/90">
                Message
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what you need and your preferred timeline."
                  className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                />
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-3xl bg-brand-deep px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:bg-brand"
              >
                Submit request
              </button>
            </form>
          </Reveal>

          <Reveal className="grid gap-6 rounded-[2rem] border border-border bg-surface p-8">
            <div>
              <h3 className="text-lg font-semibold text-foreground">Need quick support?</h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Email us directly at <span className="text-brand-deep">prototechsolution.pk@gmail.com</span> or call{' '}
                <span className="text-brand-deep">+92 312 0516684</span> for urgent inquiries.
              </p>
            </div>
            <div className="grid gap-4 rounded-3xl border border-border bg-background p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Trusted by
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">100+ clients</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Response time
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">Within 24 hours</p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
                  Available for
                </p>
                <p className="mt-3 text-lg font-semibold text-foreground">Software, internships, courses, and community programs</p>
              </div>
            </div>
            <div className="grid gap-4">
              <img
                src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
                alt="Team collaborating over a contact inquiry"
                className="h-48 w-full rounded-3xl object-cover"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=900&q=80"
                alt="Customer service and startup team discussion"
                className="h-48 w-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
            <div className="rounded-3xl border border-border bg-background p-6 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">What to include in your message</p>
              <ul className="mt-4 space-y-2 list-disc pl-5">
                <li>Project goals and timeline</li>
                <li>Primary challenges you want solved</li>
                <li>Preferred budget or program type</li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          label="Why contact us"
          title="Faster decisions"
          highlight="with clarity"
          description="We help businesses and students pick the best solution quickly by matching the right service to your goals."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {solutions.map((item) => (
            <Reveal
              key={item}
              className="rounded-3xl border border-border bg-background p-8 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand">{item}</p>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Expert guidance on how to implement this solution with real product and internship support.
              </p>
            </Reveal>
          ))}
        </div>
      </Section>
      <div className="px-5 py-16">
        <div className="mx-auto max-w-6xl rounded-[2rem] border border-border bg-background p-10 shadow-lg shadow-black/5">
          <h3 className="text-xl font-semibold text-foreground">Need a tailored proposal?</h3>
          <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Describe your business, timeline and preferred solution when filling the form. We'll share a proposal that matches your needs. If you want, also mention whether you'd like a course, internship or managed product option.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillLink to="/services">View services</PillLink>
            <PillLink to="/apply-internship" variant="outline">
              Apply for internship
            </PillLink>
          </div>
        </div>
      </div>
    </PageShell>
  );
}
