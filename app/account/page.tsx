import { auth, signIn, signOut } from "@/auth";

export default async function AccountPage() {
  const session = await auth();
  const user = session?.user;

  if (user) {
    return (
      <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6 py-16">
        <div className="w-full max-w-md border border-gray-200 bg-white p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
            FashionStreet
          </p>

          <h1 className="mt-5 text-3xl font-black tracking-tight text-black">
            Welcome Back!
          </h1>

          {user.image && (
            <img
              src={user.image}
              alt="Your Google profile"
              className="mx-auto mt-8 h-24 w-24 rounded-full object-cover"
            />
          )}

          <p className="mt-6 text-xl font-bold text-black">
            {user.name || "FashionStreet Customer"}
          </p>

          {user.email && (
            <p className="mt-2 text-sm text-gray-500">
              {user.email}
            </p>
          )}

          <p className="mt-6 text-sm text-green-700">
            ✓ You are successfully signed in.
          </p>

          <form
            action={async () => {
              "use server";
              await signOut({ redirectTo: "/account" });
            }}
          >
            <button
              type="submit"
              className="mt-8 w-full bg-black px-5 py-4 text-sm font-bold uppercase tracking-widest text-white transition hover:bg-gray-800"
            >
              Sign Out
            </button>
          </form>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-[80vh] items-center justify-center bg-gray-50 px-6 py-16">
      <div className="w-full max-w-md border border-gray-200 bg-white p-8 sm:p-10">
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-gray-400">
          FashionStreet
        </p>

        <h1 className="mt-5 text-center text-3xl font-black tracking-tight text-black">
          Welcome Back
        </h1>

        <p className="mt-3 text-center text-sm leading-6 text-gray-500">
          Sign in to your account to continue shopping.
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
            className="mt-8 flex w-full items-center justify-center gap-3 border border-gray-300 px-5 py-4 text-sm font-semibold text-black transition hover:bg-gray-50"
          >
            <span className="text-lg font-bold">G</span>
            Continue with Google
          </button>
        </form>

        <p className="mt-8 text-center text-xs leading-5 text-gray-400">
          Sign in securely with your Google account.
        </p>
      </div>
    </main>
  );
}