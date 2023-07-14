export default async function getMovieById(id: number) {
  const response = await fetch(
    `http://localhost:8080/api/v1/ReelRater/movies/${id}`
  );
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return response.json();
}
