import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Internship", to: "/internship" },
  { label: "Courses", to: "/courses" },
  { label: "Solutions", to: "/solutions" },
  { label: "Arena", to: "/arena" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="px-5 pt-6">
      <div className="relative mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-4 rounded-3xl border border-border bg-background/90 px-5 py-3 backdrop-blur">
        <Link to="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center">
            <img
              src="/ligthLogo.png"
              alt="ProtoTech Solution logo"
              className="h-11 w-11 object-contain dark:hidden"
            />
            <img
              src="/DarkLogo.png"
              alt="ProtoTech Solution logo"
              className="hidden h-11 w-11 object-contain dark:block"
            />
          </div>
          <span className="font-display text-lg leading-none font-semibold tracking-tight text-foreground">
            Proto<span className="text-brand">Tech</span>
            <span className="block text-[10px] font-medium tracking-[0.28em] text-muted-foreground uppercase">
              Solution
            </span>
          </span>
        </Link>

        <nav className="hidden flex-wrap items-center gap-x-5 gap-y-2 lg:flex">
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

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Link
            to="/"
            hash="contact"
            className="hidden rounded-full bg-brand-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand lg:inline-flex"
          >
            Contact Us
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((open) => !open)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-brand hover:text-brand-deep lg:hidden"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isMenuOpen ? (
          <div className="absolute inset-x-0 top-full z-50 mt-3 rounded-3xl border border-border border-t-0 bg-background/95 p-5 shadow-xl shadow-black/10 backdrop-blur-lg lg:hidden">
            <nav className="space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  activeOptions={{ exact: item.to === "/" }}
                  activeProps={{ className: "text-brand-deep font-semibold" }}
                  className="block rounded-2xl px-4 py-3 text-base font-medium text-foreground/90 transition-colors hover:bg-brand/10 hover:text-brand-deep"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <div className="mt-4 flex flex-col gap-3">
              <Link
                to="/"
                hash="contact"
                onClick={() => setIsMenuOpen(false)}
                className="rounded-full bg-brand-deep px-5 py-3 text-center text-sm font-semibold text-primary-foreground transition-colors hover:bg-brand"
              >
                Contact Us
              </Link>
              <div className="rounded-3xl border border-border bg-surface px-4 py-3">
                <ThemeToggle />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}
