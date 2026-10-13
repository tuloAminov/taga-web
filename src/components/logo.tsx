import * as React from "react";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showDescriptor?: boolean;
}

export function Logo({ className, showDescriptor = true }: LogoProps) {
  return (
    <div className={cn("group flex items-center gap-3", className)}>
      {/* Фирменный кибернетический знак Т в индиго-сквиркле */}
      <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-600 shadow-md shadow-indigo-500/25 group-hover:scale-105 transition-transform duration-300 shrink-0">
        <svg
          viewBox="0 0 60 60"
          className="w-7 h-7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          {/* Буква Т со скошенными кибер-углами */}
          <path
            d="M12 25 L19 18 H48 V26 H35 V48 L27 48 V26 H12 Z"
            fill="#FFFFFF"
          />
          {/* Отражающая грань среза 45° */}
          <polygon points="48,18 48,26 40,18" fill="#EEF2FF" />
        </svg>
      </div>

      {/* Текстовая часть */}
      <div className="flex flex-col">
        <span className="font-extrabold tracking-tight leading-none text-xl text-zinc-900 dark:text-white transition-colors">
          ТАГА
        </span>
        {showDescriptor && (
          <span className="text-[10px] tracking-widest text-indigo-600 dark:text-indigo-400 font-bold uppercase mt-1 transition-colors">
            IT-СТУДИЯ
          </span>
        )}
      </div>
    </div>
  );
}
