import Link from "next/link";
import { products } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

type Props = { params: { slug: string } };

export default function ProductPage({ params }: Props) {
  const product = products.find((p) => p.slug === params.slug);
  if (!product) {
    return (
      <div className="p-6">
        <p>Not found.</p>
        <Link href="/" className="text-blue-600 underline">Back to results</Link>
      </div>
    );
  }

  return (
    <main className="p-6">
      <Link href="/" className="text-sm text-zinc-600 hover:underline">← Back to results</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
        <div className="rounded-2xl overflow-hidden border border-zinc-200 bg-zinc-50">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div>
          {product.brand && (
            <div className="text-sm text-zinc-500 mb-1">{product.brand}</div>
          )}
          <h1 className="text-2xl font-bold">{product.title}</h1>
          {product.price && (
            <div className="mt-2 text-green-600 font-semibold">{product.price}</div>
          )}

          {product.tags?.length ? (
            <div className="mt-4 flex gap-2 flex-wrap">
              {product.tags.map((t) => (
                <span key={t} className="text-xs px-2 py-0.5 rounded-full bg-zinc-100 text-zinc-600">
                  {t}
                </span>
              ))}
            </div>
          ) : null}

          <a
            href={`/go?u=${encodeURIComponent(product.dest)}`}
            className="mt-6 inline-flex items-center justify-center rounded-md bg-black text-white px-4 py-2 hover:bg-zinc-800 transition"
          >
            Shop on brand site
          </a>
        </div>
      </div>
    </main>
  );
}
