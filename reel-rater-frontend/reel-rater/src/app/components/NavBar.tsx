export default function NavBar() {
  return (
    <div className="bg-stone-800 text-white px-2 py-4 m-2">
      <nav>
        <div className="flex justify-between">
          <div>
            <a href="" className="rounded-full bg-red-700 p-2 mx-2">
              Reel Rater
            </a>
          </div>

          <div>
            <a href="" className="rounded-full bg-red-700 p-2 mx-2">
              Login
            </a>
            <a href="" className="rounded-full bg-red-700 p-2 mx-2">
              Register
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}
