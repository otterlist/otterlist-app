"use client";

import { useMemo, useState } from "react";
import { products } from "@/lib/products";

type Props = {
  allTags?: string[];
  onChange?: (active: string[]) => void;
  className?: string;
};

export default function TagFilter({ allTags, onChange, className }: Props) {
  // Build a unique, sorted tag list from products if none provided
  const derived = useMemo(() => {
    const s = new Set<string>();
    products.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s).sort((a, b) => a.localeCompare(b));
  }, []);

  const tags = (allTags && allTags.length ? allTags : derived) ?? [];
  const [active, setActive] = useState<string[]>([]);

  const toggle = (tag: string) => {
    const next = active.includes(tag)
      ? active.filter((t) => t !== tag)
      : [...active, tag];
    setActive(next);
    onChange?.(next);
  };

  const clear = () => {
    setActive([]);
    onChange?.([]);
  };

  return (
    <div
      className={[
        "rounded-2xl border bg-white/70 backdrop-blur px-3 py-2 shadow-sm",
        "supports-[backdrop-filter]:bg-white/60",
        className ?? "",
      ].join(" ")}
      role="group"
      aria-label="Product filters"
    >
      {/* Header row */}
      <div className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          {/* funnel icon */}
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 text-emerald-600"
          >
            <path
              d="M3 5h18l-7 8v4a1 1 0 0 1-.553.894l-2.894 1.447A1 1 0 0 1 9 18v-5L3 5z"
              fill="currentColor"
            />
          </svg>
          <span>Filters</span>
          {active.length > 0 && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-700">
              {active.length}
            </span>
          )}
        </div>

        {active.length > 0 && (
          <button
            type="button"
            onClick={clear}
            className="text-sm text-emerald-700 hover:text-emerald-800 underline-offset-2 hover:underline"
          >
            Clear
          </button>
        )}
      </div>

      {/* Pills */}
      <div className="mt-2 flex flex-wrap gap-2">
        {tags.map((tag) => {
          const isOn = active.includes(tag);
          return (
            <button
              key={tag}
              type="button"
              aria-pressed={isOn}
              onClick={() => toggle(tag)}
              className={[
                "rounded-full border px-3 py-1.5 text-sm transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500",
                isOn
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-sm"
                  : "bg-white hover:bg-gray-50"
              ].join(" ")}
            >
              {tag}
            </button>
          );
        })}
      </div>
    </div>
  );
}
