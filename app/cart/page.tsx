"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";
import ObsidianFlow from "@/components/ObsidianFlow";

export default function CartPage() {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const formatPrice = (price: number) =>
    `₹${price.toLocaleString("en-IN")}`;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ObsidianFlow />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        {/* Header */}
        <div className="border-b border-white/15 pb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/45">
            FashionStreet / Your Selection
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium tracking-tight md:text-7xl">
            Your Cart<span className="text-white/40">.</span>
          </h1>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-white/60 md:text-base">
              Considered choices. Exceptional style.
              Everything you've selected, all in one place.
            </p>

            <p className="text-xs uppercase tracking-[0.2em] text-white/45">
              {cartItems.length.toString().padStart(2, "0")}{" "}
              {cartItems.length === 1 ? "Product" : "Products"}
            </p>
          </div>
        </div>

        {/* Empty cart */}
        {cartItems.length === 0 ? (
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
                <path d="M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h7.8a2 2 0 0 0 2-1.6L21 8H6" />
                <circle cx="10" cy="21" r="1" />
                <circle cx="18" cy="21" r="1" />
              </svg>
            </div>

            <h2 className="mt-7 font-serif text-3xl text-white/90 md:text-4xl">
              Nothing here. Yet.
            </h2>

            <p className="mx-auto mt-4 max-w-md text-sm leading-7 text-white/50">
              Your next favourite piece is waiting.
              Explore our collection and find something that feels like you.
            </p>

            <Link
              href="/products"
              className="mt-8 inline-flex border border-white bg-white px-8 py-4 text-[10px] uppercase tracking-[0.25em] text-black transition hover:bg-transparent hover:text-white"
            >
              Explore The Collection
              <span className="ml-4" aria-hidden="true">
                ↗
              </span>
            </Link>
          </div>
        ) : (
          <div className="mt-10 grid grid-cols-1 items-start gap-12 lg:grid-cols-3">
            {/* Cart items */}
            <section className="lg:col-span-2">
              <div className="mb-6 flex items-center justify-between border-b border-white/10 pb-4">
                <h2 className="text-xs uppercase tracking-[0.25em] text-white/70">
                  Your Selection
                </h2>

                <button
                  type="button"
                  onClick={clearCart}
                  className="text-[10px] uppercase tracking-[0.2em] text-white/45 transition hover:text-white"
                >
                  Clear All
                </button>
              </div>

              <div className="space-y-0">
                {cartItems.map((item, index) => (
                  <article
                    key={item.id}
                    className="grid grid-cols-1 gap-5 border-b border-white/10 py-7 sm:grid-cols-[auto_1fr_auto] sm:gap-7"
                  >
                    {/* Product image placeholder */}
                    <Link
                      href={`/products/${item.id}`}
                      className="group flex h-44 w-full items-center justify-center overflow-hidden border border-white/10 bg-white/[0.04] sm:h-40 sm:w-36"
                    >
                      <span className="font-serif text-3xl text-white/25 transition-transform duration-500 group-hover:scale-110">
                        FS.
                      </span>
                    </Link>

                    {/* Product details */}
                    <div className="flex min-w-0 flex-col justify-between">
                      <div>
                        <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                          {item.category}
                        </p>

                        <Link href={`/products/${item.id}`}>
                          <h3 className="mt-2 font-serif text-2xl text-white/90 transition hover:text-white/60">
                            {item.name}
                          </h3>
                        </Link>

                        <p className="mt-3 text-sm text-white/70">
                          {formatPrice(item.price)}
                        </p>
                      </div>

                      <div className="mt-6 flex flex-wrap items-center gap-5">
                        {/* Quantity controls */}
                        <div className="flex items-center border border-white/20">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity - 1
                              )
                            }
                            aria-label={`Decrease quantity of ${item.name}`}
                            className="px-4 py-2 text-lg text-white/70 transition hover:bg-white hover:text-black"
                          >
                            −
                          </button>

                          <span
                            className="min-w-10 px-2 py-2 text-center text-sm text-white"
                            aria-label={`Quantity: ${item.quantity}`}
                          >
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(
                                item.id,
                                item.quantity + 1
                              )
                            }
                            aria-label={`Increase quantity of ${item.name}`}
                            className="px-4 py-2 text-lg text-white/70 transition hover:bg-white hover:text-black"
                          >
                            +
                          </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[10px] uppercase tracking-[0.2em] text-white/40 transition hover:text-white"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Item total */}
                    <div className="flex items-center justify-between sm:block sm:text-right">
                      <p className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                        Item Total
                      </p>

                      <p className="mt-1 text-lg text-white">
                        {formatPrice(item.price * item.quantity)}
                      </p>

                      <p className="mt-1 text-xs text-white/35">
                        {item.quantity}{" "}
                        {item.quantity === 1 ? "piece" : "pieces"}
                      </p>
                    </div>
                  </article>
                ))}
              </div>

              {/* Continue shopping */}
              <Link
                href="/products"
                className="mt-8 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.25em] text-white/50 transition hover:text-white"
              >
                <span aria-hidden="true">←</span>
                Continue Exploring
              </Link>
            </section>

            {/* Order summary */}
            <aside className="h-fit border border-white/15 bg-black/30 p-6 md:p-8">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                The Final Details
              </p>

              <h2 className="mt-4 font-serif text-3xl text-white/90">
                Order Summary
              </h2>

              <div className="mt-8 space-y-5 border-b border-white/10 pb-6">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/50">
                    Subtotal
                  </span>

                  <span className="text-sm text-white/90">
                    {formatPrice(total)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm text-white/50">
                    Shipping
                  </span>

                  <span className="text-xs uppercase tracking-wider text-white/80">
                    Complimentary
                  </span>
                </div>
              </div>

              <div className="mt-6 flex items-end justify-between gap-4">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/45">
                    Total Amount
                  </p>

                  <p className="mt-2 font-serif text-3xl text-white md:text-4xl">
                    {formatPrice(total)}
                  </p>
                </div>

                <p className="pb-1 text-[10px] uppercase tracking-wider text-white/35">
                  INR
                </p>
              </div>

              <Link
                href="/checkout"
                className="mt-8 flex w-full items-center justify-between border border-white bg-white px-5 py-4 text-[10px] uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white"
              >
                <span>Proceed To Checkout</span>
                <span aria-hidden="true">↗</span>
              </Link>

              <p className="mt-5 text-center text-xs leading-6 text-white/35">
                Shipping is complimentary. Your final order details
                will be confirmed at checkout.
              </p>

              <div className="mt-7 border-t border-white/10 pt-5">
                <div className="flex items-center justify-center gap-3 text-[10px] uppercase tracking-[0.15em] text-white/40">
                  <span aria-hidden="true">◇</span>
                  <span>Style without compromise</span>
                  <span aria-hidden="true">◇</span>
                </div>
              </div>
            </aside>
          </div>
        )}

        {/* Bottom signature */}
        <div className="mt-20 border-t border-white/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            FashionStreet — Define Your Own
          </p>
        </div>
      </div>
    </main>
  );
}