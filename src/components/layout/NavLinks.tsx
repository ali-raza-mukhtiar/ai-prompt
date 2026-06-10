"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

type NavLinksProps = {
  items: NavItem[];
  className?: string;
  linkClassName?: string;
  onLinkClick?: () => void;
};

const baseLink =
  "text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 nav-link";

export function NavLinks({
  items,
  className,
  linkClassName,
  onLinkClick,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <ul className={cn("flex", className)}>
      {items.map((item) => {
        const active = pathname === item.href || pathname?.startsWith(item.href + "/");

        return (
          <li key={item.href}>
            <Link
              href={item.href}
              className={cn(baseLink, active ? "nav-link--active" : "", linkClassName)}
              onClick={onLinkClick}
            >
              {item.label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
