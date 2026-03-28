import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const pythonCodeOne = `from imblearn.over_sampling import SMOTE
from sklearn.model_selection import train_test_split
from xgboost import XGBClassifier

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, stratify=y, random_state=42
)

smote = SMOTE(random_state=42)
X_resampled, y_resampled = smote.fit_resample(X_train, y_train)

model = XGBClassifier(
    scale_pos_weight=10,
    max_depth=5,
    n_estimators=300,
    learning_rate=0.05,
    subsample=0.8,
    colsample_bytree=0.8,
)

model.fit(X_resampled, y_resampled)`;

const pythonCodeTwo = `from sklearn.preprocessing import RobustScaler

scaler = RobustScaler()
X[["Amount", "Time"]] = scaler.fit_transform(X[["Amount", "Time"]])

important_features = ["V14", "V12", "V17", "V10", "V4"]
X_model = X[important_features + ["Amount", "Time"]]`;

const pythonCodeThree = `from sklearn.metrics import average_precision_score, f1_score, recall_score

fraud_prob = model.predict_proba(X_test)[:, 1]
fraud_pred = (fraud_prob >= threshold).astype(int)

pr_auc = average_precision_score(y_test, fraud_prob)
recall = recall_score(y_test, fraud_pred)
f1 = f1_score(y_test, fraud_pred)

print({
    "PR_AUC": pr_auc,
    "Recall": recall,
    "F1": f1,
})`;

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

export default function CreditCardFraudDetectionPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-8 sm:py-20">
      <div className="space-y-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-400">
          Case Study
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Credit Card Fraud Detection in Banking
        </h1>
        <p className="max-w-3xl text-lg leading-8 text-zinc-300">
          A fraud detection project designed around a real banking constraint:
          identifying rare, high-impact events while operating within
          regulatory, operational, and customer experience limits.
        </p>
      </div>

      <section className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold">284,807</p>
          <p className="mt-2 text-sm text-zinc-400">Transactions</p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold">492</p>
          <p className="mt-2 text-sm text-zinc-400">Fraud cases</p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold">0.172%</p>
          <p className="mt-2 text-sm text-zinc-400">Fraud rate</p>
        </div>
        <div className="rounded-3xl border border-zinc-800 bg-zinc-900/40 p-6">
          <p className="text-3xl font-semibold">99.82%</p>
          <p className="mt-2 text-sm text-zinc-400">Naive accuracy</p>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
            System workflow
        </h2>

        <div className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/30">
            <Image
            src="/credit-card-fraud-detection-flowchart-1.png"
            alt="Credit card fraud detection system workflow"
            width={1536}
            height={1024}
            className="h-auto w-full"
            priority
            />
        </div>

        <p className="leading-8 text-zinc-300">
            The system was designed as a layered decision pipeline where multiple
            signals — supervised models, anomaly detection, and rule-based logic —
            contributed to the final outcome rather than relying on a single model.
        </p>
        </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Project context
        </h2>

        <p className="leading-8 text-zinc-300">
          During my time working in banking, fraud detection was approached as a
          system problem rather than a standalone modelling exercise. The goal
          was not simply to classify transactions, but to help design a more
          reliable way of identifying rare fraudulent behaviour while fitting
          into existing operational and regulatory constraints.
        </p>

        <p className="leading-8 text-zinc-300">
          Traditionally, fraud systems relied heavily on rules and manual
          review. Transactions were flagged using thresholds, heuristic checks,
          and known patterns, with analysts reviewing cases downstream. That
          approach worked up to a point, but it became harder to sustain as
          transaction volumes increased and fraud patterns became more adaptive.
          The result was a system that generated too much noise while still
          missing subtle fraud cases.
        </p>

        <p className="leading-8 text-zinc-300">
          The central challenge we worked against was the detection of extremely
          rare events. In representative benchmark datasets, fraud can account
          for less than 0.2% of all transactions. That creates a misleading
          situation where a model can appear highly accurate while failing to
          detect the events that actually matter.
        </p>

        <p className="leading-8 text-zinc-300">
          In real banking environments, the data itself introduces additional
          complexity. Transaction data contains sensitive personally
          identifiable information, which is typically masked, tokenised, or
          transformed before it is used for modelling. Instead of relying on
          raw identifiers, systems operate on behavioural features such as
          transaction velocity, merchant patterns, geographic shifts, and device
          signals. That requires data pipelines designed to balance privacy,
          regulatory compliance, and modelling effectiveness.
        </p>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Problem definition
        </h2>

        <p className="leading-8 text-zinc-300">
          Fraud events are infrequent, but the cost of missing them is high. At
          the same time, incorrectly flagging legitimate transactions increases
          review volume, creates operational drag, and can directly affect the
          customer experience.
        </p>

        <p className="leading-8 text-zinc-300">
          That creates a clear trade-off. Increasing detection sensitivity can
          improve fraud capture, but it also tends to raise false positives.
          Reducing false positives improves the experience for genuine users,
          but risks letting meaningful fraud slip through. The system therefore
          had to be calibrated around business impact, not just model output.
        </p>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Approach</h2>

        <p className="leading-8 text-zinc-300">
          Our approach combined multiple techniques to address both the
          modelling challenge and the operational reality of the problem.
        </p>

        <p className="leading-8 text-zinc-300">
          First, class imbalance was handled explicitly. Techniques such as
          SMOTE helped improve the model&apos;s exposure to minority-class
          patterns, while cost-sensitive learning ensured that missing a fraud
          event was penalised more heavily than misclassifying a legitimate
          transaction.
        </p>

        <p className="leading-8 text-zinc-300">
          Second, In an actual banking environment, the feature layer goes much
          further as data is rarely consumed in raw form. It is curated, transformed, 
          masked where necessary, and then represented through behavioural signals 
          that are safer and more useful for modelling. That includes patterns such as
          transaction velocity, merchant-category shifts, abnormal location changes, channel
          behaviour, and device-level inconsistencies.
        </p>

        <p className="leading-8 text-zinc-300">
          Third, we evaluated multiple modelling approaches rather than assuming
          a single model would be sufficient. Gradient boosting models were used
          for supervised classification, while anomaly detection techniques such
          as Isolation Forest provided an additional lens by identifying
          transactions that deviated from normal behaviour.
        </p>

        <p className="leading-8 text-zinc-300">
          We also explored autoencoder-based approaches, using reconstruction
          error as an additional signal within the ensemble to help surface
          transactions that did not align with learned behavioural patterns.
        </p>

        <p className="leading-8 text-zinc-300">
          In practice, the strongest design was not a single model but an
          ensemble. Supervised model scores, anomaly signals, and rule-based
          checks were combined to produce a stronger decision signal, with human
          review still playing an important role for edge cases.
        </p>
      </section>

      <section className="mt-16 space-y-8">
        <h2 className="text-2xl font-semibold tracking-tight">
          Illustrative implementation snippets
        </h2>
        <p className="leading-8 text-zinc-300">
          The original enterprise implementation is not shared publicly. The
          examples below are simplified representations of the modelling logic,
          included to show the structure of the work rather than the exact
          production code.
        </p>

        <div className="space-y-3">
          <h3 className="text-xl font-medium">
            Balancing the training data and fitting a boosted model
          </h3>
          <SyntaxHighlighter
            language="python"
            style={codeStyle}
            customStyle={codeStyle['pre[class*="language-"]']}
          >
            {pythonCodeOne}
          </SyntaxHighlighter>
          <p className="leading-8 text-zinc-300">
            Gradient-boosted models such as XGBoost or CatBoost are often
            strong choices for this kind of tabular problem, especially when
            combined with imbalance-aware training logic.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-medium">
            Scaling and focusing on the strongest signals
          </h3>
          <SyntaxHighlighter
            language="python"
            style={codeStyle}
            customStyle={codeStyle['pre[class*="language-"]']}
          >
            {pythonCodeTwo}
          </SyntaxHighlighter>
          <p className="leading-8 text-zinc-300">
            In fraud work, preprocessing is never a minor detail. Small
            distortions in feature treatment can materially change what the
            model learns and how stable it becomes.
          </p>
        </div>

        <div className="space-y-3">
          <h3 className="text-xl font-medium">
            Evaluating the model with the right metrics
          </h3>
          <SyntaxHighlighter
            language="python"
            style={codeStyle}
            customStyle={codeStyle['pre[class*="language-"]']}
          >
            {pythonCodeThree}
          </SyntaxHighlighter>
          <p className="leading-8 text-zinc-300">
            For highly imbalanced fraud datasets, precision-recall AUC is often
            more informative than accuracy, while recall and F1 help clarify
            how aggressive the operating threshold should be.
          </p>
        </div>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Why accuracy fails
        </h2>
        <p className="leading-8 text-zinc-300">
          A model that predicts every transaction as legitimate achieves very
          high accuracy but detects no fraud. That is why fraud detection
          cannot be evaluated through conventional metrics alone.
        </p>

        <p className="leading-8 text-zinc-300">
          More useful measures include precision-recall AUC, recall, and F1
          score. Precision-recall AUC focuses attention on the minority fraud
          class. Recall matters because missed fraud carries direct financial
          and reputational cost. F1 becomes useful when balancing fraud capture
          against the operational burden created by false positives.
        </p>

        <p className="leading-8 text-zinc-300">
          The threshold itself is not just a technical parameter. It is a
          business decision shaped by risk appetite, analyst capacity, customer
          experience, and the acceptable cost of being wrong.
        </p>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">
          Real-world constraints
        </h2>

        <p className="leading-8 text-zinc-300">
          In production banking environments, the model is only one part of the
          system. Decisions need to be explainable, auditable, and aligned with
          regulatory expectations. Fraud systems operate under continuous
          scrutiny, and their outputs often need to be justified to internal
          risk teams, governance functions, and external regulators.
        </p>

        <p className="leading-8 text-zinc-300">
          There is also a constant balance between risk and customer
          experience. A system that aggressively blocks transactions may reduce
          fraud, but it can also damage trust. A system that is too lenient may
          reduce friction while allowing material losses to pass through. The
          right operating point depends on business context, risk appetite, and
          operational capacity.
        </p>

        <p className="leading-8 text-zinc-300">
          This is also where the broader system design matters. Scores need to
          fit into authorisation flows, rule engines, analyst queues,
          investigation processes, and monitoring layers. The quality of the
          outcome depends not only on the model, but on how the whole decision
          system is designed.
        </p>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Impact</h2>

        <p className="leading-8 text-zinc-300">
          The value of this work was not in producing a single high-performing
          model in isolation. It was in strengthening the overall fraud
          detection approach for a rare-event setting by combining supervised
          learning, anomaly detection, and decision-layer controls.
        </p>

        <p className="leading-8 text-zinc-300">
          In practical terms, that meant moving toward more reliable detection
          of rare fraud patterns while keeping operational false positives more
          manageable. Just as importantly, it helped frame fraud detection as a
          governed decision system rather than a narrow modelling problem.
        </p>
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-semibold tracking-tight">Reflection</h2>
        <p className="leading-8 text-zinc-300">
          This kind of work shaped how I think about applied data science. The
          objective is rarely to optimise a metric in isolation. It is to help
          design systems that behave well under real constraints, including
          rare events, asymmetric risk, regulation, operational limits, and
          human consequences.
        </p>

        <p className="leading-8 text-zinc-300">
          That perspective extends well beyond fraud. It applies to any domain
          where decisions matter more than predictions.
        </p>
      </section>
    </main>
  );
}