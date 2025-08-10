import ProductCard, { Product } from "@/components/ProductCard";

export default function HomePage() {
  const products: Product[] = [
    {
      id: "1",
      title: "Example Product 1",
      price: "$29.99",
      image: "https://via.placeholder.com/300",
      dest: "https://example.com",
      brand: "Brand A",
      tags: ["eco", "vegan"],
    },
    {
      id: "2",
      title: "Example Product 2",
      price: "$49.99",
      image: "https://via.placeholder.com/300",
      dest: "https://example.com",
      brand: "Brand B",
      tags: ["sustainable", "organic"],
    },
  ];

  return (
    <main className="p-6">
      <header className="mb-8 text-center">
        <h1 className="text-4xl font-bold">OtterList</h1>
        <p className="text-lg text-zinc-600">
          The Anti-Amazon Marketplace for Ethical Brands
        </p>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} p={p} />
        ))}
      </div>
    </main>
  );
}
