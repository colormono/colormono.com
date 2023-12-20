import Link from "next/link";

import { siteConfig } from "@/config";
import { Icons } from "@/components/icons";
import { MainNavDropdown } from "./main-nav-dropdown";

export function AppHeader() {
  return (
    <header className="sticky inset-x-0 top-0 z-50 my-0 w-full bg-background/80 backdrop-blur-md transition-colors">
      <div className="flex h-16 items-center space-x-10 px-10 sm:justify-between md:h-24 md:space-x-20 2xl:h-32">
        <div className="flex flex-1">
          <Link
            href="/"
            className="flex items-center space-x-2 md:justify-center "
          >
            <Icons.logo className="h-4 md:h-5" />
            <span className="sr-only">{siteConfig.name}</span>
          </Link>
        </div>

        <nav className="flex items-center space-x-2">
          <MainNavDropdown />
        </nav>
      </div>
    </header>
  );
}
