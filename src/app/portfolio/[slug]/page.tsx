import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import {
  getAllProjects,
  getProjectBySlug,
  getAdjacentProjects,
  CATEGORY_LABELS,
} from "@/lib/projects";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Calendar,
  Clock,
  User,
  Layers,
  Sparkles,
} from "lucide-react";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const projects = await getAllProjects();
  if (projects.length === 0) {
    return [{ slug: "_empty" }];
  }
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Проект не найден | TAGA STUDIO",
    };
  }

  return {
    title: `${project.title} — Кейс TAGA STUDIO`,
    description: project.excerpt,
    openGraph: {
      title: `${project.title} — Кейс TAGA STUDIO`,
      description: project.excerpt,
      images: [{ url: project.cover }],
    },
  };
}

const mdxComponents = {
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white mt-12 mb-5 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80 font-heading flex items-center gap-2.5"
      {...props}
    />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3
      className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white mt-8 mb-4 font-heading"
      {...props}
    />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p
      className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6"
      {...props}
    />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className="space-y-3 mb-8 pl-2" {...props} />
  ),
  li: (props: React.HTMLAttributes<HTMLLIElement>) => (
    <li
      className="flex items-start gap-3 text-base text-zinc-700 dark:text-zinc-300 leading-relaxed before:content-['•'] before:text-emerald-500 before:font-bold before:text-xl before:leading-none"
      {...props}
    />
  ),
  strong: (props: React.HTMLAttributes<HTMLElement>) => (
    <strong
      className="font-semibold text-zinc-900 dark:text-white"
      {...props}
    />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className="text-emerald-600 dark:text-emerald-400 font-medium underline underline-offset-4 hover:text-emerald-500"
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  ),
};

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { prev, next } = await getAdjacentProjects(slug);

  return (
    <article className="py-10 md:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Link */}
        <div className="mb-8">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Вернуться в портфолио</span>
          </Link>
        </div>

        {/* Header Title & Badges */}
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 uppercase tracking-wider mb-4">
            {CATEGORY_LABELS[project.category] || project.category}
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-zinc-950 dark:text-white font-heading leading-tight mb-6">
            {project.title}
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl leading-relaxed">
            {project.excerpt}
          </p>
        </div>

        {/* Project Meta Details Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 backdrop-blur-md mb-12 shadow-xs">
          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Клиент:
            </span>
            <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              {project.client}
            </span>
          </div>

          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Сроки:
            </span>
            <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              {project.duration}
            </span>
          </div>

          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Год реализации:
            </span>
            <span className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white">
              {project.year}
            </span>
          </div>

          <div>
            <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
              Ссылка:
            </span>
            {project.url ? (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>Сайт проекта</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-sm sm:text-base font-bold text-zinc-500">
                Под NDA
              </span>
            )}
          </div>
        </div>

        {/* Cover Image */}
        <div className="relative aspect-16/9 w-full rounded-3xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 shadow-2xl mb-16">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        {/* Tech Stack Bar */}
        <div className="mb-14 p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-900/40">
          <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block mb-3">
            Использованный стек технологий:
          </span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60 text-zinc-800 dark:text-zinc-200 shadow-2xs"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* MDX Body Content */}
        <div className="max-w-4xl mx-auto prose dark:prose-invert mb-16">
          <MDXRemote source={project.content} components={mdxComponents} />
        </div>

        {/* Gallery Section */}
        {project.gallery && project.gallery.length > 0 && (
          <div className="mb-20">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-heading mb-8 pb-3 border-b border-zinc-200/80 dark:border-zinc-800/80">
              Галерея интерфейсов
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.gallery.map((imgSrc, idx) => (
                <div
                  key={idx}
                  className="relative aspect-16/10 rounded-2xl overflow-hidden border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100 dark:bg-zinc-900 shadow-md group"
                >
                  <Image
                    src={imgSrc}
                    alt={`${project.title} скриншот ${idx + 1}`}
                    fill
                    className="object-cover object-top transition-transform duration-300 group-hover:scale-102"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Previous / Next Navigation */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-10 border-t border-zinc-200/80 dark:border-zinc-800/80 mb-16">
          {prev ? (
            <Link
              href={`/portfolio/${prev.slug}`}
              className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover:border-emerald-500/40 transition-colors group"
            >
              <div className="flex items-center gap-2 text-xs text-zinc-500 mb-1">
                <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
                <span>Предыдущий проект</span>
              </div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {prev.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              href={`/portfolio/${next.slug}`}
              className="p-6 rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover:border-emerald-500/40 transition-colors text-right group sm:col-start-2"
            >
              <div className="flex items-center justify-end gap-2 text-xs text-zinc-500 mb-1">
                <span>Следующий проект</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
              <h4 className="text-base font-bold text-zinc-900 dark:text-white group-hover:text-emerald-500 transition-colors">
                {next.title}
              </h4>
            </Link>
          ) : (
            <div />
          )}
        </div>

        {/* CTA Block for Project Page */}
        <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-gradient-to-br from-zinc-900 to-zinc-950 text-white p-10 sm:p-14 text-center relative overflow-hidden shadow-2xl">
          <div className="relative z-10 max-w-2xl mx-auto space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Обсудить вашу задачу
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold font-heading">
              Хотите разработать сайт такого же уровня?
            </h3>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Свяжитесь с нами, чтобы обсудить цели, функционал и ориентировочный бюджет вашего будущего проекта.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/30"
              >
                <span>Оставить заявку на расчет</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
