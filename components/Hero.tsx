export default function Hero() {
  return (
    <section className="bg-gray-100 px-8 py-24">
      <div className="mx-auto max-w-7xl">

        <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-600">
          New Collection
        </p>

        <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-black md:text-7xl">
  Elevate Your Style
</h1>

        <p className="mt-6 max-w-xl text-lg text-gray-600">
          Discover the latest fashion trends and find pieces that define
          your personal style.
        </p>

        <div className="mt-8 flex gap-4">
          <button className="bg-black px-6 py-3 font-semibold text-white">
            Shop Men
          </button>

          <button className="border border-black px-6 py-3 font-semibold">
            Shop Women
          </button>
        </div>

      </div>
    </section>
  );
}