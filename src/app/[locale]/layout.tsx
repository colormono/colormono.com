import "@/styles/globals.css";

import { Metadata } from "next";

import { locales } from "@/config";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ScrollToTop } from "@/components/scroll-top";
import { ThemeProvider } from "@/components/theme-provider";

import { notFound } from "next/navigation";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

// to-do: Temp static render
// @see https://next-intl-docs.vercel.app/docs/getting-started/app-router#static-rendering
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export async function generateMetadata({
  params: { locale },
}: Omit<Props, "children">): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL("http://localhost:3000"),
    title: {
      default: t("title"),
      template: `%s - ${t("title")}`,
    },
    description: t("description"),
    themeColor: [
      { media: "(prefers-color-scheme: light)", color: "white" },
      { media: "(prefers-color-scheme: dark)", color: "black" },
    ],
  };
}

export default function RootLayout({ children, params: { locale } }: Props) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  unstable_setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={cn("min-h-screen", fontSans.className)}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">{children}</div>
          <ScrollToTop />
        </ThemeProvider>
        {/* <Analytics /> */}
      </body>
    </html>
  );
}
