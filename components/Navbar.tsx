"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

  return (
    <nav className="border-b bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-black"
        >
          FashionStreet
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Home
          </Link>

          <Link
            href="/men"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Men
          </Link>

          <Link
            href="/women"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Women
          </Link>

          <Link
            href="/new-arrivals"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            New Arrivals
          </Link>
        </div>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-6 md:flex">

          <Link
            href="/search"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Search
          </Link>

          <Link
            href="/wishlist"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Wishlist
            {wishlistCount > 0 && (
              <span className="ml-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                {wishlistCount}
              </span>
            )}
          </Link>

          <Link
            href="/cart"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Cart
            {cartCount > 0 && (
              <span className="ml-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <Link
            href="/account"
            className="text-sm font-medium text-black hover:text-gray-500"
          >
            Account
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black md:hidden"
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">

            <Link
              href="/"
              className="font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/men"
              className="font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              Men
            </Link>

            <Link
              href="/women"
              className="font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              Women
            </Link>

            <Link
              href="/new-arrivals"
              className="font-medium text-black"
              onClick={() => setMenuOpen(false)}
            >
              New Arrivals
            </Link>

            <div className="border-t pt-5">

              <Link
                href="/search"
                className="mr-6 font-medium text-black"
                onClick={() => setMenuOpen(false)}
              >
                Search
              </Link>

              <Link
                href="/wishlist"
                className="mr-6 font-medium text-black"
                onClick={() => setMenuOpen(false)}
              >
                Wishlist
                {wishlistCount > 0 && (
                  <span className="ml-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                    {wishlistCount}
                  </span>
                )}
              </Link>

              <Link
                href="/cart"
                className="mr-6 font-medium text-black"
                onClick={() => setMenuOpen(false)}
              >
                Cart
                {cartCount > 0 && (
                  <span className="ml-2 rounded-full bg-black px-2 py-1 text-xs text-white">
                    {cartCount}
                  </span>
                )}
              </Link>

              <Link
                href="/account"
                className="font-medium text-black"
                onClick={() => setMenuOpen(false)}
              >
                Account
              </Link>

            </div>

          </div>
        </div>
      )}
    </nav>
  );
}