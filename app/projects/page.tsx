import Link from "next/link";

const enterpriseWork = [
  {
    title: "Inventory Optimisation & Forecasting System",
    category: "Telecom · Forecasting · ML Systems",
    description:
      "Designing a forecasting system for inventory planning under real-world constraints, balancing accuracy, scalability, and operational usability across enterprise contexts.",
    impact:
      "70 MSEK realised savings · 350 MSEK projected impact",
    href: "/projects/inventory-forecasting",
    note: "Confidential context — code is not shared publicly.",
  },
  {
    title: "Fraud Detection in Banking",
    category: "Banking · Fraud · Risk Modelling",
    description:
      "Building fraud models in a regulated environment where precision, recall, and operational usability had immediate business consequences.",
    impact:
      "12% recall improvement · 15% reduction in false positives",
    href: "/projects/fraud-detection",
    note: "Confidential context — implementation details are shared at a high level only.",
  },
  {
    title: "Propensity & Cross-Sell Modelling",
    category: "Banking · Growth Analytics · Customer Targeting",
    description:
      "Developing targeted modelling systems to support customer acquisition and portfolio growth through more precise opportunity identification.",
    impact:
      "750K+ targeted opportunities identified",
    href: "/projects/propensity-modeling",
    note: "Confidential context — code is not shared publicly.",
  },
  {
    title: "Semantic Understanding & Topic Modelling",
    category: "Technology · NLP · Large-Scale Language Systems",
    description:
      "Working on language understanding systems at scale, combining topic modelling, semantic similarity, and clustering to make large text corpora more decision-ready.",
    impact:
      "Built across billions of search and language records",
    href: "/projects/semantic-understanding",
    note: "Confidential context — technical summary only.",
  },
];

const independentProjects = [
  {
    title: "Kaggle Forecasting Experiments",
    category: "Independent · Time Series · Kaggle",
    description:
      "Exploring demand forecasting approaches across tree-based models, deep learning, and transformer-inspired methods in open experimental settings.",
    stack: "Python · XGBoost · Pandas · Time Series",
    codeLabel: "View Project",
    codeHref: "#",
  },
  {
    title: "NLP / LLM Exploration",
    category: "Independent · NLP · GenAI",
    description:
      "A set of personal experiments around semantic search, prompting, embeddings, and knowledge-driven AI workflows built outside enterprise constraints.",
    stack: "Python · LangChain · OpenAI · Embeddings",
    codeLabel: "View Project",
    codeHref: "#",
  },
  {
    title: "Applied ML Sandbox",
    category: "Independent · Machine Learning · Experimentation",
    description:
      "A space for testing ideas, comparing modelling approaches, and building small but focused systems that sharpen technical intuition through iteration.",
    stack: "Python · Scikit-learn · Jupyter · Evaluation",
    codeLabel: "View Project",
    codeHref: "#",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
    <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-24">
        <section className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Projects
          </p>

          <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
            Projects and Case Studies
          </h1>

          <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              This page brings together two related but distinct kinds of work.
              The first reflects how I operate in enterprise and professional
              environments, where constraints are real, decisions carry
              consequences, and impact must be measurable. The second reflects how
              I continue to build independently, using open projects and
              experiments to explore ideas, sharpen methods, and stay close to the
              craft itself.
            </p>

            <p>
              Taken together, they offer a more complete picture of how I think:
              not just in terms of models or tools, but in terms of systems,
              trade-offs, and outcomes.
            </p>
          </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Enterprise & Professional Work
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Work delivered in real-world environments where constraints are
            real, decisions carry consequences, and systems need to perform
            beyond controlled conditions.
          </h2>
        </div>

        <div className="mt-12 space-y-6">
          {enterpriseWork.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
                <div className="max-w-3xl">
                  <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                    {project.category}
                  </p>

                  <h3 className="mt-3 text-2xl font-semibold text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-base leading-8 text-neutral-300">
                    {project.description}
                  </p>

                  <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                    <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                      Impact
                    </p>
                    <p className="mt-2 text-base font-medium text-neutral-200">
                      {project.impact}
                    </p>
                  </div>

                  <p className="mt-5 text-sm leading-7 text-neutral-400">
                    {project.note}
                  </p>
                </div>

                <div className="shrink-0">
                  <Link
                    href={project.href}
                    className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.05]"
                  >
                    View Case Study
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Independent Projects & Experiments
          </p>

          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Work pursued independently to explore ideas, test approaches, and
            deepen technical understanding in ways that are not always possible
            within structured environments.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {independentProjects.map((project) => (
            <div
              key={project.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8 transition hover:border-white/20 hover:bg-white/[0.045]"
            >
              <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                {project.category}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-white">
                {project.title}
              </h3>

              <p className="mt-5 text-base leading-8 text-neutral-300">
                {project.description}
              </p>

              <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] px-5 py-4">
                <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                  Stack
                </p>
                <p className="mt-2 text-sm leading-7 text-neutral-200">
                  {project.stack}
                </p>
              </div>

              <div className="mt-6">
                <Link
                  href={project.codeHref}
                  className="inline-flex rounded-full border border-white/20 px-5 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/[0.05]"
                >
                  {project.codeLabel}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-20 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8 md:p-10">
        <div className="max-w-4xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            A note on this page
          </p>

          <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The work I value most is rarely defined by technical novelty
              alone. What matters more is how closely a system stays connected
              to real decisions, real constraints, and outcomes that can be felt
              beyond the model itself.
            </p>

            <p>
              Some of the work shown here is drawn from professional settings
              where code and internal implementation details cannot be shared
              openly. In those cases, the emphasis is on the problem, the
              structure of the solution, and the impact it created.
            </p>
          </div>
        </div>
      </section>
    </div>
    </div>
  );
}