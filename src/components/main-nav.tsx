"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { NavItem } from "@/types/nav";
import { cn } from "@/lib/utils";

interface MainNavProps {
  items?: NavItem[];
}

export function MainNav({ items }: MainNavProps) {
  const pathname = usePathname();

  return (
    <>
      {items?.length ? (
        <nav className="flex gap-5">
          {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-semibold uppercase",
                    pathname?.startsWith(item.href)
                      ? "text-foreground"
                      : "text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80",
                  )}
                >
                  {item.title}
                </Link>
              ),
          )}
        </nav>
      ) : null}
    </>
  );
}
