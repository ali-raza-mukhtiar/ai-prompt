import { Container } from "@/components/layout/Container";
import { PromptCardImage } from "@/components/prompts/PromptCardImage";
import { CopyPromptButton } from "@/components/prompts/CopyPromptButton";
import { TagList } from "@/components/prompts/TagList";
import { getPromptBySlug, getPromptExcerpt, getPrompts } from "@/lib/data/prompts";
import { SITE_NAME } from "@/lib/constants";
import { notFound } from "next/navigation";

// Use `any` for params to align with Next.js generated PageProps
/* eslint-disable @typescript-eslint/no-explicit-any */
export async function generateMetadata(props: any) {
  const params = props?.params as { slug: string };
  const prompt = getPromptBySlug(params.slug);

  if (!prompt) {
    return {
      title: `Prompt not found — ${SITE_NAME}`,
      description: SITE_NAME,
    };
  }

  const description = getPromptExcerpt(prompt);

  const seoTitle = `${prompt.title} Prompt | Free AI Image Prompt`;

  return {
    title: seoTitle,
    description,
    openGraph: {
      title: seoTitle,
      description,
      images: [prompt.image],
    },
    twitter: {
      title: seoTitle,
      description,
      images: [prompt.image],
    },
  };
}

export function generateStaticParams() {
  return getPrompts().map((p) => ({ slug: p.slug }));
}

export default function PromptDetailPage(props: any) {
  const params = props?.params as { slug: string };
  const prompt = getPromptBySlug(params.slug);

  if (!prompt) return notFound();

  return (
    <Container as="main" size="md" className="py-12">
      {/* Schema.org JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: prompt.title,
            description: getPromptExcerpt(prompt),
            image: prompt.image,
            keywords: prompt.tags?.join(", ") || undefined,
          }),
        }}
      />
      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <PromptCardImage src={prompt.image} alt={prompt.title} />
        </div>

        <div>
          <h1 className="text-2xl font-bold">{prompt.title}</h1>

          <div className="mt-4">
            <TagList tags={prompt.tags} />
          </div>

          <div className="mt-6">
            <CopyPromptButton text={prompt.prompt} />
          </div>

          <article className="prose prose-invert mt-6 max-w-none">
            <h2 className="sr-only">Prompt</h2>
            <pre className="whitespace-pre-wrap bg-background rounded-md p-4 text-sm">{prompt.prompt}</pre>

            {prompt.negativePrompt ? (
              <section className="mt-6">
                <h3 className="text-sm font-semibold">Negative prompt</h3>
                <pre className="whitespace-pre-wrap bg-background rounded-md p-4 text-sm mt-2">{prompt.negativePrompt}</pre>
              </section>
            ) : null}
          </article>
        </div>
      </div>
    </Container>
  );
}
