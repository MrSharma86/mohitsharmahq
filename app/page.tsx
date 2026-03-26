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
    label:
      "Years across analytics, machine learning, AI, and enterprise problem-solving",
  },
  {
    value: "50+",
    label:
      "Initiatives across retail, banking, technology, and automotive domains",
  },
  {
    value: "700+",
    label:
      "Individuals trained, mentored, and coached across data and analytics",
  },
];

export default function HomePage() {
  return (
    <div className="relative overflow-hidden bg-neutral-950 text-neutral-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute right-0 top-[420px] h-[360px] w-[360px] rounded-full bg-white/[0.03] blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-5xl px-6 pb-16 pt-28 md:px-10 md:pb-20 md:pt-36">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.32em] text-neutral-500">
            Data Science · Machine Learning · AI · Strategy & Value Realization
          </p>

          <h1 className="text-5xl font-semibold tracking-tight text-white md:text-7xl">
            Mohit Sharma
          </h1>

          <p className="mt-6 text-xl leading-9 text-neutral-200 md:text-2xl md:leading-10">
            A data scientist who solves real problems, writes thoughtfully,
            competes rigorously, and coaches people to grow.
          </p>

          <div className="mt-10 space-y-6 text-lg leading-9 text-neutral-300">
            <p>
              My work sits at the intersection of data, decision-making, and
              real-world outcomes. Over time, I have come to believe that
              solving meaningful problems is rarely about models alone. It is
              about understanding context, navigating trade-offs, and staying
              close to the human realities behind the numbers.
            </p>

            <p>
              This website brings together my work, ideas, experiments, and
              reflections, along with the practices that continue to shape how I
              think, build, compete, and help others grow.
            </p>
          </div>

          <div className="mt-12 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full border border-white bg-white px-7 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              View My Work
            </Link>
            <Link
              href="/writing"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Explore My Thinking
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-10 md:px-10">
        <div className="grid gap-px overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/10 md:grid-cols-3">
          {signals.map((item) => (
            <div
              key={item.label}
              className="bg-white/[0.03] p-6 transition hover:bg-white/[0.05] md:p-8"
            >
              <p className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
                {item.value}
              </p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-6 md:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            What I Do
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            My work is shaped by a few consistent threads that connect problem
            solving, reflection, competition, and growth.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Each of these areas reflects a different side of the same core
            orientation: to think clearly, work rigorously, and create value
            that is both practical and lasting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {focusAreas.map((item) => (
            <div
              key={item.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition duration-300 hover:border-white/20 hover:bg-white/[0.045]"
            >
              <div className="mb-6 h-1 w-14 rounded-full bg-white/30 transition group-hover:w-20 group-hover:bg-white/60" />
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-6 md:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Featured Sections
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            The site is being built as a living body of work rather than a
            static portfolio.
          </h2>
          <p className="mt-6 text-lg leading-8 text-neutral-300">
            Over time, it will hold a more complete record of the work I have
            done, the ideas I continue to refine, and the direction in which I
            want to grow as a professional and as a person.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {featuredWork.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition hover:border-white/20 hover:bg-white/[0.04]"
            >
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-neutral-300">
                {item.description}
              </p>
              <p className="mt-6 text-sm font-medium tracking-wide text-neutral-200">
                Explore section →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto max-w-6xl px-6 pb-6 md:px-10">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:grid-cols-[1.15fr_0.85fr] md:p-12">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
              About This Space
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              A personal website should reveal more than a list of roles and
              achievements.
            </h2>

            <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-300">
              <p>
                The strongest professional identities are rarely built on titles
                alone. They emerge through a combination of work, ideas,
                discipline, and point of view. That is the direction I want this
                website to take.
              </p>
              <p>
                Alongside projects and experience, this space will also hold
                reflections on books, competition, decision-making, coaching,
                and the habits that shape a more intentional life.
              </p>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-white/10 bg-neutral-900/70 p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
              Coming Next
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-neutral-300">
              <li>Interactive CV</li>
              <li>Case-study based projects</li>
              <li>Technical and professional writing</li>
              <li>Kaggle journey and experiments</li>
              <li>Coaching page</li>
              <li>Personal reflections and book notes</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}