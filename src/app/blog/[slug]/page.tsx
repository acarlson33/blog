import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remarkGfm from "remark-gfm";

import { MDXRemote } from "next-mdx-remote/rsc";
import { Button } from "~/components/ui/button";

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

  a: (props: React.ComponentProps<"a">) => (
    <a
      {...props}
      target={props.target ?? "_blank"}
      rel={props.rel ?? "noopener noreferrer"}
    />
  ),

  img: (props: React.ComponentProps<"img">) => (
    <img {...props} loading={props.loading ?? "lazy"} alt="Blog Image" />
  ),

  pre: (props: React.ComponentProps<"pre">) => (
    <div className="not-prose my-6 overflow-hidden rounded-xl border border-pink-500/20 bg-black/60">
      <pre {...props} className="overflow-x-auto p-4 text-[0.9em]" />
    </div>
  ),

  code: (props: React.ComponentProps<"code">) => (
    <code {...props} className="rounded bg-white/10 px-1.5 py-0.5" />
  ),
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function Post({ params }: any) {
  const props = getPost(await params);

  return (
    <div className="min-h-screen">
      <article
        className="
          prose prose-sm md:prose-base lg:prose-lg prose-slate !prose-invert
          mx-auto max-w-prose px-4 sm:px-6 py-10
          rounded-2xl bg-white/40 backdrop-blur-sm shadow-md
          [&>h1]:mb-2 [&>h2]:mt-10 [&>h2]:mb-3 [&>h3]:mt-8 [&>h3]:mb-2
          prose-a:text-pink-100 hover:prose-a:text-white prose-a:no-underline hover:prose-a:underline
          prose-code:before:content-[''] prose-code:after:content-[''] prose-code:bg-white/10 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
          prose-img:rounded-xl prose-img:shadow-md
          prose-blockquote:border-l-4 prose-blockquote:border-pink-400 prose-blockquote:opacity-90
          prose-hr:border-pink-400/40
          prose-ul:marker:text-pink-200 prose-ol:marker:text-pink-200
          prose-table:overflow-hidden prose-table:rounded-lg prose-th:bg-white/5 prose-td:bg-white/0
        "
      >
        <h1 className="!mb-2 text-3xl font-bold leading-tight">
          {props.frontMatter.title}
        </h1>

        <MDXRemote
          source={props.content}
          components={mdxComponents}
          options={options}
        />
      </article>
    </div>
  );
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function generateMetadata({ params }: any) {
  const blog = getPost(params);

  return {
    title: blog.frontMatter.title,
    description: blog.frontMatter.description,
  };
}
