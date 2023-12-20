import "@/styles/globals.css";

import { Metadata } from "next";

import { siteConfig } from "@/config";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
// import { Analytics } from "@/components/analytics"
import { ScrollToTop } from "@/components/scroll-top";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TailwindIndicator } from "@/components/tailwind-indicator";
import { ThemeProvider } from "@/components/theme-provider";

import { notFound } from "next/navigation";
import { unstable_setRequestLocale } from "next-intl/server";

// Can be imported from a shared config
const locales = ["en", "es"];

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  icons: {
    icon: "/favicon.ico",
    // shortcut: "/favicon-16x16.png",
    // apple: "/apple-touch-icon.png",
  },
};

// to-do: Temp static render
// @see https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }: any) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">{children}</div>
          <TailwindIndicator />
          <ScrollToTop />
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
