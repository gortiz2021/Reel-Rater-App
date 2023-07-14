import Link from "next/link";
// import getAllMovies from "../lib/getAllMovies";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faCircleArrowLeft,
//   faCircleArrowRight,
// } from "@fortawesome/free-solid-svg-icons";
// import "@fortawesome/fontawesome-svg-core/styles.css";
import Trailer from "./Trailer";

type Props = {
  movies: Movie[];
};

export default async function Movies({ movies }: Props) {
  // const moviesData: Movie[] = await getAllMovies();
  // const movies = await moviesData;

  const content = (
    <main>
      <div className="w-[75vw]">
        {movies.map((movie) => (
          <div key={movie.imdbId} className="flex flex-row items-center py-4 ">
            <h1 className="mr-4">{movie.title}</h1>
            <div className="flex flex-row flex-nowrap items-center ml-auto">
              <Link href={`/review/${movie.id}`} className="btn-primary mr-8">Review</Link>
              <Trailer movie={movie}></Trailer>
            </div>
          </div>
        ))}
      </div>
    </main>
  );

  return content;
}
