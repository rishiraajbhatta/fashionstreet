import { notFound } from "next/navigation";
import { products } from "@/data/products";
import AddToCartButton from "@/components/AddToCartButton";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    notFound();
  }

  const discount = Math.round(
    ((product.originalPrice - product.price) /
      product.originalPrice) *
      100
  );

  return (
    <main className="min-h-screen bg-white px-8 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2">

        {/* Product Image */}
        <div className="flex min-h-[500px] items-center justify-center bg-gray-100">
          <span className="text-gray-400">
            Product Image
          </span>
        </div>

        {/* Product Information */}
        <div className="flex flex-col justify-center">

          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            {product.category}
          </p>

          <h1 className="mt-3 text-4xl font-bold tracking-tight text-black md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-3">
            <span className="text-lg">
              ⭐ {product.rating}
            </span>

            <span className="text-sm text-gray-500">
              {product.gender}
            </span>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <span className="text-3xl font-bold text-black">
              ₹{product.price}
            </span>

            <span className="text-lg text-gray-400 line-through">
              ₹{product.originalPrice}
            </span>

            <span className="bg-black px-3 py-1 text-sm font-semibold text-white">
              {discount}% OFF
            </span>
          </div>

          <p className="mt-8 max-w-xl leading-7 text-gray-600">
            {product.description}
          </p>

          <AddToCartButton product={product} />

        </div>

      </div>
    </main>
  );
}