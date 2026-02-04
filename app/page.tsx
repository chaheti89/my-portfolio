"use client";

import { useEffect, useState } from "react";
import {
  SunIcon,
  MoonIcon,
  EnvelopeIcon,
  CodeBracketIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored =
      typeof window !== "undefined" && localStorage.getItem("theme");
    const t = stored || "light";
    setTheme(t);
    if (typeof window !== "undefined") {
      if (t === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (typeof window !== "undefined") {
      localStorage.setItem("theme", newTheme);
      if (newTheme === "dark")
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  };

  const projects = [
    {
      title: "AutoDoc – API Documentation Generator",
      description:
        "A full-stack web app that analyzes public REST APIs and auto-generates structured documentation including schema, response types, and example payloads.",
      github: "https://github.com/chaheti89/autodoc",
      tags: ["Full Stack", "React", "Flask", "API Analysis"],
      type: "Web App",
    },
    {
      title: "React Git Visualizer",
      description:
        "A React-based tool that visualizes Git commit history and branching structure to help understand how Git works internally. Built using modern React patterns and interactive UI components.",
      github: "https://github.com/chaheti89/react-git-visualizer",
      tags: ["React", "Git", "Visualization"],
      type: "Web App",
    },
    {
      title: "Task Analyzer",
      description:
        "A productivity-focused application that analyzes tasks and workflows to provide insights into task distribution, completion patterns, and efficiency. Designed to help users better understand and optimize how they manage and execute tasks.",
      github: "https://github.com/chaheti89/task-analyzer",
      tags: ["Productivity", "Analysis", "Python"],
      type: "Software Tool",
    },
    {
      title: "Binance Futures Trading Bot",
      description:
        "An automated cryptocurrency trading bot for Binance Futures that executes trades based on predefined strategies. Integrates with the Binance API, manages leverage and positions, and demonstrates real-time market data handling and risk-aware automation.",
      github: "https://github.com/chaheti89/binance-future-bot",
      tags: ["Python", "Trading Bot", "APIs", "Automation"],
      type: "Systems / Finance",
    },
    {
      title: "TCP Chat",
      description:
        "A TCP-based real-time chat application built using Python's socket and threading libraries. Supports multiple clients through concurrent connections, handles message broadcasting, and includes clearly separated client and server implementations to demonstrate core networking concepts.",
      github: "https://github.com/chaheti89/tcp-chat",
      tags: ["Python", "Socket Programming", "Networking"],
      type: "Systems / Networking",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-500 font-sans">
      {/* HEADER */}
      <header className="w-full border-b border-gray-200 dark:border-gray-800 bg-gray-50/90 dark:bg-gray-900/90 backdrop-blur-md sticky top-0 z-10">
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
          <h1 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            Chaheti Jha
          </h1>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/chaheti89"
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.1 3.3 9.4 7.9 10.9..." />
              </svg>
            </a>

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-blue-600 dark:text-blue-400 hover:scale-105 transition-transform"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* HERO */}
        <section className="pt-24 pb-28 text-center flex flex-col items-center">
          <p className="text-xl font-medium text-blue-600 dark:text-blue-400 mb-6">
            Machine Learning & AI Enthusiast | Aspiring Software Engineer
          </p>

          <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl mb-6">
            Hello! I build{" "}
            <span className="text-blue-600 dark:text-blue-400">
              software projects
            </span>{" "}
            and love it.
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
            I'm a final-year engineering student at RV College of Engineering,
            Bengaluru. I enjoy building end-to-end software, AI, and systems
            projects—from designing APIs to training ML models and deploying real
            applications. Always curious, always experimenting, and currently{" "}
            <strong>open to internships</strong>.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:chahetijha@gmail.com"
              className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-transform hover:-translate-y-1"
            >
              <EnvelopeIcon className="w-5 h-5" />
              Email me
            </a>

            <a
              href="/offcampus-1 (1).pdf"
              download
              className="inline-block px-6 py-3 bg-blue-600 text-white font-medium rounded-xl shadow-md hover:bg-blue-700 transition"
            >
              Download Resume
            </a>
          </div>
        </section>

        <hr className="border-gray-200 dark:border-gray-800 my-16" />

        {/* PROJECTS */}
        <section className="mb-20">
          <h3 className="text-3xl md:text-4xl font-extrabold mb-12 text-center">
            Practice Projects
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p) => (
              <article
                key={p.title}
                className="flex flex-col justify-between p-6 rounded-3xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-indigo-500/10 transition-all h-full"
              >
                <div>
                  <span className="text-xs font-medium tracking-wider uppercase text-blue-600 dark:text-blue-400">
                    {p.type}
                  </span>
                  <h4 className="text-2xl font-semibold my-2">{p.title}</h4>
                  <p className="text-base text-gray-600 dark:text-gray-300">
                    {p.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t border-gray-100 dark:border-gray-700/50">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900/50 rounded-full text-blue-800 dark:text-blue-200 font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-center gap-1 flex-1 px-3 py-2 rounded-xl text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                    >
                      <CodeBracketIcon className="w-4 h-4" /> GitHub
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <hr className="border-gray-200 dark:border-gray-800 my-16" />

        <footer className="py-6 mt-8 border-t border-gray-200 dark:border-gray-800 text-center text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} Chaheti Jha — Built with Next.js + Tailwind
        </footer>
      </main>
    </div>
  );
}
