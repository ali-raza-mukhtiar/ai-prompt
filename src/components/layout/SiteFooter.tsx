import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { NavLinks } from "@/components/layout/NavLinks";
import { mainNavigation } from "@/data/navigation";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-border site-footer">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <div className="stack stack-sm max-w-sm">
            <Logo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              {SITE_DESCRIPTION}
            </p>
          </div>

          <nav
            aria-label="Footer navigation"
            className="md:justify-self-end lg:col-start-3 lg:justify-self-end"
          >
            <p className="mb-4 text-sm font-medium text-foreground">
              Navigation
            </p>
            <NavLinks
              items={mainNavigation}
              className="flex-col gap-3"
              linkClassName="block w-fit"
            />
          </nav>
        </div>

        <div className="mt-10 border-t border-border pt-6">
          <p className="text-sm text-muted">
            &copy; {year} {SITE_NAME}. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
