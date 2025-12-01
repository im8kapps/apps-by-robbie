import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/80 py-10 dark:border-slate-800/70 dark:bg-slate-950/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-900 dark:text-slate-50">
            Apps by Robbie
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-300">
            Mobile, web, and small-business builds that feel intentional.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-300">
          <Link className="hover:text-sky-600 dark:hover:text-sky-300" href="/">
            Home
          </Link>
          <Link
            className="hover:text-sky-600 dark:hover:text-sky-300"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-sky-600 dark:hover:text-sky-300"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-sky-600 dark:hover:text-sky-300"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3 text-slate-700 dark:text-slate-200">
          <Link
            className="rounded-full border border-slate-200 p-2 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:hover:border-sky-400 dark:hover:text-sky-300"
            href="https://github.com/appsbyrobby"
          >
            <Github className="h-4 w-4" aria-label="GitHub" />
          </Link>
          <Link
            className="rounded-full border border-slate-200 p-2 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:hover:border-sky-400 dark:hover:text-sky-300"
            href="https://linkedin.com"
          >
            <Linkedin className="h-4 w-4" aria-label="LinkedIn" />
          </Link>
          <Link
            className="rounded-full border border-slate-200 p-2 transition hover:border-sky-400 hover:text-sky-600 dark:border-slate-700 dark:hover:border-sky-400 dark:hover:text-sky-300"
            href="mailto:robby@appsbyrobby.com"
          >
            <Mail className="h-4 w-4" aria-label="Email Robbie" />
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
        © {new Date().getFullYear()} Apps by Robbie. Built with Next.js + Netlify.
      </div>
    </footer>
  );
}
