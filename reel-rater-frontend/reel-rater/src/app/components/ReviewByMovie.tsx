import getReviewsByMovieId from "../lib/getReviewsByMovieId";

export default async function ReviewByMovie(m_id: number) {
  const content = (
    <main>
      <div>
        {/* <div key={m_id.movie.imdbId}>
          <h1>{m_id.movie.title}</h1>
          <p>{m_id.body}</p>
        </div> */}
      </div>
    </main>
  );

  return content;
}
