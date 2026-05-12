"use client";
import { useEffect, useState, useRef } from "react";

const NAV_LINKS = ["About", "Projects", "Research", "Skills", "Contact"];

const PAPER = {
  title: "Digital Reverse Logistics Framework for Perishable Produce",
  authors: "Abhishek Saraff · Aishwarya Gite · Chaheti Jha · M K Murugan · Nikhitha Sunil · C K Nagendra Guptha",
  conference: "2025 9th International Conference, IEEE",
  year: "2025",
  abstract: "A comprehensive digital reverse logistics framework that optimizes post-harvest handling of perishable produce using AI and IoT. A fine-tuned ResNet50 model performs image-based fruit grading with 92% accuracy and <200ms inference latency. An ESP32 IoT setup monitors temperature, humidity, and ethylene gas; a rule-based engine automates routing to retail, donation, or composting. Firebase integration enables real-time cloud logging. Validated on 100+ fruit samples, achieving an estimated 20-25% spoilage reduction over conventional manual methods.",
  doi: "https://ieeexplore.ieee.org/document/11295085",
  tags: ["IEEE", "AI/ML", "IoT", "ResNet50", "Computer Vision", "ESP32"],
};

const PRACTICE_PROJECTS = [
  {
    title: "AutoDoc",
    subtitle: "API Documentation Generator",
    description:
      "Full-stack web app that analyzes any public REST API and auto-generates structured documentation: schema, response times, content types, and example payloads. Supports GET, POST, PUT, DELETE with live schema detection.",
    github: "https://github.com/chaheti89/autodoc",
    tags: ["React", "Flask", "Python", "Axios", "CORS"],
    type: "Full Stack",
    accent: "#6366f1",
    icon: "📄",
  },
  {
    title: "React Git Visualizer",
    subtitle: "Interactive Branch Visualizer",
    description:
      "Visualizes Git commit history and branching structure interactively. Helps developers understand how Git works internally using modern React patterns and dynamic UI components.",
    github: "https://github.com/chaheti89/react-git-visualizer",
    tags: ["React", "Git", "Visualization", "JavaScript"],
    type: "Web App",
    accent: "#f59e0b",
    icon: "🌿",
  },
  {
    title: "Task Analyzer",
    subtitle: "Productivity Intelligence",
    description:
      "Analyzes tasks and workflows to surface insights on distribution, completion patterns, and efficiency. Helps users understand and optimize how they plan and execute work.",
    github: "https://github.com/chaheti89/task-analyzer",
    tags: ["Python", "Productivity", "Analytics"],
    type: "Software Tool",
    accent: "#10b981",
    icon: "📊",
  },
  {
    title: "Binance Futures Bot",
    subtitle: "Automated Trading System",
    description:
      "Crypto trading bot for Binance Futures that executes predefined strategies in real-time. Handles leverage management, position sizing, risk-aware automation, and live market data via the Binance API.",
    github: "https://github.com/chaheti89/binance-future-bot",
    tags: ["Python", "Binance API", "Trading", "Automation"],
    type: "Systems / Finance",
    accent: "#ef4444",
    icon: "📈",
  },
  {
    title: "TCP Chat",
    subtitle: "Multi-Client Networking",
    description:
      "Real-time TCP chat app built with Python's socket and threading libraries. Handles concurrent multi-client connections, broadcasts messages, with clearly separated client/server implementations.",
    github: "https://github.com/chaheti89/tcp-chat",
    tags: ["Python", "Sockets", "Networking", "Threading"],
    type: "Systems",
    accent: "#8b5cf6",
    icon: "🔌",
  },
  {
    title: "Blog Agent",
    subtitle: "AI-Powered Blog Writer",
    description:
      "Agentic blog generation pipeline built with LangGraph and Gemini 2.5 Flash. A planner node creates a structured outline, a worker node writes the full post, and a reducer controls the flow — all saved automatically to file.",
    github: "https://github.com/chaheti89/blog-agent",
    tags: ["Python", "LangGraph", "Gemini", "AI Agents", "LangChain"],
    type: "AI / Agents",
    accent: "#06b6d4",
    icon: "✍️",
  },
];

const OSS_CONTRIBUTIONS = [
  {
    title: "Dataverse",
    description:
      "Data visualization software rendering plots from primary to advanced level, plus a finance tracker. Actively contributing to this fork.",
    github: "https://github.com/chaheti89/Dataverse",
    tags: ["Jupyter Notebook", "Python", "Data Viz"],
    stars: 1,
  },
  {
    title: "FinVeda",
    description:
      "Financial literacy app with an AI chatbot (Arthsathi), finance blogs, market trends, SIP calculator, and interactive quizzes.",
    github: "https://github.com/chaheti89/FinVeda",
    tags: ["HTML", "JavaScript", "FinTech"],
  },
  {
    title: "YourNextSaas.online",
    description:
      "Open-source SaaS boilerplate pre-configured with Payments, Auth, and Mailing so you can focus on building features.",
    github: "https://github.com/chaheti89/YourNextSaas.online",
    tags: ["TypeScript", "Next.js", "SaaS"],
    stars: 1,
  },
];

