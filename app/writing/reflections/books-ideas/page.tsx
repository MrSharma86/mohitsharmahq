import Link from "next/link";

const articles = [
  {
    title: "Books That Quietly Reshape How We Think",
    description:
      "A reflection on reading as a slow influence on judgment, language, standards, and perspective rather than simple information collection.",
    type: "Reflection",
  },
  {
    title: "Mental Models I Return To Often",
    description:
      "A working note on the ideas and conceptual tools that help me think more clearly about complexity, trade-offs, and direction.",
    type: "Working Note",
  },
  {
    title: "Why Some Ideas Stay With You for Years",
    description:
      "A placeholder article on lasting intellectual influence and the difference between information and transformation.",
    type: "Reflection",
  },
  {
    title: "Reading Beyond Utility",
    description:
      "A note on reading not only for immediate application, but for depth, perspective, and inner expansion.",
    type: "Reflection",
  },
  {
    title: "The Link Between Thought and Standards",
    description:
      "A draft essay on how better ideas gradually alter what a person considers acceptable, admirable, or worth pursuing.",
    type: "Essay",
  },
  {
    title: "Learning to Think More Slowly",
    description:
      "A reflection on patience, depth, and resisting the impulse to form shallow conclusions too quickly.",
    type: "Reflection",
  },
];

export default function BooksIdeasPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Reflections / Books, Ideas & Mental Models
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Books, Ideas & Mental Models
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section will hold reflections on books, ideas, mental models,
              and the thinkers that continue to shape how I interpret work, life,
              ambition, and growth.
            </p>

            <p>
              For now, these are placeholder articles to establish the structure
              of the page.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.title}
              className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                {article.type}
              </p>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
                {article.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-zinc-400">
                {article.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-20">
          <Link
            href="/writing/reflections"
            className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            ← Back to Reflections
          </Link>
        </div>
      </section>
    </main>
  );
}