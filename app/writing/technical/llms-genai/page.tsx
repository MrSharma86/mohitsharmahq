import Link from "next/link";

const articles = [
  {
    title: "What Makes an LLM Workflow Actually Useful",
    description:
      "A note on moving beyond demos toward workflows that are repeatable, reliable, and valuable in practice.",
    type: "Essay",
  },
  {
    title: "Prompting Is Not a Strategy",
    description:
      "A reflection on the limits of prompt engineering when the deeper system design has not been properly thought through.",
    type: "Working Note",
  },
  {
    title: "Evaluating Generative AI Beyond Surface Fluency",
    description:
      "A draft essay on usefulness, reliability, task alignment, and why good outputs are not the same as trustworthy systems.",
    type: "Essay",
  },
  {
    title: "Designing Human-in-the-Loop GenAI Systems",
    description:
      "A placeholder article on the role of review, oversight, and judgment when generative systems support real work.",
    type: "Working Note",
  },
  {
    title: "From Prototype to Practical LLM Application",
    description:
      "A note on what changes when GenAI moves from experimentation into implementation.",
    type: "Essay",
  },
  {
    title: "Where LLMs Fit and Where They Do Not",
    description:
      "A reflection on choosing the right use cases rather than forcing LLMs into every problem space.",
    type: "Essay",
  },
];

export default function LlmsGenAiPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Technical / LLMs & Generative AI
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            LLMs & Generative AI
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section will hold writing on large language models, generative
              AI systems, prompting, evaluation, workflow design, and practical
              implementation.
            </p>

            <p>
              For now, these are placeholder articles that help establish the
              structure and navigation of the section.
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