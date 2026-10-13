"use client";

import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  contactSchema,
  ContactFormData,
  PROJECT_TYPES,
  BUDGET_RANGES,
} from "@/lib/contact-schema";
import { CheckCircle2, Loader2, Send, AlertCircle, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ContactFormProps {
  className?: string;
  isCompact?: boolean;
}

export function ContactForm({ className, isCompact = false }: ContactFormProps) {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [serverError, setServerError] = React.useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneOrTelegram: "",
      projectType: PROJECT_TYPES[0],
      budget: BUDGET_RANGES[1],
      message: "",
    },
  });

  const selectedType = watch("projectType");
  const selectedBudget = watch("budget");

  const onSubmit = async (data: ContactFormData) => {
    setServerError(null);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Не удалось отправить заявку");
      }

      setIsSuccess(true);
      reset();
    } catch (err: unknown) {
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("Произошла ошибка при отправке. Пожалуйста, напишите нам в Telegram.");
      }
    }
  };

  if (isSuccess) {
    return (
      <div
        className={cn(
          "rounded-2xl border border-emerald-500/30 bg-emerald-500/5 p-8 text-center backdrop-blur-md animate-in fade-in zoom-in-95 duration-300",
          className
        )}
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-500 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">
          Заявка успешно отправлена!
        </h3>
        <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-md mx-auto mb-6">
          Спасибо за обращение. Мы изучим ваши требования и свяжемся с вами в течение 2 часов для обсуждения деталей и предварительной оценки.
        </p>
        <button
          type="button"
          onClick={() => setIsSuccess(false)}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/20 transition-colors"
        >
          <span>Отправить ещё одно сообщение</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={cn(
        "rounded-2xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 p-6 sm:p-8 backdrop-blur-xl shadow-xl shadow-zinc-950/5 space-y-6",
        className
      )}
      noValidate
    >
      {serverError && (
        <div className="rounded-xl border border-rose-500/30 bg-rose-500/10 p-4 text-sm text-rose-600 dark:text-rose-400 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
          <span>{serverError}</span>
        </div>
      )}

      {/* Project Type Selector */}
      {!isCompact && (
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Тип проекта
          </label>
          <div className="flex flex-wrap gap-2">
            {PROJECT_TYPES.map((type) => {
              const isSelected = selectedType === type;
              return (
                <button
                  key={type}
                  type="button"
                  onClick={() => setValue("projectType", type, { shouldValidate: true })}
                  className={cn(
                    "px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium transition-all duration-200 border",
                    isSelected
                      ? "bg-emerald-500 text-white border-emerald-500 shadow-xs shadow-emerald-500/20 font-semibold"
                      : "bg-zinc-100/70 dark:bg-zinc-800/60 border-zinc-200/80 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/40"
                  )}
                >
                  {type}
                </button>
              );
            })}
          </div>
          {errors.projectType && (
            <p className="text-xs text-rose-500 mt-1">{errors.projectType.message}</p>
          )}
        </div>
      )}

      {/* Budget Selector */}
      {!isCompact && (
        <div className="space-y-2.5">
          <label className="text-xs font-semibold uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
            Ориентировочный бюджет
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {BUDGET_RANGES.map((range) => {
              const isSelected = selectedBudget === range;
              return (
                <button
                  key={range}
                  type="button"
                  onClick={() => setValue("budget", range, { shouldValidate: true })}
                  className={cn(
                    "px-3 py-2 rounded-lg text-xs font-medium transition-all duration-200 border text-center",
                    isSelected
                      ? "bg-zinc-900 dark:bg-emerald-600 text-white border-zinc-900 dark:border-emerald-600 font-semibold shadow-xs"
                      : "bg-zinc-100/70 dark:bg-zinc-800/60 border-zinc-200/80 dark:border-zinc-700/60 text-zinc-700 dark:text-zinc-300 hover:border-emerald-500/40"
                  )}
                >
                  {range}
                </button>
              );
            })}
          </div>
          {errors.budget && (
            <p className="text-xs text-rose-500 mt-1">{errors.budget.message}</p>
          )}
        </div>
      )}

      {/* Inputs Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Name */}
        <div className="space-y-1.5">
          <label htmlFor="name" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            Ваше имя <span className="text-emerald-500">*</span>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Александр"
            {...register("name")}
            className={cn(
              "w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all",
              errors.name
                ? "border-rose-500"
                : "border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-600"
            )}
          />
          {errors.name && (
            <p className="text-xs text-rose-500">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            Email <span className="text-emerald-500">*</span>
          </label>
          <input
            id="email"
            type="email"
            placeholder="alex@company.ru"
            {...register("email")}
            className={cn(
              "w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all",
              errors.email
                ? "border-rose-500"
                : "border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-600"
            )}
          />
          {errors.email && (
            <p className="text-xs text-rose-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Phone / Telegram */}
      <div className="space-y-1.5">
        <label htmlFor="phoneOrTelegram" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Телефон или Telegram <span className="text-emerald-500">*</span>
        </label>
        <input
          id="phoneOrTelegram"
          type="text"
          placeholder="+7 (999) 000-00-00 или @username"
          {...register("phoneOrTelegram")}
          className={cn(
            "w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all",
            errors.phoneOrTelegram
              ? "border-rose-500"
              : "border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-600"
          )}
        />
        {errors.phoneOrTelegram && (
          <p className="text-xs text-rose-500">{errors.phoneOrTelegram.message}</p>
        )}
      </div>

      {/* Message */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Расскажите о вашей задаче <span className="text-emerald-500">*</span>
        </label>
        <textarea
          id="message"
          rows={isCompact ? 3 : 4}
          placeholder="Нужен интернет-магазин с каталогом на 500 товаров, интеграцией 1С и онлайн-оплатой..."
          {...register("message")}
          className={cn(
            "w-full px-4 py-2.5 rounded-xl text-sm bg-zinc-50 dark:bg-zinc-800/60 border text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all resize-y",
            errors.message
              ? "border-rose-500"
              : "border-zinc-200/80 dark:border-zinc-700/60 hover:border-zinc-300 dark:hover:border-zinc-600"
          )}
        />
        {errors.message && (
          <p className="text-xs text-rose-500">{errors.message.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-base font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:scale-[0.99] disabled:opacity-70 disabled:pointer-events-none transition-all shadow-lg shadow-emerald-600/25 cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Отправляем заявку...</span>
            </>
          ) : (
            <>
              <span>Отправить заявку на расчет</span>
              <Send className="w-4 h-4" />
            </>
          )}
        </button>
        <p className="text-[11px] text-zinc-500 dark:text-zinc-400 text-center mt-2.5">
          Нажимая кнопку, вы соглашаетесь на обработку персональных данных. Мы не рассылаем спам.
        </p>
      </div>
    </form>
  );
}
