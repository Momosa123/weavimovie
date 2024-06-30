import { displayedMovies } from "@/movies";
import MovieComponent from "./MovieComponent";
const Movies = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
      {displayedMovies.map((movie, index) => (
        <MovieComponent key={index} movie={movie} />
      ))}
    </div>
  );
};
export default Movies;
