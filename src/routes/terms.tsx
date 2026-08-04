import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, TextLink } from "@/components/site/primitives";

const title = "Terms of Service | ProtoTech";
const description =
  "Terms governing use of ProtoTech's website, services, applications and community platforms.";

export const Route = createFileRoute("/terms")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
});

function TermsPage() {
  return (
    <PageShell>
      <PageHero
        label="Terms of Service"
        title="Website terms and"
        highlight="conditions"
        description="Read the rules that apply when using ProtoTech websites, products and community services."
      />

      <Section>
        <SectionHeading
          label="Agreement"
          title="Using ProtoTech"
          highlight="services"
          description="By accessing our site or using our services you agree to these terms."
        />

        <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
          <article>
            <h3 className="text-lg font-semibold text-foreground">Scope</h3>
            <p className="mt-3">
              These Terms govern your access to and use of ProtoTech websites, applications, services and content
              (collectively, the “Services”). If you sign a separate agreement with ProtoTech, that agreement
              controls for the applicable commercial services.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Accounts and eligibility</h3>
            <p className="mt-3">
              Where an account is required, you must provide accurate information and keep your credentials
              secure. You are responsible for activity under your account and must be authorized to accept
              these terms on behalf of any organization you represent.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Acceptable use</h3>
            <p className="mt-3">
              You agree not to misuse the Services. Prohibited conduct includes unlawful activity, interfering
              with platform operations, reverse engineering, and uploading malicious content.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Intellectual property</h3>
            <p className="mt-3">
              ProtoTech and its licensors retain all rights, title and interest in the Services and content we provide.
              You may not copy, modify, or create derivative works based on our content except as expressly permitted.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Privacy and cookies</h3>
            <p className="mt-3">
              Our <TextLink to="/privacy-policy">Privacy Policy</TextLink> and <TextLink to="/cookie-policy">Cookie Policy</TextLink>
              describe how we collect and use information. By using the Services you consent to those practices.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Disclaimers</h3>
            <p className="mt-3">
              THE SERVICES ARE PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND, TO THE MAXIMUM EXTENT PERMITTED
              BY APPLICABLE LAW. PROTOTECH DISCLAIMS ALL IMPLIED WARRANTIES INCLUDING MERCHANTABILITY,
              FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Limitation of liability</h3>
            <p className="mt-3">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, PROTOTECH'S LIABILITY FOR DIRECT DAMAGES IS LIMITED TO
              REASONABLE FEES PAID IN THE PRIOR 12 MONTHS (IF APPLICABLE). WE ARE NOT LIABLE FOR INDIRECT,
              SPECIAL, INCIDENTAL OR CONSEQUENTIAL DAMAGES.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Governing law</h3>
            <p className="mt-3">
              These Terms are governed by the laws of the jurisdiction where ProtoTech is registered, unless
              otherwise agreed in a separate contract. Any disputes should be raised by contacting support.
            </p>
          </article>

          <article>
            <h3 className="text-lg font-semibold text-foreground">Changes</h3>
            <p className="mt-3">
              We may modify these Terms and will post updates on this page. Continued use of the Services
              after changes indicates your acceptance of the updated Terms.
            </p>
          </article>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          label="Contact"
          title="Questions about"
          highlight="these terms"
          description="Reach out if you need clarification or a commercial agreement."
        />
        <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
          For inquiries email <a href="mailto:prototechsolution.pk@gmail.com" className="text-brand-deep">prototechsolution.pk@gmail.com</a>.
        </p>
      </Section>
    </PageShell>
  );
}
