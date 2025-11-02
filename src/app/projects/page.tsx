import Link from "next/link";

type Project = {
  title: string;
  description: string;
  tags: string[];
  link?: string;
  repo?: string;
};

const projects: Project[] = [
  {
    title: "This site",
    description:
      "A responsive personal site built with Next.js, Tailwind CSS, and MDX.",
    tags: ["Next.js", "Tailwind", "MDX"],
    link: "/",
    repo: "https://github.com/acarlson33/blog",
  },
  {
    title: "Kel",
    description:
      "A note-taking app with Markdown support, built with Next.js, TypeScript, and Tailwind CSS.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    link: "https://kel-web.vercel.app/",
    repo: "https://github.com/Kel-app",
  },
  {
    title: "Rounding",
    description: "A simple npm package for rounding units to other units.",
    tags: ["TypeScript"],
    repo: "https://github.com/acarlson33/rounding",
  },
  {
    title: "Firepit",
    description: "A discord clone, built with Next.js and appwrite",
    tags: ["Next.js", "Appwrite", "Tailwind", "Typescript"],
    repo: "https://github.com/acarlson33/firepit",
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Welcome to my personal project gallery! Explore selected work across
            web apps, UI experiments, and tooling.
          </p>
        </header>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1"
            >
              {/* Title */}
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-slate-300 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-full bg-pink-500/20 text-pink-200 px-3 py-1 text-xs font-medium border border-pink-400/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.link && (
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors font-medium"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    Live Demo
                  </a>
                )}
                {project.repo && project.repo !== "#" && (
                  <a
                    href={project.repo}
                    className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors font-medium"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Repository
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <p className="text-slate-300 mb-6 text-lg">
            Want to see more? Check out my GitHub for additional projects!
          </p>
          <Link
            href="https://github.com/acarlson33"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full font-semibold text-white shadow-lg hover:shadow-pink-500/50 transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            Visit My GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
