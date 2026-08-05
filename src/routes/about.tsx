import { createFileRoute } from "@tanstack/react-router";

import { PageShell } from "@/components/site/PageShell";
import { PageHero, Section, SectionHeading, PillLink, TextLink } from "@/components/site/primitives";
import { Linkedin, Github } from "lucide-react";
import { ClosingCta } from "@/components/site/ClosingCta";
import { Reveal } from "@/components/site/Reveal";

const title = "About ProtoTech | Vision, Team & Impact";
const description =
  "ProtoTech builds resilient digital products, student internships and esports ecosystems with trust-first engineering, mentorship and career-ready skill development.";

const storyItems = [
  {
    title: "Trusted engineering partners",
    detail:
      "We deliver managed software, enterprise platforms and campaign-grade digital products for startups, schools and healthcare organizations.",
  },
  {
    title: "Hybrid student mentorship",
    detail:
      "University and school learners join live product teams, ship real features and deepen skills under senior engineers.",
  },
  {
    title: "Community-first mindset",
    detail:
      "ProtoTech blends local coaching, tournament events and placement support to create long-term momentum for learners.",
  },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:image", content: "/favicon.png" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

function AboutPage() {
  return (
    <PageShell>
      <PageHero
        label="About ProtoTech"
        title="Turning ideas into resilient digital experiences"
        highlight="with people-first engineering"
        description="We combine product-grade software, internship mentorship and esports community building across Pakistan's next generation of creators and founders."
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <SectionHeading
              label="Our Story"
              title="Built for agile teams and curious learners"
              highlight="who want to grow"
              description="From enterprise product design to student pathways and casual esports, our work is guided by real outcomes, practical learning and strong local partnerships."
            />
            <div className="mt-10 space-y-6 text-sm leading-relaxed text-muted-foreground">
              <p>
                ProtoTech started as an engineering studio with a simple goal: bridge the gap between academic knowledge and the demands of modern tech teams. Today, we serve clients, mentor students and launch community experiences that help every learner ship work with confidence.
              </p>
              <p>
                Our team blends software architects, product designers and campus mentors who coach with empathy and deliver every program with the same operational excellence as our enterprise platforms.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PillLink to="/courses" variant="solid">
                Explore Academy
              </PillLink>
              <PillLink to="/internship" variant="outline">
                Join Internship
              </PillLink>
            </div>
          </div>
          <Reveal className="overflow-hidden rounded-[2rem] border border-border bg-background shadow-lg shadow-black/5">
            <img
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80"
              alt="Team collaborating on a product roadmap"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          label="Vision & Values"
          title="Engineering with"
          highlight="learning at the center"
          description="We design products and programs that are simple, scalable and built to create measurable impact for businesses and students alike."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {storyItems.map((item) => (
            <Reveal key={item.title} className="rounded-3xl border border-border bg-background p-8">
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <Reveal className="rounded-[2rem] overflow-hidden border border-border bg-background shadow-lg shadow-black/5">
            <img
              src="https://images.unsplash.com/photo-1522199710521-72d69614c702?auto=format&fit=crop&w=1200&q=80"
              alt="Product team sharing feedback and ideas"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </Reveal>
          <div className="flex flex-col justify-center gap-6">
            <SectionHeading
              label="Why ProtoTech"
              title="A partner for"
              highlight="growth and execution"
              description="We move quickly, keep things practical and help founders, educators and teams build reliably without complexity."
            />
            <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                Our work is rooted in fast feedback loops, live product delivery and educational support that keeps every participant moving toward tangible outcomes.
              </p>
              <p>
                Across tech services, training and community platforms, we keep every experience high-quality, human-centered and easy to join.
              </p>
            </div>
            <TextLink to="/solutions">See our solutions</TextLink>
          </div>
        </div>
      </Section>

      <Section className="bg-surface">
        <SectionHeading
          label="Culture & Community"
          title="Built around"
          highlight="mentorship and momentum"
          description="We create programs, tournaments and project spaces that help people learn faster, collaborate better and stay excited about technology."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <Reveal className="rounded-3xl border border-border bg-background p-8">
            <h3 className="text-lg font-semibold text-foreground">Mentor-led learning</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Every internship and course includes direct mentor feedback, real client problems and weekly checkpoints so students learn by doing.
            </p>
          </Reveal>
          <Reveal className="rounded-3xl border border-border bg-background p-8">
            <h3 className="text-lg font-semibold text-foreground">Events and ecosystem</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              From ProtoArena tournament slots to career readiness sessions, our community calendar brings learners and professionals together.
            </p>
          </Reveal>
        </div>
      </Section>

      <Section>
        <SectionHeading
          label="Leadership & Craft"
          title="Meet the"
          highlight="team"
          description="A compact leadership crew with deep delivery experience in software, education and gaming ecosystems."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              name: "Ahsan Khan",
              role: "Founder & Lead Architect",
              focus: "Enterprise systems, product strategy and team enablement.",
              image: "/team/ahsan.jpg",
              linkedin: "https://www.linkedin.com/in/ahsan-khan",
              github: "https://github.com/ahsankhan",
            },
            {
              name: "Sana Iqbal",
              role: "Program Director",
              focus: "Internship mentoring, academy curriculum and community engagement.",
              image: "/team/sana.jpg",
              linkedin: "https://www.linkedin.com/in/sana-iqbal",
              github: "https://github.com/sana-iqbal",
            },
            {
              name: "Bilal Ahmed",
              role: "Head of Growth",
              focus: "Partnerships, esports operations and student outreach.",
              image: "/team/bilal.jpg",
              linkedin: "https://www.linkedin.com/in/bilal-ahmed",
              github: "https://github.com/bilalahmed",
            },
            {
              name: "Zara Malik",
              role: "Design Lead",
              focus: "Human-centered UI, branding and digital campaign experiences.",
              image: "/team/zara.jpg",
              linkedin: "https://www.linkedin.com/in/zara-malik",
              github: "https://github.com/zaramalik",
            },
          ].map((member) => (
            <Reveal key={member.name} className="rounded-3xl border border-border bg-background p-8 text-center">
              <div className="mx-auto h-24 w-24 overflow-hidden rounded-full">
                <img
                  src={member.image}
                  alt={member.name}
                  className="h-full w-full object-cover"
                  onError={(e) => ((e.currentTarget as HTMLImageElement).src = "/prototech-logo.png")}
                />
              </div>
              <p className="mt-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted-foreground">{member.role}</p>
              <h3 className="mt-2 text-xl font-semibold text-foreground">{member.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{member.focus}</p>
              <div className="mt-4 flex items-center justify-center gap-3">
                <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand">
                  <Linkedin size={18} />
                </a>
                <a href={member.github} target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-brand">
                  <Github size={18} />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>
      <ClosingCta />
    </PageShell>
  );
}
