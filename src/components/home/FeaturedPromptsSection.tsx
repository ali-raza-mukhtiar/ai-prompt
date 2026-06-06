import { Container } from "@/components/layout/Container";
import { PromptCard } from "@/components/prompts";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getFeaturedPrompts } from "@/lib/data";

export function FeaturedPromptsSection() {
  const prompts = getFeaturedPrompts(4);

  return (
    <section
      className="bg-background"
      aria-labelledby="featured-prompts-heading"
    >
      <Container className="section">
        <SectionHeader
          id="featured-prompts-heading"
          title="Featured prompts"
          description="Hand-picked templates used by teams to ship faster."
          viewAllHref="/categories"
          viewAllLabel="View all prompts"
          className="mb-10"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {prompts.map((prompt) => (
            <li key={prompt.id}>
              <PromptCard prompt={prompt} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
