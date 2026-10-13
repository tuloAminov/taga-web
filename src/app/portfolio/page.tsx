import { Metadata } from "next";
import { getAllProjects } from "@/lib/projects";
import { PortfolioView } from "@/components/portfolio/portfolio-view";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Портфолио проектов — TAGA STUDIO",
  description:
    "Кейсы веб-разработки: интернет-магазины, корпоративные порталы, B2B веб-сервисы и лендинги. Реальные результаты и стек технологий.",
};

export default async function PortfolioPage() {
  const projects = await getAllProjects();

  return (
    <div className="py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Наши работы
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading leading-tight mb-6">
            Портфолио реализованных проектов
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Мы разрабатываем цифровые решения, которые помогают нашим клиентам расти, 
            автоматизировать продажи и занимать лидирующие позиции в своей нише.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <PortfolioView initialProjects={projects} />
      </div>

      {/* Bottom CTA */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 p-10 sm:p-16 backdrop-blur-xl max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white font-heading mb-4">
            Хотите проект с аналогичным уровнем качества?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8 text-base">
            Расскажите нам о вашей идее. Мы подготовим концепцию, подберём архитектуру и рассчитаем сроки.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
          >
            <span>Обсудить мой проект</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
