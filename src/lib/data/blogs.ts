import blogsData from "@/data/blogs.json";
import type { BlogPost, BlogPostSummary } from "@/types";

import { getReadTime, sortByPublishedAt } from "./utils";

const blogs = blogsData as BlogPost[];

export function getBlogs(): BlogPost[] {
  return sortByPublishedAt(blogs);
}

export function getBlogBySlug(slug: string): BlogPost | undefined {
  return blogs.find((blog) => blog.slug === slug);
}

export function getLatestBlogs(limit?: number): BlogPostSummary[] {
  const sorted = getBlogs().map(toBlogSummary);

  return limit ? sorted.slice(0, limit) : sorted;
}

export function toBlogSummary(blog: BlogPost): BlogPostSummary {
  return {
    ...blog,
    readTime: getReadTime(blog.content),
  };
}
