import type { ReactNode } from "react";

import { cn } from "@/lib/cn";

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";

type ContainerProps = {
  children: ReactNode;
  as?: "div" | "section" | "main" | "article";
  size?: ContainerSize;
  className?: string;
};

const sizeClasses: Record<ContainerSize, string> = {
  sm: "max-w-3xl",
  md: "max-w-5xl",
  lg: "max-w-6xl",
  xl: "max-w-7xl",
  full: "max-w-full",
};

export function Container({
  children,
  as: Component = "div",
  size = "lg",
  className,
}: ContainerProps) {
  return (
    <Component
      className={cn("container", sizeClasses[size], className)}
    >
      {children}
    </Component>
  );
}
