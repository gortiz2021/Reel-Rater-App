"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import getMovieById from "@/app/lib/getMovieById";

export default function Review(id: number) {
  const params = useParams();
  // console.log(params);

  function reviewSubmit() {
    console.log(review);
  }

  const [review, setReview] = useState('');

  return (
    <div>
      <Link className="btn-primary" href="/">
        Back to home
      </Link>

      <form
        action={getMovieById(id)}
        className="flex flex-col items-center"
        onSubmit={reviewSubmit}
      >
        <textarea
          placeholder="Enter Review"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="text-black"
        ></textarea>
        <button type="submit" className="btn-primary mt-6">
          Send Review
        </button>
      </form>

      <div></div>
    </div>
  );
}
