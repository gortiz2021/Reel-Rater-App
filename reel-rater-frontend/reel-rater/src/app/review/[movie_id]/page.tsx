import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";
import getReviewsByMovieId from "@/app/lib/getReviewsByMovieId";
import ReviewByMovie from "@/app/components/ReviewByMovie";

export default async function Review(movie_id) {

  const reviewByMovieData = await getReviewsByMovieId(movie_id);
  const reviews = await reviewByMovieData;

  // const params = useParams();
  // const [review, setReview] = useState('');
  // console.log(params);

  // const reviewSubmit = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   console.log("Review: ", review)
  //   setReview('')
  // }

  return (
    <div>
      {/* <Link className="btn-primary" href="/">
        Back to home
      </Link> */}

      <ReviewByMovie movie_id={reviews}/>

      <form
        className="flex flex-col items-center"
        // onSubmit={reviewSubmit}
      >
        <label className="my-4">Review</label>
        <textarea
          required
          rows={10}
          cols={70}
          placeholder="Enter Review"
          value={review}
          // onChange={(e) => setReview(e.target.value)}
          className="text-black"
        ></textarea>
        <button 
          type="submit" 
          className="btn-primary mt-6"
        >
          Send Review
        </button>

        {/* <p>{review}</p> */}
      </form>
    </div>
  );
}
