import { signOut, useSession } from "next-auth/react";
import Link from 'next/link';

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <div className="text-white font-semibold">Auth App</div>
        <div className="space-x-4">
          {session ? (
            <>
              <Link href="/protected" className="text-white hover:underline">Protected</Link>
              <Link href="/unprotected" className="text-white hover:underline">Unprotected</Link>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="text-white hover:underline"
              >
                Logout
              </button>
            </>
          ) : null}
        </div>
      </div>
    </nav>
  );
}
