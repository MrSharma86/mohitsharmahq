import Link from "next/link";

const articles = [
  {
    title: "AI Strategy Needs More Than Ambition",
    description:
      "A reflection on why AI strategy must be grounded in prioritisation, operating reality, and measurable value rather than aspiration alone.",
    type: "Essay",
  },
  {
    title: "How to Think About Value in AI Initiatives",
    description:
      "A working note on defining, tracking, and realising value across analytical and AI-enabled initiatives.",
    type: "Working Note",
  },
  {
    title: "Governance Without Paralysis",
    description:
      "A placeholder article on building governance mechanisms that create clarity and trust without suffocating progress.",
    type: "Essay",
  },
  {
    title: "Responsible Scale in Enterprise AI",
    description:
      "A note on adoption, risk, accountability, and what it takes to scale AI responsibly across organisations.",
    type: "Working Note",
  },
  {
    title: "Ethics Is Not Separate From Delivery",
    description:
      "A reflection on why responsible AI cannot be treated as an afterthought once systems are already in motion.",
    type: "Essay",
  },
  {
    title: "From Initiative Selection to Portfolio Logic",
    description:
      "A draft essay on how senior leaders should think about sequencing, trade-offs, and enterprise AI portfolios.",
    type: "Essay",
  },
];

export default function AiStrategyPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Technical / AI Strategy, Value & Governance
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            AI Strategy, Value & Governance
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section will hold writing on AI strategy, value generation,
              governance, adoption, ethics, and leadership decisions in
              enterprise contexts.
            </p>

            <p>
              For now, these are placeholder articles designed to make the
              section usable while the real essays are developed.
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