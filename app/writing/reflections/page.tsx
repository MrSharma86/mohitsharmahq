import Link from "next/link";

const categories = [
  {
    title: "Books, Ideas & Mental Models",
    description:
      "Writing on books, ideas, mental models, and the concepts that sharpen how I think about work, judgment, ambition, and life.",
    detail:
      "This section explores the thinkers, frameworks, and reflections that shape how I process complexity, make sense of experience, and refine my standards over time.",
    href: "/writing/reflections/books-ideas",
    cta: "Explore Books, Ideas & Mental Models",
    tags: ["Books", "Ideas", "Mental Models"],
  },
  {
    title: "Discipline, Fitness & Personal Standards",
    description:
      "Writing on discipline, physical training, consistency, resilience, and the personal standards that shape how I work and live.",
    detail:
      "The focus here is on habits, effort, self-respect, and the quieter forms of discipline that build capability over time, both personally and professionally.",
    href: "/writing/reflections/discipline-fitness",
    cta: "Explore Discipline, Fitness & Personal Standards",
    tags: ["Discipline", "Fitness", "Standards"],
  },
  {
    title: "Career, Growth & Inner Development",
    description:
      "Writing on career direction, self-development, ambition, identity, and the longer process of becoming more thoughtful, capable, and grounded.",
    detail:
      "This section brings together reflections on growth that go beyond external achievement and into how a person evolves through work, learning, setbacks, and sustained effort.",
    href: "/writing/reflections/career-growth",
    cta: "Explore Career, Growth & Inner Development",
    tags: ["Career", "Growth", "Development"],
  },
];

const featuredNotes = [
  {
    title: "Reflection As A Form Of Clarity",
    description:
      "These pieces are less about immediate execution and more about making sense of what shapes judgment, character, and direction over time.",
  },
  {
    title: "Personal, But Not Separate",
    description:
      "Books, discipline, fitness, ambition, and self-development may sit outside technical work, but they still influence how a person thinks, decides, and operates.",
  },
  {
    title: "Growth Through Deliberate Practice",
    description:
      "A recurring thread across this section is that meaningful growth is rarely dramatic. It is usually quiet, cumulative, and built through repeated effort over long periods.",
  },
];

export default function ReflectionsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <section className="mx-auto max-w-6xl px-6 pb-24 pt-32 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-zinc-400">
            Writing / Reflections
          </p>

          <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Reflections, Books & Personal Growth
          </h1>

          <div className="mt-8 space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              This section brings together writing on books, discipline, growth,
              personal standards, and the ideas that continue to shape how I
              think and live.
            </p>

            <p>
              While this writing is more personal than the technical side of the
              site, I do not see it as separate from the work itself. The way a
              person reads, trains, reflects, and develops over time influences
              the quality of judgment they bring to everything else.
            </p>

            <p>
              The writing is organised across three connected areas. One focuses
              on books and ideas, one on discipline and fitness, and one on
              career growth and inner development.
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
                  Reflection Category
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
            href="/about"
            className="inline-flex items-center rounded-full bg-white px-5 py-3 text-sm font-medium text-black transition hover:opacity-90"
          >
            Explore About
          </Link>
        </div>
      </section>
    </main>
  );
}