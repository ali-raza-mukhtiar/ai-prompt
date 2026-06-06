import { Container } from "@/components/layout/Container";
import { CategoryCard } from "@/components/home/CategoryCard";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { getPopularCategories } from "@/lib/data";

export function PopularCategoriesSection() {
  const categories = getPopularCategories();

  return (
    <section
      className="border-y border-border bg-surface"
      aria-labelledby="popular-categories-heading"
    >
      <Container className="section">
        <SectionHeader
          id="popular-categories-heading"
          title="Popular categories"
          description="Explore prompts organized by the work you do every day."
          viewAllHref="/categories"
          className="mb-10"
        />

        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <li key={category.slug}>
              <CategoryCard category={category} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
