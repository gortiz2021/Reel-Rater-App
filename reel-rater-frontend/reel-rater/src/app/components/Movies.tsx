import Link from "next/link";
import getAllMovies from "../lib/getAllMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";

export default async function Movies() {
  const moviesData: Movie[] = await getAllMovies();
  const movies = await moviesData;

  const content = (
    <main className="flex items-center">
      <div className="">
        <button
          className="text-red-700 text-3xl"
          // onClick={handlePreviousMovie}
        >
          <FontAwesomeIcon icon={faCircleArrowLeft} />
        </button>
      </div>

      <div>
        {movies.map((movie) => (
          <h1 key={movie.imdbId}>{movie.title}</h1>
        ))}
      </div>
      
      <div className="">
        <button
          className="text-red-700 text-3xl"
          // onClick={handleNextMovie}
        >
          <FontAwesomeIcon icon={faCircleArrowRight} />
        </button>
      </div>
    </main>
  );

  return content;
}
