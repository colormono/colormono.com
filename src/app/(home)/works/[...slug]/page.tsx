import { notFound } from "next/navigation";

import "@/styles/mdx.css";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/config/site";
// import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button, buttonVariants } from "@/components/ui/button";
import { Mdx } from "@/components/mdx-components";
import { allWorks } from "contentlayer/generated";

// import Balancer from "react-wrap-balancer"

interface WorkProps {
  params: {
    slug: string[];
  };
}

async function getWorksFromParams({ params }: WorkProps) {
  const slug = params.slug?.join("/");
  const work = allWorks.find((work) => work.slugAsParams === slug);

  if (!work) {
    null;
  }

  return work;
}

export async function generateMetadata({
  params,
}: WorkProps): Promise<Metadata> {
  const work = await getWorksFromParams({ params });

  if (!work) {
    return {};
  }

  return {
    title: work.title,
    description: work.description,
    openGraph: {
      title: work.title,
      description: work.description,
      type: "article",
      url: absoluteUrl(work.slug),
      images: [
        {
          url: siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteConfig.name,
        },
      ],
    },
  };
}

export async function generateStaticParams(): Promise<WorkProps["params"][]> {
  return allWorks.map((work) => ({
    slug: work.slugAsParams.split("/"),
  }));
}

export default async function workPage({ params }: WorkProps) {
  const work = await getWorksFromParams({ params });

  if (!work) {
    notFound();
  }

  return (
    <section className="container mx-auto">
      {(work.cover || work.thumbnail) && (
        <Image
          src={work.cover ? work.cover : work.thumbnail}
          alt={work.title}
          style={{
            objectFit: "contain",
            width: "100%",
            height: "auto",
            maxHeight: "80vh",
          }}
          width={1280}
          height={720}
          className="bg-muted"
        />
      )}

      {/* <div className="flex gap-2 items-center text-xs">
        <h1>{work.title}</h1>
        <time>{work.date}</time>
      </div> */}

      <article className="mx-auto max-w-2xl py-20">
        <Mdx code={work.body.code} />
      </article>

      <hr />

      <section className="mx-auto grid max-w-2xl py-20">
        <div className="mb-8 grid grid-cols-12 gap-8 rounded-lg border p-8">
          <div className="col-span-4">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={work.thumbnail || "/static/work/thumb-default.jpg"}
                alt={work.title}
                fill
                className="object-cover opacity-90 transition-opacity group-hover:opacity-100"
              />
            </AspectRatio>
          </div>
          <div className="col-span-8">
            <h4 className="mb-2 font-semibold">{work.title}</h4>
            {work.description && (
              <p className="text-sm text-slate-700 dark:text-slate-200">
                {work.description}
              </p>
            )}
            {/* <Button variant={"outline"}>Share</Button> */}
          </div>
        </div>

        <Link
          href="/works"
          className={buttonVariants({ variant: "secondary" })}
        >
          ALL WORKS
        </Link>
      </section>
    </section>
  );
}
