import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://coresportswears.com";
  const lastModified = new Date();

  return [
    { url: baseUrl, lastModified, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/about`, lastModified, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/products/ski-snow-wear`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products/streetwear`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products/sportswear`, lastModified, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/products/bags`, lastModified, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/products/headwear-accessories`, lastModified, changeFrequency: "weekly", priority: 0.8 },
  ];
}
