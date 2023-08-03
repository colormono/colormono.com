import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

import { ThemeToggle } from "./theme-toggle"

export function SiteFooter() {
  return (
    <footer className="py-8">
      <div className="container flex flex-col items-center justify-between gap-10 md:flex-row">
        <Icons.logo className="hidden h-3 text-muted-foreground md:inline-block" />

        <p className="grow text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.links.twitter}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Colormono
          </a>
          . The source code is available on{" "}
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>

        <p className="flex gap-4 text-center text-sm leading-loose text-muted-foreground md:justify-end">
          <a
            href="/design-system"
            className="font-medium underline underline-offset-4"
          >
            Design System
          </a>
          <a
            href="/awesome"
            className="font-medium underline underline-offset-4"
          >
            Awesome
          </a>
          <a
            href="https://photos.colormono.com"
            className="font-medium underline underline-offset-4"
          >
            Photos
          </a>
        </p>

        <ThemeToggle />
      </div>
    </footer>
  )
}
