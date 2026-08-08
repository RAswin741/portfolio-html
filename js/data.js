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
  { id: "languages", label: "Programming Languages", icon: "code", skills: ["Python"] },
  { id: "backend", label: "Backend Development", icon: "server", skills: ["FastAPI", "REST APIs", "Pydantic", "JWT Auth", "WebSockets", "CRUD Operations"] },
  { id: "ai-ml", label: "AI & Machine Learning", icon: "brain-circuit", skills: ["NLP", "OCR", "Vector Embeddings", "ML Pipelines", "Semantic Search"] },
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
    summary: "Working on backend systems and AI-driven features involving Python, FastAPI, and LLM-based tooling in a production environment. Focused on API development, data pipeline design, and integrating generative AI capabilities into existing workflows.",
  },
];

// TODO: Replace these with your real personal / open-source projects as you build them.
const PROJECTS = [
  {
    title: "Open-Source RAG Chatbot",
    status: "In Progress",
    description: "A retrieval-augmented chatbot over open datasets, built with ChromaDB and an open-weight LLM. Repo is live; write-up in progress.",
    features: ["Document ingestion & chunking pipeline", "Vector search with ChromaDB", "Streaming LLM responses"],
    tech: ["Python", "FastAPI", "ChromaDB", "OpenAI API"],
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
