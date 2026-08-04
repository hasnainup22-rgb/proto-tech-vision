const stats = [
  { value: "100+", label: "Enterprises Served" },
  { value: "6 Weeks", label: "Hybrid Internship" },
  { value: "4+ Years", label: "Longest Partnership" },
  { value: "3 Tiers", label: "STEM Academy Tracks" },
  { value: "4", label: "Ecosystem Initiatives" },
];

export function Stats() {
  return (
    <section className="border-y border-border bg-background px-5 py-16">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="text-center text-2xl font-semibold text-foreground md:text-3xl">
          Our Achievements
        </h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Delivering measurable impact across enterprise IT and engineering education.
        </p>
        <dl className="mt-12 grid grid-cols-2 gap-8 md:grid-cols-5">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <dt className="text-3xl font-semibold text-brand-deep md:text-4xl">{stat.value}</dt>
              <dd className="mt-2 text-xs tracking-wide text-muted-foreground uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}