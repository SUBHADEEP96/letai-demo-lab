export type Category =
  | "RAG"
  | "Copilot"
  | "Vision"
  | "Time-Series"
  | "Compliance"
  | "Legal"
  | "Healthcare"
  | "Finance"
  | "Manufacturing"
  | "ITOps"
  | "Marketing"
  | "Real-Estate"
  | "NLP";

export type Status = "demo" | "alpha" | "beta" | "prod";

export interface Service {
  id: string; // s1..s21
  code: string; // short code like 'EKN'
  name: string;
  category: Category;
  status: Status;
  summary: string;
  tags: string[];
  kpis: string[];
}

export const SERVICES: Service[] = [
  {
    id: "s1",
    code: "EKN",
    name: "Enterprise Knowledge Navigator – Agentic RAG",
    category: "RAG",
    status: "prod",
    summary: "Agentic RAG with citations for enterprise docs.",
    tags: ["RAG", "Citations", "LangGraph"],
    kpis: ["Grounded ≥85%", "P50 ≤3s"],
  },
  {
    id: "s2",
    code: "RGPT",
    name: "RetailGPT Copilot – AI-Powered Retail Revolution",
    category: "Copilot",
    status: "demo",
    summary: "Retail assistant for catalog, pricing & promos.",
    tags: ["SQL Tools", "Promo Planner"],
    kpis: ["AOV ↑", "Deflection ↑"],
  },
  {
    id: "s3",
    code: "MEDIQ",
    name: "MedIQ Insights – Clinical Decision Support AI",
    category: "Healthcare",
    status: "demo",
    summary: "Clinical guideline summarizer with FHIR read.",
    tags: ["FHIR", "PII Guard"],
    kpis: ["Unsafe rate ~0"],
  },
  {
    id: "s4",
    code: "FSGPT",
    name: "FinServe GPT – Autonomous Financial Risk Advisor",
    category: "Finance",
    status: "demo",
    summary: "Risk flags & explanations for financial ops.",
    tags: ["AML/KYC", "SQL"],
    kpis: ["Alert precision"],
  },
  {
    id: "s5",
    code: "SFACT",
    name: "SmartFactory AI – Predictive Maintenance",
    category: "Manufacturing",
    status: "demo",
    summary: "Predictive maintenance from IoT telemetry.",
    tags: ["ARIMA", "LSTM"],
    kpis: ["Downtime ↓"],
  },
  {
    id: "s6",
    code: "VQC",
    name: "VisionQC Pro – AI Quality Control System",
    category: "Vision",
    status: "demo",
    summary: "Defect detection on line cameras.",
    tags: ["YOLOv8", "ONNX"],
    kpis: ["FP/FN"],
  },
  {
    id: "s7",
    code: "AICC",
    name: "AI Compliance Copilot – Regulatory QA & Risk Detection",
    category: "Compliance",
    status: "demo",
    summary: "Policy QA, risk detection, remediation.",
    tags: ["Policies", "Redaction"],
    kpis: ["TPR", "Time-to-close"],
  },
  {
    id: "s8",
    code: "LEGAL",
    name: "LegalDoc AI – Document Retrieval & Summarization",
    category: "Legal",
    status: "demo",
    summary: "Clause retrieval, comparison, risk notes.",
    tags: ["Clauses", "Diff"],
    kpis: ["Recall@k"],
  },
  {
    id: "s9",
    code: "AIMA",
    name: "AI-Powered Meeting Assistant (AIMA)",
    category: "Copilot",
    status: "demo",
    summary: "Transcribe calls, action items, follow-ups.",
    tags: ["Whisper", "Jira", "Gmail"],
    kpis: ["Follow-up rate"],
  },
  {
    id: "s10",
    code: "CSBOT",
    name: "Conversational AI Chatbot – Customer Support",
    category: "Copilot",
    status: "demo",
    summary: "Customer support with escalation routing.",
    tags: ["Help Center", "Sentiment"],
    kpis: ["Deflection", "CSAT"],
  },
  {
    id: "s11",
    code: "DOCWIZ",
    name: "DocuWiz AI – Document Intelligence Tool",
    category: "NLP",
    status: "demo",
    summary: "Extract, normalize and search documents.",
    tags: ["OCR", "Layout"],
    kpis: ["Field accuracy"],
  },
  {
    id: "s12",
    code: "BLOG",
    name: "AI-Powered Blog Generator",
    category: "NLP",
    status: "demo",
    summary: "SEO brief → outline → drafts with images.",
    tags: ["SEO", "CrewAI"],
    kpis: ["Publish time"],
  },
  {
    id: "s13",
    code: "SUMM",
    name: "Intelligent Document Summarization Tool",
    category: "NLP",
    status: "demo",
    summary: "Long-doc map-reduce with citations.",
    tags: ["LlamaIndex", "Citations"],
    kpis: ["Faithfulness"],
  },
  {
    id: "s14",
    code: "PLANT",
    name: "AI-Powered Plant Disease Detection",
    category: "Vision",
    status: "demo",
    summary: "Leaf disease classifier + treatment lookup.",
    tags: ["Classifier", "Edge"],
    kpis: ["Top-1 acc"],
  },
  {
    id: "s15",
    code: "PSA",
    name: "Predictive Sales Analytics – LSTM & ARIMA",
    category: "Time-Series",
    status: "demo",
    summary: "ARIMA/LSTM forecasts + what-if sims.",
    tags: ["Forecast", "Feature Store"],
    kpis: ["MAPE"],
  },
  {
    id: "s16",
    code: "TRACK",
    name: "Real-Time Object Tracking for Security",
    category: "Vision",
    status: "demo",
    summary: "YOLO + DeepSORT with privacy filters.",
    tags: ["RTSP", "Zones"],
    kpis: ["Recall@IoU"],
  },
  {
    id: "s17",
    code: "AIOPS",
    name: "AIOps-Driven Predictive Maintenance System",
    category: "ITOps",
    status: "demo",
    summary: "Log/metric anomalies + auto-runbooks.",
    tags: ["Anomaly", "Runbooks"],
    kpis: ["MTTR"],
  },
  {
    id: "s18",
    code: "CSAT",
    name: "Customer Satisfaction Prediction System",
    category: "NLP",
    status: "demo",
    summary: "Churn/CSAT model + save playbooks.",
    tags: ["Sentiment", "Tabular"],
    kpis: ["Saves"],
  },
  {
    id: "s19",
    code: "MEDCOACH",
    name: "Medical training + coaching system (multi agent sys for HCPs and people)",
    category: "Healthcare",
    status: "demo",
    summary: "Adaptive learning paths with evaluation.",
    tags: ["Tutor", "Evaluator"],
    kpis: ["Learning gain"],
  },
  {
    id: "s20",
    code: "LOCALMKT",
    name: "AI marketing platform for local business (multi agent sys)",
    category: "Marketing",
    status: "demo",
    summary: "Always-on GMB/IG/FB/SMS/Email growth.",
    tags: ["CrewAI", "UTM"],
    kpis: ["Bookings"],
  },
  {
    id: "s21",
    code: "REALESTATE",
    name: "Real estate help desk assistant",
    category: "Real-Estate",
    status: "demo",
    summary: "Property Q&A, lead qual, viewings.",
    tags: ["MLS", "Calendar"],
    kpis: ["Lead→Visit"],
  },
];

