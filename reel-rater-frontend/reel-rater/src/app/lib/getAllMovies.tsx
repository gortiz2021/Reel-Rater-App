export default async function getAllMovies() {
  const response = await fetch('http://localhost:8080/api/v1/ReelRater/allMovies');
  return response.json;
}
