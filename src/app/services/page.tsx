import { Metadata } from "next";
import Link from "next/link";
import {
  ShoppingBag,
  Globe,
  Rocket,
  Cpu,
  Search,
  Headphones,
  Check,
  ArrowRight,
  ShieldCheck,
  Zap,
  Sparkles,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Услуги и цены — TAGA STUDIO",
  description:
    "Прозрачные цены на разработку сайтов, интернет-магазинов и веб-приложений. Детальный состав работ, сроки и технологии.",
};

const DETAILED_SERVICES = [
  {
    id: "ecommerce",
    title: "Разработка интернет-магазинов",
    badge: "Максимальная окупаемость",
    price: "от 180 000 ₽",
    duration: "от 4 недель",
    icon: ShoppingBag,
    summary:
      "Современные e-commerce решения на Next.js с мгновенным каталогом, умными фильтрами, личным кабинетом, онлайн-оплатой и интеграцией с учётными системами.",
    whatIsIncluded: [
      "Индивидуальный UX/UI дизайн всех экранов каталога и карточки товара",
      "Фильтрация и поиск без перезагрузки страниц (мгновенный отклик)",
      "Интеграция с 1С:Предприятие, МойСклад или кастомным REST API",
      "Приём платежей через ЮKassa, СБП, Т-Банк, сервис Долями",
      "Автоматический расчёт доставки через API СДЭК, Почта России, Достависта",
      "Одностраничный чекаут с подсказками адреса через Dadata",
      "Личный кабинет покупателя с историей заказов и избранным",
      "Обучение менеджеров работе с админ-панелью",
    ],
    tech: ["Next.js 14", "TypeScript", "Tailwind CSS", "PostgreSQL", "Prisma", "ЮKassa API"],
  },
  {
    id: "corporate",
    title: "Корпоративные сайты и порталы",
    badge: "Имидж и статус",
    price: "от 120 000 ₽",
    duration: "от 3 недель",
    icon: Globe,
    summary:
      "Многостраничные сайты премиум-уровня для презентации бренда, привлечения партнёров, инвесторов и крупных B2B-клиентов.",
    whatIsIncluded: [
      "Глубокий анализ конкурентов и позиционирования бренда",
      "Уникальная дизайн-концепция с микроинтеракциями и анимациями",
      "Проработка структуры страниц услуг, кейсов, новостей и команды",
      "Удобная панель управления контентом (CMS) без необходимости кода",
      "Мультиязычность при необходимости (i18n)",
      "Формы сбора лидов с защитой от спама и мгновенными алертом в Telegram",
      "Полная SEO-оптимизация и базовая настройка Яндекс.Метрики",
    ],
    tech: ["Next.js", "TypeScript", "Framer Motion", "Tailwind CSS", "Sanity / Payload CMS"],
  },
  {
    id: "landing",
    title: "Landing Page под ключ",
    badge: "Быстрый запуск",
    price: "от 70 000 ₽",
    duration: "от 10 дней",
    icon: Rocket,
    summary:
      "Высококонверсионные посадочные страницы под платный трафик из Яндекс.Директ и таргета с конверсией в заявку от 5% до 12%.",
    whatIsIncluded: [
      "Маркетинговый анализ целевой аудитории и конкурентов",
      "Сильный копирайтинг с упором на офферы и триггеры доверия",
      "Современный адаптивный дизайн для смартфонов и ПК",
      "Интерактивные калькуляторы, квизы и формы захвата контактов",
      "Интеграция с Битрикс24, amoCRM или Telegram",
      "Оптимизация Core Web Vitals (Lighthouse 95+)",
      "A/B тестирование первого экрана для максимальной конверсии",
    ],
    tech: ["Next.js 14", "Tailwind CSS", "React Hook Form", "Zod", "Telegram Bot API"],
  },
  {
    id: "webapp",
    title: "Веб-приложения, SaaS и Личные кабинеты",
    badge: "Индивидуальная архитектура",
    price: "от 250 000 ₽",
    duration: "от 6 недель",
    icon: Cpu,
    summary:
      "Разработка сложных веб-сервисов, B2B-кабинетов, аналитических дашбордов и MVP для стартапов с отказоустойчивой архитектурой.",
    whatIsIncluded: [
      "Проектирование схемы базы данных и системной архитектуры",
      "Разработка интерфейса пользователя и панели супер-админа",
      "Ролевая модель доступа (пользователь, менеджер, аналитик, админ)",
      "Интеграция сторонних REST / GraphQL API и микросервисов",
      "Реализация подписок, биллинга и генерации PDF-счетов",
      "Нагрузочное тестирование и настройка CI/CD пайплайнов",
      "Подробная техническая документация и Swagger спецификация",
    ],
    tech: ["React 19", "Next.js", "Node.js", "PostgreSQL", "Redis", "Docker", "Tailwind"],
  },
  {
    id: "seo",
    title: "Техническое SEO и продвижение",
    badge: "Органический трафик",
    price: "от 45 000 ₽ / мес",
    duration: "ежемесячно",
    icon: Search,
    summary:
      "Комплекс работ по выводу сайта в ТОП Яндекса и Google: технический аудит, устранение ошибок, микроразметка и оптимизация скорости.",
    whatIsIncluded: [
      "Глубокий технический аудит и устранение дублей, 404 ошибок",
      "Сбор коммерческого семантического ядра и кластеризация запросов",
      "Внедрение семантической микроразметки Schema.org и OpenGraph",
      "Оптимизация скорости загрузки до «зелёной зоны» Google PageSpeed",
      "Настройка систем веб-аналитики и целей",
      "Ежемесячные отчеты по динамике позиций и органического трафика",
    ],
    tech: ["Яндекс.Вебмастер", "Google Search Console", "Screaming Frog", "Schema.org"],
  },
  {
    id: "support",
    title: "Техническая поддержка и SLA",
    badge: "Безопасность 24/7",
    price: "от 35 000 ₽ / мес",
    duration: "ежемесячно",
    icon: Headphones,
    summary:
      "Гарантированная работоспособность вашего сайта, защита от сбоев, регулярное резервное копирование и оперативное внесение доработок.",
    whatIsIncluded: [
      "Выделенный пул часов разработчика и тестировщика в месяц",
      "Круглосуточный мониторинг доступности сервера и SSL-сертификатов",
      "Ежедневное создание бэкапов базы данных и файлов",
      "Реакция на критические инциденты в течение 30 минут",
      "Консультации тимлида по внедрению новых фичей",
      "Постоянный контроль безопасности и защита от DDoS-атак",
    ],
    tech: ["Uptime Monitoring", "Automated Backups", "Security Patches", "Git CI/CD"],
  },
];

