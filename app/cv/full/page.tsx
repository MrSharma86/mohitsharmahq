import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import FullCVClient from "./full-cv-client";

const impactMetrics = [
  {
    value: "70 MSEK",
    label: "Realised savings from ML-based inventory optimisation systems",
  },
  {
    value: "350 MSEK",
    label: "Projected impact from forecasting-led transformation initiatives",
  },
  {
    value: "750K+",
    label: "Targeted opportunities identified through propensity modelling",
  },
  {
    value: "700+",
    label: "Individuals trained, mentored, and coached across data and analytics",
  },
];

const expertiseAreas = [
  {
    title: "Machine Learning & Forecasting",
    category: "ml",
    items: [
      "Supervised and unsupervised learning across classification, regression, and clustering",
      "XGBoost, Random Forest, TabNet, ARIMA, GARCH, LSTM, N-BEATS, and Temporal Fusion Transformer",
      "Feature engineering, model evaluation, hyperparameter optimisation, and explainability using SHAP/LIME",
      "Time-series systems for demand planning, inventory optimisation, and commodity forecasting",
    ],
  },
  {
    title: "GenAI, NLP & Knowledge Systems",
    category: "genai",
    items: [
      "LLMs, prompt engineering, Retrieval-Augmented Generation, and agentic AI workflows",
      "LangChain, embeddings, semantic search, topic modelling, SBERT, and transformer-based NLP systems",
      "Context-aware AI systems designed across structured and unstructured enterprise data",
      "Recent focus on LLM-driven automation and knowledge-intensive applications",
    ],
  },
  {
    title: "Engineering, MLOps & Deployment",
    category: "engineering",
    items: [
      "Python, SQL, PyTorch, TensorFlow, Keras, Scikit-learn, Pandas, and NumPy",
      "Scalable data pipelines, modular code design, distributed processing, and performance optimisation",
      "Model deployment and lifecycle management using Azure ML, AWS SageMaker, and CI/CD workflows",
      "Production-oriented development spanning experimentation, deployment, monitoring, and integration",
    ],
  },
  {
    title: "Leadership, Decision Support & Value Realisation",
    category: "leadership",
    items: [
      "Technical direction across multi-disciplinary squads of data scientists, engineers, and analysts",
      "Executive storytelling that translates model outputs into business decisions and strategic action",
      "AI roadmaps aligned to transformation, strategy, and measurable value creation",
      "Dashboards and decision systems integrating model outputs with business KPIs",
    ],
  },
];

