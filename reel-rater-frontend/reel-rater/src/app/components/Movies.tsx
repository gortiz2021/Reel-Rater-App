import Link from "next/link";
import getAllMovies from "../lib/getAllMovies";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Trailer from "./Trailer";

type Props = {
  movies: Movie[]
}

export default async function Movies({ movies }: Props) {
  // const moviesData: Movie[] = await getAllMovies();
  // const movies = await moviesData;

  const content = (
    <main className="flex items-center">

      <div className="">
        {movies.map((movie) => (
          <h1 key={movie.imdbId} className="flex justify-between py-4 w-[75vw]">
            {movie.title}
            <div className="">
              <Trailer movie={movie}></Trailer>
            </div>
            
          </h1>
          ))}
      </div>

    </main>
  );

  return content;
}
