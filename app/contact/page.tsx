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
        <div className="card rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <ContactForm />
        </div>
        <div className="space-y-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
          <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-50">
            How I work
          </h2>
          <ul className="space-y-3 text-sm text-slate-600 dark:text-slate-300">
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
              <span>
                Clear weekly updates with demos or Looms so you always know
                progress.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
              <span>
                Maintainable code: TypeScript, sensible folder structure,
                comments only when they add clarity.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-500" />
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
