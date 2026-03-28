import Link from "next/link";

const enterpriseProjects = [
  {
    title: "Inventory Optimisation & Forecasting System",
    category: "Telecom · Forecasting · ML Systems",
    description:
      "Designing a forecasting system for inventory planning under real-world constraints, balancing accuracy, scalability, and operational usability.",
    impact: "70 MSEK realised savings · 350 MSEK projected impact",
    href: "/projects/enterprise/inventory-forecasting",
    tags: ["Forecasting", "Supply Chain", "Decision Systems"],
  },
  {
    title: "Credit Card Fraud Detection",
    category: "Banking · Fraud Detection · Decision Systems",
    description:
      "Designing a fraud detection system for rare-event environments, combining supervised models, anomaly detection, and decision-layer controls.",
    impact:
      "Improved detection of rare fraud events while maintaining operational control over false positives",
    href: "/projects/enterprise/credit-card-fraud-detection",
    tags: ["Banking", "Fraud Detection", "Risk Systems"],
  },
  {
    title: "Propensity & Cross-Sell Modelling",
    category: "Banking · Growth Analytics · Customer Targeting",
    description:
      "Developing targeted modelling systems to identify high-probability customer opportunities within a regulated financial environment.",
    impact: "750K+ targeted opportunities identified",
    href: "/projects/enterprise/propensity-modeling",
    tags: ["Customer Analytics", "Growth", "ML Models"],
  },
  {
    title: "Semantic Understanding & Topic Modelling",
    category: "Technology · NLP · Large-Scale Systems",
    description:
      "Building semantic understanding systems using topic modelling, clustering, and similarity techniques across large-scale text data.",
    impact: "Applied across large-scale language and search datasets",
    href: "/projects/enterprise/semantic-understanding",
    tags: ["NLP", "Topic Modelling", "Search Systems"],
  },
];

export default function EnterpriseProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8 sm:py-20">
      {/* Header */}
      <section className="space-y-5">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Projects / Enterprise
        </p>

        <h1 className="text-4xl font-semibold tracking-tight text-zinc-100 sm:text-5xl">
          Enterprise & Professional Work
        </h1>

        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            This section brings together work delivered in enterprise
            environments where constraints are real, systems must operate at
            scale, and outcomes carry measurable impact.
          </p>

          <p>
            The focus here is not only on models, but on how those models fit
            into decision systems, how they interact with operational processes,
            and how they perform under real-world conditions.
          </p>
        </div>
      </section>

      {/* Projects List */}
      <section className="mt-24 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight text-zinc-200">
          Case studies
        </h2>

        <div className="grid gap-6">
          {enterpriseProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8"
            >
              {/* Category */}
              <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                {project.category}
              </p>

              {/* Title */}
              <h3 className="mt-3 text-2xl font-semibold text-zinc-100">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mt-4 max-w-4xl leading-8 text-zinc-300">
                {project.description}
              </p>

              {/* Impact */}
              <div className="mt-6">
                <p className="text-sm uppercase tracking-[0.18em] text-zinc-500">
                  Impact
                </p>
                <p className="mt-2 leading-8 text-zinc-300">
                  {project.impact}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-zinc-800 bg-zinc-950/50 px-3 py-1 text-xs text-zinc-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <Link
                href={project.href}
                className="mt-6 inline-flex text-sm font-medium text-zinc-300 transition hover:text-zinc-100"
              >
                View Case Study →
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Note */}
      <section className="mt-24 space-y-8">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          A note on this work
        </p>

        <div className="max-w-4xl space-y-5 leading-8 text-zinc-300">
          <p>
            Enterprise work is shaped by constraints that do not exist in
            controlled environments. Data is imperfect, systems are complex,
            and decisions have real consequences.
          </p>

          <p>
            The value of this work lies not only in building models, but in
            designing systems that behave reliably under those conditions. That
            includes understanding trade-offs, aligning with operational
            realities, and ensuring that outputs translate into meaningful
            decisions.
          </p>
        </div>
      </section>
    </main>
  );
}