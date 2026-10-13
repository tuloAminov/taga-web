import { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import {
  Mail,
  Phone,
  Send,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Контакты и бриф — ТАГА IT-студия",
  description:
    "Свяжитесь с нами для обсуждения разработки интернет-магазина, сайта или мобильного приложения. Ответим оперативно и подготовим предварительную смету.",
};

const CONTACT_METHODS = [
  {
    icon: Send,
    title: "Telegram",
    value: "@taga_studio",
    link: "https://t.me",
    desc: "Быстрый ответ в течение 15 минут",
    action: "Написать в TG",
  },
  {
    icon: Mail,
    title: "Email",
    value: "hello@taga-studio.ru",
    link: "mailto:hello@taga-studio.ru",
    desc: "Для ТЗ, брифов и вводных файлов",
    action: "Отправить письмо",
  },
  {
    icon: Phone,
    title: "Телефон",
    value: "+7 (999) 123-45-67",
    link: "tel:+79991234567",
    desc: "Пн-Пт с 10:00 до 19:00 по МСК",
    action: "Позвонить",
  },
  {
    icon: Clock,
    title: "Формат работы",
    value: "Удалённо по всей РФ",
    link: "/contact",
    desc: "Созвоны в Telegram, Zoom или Яндекс.Телемост",
    action: "Заполнить бриф",
  },
];

export default function ContactPage() {
  return (
    <div className="py-12 md:py-20">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            Свяжитесь с нами
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading leading-tight mb-6">
            Давайте обсудим ваш проект
          </h1>
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Расскажите о вашей задаче через бриф или напишите напрямую в Telegram. 
            Мы детально изучим требования, предложим оптимальный стек и подготовим предварительную смету.
          </p>
        </div>
      </section>

      {/* Main Grid: Info + Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 md:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contacts */}
          <div className="lg:col-span-5 space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {CONTACT_METHODS.map((method) => {
                const Icon = method.icon;
                return (
                  <div
                    key={method.title}
                    className="rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 p-6 flex items-start gap-4 shadow-xs hover:border-emerald-500/40 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <span className="text-xs text-zinc-400 uppercase tracking-wider block mb-1">
                        {method.title}
                      </span>
                      <a
                        href={method.link}
                        target={method.link.startsWith("http") ? "_blank" : undefined}
                        rel={method.link.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-base font-bold text-zinc-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors block mb-1"
                      >
                        {method.value}
                      </a>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                        {method.desc}
                      </p>
                      <a
                        href={method.link}
                        className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                      >
                        {method.action} →
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Guarantees Box */}
            <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-6 space-y-3">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                Что происходит после отправки заявки:
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Внимательно изучаем задачу и предоставленные вводные данные</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>В течение 2 часов связываемся с вами в Telegram или по почте</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>Назначаем короткий 20-минутный созвон и формируем вилку бюджета</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white font-heading">
                Заполните онлайн-бриф
              </h2>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                Чем подробнее вы опишете задачу, тем точнее будет предварительный расчет стоимости и сроков.
              </p>
            </div>
            <ContactForm isCompact={false} />
          </div>
        </div>
      </section>
    </div>
  );
}
