import { getMovieById } from "@/action";
import SingleMovie from "@/components/SingleMovie";
import { Movie } from "@/types";

const MoviePage = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const movie = (await getMovieById(id)) as Movie;
  console.log(id);
  if (Object.keys(movie).length === 0) return <p>No movie found</p>;

  return <SingleMovie movie={movie} />;
};
export default MoviePage;
