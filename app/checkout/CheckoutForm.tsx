"use client";

import { useState } from "react";
import Script from "next/script";
import { useCart } from "@/components/CartContext";

declare global {
  interface Window {
    Razorpay: new (options: Record<string, unknown>) => {
      open: () => void;
    };
  }
}

type RazorpayResponse = {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
};

export default function CheckoutForm() {
  const { cartItems } = useCart();

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  async function handlePayment() {
    if (!cartItems.length) {
      setMessage("Your cart is empty.");
      return;
    }

    if (!window.Razorpay) {
      setMessage("Payment system is loading. Please try again.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const orderResponse = await fetch("/api/payments/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: cartItems.map((item) => ({
            id: item.id,
            quantity: item.quantity,
          })),
        }),
      });

      const order = await orderResponse.json();

      if (!orderResponse.ok) {
        throw new Error(order.error || "Unable to create payment order.");
      }

      const razorpay = new window.Razorpay({
        key: order.keyId,
        amount: order.amount,
        currency: order.currency,
        order_id: order.orderId,
        name: "FashionStreet",
        description: "FashionStreet test purchase",

        handler: async (response: unknown) => {
          try {
            const payment = response as RazorpayResponse;

            const verifyResponse = await fetch(
              "/api/payments/verify-payment",
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(payment),
              }
            );

            const result = await verifyResponse.json();

            if (!verifyResponse.ok || !result.verified) {
              setMessage(
                result.error || "Payment verification failed."
              );
              return;
            }

            setMessage(
              "Test payment verified successfully! Your order has not yet been saved to a database."
            );
          } catch {
            setMessage("Unable to verify payment. Please try again.");
          } finally {
            setLoading(false);
          }
        },

        modal: {
          ondismiss: () => {
            setLoading(false);
            setMessage("Payment window closed.");
          },
        },
      });

      razorpay.open();
    } catch (error) {
      setMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while starting payment."
      );
      setLoading(false);
    }
  }

  return (
    <>
      <Script
        src="https://checkout.razorpay.com/v1/checkout.js"
        strategy="afterInteractive"
      />

      <section className="mx-auto w-full max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">
          FashionStreet / Secure Checkout
        </p>

        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-white">
          Checkout
        </h1>

        <p className="mt-3 text-sm text-gray-400">
          Review your selection before proceeding to payment.
        </p>

        <div className="mt-8 border border-white/20 bg-white/[0.03] p-6 sm:p-8">
          <h2 className="text-lg font-semibold text-white">
            Order Summary
          </h2>

          {cartItems.length === 0 ? (
            <p className="mt-5 text-sm text-gray-400">
              Your cart is empty. Add some products before checking out.
            </p>
          ) : (
            <>
              <div className="mt-6 space-y-5">
                {cartItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start justify-between gap-4"
                  >
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-white">
                        {item.name}
                      </p>

                      <p className="mt-1 text-xs text-gray-400">
                        Quantity: {item.quantity}
                      </p>
                    </div>

                    <p className="shrink-0 text-sm text-gray-200">
                      ₹
                      {(item.price * item.quantity).toLocaleString("en-IN")}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-7 border-t border-white/20 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-base font-medium text-gray-300">
                    Total
                  </span>

                  <span className="text-2xl font-semibold text-white">
                    ₹{total.toLocaleString("en-IN")}
                  </span>
                </div>
              </div>

              <button
                type="button"
                onClick={handlePayment}
                disabled={loading}
                className="mt-7 w-full bg-white px-6 py-4 text-sm font-semibold uppercase tracking-widest text-black transition hover:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {loading ? "Processing..." : "Pay with Razorpay"}
              </button>

              <p className="mt-4 text-center text-xs text-gray-500">
                Secure payment checkout · Razorpay Test Mode
              </p>
            </>
          )}

          {message && (
            <div
              role="status"
              aria-live="polite"
              className="mt-5 border border-white/20 px-4 py-3 text-sm text-gray-200"
            >
              {message}
            </div>
          )}
        </div>

        <p className="mt-5 text-xs leading-6 text-gray-500">
          Portfolio demonstration using Razorpay. Test payments only.
          Orders are not yet persisted to the database.
        </p>
      </section>
    </>
  );
}