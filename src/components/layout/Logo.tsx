import Link from "next/link";

import { cn } from "@/lib/cn";
import { SITE_NAME } from "@/lib/constants";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "text-base font-semibold tracking-tight text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        className,
      )}
    >
      {SITE_NAME}
    </Link>
  );
}
