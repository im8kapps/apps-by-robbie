import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/lib/projects";
import { TagBadge } from "./tag-badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
};

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "card group flex h-full flex-col rounded-2xl border border-slate-200/80 bg-white/80 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg dark:border-slate-800 dark:bg-slate-900/70",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-sky-500">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-slate-900 dark:text-slate-50">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-sky-500" />
      </div>
      <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <TagBadge key={item} label={item} />
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm font-medium text-sky-600 dark:text-sky-300">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-full bg-sky-50 px-3 py-1 text-sky-700 transition group-hover:bg-sky-100 dark:bg-sky-950 dark:text-sky-200 dark:group-hover:bg-sky-900"
        >
          Read more
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          href={project.links.demo}
          className="inline-flex items-center gap-1 rounded-full border border-transparent px-2 py-1 text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300"
        >
          Live demo
          <ExternalLink className="h-4 w-4" />
        </Link>
        <Link
          href={project.links.code}
          className="inline-flex items-center gap-1 rounded-full border border-transparent px-2 py-1 text-slate-700 transition hover:text-sky-600 dark:text-slate-200 dark:hover:text-sky-300"
        >
          View code
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
