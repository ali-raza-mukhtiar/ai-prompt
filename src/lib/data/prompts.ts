import animePrompts from "@/data/prompts/anime.json";
import realisticPortraitPrompts from "@/data/prompts/realistic-portrait.json";
import cinematicPrompts from "@/data/prompts/cinematic.json";
import fantasyPrompts from "@/data/prompts/fantasy.json";
import architecturePrompts from "@/data/prompts/architecture.json";
import characterDesignPrompts from "@/data/prompts/character-design.json";
import productPhotographyPrompts from "@/data/prompts/product-photography.json";
import logoDesignPrompts from "@/data/prompts/logo-design.json";
import vehiclesPrompts from "@/data/prompts/vehicles.json";
import oldPhotoRestorationPrompts from "@/data/prompts/old-photo-restoration.json";
import landscapesPrompts from "@/data/prompts/landscapes.json";
import wallpapersPrompts from "@/data/prompts/wallpapers.json";
import type { Prompt } from "@/types";

import { createExcerpt } from "./utils";
import { getCategories } from "./categories";

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
  ...oldPhotoRestorationPrompts,
  ...landscapesPrompts,
  ...wallpapersPrompts,
] as unknown) as Prompt[];

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
