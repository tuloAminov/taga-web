"use client";

import { motion } from "framer-motion";
import { Search, Compass, Palette, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Аналитика и стратегия",
    icon: Search,
    duration: "3-5 дней",
    description:
      "Глубоко погружаемся в вашу бизнес-модель, изучаем сильные и слабые стороны конкурентов, сегментируем целевую аудиторию и составляем подробный Customer Journey Map (CJM).",
    deliverables: ["Бриф и цели проекта", "Анализ конкурентов", "Карта сайта (Sitemap)", "Техническое задание (ТЗ)"],
  },
  {
    step: "02",
    title: "UX Прототипирование",
    icon: Compass,
    duration: "4-7 дней",
    description:
      "Проектируем логику и структуру каждого экрана без отвлекающего визуального шума. Тестируем пользовательские сценарии, устраняем барьеры на пути к покупке.",
    deliverables: ["Интерактивный wireframe", "Сетка и структура блоков", "Продающие тексты и офферы", "Сценарии конверсий"],
  },
  {
    step: "03",
    title: "Премиальный UI Дизайн",
    icon: Palette,
    duration: "7-12 дней",
    description:
      "Создаём индивидуальную визуальную эстетику в Figma: уникальная типографика, цветовая палитра, микроинтеракции, 3D/иллюстрации и адаптивные версии под все мобильные разрешения.",
    deliverables: ["UI-Kit и дизайн-система", "Адаптивные макеты (Mobile/Desktop)", "Анимации взаимодействий", "Кликабельный прототип"],
  },
  {
    step: "04",
    title: "Frontend & Backend разработка",
    icon: Code2,
    duration: "10-20 дней",
    description:
      "Пишем чистый, типизированный код на Next.js 14 и Tailwind CSS. Интегрируем платёжные шлюзы, 1С, CRM-системы, настраиваем базу данных и удобную CMS для управления контентом.",
    deliverables: ["Чистый TypeScript код", "Интеграция API и платежей", "Панель управления сайтом", "Core Web Vitals 90+"],
  },
  {
    step: "05",
    title: "Тестирование, релиз и рост",
    icon: Rocket,
    duration: "3-5 дней",
    description:
      "Проводим кроссбраузерное и нагрузочное тестирование, настраиваем аналитику, обучаем вашу команду работе с сайтом, подключаем домен и обеспечиваем гарантийное сопровождение.",
    deliverables: ["Чек-лист QA тестирования", "Настройка Яндекс.Метрики и GA4", "Видеоинструкция для сотрудников", "12 месяцев гарантии"],
  },
];

export function ProcessSection() {
  return (
    <section className="py-20 md:py-28 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200/80 dark:border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Прозрачный процесс
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
            Как мы превращаем вашу идею в работающий проект
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4">
            Никаких «сюрпризов» со сроками и скрытых платежей. Работаем итерациями с еженедельными демо-отчетами и чёткими дедлайнами.
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/70 p-7 shadow-xs hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-3xl font-extrabold font-heading text-emerald-500/70 dark:text-emerald-400/70">
                      {step.step}
                    </span>
                    <span className="text-xs font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400">
                      {step.duration}
                    </span>
                  </div>

                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
                      {step.title}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {step.description}
                  </p>
                </div>

                {/* Deliverables List */}
                <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                  <span className="text-xs font-semibold text-zinc-500 dark:text-zinc-400 block mb-2 uppercase tracking-wider">
                    Результат этапа:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {step.deliverables.map((item, i) => (
                      <span
                        key={i}
                        className="text-[11px] px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
