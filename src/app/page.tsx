import Image from "next/image";
import Link from "next/link";
import { allPosts, allWorks } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ScrollDown } from "@/components/scroll-down";
import { Text } from "@/components/ui/text";
import { cn } from "@/lib/utils";
import SectionHero from "./section-hero";

export default function Home() {
  const featuredWorks = allWorks.filter((work) => work.featured);
  const works = featuredWorks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );
  const latestPosts = posts.slice(0, 3);

  return (
    <div className="container grid items-center gap-6">
      <section className="relative">
        <div className="relative z-20 flex aspect-video flex-col items-center justify-center">
          <div className="mb-24 w-full xl:mb-40">
            <Text variant="h1" className="relative inline-block">
              Hello, World
              <span className="absolute -right-8 bottom-0 animate-pulse">
                <span className="inline-block h-1 w-5 bg-foreground" />
              </span>
            </Text>

            <Text variant="lead">
              I&apos;m{" "}
              <Link
                href="/about"
                className="font-semibold hover:underline hover:underline-offset-4"
              >
                Mariano Rivas
              </Link>
              , a new-media artist and software developer.{" "}
              <br className="hidden sm:inline" />I work at{" "}
              <Link
                href="https://truenorth.co"
                className="font-semibold hover:underline hover:underline-offset-4"
              >
                TrueNorth
              </Link>{" "}
              as Lead Front-end Engineer. Thanks to having creative coding
              skills, I have the privilege of contributing to various aspects of
              the creative process, from inception to realization.
            </Text>
          </div>
        </div>
        <SectionHero className="absolute inset-0" />
      </section>

      <ScrollDown />

      <div className="mt-10 grid gap-5">
        <div className="flex items-center justify-between">
          <h2 className="uppercase text-muted-foreground">Selected Works</h2>

          <Link
            href="/works"
            className={buttonVariants({ variant: "secondary" })}
            aria-label="Works page"
          >
            WORKS
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-10 xl:gap-16">
          {works.map((work) => (
            <article key={work._id} className="">
              <Link href={work.slug} className="group relative">
                <figure className="relative aspect-video">
                  <Image
                    src={work.thumbnail || "/static/work/thumb-default.jpg"}
                    fill={true}
                    priority={true}
                    alt={work.title}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
                    className="bg-muted object-cover opacity-90 transition-opacity group-hover:opacity-100"
                  />
                </figure>
                <h3 className="mt-4 font-semibold uppercase">{work.title}</h3>
                <time
                  dateTime={work.date}
                  className="mb-2 block text-xs text-muted-foreground"
                >
                  {format(parseISO(work.date), "yyyy")}
                </time>
              </Link>
              {/* {work.description && (
                <p className="mt-1 max-w-sm text-muted-foreground">
                  {work.description}
                </p>
              )} */}
            </article>
          ))}
        </div>
      </div>

      <Link href="/posts" className="relative -mx-10 p-10">
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80 backdrop-blur-md transition-colors">
          <span
            className={cn(
              buttonVariants({ variant: "default", size: "xl" }),
              "rounded-full",
            )}
          >
            LAB
            <ArrowRight className="-mr-2 ml-2 h-4 w-4" />
          </span>
        </div>
        <div className="z-10 grid h-60 grid-cols-3 gap-10 overflow-hidden">
          {latestPosts.map((item) => (
            <div key={item._id} className="relative overflow-hidden">
              <Image
                src={item.thumbnail || "/static/work/thumb-default.jpg"}
                alt={item.title}
                fill={true}
                priority={true}
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 20vw"
              />
            </div>
          ))}
        </div>
      </Link>
    </div>
  );
}
