// import { movies } from "@/sampleMovies";
import { getMovies } from "@/action";
import { shuffleArray } from "@/utils";
import MovieComponent from "./MovieComponent";
const Movies = async () => {
  // const displayedMovies = shuffleArray(movies).slice(0, 8);
  const movies = await getMovies();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {movies.map(movie => (
        <MovieComponent key={movie.movieId} movie={movie} />
      ))}
    </div>
  );
};
export default Movies;
