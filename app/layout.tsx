import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

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
          "min-h-screen bg-slate-50 text-slate-900 antialiased transition-colors duration-200 dark:bg-slate-950 dark:text-slate-50",
          manrope.variable,
        )}
      >
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
