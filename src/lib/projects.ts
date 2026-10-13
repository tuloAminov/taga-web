import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Project,
  ProjectMetadata,
  ProjectCategory,
  CATEGORY_LABELS,
} from "@/types/project";

export {
  type Project,
  type ProjectMetadata,
  type ProjectCategory,
  CATEGORY_LABELS,
};

const PROJECTS_DIRECTORY = path.join(process.cwd(), "content", "projects");

export async function getAllProjects(): Promise<Project[]> {
  if (!fs.existsSync(PROJECTS_DIRECTORY)) {
    return [];
  }

  const fileNames = fs.readdirSync(PROJECTS_DIRECTORY);
  const mdxFiles = fileNames.filter((name) => name.endsWith(".mdx") || name.endsWith(".md"));

  const projects = mdxFiles.map((fileName) => {
    const filePath = path.join(PROJECTS_DIRECTORY, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);

    const fallbackSlug = fileName.replace(/\.mdx?$/, "");

    return {
      title: data.title ?? "Без названия",
      slug: data.slug ?? fallbackSlug,
      category: data.category ?? "websites",
      cover: data.cover ?? "/images/projects/mebel/cover.svg",
      gallery: Array.isArray(data.gallery) && data.gallery.length > 0 ? data.gallery : [data.cover ?? "/images/projects/mebel/cover.svg"],
      stack: Array.isArray(data.stack) ? data.stack : [],
      client: data.client ?? "Конфиденциально",
      year: Number(data.year) || new Date().getFullYear(),
      duration: data.duration ?? "1 месяц",
      url: data.url,
      excerpt: data.excerpt ?? "",
      featured: Boolean(data.featured),
      content,
    } as Project;
  });

  // Sort: featured first, then newest year first
  return projects.sort((a, b) => {
    if (a.featured && !b.featured) return -1;
    if (!a.featured && b.featured) return 1;
    return b.year - a.year;
  });
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const all = await getAllProjects();
  const featured = all.filter((p) => p.featured);
  return featured.length > 0 ? featured : all.slice(0, 3);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const all = await getAllProjects();
  const found = all.find((p) => p.slug === slug);
  return found || null;
}

export async function getAdjacentProjects(
  currentSlug: string
): Promise<{ prev: Project | null; next: Project | null }> {
  const all = await getAllProjects();
  const index = all.findIndex((p) => p.slug === currentSlug);
  if (index === -1) {
    return { prev: null, next: null };
  }

  const prev = index > 0 ? all[index - 1] : all[all.length - 1];
  const next = index < all.length - 1 ? all[index + 1] : all[0];

  return { prev, next };
}
