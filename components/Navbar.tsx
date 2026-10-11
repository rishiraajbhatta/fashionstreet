"use client";

import { useState } from "react";
import Link from "next/link";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";

type NavbarUser = {
  name?: string | null;
  email?: string | null;
  image?: string | null;
};

export default function Navbar({
  user,
}: {
  user: NavbarUser | null;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const { cartItems } = useCart();
  const { wishlistItems } = useWishlist();

  const cartCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const wishlistCount = wishlistItems.length;

  const accountLabel = user?.name || "My Account";

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

          {/* Account */}
          <Link
            href="/account"
            className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-500"
          >
            {user?.image ? (
              <img
                src={user.image}
                alt=""
                className="h-8 w-8 rounded-full object-cover"
              />
            ) : null}

            <span>{user ? accountLabel : "Sign In"}</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-black md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
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

            <div className="flex flex-col gap-5 border-t pt-5">
              <Link
                href="/search"
                className="font-medium text-black"
                onClick={() => setMenuOpen(false)}
              >
                Search
              </Link>

              <Link
                href="/wishlist"
                className="font-medium text-black"
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
                className="font-medium text-black"
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
                className="flex items-center gap-3 font-medium text-black"
                onClick={() => setMenuOpen(false)}
              >
                {user?.image ? (
                  <img
                    src={user.image}
                    alt=""
                    className="h-8 w-8 rounded-full object-cover"
                  />
                ) : null}

                <span>{user ? accountLabel : "Sign In"}</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}