"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Product } from "@/data/products";

type WishlistContextType = {
  wishlistItems: Product[];
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productId: number) => void;
  isInWishlist: (productId: number) => boolean;
  clearWishlist: () => void;
};

const WishlistContext = createContext<
  WishlistContextType | undefined
>(undefined);

export function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlistItems, setWishlistItems] = useState<Product[]>([]);
  const [wishlistLoaded, setWishlistLoaded] = useState(false);

  // Load wishlist from localStorage
  useEffect(() => {
    try {
      const savedWishlist = localStorage.getItem(
        "fashionstreet-wishlist"
      );

      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist));
      }
    } catch {
      localStorage.removeItem("fashionstreet-wishlist");
    } finally {
      setWishlistLoaded(true);
    }
  }, []);

  // Save wishlist to localStorage
  useEffect(() => {
    if (!wishlistLoaded) {
      return;
    }

    localStorage.setItem(
      "fashionstreet-wishlist",
      JSON.stringify(wishlistItems)
    );
  }, [wishlistItems, wishlistLoaded]);

  const addToWishlist = (product: Product) => {
    setWishlistItems((currentItems) => {
      const alreadyExists = currentItems.some(
        (item) => item.id === product.id
      );

      if (alreadyExists) {
        return currentItems;
      }

      return [...currentItems, product];
    });
  };

  const removeFromWishlist = (productId: number) => {
    setWishlistItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const isInWishlist = (productId: number) => {
    return wishlistItems.some(
      (item) => item.id === productId
    );
  };

  const clearWishlist = () => {
    setWishlistItems([]);
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        clearWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);

  if (!context) {
    throw new Error(
      "useWishlist must be used inside WishlistProvider"
    );
  }

  return context;
}