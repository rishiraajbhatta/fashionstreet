import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function MenPage() {
  const menProducts = products.filter(
    (product) =>
      product.gender === "Men" || product.gender === "Unisex"
  );

  return (
    <main className="min-h-screen bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            FashionStreet
          </p>

          <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
            Men's Collection
          </h1>

          <p className="mt-4 max-w-xl text-gray-600">
            Explore our latest collection of men's fashion, from everyday
            essentials to statement pieces.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {menProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </div>
    </main>
  );
}