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

  const frontMatter = data as BlogItem;

  return (
    <>
      <Header navItems={navItems} />
      <article className="max-w-3xl mx-auto p-8">

        <ClientMdxRenderer mdxSource={mdxSource} />
      </article>
      <Footer />
    </>
  );
}
