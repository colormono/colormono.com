import Link from "next/link";

import { Text } from "@/components/ui/text";

export default function SectionIntro() {
  return (
    <section id="intro" className="grid gap-4 lg:grid-cols-12">
      <main className="col-span-9">
        <Text variant="overline">Hello</Text>
        <Text variant="h3">
          A design system is a set of standards to manage design at scale by
          reducing redundancy while creating a shared language and visual
          consistency across different pages and channels.{" "}
          <a
            href="https://www.nngroup.com/articles/design-systems-101/"
            target="_blank"
            rel="noreferrer"
            className="hover:underline"
          >
            *
          </a>
        </Text>
        <Text>
          By establishing a design system, organizations can{" "}
          <strong>streamline the design and development process</strong>,
          improve consistency, and reduce the time and resources required to
          create digital products. It helps ensure that products are
          user-friendly, accessible, and meet the needs of users, while also
          supporting the overall brand identity and business goals of the
          organization.
        </Text>
      </main>

      <nav className="col-span-2 col-start-11">
        <Text variant="overline">Foundations</Text>
        <div className="flex flex-col items-baseline gap-2">
          <Link
            href="#principles"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Principles
          </Link>
          <Link
            href="#typography"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Typography
          </Link>
          <Link
            href="#icons"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Icons
          </Link>
          <Link
            href="#color"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Color
          </Link>
          <Link
            href="#grid"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Grid
          </Link>
          <Link
            href="#components"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Components
          </Link>
          <Link
            href="#examples"
            className="text-sm uppercase underline-offset-2 hover:underline"
          >
            Examples
          </Link>
        </div>
      </nav>
    </section>
  );
}
