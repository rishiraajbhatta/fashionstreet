import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { products } from "@/data/products";

export default function FeaturedProducts() {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="relative overflow-hidden bg-[#090909] px-6 py-24 text-[#e8e5df] sm:px-10 sm:py-32 lg:px-16 lg:py-36">
      {/* Subtle background texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(ellipse at 20% 20%, rgba(120,120,120,0.10), transparent 45%), repeating-linear-gradient(115deg, transparent 0px, rgba(255,255,255,0.012) 1px, transparent 2px, transparent 5px)",
        }}
      />

      <div className="relative mx-auto max-w-[1500px]">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-10 sm:flex-row sm:items-end sm:pb-12">
          <div>
            <div className="mb-7 flex items-center gap-4">
              <span className="h-px w-8 bg-white/50" />

              <p className="text-[9px] uppercase tracking-[0.38em] text-white/50 sm:text-[10px]">
                FashionStreet / Curated Selection
              </p>
            </div>

            <h2 className="font-serif text-5xl font-normal leading-[0.92] tracking-[-0.045em] sm:text-6xl md:text-7xl lg:text-8xl">
              THE
              <br />
              <span className="italic text-[#99958d]">EDIT.</span>
            </h2>

            <p className="mt-6 max-w-md text-xs leading-7 tracking-wide text-white/45 sm:text-sm">
              A considered selection of everyday essentials and statement
              pieces. Less noise. More expression.
            </p>
          </div>

          <Link
            href="/search"
            className="group inline-flex w-fit items-center gap-5 border-b border-white/35 pb-3 text-[10px] uppercase tracking-[0.25em] text-white/75 transition-colors hover:border-white hover:text-white sm:mb-2"
          >
            Explore All Pieces
            <span className="text-base transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </Link>
        </div>

        {/* Product grid */}
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 sm:gap-x-7 lg:grid-cols-4 lg:gap-x-5 lg:gap-y-16">
          {featuredProducts.map((product, index) => (
            <div key={product.id} className="group relative">
              {/* Editorial product number */}
              <div className="mb-4 flex items-center justify-between">
                <span className="text-[9px] tracking-[0.25em] text-white/35">
                  SELECTION / 0{index + 1}
                </span>

                <span className="text-[9px] uppercase tracking-[0.2em] text-white/35">
                  FS — 2026
                </span>
              </div>

              <div className="transition-transform duration-500 group-hover:-translate-y-1">
                <ProductCard product={product} />
              </div>

              <div className="mt-4 h-px w-full origin-left scale-x-0 bg-white/50 transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </div>

        {/* Bottom editorial banner */}
        <div className="mt-24 border-t border-white/20 pt-8 sm:mt-32">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.35em] text-white/40">
                Your style. Your rules.
              </p>

              <h3 className="mt-4 max-w-xl font-serif text-3xl font-normal leading-tight tracking-[-0.03em] sm:text-4xl md:text-5xl">
                Wear what feels
                <span className="italic text-[#99958d]"> like you.</span>
              </h3>
            </div>

            <Link
              href="/new-arrivals"
              className="group inline-flex w-fit items-center gap-5 border border-white/30 px-6 py-4 text-[10px] uppercase tracking-[0.22em] transition-all duration-300 hover:border-white hover:bg-white hover:text-black sm:px-8"
            >
              Discover New Arrivals
              <span className="text-base transition-transform duration-300 group-hover:translate-x-1">
                ↗
              </span>
            </Link>
          </div>

          <div className="mt-12 flex flex-col justify-between gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[0.2em] text-white/30 sm:flex-row">
            <span>FashionStreet — Independent Style</span>
            <span>Designed for individuality / Est. 2026</span>
          </div>
        </div>
      </div>
    </section>
  );
}