import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="mx-auto grid min-h-[680px] max-w-7xl grid-cols-1 lg:grid-cols-2">

        {/* Left Content */}
        <div className="flex items-center px-6 py-20 sm:px-10 lg:px-12 lg:py-24">
          <div className="max-w-xl">

            <p className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-gray-400">
              FashionStreet / New Season 2026
            </p>

            <h1 className="text-6xl font-black leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
              WEAR
              <br />
              YOUR
              <br />
              <span className="text-gray-500">STORY.</span>
            </h1>

            <p className="mt-8 max-w-md text-base leading-7 text-gray-400 sm:text-lg">
              Modern essentials, streetwear silhouettes and timeless
              pieces built for your everyday rotation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/new-arrivals"
                className="bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-black transition hover:bg-gray-200"
              >
                Shop New Arrivals
              </Link>

              <Link
                href="/men"
                className="border border-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white hover:text-black"
              >
                Explore Collection
              </Link>
            </div>

            <div className="mt-14 flex gap-10 border-t border-gray-800 pt-6">
              <div>
                <p className="text-2xl font-bold">10+</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                  Styles
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">4.7</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                  Avg Rating
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold">2026</p>
                <p className="mt-1 text-xs uppercase tracking-widest text-gray-500">
                  New Era
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Right Visual */}
        <div className="relative min-h-[420px] overflow-hidden bg-gray-900 lg:min-h-full">

          <div className="absolute inset-0 bg-gradient-to-br from-gray-700 via-gray-900 to-black" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">

              <p className="text-[120px] font-black leading-none tracking-[-0.08em] text-white/10 sm:text-[170px]">
                FS
              </p>

              <div className="mt-[-30px]">
                <p className="text-xs font-semibold uppercase tracking-[0.5em] text-gray-400">
                  FashionStreet
                </p>

                <p className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  EST. 2026
                </p>
              </div>

            </div>
          </div>

          <div className="absolute bottom-6 right-6 border border-white/20 px-4 py-2 text-xs uppercase tracking-widest text-gray-400">
            Bengaluru / India
          </div>

        </div>

      </div>
    </section>
  );
}