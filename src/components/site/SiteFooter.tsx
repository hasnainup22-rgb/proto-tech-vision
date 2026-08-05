import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/prototech-logo.png.asset.json";

const columns = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", to: "/" },
      { label: "About", to: "/about" },
      { label: "Services", to: "/services" },
      { label: "Internship", to: "/internship" },
      { label: "Arena", to: "/arena" },
      { label: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Contact",
    links: [
      { label: "prototechsolution.pk@gmail.com", to: "mailto:prototechsolution.pk@gmail.com" },
      { label: "+92 312 0516684", to: "tel:+923120516684" },
      { label: "Contact Page", to: "/contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="scroll-mt-28 border-t border-border bg-surface px-5 py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="relative flex h-12 w-12 items-center justify-center">
              <img
                src="/ligthLogo.png"
                alt="ProtoTech Solution logo"
                className="h-12 w-12 object-contain dark:hidden"
              />
              <img
                src="/DarkLogo.png"
                alt="ProtoTech Solution logo"
                className="hidden h-12 w-12 object-contain dark:block"
              />
            </div>
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
                  {link.to.startsWith("mailto:") || link.to.startsWith("tel:") ? (
                    <a
                      href={link.to}
                      className="text-sm leading-snug text-foreground/75 transition-colors hover:text-brand-deep"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      to={link.to}
                      {...("hash" in link && link.hash ? { hash: link.hash } : {})}
                      className="text-sm leading-snug text-foreground/75 transition-colors hover:text-brand-deep"
                    >
                      {link.label}
                    </Link>
                  )}
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