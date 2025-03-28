import { BlogItem } from "@/types/blog";
import { BlogCard } from "./ui/CardBlogItem";

interface BlogProps {
  posts?: BlogItem[];
}

export const Blog = ({ posts }: BlogProps) => {
  return (
    <section id="blog" className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-foreground mb-12">
          Il mio Blog
        </h2>
        <div className="grid grid-cols-1 gap-y-8">
          {posts?.map((post, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 shadow-md hover:shadow-lg transition"
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
