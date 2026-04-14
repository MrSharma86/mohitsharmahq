import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";

import ArticleLikes from "@/components/ArticleLikes";
import { useMDXComponents } from "@/mdx-components";

type ArticlePageProps = {
  params: Promise<{ slug: string[] }>;
};

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;

  const filePath =
    path.join(process.cwd(), "content", "writing", ...slug) + ".mdx";

  if (!fs.existsSync(filePath)) {
    notFound();
  }

  const source = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(source);
  const components = useMDXComponents({});
  const articleSlug = slug.join("/");

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <article className="mx-auto max-w-4xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          {data.category ? (
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
              {data.category}
            </p>
          ) : null}

          <div className="flex items-start justify-between gap-4">
            <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              {data.title}
            </h1>

            <ArticleLikes slug={articleSlug} placement="top" />
          </div>

          {data.description ? (
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {data.description}
            </p>
          ) : null}

          <div className="mt-12">
            <MDXRemote source={content} components={components} />
          </div>

          <ArticleLikes slug={articleSlug} placement="bottom" />

          <div className="mt-16">
            <Link
              href="/writing"
              className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
            >
              ← Back to Writing
            </Link>
          </div>
        </div>
      </article>
    </main>
  );
}