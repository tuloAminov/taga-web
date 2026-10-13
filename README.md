# TAGA STUDIO — Официальный сайт-портфолио веб-студии

Современный, быстрый и конверсионный сайт-портфолио для веб-студии, специализирующейся на разработке сайтов, интернет-магазинов и веб-приложений.

---

## 🛠 Стек технологий

- **Фреймворк:** [Next.js](https://nextjs.org/) (App Router) + TypeScript
- **Стилизация:** [Tailwind CSS](https://tailwindcss.com/)
- **Анимации:** [Framer Motion](https://www.framer.com/motion/)
- **Иконки:** [Lucide React](https://lucide.dev/)
- **Темы:** [next-themes](https://github.com/pacocoursey/next-themes) (тёмная и светлая темы с сохранением в `localStorage`)
- **Контент кейсов:** MDX-файлы с парсингом через `gray-matter` и `next-mdx-remote`
- **Форма связи:** React Hook Form + Zod валидация + серверный API route (`/api/contact`)
- **Шрифты:** `Inter` и `Manrope` с полной поддержкой кириллицы через `next/font/google`
- **SEO:** Metadata API, динамический `sitemap.xml` и `robots.txt`

---

## 🚀 Быстрый запуск

### 1. Установка зависимостей
```bash
npm install
```

### 2. Запуск локального сервера разработки
```bash
npm run dev
```
После запуска откройте в браузере: [http://localhost:3000](http://localhost:3000)

### 3. Сборка для production
```bash
npm run build
npm run start
```

---

## 📁 Структура проекта

```
├── content/
│   └── projects/                # MDX-файлы проектов портфолио
│       ├── mebel-shop.mdx
│       ├── saas-crm.mdx
│       ├── nordic-arch.mdx
│       └── fintech-pay.mdx
├── public/
│   └── images/
│       └── projects/            # Обложки и скриншоты для кейсов
├── src/
│   ├── app/
│   │   ├── layout.tsx           # Корневой layout, шрифты, ThemeProvider, Header, Footer
│   │   ├── globals.css          # CSS переменные, цвета, сетка, glassmorphism
│   │   ├── page.tsx             # Главная страница (Hero, Услуги, Преимущества, Кейсы, FAQ, CTA)
│   │   ├── about/               # Страница "О нас" (миссия, ценности, команда, стек)
│   │   ├── services/            # Страница "Услуги" (детальный состав работ, цены, сроки)
│   │   ├── portfolio/           # Каталог проектов с фильтрацией по категориям
│   │   │   └── [slug]/          # Динамическая страница проекта (MDX, галерея, стек)
│   │   ├── contact/             # Страница контактов с формой и картой
│   │   ├── api/contact/         # API endpoint для отправки заявок
│   │   ├── sitemap.ts           # Генерация карты сайта
│   │   └── robots.ts            # Правила индексации для поисковиков
│   ├── components/              # UI компоненты (Header, Footer, ThemeToggle, ContactForm и др.)
│   ├── lib/                     # Утилиты, парсер MDX и схемы Zod
│   └── types/                   # TypeScript интерфейсы
```

---

## 📝 Как добавить новый проект в портфолио

Каждый проект создаётся простым добавлением файла с расширением `.mdx` в папку `/content/projects/`.

### Пример создания нового файла `/content/projects/my-new-project.mdx`:

```mdx
---
title: "Название вашего проекта"
slug: "my-new-project"
category: "ecommerce" # Доступные категории: "ecommerce" | "websites" | "webapp"
cover: "/images/projects/my-new-project/cover.svg"
gallery:
  - "/images/projects/my-new-project/1.svg"
  - "/images/projects/my-new-project/2.svg"
stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL"]
client: "ООО Название Клиента"
year: 2025
duration: "2 месяца"
url: "https://example.com"
excerpt: "Короткое описание для превью-карточки в каталоге (1-2 предложения)."
featured: true # true — показывать на главной странице, false — только в общем каталоге
---

## Задача
Опишите, с какой проблемой или бизнес-задачей к вам обратился заказчик...

## Решение
Расскажите о выбранной архитектуре, UX/UI дизайне и технических особенностях реализации...

## Результат
- **+75%** рост конверсии
- **0.4 сек** скорость загрузки страницы
- **Lighthouse 98** баллов

## Функционал
- Каталог с фильтрами и мгновенным поиском
- Онлайн-оплата картами и СБП
- Интеграция с 1С и CRM-системой
```

> **Важно:** Файл обложки и скриншоты галереи помещайте в папку `/public/images/projects/[папка-проекта]/`. Поддерживаются форматы `.jpg`, `.png`, `.webp`, `.svg`.

---

## 🎨 Как поменять цвета и внешний вид

### 1. Изменение цветовой палитры и акцентов
Все основные цвета и переменные темы вынесены в файл `src/app/globals.css`:

```css
:root {
  /* Светлая тема */
  --background: #fafafa;
  --foreground: #09090b;
  --primary: #059669; /* Основной изумрудный акцент */
  --border: #e4e4e7;
}

.dark {
  /* Тёмная тема */
  --background: #09090b;
  --foreground: #fafafa;
  --primary: #10b981; /* Яркий акцент в тёмной теме */
  --border: #27272a;
}
```

Чтобы сменить акцент, например, с изумрудного на индиго, достаточно заменить hex-значения `--primary` на `#6366f1` (индиго) или нужный корпоративный цвет.

### 2. Изменение текстов, услуг и цен
- **Услуги и цены:** редактируются в массивах объектов в `src/components/home/services-section.tsx` и `src/app/services/page.tsx`.
- **Преимущества и цифры:** редактируются в `src/components/home/stats-section.tsx`.
- **Этапы работы:** редактируются в `src/components/home/process-section.tsx`.
- **Отзывы клиентов:** редактируются в `src/components/home/testimonials-section.tsx`.
- **Вопросы и ответы (FAQ):** редактируются в `src/components/home/faq-section.tsx`.
- **Контакты студии:** редактируются в `src/components/footer.tsx` и `src/app/contact/page.tsx`.

---

## 📬 Подключение реальной отправки заявок из формы

Обработчик заявок находится в файле `src/app/api/contact/route.ts`. По умолчанию он валидирует данные с помощью Zod и выводит заявку в консоль сервера.

### 1. Подключение Telegram Bot API
Создайте бота через `@BotFather`, получите токен и добавьте в `.env.local`:
```env
TELEGRAM_BOT_TOKEN="ваш_токен"
TELEGRAM_CHAT_ID="ваш_chat_id"
```
Раскомментируйте готовый блок в `src/app/api/contact/route.ts`:
```ts
const botToken = process.env.TELEGRAM_BOT_TOKEN;
const chatId = process.env.TELEGRAM_CHAT_ID;
const text = `🔔 *Новая заявка с сайта*\n*Имя:* ${name}\n*Email:* ${email}\n*Контакт:* ${phoneOrTelegram}\n*Тип:* ${projectType}\n*Бюджет:* ${budget}\n*Текст:* ${message}`;

await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ chat_id: chatId, text, parse_mode: "Markdown" })
});
```

### 2. Подключение отправки на Email (Resend)
Установите библиотеку `npm i resend` и отправляйте письма:
```ts
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
await resend.emails.send({
  from: "leads@yourdomain.ru",
  to: "hello@taga-studio.ru",
  subject: `Новая заявка: ${projectType} от ${name}`,
  text: `Имя: ${name}\nEmail: ${email}\nТелефон: ${phoneOrTelegram}\nБюджет: ${budget}\nСообщение: ${message}`,
});
```

---

## 📄 Лицензия

Проект создан для коммерческого использования веб-студией TAGA STUDIO.


Taga/
├── content/projects/          # 📝 База кейсов (файлы .mdx)
├── public/                    # 🖼 Статика: картинки, иконки, svg
│   └── images/projects/       # Обложки и скриншоты для кейсов
└── src/
    ├── app/                   # 🌐 Страницы и API-роуты (Next.js App Router)
    │   ├── layout.tsx         # Корневой каркас (шрифты, тема, Header, Footer)
    │   ├── page.tsx           # Главная страница (собирает блоки)
    │   ├── globals.css        # Глобальные стили Tailwind и токены
    │   ├── services/page.tsx  # Страница «Услуги и цены»
    │   ├── portfolio/         # Каталог портфолио и динамический кейс [slug]
    │   ├── about/page.tsx     # Страница «О студии»
    │   ├── contact/page.tsx   # Страница «Контакты» с формой
    │   ├── api/contact/       # Обработчик отправки формы (POST)
    │   ├── sitemap.ts         # Генератор sitemap.xml
    │   └── robots.ts          # Генератор robots.txt
    ├── components/            # 🧩 UI-компоненты
    │   ├── header.tsx         # Шапка сайта и меню
    │   ├── footer.tsx         # Подвал сайта и контакты
    │   ├── contact-form.tsx   # Интерактивная форма заявки
    │   ├── home/              # Секции только для главной страницы
    │   └── portfolio/         # Компоненты для фильтрации и показа проектов
    ├── lib/                   # ⚙️ Логика, парсеры и утилиты
    │   ├── projects.ts        # Чтение и сортировка MDX-проектов
    │   ├── contact-schema.ts  # Zod-схема валидации формы и типы
    │   └── utils.ts           # Утилита cn (clsx + twMerge)
    └── types/                 # 🏷 TypeScript-типы
        └── project.ts         # Тип Project, категории и лейблы

