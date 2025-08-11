"use client";

import { useMemo, useState } from "react";
import Fuse from "fuse.js";
import productsData, { type Product } from "@/lib/products";
import ProductCard from "@/components/ProductCard";
import TagFilter from "@/components/TagFilter";
import SearchBar from "@/components/SearchBar";

export default function HomePageClient() {
  const [activeTags, setActiveTags] = useState<string[]>([]);
  const [q, setQ] = useState("");

  // Build Fuse index once
  const fuse = useMemo(
    () =>
      new Fuse(productsData, {
        keys: ["title", "brand", "tags"],
        threshold: 0.35,
        ignoreLocation: true,
      }),
    []
  );

  // Search first
  const searched: Product[] = useMemo(() => {
    const term = q.trim();
    if (!term) return productsData;
    return fuse.search(term).map((r) => r.item as Product);
  }, [q, fuse]);

  // Then filter by tags
  const filtered = useMemo(() => {
    if (!activeTags.length) return searched;
    return searched.filter((p) => activeTags.every((t) => p.tags?.includes(t)));
  }, [searched, activeTags]);

  return (
    <>
      <section className="mt-8 sm:mt-12 px-4 sm:px-6 lg:px-8">
        <SearchBar value={q} onChange={setQ} />
        <div className="mt-3">
          <TagFilter onChange={setActiveTags} />
        </div>
      </section>

      <section id="products" className="mt-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((p) => (
            <ProductCard key={p.id} {...p} />
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="mt-6 text-sm text-gray-500">
            No products match your search and filters.
          </p>
        )}
      </section>
    </>
  );
}
