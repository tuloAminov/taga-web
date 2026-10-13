import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-heading",
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://taga-studio.ru"),
  title: {
    default: "TAGA STUDIO — Разработка сайтов и интернет-магазинов",
    template: "%s | TAGA STUDIO",
  },
  description:
    "Разрабатываем высококонверсионные сайты, интернет-магазины и веб-сервисы, которые привлекают клиентов и масштабируют бизнес.",
  keywords: [
    "разработка сайтов",
    "создание интернет-магазина",
    "веб студия",
    "Next.js разработка",
    "лендинг под ключ",
    "дизайн сайтов",
  ],
  authors: [{ name: "TAGA STUDIO" }],
  creator: "TAGA STUDIO",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://taga-studio.ru",
    siteName: "TAGA STUDIO",
    title: "TAGA STUDIO — Разработка сайтов и интернет-магазинов",
    description:
      "Разрабатываем современные сайты и интернет-магазины, приносящие клиентов.",
  },
  twitter: {
    card: "summary_large_image",
    title: "TAGA STUDIO — Разработка сайтов и интернет-магазинов",
    description:
      "Разрабатываем современные сайты и интернет-магазины, приносящие клиентов.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 antialiased selection:bg-emerald-500/20 selection:text-emerald-500">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          <div className="flex min-h-screen flex-col">
            <Header />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
