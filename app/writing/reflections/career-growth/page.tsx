import Link from "next/link";

const articles = [
  {
    title: "Growth Is Not Always Visible While It Is Happening",
    description:
      "A reflection on patience, compounding effort, and the often invisible nature of meaningful personal and professional development.",
    type: "Reflection",
  },
  {
    title: "Ambition Needs Inner Structure",
    description:
      "A working note on ambition, direction, self-command, and the internal architecture required to sustain long-term growth.",
    type: "Working Note",
  },
  {
    title: "Career Progression and Personal Depth",
    description:
      "A placeholder article on external advancement versus inner development, and why both matter.",
    type: "Reflection",
  },
  {
    title: "Becoming Before Arriving",
    description:
      "A note on identity, preparation, and the slow process of becoming the person required for the work ahead.",
    type: "Reflection",
  },
  {
    title: "Learning Across Seasons of Work",
    description:
      "A draft essay on how different phases of a career teach different kinds of lessons.",
    type: "Essay",
  },
  {
    title: "The Difference Between Achievement and Maturity",
    description:
      "A reflection on accomplishment, depth, and the qualities that endure beyond visible success.",
    type: "Reflection",
  },
];

export default function CareerGrowthPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Reflections / Career, Growth & Inner Development
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Career, Growth & Inner Development
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section will hold reflections on ambition, identity, growth,
              self-development, and the longer process of becoming more capable
              and grounded over time.
            </p>

            <p>
              For now, these are placeholder articles that give the section a
              usable structure while the real writing is developed.
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