import { ArrowRight, Globe2, Rocket, Smartphone, Stars } from "lucide-react";
import { Section } from "@/components/section";
import { Button } from "@/components/button";
import { TagBadge } from "@/components/tag-badge";
import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/projects";

const highlightedTech = [
  "React Native",
  "Expo",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Firebase",
  "Supabase",
  "Netlify",
  "Vercel",
  "Stripe",
  "Notion",
  "iOS (SwiftUI basics)",
  "Android (Kotlin basics)",
];

const services = [
  {
    title: "Mobile Apps",
    desc: "React Native + Expo builds that feel fast, offline-friendly, and polished.",
    icon: Smartphone,
  },
  {
    title: "Web Apps",
    desc: "Next.js experiences with solid UX, clean data flows, and maintainable code.",
    icon: Globe2,
  },
  {
    title: "Small-Business Sites",
    desc: "Conversion-minded landing pages with Netlify forms and SEO baked in.",
    icon: Rocket,
  },
];

export default function Home() {
  return (
    <>
      <Section className="relative overflow-hidden pb-16 pt-12 sm:pt-16">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[var(--brand-ice)] via-[var(--brand-surface)] to-[var(--brand-ice-deep)] opacity-80 blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-6 fade-up" style={{ animationDelay: "60ms" }}>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-300">
                Robbie Smith — Mobile & Web
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-[var(--brand-navy)] sm:text-5xl">
                I build clean, practical apps for real people.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                React Native, Expo, and Next.js builds that respect timelines,
                budgets, and users. From prototypes to launch-ready products,
                I&apos;m your pragmatic partner.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button href="#projects" size="lg">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button href="#contact" variant="ghost" size="lg">
                Get in Touch
              </Button>
              <span className="text-sm text-slate-300">
                Based in Indiana — working globally.
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-300">
              <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[var(--brand-navy)]">
                <Stars className="h-4 w-4" />
                React Native
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[var(--brand-navy)]">
                <Stars className="h-4 w-4" />
                Next.js App Router
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-[rgba(255,255,255,0.04)] px-3 py-1 text-[var(--brand-navy)]">
                <Stars className="h-4 w-4" />
                Ship + iterate fast
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="services"
        eyebrow="What I do"
        title="Mobile, web, and launch-ready sites that respect your roadmap."
        description="Each project gets a calm plan, predictable milestones, and thoughtful handoff notes."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="card rounded-2xl border border-[rgba(255,255,255,0.08)] bg-gradient-to-b from-[var(--brand-surface)] to-[var(--brand-surface-strong)] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <div className="flex items-center gap-3">
                <service.icon className="h-5 w-5 text-[var(--brand-orange)]" />
                <h3 className="text-lg font-semibold text-[var(--brand-navy)]">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-200">{service.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Tech Stack"
        title="Tools I use to move quickly without sacrificing quality."
        description="TypeScript first, sensible state management, and deployment setups that teams can own."
      >
        <div className="flex flex-wrap gap-2">
          {highlightedTech.map((tech) => (
            <TagBadge key={tech} label={tech} />
          ))}
        </div>
      </Section>

      <Section
        id="projects"
        eyebrow="Featured work"
        title="A few projects that show how I approach product delivery."
      >
        <div className="grid gap-6 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              className="fade-up"
              style={{ animationDelay: `${index * 80}ms` }}
            />
          ))}
        </div>
        <div className="mt-8">
          <Button href="/projects" variant="outline">
            Browse all projects
          </Button>
        </div>
      </Section>

      <Section
        id="contact"
        eyebrow="Next step"
        title="Have an idea? Let’s make a calm plan."
        description="Tell me what you’re building and when you’d like to ship. I’ll reply with a simple roadmap and next steps."
        className="pb-24"
      >
        <div className="rounded-2xl border border-[rgba(255,255,255,0.08)] bg-gradient-to-r from-[var(--brand-surface)] via-[var(--brand-surface-strong)] to-[rgba(20,28,45,0.7)] p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-[var(--brand-navy)]">
                Ready when you are.
              </h3>
              <p className="text-sm text-slate-300">
                Share a few details and I&apos;ll respond within one business
                day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Open contact page</Button>
              <Button href="mailto:robbie@appsbyrobbie.com" variant="ghost">
                Email robbie@appsbyrobbie.com
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