// Business-specific demo scenarios for each service
const DEMO_SCENARIOS: Record<string, string[]> = {
  EKN: [
    "🚀 Initializing Enterprise Knowledge Navigator...",
    "📚 Loading enterprise document corpus (847 PDFs, 1.2M pages)...",
    '🔍 User Query: "What is our Q3 2024 compliance policy for GDPR?"',
    "🧠 Activating agentic RAG with LangGraph workflow...",
    "📊 Retrieved 12 relevant documents from knowledge base",
    "✅ Answer: Based on Policy-2024-Q3-GDPR.pdf (p.23-27), our Q3 compliance requires monthly audits, data minimization protocols, and consent renewal every 24 months.",
    "📎 Citations: [Policy-2024-Q3-GDPR.pdf], [Compliance-Handbook-v3.pdf]",
    "⚡ Response time: 2.1s | Grounded confidence: 92%",
  ],
  RGPT: [
    "🚀 Booting RetailGPT Copilot...",
    "🛍️ Loading product catalog (50K items) and pricing engine...",
    '💬 Customer: "I need wireless headphones under $100 for running"',
    "🔧 Activating SQL tools to query inventory...",
    "📊 Found 23 matching products | Checking current promotions...",
    "🎯 Recommendation: Sony WF-C500 ($79.99) - 30% off this week!",
    "💡 Upsell suggestion: Extended warranty (+$12) based on usage profile",
    "📈 Projected impact: AOV +$15.50 | Deflection rate: 85%",
  ],
  MEDIQ: [
    "🏥 Initializing MedIQ Clinical Decision Support...",
    "🔐 FHIR integration active | PII protection enabled",
    "👨‍⚕️ Case: 45yo male, chest pain, elevated troponin",
    "📋 Analyzing clinical guidelines (AHA/ESC protocols)...",
    "🧬 Cross-referencing patient history via FHIR R4...",
    "⚠️ HIGH RISK: Acute coronary syndrome likely",
    "💊 Recommended: Immediate cardiology consult, dual antiplatelet therapy",
    "✅ Safety check: No contraindications found | Unsafe rate: 0%",
  ],
  FSGPT: [
    "🏦 Launching FinServe GPT Risk Advisor...",
    "🔍 Transaction analysis: $2.3M wire transfer to offshore entity",
    "🚨 AML/KYC screening initiated...",
    "📊 Cross-referencing OFAC sanctions list...",
    "⚠️ RISK FLAG: Unusual pattern detected",
    "🔍 Explanation: Beneficiary in high-risk jurisdiction, transaction 400% above historical average",
    "📋 Recommended actions: Manual review required, freeze pending investigation",
    "✅ Alert precision: 94% | False positive reduction: 67%",
  ],
  SFACT: [
    "🏭 SmartFactory AI connecting to production line...",
    "📡 Ingesting IoT telemetry (250 sensors, 1Hz frequency)...",
    "🔧 Equipment: Injection Molding Machine #7",
    "📈 ARIMA model detecting anomaly in vibration patterns...",
    "🧠 LSTM neural network confirming bearing degradation...",
    "⚠️ PREDICTION: Failure likely in 72-96 hours",
    "🛠️ Maintenance scheduled: Replace bearing assembly (Part #BRG-4407)",
    "📊 Prevented downtime: 8.5 hours | Cost savings: $47,300",
  ],
  VQC: [
    "📷 VisionQC Pro analyzing production line camera feed...",
    "🔍 Processing batch #4429 (ceramic tiles, 240 units/min)...",
    "🧠 YOLOv8 model scanning for surface defects...",
    "🎯 ONNX inference pipeline running at 60 FPS...",
    "❌ DEFECT DETECTED: Tile #4429-087 - hairline crack (confidence: 97.3%)",
    "🚫 Auto-reject triggered | Production line notified",
    "📊 Quality metrics: 99.7% pass rate | False positive: 0.8%",
    "✅ Batch approved: 239/240 units passed inspection",
  ],
  AICC: [
    "🛡️ AI Compliance Copilot scanning regulatory landscape...",
    "📜 New regulation detected: EU AI Act Article 15 amendments",
    "🔍 Analyzing impact on current AI systems deployment...",
    "📊 Risk assessment: 3 high-priority gaps identified",
    "⚠️ Action required: Update bias testing protocols by Q1 2025",
    "📝 Auto-generating remediation plan...",
    "✅ Compliance score: 87% → 96% (post-remediation)",
    "⏱️ Time-to-close reduced from 45 days to 12 days",
  ],
  LEGAL: [
    "⚖️ LegalDoc AI analyzing contract repository...",
    "📄 Document: Software License Agreement (47 pages)",
    '🔍 Query: "Find liability limitation clauses"',
    "🧠 Clause retrieval system activated...",
    "📊 Found 4 relevant clauses across sections 8.2, 12.1, 15.3, 18.7",
    "⚠️ Risk identified: Unlimited liability for IP violations (Section 15.3)",
    "📝 Comparison with standard templates shows 23% deviation",
    "✅ Recall@10: 94% | Risk flagging accuracy: 91%",
  ],
  AIMA: [
    "🎤 AI Meeting Assistant initializing transcription...",
    "🗣️ Participants: 8 people | Duration: 47 minutes",
    "🧠 Whisper model processing audio stream...",
    "📝 Transcript generated with 96.3% accuracy",
    "✅ Action items extracted: 12 tasks identified",
    "📧 Creating Jira tickets and Gmail follow-ups...",
    '🎯 Task: "John to review Q4 budget by Friday" → Jira assigned',
    "📈 Follow-up completion rate: 89% improvement",
  ],
  CSBOT: [
    "💬 Customer Support Bot handling incoming query...",
    '🔍 Issue: "My order hasn\'t arrived, tracking shows delivered"',
    "📊 Retrieving customer history and delivery data...",
    "🧠 Sentiment analysis: Frustrated but polite (score: -0.3)",
    "📦 Investigation: Package delivered to wrong address",
    "✅ Resolution: Replacement order expedited, 1-day shipping",
    "😊 Customer satisfaction: 4.8/5 stars",
    "📈 Deflection rate: 78% | Escalation avoided",
  ],
  DOCWIZ: [
    "📄 DocuWiz processing uploaded invoice (PDF, 3 pages)...",
    "👁️ OCR engine extracting text with 99.2% accuracy...",
    "🧠 Layout analysis identifying key fields...",
    "💰 Vendor: Acme Corp | Amount: $15,847.33 | Due: 2024-01-15",
    "🔍 Cross-referencing with purchase order #PO-2024-0156...",
    "✅ Validation complete: All fields match PO terms",
    "📊 Processing time: 3.2s | Field accuracy: 98.7%",
    "🗂️ Document indexed and searchable in enterprise system",
  ],
  BLOG: [
    "✍️ AI Blog Generator analyzing SEO brief...",
    '🎯 Target: "Best CRM software for small businesses 2024"',
    "🔍 Keyword research: 15 primary + 45 long-tail keywords",
    "📝 CrewAI orchestrating research → outline → writing workflow...",
    "🧠 Generated outline: 8 sections, 2,400 word target",
    "📸 AI images created: 5 custom graphics + comparison charts",
    "✅ Draft complete: SEO score 94/100, readability grade A",
    "⏱️ Publishing time reduced from 8 hours to 45 minutes",
  ],
  SUMM: [
    "📚 Document Summarizer processing research paper (67 pages)...",
    "🔄 Map-reduce algorithm chunking content into 23 segments...",
    "🧠 LlamaIndex analyzing each section for key insights...",
    "📊 Extracting main findings from methodology and results...",
    "🔗 Preserving citations and cross-references...",
    "📝 Executive summary generated (850 words from 15,000)",
    "✅ Key findings: 3 major breakthroughs, 7 actionable insights",
    "🎯 Faithfulness score: 96.2% | Compression ratio: 17:1",
  ],
  PLANT: [
    "🌱 Plant Disease Detection analyzing leaf image...",
    "📷 Image specs: 2048x1536px, RGB, macro lens capture",
    "🧠 Classifier model processing visual features...",
    "🔍 Disease identified: Late blight (Phytophthora infestans)",
    "📊 Confidence: 94.7% | Severity: Moderate (Stage 2/4)",
    "💊 Treatment lookup: Copper fungicide spray, 7-day intervals",
    "📱 Edge deployment ready for offline field use",
    "✅ Top-1 accuracy: 97.3% across 47 plant species",
  ],
  PSA: [
    "📈 Predictive Sales Analytics loading historical data...",
    "📊 Dataset: 36 months of sales, 150 SKUs, 12 regions",
    "🧠 ARIMA model forecasting seasonal trends...",
    "🔮 LSTM predicting demand spikes for Q1 2025...",
    "📈 Forecast: 23% increase in Widget A, 8% decline in Product B",
    "💡 What-if scenario: 15% price reduction → 31% volume boost",
    "🎯 Recommendation: Adjust inventory levels by region",
    "📊 Model accuracy: MAPE 7.2% | Feature importance updated",
  ],
  TRACK: [
    "📹 Real-Time Object Tracking analyzing RTSP stream...",
    "🎥 Input: 1080p@30fps from security camera #7",
    "🧠 YOLO detecting 12 people, 3 vehicles in frame",
    "🔄 DeepSORT tracking objects across frames...",
    "🚨 Alert: Person #ID-4471 entered restricted zone",
    "🔒 Privacy filter applied: Faces automatically blurred",
    "📊 Tracking accuracy: 96.8% | False alarms: 2.1%",
    "✅ Security event logged with timestamp and coordinates",
  ],
  AIOPS: [
    "🖥️ AIOps scanning infrastructure metrics...",
    "📊 Monitoring: 247 servers, 1,200 applications, 5.2M log entries/hour",
    "🧠 Anomaly detection triggered on API gateway cluster",
    "⚠️ Alert: Response time spike +340% in last 15 minutes",
    "🔍 Root cause analysis: Database connection pool exhausted",
    "🤖 Auto-runbook executing: Scale DB connections, restart pool",
    "✅ Issue resolved automatically in 4.2 minutes",
    "📈 MTTR reduced from 23 minutes to 4.2 minutes",
  ],
  CSAT: [
    "😊 Customer Satisfaction Predictor analyzing feedback...",
    "📊 Input: Support ticket #78432, chat transcript, resolution time",
    "🧠 Sentiment analysis: Mixed emotions detected",
    "📈 Churn probability: 67% (HIGH RISK)",
    "🎯 CSAT prediction: 2.1/5 stars (Very Dissatisfied)",
    "🛟 Save playbook activated: Escalate to senior agent",
    "📞 Proactive outreach scheduled with retention specialist",
    "✅ Historical save rate: 73% of flagged customers retained",
  ],
  MEDCOACH: [
    "👨‍⚕️ Medical Training System initializing adaptive learning...",
    "📚 HCP Profile: Cardiology resident, 2nd year",
    "🧠 Tutor agent creating personalized ECG interpretation module",
    "📊 Current skill level: 72% accuracy on arrhythmia detection",
    "🎯 Learning objective: Improve STEMI recognition to 90%",
    "📝 Evaluator agent generating practice cases...",
    "✅ Progress tracked: 15% improvement after 3 sessions",
    "📈 Learning gain: 2.3x faster than traditional methods",
  ],
  LOCALMKT: [
    "🏪 Local Marketing Platform activating growth campaigns...",
    "📍 Business: Tony's Pizza, Chicago IL",
    "🎯 CrewAI coordinating multi-channel campaign...",
    '📱 GMB post: "Fresh ingredients, family recipes" +photo',
    "📸 Instagram story: Behind-the-scenes pizza making",
    '📧 Email blast: "20% off family dinners this week"',
    "📊 UTM tracking shows 127 clicks, 23 conversions",
    "📈 Result: +$1,847 revenue, 15 new bookings this week",
  ],
  REALESTATE: [
    "🏡 Real Estate Assistant connecting to MLS database...",
    '💬 Client: "3-bedroom homes under $400K in downtown area"',
    "🔍 Searching 2,847 active listings with matching criteria...",
    "📊 Found 12 properties | Analyzing market trends...",
    "🏠 Top match: 1247 Oak Street - $385K, 3BR/2BA, renovated",
    "📅 Calendar check: Available for showing tomorrow 2-4pm",
    "📝 Lead qualification: Pre-approved buyer, serious intent",
    "✅ Showing scheduled | Lead→Visit conversion: 68%",
  ],
};