const experience = [
  {
    company: "Ericsson",
    role: "Change Lead – Enterprise Value Realization",
    period: "May 2025 – Present",
    location: "Reading, United Kingdom",
    story:
      "This phase of my career reflects a broader shift from building analytical systems to shaping how value is defined, tracked, and realised across the enterprise. The work is less about isolated technical outputs and more about creating structures that connect strategy, investments, and measurable outcomes.",
    focus:
      "Enterprise value realisation, transformation governance, and decision systems.",
    highlights: [
      "Formulated an enterprise-wide value realisation framework aligning strategic objectives with measurable outcomes.",
      "Instituted a central platform for monitoring investments and benefits across multiple markets.",
      "Strengthened the connection between transformation activity, business cases, and realised value.",
    ],
  },
  {
    company: "Ericsson",
    role: "Group Digital Advisor",
    period: "Aug 2022 – Apr 2025",
    location: "Reading, United Kingdom",
    story:
      "This role sat at the intersection of AI, transformation, and enterprise change. It involved moving beyond technical experimentation to help shape how AI initiatives were prioritised, validated, and translated into scalable business value across complex organisational settings.",
    focus:
      "AI transformation, roadmap definition, and enterprise-scale ML systems.",
    highlights: [
      "Championed AI-driven transformation initiatives across enterprise contexts.",
      "Directed technical strategy and roadmap for AI-enabled transformation work.",
      "Built a two-stage forecasting system combining machine learning and time-series methods for 30/60/90-day inventory prediction.",
      "Improved forecast accuracy by 7–10% through advanced feature engineering.",
      "Deployed models on Azure using CI/CD pipelines and scalable processing patterns.",
    ],
  },
  {
    company: "Ericsson",
    role: "Lead Data Scientist",
    period: "Jun 2019 – Jul 2022",
    location: "Bangalore, India",
    story:
      "This period was defined by hands-on delivery, experimentation, and business-facing machine learning work. It was where deep modelling, forecasting, and technical execution came together in ways that created visible operational and financial impact.",
    focus:
      "Applied machine learning, forecasting systems, and business impact validation.",
    highlights: [
      "Built ML-led forecasting systems for enterprise planning and inventory optimisation.",
      "Developed and tested multiple ML and AI proof-of-concepts to validate business impact.",
      "Helped operationalise model deployment on Azure with scalable workflows.",
      "Contributed to systems that drove approximately 70 MSEK in realised savings and approximately 350 MSEK in projected impact.",
    ],
  },
  {
    company: "Microsoft",
    role: "Data & Applied Scientist",
    period: "Apr 2018 – Jun 2019",
    location: "Bangalore, India",
    story:
      "This role deepened my experience in language systems and large-scale data environments. It sharpened my ability to work on NLP and semantic understanding problems where technical sophistication needed to be matched with product relevance and decision usefulness.",
    focus:
      "NLP systems, semantic understanding, and language-driven insight generation.",
    highlights: [
      "Built a large-scale topic modelling pipeline using NMF to classify billions of search queries into intent clusters.",
      "Developed semantic understanding pipelines using SBERT and HDBSCAN-style clustering approaches.",
      "Built dashboards connecting topic trends and performance metrics to decision-making and revenue-linked monitoring.",
    ],
  },
  {
    company: "Wells Fargo",
    role: "Analytics Consultant 3",
    period: "Nov 2015 – Apr 2018",
    location: "Bangalore, India",
    story:
      "This stage developed my ability to work in regulated, high-stakes environments where model quality had immediate operational consequences. It strengthened both technical discipline and the need to balance performance with practical constraints.",
    focus:
      "Fraud, risk, customer analytics, and machine learning in regulated systems.",
    highlights: [
      "Built propensity, fraud detection, and risk models in a banking environment.",
      "Developed real-time fraud models that improved recall by 12% while reducing false positives by 15%.",
      "Developed scalable ML workflows deployed on AWS-based infrastructure.",
      "Contributed to cross-sell systems that identified more than 750K targeted opportunities.",
    ],
  },
  {
    company: "IHS Markit / Tata Consultancy Services",
    role: "Data Science and Analytics Roles",
    period: "Feb 2011 – Oct 2015",
    location: "Bangalore, India",
    story:
      "These early years built the foundation for everything that followed. Working across retail, commodities, and analytics consulting helped me develop practical problem-solving habits, broad domain exposure, and an appreciation for scalable analytical frameworks.",
    focus:
      "Foundational analytics, predictive modelling, and cross-domain problem-solving.",
    highlights: [
      "Developed machine learning models spanning classification, clustering, and time-series forecasting.",
      "Delivered customer behaviour insights and predictive forecasting across retail and commodities sectors.",
      "Improved data-processing efficiency by 70% through pipeline optimisation and migration from SAS to R in the Hadoop ecosystem.",
      "Built reusable analytics frameworks, including packages and user-defined functions, to improve team productivity and reproducibility.",
    ],
  },
];
const selectedSystems = [
  {
    title: "Inventory Optimisation & Forecasting System",
    context:
      "Built a machine learning-led forecasting system for enterprise inventory optimisation in a large telecom context.",
    approach:
      "Combined two-stage modelling with machine learning and time-series techniques, supported by strong feature engineering and scalable deployment workflows.",
    outcome:
      "Delivered approximately 70 MSEK in realised savings and around 350 MSEK in projected impact.",
  },
  {
    title: "Fraud Detection in Banking",
    context:
      "Developed fraud models in a regulated financial environment where precision and recall had immediate operational implications.",
    approach:
      "Built real-time fraud detection models with a focus on performance tuning and practical deployment constraints.",
    outcome:
      "Improved recall by 12% while reducing false positives by 15%.",
  },
  {
    title: "Propensity & Cross-Sell Modelling",
    context:
      "Worked on customer analytics and growth optimisation use cases where targeting quality directly affected portfolio expansion.",
    approach:
      "Developed propensity and cross-sell modelling systems using tree-based methods such as XGBoost and LightGBM.",
    outcome:
      "Identified more than 750K targeted opportunities to support customer acquisition and growth.",
  },
  {
    title: "Semantic Understanding & Topic Modelling",
    context:
      "Built large-scale NLP systems to classify intent and derive meaning from very large search and language datasets.",
    approach:
      "Used topic modelling, embeddings, clustering, and semantic similarity systems across billions of records.",
    outcome:
      "Enabled semantic understanding, trend tracking, and more decision-ready insight from language-heavy data.",
  },
];

const teaching = [
  "Served as an AI/ML trainer part-time over a 7+ year period.",
  "Delivered training in machine learning, statistics, and Python to both professional and student cohorts.",
  "Focused on simplifying complex concepts into practical applications and stronger problem-solving habits.",
  "Built an early foundation for the coaching and capability-building direction now emerging more explicitly in my work.",
];

const education = [
  {
    title: "Post Graduate Program – Advance Deep Learning",
    institution: "Indian Institute of Science (IISc), Bangalore",
    period: "Apr 2021 – Mar 2022",
  },
  {
    title: "Master of Business Administration",
    institution: "UIAMS, Chandigarh",
    period: "Aug 2008 – May 2010",
  },
  {
    title: "Bachelor of Technology – Electrical Engineering",
    institution: "JMIT, Kurukshetra University, Kurukshetra",
    period: "Jul 2003 – Jul 2007",
  },
];

const recognitions = [
  "Ericsson Power Award (2020) for high-impact AI/ML delivery",
  "Accelerated promotion at IHS Markit for technical innovation",
  "Recognised for excellence at TCS, including Employee of the Year honours",
];

export default async function FullCVPage() {
  const cookieStore = await cookies();
  const cookieName = process.env.CV_ACCESS_COOKIE || "cv_access_granted";
  const hasAccess = cookieStore.get(cookieName)?.value === "true";

  if (!hasAccess) {
    redirect("/cv");
  }

  return (
    <FullCVClient
      impactMetrics={impactMetrics}
      expertiseAreas={expertiseAreas}
      experience={experience}
      selectedSystems={selectedSystems}
      teaching={teaching}
      education={education}
      recognitions={recognitions}
    />
  );
}