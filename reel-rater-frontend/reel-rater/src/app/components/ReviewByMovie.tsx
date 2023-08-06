import getReviewsByMovieId from "../lib/getReviewsByMovieId";

export default async function ReviewByMovie(movie_id){

    

    const content = (
        <main>
            <div>
                {movie_id.map((m) => (
                    <div key={m.movie.imdbId}>
                    <h1>{m.movie.title}</h1>
                    <p>{m.body}</p>
                  </div>
                ))}
            </div>
        </main>
    );

    return content;
}