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
      <PageHero
        label="Flagship Platform · Board & Casual Esports"
        title="ProtoArena"
        highlight="Esports"
        description="A hybrid tournament and slot booking platform where players compete in popular casual games for real rankings, sponsored prize pools and local championships."
      />
      <Section>
        <SectionHeading
          label="Competitive Titles"
          title="Games in the"
          highlight="Arena"
          description="Slots System • Free & VIP Brackets • Live Streamed Finals"
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      <Section className="bg-surface">
        <SectionHeading
          label="Platform Experience"
          title="What players"
          highlight="get"
          description="Fast onboarding, live match scoring, coaching support and a safe community space for all skill levels."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Fast Registration",
              description: "Join events and book slots with a few taps on any device.",
            },
            {
              title: "Ranked Matches",
              description: "Compete in skill-based brackets and climb real-time leaderboards.",
            },
            {
              title: "Community Hubs",
              description: "Connect with clubs, practice groups and live tournament rooms.",
            },
            {
              title: "Expert Guidance",
              description: "Receive coaching notes, strategy tips and progress reviews from pros.",
            },
          ].map((feature) => (
            <article
              key={feature.title}
              className="rounded-3xl border border-border bg-background p-8 transition-colors hover:border-brand"
            >
              <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </article>
          ))}
        </div>
      </Section>

      <Ecosystem />
      <Stats />
      <ClosingCta />
    </PageShell>
  );
}
