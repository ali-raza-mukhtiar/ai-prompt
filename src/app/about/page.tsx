import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_NAME, SITE_DESCRIPTION } from "@/lib/constants";

export const metadata = {
  title: `About — ${SITE_NAME}`,
  description: `About ${SITE_NAME}: mission, focus, and future plans. ${SITE_DESCRIPTION}`,
};

export default function AboutPage() {
  return (
    <Container as="main" size="md" className="py-12">
      <SectionHeader
        title="About"
        description={`Learn why ${SITE_NAME} exists and what you can find here.`}
      />

      <article className="mt-8 prose prose-invert max-w-none">
        <section>
          <h2>Mission</h2>
          <p>
            {SITE_NAME} helps teams capture, publish, and reuse the highest-value
            prompts and writing patterns so product, marketing, and research
            teams ship better work faster. We focus on clarity, reproducibility,
            and practical templates that scale across real teams.
          </p>
        </section>

        <section>
          <h2>Why this website exists</h2>
          <p>
            In practice, prompt work is messy: useful prompts are scattered across
            notes, chat threads, and personal files. That makes it hard for teams
            to iterate or evaluate what actually works. {SITE_NAME} centralizes
            proven prompts, guides, and examples so teammates can find and
            adapt what they need without relearning the same lessons.
          </p>
        </section>

        <section>
          <h2>What you can find</h2>
          <ul>
            <li>Curated prompt templates organized by job-to-be-done and category.</li>
            <li>Concise usage notes and examples that show expected input and output.</li>
            <li>Guides and best practices in the blog for operating prompt-driven workflows.</li>
            <li>Searchable categories and tags so teams can adapt templates quickly.</li>
          </ul>
        </section>

        <section>
          <h2>Future plans</h2>
          <p>
            We&apos;re focused on three near-term improvements: better team libraries
            so organizations can share private templates, analytics to measure
            which prompts produce the best results, and export tools to integrate
            templates into common authoring and automation workflows.
          </p>
          <p>
            If you have suggestions, templates to share, or a workflow we should
            support, get in touch — we build this with product teams in the open.
          </p>
        </section>
      </article>
    </Container>
  );
}
