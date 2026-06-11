import { NextResponse } from "next/server";
import { searchPrompts, getPromptExcerpt, getCategoryName } from "@/lib/data/prompts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const q = searchParams.get("q") ?? "";

  const results = searchPrompts(q)
    .slice(0, 10)
    .map((p) => ({
      id: p.id,
      title: p.title,
      slug: p.slug,
      image: p.image,
      category: p.category,
      categoryName: getCategoryName(p.category),
      excerpt: getPromptExcerpt(p),
    }));

  return NextResponse.json(results);
}
