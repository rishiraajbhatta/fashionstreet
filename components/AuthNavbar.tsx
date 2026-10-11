import Link from "next/link";
import { auth } from "@/auth";

export default async function AuthNavbar() {
  const session = await auth();
  const user = session?.user;

  return (
    <Link
      href="/account"
      className="flex items-center gap-2 text-sm font-medium text-black transition hover:text-gray-500"
    >
      {user?.image ? (
        <img
          src={user.image}
          alt=""
          className="h-8 w-8 rounded-full object-cover"
        />
      ) : null}

      <span>{user?.name || "Sign In"}</span>
    </Link>
  );
}