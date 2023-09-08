import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

import { ThemeToggle } from "./theme-toggle";

export function SiteFooter() {
  return (
    <footer className="py-12 xl:py-24">
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
          . Source code on{" "}
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

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="rounded-full">
              Secret pages
              <Icons.chevronDown className="ml-2 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent className="w-56">
            <DropdownMenuItem asChild>
              <Link href="/design-system">Design System</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard">Dashboard</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/playground">Playground</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/awesome">Awesome Links</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link
                href="https://photos.colormono.com"
                target="_black"
                rel="noopener noreferrer"
              >
                Photos
              </Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <ThemeToggle />
      </div>
    </footer>
  );
}
