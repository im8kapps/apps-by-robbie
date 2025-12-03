import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Project } from "@/lib/projects";
import { TagBadge } from "./tag-badge";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  className?: string;
  style?: React.CSSProperties;
};

export function ProjectCard({ project, className, style }: ProjectCardProps) {
  return (
    <div
      className={cn(
        "card group flex h-full flex-col rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[var(--brand-surface)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg",
        className
      )}
      style={style}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
            {project.category}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-[var(--brand-navy)]">
            {project.name}
          </h3>
        </div>
        <ArrowUpRight className="h-5 w-5 text-slate-400 transition group-hover:text-[var(--brand-blue)]" />
      </div>
      <p className="mt-3 text-sm text-slate-200">{project.description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tech.map((item) => (
          <TagBadge key={item} label={item} />
        ))}
      </div>
      <div className="mt-6 flex items-center gap-3 text-sm font-medium text-[var(--brand-blue)]">
        <Link
          href={`/projects/${project.slug}`}
          className="inline-flex items-center gap-1 rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-[var(--brand-blue)] transition group-hover:bg-[rgba(255,255,255,0.12)]"
        >
          Read more
          <ArrowUpRight className="h-4 w-4" />
        </Link>
        <Link
          href={project.link}
          className="inline-flex items-center gap-1 rounded-full border border-transparent px-2 py-1 text-[var(--brand-navy)] transition hover:text-[var(--brand-blue)]"
        >
          View project
          <ExternalLink className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
