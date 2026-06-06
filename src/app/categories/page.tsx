import type { Metadata } from "next";

import { CategoryCard } from "@/components/categories";
import { Container } from "@/components/layout/Container";
import { getCategoriesWithCount } from "@/lib/data";
import { SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Categories",
  description:
    "Browse AI prompts organized by category — marketing, writing, development, design, and more.",
  openGraph: {
    title: `Categories | ${SITE_NAME}`,
    description:
      "Browse AI prompts organized by category — marketing, writing, development, design, and more.",
    type: "website",
  },
};

export default function CategoriesPage() {
  const categories = getCategoriesWithCount();

  return (
    <main>
      <Container as="section" className="section" aria-labelledby="categories-heading">
        <header className="stack stack-sm mb-10 max-w-2xl">
          <h1 id="categories-heading" className="text-foreground">
            Categories
          </h1>
          <p className="text-lead text-muted-foreground">
            Find prompts organized by the type of work you do. Each category
            groups templates you can copy and adapt for your team.
          </p>
        </header>

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </main>
  );
}
