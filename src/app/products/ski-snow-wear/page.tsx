import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ProductCategoryPage";

export const metadata: Metadata = {
  title: "Ski & Snow Wear Manufacturer | Custom Ski Jackets, Pants, Base Layers",
  description: "Custom ski & snow wear manufacturer in Sialkot, Pakistan. We produce ski jackets, snowboard pants, base layers, insulated outerwear, gloves and winter accessories. No MOQ for trial samples.",
  alternates: { canonical: "https://coresportswears.com/products/ski-snow-wear" },
  keywords: ["ski jacket manufacturer", "snowboard pants manufacturer", "custom ski wear Pakistan", "ski wear manufacturer Sialkot", "winter sportswear manufacturer", "base layer manufacturer"],
};

const subcategories = [
  { name: "Ski & Snowboarding Jackets", description: "Custom insulated jackets with waterproof fabrics, adjustable hoods, and ski-specific features." },
  { name: "Ski & Snowboarding Pants", description: "Durable, waterproof pants with reinforced knees and snow gaiters." },
  { name: "Ski & Snowboard Bibs", description: "Full bib overalls for maximum protection in deep snow conditions." },
  { name: "Softshell Jackets", description: "Breathable, windproof softshell layers for active winter sports." },
  { name: "Base Layer Jumpsuits", description: "Thermal one-piece base layers for ultimate warmth and comfort." },
  { name: "Thermal Base Layer Tops", description: "Moisture-wicking thermal tops for cold weather layering." },
  { name: "Base Layer Bottoms", description: "Compression and thermal leggings for winter sports performance." },
  { name: "Snow Gloves & Mittens", description: "Waterproof, insulated gloves and mittens with touchscreen compatibility." },
  { name: "Windbreakers & Vests", description: "Lightweight wind-resistant layers for variable mountain weather." },
];

const features = [
  "Custom designs and sizes to your specifications", "Premium waterproof and breathable fabrics",
  "No MOQ for trial samples", "5-7 day sample development", "15-25 day bulk production",
  "In-house printing, embroidery, and branding", "Export-ready with worldwide shipping", "European quality standards",
];

export default function SkiSnowWearPage() {
  return <ProductCategoryPage title="Ski & Snow Wear" description="Custom ski jackets, snowboard pants, base layers, insulated outerwear and winter accessories. We manufacture high-performance winter sport apparel using premium waterproof and breathable fabrics." heroDescription="Custom ski & snow wear for brands, teams, and private label buyers. Premium quality, export-ready, manufactured in Sialkot, Pakistan." subcategories={subcategories} features={features} />;
}
