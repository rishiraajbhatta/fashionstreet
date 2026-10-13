import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import ObsidianFlow from "@/components/ObsidianFlow";

export default async function AccountPage() {
  const session = await auth();
  const user = session?.user;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#070707] text-white">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <ObsidianFlow />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-black/40" />

      <div className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28">
        {/* Page heading */}
        <div className="border-b border-white/15 pb-10">
          <p className="text-xs uppercase tracking-[0.4em] text-white/45">
            FashionStreet / Personal Space
          </p>

          <h1 className="mt-5 font-serif text-5xl font-medium tracking-tight md:text-7xl">
            Your Account<span className="text-white/40">.</span>
          </h1>

          <p className="mt-6 max-w-xl text-sm leading-7 text-white/55 md:text-base">
            Your space, your style. Manage your account and continue
            discovering pieces that define you.
          </p>
        </div>

        {user ? (
          /* Signed-in account */
          <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-[1fr_0.8fr]">
            {/* Profile card */}
            <section className="border border-white/15 bg-black/30 p-7 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Account Overview
              </p>

              <div className="mt-8 flex flex-col items-start gap-6 sm:flex-row sm:items-center">
                {user.image ? (
                  <img
                    src={user.image}
                    alt="Your Google profile"
                    referrerPolicy="no-referrer"
                    className="h-24 w-24 rounded-full border border-white/20 object-cover"
                  />
                ) : (
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border border-white/20 bg-white/[0.05] font-serif text-3xl text-white/70">
                    {(user.name || user.email || "F")
                      .charAt(0)
                      .toUpperCase()}
                  </div>
                )}

                <div>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-white/40">
                    Welcome Back
                  </p>

                  <h2 className="mt-2 font-serif text-3xl text-white md:text-4xl">
                    {user.name || "FashionStreet Customer"}
                  </h2>

                  {user.email && (
                    <p className="mt-3 break-all text-sm text-white/55">
                      {user.email}
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-10 border-t border-white/10 pt-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-2 w-2 rounded-full bg-green-400" />

                  <p className="text-xs uppercase tracking-[0.15em] text-white/65">
                    Successfully signed in with Google
                  </p>
                </div>
              </div>

              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/account" });
                }}
              >
                <button
                  type="submit"
                  className="mt-8 w-full border border-white/25 px-6 py-4 text-[10px] uppercase tracking-[0.25em] text-white/80 transition hover:border-white hover:bg-white hover:text-black"
                >
                  Sign Out
                </button>
              </form>
            </section>

            {/* Quick links */}
            <section className="border border-white/15 bg-black/30 p-7 md:p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/40">
                Your FashionStreet
              </p>

              <h2 className="mt-4 font-serif text-3xl text-white/90">
                Keep Exploring.
              </h2>

              <div className="mt-8">
                <Link
                  href="/products"
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div>
                    <p className="text-sm text-white/90">
                      Explore The Shop
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Discover the collection
                    </p>
                  </div>

                  <span className="text-lg text-white/50 transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/wishlist"
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div>
                    <p className="text-sm text-white/90">
                      Your Wishlist
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Revisit your saved pieces
                    </p>
                  </div>

                  <span className="text-lg text-white/50 transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/cart"
                  className="group flex items-center justify-between border-b border-white/10 py-5"
                >
                  <div>
                    <p className="text-sm text-white/90">
                      Your Cart
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      Continue where you left off
                    </p>
                  </div>

                  <span className="text-lg text-white/50 transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </Link>

                <Link
                  href="/new-arrivals"
                  className="group flex items-center justify-between py-5"
                >
                  <div>
                    <p className="text-sm text-white/90">
                      New Arrivals
                    </p>
                    <p className="mt-1 text-xs text-white/40">
                      See what's new
                    </p>
                  </div>

                  <span className="text-lg text-white/50 transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </Link>
              </div>
            </section>
          </div>
        ) : (
          /* Signed-out account */
          <div className="mx-auto mt-14 max-w-xl border border-white/15 bg-black/30 p-8 text-center md:p-14">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-white/15">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.2"
                className="h-7 w-7 text-white/65"
                aria-hidden="true"
              >
                <circle cx="12" cy="8" r="4" />
                <path d="M4 21a8 8 0 0 1 16 0" />
              </svg>
            </div>

            <p className="mt-7 text-[10px] uppercase tracking-[0.3em] text-white/40">
              Welcome To FashionStreet
            </p>

            <h2 className="mt-4 font-serif text-3xl text-white md:text-4xl">
              Your Style. Your Space.
            </h2>

            <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-white/50">
              Sign in to your account to make your shopping experience
              personal and keep discovering pieces you'll love.
            </p>

            <form
              action={async () => {
                "use server";
                await signIn("google", {
                  redirectTo: "/account",
                });
              }}
            >
              <button
                type="submit"
                className="mt-9 flex w-full items-center justify-center gap-4 border border-white bg-white px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-black transition hover:bg-transparent hover:text-white"
              >
                <span className="text-base font-bold">G</span>
                Continue With Google
                <span aria-hidden="true">↗</span>
              </button>
            </form>

            <p className="mt-6 text-xs leading-6 text-white/35">
              Secure sign-in powered by Google.
            </p>

            <div className="mt-10 border-t border-white/10 pt-7">
              <Link
                href="/products"
                className="text-[10px] uppercase tracking-[0.2em] text-white/50 transition hover:text-white"
              >
                Continue Shopping →
              </Link>
            </div>
          </div>
        )}

        {/* Footer detail */}
        <div className="mt-20 border-t border-white/15 pt-6">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">
            FashionStreet — Define Your Own
          </p>
        </div>
      </div>
    </main>
  );
}