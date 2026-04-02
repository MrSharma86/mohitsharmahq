import Link from "next/link";

const categories = [
  {
    title: "Machine Learning & Algorithms",
    description:
      "Writing on machine learning, statistical modelling, optimisation, experimentation, and the algorithmic foundations behind real-world analytical systems.",
    detail:
      "This section focuses on how models are designed, evaluated, and improved in practice, with attention to both technical rigor and the constraints that shape implementation.",
    href: "/writing/technical/ml-algorithms",
    cta: "Explore Machine Learning & Algorithms",
    tags: ["Machine Learning", "Algorithms", "Modelling"],
  },
  {
    title: "LLMs & Generative AI",
    description:
      "Writing on large language models, generative AI systems, prompting, evaluation, use cases, and the practical realities of applying these technologies meaningfully.",
    detail:
      "The focus here is not only on the technology itself, but on how these systems are applied, assessed, and translated into useful workflows, products, and decisions.",
    href: "/writing/technical/llms-genai",
    cta: "Explore LLMs & Generative AI",
    tags: ["LLMs", "GenAI", "Applied AI"],
  },
  {
    title: "AI Strategy, Value & Governance",
    description:
      "Writing on AI strategy from a hands-on leadership perspective, covering prioritisation, value generation, adoption, governance, risk, and responsible scale.",
    detail:
      "This section connects technical work to organisational outcomes: how initiatives are shaped, how value is defined and realised, and how AI is governed with clarity and intent.",
    href: "/writing/technical/ai-strategy",
    cta: "Explore AI Strategy, Value & Governance",
    tags: ["AI Strategy", "Value Realisation", "Governance"],
  },
];

const featuredNotes = [
  {
    title: "From Models to Decisions",
    description:
      "A recurring theme across this section is that technical work matters most when it leads to better decisions, stronger systems, and measurable value in practice.",
  },
  {
    title: "Depth Without Abstraction",
    description:
      "The goal is to stay grounded in the craft itself: algorithms, modelling, system behaviour, and the realities of implementation, not strategy detached from execution.",
  },
  {
    title: "Leadership Through Technical Judgment",
    description:
      "The leadership lens here is shaped by technical understanding. It is about knowing what to build, what to prioritise, how to evaluate trade-offs, and how to scale responsibly.",
  },
];

export default function TechnicalWritingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Technical
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Technical & Professional Writing
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section brings together writing on applied data science,
              machine learning, algorithms, AI systems, and the realities of
              solving problems in professional environments.
            </p>

            <p>
              I approach this work as a hands-on practitioner and AI leader:
              someone interested in the design of models and systems, but also in
              how initiatives are prioritised, how value is created and tracked,
              and how analytical work translates into decisions that scale across
              organisations.
            </p>

            <p>
              The writing is organised across three connected areas. One focuses
              on machine learning and algorithms, one on LLMs and generative AI,
              and one on the leadership layer of AI strategy, value, and
              governance.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Categories
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              Explore by area
            </h2>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {categories.map((category) => (
              <article
                key={category.title}
                className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
              >
                <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                  Technical Category
                </p>

                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                  {category.title}
                </h2>

                <p className="mt-4 text-base leading-7 text-zinc-300">
                  {category.description}
                </p>

                <p className="mt-4 text-base leading-7 text-zinc-400">
                  {category.detail}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/10 px-3 py-1 text-sm text-zinc-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href={category.href}
                    className="inline-flex items-center text-sm font-medium text-white transition hover:text-zinc-300"
                  >
                    {category.cta}
                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="mb-8 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
              Orientation
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-white">
              What ties these sections together
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {featuredNotes.map((note) => (
              <article
                key={note.title}
                className="rounded-3xl border border-white/10 bg-white/[0.02] p-6"
              >
                <h3 className="text-xl font-semibold tracking-tight text-white">
                  {note.title}
                </h3>
                <p className="mt-4 text-base leading-7 text-zinc-400">
                  {note.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-20 flex flex-wrap gap-4">
          <Link
            href="/writing"
            className="inline-flex items-center rounded-full border border-white/10 px-5 py-3 text-sm text-zinc-300 transition hover:border-white/20 hover:text-white"
          >
            ← Back to Writing
          </Link>

          <Link
            href="/projects"
            className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Explore Projects
          </Link>
        </div>
      </section>
    </main>
  );
}