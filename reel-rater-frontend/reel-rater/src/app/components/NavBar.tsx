import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-stone-800 text-white px-2 py-4">
      <nav>
        <div className="flex justify-between">
          <div>
            <Link href="/" className="rounded-full bg-red-700 p-2 mx-2">
              Reel Rater
            </Link>
          </div>

          <div>
            <Link href="/login" className="rounded-full bg-red-700 p-2 mx-2">
              Login
            </Link>
            <Link href="/register" className="rounded-full bg-red-700 p-2 mx-2">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
