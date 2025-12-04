import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, ExternalLink, Hammer } from "lucide-react";
import { Section } from "@/components/section";
import { TagBadge } from "@/components/tag-badge";
import { getProjectBySlug, projects } from "@/lib/projects";

type Params = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project not found | Apps by Robbie",
    };
  }

  return {
    title: `${project.name} | Apps by Robbie`,
    description: project.description,
    openGraph: {
      title: `${project.name} | Apps by Robbie`,
      description: project.description,
      url: `https://appsbyrobby.com/projects/${project.slug}`,
    },
  };
}

export default function ProjectDetail({ params }: Params) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const demoLink = project.demoLink ?? project.link;
  const codeLink = project.codeLink;

  return (
    <Section className="pb-24 pt-12 sm:pt-16">
      <div className="mb-6 fade-up" style={{ animationDelay: "60ms" }}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-blue)] transition hover:brightness-110"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>
      <div className="space-y-4 fade-up" style={{ animationDelay: "100ms" }}>
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
          {project.category}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand-navy)] sm:text-4xl">
          {project.name}
        </h1>
        <p className="text-lg text-slate-300">
          {project.longDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TagBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-200">
          {demoLink && (
            <Link
              href={demoLink}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] px-4 py-2 text-white shadow hover:shadow-md"
            >
              Live demo
              <ExternalLink className="h-4 w-4" />
            </Link>
          )}
          {codeLink && (
            <Link
              href={codeLink}
              className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.16)] px-4 py-2 text-[var(--brand-navy)] hover:border-[var(--brand-blue)]"
            >
              View code
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          )}
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="card rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--brand-surface)] p-6 shadow-sm fade-up" style={{ animationDelay: "140ms" }}>
          <h2 className="text-lg font-semibold text-[var(--brand-navy)]">
            Features
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="card rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--brand-surface)] p-6 shadow-sm md:col-span-2 fade-up" style={{ animationDelay: "180ms" }}>
          <div className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-[var(--brand-orange)]" />
            <h2 className="text-lg font-semibold text-[var(--brand-navy)]">
              Challenges & Solutions
            </h2>
          </div>
          <p className="mt-4 text-sm text-slate-300">
            {project.challenges}
          </p>
        </div>
      </div>
    </Section>
  );
}
