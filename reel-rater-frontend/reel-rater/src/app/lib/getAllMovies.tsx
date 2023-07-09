export default async function getAllMovies() {
  const response = await fetch("http://localhost:8080/api/v1/ReelRater/allMovies");
  if (!response.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return response.json();
}
