// src/lib/products.ts

export type Product = {
  id: string;
  slug: string;
  title: string;
  brand: string;
  price: string;
  tags: string[];
  image: string;
  dest: string;
};

// Named export (source of truth)
export const products: Product[] = [
  {
    id: "1",
    slug: "bamboo-dish-brush",
    title: "Bamboo Dish Brush",
    brand: "EcoHome",
    price: "$12.00",
    tags: ["eco", "sustainable", "vegan"],
    image: "/placeholder.jpg",
    dest: "https://example.com/products/bamboo-dish-brush",
  },
  {
    id: "2",
    slug: "organic-lip-balm",
    title: "Organic Lip Balm",
    brand: "PureKind",
    price: "$9.50",
    tags: ["organic", "vegan"],
    image: "/placeholder.jpg",
    dest: "https://example.com/products/organic-lip-balm",
  },
  {
    id: "3",
    slug: "reusable-silicone-bags",
    title: "Reusable Silicone Bags (Set of 3)",
    brand: "GreenNest",
    price: "$24.00",
    tags: ["eco", "sustainable"],
    image: "/placeholder.jpg",
    dest: "https://example.com/products/reusable-silicone-bags",
  },
  {
    id: "4",
    slug: "compostable-phone-case",
    title: "Compostable Phone Case",
    brand: "LeafCase",
    price: "$29.99",
    tags: ["eco", "vegan"],
    image: "/placeholder.jpg",
    dest: "https://example.com/products/compostable-phone-case",
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

// Also provide a default export to satisfy any default imports
export default products;
