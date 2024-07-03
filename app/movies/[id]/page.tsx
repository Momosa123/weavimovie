import { getMovieById, findMovies } from "@/action";
import FoundMovie from "@/components/FoundMovie";
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

      <Movies title="Similar movies">
        {similarMovies.map(movie => (
          <div key={movie.movieId} className="p-2">
            <FoundMovie movie={movie} />
          </div>
        ))}
      </Movies>
    </>
  );
};
export default MoviePage;
