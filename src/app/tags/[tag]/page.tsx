import { notFound } from "next/navigation";

import { Container } from "@/components/layout/Container";
import { PromptCard } from "@/components/prompts";
import { getPromptsByTag, getAllTags } from "@/lib/data/prompts";

type TagPageProps = {
  params: Promise<{ tag: string }>;
};

export function generateStaticParams() {
  return getAllTags().map((t) => ({ tag: t }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const decoded = decodeURIComponent(tag);
  const tags = getAllTags();

  if (!tags.includes(decoded)) return notFound();

  const prompts = getPromptsByTag(decoded);

  return (
    <Container as="main" size="lg" className="py-12">
      <h1 className="text-2xl font-bold">Tag: {decoded}</h1>
      <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {prompts.map((p) => (
          <li key={p.id}>
            <PromptCard prompt={p} />
          </li>
        ))}
      </div>
    </Container>
  );
}
