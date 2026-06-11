import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getAllTags } from "@/lib/data/prompts";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: `Tags — ${SITE_NAME}`,
  description: "Browse tags used across prompts.",
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <Container as="main" size="md" className="py-12">
      <SectionHeader title="Tags" description="Find prompts by tags." />

      <div className="mt-6 flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Link key={tag} href={`/tags/${encodeURIComponent(tag)}`} className="rounded-full border px-3 py-1 text-sm">{tag}</Link>
        ))}
      </div>
    </Container>
  );
}
