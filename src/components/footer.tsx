"use client";

import Link from "next/link";
import { ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { Logo } from "@/components/logo";

export function Footer() {
  const currentYear = 2025;

  return (
    <footer className="relative border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" aria-label="На главную ТАГА IT-СТУДИЯ">
              <Logo />
            </Link>

            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-sm leading-relaxed">
              Создаём современные, быстрые и конвертящие сайты и интернет-магазины.
              Объединяем сильный продуктовый дизайн, передовые технологии и бизнес-аналитику.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://t.me"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="mailto:hello@taga-studio.ru"
                className="w-9 h-9 rounded-xl border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              Навигация
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Главная
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Услуги и цены
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Портфолио
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  О студии
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Контакты
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              Услуги
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link
                  href="/services#landing"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Landing Page
                </Link>
              </li>
              <li>
                <Link
                  href="/services#corporate"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Корпоративные сайты
                </Link>
              </li>
              <li>
                <Link
                  href="/services#ecommerce"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Интернет-магазины
                </Link>
              </li>
              <li>
                <Link
                  href="/services#webapp"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Веб-приложения и SaaS
                </Link>
              </li>
              <li>
                <Link
                  href="/services#support"
                  className="text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  Техподдержка и развитие
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacts */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-zinc-900 dark:text-white uppercase tracking-wider">
              Контакты
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400">
                <Mail className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <a
                  href="mailto:hello@taga-studio.ru"
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  hello@taga-studio.ru
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400">
                <Phone className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <a
                  href="tel:+79991234567"
                  className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                >
                  +7 (999) 123-45-67
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-zinc-600 dark:text-zinc-400">
                <MapPin className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>Работаем онлайн по всей России</span>
              </li>
              <li className="pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
                >
                  Заполнить бриф онлайн
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500 dark:text-zinc-400">
          <p>© {currentYear} ТАГА. Все права защищены.</p>
          <div className="flex items-center gap-6">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              Открыты к новым проектам
            </span>
            <span>Сделано на Next.js 14 & Tailwind</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
