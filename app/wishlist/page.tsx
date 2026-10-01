"use client";

import Link from "next/link";
import { useWishlist } from "@/components/WishlistContext";

export default function WishlistPage() {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  if (wishlistItems.length === 0) {
    return (
      <main className="min-h-screen bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            FashionStreet
          </p>

          <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
            Your Wishlist
          </h1>

          <div className="mt-12 border border-gray-200 p-10 text-center">
            <h2 className="text-2xl font-semibold text-black">
              Your wishlist is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Save products you love and they will appear here.
            </p>

            <Link
              href="/new-arrivals"
              className="mt-6 inline-block bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          FashionStreet
        </p>

        <div className="mt-2 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-4xl font-bold text-black md:text-5xl">
              Your Wishlist
            </h1>

            <p className="mt-3 text-gray-500">
              {wishlistItems.length}{" "}
              {wishlistItems.length === 1
                ? "product"
                : "products"}{" "}
              saved
            </p>
          </div>

          <button
            type="button"
            onClick={clearWishlist}
            className="text-sm font-semibold text-red-600 hover:underline"
          >
            Clear Wishlist
          </button>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {wishlistItems.map((product) => {
            const discount = Math.round(
              ((product.originalPrice - product.price) /
                product.originalPrice) *
                100
            );

            return (
              <div key={product.id} className="group">
                <Link href={`/products/${product.id}`}>
                  <div className="relative flex h-80 items-center justify-center bg-gray-100">
                    <span className="text-gray-400">
                      Product Image
                    </span>

                    <span className="absolute left-3 top-3 bg-black px-3 py-1 text-xs font-semibold text-white">
                      {discount}% OFF
                    </span>
                  </div>
                </Link>

                <div className="pt-4">
                  <p className="text-sm text-gray-500">
                    {product.category}
                  </p>

                  <Link href={`/products/${product.id}`}>
                    <h2 className="mt-1 text-lg font-semibold text-black hover:underline">
                      {product.name}
                    </h2>
                  </Link>

                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-lg font-bold text-black">
                      ₹{product.price}
                    </span>

                    <span className="text-sm text-gray-400 line-through">
                      ₹{product.originalPrice}
                    </span>
                  </div>

                  <div className="mt-2 text-sm">
                    ⭐ {product.rating}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeFromWishlist(product.id)
                    }
                    className="mt-4 w-full border border-black py-3 font-semibold text-black transition hover:bg-black hover:text-white"
                  >
                    Remove from Wishlist
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}