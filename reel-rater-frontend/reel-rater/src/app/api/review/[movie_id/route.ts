import { NextResponse } from 'next/server'

export async function GET(request: Request,
  { params }: { params: { movie_id: number}}
){
  const { movie_id } = await request.json();

  if(!movie_id){
    return NextResponse.json({ "message": "Missing required data" })
  }

  const response = await fetch(`http://localhost:8080/api/v1/ReelRater/reviews/movie/${params.movie_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify({
      movie_id
    })
  })

  const movies: Movie[] = await response.json();
  return NextResponse.json(movies)
}

export async function POST(request: Request, 
  { params }: { params: { movie_id: number}}
) {
  // const movie_id = params.movie_id;
  const { movie_id, body } = await request.json();

  if(!movie_id || !body){
    return NextResponse.json({ "message": "Missing required data" })
  }

  const response = await fetch(`http://localhost:8080/api/v1/ReelRater/reviews/${params.movie_id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, 
    body: JSON.stringify({
      movie_id, body
    })
  })

  const newReview: Review = await response.json();

  return NextResponse.json(newReview);
}