const INCLUDED_IN_ALL = [
  {
    title: "Адаптивность под 100% устройств",
    description: "Ювелирная подгонка интерфейса под смартфоны, планшеты, ноутбуки и 4K-мониторы.",
  },
  {
    title: "Оптимизация скорости (95+ Lighthouse)",
    description: "Сжатие изображений, ленивая загрузка, кэширование и современный серверный рендеринг.",
  },
  {
    title: "Базовая SEO-структура",
    description: "Человекопонятные URL, robots.txt, sitemap.xml, Open Graph карточки для соцсетей.",
  },
  {
    title: "12 месяцев официальной гарантии",
    description: "Бесплатное устранение любых технических недочётов в рамках утверждённого ТЗ.",
  },
  {
    title: "Чистый и открытый исходный код",
    description: "Передаём все права на исходный код в GitHub репозитории. Никакой привязки к студии.",
  },
  {
    title: "Обучение вашей команды",
    description: "Записываем пошаговые скринкасты по управлению контентом и товарами на сайте.",
  },
];

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 md:mb-24">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Услуги и тарифы
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading leading-tight mb-6">
            Индивидуальная разработка сайтов с фиксированной сметой
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Мы предлагаем прозрачное ценообразование без скрытых платежей. Стоимость и сроки фиксируются в договоре 
            до начала работ. Выберите направление или оставьте заявку для индивидуального расчёта.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 mb-20 md:mb-28">
        {DETAILED_SERVICES.map((service, index) => {
          const Icon = service.icon;
          return (
            <div
              key={service.id}
              id={service.id}
              className="scroll-mt-24 rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/50 p-8 sm:p-10 lg:p-12 backdrop-blur-xl shadow-xs hover:border-emerald-500/40 transition-colors"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                {/* Left Overview */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-semibold px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {service.badge}
                      </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-heading mb-4">
                      {service.title}
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mb-6">
                      {service.summary}
                    </p>
                  </div>

                  {/* Pricing and Action */}
                  <div className="pt-6 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-4">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="text-xs text-zinc-500 uppercase tracking-wider block">Стоимость:</span>
                        <span className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-white font-heading">
                          {service.price}
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-xs text-zinc-500 uppercase tracking-wider block">Сроки:</span>
                        <span className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">
                          {service.duration}
                        </span>
                      </div>
                    </div>

                    <Link
                      href={`/contact?service=${encodeURIComponent(service.title)}`}
                      className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
                    >
                      <span>Обсудить {service.title}</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right What is Included */}
                <div className="lg:col-span-7 bg-zinc-50/70 dark:bg-zinc-950/50 rounded-2xl p-6 sm:p-8 border border-zinc-200/60 dark:border-zinc-800/60 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-wider text-zinc-900 dark:text-white mb-5 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-emerald-500" />
                      Что входит в стоимость:
                    </h3>

                    <ul className="space-y-3 mb-8">
                      {service.whatIsIncluded.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack */}
                  <div className="pt-4 border-t border-zinc-200/60 dark:border-zinc-800/60">
                    <span className="text-xs text-zinc-500 block mb-2 font-medium">
                      Технологии и интеграции:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {service.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 rounded-md text-xs font-medium bg-white dark:bg-zinc-800 border border-zinc-200/80 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Included by default in every project */}
      <section className="bg-zinc-100/60 dark:bg-zinc-900/40 border-y border-zinc-200/80 dark:border-zinc-800/80 py-20 mb-20 md:mb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-2">
              Наши стандарты качества
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading">
              Что входит в каждый проект бесплатно
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm sm:text-base mt-3">
              Базовые вещи, за которые другие агентства часто выставляют отдельные счета, у нас включены по умолчанию.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {INCLUDED_IN_ALL.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/80 p-6 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/60 p-10 sm:p-16 backdrop-blur-xl max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-white font-heading mb-4">
            Нужен точный расчет стоимости для вашей задачи?
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto mb-8 text-base">
            Оставьте заявку, прикрепите ТЗ или просто опишите задачу своими словами. Мы свяжемся с вами за 2 часа с готовой оценкой.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 shadow-lg shadow-emerald-600/20 transition-all"
          >
            <span>Заполнить форму для расчета</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
