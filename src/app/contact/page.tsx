import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { SITE_NAME } from "@/lib/constants";

export const metadata = {
  title: `Contact — ${SITE_NAME}`,
  description: `Get in touch with ${SITE_NAME}. Send questions, feedback, or templates.`,
};

export default function ContactPage() {
  return (
    <Container as="main" size="md" className="py-12">
      <SectionHeader
        title="Contact"
        description={`Questions, feedback, or partnership inquiries — reach out to ${SITE_NAME}.`}
      />

      <div className="mt-8">
        <form
          action="https://formsubmit.co/contact@promptbase.com"
          method="POST"
          className="grid gap-6"
        >
          <input type="hidden" name="_subject" value={`Contact form — ${SITE_NAME}`} />
          <input type="hidden" name="_template" value="table" />

          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Name
            </label>
            <input
              name="name"
              type="text"
              required
              className="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Email
            </label>
            <input
              name="email"
              type="email"
              required
              className="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-foreground">
              Message
            </label>
            <textarea
              name="message"
              rows={6}
              required
              className="mt-2 block w-full rounded-md border border-border bg-surface px-3 py-2 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              placeholder="How can we help?"
            />
          </div>

          <div className="flex items-center justify-end">
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-accent"
            >
              Send message
            </button>
          </div>
        </form>

        <p className="mt-6 text-sm text-muted-foreground">
          We aim to respond within 2 business days. For press or partnership
          inquiries, include the nature of the request and desired timelines.
        </p>
      </div>
    </Container>
  );
}
