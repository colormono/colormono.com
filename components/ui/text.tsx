import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const textVariants = cva("transition-colors last:mb-0 first:mt-0", {
  variants: {
    variant: {
      h1: "max-w-4xl text-7xl mb-10 tracking-tight",
      h2: "max-w-4xl text-5xl mb-10 tracking-tight",
      h3: "max-w-4xl text-3xl mb-10 tracking-tight",
      lead: "max-w-3xl text-2xl mb-8 leading-normal",
      body: "max-w-3xl text-lg mb-8",
      small: "max-w-2xl text-base mb-8",
      caption: "text-sm tracking-wide text-muted-foreground mb-8",
      overline: "text-xs uppercase tracking-wider text-muted-foreground mb-8",
    },
  },
  defaultVariants: {
    variant: "body",
  },
})

export interface TextProps
  extends React.HTMLAttributes<HTMLParagraphElement & HTMLHeadingElement>,
    VariantProps<typeof textVariants> {}

function Text({ className, variant, ...props }: TextProps) {
  // To-do: add semantic heading support h1, h2, h3, etc.
  return <p className={cn(textVariants({ variant }), className)} {...props} />
}

export { Text, textVariants }
