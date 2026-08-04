import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero } from "@/components/site/primitives";
import { Products } from "@/components/site/Products";
import { TechStack } from "@/components/site/TechStack";
import { Testimonials } from "@/components/site/Testimonials";
import { ClosingCta } from "@/components/site/ClosingCta";

const title = "Solutions & Enterprise Products | ProtoTech";
const description =
  "ProtoTech solutions: Hospital Management from PKR 5K/mo, School Management from PKR 15/student, HR Management from PKR 4K/mo, built on Node.js, Python, ASP.NET Core and more.";

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
      <Products />
      <TechStack />
      <Testimonials />
      <ClosingCta />
    </PageShell>
  );
}
