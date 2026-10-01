type Product = {
  name: string;
  category: string;
  price: number;
  originalPrice: number;
  rating: number;
};

export default function ProductCard({ product }: { product: Product }) {
  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100
  );

  return (
    <div className="group">

      {/* Product Image Placeholder */}
      <div className="relative flex h-80 items-center justify-center bg-gray-100">
        <span className="text-gray-400">
          Product Image
        </span>

        <span className="absolute left-3 top-3 bg-black px-3 py-1 text-xs font-semibold text-white">
          {discount}% OFF
        </span>
      </div>

      {/* Product Information */}
      <div className="pt-4">

        <p className="text-sm text-gray-500">
          {product.category}
        </p>

        <h3 className="mt-1 text-lg font-semibold text-black">
          {product.name}
        </h3>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-lg font-bold text-black">
            ₹{product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
        </div>

        <div className="mt-2 flex items-center gap-2">
          <span className="text-sm">
            ⭐ {product.rating}
          </span>

          <span className="text-sm text-gray-500">
            Rating
          </span>
        </div>

        <button className="mt-4 w-full bg-black py-3 font-semibold text-white transition hover:bg-gray-800">
          Add to Cart
        </button>

      </div>

    </div>
  );
}