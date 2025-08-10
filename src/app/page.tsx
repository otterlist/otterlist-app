import { products } from "@/lib/products";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  return (
    <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <ProductCard key={p.id} p={p} />
      ))}
    </main>
  );
}
