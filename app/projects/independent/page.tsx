import Link from "next/link";

const independentBuckets = [
  {
    title: "Machine Learning Foundations",
    description:
      "Building and refining core modelling intuition across structured data problems, with a focus on feature engineering, evaluation, and model behaviour.",
    examples: [
      "Regression and classification",
      "Tree-based models and boosting",
      "Feature engineering and model comparison",
    ],
    href: "/projects/independent/machine-learning-foundations",
  },
  {
    title: "Deep Learning & Advanced Models",
    description:
      "Exploring neural architectures and sequence-based approaches for problems where traditional models may not be sufficient on their own.",
    examples: [
      "Neural networks and sequence models",
      "LSTMs and transformers",
      "Representation learning and advanced modelling",
    ],
    href: "/projects/independent/deep-learning-advanced-models",
  },
  {
    title: "AI & Language Systems",
    description:
      "Working with modern AI systems including embeddings, semantic search, prompting, and language-model driven workflows.",
    examples: [
      "LLMs and prompting strategies",
      "Embeddings and semantic retrieval",
      "Knowledge-driven AI workflows",
    ],
    href: "/projects/independent/ai-language-systems",
  },
  {
    title: "Insight & Analytics",
    description:
      "Using analysis, dashboards, and structured reporting to turn raw data into clearer understanding and more usable decisions.",
    examples: [
      "Exploratory analysis",
      "Dashboards and reporting",
      "Business-facing analytical narratives",
    ],
    href: "/projects/independent/insight-analytics",
  },
];

export default function IndependentProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Projects / Independent
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Independent Projects & Experiments
        </h1>

        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            This section reflects work I pursue independently to experiment,
            solve problems, and continuously learn new approaches across machine
            learning and AI.
          </p>

          <p>
            It brings together explorations where I test ideas, work with new
            techniques, and deepen my understanding through hands-on problem
            solving, without being tied to immediate production use.
          </p>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          Areas of independent exploration
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {independentBuckets.map((bucket) => (
            <div
              key={bucket.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                Exploration Area
              </p>

              <h3 className="mt-3 text-xl font-semibold text-zinc-100">
                {bucket.title}
              </h3>

              <p className="mt-4 leading-8 text-zinc-300">
                {bucket.description}
              </p>

              <div className="mt-5">
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Includes
                </p>
                <ul className="mt-3 space-y-2 text-zinc-300">
                  {bucket.examples.map((example) => (
                    <li key={example} className="leading-8">
                      {example}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={bucket.href}
                className="mt-6 inline-flex text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
              >
                Explore Area →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          A note on this work
        </p>

        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            Independent work plays a different role in my overall approach. It
            gives me space to explore unfamiliar techniques, work through new
            kinds of problems, and keep learning through direct experimentation.
          </p>

          <p>
            Over time, this creates a useful loop. Experimentation sharpens
            intuition, intuition improves judgment, and that judgment carries
            back into more structured, real-world problem solving.
          </p>
        </div>
      </section>
    </main>
  );
}