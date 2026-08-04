import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { Products } from "@/components/site/Products";
import { TechStack } from "@/components/site/TechStack";
import { Testimonials } from "@/components/site/Testimonials";
import { ClosingCta } from "@/components/site/ClosingCta";

const title = "Solutions & Enterprise Products | ProtoTech";
const description =
  "ProtoTech solutions: Hospital Management from PKR 5K/mo, School Management from PKR 15/student, HR Management from PKR 4K/mo, built on Node.js, Python, ASP.NET Core and more.";

const images = [
  {
    title: "Hospital Management Dashboard",
    description: "Clean patient workflow views with appointment tracking and analytics.",
    src: "https://images.unsplash.com/photo-1581092337745-0dfec6920f5f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "School Operations Portal",
    description: "Student, fee, and attendance controls designed for administrators.",
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Team Collaboration Workspace",
    description: "Modern operations interfaces for HR and service delivery teams.",
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
  },
];

export const Route = createFileRoute("/solutions")({
  component: SolutionsPage,
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

function SolutionsPage() {
  return (
    <PageShell>
      <PageHero
        label="Product Offers"
        title="Software built to run your daily operations with"
        highlight="confidence"
        description="Enterprise platforms and engineering services for healthcare, education and business operations — engineered and managed as resilient technology ecosystems."
      />
      <Section>
        <SectionHeading
          label="Solution Screenshots"
          title="Visualizing"
          highlight="real workflows"
          description="Explore sample interfaces and dashboards from our product offerings, designed for clarity and operational speed."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {images.map((image) => (
            <article key={image.title} className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={image.src} alt={image.title} className="h-56 w-full object-cover" loading="lazy" />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-foreground">{image.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{image.description}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <Products />
      <TechStack />
      <Testimonials />
      <ClosingCta />
    </PageShell>
  );
}
