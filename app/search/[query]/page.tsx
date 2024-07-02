import { findMovies } from "@/action";
import MovieComponent from "@/components/MovieComponent";
import Movies from "@/components/Movies";

const SimilarMoviesPage = async ({
  params: { query },
}: {
  params: {
    query: string;
  };
}) => {
  const similarMovies = await findMovies(query);
  return (
    <div className="w-full p-8 md:px-24 md:py-8 ">
      <Movies movies={similarMovies} />
    </div>
  );
};
export default SimilarMoviesPage;
