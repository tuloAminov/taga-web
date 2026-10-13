import { Metadata } from "next";
import Link from "next/link";
import {
  Target,
  Shield,
  Layers,
  Code2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "О студии — ТАГА IT-студия",
  description:
    "Индивидуальный подход к разработке интернет-магазинов, корпоративных сайтов и цифровых сервисов. Без посредников и лишних переплат.",
};

const VALUES = [
  {
    icon: Target,
    title: "Продуктовый фокус на прибыль",
    description:
      "Мы не делаем дизайн «ради дизайна». Каждый блок, кнопка и сценарий ориентированы на конверсию, средний чек и удобство конечного пользователя.",
  },
  {
    icon: Code2,
    title: "Инженерная чистота и скорость",
    description:
      "Разрабатываем на современном стеке Next.js, React и 1С-Битрикс. Добиваемся высоких показателей скорости и стабильной работы систем.",
  },
  {
    icon: Shield,
    title: "Прозрачность и соблюдение сроков",
    description:
      "Фиксируем дедлайны и стоимость. Прямая коммуникация с разработчиком без испорченного телефона через аккаунт-менеджеров.",
  },
  {
    icon: Layers,
    title: "Комплексный подход под ключ",
    description:
      "Берём на себя полный цикл: от проектирования структуры и логики до интеграций с 1С, эквайрингом, доставкой и запуском проекта.",
  },
];

const TECH_CATEGORIES = [
  {
    category: "Frontend & Пользовательский опыт",
    items: [
      { name: "Next.js", desc: "App Router, SSR & ISR" },
      { name: "React", desc: "Компонентная архитектура" },
      { name: "TypeScript", desc: "Строгая типизация" },
      { name: "Tailwind CSS", desc: "Адаптивная дизайн-система" },
      { name: "Framer Motion", desc: "Плавные интеракции" },
    ],
  },
  {
    category: "E-commerce & Backend",
    items: [
      { name: "1С-Битрикс", desc: "Стандарт для интернет-магазинов" },
      { name: "Node.js", desc: "Высокоскоростной рантайм" },
      { name: "PostgreSQL", desc: "Надёжные базы данных" },
      { name: "Prisma ORM", desc: "Типобезопасные запросы" },
      { name: "Docker", desc: "Контейнеризация и деплой" },
    ],
  },
  {
    category: "Интеграции & Инструменты",
    items: [
      { name: "1С / МойСклад", desc: "Двусторонняя синхронизация" },
      { name: "ЮKassa / Т-Банк", desc: "Онлайн-эквайринг и СБП" },
      { name: "СДЭК / Boxberry", desc: "Авторасчёт доставки" },
      { name: "Figma", desc: "Прототипирование и UI-дизайн" },
      { name: "Telegram Bot API", desc: "Мгновенные уведомления о лидах" },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            О студии
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading leading-tight mb-6">
            Индивидуальный подход и сильная инженерная культура
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            В ТАГА вы общаетесь напрямую со специалистом, который разрабатывает ваш проект. 
            Никаких менеджеров-посредников, бюрократии и шаблонных решений: только глубокое погружение в бизнес-процессы, 
            чистый код и ответственность за финальный результат.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 md:mb-28">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
            Принципы
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
            Наши базовые ценности
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div
                key={val.title}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/50 p-8 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-3">
                  {val.title}
                </h3>
                <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="bg-zinc-100/60 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80 py-20 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
              Технологический стек
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
              Инструменты, проверенные практикой
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECH_CATEGORIES.map((cat) => (
              <div
                key={cat.category}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/80 p-7 shadow-xs"
              >
                <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-6 pb-3 border-b border-zinc-100 dark:border-zinc-800">
                  {cat.category}
                </h3>
                <div className="space-y-4">
                  {cat.items.map((item) => (
                    <div key={item.name} className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-zinc-900 dark:text-white">
                        {item.name}
                      </span>
                      <span className="text-xs text-zinc-500 dark:text-zinc-400">
                        {item.desc}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 p-10 sm:p-16 backdrop-blur-xl max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white font-heading mb-4">
            Хотите обсудить ваш проект?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8 text-base">
            Напишите нам в Telegram или оставьте заявку. Мы изучим задачу, подскажем оптимальный стек технологий и рассчитаем точную смету.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
            >
              <span>Связаться с нами</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-zinc-700 dark:text-zinc-300 bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-all"
            >
              <span>Смотреть услуги</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
