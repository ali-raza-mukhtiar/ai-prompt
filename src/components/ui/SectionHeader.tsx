import Link from "next/link";

import { cn } from "@/lib/cn";

type SectionHeaderProps = {
  id?: string;
  title: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  className?: string;
};

export function SectionHeader({
  id,
  title,
  description,
  viewAllHref,
  viewAllLabel = "View all",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between",
        className,
      )}
    >
      <div className="stack stack-sm max-w-2xl">
        <h2 id={id} className="text-foreground">
          {title}
        </h2>
        {description ? (
          <p className="text-base text-muted-foreground">{description}</p>
        ) : null}
      </div>

      {viewAllHref ? (
        <Link
          href={viewAllHref}
          className="text-sm font-medium text-accent hover:text-accent/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
        >
          {viewAllLabel}
        </Link>
      ) : null}
    </div>
  );
}
