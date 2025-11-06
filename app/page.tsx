"use client";
import Head from "next/head";
import { useEffect, useState } from "react";
import {
  SunIcon,
  MoonIcon,
  ArrowDownTrayIcon,
  EnvelopeIcon,
  CodeBracketIcon,
  BookOpenIcon,
  LinkIcon,
} from "@heroicons/react/24/solid";

export default function Home() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const stored = typeof window !== "undefined" && localStorage.getItem("theme");
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
      if (newTheme === "dark") document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    }
  };

  const projects = [
    {
      title: "House Price Prediction",
      description:
        "Regression model using Scikit-learn. EDA, feature engineering and model explainability. Includes trained model and README.",
      github: "https://github.com/chahetijha/house-price-prediction",
      colab:
        "https://colab.research.google.com/github/chahetijha/house-price-prediction/blob/main/notebook.ipynb",
      tags: ["Regression", "Scikit-learn", "EDA"],
      type: "Classic ML",
    },
    {
      title: "Image Classification CNN",
      description:
        "Convolutional Neural Network built with TensorFlow/Keras for multi-class image classification. Includes data augmentation and transfer learning.",
      github: "https://github.com/chahetijha/image-classification-cnn",
      colab:
        "https://colab.research.google.com/github/chahetijha/image-classification-cnn/blob/main/notebook.ipynb",
      tags: ["Deep Learning", "CNN", "TensorFlow"],
      type: "Computer Vision",
    },
    {
      title: "Customer Churn Analysis",
      description:
        "End-to-end pipeline: EDA, feature selection, model training and dashboard for churn prediction.",
      github: "https://github.com/chahetijha/customer-churn-analysis",
      colab:
        "https://colab.research.google.com/github/chahetijha/customer-churn-analysis/blob/main/notebook.ipynb",
      tags: ["Classification", "Pandas", "XGBoost"],
      type: "Data Science",
    },
  ];

  return (
    <>
      <Head>
        <title>Chaheti Jha — Machine Learning Portfolio</title>
        <meta
          name="description"
          content="Chaheti Jha — Machine Learning Enthusiast | Projects & Demos"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

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
                className="text-sm px-3 py-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              >
                GitHub
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
              Machine Learning Enthusiast
            </p>
            <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-3xl mb-6">
              Hello! I build{" "}
              <span className="text-blue-600 dark:text-blue-400">ML projects</span>{" "}
              <span className="text-gray-400 dark:text-gray-500">(and cry)</span>{" "}
              but still love it.
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
              I'm a final year engineering student from RV College of Engineering,
              Bengaluru. I enjoy turning real datasets into working ML & AI
              projects. Always eager to learn — currently{" "}
              <strong>Open to Internships</strong>.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:chahetijha@gmail.com"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base shadow-lg shadow-blue-500/50 transition-transform hover:-translate-y-1"
              >
                <EnvelopeIcon className="w-5 h-5" />
                Email me (plzz )
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
              Practise Projects
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
                    {p.colab && (
                      <a
                        href={p.colab}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-1 flex-1 px-3 py-2 rounded-xl text-sm border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                      >
                        <BookOpenIcon className="w-4 h-4" /> Colab
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
    </>
  );
}
