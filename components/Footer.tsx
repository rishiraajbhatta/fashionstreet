import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-16 text-white sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="text-2xl font-black tracking-tight"
            >
              FashionStreet
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-gray-500">
              Modern fashion for your everyday rotation.
              Clean silhouettes, timeless essentials and
              pieces built around your style.
            </p>

            <p className="mt-8 text-xs uppercase tracking-[0.3em] text-gray-700">
              Bengaluru / India
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Shop
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm">
              <Link
                href="/men"
                className="text-gray-300 transition hover:text-white"
              >
                Men
              </Link>

              <Link
                href="/women"
                className="text-gray-300 transition hover:text-white"
              >
                Women
              </Link>

              <Link
                href="/new-arrivals"
                className="text-gray-300 transition hover:text-white"
              >
                New Arrivals
              </Link>

              <Link
                href="/search?category=Footwear"
                className="text-gray-300 transition hover:text-white"
              >
                Footwear
              </Link>

              <Link
                href="/search?category=Accessories"
                className="text-gray-300 transition hover:text-white"
              >
                Accessories
              </Link>
            </div>
          </div>

          {/* Customer Care */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Customer Care
            </h3>

            <div className="mt-6 flex flex-col gap-4 text-sm">
              <span className="text-gray-300">
                Contact Us
              </span>

              <span className="text-gray-300">
                Shipping & Delivery
              </span>

              <span className="text-gray-300">
                Returns & Refunds
              </span>

              <span className="text-gray-300">
                Track Order
              </span>

              <span className="text-gray-300">
                FAQs
              </span>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.25em] text-gray-500">
              Stay Updated
            </h3>

            <p className="mt-6 text-sm leading-6 text-gray-500">
              Get notified about new drops, exclusive
              offers and everything happening at
              FashionStreet.
            </p>

            <div className="mt-6 flex border-b border-gray-700">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-transparent py-3 text-sm text-white outline-none placeholder:text-gray-600"
              />

              <button
                type="button"
                className="px-2 text-sm font-bold text-white transition hover:text-gray-400"
              >
                →
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-gray-800 pt-8 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-xs text-gray-600">
            © 2026 FashionStreet. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs uppercase tracking-widest text-gray-600">
            <span>Instagram</span>
            <span>Privacy</span>
            <span>Terms</span>
          </div>

        </div>

      </div>
    </footer>
  );
}