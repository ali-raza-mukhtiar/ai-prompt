import type { Metadata } from "next";

import {
  CtaSection,
  FeaturedPromptsSection,
  HeroSection,
  LatestBlogPostsSection,
  PopularCategoriesSection,
} from "@/components/home";
import { SITE_DESCRIPTION, SITE_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Discover High-Quality AI Image Prompts",
  description: SITE_DESCRIPTION,
  openGraph: {
    title: `Discover High-Quality AI Image Prompts | ${SITE_NAME}`,
    description: SITE_DESCRIPTION,
    type: "website",
  },
};

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedPromptsSection />
      <PopularCategoriesSection />
      <LatestBlogPostsSection />
      <CtaSection />
    </main>
  );
}
