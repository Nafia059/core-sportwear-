import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ProductCategoryPage";

export const metadata: Metadata = {
  title: "Sportswear Manufacturer | Custom Jerseys, Team Uniforms Pakistan",
  description: "Custom sportswear manufacturer in Sialkot, Pakistan. We produce basketball, soccer, baseball, rugby, cricket jerseys and team uniforms. Sublimation printing, no MOQ for trial samples.",
  alternates: { canonical: "https://coresportswears.com/products/sportswear" },
  keywords: ["sportswear manufacturer Pakistan", "custom jersey manufacturer", "basketball jersey manufacturer", "soccer jersey manufacturer Pakistan", "team uniform manufacturer"],
};

const subcategories = [
  { name: "Basketball Jerseys & Uniforms", description: "Custom basketball jerseys, shorts, and full uniform sets with sublimation printing." },
  { name: "Soccer Jerseys & Kits", description: "Custom soccer jerseys, shorts, goalkeeper wear, and training kits." },
  { name: "American Football Jerseys", description: "Football jerseys, pants, and uniform sets with custom designs." },
  { name: "Rugby Jerseys & Shorts", description: "Durable rugby jerseys, shorts, and training wear." },
  { name: "Baseball Jerseys & Pants", description: "Button-front and sublimation baseball jerseys with matching pants." },
  { name: "Cricket Uniforms", description: "Custom cricket kits, trousers, and team wear." },
  { name: "Tennis & Volleyball Wear", description: "Performance tennis and volleyball apparel with custom branding." },
  { name: "Cycling & Running Wear", description: "Cycling jerseys, running shorts, and performance athletic wear." },
  { name: "Fitness & Gym Wear", description: "Gym shorts, tank tops, compression wear, and training apparel." },
];

const features = [
  "All major sports covered \u2014 basketball, soccer, cricket, rugby, and more", "Sublimation, screen print, and embroidery options",
  "Custom team names, numbers, and logos", "Moisture-wicking and performance fabrics",
  "No MOQ for trial samples", "5-7 day sample development", "15-25 day bulk production", "Trusted by clubs and teams worldwide",
];

export default function SportswearPage() {
  return <ProductCategoryPage title="Sportswear" description="Basketball, soccer, baseball, rugby, cricket, cycling, fitness and teamwear built to your specs. Full customization including sublimation printing, embroidery, and custom branding." heroDescription="Custom sportswear for teams, clubs, and brands. Basketball, soccer, cricket, rugby and more \u2014 manufactured in Sialkot, Pakistan." subcategories={subcategories} features={features} />;
}
