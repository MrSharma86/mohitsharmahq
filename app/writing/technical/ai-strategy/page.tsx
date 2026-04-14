import Link from "next/link";
import { getArticlesByCategory } from "@/lib/mdx";

const articles = getArticlesByCategory("ai-strategy");

export default function AIStrategyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Technical / AI Strategy
          </p>

          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            AI Strategy & Value
          </h1>

          <p className="mt-8 text-base leading-8 text-zinc-300 sm:text-lg">
            Essays on enterprise AI, decision-making, value realization,
            governance, and scaling AI responsibly.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <Link
              key={article.slug.join("/")}
              href={`/writing/${article.slug.join("/")}`}
              className="block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              {article.type ? (
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {article.type}
                </p>
              ) : null}

              <h2 className="mt-3 text-2xl font-semibold">
                {article.title}
              </h2>

              {article.description ? (
                <p className="mt-4 text-zinc-400">
                  {article.description}
                </p>
              ) : null}
            </Link>
          ))}
        </div>

        <div className="mt-20">
          <Link
            href="/writing/technical"
            className="text-sm text-zinc-400 hover:text-white"
          >
            ← Back to Technical Writing
          </Link>
        </div>
      </section>
    </main>
  );
}