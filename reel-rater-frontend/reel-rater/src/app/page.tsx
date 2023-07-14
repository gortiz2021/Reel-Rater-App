// import Link from "next/link";
import getAllMovies from "../app/lib/getAllMovies";

import Movies from "./components/Movies";
// import Trailer from "./components/Trailer";
// import Review from "./review/[id]/page";

export default async function Home() {

  const moviesData: Movie[] = await getAllMovies();
  const movies = await moviesData;

  return (
    <main className="">
      <div className="flex justify-center items-center m-auto h-screen">
        <Movies movies={movies}/>
      </div>
    </main>
  );
}
