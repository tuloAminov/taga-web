"use client";

import Link from "next/link";
import {
  ShoppingBag,
  Globe,
  Smartphone,
  ArrowRight,
  Check,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    id: "ecommerce",
    title: "Интернет-магазины на 1С-Битрикс",
    icon: ShoppingBag,
    badge: "Лучший выбор для e-commerce",
    price: "от 180 000 ₽",
    duration: "от 4 недель",
    description:
      "Надёжные и масштабируемые интернет-магазины на 1С-Битрикс и Next.js. Бесшовная интеграция с 1С:Предприятие, МойСклад, онлайн-оплатой и логистикой.",
    features: [
      "Глубокая двусторонняя интеграция с 1С и МойСклад",
      "Каталог с мгновенным поиском и фасетными фильтрами",
      "Приём платежей: ЮKassa, СБП, Т-Банк, Долями",
      "Интеграция служб доставки: СДЭК, Boxberry, Почта РФ",
    ],
  },
  {
    id: "corporate",
    title: "Корпоративные сайты и лендинги",
    icon: Globe,
    badge: "Для бизнеса",
    price: "от 90 000 ₽",
    duration: "от 2 недель",
    description:
      "Имиджевые многостраничные порталы и высококонверсионные посадочные страницы. Транслируют статус компании и привлекают B2B/B2C клиентов.",
    features: [
      "Индивидуальный дизайн без шаблонных решений",
      "Продающая структура по методологии AIDA",
      "Удобная панель управления контентом",
      "Lighthouse 95+ и базовая SEO-оптимизация",
    ],
  },
  {
    id: "webapp",
    title: "Веб-сервисы и мобильные приложения",
    icon: Smartphone,
    badge: "Сложная разработка",
    price: "от 250 000 ₽",
    duration: "от 6 недель",
    description:
      "Кастомные IT-продукты: кроссплатформенные мобильные приложения, клиентские личные кабинеты, дашборды и SaaS-сервисы с реактивным UI.",
    features: [
      "Кроссплатформенная разработка для iOS и Android",
      "Личные кабинеты с гибким разграничением ролей",
      "Сложная бизнес-логика, интеграция API и CRM",
      "Современный стек: React Native, Next.js, Node.js",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-3">
            Наши компетенции
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
            Услуги для роста вашего бизнеса
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
            Проектируем и разрабатываем надежные цифровые решения с акцентом на надежность, высокую конверсию и рост продаж.
          </p>
        </div>

        {/* Services Grid (3 cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="group relative flex flex-col justify-between rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/60 dark:bg-zinc-900/40 p-7 backdrop-blur-xl hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/5 transition-all duration-300"
              >
                <div>
                  {/* Top Bar inside card */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-900 dark:text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200/60 dark:border-zinc-700/60">
                      {service.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-2 group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Feature Bullets */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer with Price & Link */}
                <div className="pt-5 border-t border-zinc-200/80 dark:border-zinc-800/80 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400 block">Стоимость:</span>
                    <span className="text-base font-bold text-zinc-900 dark:text-white">
                      {service.price}
                    </span>
                  </div>

                  <Link
                    href={`/contact?service=${service.id}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors group-hover:underline"
                  >
                    Заказать
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Big Prominent "Все услуги" Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-base sm:text-lg font-bold text-zinc-900 dark:text-white bg-zinc-100 hover:bg-emerald-600 hover:text-white dark:bg-zinc-900 dark:hover:bg-emerald-600 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-600 shadow-md hover:shadow-xl hover:shadow-emerald-500/20 transition-all duration-300"
          >
            <Layers className="w-5 h-5 text-emerald-500 group-hover:text-white transition-colors" />
            <span>Все услуги студии</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
