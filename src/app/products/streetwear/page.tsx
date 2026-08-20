import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ProductCategoryPage";

export const metadata: Metadata = {
  title: "Streetwear Manufacturer | Custom Hoodies, T-Shirts, Jackets Pakistan",
  description: "Custom streetwear manufacturer in Sialkot, Pakistan. We produce hoodies, oversized tees, joggers, bomber jackets, tracksuits and fashion-focused private label streetwear. No MOQ for samples.",
  alternates: { canonical: "https://coresportswears.com/products/streetwear" },
  keywords: ["streetwear manufacturer Pakistan", "custom hoodies manufacturer", "oversized t-shirt manufacturer", "bomber jacket manufacturer Pakistan", "private label streetwear"],
};

const subcategories = [
  { name: "Basic T-Shirts", description: "Classic fit t-shirts in cotton and cotton-blend fabrics." },
  { name: "Oversized & Streetwear T-Shirts", description: "Trendy oversized fits for the streetwear market." },
  { name: "Graphic & Printed T-Shirts", description: "Custom graphic tees with screen print, DTG, or sublimation." },
  { name: "Pullover Hoodies", description: "Heavyweight fleece hoodies with custom embroidery and printing." },
  { name: "Zipper Hoodies", description: "Full-zip hoodies with custom branding and colorways." },
  { name: "Sweatshirts & Joggers", description: "Matching sweatshirt and jogger sets for coordinated looks." },
  { name: "Bomber Jackets", description: "Custom bomber jackets with satin, nylon, or wool shells." },
  { name: "Puffer & Down Jackets", description: "Insulated puffer jackets for winter streetwear collections." },
  { name: "Tracksuits & Co-ord Sets", description: "Full tracksuit sets and co-ord matching outfits." },
];

const features = [
  "Private label manufacturing for fashion brands", "Custom washes, dyes, and fabric treatments",
  "Screen printing, sublimation, and embroidery", "Trend-forward designs and silhouettes",
  "No MOQ for trial samples", "5-7 day sample development", "15-25 day bulk production", "Worldwide shipping from Sialkot, Pakistan",
];

export default function StreetwearPage() {
  return <ProductCategoryPage title="Streetwear" description="Hoodies, tees, flannel shirts, jackets, joggers, sweatshirts and fashion-focused private label streetwear. We help fashion brands and startups bring their streetwear visions to life." heroDescription="Custom streetwear for brands, startups, and private label buyers. Manufactured in Sialkot, Pakistan with premium quality." subcategories={subcategories} features={features} />;
}
