import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function HeroSection() {
  return (
    <section className="border-b border-border bg-surface" aria-labelledby="hero-heading">
      <Container className="section">
        <div className="mx-auto max-w-3xl text-center">
          <h1 id="hero-heading" className="text-foreground">
            Discover High-Quality AI Image Prompts
          </h1>
          <p className="text-lead mx-auto mt-6 max-w-2xl text-muted-foreground">
            Browse curated prompts and image examples for Midjourney, ChatGPT
            Image, Stable Diffusion and more.
          </p>

          <form
            action="/categories"
            method="get"
            role="search"
            className="mx-auto mt-10 flex max-w-xl flex-col gap-3 sm:flex-row"
          >
            <label htmlFor="prompt-search" className="sr-only">
              Search prompts
            </label>
            <input
              id="prompt-search"
              name="q"
              type="search"
              placeholder="Search prompts by title, category, or tag..."
              className="h-11 flex-1 rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            />
            <Button type="submit" className="h-11 shrink-0 px-6">
              Search
            </Button>
          </form>

          <div className="mt-6">
            <Button href="/categories" variant="secondary">
              Browse all prompts
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
