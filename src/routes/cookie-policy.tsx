import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, TextLink } from "@/components/site/primitives";

const title = "Cookie Policy | ProtoTech";
const description =
  "Learn how ProtoTech uses cookies and similar technologies to improve your experience and support our website. ";

export const Route = createFileRoute("/cookie-policy")({
  component: CookiePolicyPage,
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

function CookiePolicyPage() {
  return (
    <PageShell>
      <PageHero
        label="Cookie Policy"
        title="How ProtoTech"
        highlight="uses cookies"
        description="Understand which cookies we use, why we use them, and how they support your browsing experience."
      />
      <Section>
        <SectionHeading
          label="Cookie use"
          title="Functional and"
          highlight="analytics cookies"
          description="Cookies help our website remember preferences and understand usage patterns for better performance."
        />
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <article>
            <h3 className="text-lg font-semibold text-foreground">Essential cookies</h3>
            <p className="mt-3">
              These cookies are necessary for the website to function. They support navigation, security, and form submissions.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Preference cookies</h3>
            <p className="mt-3">
              Preference cookies remember settings like theme preferences so your experience remains consistent on return visits.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Analytics cookies</h3>
            <p className="mt-3">
              Analytics cookies help us understand how visitors use the site so we can improve performance and content.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Managing cookies</h3>
            <p className="mt-3">
              You can manage cookies through your browser settings. Disabling some cookies may affect site features and performance.
            </p>
          </article>
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          label="Need assistance"
          title="Questions about"
          highlight="cookies"
          description="Contact us if you want details about how ProtoTech handles cookie data."
        />
        <TextLink to="/contact">Contact us</TextLink>
      </Section>
    </PageShell>
  );
}
