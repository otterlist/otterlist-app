"use client";

import { useMemo, useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import { products as sampleProducts } from "@/lib/products";
import TagFilter from "./TagFilter";

export default function HomePageClient() {
  const [query, setQuery] = useState("");

  // Collect all unique tags from your sample products
  const allTags = useMemo(
    () => Array.from(new Set(sampleProducts.flatMap((p) => p.tags ?? []))),
    []
  );

  // Filter products by the search query (title, brand, or any tag)
  const filtered: Product[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleProducts;

    return sampleProducts.filter((p) =>
      [p.title, p.brand, ...(p.tags ?? [])].some((v) =>
        (v ?? "").toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <main className="p-6">
      {/* search */}
      <div className="mb-6">
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products..."
          className="w-full rounded-full border border-zinc-300 px-5 py-3 outline-none focus:ring-2 focus:ring-zinc-400"
        />
      </div>

      {/* tag filter */}
      <TagFilter
        allTags={allTags}
        active={query ? [query] : []}
        onChange={(next) => setQuery(next[0] || "")}
      />

      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
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
