import { cn } from "@/lib/utils";

type TagBadgeProps = {
  label: string;
  className?: string;
};

export function TagBadge({ label, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.06)] px-3 py-1 text-xs font-medium text-[var(--brand-navy)] shadow-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}
