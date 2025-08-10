"use client";

import { useMemo, useState } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import { products as sampleProducts } from "@/lib/products";

export default function HomePageClient() {
  const [query, setQuery] = useState("");

  const filtered: Product[] = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return sampleProducts;
    return sampleProducts.filter((p) =>
      [p.title, p.brand, ...(p.tags ?? [])].some((v) =>
        v?.toLowerCase().includes(q)
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
          className="w-full rounded-full border border-zinc-200 px-4 py-2 outline-none focus:ring-2 focus:ring-zinc-300"
        />
      </div>

      {/* product grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-zinc-500 mt-4">No matching products.</p>
      )}
    </main>
  );
}
