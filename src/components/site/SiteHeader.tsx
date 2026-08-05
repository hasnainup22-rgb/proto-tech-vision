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
    <>
      <header className="relative z-[9999] px-5 pt-6">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between rounded-3xl border border-border bg-background/90 px-5 py-3 backdrop-blur">
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

            <span className="font-display text-lg font-semibold leading-none tracking-tight text-foreground">
              Proto<span className="text-brand">Tech</span>
              <span className="block text-[10px] uppercase tracking-[0.28em] text-muted-foreground">
                Solution
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-brand-deep font-semibold" }}
                className="text-sm font-medium text-foreground/80 transition hover:text-brand-deep"
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
              className="hidden rounded-full bg-brand-deep px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-brand lg:inline-flex"
            >
              Contact Us
            </Link>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-background lg:hidden"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-[99998] lg:hidden"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed left-5 right-5 top-24 z-[99999] rounded-3xl border border-border bg-background p-5 shadow-2xl lg:hidden">
            <nav className="space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium hover:bg-brand/10"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <Link
              to="/"
              hash="contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-5 flex justify-center rounded-full bg-brand-deep px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              Contact Us
            </Link>
          </div>
        </>
      )}
    </>
  );
}