type CVPageProps = {
  searchParams?: Promise<{
    error?: string;
  }>;
};

export default async function CVPage({ searchParams }: CVPageProps) {
  const params = (await searchParams) ?? {};
  const hasError = params.error === "invalid-password";

  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">CV</p>
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Career Summary
        </h1>
        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            My professional journey spans analytics, machine learning, AI, and
            enterprise problem-solving across multiple industries including
            retail, banking, technology, and automotive.
          </p>
          <p>
            Over the years, I have worked across technical delivery, applied
            data science, enterprise leadership, and value realization. My work
            has focused not only on solving analytical problems, but also on
            shaping decision-making, driving transformation, and helping people
            and teams grow.
          </p>
          <p>
            This public summary is intended to provide a high-level picture of
            my background. The full CV is available only through
            password-protected access.
          </p>
        </div>
      </section>

      <section className="mt-16 grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold text-zinc-100">15+</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Years across analytics, machine learning, AI, and enterprise
            problem-solving
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold text-zinc-100">50+</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Initiatives across retail, banking, technology, and automotive
            domains
          </p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold text-zinc-100">700+</p>
          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Individuals trained, mentored, and coached across data and
            analytics
          </p>
        </div>
      </section>

      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Access Full CV
        </p>
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          Password-protected detailed CV
        </h2>
        <p className="max-w-3xl leading-8 text-zinc-300">
          Enter the access password to view the full version of my CV, including
          detailed roles, selected achievements, and career timeline.
        </p>

        <form
          action="/api/cv-access"
          method="POST"
          className="max-w-md space-y-4 rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
        >
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm uppercase tracking-[0.18em] text-zinc-500"
            >
              Access password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full rounded-2xl border border-zinc-800 bg-zinc-950 px-4 py-3 text-zinc-100 outline-none transition focus:border-zinc-600"
            />
          </div>

          {hasError ? (
            <p className="text-sm text-red-400">
              The password was incorrect. Please try again.
            </p>
          ) : null}

          <button
            type="submit"
            className="rounded-full border border-zinc-700 bg-zinc-100 px-5 py-3 text-sm font-medium text-zinc-950 transition hover:bg-zinc-200"
          >
            View Full CV
          </button>
        </form>
      </section>
    </main>
  );
}