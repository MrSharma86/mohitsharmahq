type CVPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function CVPage({ searchParams }: CVPageProps) {
  const params = (await searchParams) ?? {};
  const hasError = params.error === "invalid-password";

  return (
    <div className="mx-auto max-w-6xl px-6 py-24 md:px-10">
      <div className="grid gap-12 md:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            CV
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-5xl">
            Career Summary
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              My professional journey spans analytics, machine learning, AI, and
              enterprise problem-solving across multiple industries including
              retail, banking, technology, and automotive.
            </p>

            <p>
              Over the years, I have worked across technical delivery,
              applied data science, enterprise leadership, and value realization.
              My work has focused not only on solving analytical problems, but
              also on shaping decision-making, driving transformation, and
              helping people and teams grow.
            </p>

            <p>
              This public summary is intended to provide a high-level picture of
              my background. The full CV is available only through password-protected access.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-semibold text-white">15+</p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Years across analytics, machine learning, AI, and enterprise problem-solving
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-semibold text-white">50+</p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Initiatives across retail, banking, technology, and automotive domains
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-6">
              <p className="text-3xl font-semibold text-white">700+</p>
              <p className="mt-2 text-sm leading-6 text-neutral-400">
                Individuals trained, mentored, and coached across data and analytics
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
            Access Full CV
          </p>

          <h2 className="mt-4 text-2xl font-semibold text-white">
            Password-protected detailed CV
          </h2>

          <p className="mt-4 text-base leading-7 text-neutral-300">
            Enter the access password to view the full version of my CV,
            including detailed roles, selected achievements, and career timeline.
          </p>

          <form action="/api/cv-access" method="POST" className="mt-8 space-y-4">
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-neutral-200"
              >
                Access password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full rounded-2xl border border-white/10 bg-neutral-900 px-4 py-3 text-white outline-none transition focus:border-white/30"
                placeholder="Enter password"
              />
            </div>

            {hasError ? (
              <p className="text-sm text-red-400">
                The password was incorrect. Please try again.
              </p>
            ) : null}

            <button
              type="submit"
              className="rounded-full border border-white bg-white px-6 py-3 text-sm font-medium text-neutral-950 transition hover:scale-[1.02]"
            >
              View Full CV
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}