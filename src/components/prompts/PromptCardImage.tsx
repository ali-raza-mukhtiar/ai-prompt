"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";

const PLACEHOLDER_IMAGE = "/images/prompts/realistic-portrait/prompt.svg";

type PromptCardImageProps = {
  src: string;
  alt: string;
  className?: string;
  variant?: "default" | "tall" | "short";
};
export function PromptCardImage({ src, alt, className, variant = "default" }: PromptCardImageProps) {
  // Prefer WebP variant for performance when source is JPG/PNG. Fall back to original, then placeholder.
  const toWebp = (s: string) => s.replace(/\.(png|jpe?g)$/i, ".webp");
  const initialSrc = /\.(png|jpe?g)$/i.test(src) ? toWebp(src) : src;
  const [imageSrc, setImageSrc] = useState(initialSrc);

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden bg-background",
        variant === "tall" ? "aspect-[3/4]" : variant === "short" ? "aspect-[5/6]" : "aspect-[4/5]",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={alt || "Prompt image"}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        loading="lazy"
        unoptimized
        onError={() => {
          // If webp failed, try original src; otherwise fall back to placeholder
          if (imageSrc !== src && /\.(png|jpe?g)$/i.test(src)) {
            setImageSrc(src);
            return;
          }

          setImageSrc(PLACEHOLDER_IMAGE);
        }}
      />
    </div>
  );
}
