import type { Metadata } from "next";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projects | Apps by Robbie",
  description:
    "A sampling of mobile apps, web apps, and small-business sites designed and built by Robbie Smith.",
};

export default function ProjectsPage() {
  return (
    <Section className="pb-24 pt-12 sm:pt-16">
      <PageHeader
        eyebrow="Projects"
        title="Recent builds across mobile, web, and launch-ready sites."
        subtitle="Each project shipped with a pragmatic roadmap, predictable milestones, and thoughtful handoff notes."
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </Section>
  );
}
