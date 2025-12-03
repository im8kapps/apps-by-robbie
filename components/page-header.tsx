import { cn } from "@/lib/utils";

type PageHeaderProps = {
  title: string;
  subtitle?: string;
  eyebrow?: string;
  className?: string;
};

export function PageHeader({
  title,
  subtitle,
  eyebrow,
  className,
}: PageHeaderProps) {
  return (
    <div className={cn("mb-10 space-y-3", className)}>
      {eyebrow ? (
        <p className="text-sm font-semibold uppercase tracking-wide text-[var(--brand-blue)]">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="text-3xl font-semibold tracking-tight text-[var(--brand-navy)] sm:text-4xl">
        {title}
      </h1>
      {subtitle ? (
        <p className="text-lg text-slate-300">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
