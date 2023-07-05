import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export function SiteFooter() {
  return (
    <footer className="border-t border-dashed">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-8 md:px-0">
          <Icons.logo className="hidden h-3 text-muted-foreground md:inline-block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
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
        </div>
        <div>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left flex gap-2">
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
        </div>
      </div>
    </footer>
  )
}
