import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { ThemeToggle } from "./theme-toggle";

export function AppFooter() {
  return (
    <footer className="p-10">
      <div className="flex flex-col items-center justify-between gap-10 md:flex-row">
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

        <ThemeToggle />
      </div>
    </footer>
  );
}
