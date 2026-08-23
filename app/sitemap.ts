import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const site = "https://rythamo-studio.vercel.app";
  return [
    { url: site, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
  ];
}
