import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, TextLink } from "@/components/site/primitives";

const title = "Privacy Policy | ProtoTech";
const description =
  "Read ProtoTech's privacy policy covering data handling, cookies, and how we protect your information when you use our services.";

export const Route = createFileRoute("/privacy-policy")({
  component: PrivacyPolicyPage,
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

function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHero
        label="Privacy Policy"
        title="Your data is"
        highlight="safe with us"
        description="Learn how ProtoTech collects, uses and protects information submitted through our website and services."
      />
      <Section>
        <SectionHeading
          label="Policy overview"
          title="Privacy and"
          highlight="security"
          description="We treat your contact information, project data and browsing activity responsibly."
        />
        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <article>
            <h3 className="text-lg font-semibold text-foreground">Information we collect</h3>
            <p className="mt-3">
              We collect information you provide directly, such as name, email, phone number, project details,
              and internship applications. We also collect analytics data for site performance and usage.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">How we use data</h3>
            <p className="mt-3">
              Data is used to respond to inquiries, offer services, manage applications and improve our website.
              We do not sell personal information to third parties.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Cookies and tracking</h3>
            <p className="mt-3">
              We use cookies to remember preferences, enable navigation and understand how users interact with our site.
              For details, see our <TextLink to="/cookie-policy">Cookie Policy</TextLink>.
            </p>
          </article>
          <article>
            <h3 className="text-lg font-semibold text-foreground">Security</h3>
            <p className="mt-3">
              We store data using secure systems and limit access to authorized team members only.
              If you have questions, contact us at <a href="mailto:prototechsolution.pk@gmail.com" className="text-brand-deep">prototechsolution.pk@gmail.com</a>.
            </p>
          </article>
        </div>
      </Section>
      <Section className="bg-surface">
        <SectionHeading
          label="More options"
          title="Need to update"
          highlight="your data"
          description="If you want to update or remove your information, contact us and we will assist."
        />
        <PillLink to="/contact">Contact support</PillLink>
      </Section>
    </PageShell>
  );
}
