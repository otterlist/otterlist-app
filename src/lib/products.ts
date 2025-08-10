// src/lib/products.ts
export type Product = {
  id: string;
  title: string;
  price?: string;
  image: string;
  dest: string;     // final brand/affiliate URL (we’ll route via /go)
  brand?: string;
  tags?: string[];
};

export const products: Product[] = [
  {
    id: "1",
    title: "Example Product 1",
    price: "$29.99",
    image: "https://via.placeholder.com/300.png",
    dest: "https://example.com",
    brand: "Brand A",
    tags: ["eco", "vegan"],
  },
  {
    id: "2",
    title: "Example Product 2",
    price: "$49.99",
    image: "https://via.placeholder.com/300.png",
    dest: "https://example.com",
    brand: "Brand B",
    tags: ["sustainable", "organic"],
  },
];
