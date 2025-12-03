"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-30 border-b border-[rgba(255,255,255,0.06)] bg-[rgba(12,22,38,0.9)] backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo_banner_noBG.png"
            alt="Apps by Robbie"
            width={140}
            height={38}
            className="h-9 w-auto rounded-md"
            priority
          />
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium text-[var(--brand-navy)] sm:flex">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition hover:text-[var(--brand-blue)]",
                  isActive && "text-[var(--brand-blue)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.06)] px-3 py-2 text-sm font-semibold text-[var(--brand-navy)] shadow-sm transition hover:-translate-y-0.5 hover:border-[var(--brand-blue)] hover:shadow-md sm:inline-flex"
          >
            Let&apos;s talk
          </Link>
        </div>
      </div>
    </header>
  );
}
