import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading } from "@/components/site/primitives";
import { Ecosystem } from "@/components/site/Ecosystem";
import { Stats } from "@/components/site/Stats";
import { ClosingCta } from "@/components/site/ClosingCta";

const title = "ProtoArena Esports & Youth Ecosystem | ProtoTech";
const description =
  "ProtoArena is ProtoTech's hybrid tournament and slot booking platform for Speed Chess, Ludo, Carrom and 8-Ball Pool, alongside the STEM academy, career advisory and wellness wing.";

const games = [
  { name: "Speed Chess", detail: "Rapid and blitz brackets with live ranked ladders." },
  { name: "Ludo Masters", detail: "Casual and VIP tournaments with sponsored prize pools." },
  { name: "Carrom Cup", detail: "Local championship series with streamed finals." },
  { name: "8-Ball Pool", detail: "Slot-based knockout events for club and solo players." },
];

export const Route = createFileRoute("/arena")({
  component: ArenaPage,
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

function ArenaPage() {
  return (
    <PageShell>
      <Section>
        <SectionHeading
          label="Competitive Titles"
          title="Games in the"
          highlight="Arena"
          description="Slots System • Free & VIP Brackets • Live Streamed Finals"
        />
        <div className="mt- grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {games.map((game) => (
            <article
              key={game.name}
              className="rounded-3xl border border-border bg-background p-8 transition-colors hover:border-brand"
            >
              <h3 className="text-lg font-semibold text-foreground">{game.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{game.detail}</p>
            </article>
          ))}
        </div>
      </Section>
      <Ecosystem />
      <ClosingCta />
    </PageShell>
  );
}