const SKILLS_BARS = [
  { label: "Python", level: 90 },
  { label: "JavaScript / React", level: 80 },
  { label: "TensorFlow / PyTorch", level: 75 },
  { label: "Flask / Node.js", level: 78 },
  { label: "SQL / MongoDB", level: 72 },
  { label: "C / C++", level: 65 },
];

const SKILL_CHIPS = [
  "Python", "JavaScript", "TypeScript", "C/C++", "SQL",
  "React", "Next.js", "Flask", "Node.js",
  "TensorFlow", "PyTorch", "scikit-learn", "Pandas", "NumPy",
  "Firebase", "MongoDB", "MySQL", "REST APIs", "Git", "Linux",
];

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

export default function Home() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const stored = localStorage.getItem("theme") || "dark";
    setTheme(stored);
    document.documentElement.classList.toggle("dark", stored === "dark");
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("theme", next);
    document.documentElement.classList.toggle("dark", next === "dark");
  };

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const heroReveal = useReveal(0.05);
  const projectsReveal = useReveal(0.05);
  const ossReveal = useReveal(0.05);
  const researchReveal = useReveal(0.05);
  const skillsReveal = useReveal(0.05);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white"
      style={{ fontFamily: "'DM Sans','Segoe UI',sans-serif" }}>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,700;9..40,900&display=swap');

        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        @keyframes gradshift { 0%,100% { background-position:0% 50%; } 50% { background-position:100% 50%; } }
        @keyframes ping2 { 0%,100% { transform:scale(1); opacity:0.75; } 50% { transform:scale(2); opacity:0; } }

        .fade-up { animation: fadeUp 0.7s ease forwards; opacity:0; }
        .d1 { animation-delay:0.05s; }
        .d2 { animation-delay:0.15s; }
        .d3 { animation-delay:0.28s; }
        .d4 { animation-delay:0.42s; }
        .d5 { animation-delay:0.56s; }
        .d6 { animation-delay:0.70s; }

        .grad-text {
          background: linear-gradient(135deg,#a78bfa,#60a5fa,#34d399);
          background-size:200%;
          animation: gradshift 5s ease infinite;
          -webkit-background-clip:text;
          -webkit-text-fill-color:transparent;
          background-clip:text;
        }

        .card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .card:hover { transform:translateY(-6px); box-shadow:0 20px 60px rgba(0,0,0,0.5); }

        .skill-fill { transition: width 1.6s cubic-bezier(0.4,0,0.2,1); }

        .hero-dots {
          background-image: radial-gradient(circle, rgba(167,139,250,0.12) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .hero-glow {
          background: radial-gradient(ellipse 80% 50% at 50% 0%, rgba(124,58,237,0.18) 0%, transparent 70%);
        }

        .ping2 { animation: ping2 1.8s ease-in-out infinite; }

        .tag { font-size:0.68rem; font-weight:600; letter-spacing:0.06em; text-transform:uppercase; padding:0.2rem 0.6rem; border-radius:100px; }
      `}</style>

      {/* NAV */}
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-xl border-b border-white/[0.06]"
        style={{ background: 'rgba(13,13,13,0.88)' }}>
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-black text-lg tracking-tighter grad-text">cj.</span>
          <nav className="hidden md:flex gap-1">
            {NAV_LINKS.map(l => (
              <button key={l} onClick={() => scrollTo(l)}
                className="px-4 py-1.5 rounded-full text-sm text-white/55 hover:text-white hover:bg-white/[0.06] transition-all">
                {l}
              </button>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <a href="https://github.com/chaheti89" target="_blank" rel="noreferrer"
              className="hidden sm:flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-white/[0.1] text-xs text-white/60 hover:text-white hover:border-white/25 transition-all">
              <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
              </svg>
              GitHub
            </a>
            <button onClick={toggleTheme}
              className="w-9 h-9 rounded-full border border-white/[0.1] flex items-center justify-center text-base hover:border-white/25 transition-all">
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="about" ref={heroReveal.ref}
        className="hero-dots min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="max-w-4xl mx-auto relative text-center">
          {heroReveal.visible && <>
            <div className="fade-up d1 inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-violet-500/25 bg-violet-500/[0.08] text-violet-300 text-xs font-semibold tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="ping2 absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-70"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-400"></span>
              </span>
              Open to Internships / Full Time · Final Year · RVCE Bengaluru
            </div>

            <h1 className="fade-up d2 font-black tracking-tighter mb-6 text-center"
              style={{ fontSize: 'clamp(2.8rem,8vw,5.5rem)', lineHeight: 1.05 }}>
              Hi, I'm <span className="grad-text">Chaheti Jha</span>
            </h1>

            <p className="fade-up d3 text-white/35 font-medium tracking-widest uppercase text-sm mb-5">
              ML · AI · Full-Stack · Systems
            </p>

            <p className="fade-up d4 text-white/55 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
              Final-year engineer at RV College of Engineering, Bengaluru.
              I build end-to-end software: APIs, web apps, ML models, and trading systems.
              Always experimenting, always shipping.
            </p>

            <div className="fade-up d5 flex flex-wrap gap-3 justify-center">
              <a href="mailto:chahetijha@gmail.com"
                className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-bold text-white"
                style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow:'0 0 32px rgba(124,58,237,0.45)' }}>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                Hire me
              </a>
              <a href="/offcampus-1 (1).pdf" download
                className="flex items-center gap-2 px-7 py-3 rounded-full text-sm font-semibold border border-white/15 text-white/75 hover:text-white hover:border-white/30 transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
                </svg>
                Resume
              </a>
            </div>

            <div className="fade-up d6 flex justify-center gap-8 mt-16 text-center">
              {[["20+", "Repositories"], ["6+", "Projects Built"], ["3+", "OSS Contributions"]].map(([n, l]) => (
                <div key={l}>
                  <div className="text-2xl font-black grad-text">{n}</div>
                  <div className="text-white/35 text-xs mt-0.5 font-medium">{l}</div>
                </div>
              ))}
            </div>
          </>}
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/20">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7"/>
          </svg>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" ref={projectsReveal.ref} className="py-28 px-6"
        style={{ background:'linear-gradient(180deg,#0d0d0d 0%,#090916 100%)' }}>
        <div className="max-w-6xl mx-auto">
          {projectsReveal.visible && <>
            <div className="fade-up d1 text-center mb-16">
              <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-3">Work</p>
              <h2 className="font-black tracking-tighter text-white" style={{ fontSize:'clamp(2rem,5vw,3.2rem)' }}>
                Practice Projects
              </h2>
              <p className="text-white/40 mt-4 max-w-lg mx-auto text-sm">
                End-to-end builds across full-stack web, systems, finance, and developer tooling.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
              {PRACTICE_PROJECTS.map((p, i) => (
                <article key={p.title}
                  className={`card fade-up d${Math.min(i+2,6)} flex flex-col rounded-2xl p-6 border border-white/[0.07]`}
                  style={{ background:'rgba(255,255,255,0.025)' }}>
                  <div className="flex items-start justify-between mb-5">
                    <span className="text-3xl">{p.icon}</span>
                    <span className="tag border" style={{ borderColor:p.accent+'50', color:p.accent, background:p.accent+'12' }}>
                      {p.type}
                    </span>
                  </div>
                  <h3 className="text-lg font-black text-white mb-0.5">{p.title}</h3>
                  <p className="text-xs font-semibold mb-3" style={{ color:p.accent+'cc' }}>{p.subtitle}</p>
                  <p className="text-white/45 text-sm leading-relaxed flex-1">{p.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-4 mb-5">
                    {p.tags.map(t => (
                      <span key={t} className="tag bg-white/[0.05] text-white/45">{t}</span>
                    ))}
                  </div>
                  <a href={p.github} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 justify-center py-2.5 rounded-xl border border-white/[0.09] text-xs font-semibold text-white/55 hover:text-white hover:border-white/20 transition-all">
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                    </svg>
                    View on GitHub
                  </a>
                </article>
              ))}
            </div>
          </>}
        </div>
      </section>


      {/* RESEARCH / PUBLICATIONS */}
      <section id="research" ref={researchReveal.ref} className="py-24 px-6 border-t border-white/[0.05]"
        style={{ background: 'linear-gradient(180deg,#0d0d0d,#0b0b18)' }}>
        <div className="max-w-4xl mx-auto">
          {researchReveal.visible && <>
            <div className="fade-up d1 mb-10">
              <p className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2">Research</p>
              <h2 className="font-black tracking-tighter text-white" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)' }}>
                Publications
              </h2>
            </div>

            <div className="fade-up d2">
              <div className="card rounded-2xl border border-white/[0.07] p-7 hover:border-amber-500/30 transition-all"
                style={{ background:'rgba(255,255,255,0.025)' }}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center text-lg shrink-0"
                      style={{ background:'rgba(245,158,11,0.12)', border:'1px solid rgba(245,158,11,0.25)' }}>
                      📰
                    </div>
                    <div>
                      <p className="text-amber-400 text-xs font-bold tracking-wider uppercase">{PAPER.conference}</p>
                      <p className="text-white/35 text-xs mt-0.5">{PAPER.year}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {PAPER.tags.map(t => (
                      <span key={t} className="tag"
                        style={{ background:'rgba(245,158,11,0.1)', color:'#fbbf24', border:'1px solid rgba(245,158,11,0.25)' }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <h3 className="text-xl font-black text-white mb-2 leading-tight">{PAPER.title}</h3>
                <p className="text-white/40 text-sm mb-4">{PAPER.authors}</p>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{PAPER.abstract}</p>

                {/* Key results */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {[["92%", "Classification\nAccuracy"], ["<200ms", "Inference\nLatency"], ["20–25%", "Spoilage\nReduction"]].map(([val, lbl]) => (
                    <div key={val} className="rounded-xl px-3 py-3 text-center"
                      style={{ background:'rgba(245,158,11,0.07)', border:'1px solid rgba(245,158,11,0.15)' }}>
                      <div className="text-lg font-black text-amber-400">{val}</div>
                      <div className="text-white/35 text-xs mt-0.5 whitespace-pre-line leading-tight">{lbl}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a href={PAPER.doi} target="_blank" rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:scale-105"
                    style={{ background:'linear-gradient(135deg,#d97706,#b45309)', boxShadow:'0 0 20px rgba(217,119,6,0.3)' }}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                    View on IEEE Xplore
                  </a>
                </div>
              </div>
            </div>
          </>}
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" ref={skillsReveal.ref} className="py-28 px-6"
        style={{ background:'linear-gradient(180deg,#0d0d0d,#0a0d1a)' }}>
        <div className="max-w-4xl mx-auto">
          {skillsReveal.visible && <>
            <div className="fade-up d1 text-center mb-14">
              <p className="text-emerald-400 text-xs font-bold tracking-widest uppercase mb-2">Stack</p>
              <h2 className="font-black tracking-tighter text-white" style={{ fontSize:'clamp(2rem,5vw,3rem)' }}>
                Skills & Technologies
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-x-16 gap-y-5 mb-14 fade-up d2">
              {SKILLS_BARS.map(({ label, level }) => (
                <div key={label}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium text-white/65">{label}</span>
                    <span className="text-xs text-white/30">{level}%</span>
                  </div>
                  <div className="h-1.5 rounded-full overflow-hidden" style={{ background:'rgba(255,255,255,0.06)' }}>
                    <div className="skill-fill h-full rounded-full"
                      style={{ width:`${level}%`, background:'linear-gradient(90deg,#7c3aed,#3b82f6)' }}/>
                  </div>
                </div>
              ))}
            </div>

            <div className="fade-up d3">
              <p className="text-center text-white/25 text-xs uppercase tracking-widest font-medium mb-4">All technologies</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SKILL_CHIPS.map(s => (
                  <span key={s}
                    className="px-3.5 py-1.5 rounded-full text-sm text-white/55 border border-white/[0.08] hover:text-white hover:border-violet-500/40 hover:bg-violet-500/[0.08] cursor-default transition-all"
                    style={{ background:'rgba(255,255,255,0.025)' }}>
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </>}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-28 px-6">
        <div className="max-w-xl mx-auto text-center">
          <div className="p-px rounded-3xl"
            style={{ background:'linear-gradient(135deg,rgba(167,139,250,0.5),rgba(96,165,250,0.2),rgba(52,211,153,0.2))' }}>
            <div className="rounded-3xl px-10 py-14" style={{ background:'#0e0e18' }}>
              <p className="text-violet-400 text-xs font-bold tracking-widest uppercase mb-3">Get in touch</p>
              <h2 className="font-black tracking-tighter text-white mb-4" style={{ fontSize:'clamp(1.8rem,4vw,2.8rem)' }}>
                Let's build something
              </h2>
              <p className="text-white/45 text-sm leading-relaxed mb-8">
                I'm actively looking for internships and full-time roles. If you have a problem to solve or just want to chat about ML, systems, or software, my inbox is open.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="mailto:chahetijha@gmail.com"
                  className="px-6 py-3 rounded-full text-sm font-bold text-white transition-transform hover:scale-105"
                  style={{ background:'linear-gradient(135deg,#7c3aed,#4f46e5)', boxShadow:'0 0 28px rgba(124,58,237,0.4)' }}>
                  chahetijha@gmail.com
                </a>
                <a href="https://github.com/chaheti89" target="_blank" rel="noreferrer"
                  className="px-6 py-3 rounded-full text-sm font-semibold border border-white/15 text-white/65 hover:text-white hover:border-white/30 transition-all">
                  github.com/chaheti89
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 px-6 border-t border-white/[0.05] text-center text-white/20 text-xs">
        © {new Date().getFullYear()} Chaheti Jha · Built with Next.js + Tailwind · Bengaluru, India
      </footer>
    </div>
  );
}
