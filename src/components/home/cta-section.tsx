"use client";

import { ContactForm } from "@/components/contact-form";
import { MessageSquare, Phone, Mail, Clock, ShieldCheck, Sparkles } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contact-cta" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-indigo-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Text / Info */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Начните ваш проект
              </div>
              <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 dark:text-white font-heading leading-tight">
                Готовы обсудить вашу задачу?
              </h2>
              <p className="text-zinc-600 dark:text-zinc-400 text-base sm:text-lg mt-4 leading-relaxed">
                Заполните форму, и мы свяжемся с вами в течение 2 часов. 
                Проведём бесплатный аудит вашей ниши, подготовим варианты решений и сформируем точную смету с дорожной картой.
              </p>
            </div>

            {/* Value bullets */}
            <div className="space-y-4">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">Ответ за 2 часа</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Быстро вникаем в ТЗ и даём обратную связь без бюрократии</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-zinc-900 dark:text-white">NDA и конфиденциальность</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">Гарантируем сохранность ваших бизнес-данных и идеи</p>
                </div>
              </div>
            </div>

            {/* Direct Instant Channels */}
            <div className="pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80 space-y-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 block">
                Предпочитаете мессенджеры?
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://t.me"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  <span>Написать в Telegram</span>
                </a>
                <a
                  href="mailto:hello@taga-studio.ru"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-800 dark:text-zinc-200 bg-zinc-100 dark:bg-zinc-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>hello@taga-studio.ru</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-7">
            <ContactForm isCompact={false} />
          </div>
        </div>
      </div>
    </section>
  );
}
