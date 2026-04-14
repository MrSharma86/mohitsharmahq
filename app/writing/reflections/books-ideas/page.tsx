import Link from "next/link";
import { getArticlesByCategory } from "@/lib/mdx";

const articles = getArticlesByCategory("books-ideas");

export default function BooksIdeasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Reflections / Books & Ideas
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Books & Ideas
          </h1>

          <p className="mt-8 text-base leading-8 text-zinc-300 sm:text-lg">
            Notes, reflections, and distilled insights from books, thinkers,
            and ideas that shape how I think and act.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug.join("/")}
              href={`/writing/${article.slug.join("/")}`}
              className="block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <h2 className="text-2xl font-semibold">
                {article.title}
              </h2>

              <p className="mt-4 text-zinc-400">
                {article.description}
              </p>
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <Link href="/writing/reflections" className="text-sm text-zinc-400 hover:text-white">
            ← Back to Reflections
          </Link>
        </div>
      </section>
    </main>
  );
}