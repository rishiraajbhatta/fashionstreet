"use client";

import { useState } from "react";
import type { Product } from "@/data/products";
import { useCart } from "@/components/CartContext";

export default function AddToCartButton({
  product,
}: {
  product: Product;
}) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 1500);
  };

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 w-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
    >
      {added ? "✓ Added to Cart" : "Add to Cart"}
    </button>
  );
}