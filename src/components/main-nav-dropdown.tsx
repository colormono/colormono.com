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
        <Button variant="ghost" size="sm" className="px-1.5">
          <div className="flex h-6 w-6 items-center justify-center">
            <Icons.ellipsis className="w-5" />
          </div>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="right-0 w-56" align="end">
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
