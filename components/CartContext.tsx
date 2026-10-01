"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import type { Product } from "@/data/products";

type CartItem = Product & {
  quantity: number;
};

type CartContextType = {
  cartItems: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [cartLoaded, setCartLoaded] = useState(false);

  // Load the saved cart once when the browser starts
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(
        "fashionstreet-cart"
      );

      if (savedCart) {
        setCartItems(JSON.parse(savedCart));
      }
    } catch {
      localStorage.removeItem("fashionstreet-cart");
    } finally {
      setCartLoaded(true);
    }
  }, []);

  // Only save after the existing cart has been loaded
  useEffect(() => {
    if (!cartLoaded) {
      return;
    }

    localStorage.setItem(
      "fashionstreet-cart",
      JSON.stringify(cartItems)
    );
  }, [cartItems, cartLoaded]);

  const addToCart = (product: Product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (productId: number) => {
    setCartItems((currentItems) =>
      currentItems.filter(
        (item) => item.id !== productId
      )
    );
  };

  const updateQuantity = (
    productId: number,
    quantity: number
  ) => {
    if (quantity < 1) {
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? {
              ...item,
              quantity,
            }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(
      "useCart must be used inside CartProvider"
    );
  }

  return context;
}