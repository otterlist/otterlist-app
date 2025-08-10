type Product = {
  id: string;
  title: string;
  price?: string;
  image: string;
  dest: string;     // final brand/affiliate URL
  brand?: string;
  tags?: string[];
};

export type { Product };

export default function ProductCard({ p }: { p: Product }) {
  return (
    <a
      href={`/go?u=${encodeURIComponent(p.dest)}`}
      className="block rounded-2xl border border-zinc-200 hover:shadow-md transition-shadow overflow-hidden bg-white"
    >
      <div className="relative aspect-square bg-zinc-50">
        {/* simple <img> for now; we can swap to next/image later */}
        <img
          src={p.image}
          alt={p.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="p-4">
        {p.brand && <div className="text-sm text-zinc-500 mb-1">{p.brand}</div>}
        <div className="font-semibold">{p.title}</div>

        <div className="mt-2 flex items-center justify-between">
          <div className="text-green-600 font-semibold">{p.price ?? ""}</div>
          <div className="flex gap-1 flex-wrap">
            {(p.tags ?? []).slice(0, 3).map((t) => (
              <span
                key={t}
                className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
