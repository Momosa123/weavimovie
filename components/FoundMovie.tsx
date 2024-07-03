import { SimilarMovie } from "@/types";
import MovieComponent from "./MovieComponent";
const FoundMovie = ({ movie }: { movie: SimilarMovie }) => {
  return (
    <MovieComponent movie={movie}>
      <p>{movie.similarity}</p>
    </MovieComponent>
  );
};
export default FoundMovie;
