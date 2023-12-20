import Link from "next/link";

import { siteConfig } from "@/config";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { MainNav } from "@/components/main-nav";
import { ThemeToggle } from "@/components/theme-toggle-button";
import { MainNavDropdown } from "@/components/main-nav-dropdown";

export function SiteHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 my-0 w-full bg-background/80 backdrop-blur-md transition-colors md:my-10">
      <div className="container flex h-16 items-center space-x-10 sm:justify-between md:h-20 md:space-x-20">
        <Link
          href="/"
          className="flex items-center space-x-2 md:justify-center "
        >
          <Icons.logo className="h-4 md:h-5" />
          <span className="sr-only">{siteConfig.name}</span>
        </Link>

        <div className="flex flex-1 gap-4">
          <MainNav items={siteConfig.mainNav} />
        </div>

        <nav className="flex items-center space-x-2">
          <Button variant="ghost" size="sm" className="px-1.5" asChild>
            <Link
              href={siteConfig.links.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.instagram className="h-6 w-6" />
            </Link>
          </Button>

          <Button variant="ghost" size="sm" className="px-1.5" asChild>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Icons.gitHub className="h-6 w-6" />
            </Link>
          </Button>

          <ThemeToggle />
          <MainNavDropdown />
        </nav>
      </div>
    </header>
  );
}
