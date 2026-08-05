import { Reveal } from "./Reveal";
import { Pill } from "./primitives";
import { ArrowRight, Search, Shield, BarChart2, Users, Zap } from "lucide-react";

export function AboutPromo() {
  return (
    <section className="border-b border-border bg-background px-5 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] items-center">
          <div>
            <Pill>ABOUT US</Pill>
            <h2 className="mt-6 text-4xl font-semibold text-foreground md:text-5xl">
              About ProtoTech
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
              Research-driven technology company committed to transparent, outcome-focused digital
              solutions. We combine deep market analysis with technical feasibility to deliver
              solutions that scale.
            </p>
            <div className="mt-8">
              <a
                href="/services"
                className="inline-flex items-center gap-3 rounded-full border border-brand-deep px-5 py-3 text-sm font-semibold text-primary-foreground bg-brand-deep hover:bg-brand transition"
              >
                View our services <ArrowRight size={16} />
              </a>
            </div>
          </div>

          <Reveal className="flex items-center justify-center">
            <img src="/prototech-logo.png" alt="ProtoTech logo" className="w-56 h-56" />
          </Reveal>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-5">
          {[
            { title: "Research-first", desc: "Evidence-based decisions grounded in market analysis.", icon: <Search size={18} /> },
            { title: "Enterprise security", desc: "Security embedded at every layer.", icon: <Shield size={18} /> },
            { title: "Results-driven", desc: "We measure success by tangible operational results.", icon: <BarChart2 size={18} /> },
            { title: "Cross-functional teams", desc: "Experts who work as your dedicated team.", icon: <Users size={18} /> },
            { title: "Future-ready", desc: "Cloud-native, microservices, AI/ML ready.", icon: <Zap size={18} /> },
          ].map((card) => (
            <Reveal key={card.title} className="rounded-2xl border border-border bg-surface p-6 text-center">
              <div className="h-12 w-12 mx-auto rounded-full bg-transparent flex items-center justify-center mb-4">
                <span className="text-brand">{card.icon}</span>
              </div>
              <h4 className="text-sm font-semibold text-foreground">{card.title}</h4>
              <p className="mt-2 text-xs text-muted-foreground">{card.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutPromo;
