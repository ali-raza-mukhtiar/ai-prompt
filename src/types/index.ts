export type NavItem = {
  label: string;
  href: string;
};

export type Prompt = {
  id: string;
  title: string;
  slug: string;
  category: string;
  prompt: string;
  image: string;
  tags: string[];
};

export type Category = {
  name: string;
  slug: string;
  description: string;
};

export type BlogPost = {
  title: string;
  slug: string;
  description: string;
  content: string;
  publishedAt: string;
};

export type CategoryWithCount = Category & {
  promptCount: number;
};

export type BlogPostSummary = BlogPost & {
  readTime: string;
};
