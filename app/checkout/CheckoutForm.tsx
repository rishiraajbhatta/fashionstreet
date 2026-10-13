"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";

export default function CheckoutForm() {
  const { cartItems } = useCart();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-white px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-black">
            Your cart is empty
          </h1>

          <p className="mt-4 text-gray-600">
            Add some products before proceeding to checkout.
          </p>

          <Link
            href="/new-arrivals"
            className="mt-8 inline-block bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </div>
      </main>
    );
  }

  if (submitted) {
    return (
      <main className="min-h-screen bg-white px-6 py-20">
        <div className="mx-auto max-w-2xl border border-gray-200 p-10 text-center">
          <h1 className="text-3xl font-bold text-black">
            Checkout Details Submitted!
          </h1>

          <p className="mt-4 text-gray-600">
            Your checkout form is working. Order processing and
            payment have not been implemented yet.
          </p>

          <Link
            href="/cart"
            className="mt-8 inline-block bg-black px-6 py-3 font-semibold text-white hover:bg-gray-800"
          >
            Return to Cart
          </Link>
        </div>
      </main>
    );
  }

  const inputClass =
    "mt-2 w-full border border-gray-300 px-4 py-3 text-black outline-none focus:border-black";

  return (
    <main className="min-h-screen bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
          FashionStreet
        </p>

        <h1 className="mt-2 text-4xl font-bold text-black md:text-5xl">
          Checkout
        </h1>

        <p className="mt-4 text-gray-600">
          Enter your contact and delivery details.
        </p>

        <form
          onSubmit={handleSubmit}
          className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-3"
        >
          <div className="space-y-8 lg:col-span-2">
            <section className="border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-black">
                Contact Information
              </h2>

              <div className="mt-6">
                <label htmlFor="name" className="font-medium text-black">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="font-medium text-black">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="font-medium text-black">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    value={form.phone}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="10-digit mobile number"
                    required
                  />
                </div>
              </div>
            </section>

            <section className="border border-gray-200 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-black">
                Shipping Address
              </h2>

              <div className="mt-6">
                <label
                  htmlFor="address"
                  className="font-medium text-black"
                >
                  House No., Street and Area
                </label>
                <input
                  id="address"
                  name="address"
                  autoComplete="street-address"
                  value={form.address}
                  onChange={handleChange}
                  className={inputClass}
                  required
                />
              </div>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="city" className="font-medium text-black">
                    City
                  </label>
                  <input
                    id="city"
                    name="city"
                    autoComplete="address-level2"
                    value={form.city}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="state" className="font-medium text-black">
                    State
                  </label>
                  <input
                    id="state"
                    name="state"
                    autoComplete="address-level1"
                    value={form.state}
                    onChange={handleChange}
                    className={inputClass}
                    required
                  />
                </div>
              </div>

              <div className="mt-6 sm:max-w-xs">
                <label htmlFor="pincode" className="font-medium text-black">
                  PIN Code
                </label>
                <input
                  id="pincode"
                  name="pincode"
                  inputMode="numeric"
                  autoComplete="postal-code"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  value={form.pincode}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="6-digit PIN code"
                  required
                />
              </div>
            </section>
          </div>

          <aside className="h-fit border border-gray-200 p-6 sm:p-8">
            <h2 className="text-2xl font-bold text-black">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between gap-4 text-sm"
                >
                  <div>
                    <p className="font-medium text-black">{item.name}</p>
                    <p className="mt-1 text-gray-500">
                      Qty: {item.quantity}
                    </p>
                  </div>

                  <p className="font-semibold text-black">
                    ₹{item.price * item.quantity}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-gray-200 pt-4">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span>₹{total}</span>
              </div>

              <div className="mt-3 flex justify-between text-gray-600">
                <span>Shipping</span>
                <span>FREE</span>
              </div>

              <div className="mt-5 flex justify-between border-t border-gray-200 pt-5">
                <span className="text-lg font-bold text-black">Total</span>
                <span className="text-2xl font-bold text-black">
                  ₹{total}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Place Order
            </button>

            <p className="mt-4 text-center text-xs text-gray-500">
              Payments and order processing will be added in a later step.
            </p>

            <Link
              href="/cart"
              className="mt-5 block text-center text-sm font-semibold text-gray-600 hover:text-black"
            >
              Return to Cart
            </Link>
          </aside>
        </form>
      </div>
    </main>
  );
}