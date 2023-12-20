import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import "@/styles/mdx.css";

import type { Metadata } from "next";
import Link from "next/link";

import { siteConfig } from "@/config";
// import { getTableOfContents } from "@/lib/toc"
import { absoluteUrl, cn } from "@/lib/utils";
import { Mdx } from "@/components/mdx-components";

// import Balancer from "react-wrap-balancer"

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams({ params }: PostProps) {
  const slug = params.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams({ params });

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      url: absoluteUrl(post.slug),
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

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams({ params });

  if (!post) {
    notFound();
  }

  return (
    <section className="container mx-auto">
      <article className="mx-auto max-w-2xl pb-20 pt-10">
        <h1 className="mb-2 text-2xl">{post.title}</h1>
        {post.description && (
          <p className="mt-0 text-xl text-slate-700 dark:text-slate-200">
            {post.description}
          </p>
        )}
        <hr className="my-4" />
        <Mdx code={post.body.code} />
      </article>
    </section>
  );
}
