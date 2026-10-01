import Link from "next/link";

export default function PromoBanner() {
  return (
    <section className="bg-black px-6 py-24 text-white sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* Main Message */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-500">
              FashionStreet / 2026
            </p>

            <h2 className="mt-6 text-5xl font-black leading-[0.9] tracking-[-0.05em] sm:text-6xl lg:text-8xl">
              YOUR
              <br />
              EVERYDAY
              <br />
              <span className="text-gray-500">UNIFORM.</span>
            </h2>
          </div>

          {/* Content */}
          <div className="lg:pl-12">

            <p className="max-w-lg text-lg leading-8 text-gray-400">
              The pieces you reach for every day should feel
              effortless. Build a wardrobe around clean
              silhouettes, versatile essentials and your own
              identity.
            </p>

            <Link
              href="/new-arrivals"
              className="mt-8 inline-flex items-center gap-4 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wider text-black transition hover:bg-gray-200"
            >
              Discover The Collection
              <span>→</span>
            </Link>

            <div className="mt-12 border-t border-gray-800 pt-6">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-600">
                Designed for everyday movement
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}