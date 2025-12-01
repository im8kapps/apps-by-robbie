import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200/70 bg-white/90 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-slate-900">
            Apps by Robbie
          </p>
          <p className="text-sm text-slate-600">
            Mobile, web, and small-business builds that feel intentional.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600">
          <Link className="hover:text-sky-600" href="/">
            Home
          </Link>
          <Link
            className="hover:text-sky-600"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-sky-600"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-sky-600"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3 text-slate-700">
          <Link
            className="rounded-full border border-slate-200 p-2 transition hover:border-sky-400 hover:text-sky-600"
            href="https://github.com/appsbyrobby"
          >
            <Github className="h-4 w-4" aria-label="GitHub" />
          </Link>
          <Link
            className="rounded-full border border-slate-200 p-2 transition hover:border-sky-400 hover:text-sky-600"
            href="https://linkedin.com"
          >
            <Linkedin className="h-4 w-4" aria-label="LinkedIn" />
          </Link>
          <Link
            className="rounded-full border border-slate-200 p-2 transition hover:border-sky-400 hover:text-sky-600"
            href="mailto:robby@appsbyrobby.com"
          >
            <Mail className="h-4 w-4" aria-label="Email Robbie" />
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Apps by Robbie. Built with Next.js + Netlify.
      </div>
    </footer>
  );
}
