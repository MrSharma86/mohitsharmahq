import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const pythonCodeOne = `def create_features(df):
    df = df.sort_values(["material_id", "date"])
    
    df["lag_1"] = df.groupby("material_id")["quantity"].shift(1)
    df["lag_4"] = df.groupby("material_id")["quantity"].shift(4)
    
    df["rolling_mean_4"] = (
        df.groupby("material_id")["quantity"]
        .rolling(window=4)
        .mean()
        .reset_index(level=0, drop=True)
    )
    
    df["month"] = df["date"].dt.month
    df["week"] = df["date"].dt.isocalendar().week
    
    return df`;

const pythonCodeTwo = `# Step 1: classify delay
delay_model.fit(X_train, y_delay)

# Step 2: estimate delay duration
duration_model.fit(X_train, y_duration)

# Combine outputs
delay_pred = delay_model.predict(X_test)
duration_pred = duration_model.predict(X_test)

final_delay = delay_pred * duration_pred`;

const pythonCodeThree = `from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import LSTM, Dense

model = Sequential([
    LSTM(50, input_shape=(timesteps, features)),
    Dense(1)
])

model.compile(optimizer="adam", loss="mse")
model.fit(X_train_seq, y_train, epochs=10, batch_size=32)`;

const codeStyle = {
  ...oneDark,
  'pre[class*="language-"]': {
    ...oneDark['pre[class*="language-"]'],
    background: "rgba(23, 23, 23, 0.9)",
    border: "1px solid rgba(255,255,255,0.1)",
    borderRadius: "1.5rem",
    padding: "20px",
    fontSize: "0.85rem",
    lineHeight: "1.8",
    overflowX: "auto" as const,
  },
  'code[class*="language-"]': {
    ...oneDark['code[class*="language-"]'],
    background: "transparent",
    fontSize: "0.85rem",
    lineHeight: "1.8",
  },
};

