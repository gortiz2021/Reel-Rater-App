'use client'
import { useParams } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react";

const initState = {
  body: ""
}

export default function Review() {

  const params = useParams();
  const [review, setReview] = useState(initState);

  const currMovieId = params.movie_id;
  console.log(currMovieId);

  const reviewSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const formData = new FormData(e.currentTarget as HTMLFormElement);
    const data = {
      body: formData.get('body'), // Assuming your textarea has the name "review"
    };
    console.log(data)

    // const jsonData = JSON.stringify(data)
    const endpoint = `http://localhost:8080/api/v1/ReelRater/reviews/${currMovieId}`

    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSON.stringify(data),
    }
    const response = await fetch(endpoint, options)
    const result = await response.json()
    console.log(result)
    setReview(initState)

   }

  const reviewChange = (e: ChangeEvent<HTMLTextAreaElement>) => {

    const body = e.target.name

    setReview(prevReview => ({
        ...prevReview,
        [body]: e.target.value
    }))
    // setReview(prevReview => (e.target.value))
}

  return (
    <div>

      <form
        className="flex flex-col items-center"
        onSubmit={reviewSubmit}
      >
        <label className="my-4" htmlFor="body">Review</label>
        <textarea
          required
          rows={10}
          cols={70}
          placeholder="Enter your Review"
          value={review.body}
          // value={review}
          onChange={reviewChange}
          // onChange={(e) => setReview(e.target.value)}
          className="text-black"
          id="body"
          name="body"
        ></textarea>
        <button 
          type="submit" 
          className="btn-primary mt-6"
        >
          Send Review
        </button>

        <p>{review.body}</p>
        {/* <p>{review}</p> */}
      </form>
      
    </div>
  );
}
