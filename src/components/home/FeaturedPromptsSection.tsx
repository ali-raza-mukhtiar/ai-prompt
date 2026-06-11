import { Container } from "@/components/layout/Container";
import { PromptCard } from "@/components/prompts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedPrompts } from "@/lib/data";

export function FeaturedPromptsSection() {
  const prompts = getFeaturedPrompts(15);

  return (
    <section
      className="bg-background"
      aria-labelledby="viral-prompts-heading"
    >
      <Container className="section">
        <SectionHeader
          id="viral-prompts-heading"
          title="Viral image prompts"
          description="Curated examples and image previews from our collection."
          className="mb-10"
        />

        <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
          {prompts.map((prompt) => (
            <li key={prompt.id}>
              <PromptCard prompt={prompt} isFeatured />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
