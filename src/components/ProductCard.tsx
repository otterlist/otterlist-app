"use client";

import Link from "next/link";

type CardProduct = {
  slug: string;
  title: string;
  brand: string;
  price: number;
  tags: string[];
  url?: string;
  image?: string | null;
};

export default function ProductCard({ product }: { product: CardProduct }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Media */}
      <div className="mb-4 md:mb-5">
        {/* Placeholder aspect until real images */}
        <div className="aspect-[4/5] w-full rounded-xl bg-gray-100 ring-1 ring-inset ring-gray-200" />
      </div>

      {/* Text */}
      <div className="space-y-1.5">
        <div className="text-xs uppercase tracking-wide text-gray-500">
          {product.brand}
        </div>
        <h3 className="text-base md:text-lg font-medium leading-snug line-clamp-2">
          {product.title}
        </h3>
        <div className="text-sm md:text-base font-semibold tabular-nums">
          ${product.price.toFixed(2)}
        </div>
      </div>

      {/* Tags */}
      {product.tags?.length > 0 && (
        <div className="mt-3 md:mt-4 flex flex-wrap gap-2">
          {product.tags.map((t) => (
            <span
              key={t}
              className="rounded-full border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs text-gray-700"
            >
              {t}
            </span>
          ))}
        </div>
      )}

      {/* Subtle affordance */}
      <div className="mt-4 text-sm text-blue-600 opacity-0 transition-opacity group-hover:opacity-100">
        View details →
      </div>
    </Link>
  );
}
