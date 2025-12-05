import type { Metadata } from "next";
import Image from "next/image";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { TagBadge } from "@/components/tag-badge";

export const metadata: Metadata = {
  title: "About Robbie | Apps by Robbie",
  description:
    "Meet Robbie Smith, a React Native and web developer building mobile apps, web apps, and small-business sites.",
};

const values = [
  {
    title: "Clear communication",
    detail: "Straightforward updates, async-friendly, and no jargon walls.",
  },
  {
    title: "Maintainable code",
    detail:
      "TypeScript-first, predictable folder structures, and readable components.",
  },
  {
    title: "Calm delivery",
    detail: "Short feedback loops, scoped milestones, and demo-ready builds.",
  },
];

const timeline = [
  {
    year: "2011",
    title: "Started my degree program",
    detail: "Built my first React Native app for a local nonprofit’s volunteers.",
  },
  {
    year: "2019",
    title: "Product engineer at a SaaS startup",
    detail: "Owned mobile and web dashboards, introduced TypeScript across teams.",
  },
  {
    year: "2022",
    title: "Independent builder",
    detail:
      "Partnered with founders and small businesses on Expo apps and marketing sites.",
  },
  {
    year: "Now",
    title: "Apps by Robbie",
    detail:
      "Helping teams ship mobile + web experiences with predictable, calm roadmaps.",
  },
];

export default function AboutPage() {
  return (
    <Section className="pb-24 pt-12 sm:pt-16">
      <PageHeader
        eyebrow="About"
        title="Hi, I’m Robbie Smith."
        subtitle="Indiana-based builder creating mobile and web products that feel intentional, stay maintainable, and ship on time."
      />
      <div className="grid gap-6 md:grid-cols-[1.2fr,1fr]">
        <div
          className="card flex items-center gap-4 rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--brand-surface)] p-5 shadow-sm fade-up"
          style={{ animationDelay: "60ms" }}
        >
          <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl ring-1 ring-[rgba(255,255,255,0.12)]">
            <Image
              src="/84A5DC63-614A-4045-B48B-876DD5012888_1_105_c.jpeg"
              alt="Robbie Smith headshot"
              fill
              sizes="80px"
              className="object-cover"
              priority
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
              About me
            </p>
            <p className="text-lg font-semibold text-[var(--brand-navy)]">
              Robbie Smith
            </p>
            <p className="text-sm text-slate-300">
              Mobile + web developer based in Indiana. Friendly, calm, and
              focused on clear delivery.
            </p>
          </div>
        </div>
        <div
          className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--brand-surface)] p-5 shadow-sm fade-up"
          style={{ animationDelay: "120ms" }}
        >
          <h2 className="text-lg font-semibold text-[var(--brand-navy)]">Skills snapshot</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "React Native",
              "Expo",
              "iOS (SwiftUI basics)",
              "Android (Kotlin basics)",
              "Next.js",
              "TypeScript",
              "Firebase",
              "Netlify",
              "Tailwind CSS",
            ].map((item) => (
              <TagBadge key={item} label={item} />
            ))}
          </div>
        </div>
      </div>

      <div className="mt-10 grid gap-10 lg:grid-cols-[2fr,1fr]">
        <div className="space-y-6 text-lg text-slate-200 fade-up" style={{ animationDelay: "80ms" }}>
          <p>
            I’m a React Native and Next.js developer who enjoys partnering with
            teams to turn sketches into shipped products. My focus is on calm,
            pragmatic delivery: clear milestones, tidy code, and UIs that feel
            good to use.
          </p>
          <p>
            I have a background in design-adjacent roles, so I value details
            like microcopy, spacing, and loading states. I’m comfortable
            collaborating with designers, PMs, and stakeholders to keep
            decisions moving.
          </p>
        </div>
        <div className="card rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--brand-surface)] p-6 shadow-sm fade-up" style={{ animationDelay: "140ms" }}>
          <h2 className="text-lg font-semibold text-[var(--brand-navy)]">
            Values
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-300">
            {values.map((value) => (
              <li key={value.title} className="rounded-xl bg-[rgba(255,255,255,0.04)] p-3">
                <p className="font-semibold text-[var(--brand-navy)]">
                  {value.title}
                </p>
                <p className="text-sm text-slate-300">
                  {value.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-semibold text-[var(--brand-navy)]">
          How I got here
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          {timeline.map((item) => (
            <div
              key={item.year}
              className="rounded-2xl border border-[rgba(255,255,255,0.06)] bg-[var(--brand-surface)] p-5 shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
                {item.year}
              </p>
              <p className="mt-2 text-lg font-semibold text-[var(--brand-navy)]">
                {item.title}
              </p>
              <p className="text-sm text-slate-300">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
