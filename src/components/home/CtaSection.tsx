import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";

export function CtaSection() {
  return (
    <section className="bg-foreground" aria-labelledby="cta-heading">
      <Container className="section">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="cta-heading" className="text-2xl font-semibold tracking-tight text-surface md:text-3xl">
            Start building your prompt library
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Save time on repetitive tasks. Use proven prompts or adapt them to
            fit your workflow.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="/categories"
              className="bg-surface text-foreground hover:bg-slate-100"
            >
              Explore prompts
            </Button>
            <Button
              href="/contact"
              variant="secondary"
              className="border-slate-600 bg-transparent text-surface hover:bg-slate-800"
            >
              Get in touch
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
