import { createFileRoute } from "@tanstack/react-router";

import { SiteHeader } from "@/components/site/SiteHeader";
import { Hero } from "@/components/site/Hero";
import { Internship } from "@/components/site/Internship";
import { AboutPromo } from "@/components/site/AboutPromo";
import { ProtoArenaSection } from "@/components/site/ProtoArenaSection";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Products } from "@/components/site/Products";
import { TechStack } from "@/components/site/TechStack";
import { Testimonials } from "@/components/site/Testimonials";
import { Stats } from "@/components/site/Stats";
import { ClosingCta } from "@/components/site/ClosingCta";
import { SiteFooter } from "@/components/site/SiteFooter";

const title = "ProtoTech Solution | IT Services, Products & Academy";
const description =
  "ProtoTech engineers resilient technology ecosystems: enterprise software, a 6-week university internship program, STEM academy, ProtoArena esports and career advisory.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "ProtoTech IT Solutions & Academy",
          email: "prototechsolution.pk@gmail.com",
          telephone: "+92 312 0516684",
          description,
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stats />
        <AboutPromo />
        <Internship />
        <ProtoArenaSection />
        <Ecosystem />
        <Products />
        <TechStack />
        <Testimonials />
        <ClosingCta />
      </main>
      <SiteFooter />
    </div>
  );
}
