import { BlogItem } from "@/types/blog";
import Link from "next/link";

interface BlogCardProps {
  post: BlogItem;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link href={`/blog/${post.slug}`} className="block">
      <div className="w-full bg-card rounded-xl p-4 flex flex-col items-start gap-4 transition-transform hover:-translate-y-1">
        <h3 className="text-2xl font-semibold">{post.title}</h3>
        <p className="text-primary font-medium">{post.excerpt}</p>
      </div>
    </Link>
  );
};
