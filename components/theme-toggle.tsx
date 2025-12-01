"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-800 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-slate-600",
        className,
      )}
      aria-label="Toggle theme"
      aria-pressed={theme === "dark"}
    >
      {theme === "dark" ? (
        <>
          <Sun className="h-4 w-4" aria-hidden />
          Light
        </>
      ) : (
        <>
          <Moon className="h-4 w-4" aria-hidden />
          Dark
        </>
      )}
    </button>
  );
}
