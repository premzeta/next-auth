import { useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Link from 'next/link';

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (session) {
      router.push("/protected");
    }
  }, [session, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!result.error) {
      alert("Login successful!");
      router.push("/protected");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-6">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-sm">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border rounded"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
          Login
        </button>
      </form>

      <div className="mt-6 space-y-4">
        <button
          onClick={() => signIn("google")}
          className="bg-red-500 text-white px-4 py-2 rounded w-full"
        >
          Login with Google
        </button>
        <button
          onClick={() => signIn("facebook")}
          className="bg-blue-600 text-white px-4 py-2 rounded w-full"
        >
          Login with Facebook
        </button>
      </div>

      <p className="mt-4">
  Don&apos;t have an account? <Link href="/signup" className="text-blue-500 underline">Sign Up</Link>
</p>
    </div>
  );
}
Home.noNavbar = true;
