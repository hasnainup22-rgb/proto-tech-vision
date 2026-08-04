import { Link } from "@tanstack/react-router";

import logoAsset from "@/assets/prototech-logo.png.asset.json";

const navItems = [
  { label: "Home", to: "/" },
  { label: "Internship", to: "/internship" },
  { label: "Courses", to: "/courses" },
  { label: "Solutions", to: "/solutions" },
  { label: "Arena", to: "/arena" },
] as const;

export function SiteHeader() {
  return (
    <header className="px-5 pt-6">
      <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-background/90 px-5 py-3 backdrop-blur">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="ProtoTech Solution logo" className="h-11 w-11 object-contain" />
          <span className="font-display text-lg leading-none font-semibold tracking-tight text-foreground">
            Proto<span className="text-brand">Tech</span>
            <span className="block text-[10px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              Solution
            </span>
          </span>
        </Link>

        <nav className="flex w-full flex-wrap items-center gap-x-5 gap-y-2 lg:w-auto lg:gap-7">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{ className: "text-brand-deep font-semibold" }}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-deep"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          hash="contact"
          className="rounded-full bg-brand-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand"
        >
          Contact Us
        </Link>
      </div>
    </header>
  );
}
