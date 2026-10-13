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

  const discount =
    product.originalPrice > 0
      ? Math.round(
          ((product.originalPrice - product.price) /
            product.originalPrice) *
            100
        )
      : 0;

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
    <article className="group min-w-0">
      {/* Product Image */}
      <div className="relative isolate overflow-hidden bg-[#151515]">
        <Link
          href={`/products/${product.id}`}
          aria-label={`View ${product.name}`}
          className="relative block aspect-[3/4] overflow-hidden"
        >
          {product.image ? (
            <img
              src={product.image}
              alt={product.name}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.045]"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-[#151515]">
              <span className="font-serif text-2xl italic text-white/30">
                FashionStreet
              </span>
            </div>
          )}

          {/* Image shading */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/5 opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Discount badge */}
          {discount > 0 && (
            <span className="absolute left-3 top-3 border border-white/20 bg-black/75 px-3 py-2 text-[9px] uppercase tracking-[0.18em] text-white backdrop-blur-sm sm:left-4 sm:top-4">
              {discount}% Off
            </span>
          )}

          {/* Product number */}
          <span className="absolute bottom-3 left-3 text-[9px] uppercase tracking-[0.22em] text-white/70 sm:bottom-4 sm:left-4">
            FS / {String(product.id).padStart(3, "0")}
          </span>
        </Link>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={handleWishlist}
          aria-label={
            wishlisted ? "Remove from wishlist" : "Add to wishlist"
          }
          aria-pressed={wishlisted}
          className={`absolute right-3 top-3 flex h-10 w-10 items-center justify-center border backdrop-blur-sm transition-all duration-300 sm:right-4 sm:top-4 ${
            wishlisted
              ? "border-white bg-white text-black"
              : "border-white/30 bg-black/50 text-white hover:border-white hover:bg-white hover:text-black"
          }`}
        >
          <span className="text-xl leading-none">
            {wishlisted ? "♥" : "♡"}
          </span>
        </button>

        {/* Quick Add */}
        <button
          type="button"
          onClick={handleAddToCart}
          className={`absolute bottom-0 left-0 right-0 flex translate-y-0 items-center justify-between border-t border-white/15 px-4 py-4 text-[9px] uppercase tracking-[0.2em] transition-all duration-300 sm:translate-y-full sm:group-hover:translate-y-0 ${
            added
              ? "bg-white text-black"
              : "bg-black/90 text-white hover:bg-white hover:text-black"
          }`}
        >
          <span>{added ? "Added to Bag" : "Add to Bag"}</span>
          <span className="text-base">{added ? "✓" : "↗"}</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="pt-4 sm:pt-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-[9px] uppercase tracking-[0.22em] text-white/40">
              {product.category}
            </p>

            <Link href={`/products/${product.id}`}>
              <h3 className="mt-2 font-serif text-lg font-normal leading-snug tracking-wide text-[#e8e5df] transition-colors duration-300 group-hover:text-white sm:text-xl">
                {product.name}
              </h3>
            </Link>
          </div>

          <span
            className="shrink-0 pt-1 text-[10px] text-white/50"
            aria-label={`Rating ${product.rating} out of 5`}
          >
            ★ {product.rating}
          </span>
        </div>

        {/* Pricing */}
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-sm font-medium tracking-wide text-[#e8e5df]">
            ₹{product.price.toLocaleString("en-IN")}
          </span>

          {product.originalPrice > product.price && (
            <span className="text-xs text-white/35 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
          )}
        </div>

        {/* Editorial divider */}
        <div className="mt-5 h-px w-full bg-white/10">
          <div className="h-px w-0 bg-white/70 transition-all duration-500 group-hover:w-full" />
        </div>
      </div>
    </article>
  );
}