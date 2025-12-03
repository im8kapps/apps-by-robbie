import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] bg-[rgba(12,22,38,0.9)] py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div className="space-y-2">
          <p className="text-lg font-semibold text-[var(--brand-navy)]">
            Apps by Robbie
          </p>
          <p className="text-sm text-slate-200">
            Mobile, web, and small-business builds that feel intentional.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-300">
          <Link className="hover:text-[var(--brand-blue)]" href="/">
            Home
          </Link>
          <Link
            className="hover:text-[var(--brand-blue)]"
            href="/projects"
          >
            Projects
          </Link>
          <Link
            className="hover:text-[var(--brand-blue)]"
            href="/about"
          >
            About
          </Link>
          <Link
            className="hover:text-[var(--brand-blue)]"
            href="/contact"
          >
            Contact
          </Link>
        </div>
        <div className="flex items-center gap-3 text-[var(--brand-navy)]">
          <Link
            className="rounded-full border border-[rgba(255,255,255,0.1)] p-2 transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            href="https://github.com/appsbyrobby"
          >
            <Github className="h-4 w-4" aria-label="GitHub" />
          </Link>
          <Link
            className="rounded-full border border-[rgba(255,255,255,0.1)] p-2 transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            href="https://linkedin.com"
          >
            <Linkedin className="h-4 w-4" aria-label="LinkedIn" />
          </Link>
          <Link
            className="rounded-full border border-[rgba(255,255,255,0.1)] p-2 transition hover:border-[var(--brand-blue)] hover:text-[var(--brand-blue)]"
            href="mailto:robbie@appsbyrobbie.com"
          >
            <Mail className="h-4 w-4" aria-label="Email Robbie" />
          </Link>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-slate-400">
        © {new Date().getFullYear()} Apps by Robbie. Built with Next.js + Netlify.
      </div>
    </footer>
  );
}
