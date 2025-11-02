import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "~/components/ui/button";
import Link from "next/link";

const options = {
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

export async function generateStaticParams() {
  const files = fs
    .readdirSync(path.join("./src/app/blog"))
    .filter((filename) => filename.endsWith(".mdx"));

  return files.map((filename) => ({
    slug: filename.replace(".mdx", ""),
  }));
}

function getPost({ slug }: { slug: string }) {
  const markdownFile = fs.readFileSync(
    path.join("./src/app/blog", `${slug}.mdx`),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownFile);

  return {
    frontMatter,
    slug,
    content,
  };
}

const mdxComponents = {
  Button,

  h1: (props: React.ComponentProps<"h1">) => (
    <h1
      {...props}
      className="text-4xl md:text-5xl font-bold mt-8 mb-4 text-white"
    />
  ),

  h2: (props: React.ComponentProps<"h2">) => (
    <h2
      {...props}
      className="text-3xl md:text-4xl font-semibold mt-12 mb-4 text-pink-50"
    />
  ),

  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      {...props}
      className="text-2xl md:text-3xl font-semibold mt-8 mb-3 text-pink-100"
    />
  ),

  a: (props: React.ComponentProps<"a">) => (
    <a
      {...props}
      target={props.target ?? "_blank"}
      rel={props.rel ?? "noopener noreferrer"}
      className="text-pink-300 hover:text-pink-200 underline underline-offset-4 decoration-pink-400/50 hover:decoration-pink-300 transition-colors font-medium"
    />
  ),

  img: (props: React.ComponentProps<"img">) => (
    <img
      {...props}
      loading={props.loading ?? "lazy"}
      alt={props.alt ?? "Blog Image"}
      className="rounded-2xl shadow-2xl my-8 border border-white/10"
    />
  ),

  p: (props: React.ComponentProps<"p">) => (
    <p {...props} className="text-lg leading-relaxed text-slate-100 my-6" />
  ),

  ul: (props: React.ComponentProps<"ul">) => (
    <ul {...props} className="space-y-2 my-6 ml-6" />
  ),

  ol: (props: React.ComponentProps<"ol">) => (
    <ol {...props} className="space-y-2 my-6 ml-6" />
  ),

  li: (props: React.ComponentProps<"li">) => (
    <li {...props} className="text-lg text-slate-100 marker:text-pink-300" />
  ),

  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      {...props}
      className="border-l-4 border-pink-400 pl-6 py-2 my-8 italic text-slate-200 bg-white/5 rounded-r-lg"
    />
  ),

  pre: (props: React.ComponentProps<"pre">) => (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-pink-300/30 bg-black/80 shadow-2xl">
      <pre {...props} className="overflow-x-auto p-6 text-sm md:text-base" />
    </div>
  ),

  code: (props: React.ComponentProps<"code">) => (
    <code
      {...props}
      className="rounded-md bg-pink-500/20 px-2 py-1 text-pink-200 font-mono text-sm border border-pink-400/30"
    />
  ),

  hr: (props: React.ComponentProps<"hr">) => (
    <hr {...props} className="my-12 border-pink-400/30" />
  ),

  table: (props: React.ComponentProps<"table">) => (
    <div className="my-8 overflow-x-auto rounded-xl border border-pink-300/30">
      <table {...props} className="w-full border-collapse" />
    </div>
  ),

  th: (props: React.ComponentProps<"th">) => (
    <th
      {...props}
      className="bg-pink-500/20 px-4 py-3 text-left font-semibold text-pink-100 border-b border-pink-300/30"
    />
  ),

  td: (props: React.ComponentProps<"td">) => (
    <td
      {...props}
      className="px-4 py-3 text-slate-100 border-b border-pink-300/10"
    />
  ),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Post({ params }: any) {
  const props = getPost(await params);

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Back button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-pink-300 hover:text-pink-200 transition-colors mb-8 group"
        >
          <svg
            className="w-5 h-5 group-hover:-translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Article header */}
        <header className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {props.frontMatter.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-slate-300">
            {props.frontMatter.author && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-pink-400"
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
                <span>{props.frontMatter.author}</span>
              </div>
            )}
            {props.frontMatter.date && (
              <div className="flex items-center gap-2">
                <svg
                  className="w-5 h-5 text-pink-400"
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
                <span>{props.frontMatter.date}</span>
              </div>
            )}
          </div>
          {props.frontMatter.description && (
            <p className="mt-6 text-xl text-slate-200 leading-relaxed">
              {props.frontMatter.description}
            </p>
          )}
        </header>

        {/* Article content */}
        <article className="prose prose-lg prose-slate prose-invert max-w-none">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-white/10">
            <MDXRemote
              source={props.content}
              components={mdxComponents}
              options={options}
            />
          </div>
        </article>
      </div>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const blog = getPost(await params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
