"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Icons } from "@/components/icons"

export function ThemeToggle() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="flex gap-0.5 rounded-full border border-muted p-0.5 transition-all">
      <Button
        variant="ghost"
        size="sm"
        className={cn("w-9 rounded-full p-0", theme === "light" && "bg-muted")}
        onClick={() => setTheme("light")}
      >
        <Icons.sun className="h-4 w-4" aria-label="Light" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn("w-9 rounded-full p-0", theme === "system" && "bg-muted")}
        onClick={() => setTheme("system")}
      >
        <Icons.monitor className="h-4 w-4" aria-label="System" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        className={cn("w-9 rounded-full p-0", theme === "dark" && "bg-muted")}
        onClick={() => setTheme("dark")}
      >
        <Icons.moon className="h-4 w-4" aria-label="Dark" />
      </Button>
    </div>
  )
}
