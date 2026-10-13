"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Filter } from "lucide-react";
import { Project, ProjectCategory, CATEGORY_LABELS } from "@/types/project";
import { cn } from "@/lib/utils";

interface PortfolioViewProps {
  initialProjects: Project[];
}

const CATEGORIES: { id: ProjectCategory; label: string }[] = [
  { id: "all", label: "Все проекты" },
  { id: "ecommerce", label: "Интернет-магазины" },
  { id: "websites", label: "Корпоративные сайты" },
  { id: "webapp", label: "Веб-приложения" },
];

export function PortfolioView({ initialProjects }: PortfolioViewProps) {
  const [activeCategory, setActiveCategory] = React.useState<ProjectCategory>("all");

  const filteredProjects = React.useMemo(() => {
    if (activeCategory === "all") return initialProjects;
    return initialProjects.filter((p) => p.category === activeCategory);
  }, [initialProjects, activeCategory]);

  return (
    <div className="space-y-12">
      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 border-b border-zinc-200/80 dark:border-zinc-800/80 pb-6">
        <div className="hidden sm:flex items-center gap-2 mr-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
          <Filter className="w-3.5 h-3.5" />
          Фильтр:
        </div>
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count =
            cat.id === "all"
              ? initialProjects.length
              : initialProjects.filter((p) => p.category === cat.id).length;

          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                "relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 cursor-pointer",
                isActive
                  ? "bg-zinc-900 dark:bg-emerald-600 text-white shadow-md shadow-zinc-950/10 font-semibold"
                  : "bg-zinc-100/70 dark:bg-zinc-900/60 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-zinc-800/60"
              )}
            >
              <span>{cat.label}</span>
              <span
                className={cn(
                  "text-xs px-1.5 py-0.5 rounded-md",
                  isActive
                    ? "bg-white/20 text-white"
                    : "bg-zinc-200/60 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                )}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
        <AnimatePresence>
          {filteredProjects.map((project) => (
            <motion.article
              layout
              key={project.slug}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="group relative flex flex-col rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/40 overflow-hidden shadow-xs hover:border-emerald-500/40 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
            >
              {/* Image Preview Container */}
              <Link
                href={`/portfolio/${project.slug}`}
                className="relative block aspect-16/10 w-full overflow-hidden bg-zinc-100 dark:bg-zinc-800/80"
              >
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white text-xs font-semibold backdrop-blur-md">
                    <span>Смотреть кейс детально</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Badge Category */}
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-zinc-900/80 text-white backdrop-blur-md border border-white/10">
                    {CATEGORY_LABELS[project.category] || project.category}
                  </span>
                </div>
              </Link>

              {/* Card Content */}
              <div className="flex flex-col flex-1 p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  <span>Клиент: {project.client}</span>
                  <span>{project.year} год</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                  <Link href={`/portfolio/${project.slug}`}>
                    {project.title}
                  </Link>
                </h3>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                  {project.excerpt}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-20 px-6 border border-dashed border-zinc-200 dark:border-zinc-800 rounded-3xl bg-zinc-50/50 dark:bg-zinc-900/20 max-w-xl mx-auto">
          <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center mx-auto mb-5">
            <Filter className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">
            Раздел пополняется
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-8">
            Скоро здесь появятся детальные описания наших завершённых кейсов. Напишите нам, чтобы обсудить ваш проект и получить индивидуальное предложение.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
          >
            <span>Обсудить ваш проект</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </div>
  );
}
