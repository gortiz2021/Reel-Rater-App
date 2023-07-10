import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

export default function Trailer( {movie} ) {

  return (
    <div className=" text-white">
      <Link className="text-red-700 text-5xl" href={movie.trailerLink}>
        <div className="">
          <FontAwesomeIcon icon={faCirclePlay} className="w-10" />
        </div>
      </Link>
    </div>
  )
}
