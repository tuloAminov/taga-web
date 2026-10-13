"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "Сколько стоит разработка и из чего складывается цена?",
    answer:
      "Стоимость формируется индивидуально на основе технического задания: количества уникальных экранов, сложности функционала (каталог, фильтры, личный кабинет), сторонних интеграций (1С, CRM, эквайринг, службы доставки) и требований к анимациям. Лендинги начинаются от 70 000 ₽, корпоративные сайты — от 120 000 ₽, интернет-магазины — от 180 000 ₽. Мы фиксируем финальную смету в договоре, без скрытых переплат.",
  },
  {
    question: "Каковы средние сроки реализации проекта?",
    answer:
      "Landing Page занимает от 10 до 14 рабочих дней. Корпоративный сайт с индивидуальным дизайном — 3–5 недель. Интернет-магазин или веб-сервис — от 4 до 8 недель. Работа ведется спринтами: вы видите промежуточные результаты дизайна и верстки каждую неделю.",
  },
  {
    question: "Работаете ли вы официально по договору?",
    answer:
      "Да, мы работаем официально с юридическими лицами и ИП по безналичному расчету с предоставлением закрывающих документов (ЭДО или оригиналы курьером). В договоре чётко прописаны: календарный план этапов, техническое задание, смета, NDA о конфиденциальности и 12 месяцев гарантийных обязательств.",
  },
  {
    question: "Почему вы разрабатываете на Next.js и React, а не на Tilda/WordPress?",
    answer:
      "Next.js 14 обеспечивает максимальную скорость работы (оценка 95+ в Google Lighthouse), полную независимость от сторонних конструкторов, идеальное SEO благодаря серверному рендерингу (SSR) и неограниченную масштабируемость. Ваш сайт не начнет тормозить при 10 000+ товаров или наплыве тысяч покупателей в «чёрную пятницу».",
  },
  {
    question: "Сможет ли наш сотрудник редактировать контент без программиста?",
    answer:
      "Безусловно. Мы подключаем удобную и интуитивную CMS или панель администрирования, где любой ваш менеджер за пару кликов сможет менять цены, загружать новые фото, публиковать статьи или редактировать тексты. После релиза мы записываем подробные видеоинструкции для ваших сотрудников.",
  },
  {
    question: "Что входит в гарантию и последующую техподдержку?",
    answer:
      "После запуска проекта мы предоставляем 12 месяцев бесплатной гарантии на устранение любых скрытых технических багов. Также мы предлагаем ежемесячное абонентское сопровождение: мониторинг сервера 24/7, регулярные бэкапы, доработку нового функционала и SEO-развитие проекта.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-zinc-100/50 dark:bg-zinc-900/30 border-y border-zinc-200/80 dark:border-zinc-800/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Вопросы и ответы
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
            Часто задаваемые вопросы
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 max-w-2xl mx-auto">
            Собрали ответы на ключевые вопросы о процессах, оплате, сроках и гарантиях. Если вашего вопроса нет — напишите нам!
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={cn(
                  "rounded-2xl border transition-all duration-300 overflow-hidden",
                  isOpen
                    ? "border-emerald-500/50 bg-white dark:bg-zinc-900/80 shadow-md shadow-emerald-500/5"
                    : "border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 hover:border-zinc-300 dark:hover:border-zinc-700"
                )}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-bold text-zinc-900 dark:text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={cn(
                      "w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-transform duration-300",
                      isOpen
                        ? "bg-emerald-500 text-white rotate-180"
                        : "bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
