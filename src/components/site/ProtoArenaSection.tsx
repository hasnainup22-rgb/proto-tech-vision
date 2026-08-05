import { Section, SectionHeading, TextLink } from "./primitives";
import { Reveal } from "./Reveal";

const features = [
  {
    title: "Slot Booking",
    description: "Reserve game slots, register for tournaments, and manage your team directly from the app.",
  },
  {
    title: "Live Leaderboards",
    description: "Track player rankings, event results and performance stats in real time.",
  },
  {
    title: "Community Rooms",
    description: "Join chat-driven match lobbies, club events and feedback sessions with other players.",
  },
  {
    title: "Coach Support",
    description: "Access mentor-led coaching, strategy tips and placement guidance for emerging talent.",
  },
];

export function ProtoArenaSection() {
  return (
    <Section id="protoarena" className="bg-surface">
      <SectionHeading
        label="Featured Platform"
        title="ProtoArena"
        highlight="Experience"
        description="A modern games & events app for booking, rankings and community-led esports activation."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <Reveal
            key={feature.title}
            className="rounded-3xl border border-border bg-background p-8"
            direction="bottom"
          >
            <h3 className="text-lg font-semibold text-foreground">{feature.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
          </Reveal>
        ))}
      </div>
      <div className="mt-10 text-center">
        <TextLink to="/arena">Visit the Arena platform</TextLink>
      </div>
    </Section>
  );
}
