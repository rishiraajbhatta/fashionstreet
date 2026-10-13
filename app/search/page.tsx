"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ObsidianFlow from "@/components/ObsidianFlow";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category} ${product.gender}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase().trim())
  );

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
            FashionStreet / Discover
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium tracking-tight md:text-7xl">
            Find Your Style<span className="text-white/40">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/60 md:text-base">
            Search the FashionStreet collection and discover pieces that
            express your individuality.
          </p>
        </div>

        {/* Search bar */}
        <form
          className="mt-10 flex max-w-3xl"
          onSubmit={(event) => event.preventDefault()}
          role="search"
        >
          <label htmlFor="product-search" className="sr-only">
            Search products
          </label>

          <input
            id="product-search"
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search clothing, footwear, accessories..."
            className="min-w-0 flex-1 border border-white/20 bg-white/[0.04] px-5 py-4 text-sm text-white outline-none transition-colors placeholder:text-white/35 focus:border-white/60"
          />

          <button
            type="submit"
            className="border border-white bg-white px-6 py-4 text-xs uppercase tracking-[0.2em] text-black transition-colors hover:bg-transparent hover:text-white sm:px-8"
          >
            Search
          </button>
        </form>

        {/* Search results heading */}
        <section className="mt-16">
          <div className="flex items-end justify-between gap-4 border-b border-white/15 pb-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                The Selection
              </p>

              <h2 className="mt-3 font-serif text-3xl font-medium md:text-4xl">
                {searchTerm.trim() ? "Search Results" : "Explore All"}
              </h2>
            </div>

            <p className="shrink-0 text-xs uppercase tracking-[0.15em] text-white/45">
              {filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "Piece" : "Pieces"}
            </p>
          </div>

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product, index) => (
                <div key={product.id}>
                  <p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-white/35">
                    Selection / {String(index + 1).padStart(2, "0")}
                  </p>

                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-white/15 px-6 py-20 text-center">
              <p className="font-serif text-3xl text-white/85">
                Nothing found.
              </p>

              <p className="mt-4 text-sm leading-6 text-white/50">
                We couldn't find a match. Try another product name,
                category, or style.
              </p>

              <button
                type="button"
                onClick={() => setSearchTerm("")}
                className="mt-8 border border-white/30 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
              >
                View All Products
              </button>
            </div>
          )}
        </section>

        {/* Bottom detail */}
        <div className="mt-24 border-t border-white/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
            FashionStreet — Define Your Own
          </p>
        </div>
      </div>
    </main>
  );
}