"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Дмитрий Воронов",
    role: "Основатель и CEO",
    company: "Lumiè Design Furniture",
    avatar: "ДВ",
    rating: 5,
    result: "+78% рост онлайн-заказов",
    quote:
      "Команда TAGA STUDIO сделала невозможное: перенесла огромный каталог на Next.js всего за 2 месяца. Скорость загрузки сайта выросла в разы, а мобильный чекаут стал невероятно удобным. За первые 2 месяца выручка интернет-магазина выросла почти на 80%. Рекомендую!",
  },
  {
    id: 2,
    name: "Елена Белова",
    role: "Директор по маркетингу",
    company: "FlowMetrics SaaS",
    avatar: "ЕБ",
    rating: 5,
    result: "NPS 88 и 1400+ активных B2B пользователей",
    quote:
      "Искали студию, которая способна не просто нарисовать UI, а спроектировать сложное B2B веб-приложение со сквозной аналитикой и дашбордами. Ребята глубоко погрузились в наши бизнес-процессы. Работает гладко на 60 FPS даже с тяжелыми выборками данных.",
  },
  {
    id: 3,
    name: "Марк Соколовский",
    role: "Главный архитектор & Партнер",
    company: "Nordic Architecture Studio",
    avatar: "МС",
    rating: 5,
    result: "Победа в конкурсе сайтов и чек 5 млн ₽+",
    quote:
      "Наш сайт стал настоящей цифровой выставкой. Клиенты из премиум-сегмента постоянно отмечают утончённую эстетику, плавный скролл и внимание к деталям. Количество обращений с высоким чеком увеличилось более чем в два раза.",
  },
  {
    id: 4,
    name: "Константин Григорьев",
    role: "Head of Product",
    company: "NovaPay Global",
    avatar: "КГ",
    rating: 5,
    result: "Core Web Vitals 99.9% и рост B2B лидов на 65%",
    quote:
      "Слаженная работа, соблюдение каждого дедлайна и кристальная чистота архитектуры. Интерактивный калькулятор тарифов и интеграция API с подсветкой кода существенно снизили нагрузку на наш отдел пресейла.",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
              Отзывы клиентов
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
              Что говорят о сотрудничестве с нами
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4">
              Мы ценим долгосрочные доверительные отношения и измеряем свой успех реальными бизнес-результатами наших заказчиков.
            </p>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors shadow-xs"
              aria-label="Предыдущий отзыв"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="w-12 h-12 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-center text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors shadow-xs"
              aria-label="Следующий отзыв"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Active Testimonial Card */}
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTestimonial.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
              className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 p-8 sm:p-12 backdrop-blur-xl shadow-xl shadow-zinc-950/5 relative"
            >
              <Quote className="w-12 h-12 text-emerald-500/20 absolute top-8 right-8 pointer-events-none" />

              {/* Stars & Result badge */}
              <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                <div className="flex items-center gap-1 text-amber-400">
                  {Array.from({ length: activeTestimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                  {activeTestimonial.result}
                </span>
              </div>

              {/* Quote */}
              <blockquote className="text-lg sm:text-2xl font-medium text-zinc-800 dark:text-zinc-200 leading-relaxed mb-10">
                «{activeTestimonial.quote}»
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white flex items-center justify-center font-bold text-base shadow-sm">
                  {activeTestimonial.avatar}
                </div>
                <div>
                  <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                    {activeTestimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400">
                    {activeTestimonial.role} • <span className="text-zinc-800 dark:text-zinc-200 font-medium">{activeTestimonial.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex items-center justify-center gap-2 mt-8">
            {TESTIMONIALS.map((t, idx) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-8 bg-emerald-500"
                    : "w-2.5 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400"
                }`}
                aria-label={`Перейти к отзыву ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
