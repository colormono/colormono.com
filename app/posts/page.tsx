"use client"

import Image from "next/image"
import Link from "next/link"
import { allPosts } from "@/.contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"
import Masonry from "react-masonry-css"

import NowPlaying from "@/components/now-playing"

export default function Home() {
  const publishedPosts = allPosts.filter((post) => post.published)
  const posts = publishedPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  const breakpointCols = {
    default: 4,
    1200: 3,
    700: 2,
    500: 1,
  }

  return (
    <section className="container mb-12">
      <Masonry
        breakpointCols={breakpointCols}
        className="-ml-16 flex w-auto"
        columnClassName="pl-16"
      >
        <article>
          <NowPlaying />
        </article>

        {posts.map((work) => (
          <article key={work._id} className="mb-12">
            <Link href={work.slug} className="group">
              <Image
                src={work.thumbnail || "/static/work/thumb-default.jpg"}
                width={640}
                height={480}
                alt={work.title}
                // placeholder="blur"
                className="opacity-90 transition group-hover:opacity-100"
              />
              <div className="mt-4">
                <h3 className="font-black uppercase">{work.title}</h3>
                {work.description && (
                  <p className="max-w-sm text-sm text-muted-foreground">
                    {work.description}
                  </p>
                )}
                <time
                  dateTime={work.date}
                  className="mt-1 block text-xs text-muted-foreground"
                >
                  {format(parseISO(work.date), "yyyy")}
                </time>
              </div>
            </Link>
          </article>
        ))}
      </Masonry>
    </section>
  )
}
