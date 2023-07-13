import Link from "next/link"

import { siteConfig } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { ThemeToggle } from "@/components/theme-toggle"

export function SiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 my-0 w-full bg-background/80 backdrop-blur-md transition-colors md:my-10">
      <div className="container flex h-16 items-center space-x-5 sm:justify-between md:h-20 md:space-x-16">
        <Link
          href="/"
          className="flex items-center space-x-2 md:justify-center "
        >
          <Icons.logo className="h-4 md:h-5" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <MainNav items={siteConfig.mainNav} />

        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="w-9 px-0" asChild>
              <Link
                href={siteConfig.links.instagram}
                target="_blank"
                rel="noreferrer"
              >
                <Icons.instagram />
              </Link>
            </Button>
            {/* <Link
              href={siteConfig.links.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={buttonVariants({
                  size: "sm",
                  variant: "ghost",
                })}
              >
                <Icons.twitter className="h-5 w-5 fill-current" />
                <span className="sr-only">Twitter</span>
              </div>
            </Link> */}
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
