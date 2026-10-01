export type Product = {
  id: number;
  name: string;
  category: string;
  gender: "Men" | "Women" | "Unisex";
  price: number;
  originalPrice: number;
  rating: number;
  description: string;
  image: string;
};

export const products: Product[] = [
  {
    id: 1,
    name: "Oversized Black T-Shirt",
    category: "T-Shirts",
    gender: "Men",
    price: 999,
    originalPrice: 1499,
    rating: 4.5,
    description:
      "A relaxed oversized black t-shirt designed for everyday streetwear.",
    image: "/products/black-tshirt.jpg",
  },
  {
    id: 2,
    name: "Classic Denim Jacket",
    category: "Jackets",
    gender: "Men",
    price: 1999,
    originalPrice: 2999,
    rating: 4.7,
    description:
      "A timeless denim jacket with a clean fit that works across seasons.",
    image: "/products/denim-jacket.jpg",
  },
  {
    id: 3,
    name: "Relaxed Fit Cargo Pants",
    category: "Pants",
    gender: "Men",
    price: 1599,
    originalPrice: 2299,
    rating: 4.6,
    description:
      "Relaxed cargo pants with multiple pockets and a modern streetwear fit.",
    image: "/products/cargo-pants.jpg",
  },
  {
    id: 4,
    name: "Classic White Shirt",
    category: "Shirts",
    gender: "Men",
    price: 1299,
    originalPrice: 1899,
    rating: 4.4,
    description:
      "A clean classic white shirt suitable for casual and smart-casual looks.",
    image: "/products/white-shirt.jpg",
  },
  {
    id: 5,
    name: "Oversized White T-Shirt",
    category: "T-Shirts",
    gender: "Women",
    price: 999,
    originalPrice: 1499,
    rating: 4.6,
    description:
      "A comfortable oversized white t-shirt with a minimal everyday design.",
    image: "/products/white-tshirt.jpg",
  },
  {
    id: 6,
    name: "Wide Leg Trousers",
    category: "Pants",
    gender: "Women",
    price: 1599,
    originalPrice: 2299,
    rating: 4.5,
    description:
      "Modern wide-leg trousers designed for a relaxed and stylish silhouette.",
    image: "/products/wide-trousers.jpg",
  },
  {
    id: 7,
    name: "Minimal Street Sneakers",
    category: "Footwear",
    gender: "Unisex",
    price: 2499,
    originalPrice: 3499,
    rating: 4.7,
    description:
      "Minimal everyday sneakers with a clean streetwear-inspired design.",
    image: "/products/sneakers.jpg",
  },
  {
    id: 8,
    name: "Classic Crossbody Bag",
    category: "Accessories",
    gender: "Women",
    price: 1399,
    originalPrice: 1999,
    rating: 4.5,
    description:
      "A compact crossbody bag designed to complete everyday outfits.",
    image: "/products/crossbody-bag.jpg",
  },
  {
    id: 9,
    name: "Premium Oversized Hoodie",
    category: "Hoodies",
    gender: "Unisex",
    price: 1799,
    originalPrice: 2499,
    rating: 4.8,
    description:
      "A premium oversized hoodie with a soft feel and modern relaxed fit.",
    image: "/products/hoodie.jpg",
  },
  {
    id: 10,
    name: "Minimal Shoulder Bag",
    category: "Accessories",
    gender: "Women",
    price: 1299,
    originalPrice: 1999,
    rating: 4.4,
    description:
      "A minimal shoulder bag designed for everyday use and easy styling.",
    image: "/products/shoulder-bag.jpg",
  },
];