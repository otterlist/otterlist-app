import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/products";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductPage(
  props: { params: Promise<{ slug: string }> }
) {
  const { slug } = await props.params;
  const product = getProductBySlug(slug);
  if (!product) return notFound();

  return (
    <main className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
      <Link href="/" className="text-sm underline">← Back</Link>

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <div className="text-xs text-gray-500">{product.brand}</div>
          <h1 className="mt-1 text-2xl font-bold">{product.title}</h1>
          <div className="mt-2 text-emerald-600 font-semibold text-lg">{product.price}</div>

          {!!product.tags?.length && (
            <div className="mt-3 flex flex-wrap gap-2">
              {product.tags.map((t) => (
                <span key={t} className="rounded-full border px-3 py-1 text-xs">
                  {t}
                </span>
              ))}
            </div>
          )}

          <a
            href={product.dest}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-emerald-600 px-5 py-2 text-white font-semibold hover:bg-emerald-700"
          >
            Shop on brand site
          </a>
        </div>
      </div>
    </main>
  );
}
