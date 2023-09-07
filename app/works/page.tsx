import Image from "next/image"
import Link from "next/link"
import { allWorks } from "@/.contentlayer/generated"
import { compareDesc, format, parseISO } from "date-fns"

import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function Works() {
  const works = allWorks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  )

  return (
    <section className="container mb-16 grid">
      <div className="grid grid-cols-3 gap-10">
        {works.map((work) => (
          <article key={work._id} className="text-center">
            <Link href={work.slug} className="group">
              <AspectRatio ratio={16 / 9}>
                <Image
                  src={work.thumbnail || "/static/work/thumb-default.jpg"}
                  alt={work.title}
                  fill
                  className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
              </AspectRatio>
              <h3 className="mt-4 font-semibold uppercase">{work.title}</h3>
              <time
                dateTime={work.date}
                className="mb-2 block text-xs text-muted-foreground"
              >
                {format(parseISO(work.date), "yyyy")}
              </time>
            </Link>
            {/* {work.description && (
              <p className="mt-1 max-w-md text-muted-foreground">
                {work.description}
              </p>
            )} */}
          </article>
        ))}
      </div>
    </section>
  )
}
