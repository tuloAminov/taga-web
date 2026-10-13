"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, ChevronRight, Sparkles, Zap, ShieldCheck } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
      {/* Background Ambience: Grids and Glow Orbs */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] sm:w-[800px] sm:h-[500px] bg-gradient-to-tr from-emerald-500/20 via-teal-500/10 to-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm font-medium mb-8 backdrop-blur-md"
          >
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>IT-студия цифровых решений</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 dark:text-white leading-[1.1] mb-6 font-heading"
          >
            Разрабатываем сайты и интернет-магазины,{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 dark:from-emerald-400 dark:via-teal-300 dark:to-cyan-400 bg-clip-text text-transparent">
              которые приносят клиентов
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Создаём мощные интернет-магазины на 1С-Битрикс, быстрые корпоративные сайты и веб-сервисы на Next.js. 
            Помогаем бизнесу выделиться среди конкурентов и масштабировать продажи.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-16"
          >
            <Link
              href="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-95 shadow-xl shadow-emerald-600/25 transition-all duration-300"
            >
              <span>Обсудить проект</span>
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <Link
              href="/services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-900/80 hover:bg-zinc-200 dark:hover:bg-zinc-800 border border-zinc-200 dark:border-zinc-800 transition-all duration-300"
            >
              <span>Наши услуги</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </motion.div>

          {/* Trust Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-zinc-200/80 dark:border-zinc-800/80 w-full max-w-3xl text-left"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Lighthouse 95+</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Мгновенная скорость загрузки</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                <Sparkles className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Кастомный дизайн</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Без шаблонных решений</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900 dark:text-white">Договор и гарантия</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">12 месяцев техподдержки</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
