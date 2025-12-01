import {
  ArrowRight,
  Globe2,
  Rocket,
  Smartphone,
  Sparkles,
  Stars,
} from "lucide-react";
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
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-sky-100 via-white to-blue-50 opacity-80 blur-3xl" />
        <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-6 fade-up" style={{ animationDelay: "60ms" }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-sky-600 shadow-sm ring-1 ring-slate-200/80">
              <Sparkles className="h-4 w-4" />
              Apps by Robbie
            </div>
            <div className="space-y-4">
              <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
                Robbie Smith — Mobile & Web
              </p>
              <h1 className="text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                I build clean, practical apps for real people.
              </h1>
              <p className="max-w-2xl text-lg text-slate-600">
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
              <span className="text-sm text-slate-500">
                Based in Indiana — working globally.
              </span>
            </div>
            <div className="flex flex-wrap gap-2 text-sm text-slate-500">
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                <Stars className="h-4 w-4" />
                React Native
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                <Stars className="h-4 w-4" />
                Next.js App Router
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-slate-100 px-3 py-1 text-slate-700">
                <Stars className="h-4 w-4" />
                Ship + iterate fast
              </span>
            </div>
          </div>
          <div
            className="card relative max-w-md rounded-3xl border border-slate-200 bg-white p-6 shadow-lg fade-up"
            style={{ animationDelay: "140ms" }}
          >
            <div className="absolute right-4 top-4 h-10 w-10 rounded-full bg-sky-500/10 blur-2xl" />
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Quick Snapshot
            </p>
            <ul className="mt-4 space-y-3 text-sm text-slate-700">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                7+ years building mobile & web products with TypeScript.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Comfortable across the stack: UI polish, API wiring, deploys.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Focused on maintainable patterns teams can live with.
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
                Friendly, direct communication — async or live.
              </li>
            </ul>
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
              className="card rounded-2xl border border-sky-100 bg-gradient-to-b from-white to-sky-50 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg fade-up"
              style={{ animationDelay: "80ms" }}
            >
              <div className="flex items-center gap-3">
                <service.icon className="h-5 w-5 text-sky-500" />
                <h3 className="text-lg font-semibold text-slate-900">
                  {service.title}
                </h3>
              </div>
              <p className="mt-3 text-sm text-slate-600">
                {service.desc}
              </p>
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
        <div className="rounded-2xl border border-slate-200 bg-gradient-to-r from-white via-sky-50 to-white p-8 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold text-slate-900">
                Ready when you are.
              </h3>
              <p className="text-sm text-slate-600">
                Share a few details and I&apos;ll respond within one business
                day.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Button href="/contact">Open contact page</Button>
              <Button href="mailto:robbie@appsbyrobby.com" variant="ghost">
                Email robbie@appsbyrobby.com
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
