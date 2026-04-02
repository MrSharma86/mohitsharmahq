import Link from "next/link";

const articles = [
  {
    title: "Why Discipline Matters More Than Motivation",
    description:
      "A reflection on consistency, routine, and why sustainable progress is usually built through structure rather than emotion.",
    type: "Reflection",
  },
  {
    title: "Fitness as a Practice of Self-Respect",
    description:
      "A working note on physical discipline, effort, standards, and the relationship between training and identity.",
    type: "Working Note",
  },
  {
    title: "What Repetition Teaches You",
    description:
      "A placeholder article on training, patience, and the quiet lessons of showing up over and over again.",
    type: "Reflection",
  },
  {
    title: "Personal Standards Are Built, Not Declared",
    description:
      "A note on how standards become real only when expressed through repeated action.",
    type: "Reflection",
  },
  {
    title: "The Physical Side of Mental Clarity",
    description:
      "A draft essay on the relationship between bodily discipline, emotional steadiness, and sharper judgment.",
    type: "Essay",
  },
  {
    title: "Consistency Without Drama",
    description:
      "A reflection on how the most meaningful forms of discipline are often quiet, ordinary, and sustained.",
    type: "Reflection",
  },
];

export default function DisciplineFitnessPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Reflections / Discipline, Fitness & Personal Standards
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Discipline, Fitness & Personal Standards
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section will hold reflections on discipline, training,
              consistency, resilience, and the standards that shape how I work
              and live.
            </p>

            <p>
              For now, these are placeholder articles that help define the page
              structure and future direction.
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