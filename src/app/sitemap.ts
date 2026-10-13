import { MetadataRoute } from "next";
import { getAllProjects } from "@/lib/projects";

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://taga-studio.ru";

const STABLE_DATE = new Date("2025-01-01");

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects = await getAllProjects();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: STABLE_DATE,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: STABLE_DATE,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/portfolio`,
      lastModified: STABLE_DATE,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: STABLE_DATE,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: STABLE_DATE,
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((project) => ({
    url: `${BASE_URL}/portfolio/${project.slug}`,
    lastModified: STABLE_DATE,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
