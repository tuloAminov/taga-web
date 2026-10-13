import { z } from "zod";

export const PROJECT_TYPES = [
  "Интернет-магазин",
  "Корпоративный сайт",
  "Landing Page",
  "Веб-приложение / SaaS",
  "Редизайн / Доработка",
  "Другое",
] as const;

export const BUDGET_RANGES = [
  "до 150 000 ₽",
  "150 000 — 300 000 ₽",
  "300 000 — 600 000 ₽",
  "от 600 000 ₽",
] as const;

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Пожалуйста, укажите ваше имя (минимум 2 символа)" })
    .max(50, { message: "Имя слишком длинное" }),
  email: z
    .string()
    .email({ message: "Введите корректный email адрес" }),
  phoneOrTelegram: z
    .string()
    .min(3, { message: "Укажите телефон или @username в Telegram" })
    .max(50, { message: "Слишком длинное значение" }),
  projectType: z.string().min(1, { message: "Выберите тип проекта" }),
  budget: z.string().min(1, { message: "Выберите ориентировочный бюджет" }),
  message: z
    .string()
    .min(10, { message: "Опишите задачу подробнее (минимум 10 символов)" })
    .max(2000, { message: "Сообщение не должно превышать 2000 символов" }),
});

export type ContactFormData = z.infer<typeof contactSchema>;
