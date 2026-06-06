import Link from "next/link";

import { CopyPromptButton } from "@/components/prompts/CopyPromptButton";
import { PromptCardImage } from "@/components/prompts/PromptCardImage";
import { TagList } from "@/components/prompts/TagList";
import { getCategoryName } from "@/lib/data";
import { cn } from "@/lib/cn";
import type { Prompt } from "@/types";

type PromptCardProps = {
  prompt: Prompt;
  className?: string;
  showCategory?: boolean;
};

export function PromptCard({
  prompt,
  className,
  showCategory = true,
}: PromptCardProps) {
  const categoryName = getCategoryName(prompt.category);

  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors hover:border-muted",
        className,
      )}
    >
      <PromptCardImage src={prompt.image} alt={prompt.title} />

      <div className="flex flex-1 flex-col p-5">
        {showCategory ? (
          <p className="text-xs font-medium text-muted">{categoryName}</p>
        ) : null}

        <h3
          className={cn(
            "text-base font-semibold leading-snug text-foreground",
            showCategory ? "mt-2" : undefined,
          )}
        >
          <Link
            href={`/prompts/${prompt.slug}`}
            className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
          >
            {prompt.title}
          </Link>
        </h3>

        <TagList tags={prompt.tags} className="mt-3" />

        <div className="mt-auto pt-4">
          <CopyPromptButton text={prompt.prompt} />
        </div>
      </div>
    </article>
  );
}
