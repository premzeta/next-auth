import { useSession } from "next-auth/react";
//import Navbar from "../components/Navbar";

export default function ProtectedPage() {
  const { data: session } = useSession();

  if (!session) return <p>You must be logged in to view this page.</p>;

  return (
    <div>
      {/* <Navbar /> */}
      <p>Welcome to the protected page, {session.user.name}!</p>
    </div>
  );
}
