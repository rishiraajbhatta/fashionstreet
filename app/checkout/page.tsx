import { auth, signIn } from "@/auth";
import Link from "next/link";
import CheckoutForm from "./CheckoutForm";

export default async function CheckoutPage() {
  const session = await auth();

  if (!session?.user) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-6 py-20">
        <div className="w-full max-w-md border border-gray-200 p-8 text-center sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-500">
            FashionStreet
          </p>

          <h1 className="mt-4 text-3xl font-bold text-black">
            Sign in to Checkout
          </h1>

          <p className="mt-4 text-gray-600">
            Please sign in with your Google account before continuing to checkout.
          </p>

          <form
            action={async () => {
              "use server";

              await signIn("google", {
                redirectTo: "/checkout",
              });
            }}
          >
            <button
              type="submit"
              className="mt-8 w-full bg-black px-6 py-4 font-semibold text-white transition hover:bg-gray-800"
            >
              Continue with Google
            </button>
          </form>

          <Link
            href="/cart"
            className="mt-6 inline-block text-sm font-semibold text-gray-600 hover:text-black"
          >
            Return to Cart
          </Link>
        </div>
      </main>
    );
  }

  return <CheckoutForm />;
}