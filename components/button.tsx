"use client";

import Link from "next/link";
import { ButtonHTMLAttributes, AnchorHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "ghost" | "outline";
type ButtonSize = "md" | "lg";

type BaseProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  href?: string;
};

type ButtonProps = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--brand-blue)] text-[#052136] shadow-sm hover:shadow-md hover:brightness-105",
  ghost:
    "bg-[rgba(255,255,255,0.06)] text-[var(--brand-navy)] shadow hover:shadow-md border border-[rgba(255,255,255,0.1)] hover:-translate-y-0.5 hover:border-[var(--brand-blue)]",
  outline:
    "border border-[rgba(255,255,255,0.14)] text-[var(--brand-navy)] hover:bg-[rgba(255,255,255,0.06)] hover:border-[var(--brand-blue)]",
};

const sizeClasses: Record<ButtonSize, string> = {
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      className,
      href,
      children,
      ...props
    },
    ref,
  ) => {
    const classes = cn(
      "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--brand-blue)] focus-visible:ring-offset-1 active:translate-y-0.5",
      variantClasses[variant],
      sizeClasses[size],
      className,
    );

    if (href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref}
        className={classes}
        type={props.type ?? "button"}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
