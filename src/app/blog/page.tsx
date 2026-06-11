import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { BlogPostCard } from "@/components/home/BlogPostCard";
import { getLatestBlogs } from "@/lib/data/blogs";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: `Blog — ${SITE_NAME}`,
  description: `Latest articles and guides about prompts, best practices, and team workflows.`,
};

export default function BlogPage() {
  const posts = getLatestBlogs();

  return (
    <Container as="main" size="lg" className="py-12">
      <SectionHeader
        title="Blog"
        description="Practical articles about building and operating prompt-driven workflows."
        viewAllHref="/blog"
        viewAllLabel="All posts"
      />

      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>

      <p className="mt-12 text-sm text-muted-foreground">
        Enjoyed these posts? Follow {SITE_NAME} for updates.
      </p>
    </Container>
  );
}
