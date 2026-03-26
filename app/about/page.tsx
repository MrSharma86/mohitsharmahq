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
    <div className="bg-neutral-950 text-neutral-100">
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-10 md:pb-24 md:pt-28">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            About
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            A career built at the intersection of data, decisions, and growth.
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-9 text-neutral-300">
            <p>
              I am a data scientist by profession, but that description only
              tells part of the story. What has consistently shaped my work is a
              deeper interest in how problems are framed, how decisions are
              made, and how people and systems evolve over time.
            </p>

            <p>
              Over the years, I have worked across applied data science, machine learning, 
              enterprise transformation, and value realization. That journey has taught me 
              that meaningful work is rarely created through technical ability alone. It 
              comes from combining analysis with judgment, structure with adaptability, and 
              rigor with an understanding of what matters in the real world. And yes, politics 
              included (not the ballot-box kind). Not in the negative sense, but in recognizing that 
              navigating stakeholders, aligning incentives, and building consensus is an 
              essential dimension of getting things done. At the end of the day, relationships 
              and trust are what truly determine whether good ideas translate into real impact.
            </p>

            <p>
              This website is an extension of that perspective. It is a place
              where I want to bring together the professional and the personal:
              projects, ideas, experiments, reflections, books, competition,
              and the principles that continue to shape how I think and work.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
              What drives me
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
              I am interested in work that is technically grounded and deeply
              human at the same time.
            </h2>

            <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-300">
              <p>
                My professional identity is rooted in data science, but I do not
                see data science as a narrow technical label. I see it as a way
                of thinking: a discipline that brings structure to uncertainty,
                sharpens decisions, and reveals patterns that are not obvious at
                first glance.
              </p>

              <p>
                Outside work, I am equally interested in the habits and ideas
                that shape a meaningful life. Fitness, books, reflective
                thinking, and the pursuit of personal growth are not separate
                from my professional life. They inform it. They make my work
                steadier, my thinking clearer, and my ambitions more grounded.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
              In this space
            </p>

            <ul className="mt-6 space-y-4 text-base leading-7 text-neutral-300">
              <li>Professional case studies and selected work</li>
              <li>Technical ideas and practical reflections</li>
              <li>Lessons from competition and experimentation</li>
              <li>Notes on books, growth, and self-development</li>
              <li>Coaching philosophy and future offerings</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Principles
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            A few principles shape how I approach both work and growth.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {principles.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/[0.02] p-8"
            >
              <h3 className="text-2xl font-medium text-white">{item.title}</h3>
              <p className="mt-4 text-base leading-8 text-neutral-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl border-t border-white/10 px-6 py-16 md:px-10 md:py-24">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Looking ahead
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            I want this website to grow into a body of work rather than remain a
            static introduction.
          </h2>

          <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              In the coming phases, this site will expand into a richer
              collection of case studies, technical writing, personal essays,
              book reflections, coaching ideas, and experiments that reflect how
              I continue to evolve. The goal is not simply to document
              experience, but to make visible the way I think. It is also to contribute 
              meaningfully to others by sharing my ideas and learnings in a way that helps 
              individuals grow, both personally and professionally, and enables the broader 
              community to benefit from that journey.
            </p>

            <p>
              If you are here because of my work, my ideas, or the possibility
              of building something meaningful together, I hope this space gives
              you a clearer sense of both what I do and how I approach it.
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full border border-white bg-white px-7 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              Explore Projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}