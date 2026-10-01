"use client";

import { useState } from "react";
import { products } from "@/data/products";

export default function SearchPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter((product) =>
    `${product.name} ${product.category} ${product.gender}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-white px-8 py-20">
      <div className="mx-auto max-w-7xl">

        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          FashionStreet
        </p>

        <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
          Search
        </h1>

        {/* Search Bar */}
        <div className="mt-8 flex max-w-2xl">
          <input
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search for products..."
            className="w-full border border-gray-300 px-5 py-4 text-black outline-none focus:border-black"
          />

          <button
            type="button"
            className="bg-black px-8 py-4 font-semibold text-white"
          >
            Search
          </button>
        </div>

        {/* Search Results */}
        <div className="mt-12">

          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-black">
              {searchTerm ? "Search Results" : "All Products"}
            </h2>

            <p className="text-sm text-gray-500">
              {filteredProducts.length} products
            </p>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className="border border-gray-200 p-6"
                >
                  <div className="flex h-48 items-center justify-center bg-gray-100">
                    <span className="text-gray-400">
                      Product Image
                    </span>
                  </div>

                  <p className="mt-4 text-sm text-gray-500">
                    {product.category}
                  </p>

                  <h3 className="mt-1 text-lg font-semibold text-black">
                    {product.name}
                  </h3>

                  <p className="mt-2 font-bold text-black">
                    ₹{product.price}
                  </p>
                </div>
              ))}

            </div>
          ) : (
            <div className="mt-6 border border-gray-200 p-10 text-center">
              <h3 className="text-xl font-semibold text-black">
                No products found
              </h3>

              <p className="mt-2 text-gray-500">
                Try searching for something else.
              </p>
            </div>
          )}

        </div>

      </div>
    </main>
  );
}