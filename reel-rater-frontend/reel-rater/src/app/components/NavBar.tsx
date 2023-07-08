import Link from "next/link";

export default function NavBar() {
  return (
    <div className="bg-stone-800 text-white px-2 py-4">
      <nav>
        <div className="flex justify-between">
          <div>
            <Link href="/" className="btn-primary">
              Reel Rater
            </Link>
          </div>

          <div>
            <Link href="/login" className="btn-primary">
              Login
            </Link>
            <Link href="/register" className="btn-primary">
              Register
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
