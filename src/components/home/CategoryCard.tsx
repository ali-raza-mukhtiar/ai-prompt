import Link from "next/link";

import type { CategoryWithCount } from "@/types";

type CategoryCardProps = {
  category: CategoryWithCount;
};

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="rounded-lg border border-border bg-surface p-6">
      <h3 className="text-lg text-foreground">
        <Link
          href={`/categories/${category.slug}`}
          className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {category.name}
        </Link>
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {category.description}
      </p>
      <p className="mt-4 text-xs font-medium text-muted">
        {category.promptCount} prompts
      </p>
    </article>
  );
}
