import Link from "next/link";

const projectPaths = [
  {
    title: "Enterprise & Professional Work",
    description:
      "Case studies drawn from real-world environments where constraints are real, decisions carry consequences, and systems need to perform beyond controlled conditions.",
    detail:
      "This section reflects work I have been part of over the years across banking, telecom, retail, and large-scale enterprise settings. The emphasis is on context, system design, trade-offs, and measurable impact rather than on surface-level summaries.",
    href: "/projects/enterprise",
    cta: "Explore Enterprise Work",
    tags: ["Banking", "Telecom", "Decision Systems"],
  },
  {
    title: "Independent Projects & Experiments",
    description:
      "This section reflects work I pursue independently to experiment, solve problems, and continue learning new approaches across machine learning and AI.",
    detail:
      "It brings together explorations where I test ideas, work with new techniques, and deepen my understanding of how different approaches behave in practice.",
    href: "/projects/independent",
    cta: "Explore Independent Work",
    tags: ["Kaggle", "NLP / LLM", "Experimentation"],
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Projects
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Projects and Case Studies
        </h1>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            My work spans two related but distinct environments. One reflects
            how I operate in enterprise settings, where constraints are real,
            decisions have consequences, and value must hold up in practice.
            The other reflects how I continue to learn independently through
            experimentation, competition, and technical exploration.
          </p>
          <p>
            Both matter. Together, they offer a clearer picture of how I think:
            not only in terms of models or tools, but in terms of systems,
            trade-offs, and outcomes.
          </p>
        </div>
      </section>

      <section className="mt-24 grid gap-6 lg:grid-cols-2">
        {projectPaths.map((path) => (
          <div
            key={path.title}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
              Project Category
            </p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
              {path.title}
            </h2>

            <p className="mt-4 leading-8 text-zinc-300">{path.description}</p>

            <p className="mt-4 leading-8 text-zinc-400">{path.detail}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {path.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-400"
                >
                  {tag}
                </span>
              ))}
            </div>

            <Link
              href={path.href}
              className="mt-6 inline-flex text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
            >
              {path.cta} →
            </Link>
          </div>
        ))}
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          A note on this structure
        </p>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            I wanted this section to reflect the two ways I continue to build.
            Professional work shows how I operate when the stakes are real and
            systems need to perform under constraint. Independent work shows how
            I continue to learn, test ideas, and stay close to the craft itself.
          </p>
          <p>
            Separating them creates a clearer experience for the reader and a
            more accurate representation of the work. It also makes it easier to
            go deeper in each area without forcing very different kinds of work
            into the same page structure.
          </p>
        </div>
      </section>
    </main>
  );
}