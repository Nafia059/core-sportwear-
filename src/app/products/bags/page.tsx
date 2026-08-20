import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ProductCategoryPage";

export const metadata: Metadata = {
  title: "Custom Bags Manufacturer | Duffel, Backpack, Tote Bags Pakistan",
  description: "Custom bags manufacturer in Sialkot, Pakistan. We produce duffel bags, sports backpacks, fanny bags, tote bags and shopping bags with custom branding. No MOQ for trial samples.",
  alternates: { canonical: "https://coresportswears.com/products/bags" },
  keywords: ["custom bags manufacturer Pakistan", "duffel bag manufacturer", "sports backpack manufacturer", "tote bag manufacturer Pakistan", "private label bags"],
};

const subcategories = [
  { name: "Duffel Bags", description: "Custom duffel bags for sports teams, gyms, and travel brands." },
  { name: "Sports Backpacks", description: "Durable backpacks with laptop compartments and custom branding." },
  { name: "Fanny Bags & Crossbody", description: "Trendy fanny packs and crossbody bags for casual and sports use." },
  { name: "Tote Bags & Shopping Bags", description: "Reusable tote bags and shopping bags with custom prints." },
  { name: "Custom Fabrics for Bags", description: "Choose from polyester, nylon, canvas, and other bag-specific materials." },
];

const features = [
  "Custom designs, sizes, and materials", "Screen printing, embroidery, and sublimation branding",
  "Durable YKK zippers and hardware", "Custom linings and compartments",
  "No MOQ for trial samples", "5-7 day sample development", "15-25 day bulk production", "Export-ready worldwide shipping",
];

export default function BagsPage() {
  return <ProductCategoryPage title="Bags" description="Duffel bags, sports backpacks, fanny bags, tote bags and supporting accessories for full collections. We manufacture custom bags for sports teams, brands, and retailers." heroDescription="Custom sports bags \u2014 duffel, backpack, fanny, and tote bags. Manufactured in Sialkot, Pakistan with your branding." subcategories={subcategories} features={features} />;
}
