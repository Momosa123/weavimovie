export type Movie = {
  movieId: number;
  title: string;
  release_date: string;
  genres: string;
  overview: string;
  poster_path: string;
  backdrop_path: string;
  original_language: string;
  vote_average: number;
};

export type SimilarMovie = {
  similarity: number | undefined;
} & Movie;
