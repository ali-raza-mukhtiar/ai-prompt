import { Container } from "@/components/layout/Container";
import { BlogPostCard } from "@/components/home/BlogPostCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getLatestBlogs } from "@/lib/data";

export function LatestBlogPostsSection() {
  const posts = getLatestBlogs(3);

  return (
    <section
      className="bg-background"
      aria-labelledby="latest-blog-heading"
    >
      <Container className="section">
        <SectionHeader
          id="latest-blog-heading"
          title="Latest from the blog"
          description="Practical guides on writing, organizing, and sharing prompts."
          viewAllHref="/blog"
          className="mb-10"
        />

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <li key={post.slug}>
              <BlogPostCard post={post} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
