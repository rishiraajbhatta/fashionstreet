import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="bg-[#f5f5f5] px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              The Current Rotation
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              FEATURED
              <br />
              PIECES.
            </h2>
          </div>

          <Link
            href="/search"
            className="inline-flex w-fit items-center gap-3 border-b border-black pb-2 text-sm font-bold uppercase tracking-wider text-black transition hover:gap-5"
          >
            View All Products
            <span>→</span>
          </Link>

        </div>

        {/* Products */}
        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 border-t border-gray-300 pt-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">

            <p className="max-w-md text-sm leading-6 text-gray-500">
              Discover more pieces designed to become part of
              your everyday rotation.
            </p>

            <Link
              href="/new-arrivals"
              className="w-fit bg-black px-7 py-4 text-sm font-bold uppercase tracking-wider text-white transition hover:bg-gray-800"
            >
              Shop New Arrivals
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}