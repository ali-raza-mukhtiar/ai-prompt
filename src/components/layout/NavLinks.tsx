import Link from "next/link";

import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

const linkStyles =
  "text-sm text-muted-foreground hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2";

export function NavLinks({
  items,
  className,
  linkClassName,
  onLinkClick,
}: NavLinksProps) {
  return (
    <ul className={cn("flex", className)}>
      {items.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={cn(linkStyles, linkClassName)}
            onClick={onLinkClick}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
