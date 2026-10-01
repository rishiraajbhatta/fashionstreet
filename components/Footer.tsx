export default function Footer() {
  return (
    <footer className="bg-black px-8 py-16 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-4">

          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              FashionStreet
            </h2>

            <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
              Discover fashion that matches your style.
              Quality pieces, timeless designs and everyday
              essentials.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="font-semibold">
              Shop
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Men</li>
              <li>Women</li>
              <li>Footwear</li>
              <li>Accessories</li>
              <li>New Arrivals</li>
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-semibold">
              Customer Care
            </h3>

            <ul className="mt-4 space-y-3 text-sm text-gray-400">
              <li>Contact Us</li>
              <li>Shipping & Delivery</li>
              <li>Returns & Refunds</li>
              <li>Track Order</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-semibold">
              Stay Updated
            </h3>

            <p className="mt-4 text-sm text-gray-400">
              Subscribe for new drops, exclusive offers
              and fashion updates.
            </p>

            <div className="mt-5 flex">
              <input
                type="email"
                placeholder="Your email"
                className="w-full bg-white px-4 py-3 text-sm text-black outline-none"
              />

              <button className="bg-gray-800 px-5 py-3 text-sm font-semibold">
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
          © 2026 FashionStreet. All rights reserved.
        </div>

      </div>
    </footer>
  );
}