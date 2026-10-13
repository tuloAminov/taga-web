export type ProjectCategory = "all" | "websites" | "ecommerce" | "webapp";

export interface ProjectMetadata {
  title: string;
  slug: string;
  category: "websites" | "ecommerce" | "webapp";
  cover: string;
  gallery: string[];
  stack: string[];
  client: string;
  year: number;
  duration: string;
  url?: string;
  excerpt: string;
  featured?: boolean;
}

export interface Project extends ProjectMetadata {
  content: string;
}

export const CATEGORY_LABELS: Record<ProjectCategory, string> = {
  all: "Все проекты",
  websites: "Сайты",
  ecommerce: "Интернет-магазины",
  webapp: "Веб-приложения",
};
