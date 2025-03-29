import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import MdxContent from "@/components/utils/MdxContent";
import { BlogItem } from "@/types/blog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), "content", "blog");
  const filenames = await fs.readdir(postsDirectory);
  
  return filenames.map((filename) => {
    const slug = filename.replace(/\.mdx?$/, "");
    return { slug };
  });
}

// Definiamo il tipo dei parametri come unknown, per poi convertirli all'interno della funzione
export default async function PostPage({ params: rawParams }: { params: unknown }) {
  // Risolviamo e facciamo il cast di rawParams a { slug: string }
  // Forziamo l'attesa dei parametri per compatibilità con il deploy su Vercel, altrimenti sarebbe bastato:   const { slug } = await Promise.resolve(params);
  const params = await Promise.resolve(rawParams) as { slug: string };
  const { slug } = params;
  const filePath = path.join(process.cwd(), "content", "blog", `${slug}.mdx`);
  const fileContents = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const mdxSource = await serialize(content);

  const frontMatter = data as BlogItem;

  return (
    <>
    <Header navItems={navItems} />
    <article className="max-w-3xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">{frontMatter.title}</h1>
      <p className="text-muted-foreground mb-8">{frontMatter.excerpt}</p>
      <MdxContent mdxSource={mdxSource} />
    </article>
    <Footer />
    </>
  );
}
