"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { FormEvent, useState } from "react";
import getMovieById from "@/app/lib/getMovieById";

export default function Review(id: number) {
  const params = useParams();
  const [review, setReview] = useState('');
  // console.log(params);

  const reviewSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log("Review: ", review)
    setReview('')
  }

  return (
    <div>
      {/* <Link className="btn-primary" href="/">
        Back to home
      </Link> */}

      <form
        className="flex flex-col items-center"
        onSubmit={reviewSubmit}
      >
        <label className="my-4">Review</label>
        <textarea
          required
          rows={10}
          cols={70}
          placeholder="Enter Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="text-black"
        ></textarea>
        <button 
          type="submit" 
          className="btn-primary mt-6"
        >
          Send Review
        </button>

        <p>{review}</p>
      </form>
    </div>
  );
}
