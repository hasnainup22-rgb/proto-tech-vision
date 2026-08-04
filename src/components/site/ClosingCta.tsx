import { Pill, PillLink } from "./primitives";

export function ClosingCta() {
  return (
    <section id="contact" className="scroll-mt-28 px-5 py-24">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-surface px-8 py-16 text-center">
        <Pill>Ready to begin?</Pill>
        <h2 className="mt-6 text-3xl font-semibold text-foreground md:text-4xl">
          Let's build something <span className="text-brand-deep">extraordinary.</span>
        </h2>
        <p className="mx-auto mt-5 max-w-xl leading-relaxed text-muted-foreground">
          From first consultation to global deployment, we're with you every step of the way. No
          jargon, no complexity. Just results.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PillLink href="mailto:prototechsolution.pk@gmail.com">Get In Touch</PillLink>
          <PillLink href="#products" variant="outline">
            View Products
          </PillLink>
        </div>
      </div>
    </section>
  );
}