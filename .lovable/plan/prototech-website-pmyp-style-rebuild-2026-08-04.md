# ProtoTech website — PMYP-style rebuild

Rebuild the ProtoTech marketing site using only the content from proto-tech.vercel.app, restyled to follow the visual language of pmyp.gov.pk.

## Design direction (from pmyp.gov.pk)

- Light, airy, institutional layout: white/off-white background, generous vertical breathing room, wide centered container.
- Floating rounded "capsule" header: thin-bordered white bar with logo left, text links centered, pill buttons right.
- Centered hero: small eyebrow line, large two-tone headline (dark text + accent-colored second half), a paragraph, and outlined pill CTA, with a soft flowing line-wave graphic behind it.
- Alternating two-column feature blocks with a small pill label above each heading.
- Card grids with soft borders, light rounded corners, small icon chips, and "Explore More" text links.
- Full-width stats band with large numbers and short labels.
- Rounded pill buttons throughout, soft borders instead of heavy shadows.
- Accent color: ProtoTech brand teal-to-blue (from the uploaded logo) replacing PMYP's green. Dark slate text on light neutral surfaces.
- Typography: rounded geometric sans for headings, clean sans for body — matching PMYP's type feel.
- ProtoTech logo in header and footer; favicon derived from it.

## Page structure (single home page, content from the source site)

1. Header — logo, nav (Home, About, Courses, Products, Internship, Arena, Contact), "Contact Us" pill.
2. Hero — "TRUSTED BY 100+ ENTERPRISES" eyebrow, "Welcome to ProtoTech — Your Trusted IT Partner", the resilient-technology-ecosystems paragraph, CTAs: Free Consultation / Our Services.
3. Internship block (two-column, PMYP chairman-message style) — 6-Week University Internship Program: 6 Weeks Hybrid, Semesters 1–8, 2,000 PKR one-time, three bullet benefits, Apply / View Tracks CTAs.
4. Ecosystem section (4-card grid, mirroring PMYP's "4Es") — ProtoArena Esports, Youth & Kids Academy, ProtoPath Career Advisory, ProtoMind Wellness Wing, each with label, description, sub-items and link.
5. Products — Hospital Management (from PKR 5K/mo), School Management (PKR 15/student), HR Management (from PKR 4K/mo), plus "View All Products".
6. Technology stack — grouped tech chips (e.g. Servers & Data: Node.js, Python, ASP.NET Core, Go).
7. Testimonials — the three real reviews (Army School of Logistics Murree, Jinnah International Hospital Abbottabad, Pak Gulf Construction), with the source site's "yeaPKR" typo corrected to "years".
8. Stats band — impact figures in PMYP's numbers style.
9. Closing CTA — "Let's build something extraordinary." with Get In Touch / View Products.
10. Footer — tagline, email prototechsolution.pk@gmail.com, phone +92 312 0516684, four link columns (Company, Products, Courses, Legal), copyright, "System Status: Operational".

Nav and footer links scroll to on-page sections; no separate routes in this pass.

## Technical notes

- Rewrite `src/routes/index.tsx` as the home page, composed of small section components under `src/components/`.
- Define the teal/blue palette, radii and fonts as semantic tokens in `src/styles.css` (`@theme inline`, oklch); no hardcoded color utilities.
- Load fonts via `<link>` in `src/routes/__root.tsx`; add route `head()` metadata (title, description, og/twitter).
- Register the uploaded logo as a Lovable asset for header/footer, and add a square favicon in `public/`.
- Static content only — no backend required.