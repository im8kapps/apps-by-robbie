import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-4 text-center">
      <div className="relative">
        <div className="h-24 w-24 rounded-full bg-gradient-to-br from-sky-100 via-white to-sky-50 shadow-inner dark:from-sky-900/30 dark:via-slate-900 dark:to-slate-900" />
        <div className="absolute inset-0 flex items-center justify-center text-3xl font-semibold text-slate-700 dark:text-slate-200">
          404
        </div>
      </div>
      <div className="space-y-2">
        <h1 className="text-2xl font-semibold text-slate-900 dark:text-slate-50">
          Oops, that page wandered off.
        </h1>
        <p className="text-slate-600 dark:text-slate-300">
          The link you followed doesn’t exist. Let’s get you back on track.
        </p>
      </div>
      <Link
        href="/"
        className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow transition hover:bg-sky-600 dark:bg-sky-400 dark:text-slate-950 dark:hover:bg-sky-300"
      >
        Return home
      </Link>
    </div>
  );
}
