import { Pill, PillLink } from "./primitives";
import { Reveal } from "./Reveal";

function WaveBackdrop() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 1440 420"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-x-0 top-1/3 h-64 w-full"
    >
      {[0, 18, 36, 54, 72].map((offset, i) => (
        <path
          key={offset}
          d={`M0 ${190 + offset} C 260 ${110 + offset}, 500 ${300 + offset}, 760 ${210 + offset} S 1200 ${100 + offset}, 1440 ${180 + offset}`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          className={i % 2 === 0 ? "text-brand/40" : "text-brand-deep/25"}
        />
      ))}
    </svg>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32">
      <WaveBackdrop />
      <Reveal className="relative mx-auto max-w-3xl text-center">
        <Pill>Trusted by 100+ enterprises</Pill>
        <p className="mt-8 text-xl font-medium text-muted-foreground md:text-2xl">Welcome to ProtoTech</p>
        <h1 className="mt-3 text-4xl leading-tight font-semibold text-foreground md:text-6xl">
          Your Trusted <span className="text-brand-deep">IT Partner</span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          We engineer and manage resilient technology ecosystems that empower modern businesses to
          operate securely and efficiently.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <PillLink href="#contact" variant="outline">
            Free Consultation
          </PillLink>
          <PillLink to="/solutions">Our Services</PillLink>
        </div>
      </Reveal>
    </section>
  );
}