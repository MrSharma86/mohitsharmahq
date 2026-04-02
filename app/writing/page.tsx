import Link from "next/link";

const writingPaths = [
  {
    title: "Technical & Professional Writing",
    description:
      "Essays and working notes on applied data science, machine learning, algorithms, AI systems, decision-making, and the realities of solving problems in professional environments.",
    detail:
      "I approach AI strategy as a hands-on practitioner, working across algorithm design, modelling, and system development, while also shaping how initiatives are prioritised, how value is defined and realised, and how analytical work translates into decisions that scale across organisations.",
    href: "/writing/technical",
    cta: "Explore Technical Writing",
    tags: ["Algorithms", "AI Strategy", "Decision Systems"],
  },
  {
    title: "Reflections, Books & Personal Growth",
    description:
      "A quieter body of writing on learning, discipline, books, growth, and the habits and ideas that shape how I work and live.",
    detail:
      "This section reflects the more personal side of my thinking. It includes reflections that sit slightly outside technical work but still inform it: reading, self-development, consistency, ambition, and the long process of becoming better over time.",
    href: "/writing/reflections",
    cta: "Explore Reflections",
    tags: ["Books", "Growth", "Reflection"],
  },
];

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Writing and Reflections
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              Writing is where I slow down enough to make my thinking more
              visible. It helps me move beyond immediate execution and articulate
              what I am learning about algorithms, systems, decisions, and the
              disciplines that shape good work over time.
            </p>

            <p>
              Some of that writing is technical and professional, rooted in data
              science, machine learning, AI systems, and the practical realities
              of building work that holds up in real environments. Some of it is
              more reflective, shaped by books, growth, discipline, and the
              personal ideas that influence how I think and work.
            </p>

            <p>
              Together, these two strands reflect how I see the work itself:
              technical depth matters, but so do judgment, perspective, and the
              ability to connect analytical thinking to decisions and long-term
              growth.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {writingPaths.map((path) => (
            <article
              key={path.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] transition duration-300 hover:border-white/20 hover:bg-white/[0.05]"
            >
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-500">
                Writing Category
              </p>

              <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white">
                {path.title}
              </h2>

              <p className="mt-4 text-base leading-7 text-zinc-300">
                {path.description}
              </p>

              <p className="mt-4 text-base leading-7 text-zinc-400">
                {path.detail}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {path.tags.map((tag) => (
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
                  href={path.href}
                  className="inline-flex items-center text-sm font-medium text-white transition hover:text-zinc-300"
                >
                  {path.cta}
                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 max-w-3xl rounded-3xl border border-white/10 bg-white/[0.02] p-8">
          <p className="text-sm font-medium text-zinc-200">
            A note on this structure
          </p>

          <div className="mt-4 space-y-5 text-base leading-7 text-zinc-400">
            <p>
              Over time, this section will evolve into a body of work that connects technical depth with practical judgment, and reflects how I think about building, deciding, and growing.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}