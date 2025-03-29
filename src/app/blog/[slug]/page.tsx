import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import { BlogItem } from "@/types/blog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts';
import ClientMdxRenderer from "@/components/utils/ClientMdxRenderer";

interface Params {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content", "blog");
  const filenames = await fs.readdir(postsDirectory);

  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    return { slug };
  });
}

export default async function PostPage({ params }: Params) {
  const { slug } = await params;

  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);

  const mdxSource = await serialize(content);
  // Convertiamo mdxSource in una stringa per poterlo passare al client component
  const serializedMdxSource = JSON.stringify(mdxSource);

  const frontMatter = data as BlogItem;

  return (
    <>
      <Header navItems={navItems} />
      <article className="max-w-3xl mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
        <p className="text-muted-foreground mb-8">{frontMatter.excerpt}</p>

        <ClientMdxRenderer serializedMdxSource={serializedMdxSource} />
      </article>
      <Footer />
    </>
  );
}
