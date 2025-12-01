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

  return (
    <Section className="pb-24 pt-12 sm:pt-16">
      <div className="mb-6 fade-up" style={{ animationDelay: "60ms" }}>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-semibold text-sky-600 transition hover:text-sky-500"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to projects
        </Link>
      </div>
      <div className="space-y-4 fade-up" style={{ animationDelay: "100ms" }}>
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
          {project.category}
        </p>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
          {project.name}
        </h1>
        <p className="text-lg text-slate-600">
          {project.longDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <TagBadge key={tech} label={tech} />
          ))}
        </div>
        <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-700">
          <Link
            href={project.links.demo}
            className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-white shadow hover:bg-sky-600"
          >
            Live demo
            <ExternalLink className="h-4 w-4" />
          </Link>
          <Link
            href={project.links.code}
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 hover:border-sky-400"
          >
            View code
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>

      <div className="mt-10 grid gap-8 md:grid-cols-3">
        <div className="card rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm fade-up" style={{ animationDelay: "140ms" }}>
          <h2 className="text-lg font-semibold text-slate-900">
            Features
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {project.features.map((feature) => (
              <li key={feature} className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        <div className="card rounded-2xl border border-slate-200/70 bg-white p-6 shadow-sm md:col-span-2 fade-up" style={{ animationDelay: "180ms" }}>
          <div className="flex items-center gap-2">
            <Hammer className="h-5 w-5 text-sky-500" />
            <h2 className="text-lg font-semibold text-slate-900">
              Challenges & Solutions
            </h2>
          </div>
          <p className="mt-4 text-sm text-slate-600">
            {project.challenges}
          </p>
        </div>
      </div>
    </Section>
  );
}
