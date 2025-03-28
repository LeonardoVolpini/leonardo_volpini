import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import Blog from "@/components/Blog";
import { BlogItem } from "@/types/blog";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { navItems } from '@/utils/consts'
import Head from "next/head";

export default async function BlogPage() {
  const postsDirectory = path.join(process.cwd(), "content", "blog");
  const filenames = await fs.readdir(postsDirectory);

  const posts: BlogItem[] = await Promise.all(
    filenames.map(async (filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = await fs.readFile(filePath, "utf8");
      const { data } = matter(fileContents);
      return data as BlogItem;
    })
  );

  return (
    <>
      <Head>
        <title>Blog - Leonardo Volpini</title>
        <meta name="description" content="Leonardo Volpini - articoli scritti" />
        <meta property="og:title" content="Blog - Leonardo Volpini" />
        <meta property="og:description" content="Leonardo Volpini - articoli scritti" />
      </Head>
      <Header navItems={navItems} />
      <Blog posts={posts} />
      <Footer />
    </>
  );
}

