import { getBlogs, getCategories, getPrompts } from "@/lib/data";

function toUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"}${path}`;
}

export async function GET() {
  const blogs = getBlogs();
  const categories = getCategories();

  const staticUrls = ["/", "/categories", "/about", "/contact", "/blog"];

  const urls = [] as string[];

  staticUrls.forEach((p) => urls.push(toUrl(p)));

  blogs.forEach((b) => urls.push(toUrl(`/blog/${b.slug}`)));
  categories.forEach((c) => urls.push(toUrl(`/categories/${c.slug}`)));
  // include prompt detail pages
  getPrompts().forEach((p) => urls.push(toUrl(`/prompts/${p.slug}`)));

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${urls
      .map(
        (u) => `
      <url>
        <loc>${u}</loc>
      </url>`,
      )
      .join("")}
  </urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
