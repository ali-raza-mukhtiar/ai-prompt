import Link from "next/link";

import type { BlogPostSummary } from "@/types";

type BlogPostCardProps = {
  post: BlogPostSummary;
};

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      <div className="flex items-center gap-3 text-xs text-muted">
        <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
        <span aria-hidden="true">&middot;</span>
        <span>{post.readTime}</span>
      </div>
      <h3 className="mt-4 text-lg text-foreground">
        <Link
          href={`/blog/${post.slug}`}
          className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {post.title}
        </Link>
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {post.description}
      </p>
    </article>
  );
}
