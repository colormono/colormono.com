import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Icons } from "@/components/icons";

export function MainNavDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="rounded-full">
          MORE
          <Icons.chevronDown className="ml-2 w-4" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="w-56">
        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/playground">Playground</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/design-system">Design System</Link>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
          <Link href="/awesome">Resources</Link>
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
  );
}
