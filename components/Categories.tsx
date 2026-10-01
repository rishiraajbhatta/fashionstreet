const categories = [
  {
    name: "Men",
    description: "Explore men's fashion",
  },
  {
    name: "Women",
    description: "Discover women's fashion",
  },
  {
    name: "Footwear",
    description: "Step into your style",
  },
  {
    name: "Accessories",
    description: "Complete your look",
  },
];

export default function Categories() {
  return (
    <section className="bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            Shop by Category
          </p>

          <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">
            Find Your Style
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {categories.map((category) => (
            <div
              key={category.name}
              className="group cursor-pointer border border-gray-200 p-8 transition hover:bg-black"
            >
              <h3 className="text-2xl font-bold text-black transition group-hover:text-white">
                {category.name}
              </h3>

              <p className="mt-2 text-gray-500 transition group-hover:text-gray-300">
                {category.description}
              </p>

              <p className="mt-8 text-sm font-semibold text-black transition group-hover:text-white">
                Explore →
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}