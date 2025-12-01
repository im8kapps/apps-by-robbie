import { cn } from "@/lib/utils";

type TagBadgeProps = {
  label: string;
  className?: string;
};

export function TagBadge({ label, className }: TagBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm",
        className,
      )}
    >
      {label}
    </span>
  );
}
