// ============================================================================
// Portfolio content — edit this file to update site content.
// Nothing here should ever contain employer/client project detail.
// ============================================================================

const HERO_ROLES = ["Python Developer", "AI/ML Developer", "GenAI Developer"];

const CAPABILITIES = [
  { icon: "plug", title: "Backend APIs", desc: "Scalable REST APIs with authentication, validation, and clean, maintainable architecture." },
  { icon: "bot", title: "AI Applications", desc: "End-to-end AI-powered features, from data ingestion through model output." },
  { icon: "brain", title: "LLM Integrations", desc: "Connecting products to OpenAI, Ollama, and HuggingFace models with reliable, testable interfaces." },
  { icon: "book", title: "RAG Applications", desc: "Retrieval-augmented generation systems built on vector databases and semantic search." },
  { icon: "shield", title: "Authentication Systems", desc: "JWT-based authentication and access-control systems for multi-user applications." },
  { icon: "scan", title: "OCR Pipelines", desc: "Extracting structured data from scanned and digital documents at scale." },
  { icon: "workflow", title: "Data Processing Pipelines", desc: "Parsing and transforming structured and unstructured data formats into usable stores." },
  { icon: "zap", title: "Real-time Applications", desc: "WebSocket-based live communication systems built for stability under load." },
];

const SKILL_CATEGORIES = [
  { id: "languages", label: "Programming Languages", icon: "code", skills: ["Python", "SQL"] },
  { id: "backend", label: "Backend Development", icon: "server", skills: ["FastAPI", "REST APIs", "Pydantic", "JWT Auth", "WebSockets", "CRUD Operations"] },
  { id: "ai-ml", label: "AI & Machine Learning", icon: "brain-circuit", skills: ["NLP", "OCR", "Vector Embeddings", "ML Pipelines", "Semantic Search", "PyTorch"] },
  { id: "genai", label: "Generative AI", icon: "sparkles", skills: ["LLMs", "RAG Pipelines", "OpenAI API", "Ollama / Llama 3", "HuggingFace", "Prompt Engineering"] },
  { id: "databases", label: "Databases & Caching", icon: "database", skills: ["MySQL", "PostgreSQL", "Redis", "ChromaDB", "FAISS"] },
  { id: "devops", label: "DevOps & Tools", icon: "wrench", skills: ["Git", "GitHub", "Bitbucket", "JIRA", "Postman"] },
];

// NOTE (confidentiality): descriptions here are intentionally generic —
// role/tenure only. No client, product, or proprietary project detail.
const EXPERIENCE = [
  {
    role: "Software Developer",
    company: "Dalvkot Utility Enterprises Limited",
    location: "Bengaluru",
    duration: "Oct 2024 — Present",
    summary: "Working across multiple production systems spanning real-time data integration, AI-powered document intelligence, and applied machine learning for decision support. Delivered measurable improvements in processing speed and accuracy across enterprise backend workflows, using Python, FastAPI, PyTorch, and LLM-based tooling.",
    focusAreas: [
      "Real-time data integration & messaging pipelines",
      "AI-powered document intelligence & retrieval (RAG)",
      "Applied machine learning for decision support systems",
      "Secure, scalable REST API design",
    ],
  },
];

// TODO: Replace these with your real personal / open-source projects as you build them.
const PROJECTS = [
  {
    title: "Chest X-Ray Screening Assistant",
    status: "In Progress",
    description: "An open-source computer-vision tool that flags regions of interest in chest X-rays for review, using pre-trained open-weight models and Grad-CAM visual explanations. Built as a screening aid, not a diagnostic device.",
    features: ["Multi-label finding classification (TorchXRayVision)", "Grad-CAM heatmap overlay for explainability", "Confidence-scored findings list with clear non-diagnostic disclaimer"],
    tech: ["Python", "PyTorch", "TorchXRayVision", "MONAI", "FastAPI"],
    gradient: "linear-gradient(135deg, rgba(45,212,191,0.25), rgba(129,140,248,0.25))",
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "Real-Time WebSocket Dashboard",
    status: "In Progress",
    description: "A small real-time dashboard demonstrating bidirectional WebSocket communication patterns with a FastAPI backend.",
    features: ["Live bidirectional updates", "Reconnection & ack handling", "Minimal, dependency-light frontend"],
    tech: ["Python", "FastAPI", "WebSockets"],
    gradient: "linear-gradient(135deg, rgba(129,140,248,0.25), rgba(52,211,153,0.25))",
    githubUrl: "",
    liveUrl: "",
  },
  {
    title: "PDF/OCR Data Extraction Tool",
    status: "In Progress",
    description: "An open-source tool that extracts structured data from sample public documents using OCR and layout parsing.",
    features: ["Scanned & digital PDF support", "Structured field extraction", "CLI + simple API interface"],
    tech: ["Python", "PyTesseract", "PDFPlumber", "Pillow"],
    gradient: "linear-gradient(135deg, rgba(52,211,153,0.25), rgba(45,212,191,0.25))",
    githubUrl: "",
    liveUrl: "",
  },
];