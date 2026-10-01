import Link from "next/link";

const categories = [
  {
    number: "01",
    name: "Men",
    description: "Streetwear, essentials & everyday fits",
    href: "/men",
  },
  {
    number: "02",
    name: "Women",
    description: "Modern silhouettes & statement pieces",
    href: "/women",
  },
  {
    number: "03",
    name: "Footwear",
    description: "Clean sneakers & everyday essentials",
    href: "/search?category=Footwear",
  },
  {
    number: "04",
    name: "Accessories",
    description: "The details that complete the fit",
    href: "/search?category=Accessories",
  },
];

export default function Categories() {
  return (
    <section className="bg-white px-6 py-24 sm:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">

        {/* Section Header */}
        <div className="flex flex-col justify-between gap-6 border-b border-black pb-8 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Explore FashionStreet
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-[-0.04em] text-black sm:text-5xl lg:text-6xl">
              SHOP BY
              <br />
              CATEGORY.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-gray-500">
            Build your rotation with carefully selected pieces
            designed for modern everyday style.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-10">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group flex items-center justify-between border-b border-gray-200 py-7 transition hover:px-4 hover:bg-black"
            >
              <div className="flex items-center gap-6 sm:gap-10">

                <span className="text-xs font-semibold tracking-widest text-gray-400 transition group-hover:text-gray-500">
                  {category.number}
                </span>

                <div>
                  <h3 className="text-2xl font-bold tracking-tight text-black transition group-hover:text-white sm:text-3xl">
                    {category.name}
                  </h3>

                  <p className="mt-1 text-sm text-gray-500 transition group-hover:text-gray-400">
                    {category.description}
                  </p>
                </div>

              </div>

              <span className="text-2xl text-black transition group-hover:translate-x-2 group-hover:text-white">
                →
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}