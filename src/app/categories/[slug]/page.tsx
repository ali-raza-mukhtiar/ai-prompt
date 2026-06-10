import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { PromptCard } from "@/components/prompts";
import { SITE_NAME } from "@/lib/constants";
import {
  getCategories,
  getCategoryWithCount,
  getPromptsByCategory,
} from "@/lib/data";

type CategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getCategories().map((category) => ({
    slug: category.slug,
  }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryWithCount(slug);

  if (!category) {
    return {
      title: "Category Not Found",
    };
  }

  const description = `${category.description} Browse ${category.promptCount} curated ${category.name.toLowerCase()} prompts.`;

  return {
    title: `${category.name} Prompts`,
    description,
    openGraph: {
      title: `${category.name} Prompts | ${SITE_NAME}`,
      description,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryWithCount(slug);

  if (!category) {
    notFound();
  }

  const prompts = getPromptsByCategory(slug);
  const gridClass = slug === "anime"
    ? "grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
    : "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";

  return (
    <main>
      <Container as="section" className="section" aria-labelledby="category-heading">
        <nav aria-label="Breadcrumb" className="mb-8">
          <Link
            href="/categories"
            className="text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            &larr; All categories
          </Link>
        </nav>

        <header className="stack stack-sm mb-10 max-w-2xl">
          <h1 id="category-heading" className="text-foreground">
            {category.name}
          </h1>
          <p className="text-lead text-muted-foreground">
            {category.description}
          </p>
          <p className="text-sm text-muted">
            {category.promptCount}{" "}
            {category.promptCount === 1 ? "prompt" : "prompts"}
          </p>
        </header>

        {prompts.length > 0 ? (
          <ul className={gridClass}>
            {prompts.map((prompt) => (
              <li key={prompt.id}>
                <PromptCard prompt={prompt} showCategory={false} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-sm text-muted-foreground">
            No prompts in this category yet. Check back soon.
          </p>
        )}
      </Container>
    </main>
  );
}
