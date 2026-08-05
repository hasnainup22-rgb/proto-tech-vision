import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, PillLink } from "@/components/site/primitives";
import { Reveal } from "@/components/site/Reveal";
import { Server, BookOpen, Users, Smartphone, Megaphone } from "lucide-react";

const title = "Our Services | ProtoTech IT & Academy";
const description =
  "Explore ProtoTech's managed IT solutions, digital products, internship placement and training services. Choose the service that fits your needs.";

const services = [
  {
    title: "Hospital Management System",
    detail: "Patient records, billing, pharmacy and diagnostics workflows tailored for hospitals.",
    image:
      "https://images.unsplash.com/photo-1586773860416-8a6f6f9b7b93?auto=format&fit=crop&w=1200&q=80",
    icon: <Server size={18} />,
  },
  {
    title: "School & Education Platform",
    detail: "Student data, fees, attendance and exams all managed from a single dashboard.",
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1200&q=80",
    icon: <BookOpen size={18} />,
  },
  {
    title: "HR & Employee Operations",
    detail: "Payroll, leave, attendance and self-service for modern teams and offices.",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
    icon: <Users size={18} />,
  },
  {
    title: "Web & Mobile Product Delivery",
    detail: "Custom web apps, e-commerce, and mobile experiences built for growth.",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80",
    icon: <Smartphone size={18} />,
  },
  {
    title: "Digital Marketing & Campaigns",
    detail: "Brand growth, social media campaigns and analytics support for busy teams.",
    image:
      "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=1200&q=80",
    icon: <Megaphone size={18} />,
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
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
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <PageShell>
      <PageHero
        label="Our Services"
        title="Solutions for"
        highlight="businesses and learners"
        description="Managed IT products, internship pathways, training programs and digital marketing solutions designed to move your organization forward."
      />
      <Section>
        <SectionHeading
          label="Service lineup"
          title="What we offer"
          highlight="at ProtoTech"
          description="From enterprise platforms to practical education, these services help you build better technology, faster."
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {services.map((service) => (
            <Reveal
              key={service.title}
              className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <img
                src={service.image}
                alt={service.title}
                className="h-64 w-full object-cover"
                loading="lazy"
                crossOrigin="anonymous"
              />
              <div className="p-8">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 flex items-center justify-center rounded-full bg-transparent text-brand">
                    {service.icon}
                  </div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                    Service
                  </p>
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-foreground">{service.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.detail}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          label="How it works"
          title="Choose a service"
          highlight="and start"
          description="Pick the best service for your team or career track, then contact us to finalize the details."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            { title: "Discover", detail: "Choose a service that matches your needs." },
            { title: "Discuss", detail: "Share your goals and timeline with our team." },
            { title: "Deliver", detail: "Receive a proposal and begin execution quickly." },
          ].map((step) => (
            <Reveal key={step.title} className="rounded-3xl border border-border bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.detail}</p>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3">
          <PillLink to="/contact">Contact sales</PillLink>
          <PillLink to="/apply-internship" variant="outline">
            Apply for internship
          </PillLink>
        </div>
      </Section>
    </PageShell>
  );
}
