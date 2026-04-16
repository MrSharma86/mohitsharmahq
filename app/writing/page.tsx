import Link from "next/link";
import { getAllArticles, getFeaturedArticles } from "@/lib/mdx";

export default function WritingPage() {
  const allArticles = getAllArticles();
  const featuredArticles = getFeaturedArticles();

  const featured = featuredArticles[0] ?? allArticles[0];
  const latestArticles = allArticles.filter(
    (article) => article.slug.join("/") !== featured?.slug.join("/")
  );

  const topicCards = [
    {
      title: "Machine Learning & Algorithms",
      description:
        "Essays and working notes on modelling, optimisation, experimentation, and core machine learning ideas.",
      href: "/writing/technical/ml-algorithms",
    },
    {
      title: "LLMs & Generative AI",
      description:
        "Deep dives into transformers, embeddings, prompting, agentic systems, and enterprise GenAI realities.",
      href: "/writing/technical/llms-genai",
    },
    {
      title: "AI Strategy & Value",
      description:
        "Writing on enterprise AI, value realization, governance, decision-making, and strategic trade-offs.",
      href: "/writing/technical/ai-strategy",
    },
    {
      title: "Books & Ideas",
      description:
        "Reflections, notes, and distilled ideas from books, thinkers, and frameworks that shape how I think.",
      href: "/writing/reflections/books-ideas",
    },
    {
      title: "Discipline & Fitness",
      description:
        "Writing on training, discipline, and the relationship between physical effort and mental clarity.",
      href: "/writing/reflections/discipline-fitness",
    },
    {
      title: "Career & Growth",
      description:
        "Reflections on work, leadership, learning, and navigating complex professional environments.",
      href: "/writing/reflections/career-growth",
    },
  ];

  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Essays, deep dives, and reflections on AI, systems, leadership, and
            growth.
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This is the central archive of my writing. Some pieces are
              technical, some are strategic, and some are more reflective. The
              common thread is simple: I write to think clearly, communicate
              precisely, and make useful ideas easier to act on.
            </p>
          </div>
        </div>

        {featured ? (
          <div className="mt-16">
            <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-500">
              Featured
            </p>

            <Link
              href={`/writing/${featured.slug.join("/")}`}
              className="block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              {featured.category ? (
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {featured.category}
                </p>
              ) : null}

              <h2 className="mt-3 max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                {featured.title}
              </h2>

              {featured.description ? (
                <p className="mt-4 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg">
                  {featured.description}
                </p>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-zinc-500">
                {featured.type ? <span>{featured.type}</span> : null}
                {featured.date ? <span>{featured.date}</span> : null}
              </div>
            </Link>
          </div>
        ) : null}

        <div className="mt-20">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Latest
              </p>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                Read the latest pieces
              </h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {latestArticles.map((article) => (
              <Link
                key={article.slug.join("/")}
                href={`/writing/${article.slug.join("/")}`}
                className="block rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
                  {article.type ? <span>{article.type}</span> : null}
                  {article.date ? <span>{article.date}</span> : null}
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {article.title}
                </h3>

                {article.description ? (
                  <p className="mt-4 text-base leading-7 text-zinc-400">
                    {article.description}
                  </p>
                ) : null}
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Explore by topic
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              Browse the archive by theme
            </h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {topicCards.map((topic) => (
              <Link
                key={topic.title}
                href={topic.href}
                className="block rounded-3xl border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
              >
                <h3 className="text-2xl font-semibold tracking-tight text-white">
                  {topic.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-400">
                  {topic.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}