import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

function getBlogPosts() {
  const files = fs
    .readdirSync(path.join("./src/app/blog"))
    .filter((filename) => filename.endsWith(".mdx"));

  const posts = files.map((filename) => {
    const markdownFile = fs.readFileSync(
      path.join("./src/app/blog", filename),
      "utf-8"
    );

    const { data: frontMatter } = matter(markdownFile);

    return {
      frontMatter,
      slug: filename.replace(".mdx", ""),
    };
  });

  return posts.sort((a, b) => {
    const dateA = new Date(a.frontMatter.date);
    const dateB = new Date(b.frontMatter.date);
    return dateB.getTime() - dateA.getTime();
  });
}

export default function BlogPage() {
  const posts = getBlogPosts();

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Blog
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Thoughts, stories, and ideas on development, technology, and
            everything in between.
          </p>
        </header>

        {/* Blog posts grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
              <article className="h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-pink-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/20 hover:-translate-y-1">
                {/* Date badge */}
                {post.frontMatter.date && (
                  <div className="inline-flex items-center gap-2 text-sm text-pink-300 mb-4">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <time>{post.frontMatter.date}</time>
                  </div>
                )}

                {/* Title */}
                <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-pink-200 transition-colors">
                  {post.frontMatter.title}
                </h2>

                {/* Description */}
                {post.frontMatter.description && (
                  <p className="text-slate-300 mb-4 line-clamp-3">
                    {post.frontMatter.description}
                  </p>
                )}

                {/* Author */}
                {post.frontMatter.author && (
                  <div className="flex items-center gap-2 text-sm text-slate-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                    <span>{post.frontMatter.author}</span>
                  </div>
                )}

                {/* Read more indicator */}
                <div className="mt-6 flex items-center gap-2 text-pink-400 font-medium group-hover:gap-3 transition-all">
                  Read more
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
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
