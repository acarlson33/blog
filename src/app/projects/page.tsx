// src/app/projects/page.tsx or src/pages/projects.tsx (depending on your setup)
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
    repo: "#",
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
    repo: "https://github.com/aqua427/rounding",
  },
];

export default function Projects() {
  return (
    <main className="min-h-screen bg-pink-300/80">
      <section className="mx-auto max-w-6xl px-6 py-16">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 drop-shadow-sm">
            Projects
          </h1>
          <p className="mt-3 text-gray-700 max-w-2xl mx-auto">
            Welcome to my personal project gallery! Explore selected work across
            web apps, UI experiments, and tooling.
          </p>
        </header>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p) => (
            <li
              key={p.title}
              className="group rounded-xl border border-pink-500/30 bg-white/70 backdrop-blur-sm shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900">
                  {p.title}
                </h2>
                <p className="mt-2 text-sm text-gray-700">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full bg-pink-200/70 text-pink-900 px-2.5 py-0.5 text-xs font-medium ring-1 ring-pink-500/30"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4">
                  {p.link && (
                    <a
                      href={p.link}
                      className="text-sm font-medium text-pink-900 hover:text-pink-800 underline underline-offset-4 decoration-pink-700/60"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Live
                    </a>
                  )}
                  {p.repo && (
                    <a
                      href={p.repo}
                      className="text-sm font-medium text-gray-900 hover:text-gray-700 underline underline-offset-4 decoration-gray-400"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Repo
                    </a>
                  )}
                </div>
              </div>

              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-pink-500/60 via-pink-600/70 to-pink-700/60 opacity-80 group-hover:opacity-100 transition-opacity" />
            </li>
          ))}
        </ul>

        <footer className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-lg bg-pink-600 text-white px-4 py-2 text-sm font-semibold shadow hover:bg-pink-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-700/60"
          >
            View All Projects
          </a>
        </footer>
      </section>
    </main>
  );
}
