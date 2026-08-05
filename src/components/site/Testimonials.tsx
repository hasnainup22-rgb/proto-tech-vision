import { Section, SectionHeading } from "./primitives";
import { Reveal } from "./Reveal";

const reviews = [
  {
    quote:
      "We, ASL, have been working with ProtoTech for more than 4 years. It was the most pleasant experience working with them. They are a dedicated, highly professional, motivated, innovating and client-caring team. We aim to carry on this joint venture in future.",
    name: "COL Iftikhar Ahmad AC",
    org: "Army School of Logistics, Murree",
  },
  {
    quote:
      "We've been working together with ProtoTech for more than 2 years now and it has been a consistently reliable partnership for our hospital systems.",
    name: "Dr Jasim",
    org: "Jinnah International Hospital, Abbottabad",
  },
  {
    quote:
      "ProtoTech has developed an HRMS for us. We are delighted with the product and the responsive support that came with it.",
    name: "M. Azahr",
    org: "Pak Gulf Construction, Islamabad",
  },
];

export function Testimonials() {
  return (
    <Section id="reviews" className="bg-surface">
      <SectionHeading label="Customer Reviews" title="Trusted by" highlight="Real Customers" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((review) => (
          <Reveal
            key={review.name}
            className="flex flex-col rounded-3xl border border-border bg-background p-8"
            direction="bottom"
          >
            <blockquote className="text-sm leading-relaxed text-foreground/80">
              “{review.quote}”
            </blockquote>
            <figcaption className="mt-auto pt-7">
              <p className="text-sm font-semibold text-foreground">{review.name}</p>
              <p className="mt-1 text-xs tracking-wide text-muted-foreground uppercase">{review.org}</p>
            </figcaption>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}