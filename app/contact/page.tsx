"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSending) return;

    setIsSending(true);
    setStatus("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || "Unable to send your message. Please try again."
        );
      }

      setStatus("Your message has been sent successfully!");
      form.reset();
    } catch (error) {
      setStatus(
        error instanceof Error
          ? error.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="border-b border-white/10 px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-gray-500">
            FashionStreet / Customer Care
          </p>

          <h1 className="mt-8 max-w-4xl text-5xl font-medium leading-tight tracking-tight sm:text-7xl lg:text-8xl">
            We&apos;re here
            <br />
            <span className="font-serif italic text-gray-400">
              to help.
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Questions about your order, delivery, or something
            else? Get in touch with our team. We&apos;re here to
            make your FashionStreet experience seamless.
          </p>
        </div>
      </section>

      {/* Contact Details and Form */}
      <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Contact Information */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Get in touch
            </p>

            <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-4xl">
              Let&apos;s talk.
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-400">
              Whether you need help finding the right piece or
              have a question about an order, we&apos;d love to hear
              from you.
            </p>

            <div className="mt-12 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Email
              </p>

              <a
                href="mailto:rishiraajbhattacharya@gmail.com"
                className="mt-3 inline-block break-all text-lg transition hover:text-gray-400 sm:text-xl"
              >
                rishiraajbhattacharya@gmail.com
              </a>

              <p className="mt-2 text-xs text-gray-600">
                Replace this example with your actual support email.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Phone
              </p>

              <p className="mt-3 text-lg sm:text-xl">
                Customer support
              </p>

              <p className="mt-2 text-sm text-gray-500">
                Add your business phone number here.
              </p>
            </div>

            <div className="mt-8 border-t border-white/10 pt-7">
              <p className="text-xs uppercase tracking-[0.25em] text-gray-500">
                Support Hours
              </p>

              <p className="mt-3 text-base text-gray-300">
                Monday – Saturday
              </p>

              <p className="mt-2 text-sm text-gray-500">
                10:00 AM – 6:00 PM IST
              </p>
            </div>

            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-gray-400 transition hover:text-white"
              >
                <span>←</span>
                Back to Home
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="border border-white/10 bg-white/[0.02] p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-500">
              Send us a message
            </p>

            <h2 className="mt-5 text-2xl font-medium sm:text-3xl">
              How can we help?
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Fill in the details below and tell us what you need.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-6"
            >
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Full Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  maxLength={100}
                  autoComplete="name"
                  placeholder="Enter your name"
                  className="w-full border border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  maxLength={254}
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="w-full border border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  required
                  defaultValue=""
                  className="w-full border border-white/10 bg-black px-4 py-4 text-sm text-white outline-none transition focus:border-white/40"
                >
                  <option value="" disabled>
                    Select a subject
                  </option>
                  <option value="Order enquiry">Order enquiry</option>
                  <option value="Shipping and delivery">
                    Shipping &amp; delivery
                  </option>
                  <option value="Returns and refunds">
                    Returns &amp; refunds
                  </option>
                  <option value="Product enquiry">Product enquiry</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.2em] text-gray-400"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  required
                  minLength={5}
                  maxLength={5000}
                  rows={5}
                  placeholder="Tell us how we can help..."
                  className="w-full resize-y border border-white/10 bg-transparent px-4 py-4 text-sm text-white outline-none transition placeholder:text-gray-700 focus:border-white/40"
                />
              </div>

              {/* Status Message */}
              {status && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`text-sm leading-6 ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-white px-6 py-4 text-xs font-bold uppercase tracking-[0.25em] text-black transition hover:bg-gray-300 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSending ? "Sending..." : "Send Message →"}
              </button>

              <p className="text-xs leading-5 text-gray-600">
                Your enquiry will be sent securely to our customer
                support team.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom Banner */}
      <section className="border-t border-white/10 px-6 py-16 text-center sm:px-10">
        <p className="text-xs uppercase tracking-[0.35em] text-gray-500">
          FashionStreet
        </p>

        <h2 className="mt-5 text-3xl font-medium tracking-tight sm:text-5xl">
          Your style. Your story.
        </h2>

        <Link
          href="/products"
          className="mt-8 inline-block border border-white/20 px-8 py-4 text-xs font-semibold uppercase tracking-[0.2em] transition hover:bg-white hover:text-black"
        >
          Explore Collection
        </Link>
      </section>
    </main>
  );
}