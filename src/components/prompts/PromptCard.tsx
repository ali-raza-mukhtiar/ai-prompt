import { CopyPromptButton } from "@/components/prompts/CopyPromptButton";
import { PromptCardImage } from "@/components/prompts/PromptCardImage";
import { TagList } from "@/components/prompts/TagList";
import { getCategoryName } from "@/lib/data";
import { cn } from "@/lib/cn";
import type { Prompt } from "@/types";
import Link from "next/link";

type PromptCardProps = {
  prompt: Prompt;
  className?: string;
  showCategory?: boolean;
  isFeatured?: boolean;
};

export function PromptCard({
  prompt,
  className,
  showCategory = true,
  isFeatured = false,
}: PromptCardProps) {
  const categoryName = getCategoryName(prompt.category);

  return (
    <article className={cn("relative flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors prompt-card-hover", className)}>
      {isFeatured ? (
        <div className="absolute right-3 top-3 z-10">
          <span className="featured-badge">Featured</span>
        </div>
      ) : null}
      <Link href={`/prompts/${prompt.slug}`} className="no-underline">
        <PromptCardImage src={prompt.image} alt={prompt.title} />

        <div className="flex flex-1 flex-col p-5">
        {showCategory ? (
          <p className="text-xs font-medium text-accent inline-flex items-center">
            <span className="mr-2 inline-block h-2 w-2 rounded-sm bg-accent" />
            {categoryName}
          </p>
        ) : null}

        <h3
          className={cn(
            "text-base font-semibold leading-snug text-foreground",
            showCategory ? "mt-2" : undefined,
          )}
        >
          <span className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2">{prompt.title}</span>
        </h3>

        <TagList tags={prompt.tags} className="mt-3" />

        </div>
      </Link>

      <div className="p-5">
        <div className="mt-auto pt-4">
          <CopyPromptButton text={prompt.prompt} />
        </div>
      </div>
    </article>
  );
}
