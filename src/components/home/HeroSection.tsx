"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import Link from "next/link";

type SearchResult = {
  id: string;
  title: string;
  slug: string;
  image?: string;
  category: string;
  categoryName?: string;
  excerpt?: string;
};

export function HeroSection() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    const q = query.trim();

    if (!q) {
      setResults([]);
      setLoading(false);
      return;
    }

    const t = setTimeout(async () => {
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();
      setLoading(true);

      try {
        const res = await fetch(`/api/search?q=${encodeURIComponent(q)}`, {
          signal: controllerRef.current.signal,
        });
        if (!res.ok) throw new Error("Search failed");
        const data: SearchResult[] = await res.json();
        setResults(data);
      } catch (e) {
        if (e instanceof DOMException && e.name === "AbortError") {
          // request was aborted, ignore
        } else {
          console.error(e);
        }
      } finally {
        setLoading(false);
      }
    }, 250);

    return () => clearTimeout(t);
  }, [query]);

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

          <div className="mx-auto mt-10 max-w-xl">
            <label htmlFor="prompt-search" className="sr-only">
              Search prompts
            </label>
            <div className="flex w-full gap-3">
              <input
                id="prompt-search"
                name="q"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search prompts by title, category, or tag..."
                className="h-11 flex-1 rounded-md border border-border bg-background px-4 text-sm text-foreground placeholder:text-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
              />
              <Button
                type="button"
                className="h-11 shrink-0 px-6"
                onClick={async () => {
                  if (!query.trim()) return;
                  setLoading(true);
                  try {
                    const res = await fetch(`/api/search?q=${encodeURIComponent(query)}`);
                    const data = await res.json();
                    setResults(data);
                  } catch (e) {
                    console.error(e);
                  } finally {
                    setLoading(false);
                  }
                }}
              >
                Search
              </Button>
            </div>

            <div className="relative mt-2 text-left">
              {loading ? (
                <p className="mt-2 text-sm text-muted">Searching…</p>
              ) : null}

              {results.length > 0 ? (
                <ul className="mt-3 divide-y rounded-md border border-border bg-surface">
                  {results.map((r) => (
                    <li key={r.slug ?? r.id} className="flex items-center gap-3 p-3">
                      <Link href={`/prompts/${r.slug}`} className="flex items-center gap-3 no-underline">
                        <div className="relative h-12 w-20 shrink-0 overflow-hidden rounded-sm bg-muted">
                          {r.image ? (
                            <Image src={r.image} alt={r.title} fill className="object-cover" />
                          ) : null}
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{r.title}</p>
                          <p className="text-xs text-muted-foreground">{r.categoryName}</p>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : query && !loading ? (
                <p className="mt-2 text-sm text-muted">No results found.</p>
              ) : null}
            </div>
          </div>

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
