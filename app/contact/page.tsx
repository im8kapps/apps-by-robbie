import type { Metadata } from "next";
import { Section } from "@/components/section";
import { PageHeader } from "@/components/page-header";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact | Apps by Robbie",
  description:
    "Start a project with Robbie Smith. Netlify-friendly contact form for mobile apps, web apps, and small-business sites.",
};

export default function ContactPage() {
  return (
    <Section className="pb-24 pt-12 sm:pt-16">
      <PageHeader
        eyebrow="Contact"
        title="Tell me about your project."
        subtitle="A few sentences are enough. I’ll follow up with a simple plan and a starting estimate."
      />

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="card rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[var(--brand-surface)] p-6 shadow-sm fade-up" style={{ animationDelay: "60ms" }}>
          <ContactForm />
        </div>
        <div className="space-y-5 rounded-2xl border border-[rgba(255,255,255,0.08)] bg-[var(--brand-surface)] p-6 shadow-sm fade-up" style={{ animationDelay: "120ms" }}>
          <h2 className="text-xl font-semibold text-[var(--brand-navy)]">
            How I work
          </h2>
          <ul className="space-y-3 text-sm text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
              <span>
                Clear weekly updates with demos or Looms so you always know
                progress.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
              <span>
                Maintainable code: TypeScript, sensible folder structure,
                comments only when they add clarity.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--brand-orange)]" />
              <span>
                Deployment-ready: Netlify/Next.js setup, environment variable
                checklists, and handoff docs.
              </span>
            </li>
          </ul>
        </div>
      </div>
    </Section>
  );
}
