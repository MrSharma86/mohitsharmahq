"use client";

import { useMemo, useState } from "react";

type Metric = {
  value: string;
  label: string;
};

type ExpertiseArea = {
  title: string;
  category: string;
  items: string[];
};

type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  location: string;
  story: string;
  focus: string;
  highlights: string[];
};

type SystemItem = {
  title: string;
  context: string;
  approach: string;
  outcome: string;
};

type EducationItem = {
  title: string;
  institution: string;
  period: string;
};

type FullCVClientProps = {
  impactMetrics?: Metric[];
  expertiseAreas?: ExpertiseArea[];
  experience?: ExperienceItem[];
  selectedSystems?: SystemItem[];
  teaching?: string[];
  education?: EducationItem[];
  recognitions?: string[];
};

const expertiseFilters = [
  { label: "All", value: "all" },
  { label: "ML", value: "ml" },
  { label: "GenAI / NLP", value: "genai" },
  { label: "Engineering", value: "engineering" },
  { label: "Leadership", value: "leadership" },
];

const cvSections = [
  { label: "Overview", href: "#overview" },
  { label: "Impact", href: "#impact" },
  { label: "Expertise", href: "#expertise" },
  { label: "Journey", href: "#journey" },
  { label: "Systems", href: "#systems" },
  { label: "Growth", href: "#growth" },
];

