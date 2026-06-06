import categoriesData from "@/data/categories.json";
import promptsData from "@/data/prompts.json";
import type { Category, CategoryWithCount, Prompt } from "@/types";

const categories = categoriesData as Category[];
const prompts = promptsData as Prompt[];

export function getCategories(): Category[] {
  return categories;
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((category) => category.slug === slug);
}

export function getCategoryWithCount(slug: string): CategoryWithCount | undefined {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return undefined;
  }

  return {
    ...category,
    promptCount: getPromptCountByCategory(slug),
  };
}

export function getCategoriesWithCount(): CategoryWithCount[] {
  return categories.map((category) => ({
    ...category,
    promptCount: getPromptCountByCategory(category.slug),
  }));
}

export function getPopularCategories(limit?: number): CategoryWithCount[] {
  const sorted = getCategoriesWithCount().sort(
    (a, b) => b.promptCount - a.promptCount,
  );

  return limit ? sorted.slice(0, limit) : sorted;
}

function getPromptCountByCategory(slug: string): number {
  return prompts.filter((prompt) => prompt.category === slug).length;
}
