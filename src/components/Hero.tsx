"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(16,185,129,0.18)_0%,rgba(16,185,129,0)_60%)]" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Shop ethical, small-brand products — fast
          </h1>
          <p className="mt-4 text-base sm:text-lg text-gray-600">
            Curated alternatives to big-box shopping. Better for you, better for the planet.
          </p>

          <div className="mx-auto mt-6 max-w-2xl">
            <form
              action="#"
              onSubmit={(e) => e.preventDefault()}
              className="flex items-center gap-2 rounded-2xl border bg-white/70 backdrop-blur px-3 py-2 shadow-sm focus-within:ring-1 focus-within:ring-emerald-500"
            >
              <input
                aria-label="Search products"
                placeholder="Search brands, products, or tags…"
                className="w-full bg-transparent outline-none placeholder:text-gray-400"
              />
              <button
                type="button"
                className="rounded-xl px-3 py-2 text-sm font-medium border hover:shadow"
              >
                Search
              </button>
            </form>
          </div>

          <div className="mt-5 flex items-center justify-center gap-3">
            <Link
              href="#products"
              className="rounded-xl bg-emerald-600 px-4 py-2 text-white text-sm font-semibold hover:bg-emerald-700"
            >
              Browse products
            </Link>
            <Link
              href="/about"
              className="rounded-xl border px-4 py-2 text-sm font-semibold hover:shadow"
            >
              What is OtterList?
            </Link>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-xs text-gray-600">
            <span className="rounded-full border px-3 py-1">Vegan & non-toxic filters</span>
            <span className="rounded-full border px-3 py-1">Hand-picked small brands</span>
            <span className="rounded-full border px-3 py-1">Affiliate-supported</span>
          </div>
        </div>
      </div>
    </section>
  );
}
