import fs from "fs";
import path from "path";
import matter from "gray-matter";

import Link from "next/link";

export default function Home() {
  const blogDir = "./src/app/blog";

  const files = fs.readdirSync(blogDir);
  console.log(files);

  const blogs = files
    .filter((filename) => {
      const fullPath = path.join(blogDir, filename);
      return fs.statSync(fullPath).isFile() && filename.endsWith(".mdx");
    })
    .map((filename) => {
      const fileContent = fs.readFileSync(
        path.join(blogDir, filename),
        "utf-8"
      );

      const { data: frontMatter } = matter(fileContent);

      return {
        meta: frontMatter,
        slug: filename.replace(".mdx", ""),
      };
    });
  console.log(blogs);
  return (
    <main className="flex flex-col min-h-screen max-h-fit">
      <div className="flex justify-center items-center pt-2">
        <h1 className="text-5xl font-bold font-sans">The Cubbyhole journal</h1>
      </div>

      <section className="py-10">
        <h2 className="text-2xl font-bold pl-2">Latest Posts</h2>

        <div className="py-2 pl-4 pr-2">
          {blogs.map((blog) => (
            <Link href={`/blog/${blog.slug}`} passHref key={blog.slug}>
              <div className="py-2 flex justify-between align-middle gap-2">
                <div>
                  <h3 className="text-lg font-bold">{blog.meta.title}</h3>
                  <p className="text-black">{blog.meta.description}</p>
                </div>
                <div className="my-auto text-black">
                  <p>{blog.meta.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
