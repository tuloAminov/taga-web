"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, TrendingUp, Users } from "lucide-react";

const STATS = [
  {
    icon: Award,
    value: "7+",
    unit: "лет",
    title: "Опыта в веб-разработке",
    description: "Прошли путь от простых сайтов-визиток до сложных enterprise-систем и высоконагруженных e-commerce.",
  },
  {
    icon: CheckCircle,
    value: "85+",
    unit: "проектов",
    title: "Успешно запущено",
    description: "Каждый проект сдан с гарантией качества, чистым кодом и подробной документацией для клиента.",
  },
  {
    icon: Users,
    value: "94%",
    unit: "NPS",
    title: "Постоянных клиентов",
    description: "Более 70% заказчиков возвращаются к нам за развитием существующих систем или рекомендуют партнёрам.",
  },
  {
    icon: TrendingUp,
    value: "x2.4",
    unit: "рост",
    title: "Средний рост конверсии",
    description: "Фокусируемся на бизнес-показателях: увеличиваем продажи, глубину просмотра и снижаем стоимость лида.",
  },
];

export function StatsSection() {
  return (
    <section className="py-20 md:py-28 bg-zinc-100/60 dark:bg-zinc-900/30 border-y border-zinc-200/80 dark:border-zinc-800/80 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Почему выбирают нас
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
            Цифры и факты, подтверждающие нашу надежность
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4">
            Мы не бросаем проекты на полпути и берем полную ответственность за сроки, техническую стабильность и результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {STATS.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-6 lg:p-7 shadow-xs backdrop-blur-md hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white font-heading">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400 uppercase">
                    {stat.unit}
                  </span>
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                  {stat.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
