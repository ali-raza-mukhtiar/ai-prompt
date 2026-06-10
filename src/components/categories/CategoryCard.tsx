import Link from "next/link";

import { cn } from "@/lib/cn";
import type { CategoryWithCount } from "@/types";

type CategoryCardProps = {
  category: CategoryWithCount;
  className?: string;
};

export function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <article
      className={cn(
        "category-card group flex h-full flex-col rounded-lg border border-border bg-surface p-6 transition-colors hover:border-muted",
        className,
      )}
    >
      <h2 className="text-lg font-semibold text-foreground">
        <Link
          href={`/categories/${category.slug}`}
          className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          <span className="category-icon" aria-hidden />
          {category.name}
        </Link>
      </h2>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>
      <p className="mt-4 text-xs font-medium text-muted">
        {category.promptCount}{" "}
        {category.promptCount === 1 ? "prompt" : "prompts"}
      </p>
    </article>
  );
}
