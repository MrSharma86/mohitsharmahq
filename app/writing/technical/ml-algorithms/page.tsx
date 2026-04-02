import Link from "next/link";

const articles = [
  {
    title: "Bias, Variance, and the Cost of Overconfidence",
    description:
      "A working note on model generalisation, overfitting, and why strong validation discipline matters more than impressive training performance.",
    type: "Essay",
  },
  {
    title: "What Makes an Algorithm Useful in Practice",
    description:
      "A reflection on how algorithmic elegance meets real-world constraints such as noisy data, operational trade-offs, and implementation limits.",
    type: "Working Note",
  },
  {
    title: "From Feature Engineering to Decision Quality",
    description:
      "A piece on how modelling choices influence downstream decisions, not just predictive performance in isolation.",
    type: "Essay",
  },
  {
    title: "Optimisation Under Business Constraints",
    description:
      "A note on designing models and optimisation approaches when the objective function is shaped by practical organisational realities.",
    type: "Working Note",
  },
  {
    title: "Why Evaluation Design Matters as Much as Model Choice",
    description:
      "A draft essay on testing frameworks, realistic validation, and the importance of measuring what actually matters.",
    type: "Essay",
  },
  {
    title: "Statistical Thinking for Modern Machine Learning",
    description:
      "A placeholder article exploring why statistical discipline still underpins reliable machine learning work.",
    type: "Essay",
  },
];

export default function MlAlgorithmsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Technical / Machine Learning & Algorithms
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Machine Learning & Algorithms
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section will hold essays and working notes on machine learning,
              modelling, optimisation, experimentation, and the algorithmic
              foundations behind real-world analytical systems.
            </p>

            <p>
              For now, these are placeholder articles to help shape the structure
              of the page and make the writing system fully navigable.
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

        <div className="mt-20 flex flex-wrap gap-4">
          <Link
            href="/writing/technical"
            className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            ← Back to Technical Writing
          </Link>
        </div>
      </section>
    </main>
  );
}