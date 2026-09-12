import { MetadataRoute } from "next";
import { services } from "@/lib/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: "https://mcs-solicitors.com", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: "https://mcs-solicitors.com/about", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://mcs-solicitors.com/services", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: "https://mcs-solicitors.com/funding", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: "https://mcs-solicitors.com/testimonials", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://mcs-solicitors.com/contact", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
  ];

  const servicePages = services.map((s) => ({
    url: `https://mcs-solicitors.com/services/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...servicePages];
}
