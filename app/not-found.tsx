import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-[var(--brand-surface)] via-[var(--brand-ice)] to-[#1a263a] shadow-inner" />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-[var(--brand-navy)]">
          404
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-[var(--brand-navy)]">
          Oops, that page wandered off.
        </h1>
        <p className="text-slate-300">
          The link you followed doesn’t exist. Let’s get you back on track.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[var(--brand-blue)] to-[var(--brand-orange)] px-5 py-3 text-sm font-semibold text-white shadow transition hover:shadow-md"
      >
        Return home
      </Link>
    </div>
  );
}
