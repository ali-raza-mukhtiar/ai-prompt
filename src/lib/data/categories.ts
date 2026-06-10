import categoriesData from "@/data/categories.json";
import animePrompts from "@/data/prompts/anime.json";
import realisticPortraitPrompts from "@/data/prompts/realistic-portrait.json";
import cinematicPrompts from "@/data/prompts/cinematic.json";
import fantasyPrompts from "@/data/prompts/fantasy.json";
import architecturePrompts from "@/data/prompts/architecture.json";
import characterDesignPrompts from "@/data/prompts/character-design.json";
import productPhotographyPrompts from "@/data/prompts/product-photography.json";
import logoDesignPrompts from "@/data/prompts/logo-design.json";
import vehiclesPrompts from "@/data/prompts/vehicles.json";
import landscapesPrompts from "@/data/prompts/landscapes.json";
import wallpapersPrompts from "@/data/prompts/wallpapers.json";
import type { Category, CategoryWithCount, Prompt } from "@/types";

const categories = categoriesData as Category[];
const prompts = ([
  ...animePrompts,
  ...realisticPortraitPrompts,
  ...cinematicPrompts,
  ...fantasyPrompts,
  ...architecturePrompts,
  ...characterDesignPrompts,
  ...productPhotographyPrompts,
  ...logoDesignPrompts,
  ...vehiclesPrompts,
  ...landscapesPrompts,
  ...wallpapersPrompts,
] as unknown) as Prompt[];

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
