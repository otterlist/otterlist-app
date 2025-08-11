import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/lib/products";

export default function ProductCard(props: Product) {
  const { slug, title, brand, price, tags, image } = props;

  return (
    <Link
      href={`/products/${slug}`}
      className="group block rounded-2xl border border-gray-200 bg-white p-4 md:p-5 shadow-sm hover:shadow-md transition"
    >
      <div className="relative aspect-square w/full overflow-hidden rounded-xl bg-gray-50">
        <Image
          src={image}                 // e.g. "/placeholder.jpg"
          alt={title}
          fill                        // fill the aspect-square box
          sizes="(min-width:1280px) 25vw,
                 (min-width:1024px) 33vw,
                 (min-width:640px) 50vw,
                 100vw"
          className="object-cover"
        />
      </div>

      <div className="mt-3">
        <div className="text-xs text-gray-500">{brand}</div>
        <div className="mt-0.5 font-medium">{title}</div>
        <div className="mt-1 text-emerald-600 font-semibold">{price}</div>
      </div>

      {Array.isArray(tags) && tags.length > 0 && (
        <div className="mt-2 flex flex-wrap gap-1.5">
          {tags.slice(0, 3).map((t) => (
            <span key={t} className="rounded-full border px-2 py-0.5 text-xs text-gray-700">
              {t}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}
