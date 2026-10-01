"use client";

import Link from "next/link";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";

export default function ProductCard({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
  } = useWishlist();

  const [added, setAdded] = useState(false);

  const wishlisted = isInWishlist(product.id);

  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  const handleWishlist = () => {
    if (wishlisted) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <article className="group">

      {/* Product Image */}
      <div className="relative overflow-hidden bg-gray-100">

        <Link href={`/products/${product.id}`}>
          <div className="relative flex h-[420px] cursor-pointer items-center justify-center transition duration-500 group-hover:bg-gray-200">

            {product.image ? (
              <img
                src={product.image}
                alt={product.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            ) : (
              <span className="text-sm uppercase tracking-widest text-gray-400">
                Product Image
              </span>
            )}

            {/* Discount */}
            <span className="absolute left-4 top-4 bg-black px-3 py-2 text-xs font-bold tracking-wide text-white">
              -{discount}%
            </span>
          </div>
        </Link>

        {/* Wishlist */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={
            wishlisted
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl text-black shadow-sm transition duration-300 hover:scale-110"
        >
          {wishlisted ? "♥" : "♡"}
        </button>

        {/* Quick Shop */}
        <button
          type="button"
          onClick={handleAddToCart}
          className="absolute bottom-0 left-0 right-0 translate-y-full bg-black py-4 text-sm font-bold uppercase tracking-wider text-white transition duration-300 group-hover:translate-y-0"
        >
          {added ? "✓ Added to Cart" : "Quick Add"}
        </button>
      </div>

      {/* Product Info */}
      <div className="pt-5">

        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              {product.category}
            </p>

            <Link href={`/products/${product.id}`}>
              <h3 className="mt-2 text-lg font-semibold tracking-tight text-black hover:underline">
                {product.name}
              </h3>
            </Link>
          </div>

          <span className="shrink-0 text-sm">
            ⭐ {product.rating}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="text-lg font-bold text-black">
            ₹{product.price}
          </span>

          <span className="text-sm text-gray-400 line-through">
            ₹{product.originalPrice}
          </span>
        </div>

      </div>
    </article>
  );
}