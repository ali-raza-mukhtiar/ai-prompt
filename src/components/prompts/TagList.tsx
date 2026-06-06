import { cn } from "@/lib/cn";

type TagListProps = {
  tags: string[];
  className?: string;
};

export function TagList({ tags, className }: TagListProps) {
  if (tags.length === 0) {
    return null;
  }

  return (
    <ul className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <li
          key={tag}
          className="rounded-md border border-border bg-background px-2 py-0.5 text-xs text-muted-foreground"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}
