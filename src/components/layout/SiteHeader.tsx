import { Container } from "@/components/layout/Container";
import { Logo } from "@/components/layout/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";
import { NavLinks } from "@/components/layout/NavLinks";
import { mainNavigation } from "@/data/navigation";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <Container className="relative flex h-16 items-center justify-between">
        <Logo />

        <nav
          className="hidden md:block"
          aria-label="Main navigation"
        >
          <NavLinks
            items={mainNavigation}
            className="items-center gap-8"
          />
        </nav>

        <MobileMenu items={mainNavigation} />
      </Container>
    </header>
  );
}
