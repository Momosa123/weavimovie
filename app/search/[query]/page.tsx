import { findMovies } from "@/action";
import MovieComponent from "@/components/MovieComponent";

const SimilarMoviesPage = async ({
  params: { query },
}: {
  params: {
    query: string;
  };
}) => {
  const similarMovies = await findMovies(query);
  return (
    <div>
      {similarMovies.map((movie, index) => (
        <MovieComponent key={index} movie={movie} />
      ))}
    </div>
  );
};
export default SimilarMoviesPage;
