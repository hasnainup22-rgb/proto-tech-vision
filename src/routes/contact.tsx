import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, PillLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";

const title = "Contact ProtoTech | Get in touch";
const description =
  "Contact ProtoTech for software services, internships, courses, and ecosystem support. Share your details and we will reach out quickly.";

const contactDetails = [
  {
    title: "Email",
    value: "prototechsolution.pk@gmail.com",
    href: "mailto:prototechsolution.pk@gmail.com",
  },
  {
    title: "Phone",
    value: "+92 312 0516684",
    href: "tel:+923120516684",
  },
  {
    title: "WhatsApp",
    value: "+92 312 0516684",
    href: "https://wa.me/923120516684",
  },
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
      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="rounded-[2rem] border border-border bg-background p-8 shadow-sm shadow-black/5">
            <SectionHeading
              label="Contact form"
              title="Apply for"
              highlight="services or solutions"
              description="Tell us the basic details and the service you need. We’ll get back to you quickly with the best next step."
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
              <div className="grid gap-6 sm:grid-cols-2">
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
                  Project type
                  <select
                    name="solution"
                    className="rounded-3xl border border-border bg-surface px-4 py-3 text-sm text-foreground outline-none transition focus:border-brand focus:ring-2 focus:ring-brand/20"
                  >
                    <option>Choose service</option>
                    <option value="software">Software Solution</option>
                    <option value="internship">Internship Support</option>
                    <option value="training">Training / Course</option>
                    <option value="consulting">Consulting</option>
                  </select>
                </label>
              </div>
              <label className="flex flex-col gap-2 text-sm text-foreground/90">
                Message
                <textarea
                  name="message"
                  rows={5}
                  placeholder="Briefly describe what you need and your timeline."
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

          <Reveal className="rounded-[2rem] border border-border bg-surface p-0 overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=900&q=80"
              alt="Team collaborating over a contact inquiry"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          label="Direct contact"
          title="Reach us by"
          highlight="email, phone or WhatsApp"
          description="Choose the best way to connect and send your inquiry directly to our team."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {contactDetails.map((contact) => (
            <Reveal
              key={contact.title}
              className="rounded-3xl border border-border bg-background p-8 text-center"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {contact.title}
              </p>
              <a
                href={contact.href}
                className="mt-5 block text-xl font-semibold text-brand-deep transition hover:text-brand"
              >
                {contact.value}
              </a>
            </Reveal>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
