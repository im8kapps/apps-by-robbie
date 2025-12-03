import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { cn } from "@/lib/utils";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://appsbyrobby.com"),
  title: "Apps by Robbie | Mobile & Web Apps by Robbie Smith",
  description:
    "Mobile apps, web apps, and launch-ready sites built with React Native, Expo, and Next.js. Apps by Robbie.",
  openGraph: {
    title: "Apps by Robbie | Mobile & Web Apps by Robbie Smith",
    description:
      "Mobile apps, web apps, and launch-ready sites built with React Native, Expo, and Next.js.",
    url: "https://appsbyrobby.com",
    siteName: "Apps by Robbie",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Apps by Robbie | Mobile & Web Apps by Robbie Smith",
    description:
      "Mobile apps, web apps, and launch-ready sites built with React Native, Expo, and Next.js.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[var(--brand-ice)] text-[var(--brand-navy)] antialiased transition-colors duration-200",
          manrope.variable,
        )}
      >
        <div className="flex min-h-screen flex-col">
          <SiteHeader />
          <main className="flex-1">{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
