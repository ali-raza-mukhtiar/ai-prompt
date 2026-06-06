import promptsData from "@/data/prompts.json";
import type { Prompt } from "@/types";

import { createExcerpt } from "./utils";
import { getCategories } from "./categories";

const prompts = promptsData as Prompt[];

export function getPrompts(): Prompt[] {
  return prompts;
}

export function getPromptBySlug(slug: string): Prompt | undefined {
  return prompts.find((prompt) => prompt.slug === slug);
}

export function getPromptById(id: string): Prompt | undefined {
  return prompts.find((prompt) => prompt.id === id);
}

export function getPromptsByCategory(categorySlug: string): Prompt[] {
  return prompts.filter((prompt) => prompt.category === categorySlug);
}

export function getPromptsByTag(tag: string): Prompt[] {
  const normalizedTag = tag.toLowerCase();

  return prompts.filter((prompt) =>
    prompt.tags.some((item) => item.toLowerCase() === normalizedTag),
  );
}

export function getFeaturedPrompts(limit = 4): Prompt[] {
  return prompts.slice(0, limit);
}

export function searchPrompts(query: string): Prompt[] {
  const normalizedQuery = query.trim().toLowerCase();

  if (!normalizedQuery) {
    return prompts;
  }

  return prompts.filter((prompt) => {
    const category = getCategoryName(prompt.category);

    return (
      prompt.title.toLowerCase().includes(normalizedQuery) ||
      prompt.prompt.toLowerCase().includes(normalizedQuery) ||
      category.toLowerCase().includes(normalizedQuery) ||
      prompt.tags.some((tag) => tag.toLowerCase().includes(normalizedQuery))
    );
  });
}

export function getPromptExcerpt(prompt: Prompt): string {
  return createExcerpt(prompt.prompt);
}

export function getCategoryName(categorySlug: string): string {
  const category = getCategories().find((item) => item.slug === categorySlug);

  return category?.name ?? categorySlug;
}