export default function InventoryForecastingPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-20 md:px-10 md:py-24">
      <section className="max-w-4xl">
        <p className="text-sm uppercase tracking-[0.28em] text-neutral-400">
          Case Study
        </p>

        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white md:text-6xl">
          Inventory Forecasting Using Machine Learning
        </h1>

        <p className="mt-6 text-xl leading-9 text-neutral-200 md:text-2xl md:leading-10">
          Improving inventory visibility in a system shaped by uncertainty,
          delayed information, and imperfect signals.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
            Supply Chain
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
            Forecasting
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
            Machine Learning
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
            LSTM
          </span>
          <span className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-neutral-300">
            Decision Systems
          </span>
        </div>
      </section>

      <section className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-semibold tracking-tight text-white">
            30 / 60 / 90
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Day forecasting horizons explored within the planning cycle
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-semibold tracking-tight text-white">
            Weekly
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Forecast generation cadence using the most recent available data
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-semibold tracking-tight text-white">
            Monthly
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Model retraining cycle to absorb new information over time
          </p>
        </div>

        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6">
          <p className="text-3xl font-semibold tracking-tight text-white">
            Hybrid
          </p>
          <p className="mt-3 text-sm leading-6 text-neutral-400">
            Modelling strategy combining classification, regression, and temporal features
          </p>
        </div>
      </section>

      <section className="mt-20 space-y-16">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Context
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              In large supply chain environments, inventory planning is
              typically shaped by a combination of system-generated forecasts
              and manual adjustments. These approaches tend to work reasonably
              well when demand and supply remain relatively stable, but their
              limitations become more visible as variability increases,
              particularly when there are delays in order booking, uncertainty
              in delivery timelines, or gaps in the information available to the
              planning process.
            </p>

            <p>
              This work was part of a broader effort to explore whether machine
              learning could improve inventory forecasting for a global supply
              hub. The objective was not to replace existing planning systems,
              but to complement them with a more structured and data-driven
              perspective on how inventory might evolve over the next thirty,
              sixty, and ninety days.
            </p>

            <p>
              As the work progressed, it became clear that the problem could not
              be treated simply as a point prediction task. It required a better
              understanding of how events unfold over time, which naturally led
              to the exploration of both traditional machine learning approaches
              and models intended to capture temporal dependencies.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Problem
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The central challenge was not difficult to articulate, but it was
              difficult to resolve in practice. The objective was to forecast
              inventory levels in a system where both incoming and outgoing
              flows were uncertain, and where a significant portion of the most
              relevant information only became available shortly before
              execution.
            </p>

            <p>
              A large share of sales and purchase orders were booked late,
              delivery delays were common but not easily predictable, and the
              available data did not fully explain the underlying causes of this
              variability. Under these conditions, traditional planning
              approaches tended to produce forecasts that were either too
              optimistic or too reactive, depending on how recent information
              was incorporated.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Constraints
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The work had to operate within real operational constraints rather
              than ideal conditions. From a data perspective, long-term
              visibility was limited because many orders were only booked within
              a short window before execution. From a business perspective, the
              solution needed to fit existing planning workflows, operate at a
              reasonably granular level, and remain useful within a recurring
              planning cycle.
            </p>
          </div>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-neutral-300 pl-8">
            <li>
              • Long-term visibility was limited because a substantial share of
              orders appeared late in the cycle.
            </li>
            <li>
              • Delay patterns existed in the data, but the underlying causes
              were not always explicitly captured.
            </li>
            <li>
              • Forecasts needed to operate across many materials rather than a
              small controlled subset.
            </li>
            <li>
              • The work had to move beyond notebook experimentation toward a
              pipeline that could be run more consistently.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Approach
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The work followed an intentionally iterative approach. Rather than
              committing too early to a single modelling strategy, multiple
              techniques were explored to understand what the data could
              realistically support.
            </p>

            <p>
              The initial direction focused on modelling individual orders. The
              idea was to predict whether an order would be delayed and then
              estimate the extent of that delay, after which those predictions
              could be aggregated into an overall inventory forecast. In
              practice, this approach did not perform well. The signals at the
              individual order level were too noisy, and the models struggled to
              generalise in a meaningful way.
            </p>

            <p>
              The modelling strategy was then refined by shifting from
              order-level prediction to material-level aggregation. This reduced
              variability and allowed more stable patterns to emerge. At the
              same time, the modelling logic was decomposed into two related
              tasks. One component estimated whether delays were likely, while
              another estimated their timing.
            </p>

            <p>
              A significant portion of the work was directed toward feature
              engineering. Rather than relying only on raw historical values,
              the system incorporated lagged observations, rolling statistics,
              and time-based signals. This made it possible to capture important
              temporal behaviour without depending entirely on deep learning
              approaches.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Model Exploration
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              Several families of models were explored over the course of the
              work. The aim was not to test complexity for its own sake, but to
              understand which methods were most compatible with the structure
              and limitations of the data.
            </p>
          </div>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-neutral-300 pl-8">
            <li>
              • Linear and regularised regression approaches were explored as
              simple baselines.
            </li>
            <li>
              • Tree-based methods such as Random Forest and Gradient Boosting
              were evaluated for their ability to handle non-linear behaviour.
            </li>
            <li>
              • Classification models were tested for delay prediction, while
              regression models were used to estimate timing effects.
            </li>
            <li>
              • Sequence-based models such as LSTMs were explored to capture
              temporal dependencies more explicitly.
            </li>
          </ul>

          <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              In practice, the usefulness of LSTMs was constrained by the nature
              of the data. The irregular timing of orders and the limited
              visibility into future events reduced the advantage these models
              would typically provide in denser and more consistently structured
              systems.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            What I Built
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The result of the work was not a single model, but a structured
              forecasting pipeline. The emphasis gradually moved from isolated
              model performance to building something that could be evaluated
              repeatedly and used more reliably within a planning context.
            </p>
          </div>

          <ul className="mt-6 space-y-4 text-lg leading-8 text-neutral-300 pl-8">
            <li>• Data extraction and preparation from source systems.</li>
            <li>
              • Separate modelling workflows for sales and purchase flows.
            </li>
            <li>
              • Training and prediction logic that could be executed on a
              recurring basis.
            </li>
            <li>
              • A backtesting framework to evaluate performance over multiple
              time windows.
            </li>
            <li>
              • Model storage and versioning to improve reproducibility and
              traceability.
            </li>
          </ul>

          <div className="mt-6 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              A considerable amount of effort went into testing alternative
              configurations and ensuring that performance was not dependent on a
              narrow set of time periods.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Implementation
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The system was designed to align with operational workflows rather
              than exist as an isolated modelling exercise. Forecasts were
              generated weekly using the most recent data, while models were
              retrained monthly to incorporate newly available information. A
              rolling backtesting process was used to evaluate performance
              across different windows in a way that was closer to real usage
              conditions.
            </p>

            <p>
              An important aspect of implementation was how performance was
              measured. Forecasts were evaluated from two different
              perspectives. One compared predictions against actual outcomes,
              including orders that were not visible at prediction time. The
              other assessed performance based only on the information available
              when the prediction was made. This distinction helped separate the
              limitations of the model from the limitations of the underlying
              business process.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Illustrative Implementation Snippets
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The production implementation is not shared in detail due to
              confidentiality, but the overall structure of the system can be
              represented in simplified form. The examples below are intended to
              show the logic of the pipeline rather than replicate the original
              codebase.
            </p>
          </div>

          <div className="mt-8 space-y-8">
            <div>
              <p className="text-base font-medium text-neutral-200">
                Feature engineering for temporal signals
              </p>

              <div className="mt-4">
                <SyntaxHighlighter
                  language="python"
                  style={codeStyle}
                  customStyle={codeStyle['pre[class*="language-"]']}
                  codeTagProps={{
                    style: codeStyle['code[class*="language-"]'],
                  }}
                  showLineNumbers={false}
                  wrapLongLines={false}
                >
                  {pythonCodeOne}
                </SyntaxHighlighter>
              </div>

              <p className="mt-4 text-base leading-8 text-neutral-300">
                This type of feature design allowed the models to capture
                historical patterns and temporal behaviour without relying
                entirely on fully sequential architectures.
              </p>
            </div>

            <div>
              <p className="text-base font-medium text-neutral-200">
                Hybrid modelling with classification and regression
              </p>

              <div className="mt-4">
                <SyntaxHighlighter
                  language="python"
                  style={codeStyle}
                  customStyle={codeStyle['pre[class*="language-"]']}
                  codeTagProps={{
                    style: codeStyle['code[class*="language-"]'],
                  }}
                  showLineNumbers={false}
                  wrapLongLines={false}
                >
                  {pythonCodeTwo}
                </SyntaxHighlighter>
              </div>

              <p className="mt-4 text-base leading-8 text-neutral-300">
                This structure reflected how the business problem was decomposed
                into smaller and more manageable components.
              </p>
            </div>

            <div>
              <p className="text-base font-medium text-neutral-200">
                Sequential model experiment
              </p>

              <div className="mt-4">
                <SyntaxHighlighter
                  language="python"
                  style={codeStyle}
                  customStyle={codeStyle['pre[class*="language-"]']}
                  codeTagProps={{
                    style: codeStyle['code[class*="language-"]'],
                  }}
                  showLineNumbers={false}
                  wrapLongLines={false}
                >
                  {pythonCodeThree}
                </SyntaxHighlighter>
              </div>

              <p className="mt-4 text-base leading-8 text-neutral-300">
                This approach was explored to capture temporal dependencies more
                explicitly, although its usefulness depended heavily on the
                availability of sufficiently consistent sequential data.
              </p>
            </div>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Key Decisions and Trade-offs
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              Several decisions shaped the eventual direction of the work.
              Moving from order-level modelling to material-level aggregation
              improved stability, although it reduced granularity. In the
              context of the planning problem, this trade-off proved worthwhile
              because it produced results that were more usable and less noisy.
            </p>

            <p>
              There was also a balance to be struck between model complexity and
              robustness. While more advanced approaches such as LSTMs were
              explored, the final solution relied more heavily on structured
              features and traditional models, because they proved more reliable
              given the nature of the data.
            </p>

            <p>
              Forecast horizon remained a structural limitation. Short- and
              medium-term forecasts performed reasonably well, but longer-term
              forecasting was constrained by the lack of early visibility into
              orders. This meant that part of the work involved evaluating
              results in a way that reflected both model capability and the
              conditions of the system in which the model operated.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Outcome
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              The machine learning approach consistently outperformed the
              existing planning baseline, particularly for shorter- and
              medium-term forecasts. It was able to capture the broader trends
              in inventory movement and provided a more stable view than the
              existing approach.
            </p>

            <p>
              The most important improvements were visible in areas where the
              available information was sufficient to support meaningful signal
              extraction. Where future visibility remained limited, especially
              for longer-term horizons, the results naturally reflected those
              constraints.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Reflection
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              One of the most important lessons from this work was that
              forecasting accuracy is closely tied to visibility into future
              events. When orders are not known in advance, there is a natural
              limit to what any model can achieve.
            </p>

            <p>
              The experimentation with multiple modelling approaches, including
              sequence-based methods, reinforced that there is rarely a single
              best technique. Performance comes from aligning the modelling
              strategy with the structure of the data and the realities of the
              system.
            </p>

            <p>
              Feature engineering played a central role throughout the project.
              Well-designed features consistently improved performance across
              models, often more than simply increasing model complexity. If
              this work were extended further, the next step would be to explore
              richer feature sets, more advanced time-series methods, and
              stronger interpretability, while continuing to keep the solution
              closely aligned with how the business actually operates.
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-neutral-500">
            Closing Thought
          </p>

          <div className="mt-4 space-y-6 text-lg leading-8 text-neutral-300">
            <p>
              This work reinforced a simple but important point. Improving
              forecasts is not only a matter of building more advanced models.
              It depends just as much on understanding the structure,
              constraints, and behaviour of the system the model is trying to
              represent.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}