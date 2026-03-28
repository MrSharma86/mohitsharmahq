import Link from "next/link";

const principles = [
  {
    title: "Clarity before complexity",
    description:
      "I am drawn to problems that look complicated on the surface but become manageable when approached with structure, patience, and clear thinking. Whether in data science or in life, I value the ability to simplify without becoming simplistic.",
  },
  {
    title: "Rigor with relevance",
    description:
      "I care deeply about analytical depth, but I care just as much about whether the work creates practical value. Good work should be technically sound, but it should also matter in the context in which it is applied.",
  },
  {
    title: "Growth through discipline",
    description:
      "Competition, learning, and personal development have always been connected for me. I respect disciplined effort, long-term thinking, and the kind of consistency that compounds quietly over time.",
  },
];

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          A career built at the intersection of data, decisions, and growth.
        </h1>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            I am a data scientist by profession, but that description only tells
            part of the story. What has consistently shaped my work is a deeper
            interest in how problems are framed, how decisions are made, and how
            people and systems evolve over time.
          </p>
          <p>
            Over the years, I have worked across applied data science, machine
            learning, enterprise transformation, and value realization. That
            journey has taught me that meaningful work is rarely created through
            technical ability alone. It comes from combining analysis with
            judgment, structure with adaptability, and rigor with an
            understanding of what matters in the real world.
          </p>
          <p>
            I have also learned that getting meaningful work done is not only a
            technical exercise. It requires trust, alignment, and the ability to
            navigate complexity across people, priorities, and systems. That
            human layer matters just as much as the analytical one.
          </p>
          <p>
            This website is an extension of that perspective. It is a place
            where I want to bring together the professional and the personal:
            projects, ideas, experiments, reflections, books, competition, and
            the principles that continue to shape how I think and work.
          </p>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          What drives me
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          I am interested in work that is technically grounded and deeply human
          at the same time.
        </h2>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            My professional identity is rooted in data science, but I do not see
            data science as a narrow technical label. I see it as a way of
            thinking: a discipline that brings structure to uncertainty,
            sharpens decisions, and reveals patterns that are not obvious at
            first glance.
          </p>
          <p>
            Outside work, I am equally interested in the habits and ideas that
            shape a meaningful life. Fitness, books, reflective thinking, and
            the pursuit of personal growth are not separate from my professional
            life. They inform it. They make my work steadier, my thinking
            clearer, and my ambitions more grounded.
          </p>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          In this space
        </p>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
          <ul className="space-y-3 leading-8 text-zinc-300">
            <li>Professional case studies and selected work</li>
            <li>Technical ideas and practical reflections</li>
            <li>Lessons from competition and experimentation</li>
            <li>Notes on books, growth, and self-development</li>
            <li>Coaching philosophy and future offerings</li>
          </ul>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Principles
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          A few principles shape how I approach both work and growth.
        </h2>
        <div className="grid gap-5 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="text-xl font-semibold text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-3 leading-8 text-zinc-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Looking ahead
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          I want this website to grow into a body of work rather than remain a
          static introduction.
        </h2>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            In the coming phases, this site will expand into a richer collection
            of case studies, technical writing, personal essays, book
            reflections, coaching ideas, and experiments that reflect how I
            continue to evolve. The goal is not simply to document experience,
            but to make visible the way I think.
          </p>
          <p>
            It is also to contribute meaningfully to others by sharing my ideas
            and learnings in a way that helps individuals grow, both personally
            and professionally, and enables the broader community to benefit
            from that journey.
          </p>
          <p>
            If you are here because of my work, my ideas, or the possibility of
            building something meaningful together, I hope this space gives you
            a clearer sense of both what I do and how I approach it.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            href="/projects"
            className="rounded-full border border-zinc-700 bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            Explore Projects
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}