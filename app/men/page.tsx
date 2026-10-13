import ProductCard from "@/components/ProductCard";
import ObsidianFlow from "@/components/ObsidianFlow";
import { products } from "@/data/products";

export default function MenPage() {
  const menProducts = products.filter(
    (product) =>
      product.gender === "Men" || product.gender === "Unisex"
  );

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070707] px-6 py-20 text-[#e8e5df] sm:px-8 lg:px-12">
      {/* Animated Obsidian Flow background */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <ObsidianFlow />
      </div>

      {/* Dark overlay for readability */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,5,5,0.25), rgba(5,5,5,0.55))",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Collection heading */}
        <header className="relative mb-16 border-b border-white/15 pb-10 sm:mb-20 sm:pb-14">
          <div className="mb-8 flex items-center gap-4">
            <span className="h-px w-8 bg-white/50" />

            <p className="text-[9px] uppercase tracking-[0.4em] text-white/55 sm:text-[10px]">
              FashionStreet / Collections / 001
            </p>
          </div>

          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <h1 className="font-serif text-5xl font-normal leading-none tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
                Men&apos;s
                <br />
                <span className="text-white/45">Collection.</span>
              </h1>

              <p className="mt-8 max-w-lg text-xs leading-7 tracking-wide text-white/55 sm:text-sm sm:leading-8">
                Everyday essentials. Modern silhouettes. Statement pieces.
                Discover a collection designed for your own identity.
              </p>
            </div>

            {/* Collection details */}
            <div className="flex items-center gap-8 md:pb-2">
              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Collection
                </p>

                <p className="mt-2 font-serif text-2xl text-white/85">
                  001
                </p>
              </div>

              <div className="h-10 w-px bg-white/15" />

              <div>
                <p className="text-[9px] uppercase tracking-[0.25em] text-white/40">
                  Pieces
                </p>

                <p className="mt-2 font-serif text-2xl text-white/85">
                  {String(menProducts.length).padStart(2, "0")}
                </p>
              </div>
            </div>
          </div>
        </header>

        {/* Product section heading */}
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
              The Selection
            </p>

            <h2 className="mt-2 font-serif text-2xl font-normal sm:text-3xl">
              Discover the Edit
            </h2>
          </div>

          <p className="text-[9px] uppercase tracking-[0.2em] text-white/40 sm:text-[10px]">
            {menProducts.length} Products
          </p>
        </div>

        {/* Product grid */}
        {menProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="border border-white/10 py-24 text-center">
            <p className="font-serif text-2xl text-white/80">
              The collection awaits.
            </p>

            <p className="mt-3 text-xs text-white/45">
              New pieces are coming soon.
            </p>
          </div>
        )}

        {/* Bottom editorial label */}
        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center">
          <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
            FashionStreet® / Est. 2026
          </p>

          <p className="text-[8px] uppercase tracking-[0.3em] text-white/35">
            Designed to stand apart.
          </p>
        </div>
      </div>
    </main>
  );
}