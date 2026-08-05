import { Pill, PillLink } from "./primitives";
import { Reveal } from "./Reveal";

function WaveBackdrop() {
  return (
    <div className="absolute bottom-20 left-0 w-full h-[300px] sm:h-[400px] md:h-[600px] overflow-hidden pointer-events-none">
      <div className="relative w-full overflow-hidden h-[300px] sm:h-[400px] md:h-[600px]">
        <svg
          className="absolute inset-0 w-[200%] h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="none"
            stroke="var(--wave-1)"
            strokeWidth="0.6"
            strokeOpacity="0.9"
            className="animate-wave1"
            d="M0,160  C200,80 400,240 600,160  S1000,240 1200,160  S1600,240 1800,160"
          />
          <path
            fill="none"
            stroke="var(--wave-2)"
            strokeWidth="0.6"
            strokeOpacity="0.75"
            className="animate-wave2"
            d="M0,180  C250,100 500,260 750,180  S1250,260 1500,180  S2000,260 2250,180"
          />
          <path
            fill="none"
            stroke="var(--wave-3)"
            strokeWidth="0.6"
            strokeOpacity="0.6"
            className="animate-wave3"
            d="M0,200  C180,160 420,240 660,200  S1100,260 1320,200  S1760,240 1980,200"
          />
          <path
            fill="none"
            stroke="var(--wave-4)"
            strokeWidth="0.6"
            strokeOpacity="0.5"
            className="animate-wave4"
            d="M0,220  C300,140 600,300 900,220  S1500,300 1800,220  S2100,300 2400,220"
          />
          <path
            fill="none"
            stroke="var(--wave-5)"
            strokeWidth="0.6"
            strokeOpacity="0.45"
            className="animate-wave5"
            d="M0,240  C320,180 640,280 960,240  S1600,280 1920,240  S2240,280 2560,240"
          />
        </svg>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <>
      <section id="home" className="relative overflow-hidden px-5 pt-20 pb-24 md:pt-28 md:pb-32">
      <WaveBackdrop />
      <Reveal className="relative mx-auto max-w-3xl text-center" direction="bottom">
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
            Contact Sales
          </PillLink>
          <PillLink to="/services">
            Explore Services
          </PillLink>
        </div>
      </Reveal>
      </section>
      <div className="border-t border-border" />
    </>
  );
}