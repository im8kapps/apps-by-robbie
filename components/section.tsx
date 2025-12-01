import { cn } from "@/lib/utils";

type SectionProps = {
  id?: string;
  title?: string;
  eyebrow?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
};

export function Section({
  id,
  title,
  eyebrow,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20", className)}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(eyebrow || title) && (
          <div className="mb-8 max-w-3xl space-y-2">
            {eyebrow ? (
              <p className="text-sm font-semibold uppercase tracking-wide text-sky-500">
                {eyebrow}
              </p>
            ) : null}
            {title ? (
              <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
                {title}
              </h2>
            ) : null}
            {description ? (
              <p className="text-base text-slate-600">
                {description}
              </p>
            ) : null}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
