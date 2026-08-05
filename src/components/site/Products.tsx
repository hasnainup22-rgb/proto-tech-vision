import { Section, SectionHeading, TextLink, PillLink } from "./primitives";
import { Reveal } from "./Reveal";
import { Activity, BookOpen, Briefcase } from "lucide-react";

const products = [
  {
    sector: "Healthcare",
    title: "Hospital Management",
    description: "Complete patient records, billing, and pharmacy management.",
    price: "From PKR 5K / mo",
    icon: <Activity size={18} />,
  },
  {
    sector: "Education",
    title: "School Management",
    description: "Student records, fee management, and examination system.",
    price: "From PKR 15 / student",
    icon: <BookOpen size={18} />,
  },
  {
    sector: "Enterprise",
    title: "HR Management",
    description: "Streamline HR operations with employee records, payroll, and attendance.",
    price: "From PKR 4K / mo",
    icon: <Briefcase size={18} />,
  },
];

export function Products() {
  return (
    <Section id="products" className="bg-surface">
      <SectionHeading
        label="Product Offers"
        title="Software Built To Run Your Daily Operations With"
        highlight="Confidence"
      />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {products.map((product) => (
          <Reveal
            key={product.title}
            className="flex flex-col rounded-3xl border border-border bg-background p-8 transition-colors hover:border-brand"
            direction="bottom"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 flex items-center justify-center rounded-full bg-transparent text-brand">
                {product.icon}
              </div>
              <p className="text-[11px] font-semibold tracking-[0.2em] text-brand uppercase">{product.sector}</p>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-foreground">{product.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
            <p className="mt-6 text-base font-semibold text-brand-deep">{product.price}</p>
            <div className="mt-auto pt-7">
              <TextLink href="#contact">Learn More</TextLink>
            </div>
          </Reveal>
        ))}
      </div>
      <div className="mt-12 flex justify-center">
        <PillLink href="#contact" variant="outline">
          View All Products
        </PillLink>
      </div>
    </Section>
  );
}