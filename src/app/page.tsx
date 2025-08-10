import Hero from "@/components/Hero";
import TagFilter from "@/components/TagFilter";
import ProductCard from "@/components/ProductCard";
import products from "@/lib/products";

export default function HomePage() {
  return (
    <main>
      <Hero /> {/* Hero section at the top */}

      {/* Products Section */}
      <section id="products" className="mt-10 sm:mt-14 px-4 sm:px-6 lg:px-8">
        <TagFilter />

        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </section>
    </main>
  );
}
