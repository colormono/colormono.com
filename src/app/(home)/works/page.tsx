import Image from "next/image";
import Link from "next/link";
import { allWorks } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";

import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Works() {
  const publishedWorks = allWorks.filter((work) => work.published);

  const works = publishedWorks.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date)),
  );

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
                  className="rounded-xl object-cover opacity-90 transition-opacity group-hover:opacity-100"
                />
              </AspectRatio>
              <div className="mt-4 flex items-baseline gap-3">
                <time
                  dateTime={work.date}
                  className="block text-xs text-muted-foreground"
                >
                  {format(parseISO(work.date), "yyyy")}
                </time>
                <h3 className="font-semibold uppercase">{work.title}</h3>
              </div>
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
  );
}
