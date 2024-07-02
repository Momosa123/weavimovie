import { getMovieById, findMovies } from "@/action";
import Movies from "@/components/Movies";
import SingleMovie from "@/components/SingleMovie";
import { Movie, SimilarMovie } from "@/types";

const MoviePage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const movie = (await getMovieById(id)) as Movie;
  let similarMovies = (await findMovies(movie.overview)) as SimilarMovie[];
  similarMovies.shift();
  console.log(id);
  if (Object.keys(movie).length === 0) return <p>No movie found</p>;

  return (
    <>
      <SingleMovie movie={movie} />
      <h2>Similar movies</h2>
      <Movies movies={similarMovies} />
    </>
  );
};
export default MoviePage;
