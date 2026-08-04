import logoAsset from "@/assets/prototech-logo.png.asset.json";

const columns = [
  {
    title: "Company",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#internship" },
      { label: "Services", href: "#tech" },
      { label: "Internship Program", href: "#internship" },
      { label: "ProtoArena & Ecosystem", href: "#ecosystem" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
  {
    title: "Products",
    links: [
      { label: "Hospital Management & Information System", href: "#products" },
      { label: "Human Resource Management", href: "#products" },
      { label: "Employee Self Service Portal", href: "#products" },
      { label: "Attendance Management", href: "#products" },
    ],
  },
  {
    title: "Courses",
    links: [
      { label: "Web Development (MERN / Laravel)", href: "#courses" },
      { label: "Mobile App Development", href: "#courses" },
      { label: "WordPress / Shopify Development", href: "#courses" },
      { label: "Digital Marketing", href: "#courses" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "#contact" },
      { label: "Terms of Service", href: "#contact" },
      { label: "Cookie Policy", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer id="courses" className="scroll-mt-28 border-t border-border bg-surface px-5 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
        <div>
          <div className="flex items-center gap-3">
            <img src={logoAsset.url} alt="ProtoTech Solution logo" className="h-12 w-12 object-contain" />
            <span className="font-display text-lg font-semibold text-foreground">
              Proto<span className="text-brand">Tech</span>
            </span>
          </div>
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Architecting digital futures through premium IT services and elite engineering education.
          </p>
          <div className="mt-6 space-y-2 text-sm">
            <a
              className="block text-brand-deep hover:text-brand"
              href="mailto:prototechsolution.pk@gmail.com"
            >
              prototechsolution.pk@gmail.com
            </a>
            <a className="block text-foreground/80 hover:text-brand-deep" href="tel:+923120516684">
              +92 312 0516684
            </a>
          </div>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h3 className="text-[11px] font-semibold tracking-[0.2em] text-muted-foreground uppercase">
              {column.title}
            </h3>
            <ul className="mt-5 space-y-3">
              {column.links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm leading-snug text-foreground/75 transition-colors hover:text-brand-deep"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-6xl flex-wrap items-center justify-between gap-3 border-t border-border pt-6 text-xs text-muted-foreground">
        <p>© 2026 ProtoTech IT Solutions &amp; Academy. All rights reserved.</p>
        <p className="flex items-center gap-2">
          <span aria-hidden="true" className="size-2 rounded-full bg-brand" />
          System Status: Operational
        </p>
      </div>
    </footer>
  );
}