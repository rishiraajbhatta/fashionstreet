import ProductCard from "@/components/ProductCard";

const products = [
  {
    name: "Oversized Black T-Shirt",
    category: "Men",
    price: 999,
    originalPrice: 1499,
    rating: 4.5,
  },
  {
    name: "Classic Denim Jacket",
    category: "Men",
    price: 1999,
    originalPrice: 2999,
    rating: 4.7,
  },
  {
    name: "Minimal White Sneakers",
    category: "Footwear",
    price: 2499,
    originalPrice: 3499,
    rating: 4.6,
  },
  {
    name: "Everyday Shoulder Bag",
    category: "Accessories",
    price: 1299,
    originalPrice: 1999,
    rating: 4.4,
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 px-8 py-20">
      <div className="mx-auto max-w-7xl">

        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
              Trending Now
            </p>

            <h2 className="mt-2 text-3xl font-bold text-black md:text-4xl">
              Featured Products
            </h2>
          </div>

          <button className="hidden text-sm font-semibold text-black md:block">
            View All →
          </button>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <ProductCard
              key={product.name}
              product={product}
            />
          ))}
        </div>

      </div>
    </section>
  );
}