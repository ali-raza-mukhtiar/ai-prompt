import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { getBlogs, getBlogBySlug } from "@/lib/data/blogs";
import { getReadTime } from "@/lib/data/utils";
import { SITE_NAME } from "@/lib/constants";

// Use inline param types to align with Next.js PageProps inference

function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export async function generateStaticParams() {
  const blogs = getBlogs();

  return blogs.map((b) => ({ slug: b.slug }));
}

/* eslint-disable @typescript-eslint/no-explicit-any */
export async function generateMetadata(props: any) {
  const params = props?.params as { slug: string };
  const post = getBlogBySlug(params.slug);

  if (!post) return {};

  return {
    title: `${post.title} — ${SITE_NAME}`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
    },
  };
}

export default function BlogPostPage(props: any) {
  const params = props?.params as { slug: string };
  const post = getBlogBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const readTime = getReadTime(post!.content);

  return (
    <Container as="main" size="md" className="py-12">
      <article className="prose prose-invert max-w-none">
        <header className="mb-6">
          <p className="text-sm text-muted-foreground">
            <time dateTime={post!.publishedAt}>{formatDate(post!.publishedAt)}</time>
            <span aria-hidden="true"> &middot; </span>
            <span>{readTime}</span>
          </p>

          <h1 className="mt-2">{post!.title}</h1>
          <p className="mt-2 text-muted-foreground">{post!.description}</p>
        </header>

        <section>
          {post!.content.split("\n\n").map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </section>
      </article>
    </Container>
  );
}
