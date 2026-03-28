import Link from "next/link";

const focusAreas = [
  {
    title: "Solve Real Problems",
    description:
      "I focus on applying data science where it matters most: in messy, real-world environments where decisions carry consequences, constraints are real, and success depends on more than just model performance.",
  },
  {
    title: "Think and Write",
    description:
      "Writing helps me clarify how I see systems, decisions, and trade-offs. It is where technical ideas, professional insight, and personal reflection begin to take a more durable form.",
  },
  {
    title: "Compete and Experiment",
    description:
      "Competitive problem-solving keeps my thinking sharp. Through hands-on experimentation and platforms like Kaggle, I continue to test assumptions, refine methods, and learn under pressure.",
  },
  {
    title: "Coach People to Grow",
    description:
      "I am building a coaching practice grounded in clarity, discipline, and growth. My interest is not in generic advice, but in helping people think better, act with intention, and develop with consistency.",
  },
];

const featuredWork = [
  {
    title: "Interactive CV",
    description:
      "A structured view of my professional journey across data science, applied AI, enterprise leadership, and value realization.",
    href: "/cv",
  },
  {
    title: "Projects and Case Studies",
    description:
      "Selected work presented through context, approach, trade-offs, and outcomes rather than surface-level summaries.",
    href: "/projects",
  },
  {
    title: "Writing and Reflections",
    description:
      "A space for technical ideas, professional essays, learning notes, and thoughtful reflections on growth and decision-making.",
    href: "/writing",
  },
];

const signals = [
  {
    value: "15+",
    label: "Years across analytics, machine learning, AI, and enterprise problem-solving",
  },
  {
    value: "50+",
    label: "Initiatives across retail, banking, technology, and automotive domains",
  },
  {
    value: "700+",
    label: "Individuals trained, mentored, and coached across data and analytics",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Data Science · Machine Learning · AI · Strategy & Value Realization
        </p>

        <h1 className="max-w-4xl text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Mohit Sharma
        </h1>

        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          A data scientist who solves real problems, writes thoughtfully,
          competes rigorously, and coaches people to grow.
        </p>

        <div className="max-w-4xl space-y-5 text-base leading-8 text-zinc-300">
          <p>
            My work sits at the intersection of data, decision-making, and
            real-world outcomes. Over time, I have come to believe that solving
            meaningful problems is rarely about models alone. It is about
            understanding context, navigating trade-offs, and staying close to
            the human realities behind the numbers.
          </p>
          <p>
            This website brings together my work, ideas, experiments, and
            reflections, along with the practices that continue to shape how I
            think, build, compete, and help others grow.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 pt-2">
          <Link
            href="/projects"
            className="rounded-full border border-zinc-700 bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            View My Work
          </Link>
          <Link
            href="/writing"
            className="rounded-full border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-medium text-zinc-200 transition hover:border-zinc-700 hover:bg-zinc-900/70"
          >
            Explore My Thinking
          </Link>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        {signals.map((item) => (
          <div
            key={item.value}
            className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
          >
            <p className="text-3xl font-semibold text-zinc-100">{item.value}</p>
            <p className="mt-2 text-sm leading-6 text-zinc-400">{item.label}</p>
          </div>
        ))}
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          What I Do
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          My work is shaped by a few consistent threads that connect problem
          solving, reflection, competition, and growth.
        </h2>
        <p className="max-w-3xl leading-8 text-zinc-300">
          Each of these areas reflects a different side of the same core
          orientation: to think clearly, work rigorously, and create value that
          is both practical and lasting.
        </p>

        <div className="grid gap-5 md:grid-cols-2">
          {focusAreas.map((item) => (
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
          Featured Sections
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          The site is being built as a living body of work rather than a static
          portfolio.
        </h2>
        <p className="max-w-3xl leading-8 text-zinc-300">
          Over time, it will hold a more complete record of the work I have
          done, the ideas I continue to refine, and the direction in which I
          want to grow as a professional and as a person.
        </p>

        <div className="grid gap-5 md:grid-cols-3">
          {featuredWork.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6"
            >
              <h3 className="text-xl font-semibold text-zinc-100">
                {item.title}
              </h3>
              <p className="mt-3 leading-8 text-zinc-300">{item.description}</p>
              <Link
                href={item.href}
                className="mt-4 inline-flex text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
              >
                Explore section →
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          About This Space
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          A personal website should reveal more than a list of roles and
          achievements.
        </h2>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            The strongest professional identities are rarely built on titles
            alone. They emerge through a combination of work, ideas, discipline,
            and point of view. That is the direction I want this website to
            take.
          </p>
          <p>
            Alongside projects and experience, this space will also hold
            reflections on books, competition, decision-making, coaching, and
            the habits that shape a more intentional life.
          </p>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Coming Next
        </p>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8">
          <ul className="space-y-3 leading-8 text-zinc-300">
            <li>Interactive CV</li>
            <li>Case-study based projects</li>
            <li>Technical and professional writing</li>
            <li>Kaggle journey and experiments</li>
            <li>Coaching page</li>
            <li>Personal reflections and book notes</li>
          </ul>
        </div>
      </section>
    </main>
  );
}