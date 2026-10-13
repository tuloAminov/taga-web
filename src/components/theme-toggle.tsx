"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        className="w-9 h-9 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/50"
        aria-hidden="true"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative flex items-center justify-center w-9 h-9 rounded-xl border border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500/40 dark:hover:border-emerald-500/40 transition-colors backdrop-blur-md shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/50"
      aria-label={isDark ? "Переключить на светлую тему" : "Переключить на тёмную тему"}
      title={isDark ? "Светлая тема" : "Тёмная тема"}
    >
      {isDark ? (
        <Sun className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
      ) : (
        <Moon className="w-4 h-4 transition-transform duration-300 rotate-0 scale-100" />
      )}
    </button>
  );
}