// Mock API for streaming demos with service-specific content
export async function runDemo(
  code: string,
  input?: string
): Promise<ReadableStream<string>> {
  const service = SERVICES.find((s) => s.code === code);
  if (!service) {
    throw new Error(`Service ${code} not found`);
  }

  const messages = DEMO_SCENARIOS[code] || [
    `🚀 Booting ${service.name}...`,
    `🔧 Loading ${service.tags.slice(0, 2).join(" & ")} tools...`,
    `🧠 Composing agent graph for ${service.category}...`,
    `📊 Retrieving context from knowledge base...`,
    `✨ Generating intelligent response...`,
    `✅ Demo finished (mock). Replace this endpoint with your real agent.`,
  ];

  let messageIndex = 0;

  return new ReadableStream({
    start(controller) {
      const sendMessage = () => {
        if (messageIndex < messages.length) {
          controller.enqueue(messages[messageIndex] + "\n");
          messageIndex++;
          setTimeout(sendMessage, 600 + Math.random() * 800); // 600-1400ms delay for realism
        } else {
          controller.close();
        }
      };
      sendMessage();
    },
  });
}

export function getServiceByCode(code: string): Service | undefined {
  return SERVICES.find((s) => s.code === code);
}

export function getUniqueCategories(): Category[] {
  return Array.from(new Set(SERVICES.map((s) => s.category)));
}

export function getUniqueStatuses(): Status[] {
  return Array.from(new Set(SERVICES.map((s) => s.status)));
}
