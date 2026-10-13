import ProductCard from "@/components/ProductCard";
import ObsidianFlow from "@/components/ObsidianFlow";
import { products } from "@/data/products";

export default function NewArrivalsPage() {
  const newArrivals = products.filter(
    (product) =>
      product.id === 9 ||
      product.id === 3 ||
      product.id === 7 ||
      product.id === 8
  );

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ObsidianFlow />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/30" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        {/* Collection heading */}
        <div className="mb-16 border-b border-white/15 pb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            FashionStreet / The Latest
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium tracking-tight md:text-7xl">
            New Arrivals<span className="text-white/40">.</span>
          </h1>

          <div className="mt-6 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              The latest additions to FashionStreet. Discover fresh silhouettes,
              refined essentials, and pieces made to stand apart.
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              {newArrivals.length.toString().padStart(2, "0")} Pieces
            </p>
          </div>
        </div>

        {/* Products */}
        {newArrivals.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {newArrivals.map((product, index) => (
              <div key={product.id} className="relative">
                <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/35">
                  New / {String(index + 1).padStart(2, "0")}
                </p>

                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="py-24 text-center">
            <p className="font-serif text-3xl text-white/80">
              Something new is coming.
            </p>
            <p className="mt-3 text-sm text-white/45">
              Check back soon for the latest additions.
            </p>
          </div>
        )}

        {/* Bottom detail */}
        <div className="mt-24 border-t border-white/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            FashionStreet — Define Your Own
          </p>
        </div>
      </div>
    </main>
  );
}