import Image from "next/image"
import Link from "next/link"
import { allPosts, allWorks } from "@/.contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"

import { buttonVariants } from "@/components/ui/button"

export default function Home() {
  const featuredWorks = allWorks.filter((work) => work.featured)
  const works = featuredWorks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )
  const latestPosts = posts.slice(0, 3)

  return (
    <section className="container grid items-center gap-6">
      <div className="my-12 flex flex-col items-start lg:mb-16 lg:mt-24">
        <h1 className="relative mb-8 text-4xl uppercase tracking-tight md:text-7xl">
          Hello, World
          <div className="absolute -right-10 bottom-2 animate-pulse">
            <div className="h-1 w-8 bg-primary"></div>
          </div>
        </h1>
        <p className="max-w-3xl text-xl sm:text-2xl sm:leading-relaxed">
          I&apos;m{" "}
          <Link
            href="/about"
            className="font-semibold hover:underline hover:underline-offset-8"
          >
            Mariano Rivas
          </Link>
          , a new-media artist and software developer.{" "}
          <br className="hidden sm:inline" />I work at{" "}
          <Link
            href="https://truenorth.co"
            className="font-semibold hover:underline hover:underline-offset-8"
          >
            TrueNorth
          </Link>{" "}
          as Front-end Engineer. Thanks to having creative coding skills, I have
          the privilege of contributing to various aspects of the creative
          process, from inception to realization.
        </p>
      </div>

      <div className="my-16 grid gap-12">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-regular uppercase">Selected Works</h2>
          <Link
            href="/works"
            className={buttonVariants({ variant: "secondary" })}
          >
            ALL WORKS
          </Link>
        </div>

        <div className="grid grid-cols-3 gap-10">
          {works.map((work) => (
            <article key={work._id} className="">
              <Link href={work.slug} className="group">
                <Image
                  src={work.thumbnail || "/static/work/thumb-default.jpg"}
                  width={640}
                  height={480}
                  alt={work.title}
                  className="opacity-90 transition-opacity duration-300 group-hover:opacity-100"
                />
                <h3 className="mt-4 font-black uppercase">{work.title}</h3>
                <time
                  dateTime={work.date}
                  className="mb-2 block text-xs text-muted-foreground"
                >
                  {format(parseISO(work.date), "yyyy")}
                </time>
              </Link>
              {work.description && (
                <p className="mt-1 max-w-sm text-muted-foreground">
                  {work.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>

      <Link href="/posts" className="relative -mx-10 p-10">
        <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-md transition-colors">
          <span className={buttonVariants({ variant: "secondary" })}>LAB</span>
        </div>
        <div className="grid h-60 grid-cols-3 gap-16 overflow-hidden">
          {latestPosts.map((item) => (
            <div key={item._id} className="">
              <Image
                src={item.thumbnail || "/static/work/thumb-default.jpg"}
                width={640}
                height={480}
                alt={item.title}
              />
            </div>
          ))}
        </div>
      </Link>
    </section>
  )
}
