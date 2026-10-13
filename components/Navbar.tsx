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

  const navLinks = [
    { label: "New", href: "/new-arrivals" },
    { label: "Men", href: "/men" },
    { label: "Women", href: "/women" },
    { label: "Collections", href: "/new-arrivals" },
  ];

  return (
    <header className="relative z-50 border-b border-white/15 bg-[#090909] text-[#e8e5df]">
      <nav className="mx-auto max-w-[1800px] px-5 sm:px-8 lg:px-12">
        {/* Desktop and Mobile Header */}
        <div className="flex min-h-[76px] items-center justify-between gap-5">
          {/* Brand */}
          <Link
            href="/"
            className="shrink-0 font-serif text-lg tracking-[0.22em] transition-opacity hover:opacity-70 sm:text-xl"
            aria-label="FashionStreet home"
          >
            FASHIONSTREET
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-7 lg:flex xl:gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="relative py-2 text-[9px] uppercase tracking-[0.25em] text-white/65 transition-colors duration-300 hover:text-white xl:text-[10px]"
              >
                {link.label}
              </Link>
            ))}

            {/* Shop - Updated */}
            <Link
              href="/products"
              className="py-2 text-[9px] uppercase tracking-[0.25em] text-white/65 transition-colors hover:text-white xl:text-[10px]"
            >
              Shop
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-5 md:flex">
            {/* Search */}
            <Link
              href="/search"
              aria-label="Search"
              className="transition-opacity hover:opacity-60"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <circle cx="10.8" cy="10.8" r="6.8" />
                <path d="m16 16 5 5" />
              </svg>
            </Link>

            {/* Account */}
            <Link
              href="/account"
              aria-label={user ? accountLabel : "Sign in"}
              title={user ? accountLabel : "Sign in"}
              className="flex items-center transition-opacity hover:opacity-60"
            >
              {user?.image ? (
                <img
                  src={user.image}
                  alt=""
                  className="h-6 w-6 rounded-full object-cover"
                />
              ) : (
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.3"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="7.5" r="3.5" />
                  <path d="M4.5 21v-2a7.5 7.5 0 0 1 15 0v2z" />
                </svg>
              )}
            </Link>

            {/* Wishlist */}
            <Link
              href="/wishlist"
              aria-label={`Wishlist${wishlistCount ? `, ${wishlistCount} items` : ""}`}
              className="relative transition-opacity hover:opacity-60"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M20.8 8.8c0 5.1-8.8 11-8.8 11s-8.8-5.9-8.8-11a4.7 4.7 0 0 1 8.8-2.4 4.7 4.7 0 0 1 8.8 2.4Z" />
              </svg>

              {wishlistCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e8e5df] px-1 text-[9px] text-black">
                  {wishlistCount}
                </span>
              )}
            </Link>

            {/* Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping bag${cartCount ? `, ${cartCount} items` : ""}`}
              className="relative transition-opacity hover:opacity-60"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e8e5df] px-1 text-[9px] text-black">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center gap-4 md:hidden">
            {/* Mobile Cart */}
            <Link
              href="/cart"
              aria-label={`Shopping bag${cartCount ? `, ${cartCount} items` : ""}`}
              className="relative"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.3"
                className="h-5 w-5"
                aria-hidden="true"
              >
                <path d="M5 8h14l1 13H4L5 8Z" />
                <path d="M9 9V6a3 3 0 0 1 6 0v3" />
              </svg>

              {cartCount > 0 && (
                <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-[#e8e5df] px-1 text-[9px] text-black">
                  {cartCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-9 w-9 items-center justify-center border border-white/20 transition hover:border-white/60"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="text-lg">{menuOpen ? "×" : "☰"}</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="border-t border-white/15 py-7 md:hidden">
            <div className="flex flex-col">
              {[
                { label: "Home", href: "/" },
                ...navLinks,
                { label: "Shop All", href: "/products" },
                { label: "Search", href: "/search" },
                { label: "Wishlist", href: "/wishlist" },
                { label: "My Cart", href: "/cart" },
                {
                  label: user ? accountLabel : "Sign In",
                  href: "/account",
                },
              ].map((link, index) => (
                <Link
                  key={`${link.label}-${index}`}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex items-center justify-between border-b border-white/[0.08] py-4 text-[10px] uppercase tracking-[0.25em] text-white/70 transition-colors hover:text-white"
                >
                  {link.label}

                  {link.label === "Wishlist" && wishlistCount > 0 && (
                    <span>{wishlistCount}</span>
                  )}

                  {link.label === "My Cart" && cartCount > 0 && (
                    <span>{cartCount}</span>
                  )}

                  <span aria-hidden="true" className="text-white/30">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}