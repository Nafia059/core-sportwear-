import type { Metadata } from "next";
import ProductCategoryPage from "@/components/ProductCategoryPage";

export const metadata: Metadata = {
  title: "Headwear & Accessories Manufacturer | Custom Caps, Beanies Pakistan",
  description: "Custom headwear and accessories manufacturer in Sialkot, Pakistan. We produce caps, beanies, headbands, patches, socks, compression sleeves and more. No MOQ for trial samples.",
  alternates: { canonical: "https://coresportswears.com/products/headwear-accessories" },
  keywords: ["custom caps manufacturer Pakistan", "beanie manufacturer", "custom patches manufacturer", "headwear manufacturer Sialkot", "custom socks manufacturer"],
};

const subcategories = [
  { name: "Snapback & Flat-Brim Caps", description: "Custom snapbacks and flat-brim caps with embroidery and patches." },
  { name: "Trucker & Mesh Caps", description: "Breathable trucker caps with mesh backs and custom fronts." },
  { name: "5-Panel & Fashion Caps", description: "Trendy 5-panel caps for streetwear and fashion brands." },
  { name: "Baseball & Sports Caps", description: "Classic baseball caps for teams and sports brands." },
  { name: "Beanies & Winter Headwear", description: "Knitted beanies, bobble hats, and winter headwear." },
  { name: "Bucket Hats & Outdoor Hats", description: "Custom bucket hats and outdoor sun protection headwear." },
  { name: "Custom Patches & Badges", description: "Embroidered, woven, and PVC patches for branding." },
  { name: "Custom Socks", description: "Sports socks, crew socks, and compression socks with custom designs." },
  { name: "Compression Sleeves", description: "Arm sleeves, leg sleeves, and compression warmers." },
];

const features = [
  "Wide range of headwear styles and materials", "Custom embroidery, woven labels, and PVC patches",
  "Sports-grade compression accessories", "No MOQ for trial samples",
  "5-7 day sample development", "15-25 day bulk production", "In-house embroidery and branding", "Worldwide export from Sialkot, Pakistan",
];

export default function HeadwearAccessoriesPage() {
  return <ProductCategoryPage title="Headwear & Accessories" description="Custom caps, beanies, headbands, patches, socks, compression sleeves and more. We manufacture a complete range of sports headwear and accessories." heroDescription="Custom headwear and sports accessories \u2014 caps, beanies, patches, socks. Manufactured in Sialkot, Pakistan." subcategories={subcategories} features={features} />;
}
