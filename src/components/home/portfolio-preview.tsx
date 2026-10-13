"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, ArrowRight, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Project, CATEGORY_LABELS } from "@/types/project";

interface PortfolioPreviewProps {
  projects: Project[];
}

export function PortfolioPreview({ projects }: PortfolioPreviewProps) {
  return (
    <section id="portfolio" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Кейсы и работы
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
              Проекты, которыми мы гордимся
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4">
              Каждый проект в нашем портфолио — это сочетание выразительного визуала, продуманной архитектуры и ощутимого коммерческого эффекта.
            </p>
          </div>

          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors group shrink-0"
          >
            <span>Смотреть все кейсы</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {projects.slice(0, 4).map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority={index < 2}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/90 dark:bg-zinc-900/90 text-zinc-900 dark:text-white text-xs font-semibold backdrop-blur-md">
                    <span>Подробнее о кейсе</span>
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
                  {project.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.stack.length > 4 && (
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      +{project.stack.length - 4}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Bottom CTA for portfolio */}
        <div className="mt-14 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-sm font-semibold text-zinc-900 dark:text-white bg-zinc-100 dark:bg-zinc-900 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 border border-zinc-200 dark:border-zinc-800 transition-all duration-300"
          >
            <span>Смотреть все работы в портфолио ({projects.length})</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
