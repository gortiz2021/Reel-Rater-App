export default async function createReview(movie_id:number, body:string){
    const response = await fetch(`http://localhost:8080/api/v1/ReelRater/reviews/${movie_id}`);
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
      }
      return response.json();
    
}