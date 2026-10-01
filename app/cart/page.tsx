"use client";

import Link from "next/link";
import { useCart } from "@/components/CartContext";

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

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-white px-8 py-20">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            FashionStreet
          </p>

          <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
            Your Cart
          </h1>

          <div className="mt-12 border border-gray-200 p-10 text-center">
            <h2 className="text-2xl font-semibold text-black">
              Your cart is empty
            </h2>

            <p className="mt-3 text-gray-500">
              Add some products to your cart and they will appear here.
            </p>

            <Link
              href="/new-arrivals"
              className="mt-6 inline-block bg-black px-6 py-3 font-semibold text-white transition hover:bg-gray-800"
            >
              Shop New Arrivals
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

        <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
          Your Cart
        </h1>

        <div className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-6">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col gap-6 border border-gray-200 p-6 sm:flex-row"
                >
                  {/* Product Image */}
                  <div className="flex h-40 w-full shrink-0 items-center justify-center bg-gray-100 sm:w-40">
                    <span className="text-sm text-gray-400">
                      Product Image
                    </span>
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-1 flex-col justify-between">
                    <div>
                      <p className="text-sm text-gray-500">
                        {item.category}
                      </p>

                      <h2 className="mt-1 text-xl font-semibold text-black">
                        {item.name}
                      </h2>

                      <p className="mt-2 text-lg font-bold text-black">
                        ₹{item.price}
                      </p>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-4">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-300">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.quantity - 1
                            )
                          }
                          className="px-4 py-2 text-lg text-black hover:bg-gray-100"
                        >
                          −
                        </button>

                        <span className="px-4 py-2 text-black">
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
                          className="px-4 py-2 text-lg text-black hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove */}
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-sm font-semibold text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>

                  {/* Item Total */}
                  <div className="text-left sm:text-right">
                    <p className="text-sm text-gray-500">
                      Item Total
                    </p>

                    <p className="mt-1 text-xl font-bold text-black">
                      ₹{item.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Clear Cart */}
            <button
              type="button"
              onClick={clearCart}
              className="mt-6 text-sm font-semibold text-red-600 hover:underline"
            >
              Clear Cart
            </button>
          </div>

          {/* Order Summary */}
          <div className="h-fit border border-gray-200 p-6">
            <h2 className="text-2xl font-bold text-black">
              Order Summary
            </h2>

            <div className="mt-6 flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-gray-600">
                Subtotal
              </span>

              <span className="font-semibold text-black">
                ₹{total}
              </span>
            </div>

            <div className="mt-4 flex items-center justify-between border-b border-gray-200 pb-4">
              <span className="text-gray-600">
                Shipping
              </span>

              <span className="font-semibold text-black">
                FREE
              </span>
            </div>

            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-bold text-black">
                Total
              </span>

              <span className="text-2xl font-bold text-black">
                ₹{total}
              </span>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}