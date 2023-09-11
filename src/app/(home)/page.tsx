import Image from "next/image";
import Link from "next/link";
import { allPosts, allWorks } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import { ArrowRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { ScrollDown } from "@/components/scroll-down";
import { cn } from "@/lib/utils";
import SectionHero from "@/components/pages/home/hero";

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
    <div className="container grid gap-10">
      <SectionHero />
      <ScrollDown />

      <section>
        <div className="mb-5 flex items-center justify-between">
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

        <div className="grid gap-10 xl:gap-20">
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
      </section>

      <section className="relative -mx-10 p-10">
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-background/80 backdrop-blur-md transition-colors">
          <Link
            href="/posts"
            className={cn(
              buttonVariants({ variant: "default", size: "xl" }),
              "rounded-full",
            )}
          >
            LAB
            <ArrowRight className="-mr-2 ml-2 h-4 w-4" />
          </Link>
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
      </section>
    </div>
  );
}
