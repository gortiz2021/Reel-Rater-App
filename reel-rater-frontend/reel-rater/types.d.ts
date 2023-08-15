type Movie = {
  id: number;
  imdbId: string;
  title: string;
  releaseDate: string;
  trailerLink:string;
  poster: string;
  genres: string[];
  backdrops: string[];
  reviewIds: string[];
};

type Review = {
  id: number;
  movie: Movie,
  body: string,
  created: Date,
  updated: Date
}
