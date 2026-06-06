"use client";

import { useCallback, useEffect, useId, useState } from "react";

import { NavLinks } from "@/components/layout/NavLinks";
import { cn } from "@/lib/cn";
import type { NavItem } from "@/types";

type MobileMenuProps = {
  items: NavItem[];
};

function MenuIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M3 5h14M3 10h14M3 15h14"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5l10 10M15 5L5 15"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function MobileMenu({ items }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, close]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className={cn(
          "inline-flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
        )}
        aria-expanded={isOpen}
        aria-controls={menuId}
        aria-label={isOpen ? "Close menu" : "Open menu"}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <CloseIcon /> : <MenuIcon />}
      </button>

      {isOpen ? (
        <nav
          id={menuId}
          aria-label="Mobile navigation"
          className="absolute inset-x-0 top-full border-b border-border bg-surface px-4 py-4"
        >
          <NavLinks
            items={items}
            className="flex-col gap-1"
            linkClassName="block rounded-md px-3 py-2.5 text-foreground hover:bg-background"
            onLinkClick={close}
          />
        </nav>
      ) : null}
    </div>
  );
}
