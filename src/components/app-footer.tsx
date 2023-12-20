import Link from "next/link";
import { siteConfig } from "@/config";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "./theme-toggle";

export function AppFooter() {
  return (
    <footer className="p-10">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
        <Link href="/">
          <Icons.logo className="hidden h-3 text-muted-foreground md:inline-block" />
        </Link>

        <p className="grow text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built by{" "}
          <a
            href={siteConfig.url}
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            {siteConfig.name}
          </a>
        </p>

        <ThemeToggle />
      </div>
    </footer>
  );
}
