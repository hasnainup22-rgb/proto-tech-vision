import logoAsset from "@/assets/prototech-logo.png.asset.json";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#internship" },
  { label: "Courses", href: "#courses" },
  { label: "Products", href: "#products" },
  { label: "Internship", href: "#internship" },
  { label: "Arena", href: "#ecosystem" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  return (
    <header className="px-5 pt-6">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 rounded-3xl border border-border bg-background/90 px-5 py-3 backdrop-blur">
        <a href="#home" className="flex items-center gap-3">
          <img src={logoAsset.url} alt="ProtoTech Solution logo" className="h-11 w-11 object-contain" />
          <span className="font-display text-lg leading-none font-semibold tracking-tight text-foreground">
            Proto<span className="text-brand">Tech</span>
            <span className="block text-[10px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              Solution
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-brand-deep"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-brand-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand"
        >
          Contact Us
        </a>
      </div>
    </header>
  );
}