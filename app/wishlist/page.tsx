"use client";

import Link from "next/link";
import { useWishlist } from "@/components/WishlistContext";
import ObsidianFlow from "@/components/ObsidianFlow";

export default function WishlistPage() {
  const {
    wishlistItems,
    removeFromWishlist,
    clearWishlist,
  } = useWishlist();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Animated Obsidian Flow background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ObsidianFlow />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/30" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        {/* Page heading */}
        <div className="border-b border-white/15 pb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/50">
            FashionStreet / Saved Pieces
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium tracking-tight md:text-7xl">
            Your Wishlist<span className="text-white/40">.</span>
          </h1>

          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              The pieces that caught your eye. Keep your favourites close
              and return whenever you're ready.
            </p>

            {wishlistItems.length > 0 && (
              <div className="flex items-center justify-between gap-6 sm:justify-end">
                <p className="text-xs uppercase tracking-[0.2em] text-white/45">
                  {wishlistItems.length.toString().padStart(2, "0")}{" "}
                  {wishlistItems.length === 1 ? "Piece" : "Pieces"}
                </p>

                <button
                  type="button"
                  onClick={clearWishlist}
                  className="border-b border-white/30 pb-1 text-[10px] uppercase tracking-[0.2em] text-white/60 transition hover:border-white hover:text-white"
                >
                  Clear All
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Empty wishlist */}
        {wishlistItems.length === 0 ? (
          <div className="py-24 text-center md:py-32">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-7 w-7 text-white/60"
                aria-hidden="true"
              >
                <path d="M20.8 8.8c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11a4.7 4.7 0 0 1 8.8-2.4 4.7 4.7 0 0 1 8.8 2.4Z" />
              </svg>
            </div>

            <h2 className="mt-7 font-serif text-3xl text-white/90 md:text-4xl">
              Nothing saved. Yet.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
              Every great wardrobe starts somewhere. Explore the collection
              and save the pieces that speak to you.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex border border-white bg-white px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white"
            >
              Explore The Shop
              <span className="ml-4" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        ) : (
          <>
            {/* Saved products */}
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {wishlistItems.map((product, index) => {
                const discount =
                  product.originalPrice > 0
                    ? Math.round(
                        ((product.originalPrice - product.price) /
                          product.originalPrice) *
                          100
                      )
                    : 0;

                return (
                  <article key={product.id} className="group">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/35">
                      Saved / {String(index + 1).padStart(2, "0")}
                    </p>

                    {/* Product image area */}
                    <Link
                      href={`/products/${product.id}`}
                      className="relative flex h-80 items-center justify-center overflow-hidden border border-white/10 bg-white/[0.04]"
                    >
                      <span className="font-serif text-2xl text-white/25 transition-transform duration-500 group-hover:scale-105">
                        FS.
                      </span>

                      {discount > 0 && (
                        <span className="absolute left-3 top-3 border border-white/20 bg-black/80 px-3 py-2 text-[10px] uppercase tracking-wider text-white">
                          {discount}% Off
                        </span>
                      )}
                    </Link>

                    {/* Product information */}
                    <div className="pt-5">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-white/45">
                        {product.category}
                      </p>

                      <Link href={`/products/${product.id}`}>
                        <h2 className="mt-2 font-serif text-xl text-white/90 transition-colors hover:text-white/60">
                          {product.name}
                        </h2>
                      </Link>

                      <p className="mt-2 text-xs text-white/45">
                        {product.gender}
                        <span className="mx-2">·</span>
                        <span aria-label={`Rated ${product.rating} out of 5`}>
                          ★ {product.rating}
                        </span>
                      </p>

                      <div className="mt-4 flex flex-wrap items-center gap-3">
                        <span className="text-lg text-white">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>

                        {product.originalPrice > product.price && (
                          <span className="text-sm text-white/35 line-through">
                            ₹{product.originalPrice.toLocaleString("en-IN")}
                          </span>
                        )}
                      </div>

                      <button
                        type="button"
                        onClick={() => removeFromWishlist(product.id)}
                        className="mt-5 w-full border border-white/25 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-white/75 transition-colors hover:border-white hover:bg-white hover:text-black"
                      >
                        Remove From Wishlist
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Continue shopping */}
            <div className="mt-20 border-t border-white/15 pt-8">
              <Link
                href="/products"
                className="inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/60 transition-colors hover:text-white"
              >
                <span aria-hidden="true">←</span>
                Continue Exploring
              </Link>
            </div>
          </>
        )}

        {/* Footer detail */}
        <div className="mt-20 border-t border-white/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            FashionStreet — Define Your Own
          </p>
        </div>
      </div>
    </main>
  );
}