"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/cn";

const PLACEHOLDER_IMAGE = "/images/prompts/realistic-portrait/prompt.svg";

type PromptCardImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function PromptCardImage({ src, alt, className }: PromptCardImageProps) {
  const [imageSrc, setImageSrc] = useState(src);

  return (
    <div
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden bg-background",
        className,
      )}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        onError={() => setImageSrc(PLACEHOLDER_IMAGE)}
      />
    </div>
  );
}