export default function FullCVClient({
  impactMetrics = [],
  expertiseAreas = [],
  experience = [],
  selectedSystems = [],
  teaching = [],
  education = [],
  recognitions = [],
}: FullCVClientProps) {
  const [expandedRoles, setExpandedRoles] = useState<number[]>([0, 1]);
  const [viewMode, setViewMode] = useState<"detailed" | "compact">("detailed");
  const [expertiseFilter, setExpertiseFilter] = useState("all");

  const filteredExpertise = useMemo(() => {
    if (expertiseFilter === "all") return expertiseAreas;
    return expertiseAreas.filter((area) => area.category === expertiseFilter);
  }, [expertiseAreas, expertiseFilter]);

  const toggleRole = (index: number) => {
    setExpandedRoles((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const expandAll = () => {
    setExpandedRoles(experience.map((_, index) => index));
  };

  const collapseAll = () => {
    setExpandedRoles([]);
  };

  return (
  <div className="mx-auto max-w-7xl px-6 py-20 md:px-10 md:py-24">
    <div className="grid gap-10 xl:grid-cols-[220px_minmax(0,1fr)]">
      <aside className="hidden xl:block">
        <div className="sticky top-28 rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-5">
          <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
            Navigate
          </p>

          <nav className="mt-5 flex flex-col gap-3">
            {cvSections.map((section) => (
              <a
                key={section.href}
                href={section.href}
                className="text-sm text-neutral-400 transition hover:text-white"
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>
      </aside>

      <div>
        
      <section id="overview" className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
          Full CV
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Mohit Sharma
        </h1>

        <p className="mt-4 text-xl leading-9 text-neutral-200 md:text-2xl md:leading-10">
          Lead Data Scientist and enterprise AI leader building systems where
          data, decision-making, and business value converge.
        </p>

        <div className="mt-8 space-y-6 text-lg leading-8 text-neutral-300">
          <p>
            My career has evolved across analytics, machine learning, NLP,
            GenAI, forecasting, and enterprise transformation. Over time, that
            journey has expanded from hands-on modelling into a broader focus on
            building decision systems, leading technical direction, and ensuring
            that AI work creates measurable value in real business settings.
          </p>

          <p>
            This page is structured to be explored rather than merely read. You
            can scan the impact snapshot, filter areas of expertise, and expand
            specific roles depending on the level of detail you want.
          </p>
        </div>

        <div className="mt-8 flex flex-col gap-4 sm:flex-row">
          <form action="/api/cv-logout" method="POST">
            <button
              type="submit"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/5"
            >
              Exit Full CV
            </button>
          </form>

          <button
            type="button"
            onClick={() =>
              setViewMode((current) =>
                current === "detailed" ? "compact" : "detailed"
              )
            }
            className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-neutral-200 transition hover:border-white/30 hover:bg-white/[0.04]"
          >
            Switch to {viewMode === "detailed" ? "compact" : "detailed"} view
          </button>
        </div>
      </section>

      <section id="impact"
        className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {impactMetrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition hover:bg-white/[0.05]"
          >
            <p className="text-3xl font-semibold tracking-tight text-white">
              {metric.value}
            </p>
            <p className="mt-3 text-sm leading-6 text-neutral-400">
              {metric.label}
            </p>
          </div>
        ))}
      </section>

      <section id="expertise" className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Areas of Expertise
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Built across technical depth, production reality, and business
            relevance.
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap gap-3">
          {expertiseFilters.map((filter) => {
            const isActive = expertiseFilter === filter.value;

            return (
              <button
                key={filter.value}
                type="button"
                onClick={() => setExpertiseFilter(filter.value)}
                className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "border border-white bg-white text-neutral-950"
                    : "border border-white/10 bg-white/[0.02] text-neutral-300 hover:border-white/30 hover:bg-white/[0.05]"
                }`}
              >
                {filter.label}
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {filteredExpertise.map((area) => (
            <div
              key={area.title}
              className="rounded-[2rem] border border-white/10 bg-white/[0.025] p-8"
            >
              <h3 className="text-2xl font-medium text-white">{area.title}</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-neutral-300">
                {area.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/40" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="journey" className="mt-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
                Professional Journey
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
                Each role has added a layer: from solving technical problems, to
                designing systems, to understanding how decisions are actually made and
                sustained.
            </h2>
            </div>

            <div className="flex flex-wrap gap-3">
            <button
                type="button"
                onClick={expandAll}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:bg-white/[0.04]"
            >
                Expand all
            </button>
            <button
                type="button"
                onClick={collapseAll}
                className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:bg-white/[0.04]"
            >
                Collapse all
            </button>
            </div>
        </div>

        <div className="mt-14 space-y-8">
            {experience.map((item, index) => {
            const isExpanded = expandedRoles.includes(index);

            return (
                <div
                key={`${item.company}-${item.role}-${item.period}`}
                className="relative pl-10 md:pl-16"
                >
                <div className="absolute left-3 top-0 h-full w-px bg-white/10 md:left-6" />
                <div className="absolute left-0 top-8 h-6 w-6 rounded-full border border-white/20 bg-neutral-950 md:left-3">
                    <div className="absolute left-1/2 top-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60" />
                </div>

                <div className="rounded-[2rem] border border-white/10 bg-white/[0.02] p-8 transition hover:bg-white/[0.03]">
                    <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                    <div className="max-w-3xl">
                        <p className="text-sm uppercase tracking-[0.22em] text-neutral-400">
                        {item.company}
                        </p>
                        <h3 className="mt-2 text-2xl font-semibold text-white">
                        {item.role}
                        </h3>
                        <p className="mt-2 text-sm text-neutral-400">
                        {item.location}
                        </p>
                        <p className="mt-1 text-sm text-neutral-500">{item.period}</p>
                    </div>

                    <button
                        type="button"
                        onClick={() => toggleRole(index)}
                        className="rounded-full border border-white/10 px-4 py-2 text-sm text-neutral-300 transition hover:border-white/30 hover:bg-white/[0.04]"
                    >
                        {isExpanded ? "Hide details" : "View details"}
                    </button>
                    </div>

                    <div className="mt-6">
                    <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                        What shaped this phase
                    </p>
                    <p className="mt-3 text-base leading-8 text-neutral-300">
                        {item.story}
                    </p>
                    </div>

                    <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
                    <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                        Primary focus
                    </p>
                    <p className="mt-2 text-base leading-7 text-neutral-200">
                        {item.focus}
                    </p>
                    </div>

                    {viewMode === "detailed" && isExpanded ? (
                    <div className="mt-6">
                        <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                        Selected contributions
                        </p>
                        <ul className="mt-4 space-y-4 text-base leading-7 text-neutral-300">
                        {item.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/40" />
                            <span>{highlight}</span>
                            </li>
                        ))}
                        </ul>
                    </div>
                    ) : null}

                    {viewMode === "compact" && isExpanded ? (
                    <div className="mt-6">
                        <p className="text-sm uppercase tracking-[0.18em] text-neutral-500">
                        Selected contributions
                        </p>
                        <div className="mt-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-7 text-neutral-300">
                        {item.highlights.slice(0, 2).map((highlight) => (
                            <p key={highlight} className="mb-3 last:mb-0">
                            • {highlight}
                            </p>
                        ))}
                        </div>
                    </div>
                    ) : null}
                </div>
                </div>
            );
            })}
        </div>
        </section>

      <section id="systems" className="mt-20">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Selected Systems & Impact
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Representative work across forecasting, fraud, growth, and language systems.
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {selectedSystems.map((system) => (
            <details
              key={system.title}
              className="group rounded-[2rem] border border-white/10 bg-white/[0.025] p-8"
            >
              <summary className="cursor-pointer list-none">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-2xl font-medium text-white">{system.title}</h3>
                  <span className="text-sm text-neutral-400 transition group-open:rotate-45">
                    +
                  </span>
                </div>
                <p className="mt-4 text-base leading-8 text-neutral-300">
                  {system.context}
                </p>
              </summary>

              <div className="mt-6 space-y-5 border-t border-white/10 pt-6 text-base leading-8 text-neutral-300">
                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">
                    Approach
                  </p>
                  <p className="mt-2">{system.approach}</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-[0.18em] text-neutral-400">
                    Outcome
                  </p>
                  <p className="mt-2">{system.outcome}</p>
                </div>
              </div>
            </details>
          ))}
        </div>
      </section>

        <section
            id="growth"
            className="mt-20 grid gap-8 md:grid-cols-[1.1fr_0.9fr]"
        >
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
          <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
            Teaching, Mentoring & Coaching
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white">
            A long-standing thread in my work has been helping others understand,
            apply, and grow.
          </h2>

          <ul className="mt-8 space-y-4 text-base leading-7 text-neutral-300">
            {teaching.map((item) => (
              <li key={item} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/40" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
              Education
            </p>
            <div className="mt-6 space-y-6">
              {education.map((item) => (
                <div key={`${item.title}-${item.institution}`}>
                  <h3 className="text-lg font-medium text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-neutral-300">{item.institution}</p>
                  <p className="mt-1 text-sm text-neutral-500">{item.period}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
              Recognition
            </p>
            <ul className="mt-6 space-y-4 text-base leading-7 text-neutral-300">
              {recognitions.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-white/40" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      </div>
    </div>
  </div>
);
}