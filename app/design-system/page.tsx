"use client"

import dynamic from "next/dynamic"
import Link from "next/link"
import {
  Banknote,
  Bookmark,
  Bot,
  Box,
  BoxSelect,
  Briefcase,
  Cake,
  Cast,
  Coins,
  Component,
  Contact,
  CreditCard,
  Dice1,
  Dice2,
  Dice3,
  Dice4,
  Dice5,
  Dice6,
  Dices,
  Eraser,
  Inbox,
  Landmark,
  ListChecks,
  Mail,
  Moon,
  MoreHorizontal,
  Network,
  Pencil,
  PiggyBank,
  Puzzle,
  Send,
  Share,
  Share2,
  ShieldAlert,
  Sun,
  User,
  Users,
  Wallet,
} from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

const HeroSketch = dynamic(() => import("@/sketches/HeroSketch"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export default function Page() {
  const { resolvedTheme, setTheme } = useTheme()

  return (
    <section className="container mx-auto">
      <div id="intro">
        <HeroSketch theme={resolvedTheme} />

        <section className="py-16">
          <p className="mb-12 text-xs text-muted-foreground">INTRO</p>
          <p className="max-w-4xl text-3xl">
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
          </p>
          <p className="mt-12 max-w-xl text-lg">
            By establishing a design system, organizations can streamline the
            design and development process, improve consistency, and reduce the
            time and resources required to create digital products. It helps
            ensure that products are user-friendly, accessible, and meet the
            needs of users, while also supporting the overall brand identity and
            business goals of the organization.
          </p>
        </section>

        <section className="mb-16 flex text-xs gap-16 items-end">
          <div className="flex flex-1 flex-col gap-2 p-2 bg-slate-100 mb-2 text-slate-400 uppercase">
            <header className="bg-slate-50 h-8"></header>
            <nav className="bg-slate-50 h-8"></nav>
            <main className="bg-slate-50 h-8"></main>
            <aside className="bg-slate-50 h-8"></aside>
            <span>Desktop homepage mock</span>
          </div>

          <div className="flex flex-col gap-2 p-2 bg-slate-100 mb-2 text-slate-400 uppercase">
            <header className="bg-slate-50 h-8"></header>
            <nav className="bg-slate-50 h-8"></nav>
            <main className="bg-slate-50 h-8"></main>
            <aside className="bg-slate-50 h-8"></aside>
            <span>Tablet podcast mock</span>
          </div>

          <div className="flex flex-col gap-2 p-2 bg-slate-100 mb-2 text-slate-400 uppercase">
            <header className="bg-slate-50 h-8"></header>
            <nav className="bg-slate-50 h-8"></nav>
            <main className="bg-slate-50 h-8"></main>
            <main className="bg-slate-50 h-8"></main>
            <aside className="bg-slate-50 h-8"></aside>
            <span>Mobile newsfeed mock</span>
          </div>

          <div className="flex flex-1 flex-col gap-2 p-2 bg-slate-100 mb-2 text-slate-400 uppercase">
            <header className="bg-slate-50 h-8"></header>
            <nav className="bg-slate-50 h-8"></nav>
            <main className="bg-slate-50 h-8"></main>
            <aside className="bg-slate-50 h-8"></aside>
            <span>Dropdown mock</span>
          </div>
        </section>
      </div>

      <nav className="pt-2 pb-4 sticky top-[91px] z-50 inset-x-0 w-full bg-white/80 dark:bg-black/80 backdrop-blur-md transition-colors duration-300 ease-in-out">
        <div className="flex items-baseline gap-10 text-sm uppercase">
          <p color="neutral">SECTIONS</p>
          <Link href="#intro" scroll={false} className="border-b-2">
            Intro
          </Link>
          <Link href="#principles" scroll={false}>
            Principles
          </Link>
          <Link href="#typography" scroll={false}>
            Typography
          </Link>
          <Link href="#icons" scroll={false}>
            Icons
          </Link>
          <Link href="#color" scroll={false}>
            Color
          </Link>
          <Link href="#grid" scroll={false}>
            Layout
          </Link>
          <Link href="#components" scroll={false}>
            Components
          </Link>
          <Link href="#examples" scroll={false}>
            Examples
          </Link>
        </div>
      </nav>

      <section id="principles" className="bg-slate-900 text-white py-40">
        <div>
          <p>Principles</p>
          <p>
            Design principles for creative organizations may include some of the
            common principles, such as user-centered design, consistency, and
            accessibility, but may also emphasize additional principles that are
            specific to creative work. Here are some design principles that can
            be applied in creative organizations:
          </p>
          <p>
            Innovation: Creative organizations should prioritize innovation and
            creativity in their designs, seeking out new and innovative ways to
            solve problems and meet the needs of their clients and users.
          </p>
          <p>
            Collaboration: Design should involve collaboration between
            designers, clients, and other stakeholders, promoting open
            communication and collaboration to ensure that all perspectives are
            considered.
          </p>
          <p>
            Empathy: Designers should have empathy for their clients and users,
            seeking to understand their needs and perspectives in order to
            create designs that are effective and impactful.
          </p>
          <p>
            Authenticity: Design should be authentic and true to the values and
            mission of the organization, reflecting its personality and
            positioning in a way that is genuine and honest.
          </p>
          <p>
            Experimentation: Design should be experimental and exploratory,
            encouraging designers to try out new ideas and approaches to see
            what works best.
          </p>
          <p>
            Storytelling: Design should tell a story and engage users in a way
            that is compelling and meaningful, using visual and narrative
            elements to create an emotional connection.
          </p>
          <p>
            Aesthetics: Design should prioritize aesthetics and beauty, creating
            designs that are visually appealing and engaging.
          </p>
          <p>
            Flexibility: Design should be flexible and adaptable, allowing for
            changes and adjustments as needed to meet the evolving needs of the
            organization and its users.
          </p>
          <div className="flex justify-left items-end ">
            <span className="font-bold text-4xl">
              <span className="text-primary">~ </span>
              <span className="animate-pulse">_</span>
            </span>
          </div>
        </div>
      </section>

      <div id="typography" className="py-24">
        <section className="mb-16">
          <p color="neutral" className="mb-24">
            Typography
          </p>
          <p className="mb-16">
            Typography creates purposeful texture, guiding users to read and
            understand the hierarchy of information. The right typographic
            treatment and the controlled usage of type styles helps manage the
            display of content, keeping it useful, simple, and effective.
            <a
              href="https://carbondesignsystem.com/guidelines/typography/overview/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              *
            </a>
          </p>

          <ul className="flex flex-col divide-y border-y">
            <li className="py-12">
              <div className="w-full lg:flex justify-between items-center gap-3">
                <p className="max-w-2xl">God is in the kerning.</p>
                <p color="neutral" className="text-right">
                  Variant H1
                  <br />
                  Font Sans
                </p>
              </div>
            </li>
            <li className="py-8">
              <div className="w-full lg:flex justify-between items-center gap-3">
                <p>Mi vieja crió un idiota de corazón lunático.</p>
                <p color="neutral" className="text-right">
                  Variant h2
                </p>
              </div>
            </li>
            <li className="py-6">
              <p>Mi vieja crió un idiota de corazón lunático.</p>
              <p color="neutral" className="text-right">
                Variant h3
              </p>
            </li>
            <li className="py-6">
              <p>Mi vieja crió un idiota de corazón lunático.</p>
              <p color="neutral" className="text-right">
                Variant h4
              </p>
            </li>
            <li className="py-6">
              <p>Mi vieja crió un idiota de corazón lunático.</p>
              <p color="neutral" className="text-right">
                Variant h5
              </p>
            </li>
            <li className="py-6">
              <p>Mi vieja crió un idiota de corazón lunático.</p>
              <p color="neutral" className="text-right">
                Variant h6
              </p>
            </li>
            <li className="py-6">
              <p className="max-w-xl">
                Paragraph laborum vitae enim excepturi distinctio. Aliquam a
                placeat atque dolores explicabo corrupti atque sit. Eius odit
                dolores. Reprehenderit nihil enim quos voluptatem quas
                perferendis quis. Sunt aperiam maiores aut magni voluptas ipsum.
              </p>
              <p color="neutral" className="text-right">
                Variant body
              </p>
            </li>
            <li className="py-6">
              <p className="max-w-xl">
                Paragraph laborum vitae enim excepturi distinctio. Aliquam a
                placeat atque dolores explicabo corrupti atque sit. Eius odit
                dolores. Reprehenderit nihil enim quos voluptatem quas
                perferendis quis. Sunt aperiam maiores aut magni voluptas ipsum.
              </p>
              <p color="neutral" className="text-right">
                Variant body2
              </p>
            </li>
            <li className="py-6">
              <p>Violencia es mentir</p>
              <p color="neutral" className="text-right">
                Variant subtitle1
              </p>
            </li>
            <li className="py-6">
              <p>Violencia es mentir</p>
              <p color="neutral" className="text-right">
                Variant subtitle2
              </p>
            </li>
          </ul>
        </section>
      </div>

      <section className="bg-slate-200 py-24">
        <div>
          <div className="text-white dark:text-slate-100 inline-block">
            <svg className="h-24" viewBox="0 0 44 10">
              <g className="fill-current">
                <rect y="0" x="0" height="10" width="10" />
                <circle cx="17" cy="5" r="5" />
                <path d="M 33.990061,10 33.995261,9.99477 24,0 v 9.999966 z" />
                <path d="M 38.980059,9.6432493e-6 A 5,5 0 0 0 34,4.9997043 5,5 0 0 0 38.999694,9.9999159 5,5 0 0 0 43.999906,4.9997043 5,5 0 0 0 38.999694,9.6432493e-6 a 5,5 0 0 0 -0.01964,0 z M 38.999699,2.8194757 A 2.1802361,2.1802361 0 0 1 41.18044,4.9997043 2.1802361,2.1802361 0 0 1 38.999694,7.1799331 2.1802361,2.1802361 0 0 1 36.819466,4.9997043 2.1802361,2.1802361 0 0 1 38.999694,2.8194757 Z" />
              </g>
            </svg>
          </div>
        </div>
      </section>

      <div id="icons" className="py-24">
        <section className="mb-16">
          <p color="neutral" className="mb-24">
            Icons
          </p>
          <p className="mb-32">
            An icon family ensures that all pictograms and ideograms within the
            system share a consistent style, which makes it easier for users to
            understand their meaning and use them correctly.
          </p>
          <div className="grid grid-cols-12 gap-16">
            <Network />
            <ShieldAlert />
            <Landmark />
            <Wallet />
            <CreditCard />
            <Banknote />
            <Coins />
            <PiggyBank />
            <Briefcase />
            <User />
            <Users />
            <Contact />
            <Bookmark />
            <Share />
            <Share2 />
            <Send />
            <Mail />
            <Inbox />
            <ListChecks />
            <Cake />
            <Cast />
            <Bot />
            <Pencil />
            <Eraser />
            <Box />
            <Component />
            <Puzzle />
            <BoxSelect />
            <Dice1 />
            <Dice2 />
            <Dice3 />
            <Dice4 />
            <Dice5 />
            <Dice6 />
            <Dices />
            <a href="https://lucide.dev/" target="_blank" rel="noreferrer">
              <MoreHorizontal />
            </a>
          </div>
        </section>
      </div>

      <section className="bg-gradient-to-r from-primary to-secondary dark:hidden">
        <div className="h-64 flex items-center gap-8 text-white">
          <button
            onClick={() => setTheme("dark")}
            className="mt-4 gap-1 flex flex-col"
          >
            <Sun />
          </button>
          <a href="https://www.youtube.com/watch?v=LdvvPtIfR8w">
            <p>Color mood</p>
            <p>Summer Day</p>
          </a>
        </div>
      </section>

      <section className="hidden dark:block bg-gradient-to-r from-primary-dark middle to-tertiary">
        <div className="h-64 flex items-center gap-8 text-white">
          <button
            onClick={() => setTheme("light")}
            className="mt-4 gap-1 flex flex-col"
          >
            <Moon />
          </button>
          <a href="https://www.youtube.com/watch?v=JFFq8xgBQZI">
            <p>Color mood</p>
            <p>Summer Night</p>
          </a>
        </div>
      </section>

      <div id="color" className="py-24">
        <section>
          <p color="neutral" className="mb-24">
            Color
          </p>
          <p className="mb-16">
            To support the user experience, colors need to be combined wisely so
            that they work together well, do not overwhelm, and communicate the
            same kind of information everywhere in the interface.{" "}
            <a
              href="https://www.nngroup.com/articles/color-enhance-design/"
              target="_blank"
              rel="noreferrer"
            >
              *
            </a>
          </p>

          <div className="grid grid-cols-10">
            <div className="bg-white border text-black col-span-2">
              <span className="p-5 block text-sm uppercase tracking-tight">
                White
                <br />
                #ffffff
              </span>
            </div>
            <div className="bg-muted text-black col-span-3">
              <span className="p-5 block text-sm uppercase tracking-tight">
                Neutral
                <br />
                #e2e8f0
              </span>
            </div>
            <div className="bg-slate-dark text-white col-span-3">
              <span className="p-5 block text-sm uppercase tracking-tight">
                Neutral Dark
                <br />
                #475569
              </span>
            </div>
            <div className="aspect-video bg-black text-white col-span-2">
              <span className="p-5 block text-sm uppercase tracking-tight">
                Black
                <br />
                #000000
              </span>
            </div>
          </div>
          <div className="grid grid-cols-10 h-6">
            <div className="bg-slate-50 text-black"></div>
            <div className="bg-slate-100 text-black"></div>
            <div className="bg-slate-200 text-black"></div>
            <div className="bg-slate-300 text-black"></div>
            <div className="bg-slate-400 text-black"></div>
            <div className="bg-slate-500 text-black"></div>
            <div className="bg-slate-600 text-black"></div>
            <div className="bg-slate-700 text-black"></div>
            <div className="bg-slate-800 text-black"></div>
            <div className="bg-slate-900 text-black"></div>
          </div>
          <div className="h-28 bg-primary text-white">
            <span className="p-5 block text-sm uppercase tracking-tight">
              Blue
              <br />
              #002BFF
            </span>
          </div>
          <div className="grid grid-cols-10 h-6">
            <div className="bg-primary-50 text-black"></div>
            <div className="bg-primary-100 text-black"></div>
            <div className="bg-primary-200 text-black"></div>
            <div className="bg-primary-300 text-black"></div>
            <div className="bg-primary-400 text-black"></div>
            <div className="bg-primary-500 text-black"></div>
            <div className="bg-primary-600 text-black"></div>
            <div className="bg-primary-700 text-black"></div>
            <div className="bg-primary-800 text-black"></div>
            <div className="bg-primary-900 text-black"></div>
          </div>
          <div className="h-28 bg-primary-dark text-white">
            <span className="p-5 block text-sm uppercase tracking-tight">
              Blue Dark
              <br />
              #271E78
            </span>
          </div>
          <div className="h-28 bg-secondary text-black">
            <span className="p-5 block text-sm uppercase tracking-tight">
              Ocean
              <br />
              #C1EEFF
            </span>
          </div>
          <div className="grid grid-cols-10 h-6">
            <div className="bg-secondary-50 text-black"></div>
            <div className="bg-secondary-100 text-black"></div>
            <div className="bg-secondary-200 text-black"></div>
            <div className="bg-secondary-300 text-black"></div>
            <div className="bg-secondary-400 text-black"></div>
            <div className="bg-secondary-500 text-black"></div>
            <div className="bg-secondary-600 text-black"></div>
            <div className="bg-secondary-700 text-black"></div>
            <div className="bg-secondary-800 text-black"></div>
            <div className="bg-secondary-900 text-black"></div>
          </div>
          <div className="h-28 bg-secondary-dark text-white">
            <span className="p-5 block text-sm uppercase tracking-tight">
              Ocean Dark
              <br />
              #0D0D7F
            </span>
          </div>
          <div className="h-28 bg-tertiary text-black">
            <span className="p-5 block text-sm uppercase tracking-tight">
              Pink
              <br />
              #34D585
            </span>
          </div>
          <div className="grid grid-cols-10 h-6">
            <div className="bg-slate-50 text-black"></div>
            <div className="bg-slate-100 text-black"></div>
            <div className="bg-slate-200 text-black"></div>
            <div className="bg-slate-300 text-black"></div>
            <div className="bg-slate-400 text-black"></div>
            <div className="bg-slate-500 text-black"></div>
            <div className="bg-slate-600 text-black"></div>
            <div className="bg-slate-700 text-black"></div>
            <div className="bg-slate-800 text-black"></div>
            <div className="bg-slate-900 text-black"></div>
          </div>
          <div className="h-28 bg-slate-dark text-white">
            <span className="p-5 block text-sm uppercase tracking-tight">
              Pink Dark
              <br />
              #0D0D7F
            </span>
          </div>
        </section>
      </div>

      <div id="grid" className="py-24">
        <section className="mb-16">
          <p color="neutral" className="mb-24">
            Grid
          </p>

          <p>
            Grids are a great framework to help designers quickly put together a
            clean, well-aligned interface, and help users to easily scan, read,
            and use those interfaces.
          </p>

          <div className="grid grid-cols-5 lg:grid-cols-12 gap-4 mb-4 mt-16">
            <div className="bg-muted aspect-square">01</div>
            <div className="bg-muted">02</div>
            <div className="bg-muted">03</div>
            <div className="bg-muted">04</div>
            <div className="bg-muted">05</div>
            <div className="bg-muted">06</div>
            <div className="bg-muted">07</div>
            <div className="bg-muted">08</div>
            <div className="bg-muted">09</div>
            <div className="bg-muted">10</div>
            <div className="bg-muted">11</div>
            <div className="bg-muted">12</div>
          </div>

          <div className="grid grid-cols-5 lg:grid-cols-12 gap-4 mb-4">
            <div className="bg-muted col-span-3 aspect-video">01</div>
            <div className="bg-muted col-span-5">02</div>
            <div className="bg-muted col-span-2">03</div>
            <div className="bg-muted col-span-2">04</div>
          </div>

          <div className="grid grid-rows-6 grid-cols-5 lg:grid-cols-12 gap-4">
            <div className="bg-muted row-span-6 col-span-4 aspect-square">
              01
            </div>
            <div className="bg-muted row-span-2 col-span-8">02</div>
            <div className="bg-muted row-span-4 col-span-4">03</div>
            <div className="bg-muted row-span-4 col-span-4">04</div>
          </div>
        </section>

        <section className="mb-16">
          <div className="w-full flex flex-col items-center justify-center aspect-[16/4] bg-black">
            <p className="text-white mb-12">Call to action</p>
            <Button>Click here</Button>
          </div>
        </section>

        <section className="mb-16">
          <div>Components</div>
          <p>
            A collection of reusable UI components, such as buttons, forms, and
            icons, that can be assembled to create new pages and features.
          </p>
          <p>
            Code standards: Guidelines for writing clean, scalable, and
            maintainable code, including naming conventions, file structure, and
            coding practices.
          </p>
          <div>Show Code / Copy code button</div>
          <div>Filters (Tabs, Buttons, Edit mode)</div>
          <div>
            Table (Avatar, UserCard, Link, IconButton, Pagination, Edit mode)
          </div>
          <div>
            <Button>Button</Button>
            <Button variant="outline">Button</Button>
            <Button>Button</Button>
            <Button>Button</Button>
          </div>
        </section>

        <section className="mb-16">
          <div>Shapes Animation</div>
        </section>

        <section className="mb-16">
          <div>Sitemap</div>
        </section>

        <section className="mb-16">
          <div>Page mockups</div>
        </section>
      </div>
    </section>
  )
}
