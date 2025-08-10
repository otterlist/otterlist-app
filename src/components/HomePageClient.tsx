"use client";

import { useMemo, useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import { products as sampleProducts } from "@/lib/products";
import TagFilter from "./TagFilter";

export default function HomePageClient() {
  const [query, setQuery] = useState("");
  const [activeTags, setActiveTags] = useState<string[]>([]); // <-- multi-select

  // build unique tag list
  const allTags = useMemo(() => {
    const s = new Set<string>();
    for (const p of sampleProducts) (p.tags ?? []).forEach(t => s.add(t));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  // filter by text + ALL selected tags
  const filtered: Product[] = useMemo(() => {
    const q = query.trim().toLowerCase();

    return sampleProducts.filter(p => {
      const textHit =
        !q ||
        [p.title, p.brand, ...(p.tags ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(q);

      const tags = p.tags ?? [];
      const tagHit =
        activeTags.length === 0 ||
        activeTags.every(t => tags.includes(t)); // must contain every selected tag

      return textHit && tagHit;
    });
  }, [query, activeTags]);

  return (
    <main className="p-6">
      {/* search */}
      <div className="mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-full border border-zinc-300 px-4 py-2 outline-none focus:ring-2 focus:ring-zinc-300"
        />
      </div>

      {/* tag filter */}
      <div className="mb-6">
        <TagFilter
          allTags={allTags}
          active={activeTags}
          onChange={setActiveTags}
        />
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-500 mt-8">No results. Try another search or tag.</p>
      )}
    </main>
  );
}
