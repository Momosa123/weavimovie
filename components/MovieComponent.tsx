import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";
const MovieComponent = ({
  movie,
  width,
  height,
}: {
  movie: Movie;
  width: number;
  height: number;
}) => {
  return (
    <div className="text-white">
      <Link href={`/movies/${movie.uuid}`}>
        <Image
          className="mb-1"
          src={movie.poster_path}
          alt=""
          width={width}
          height={height}
        />
      </Link>
      <p className="font-bold">{movie.title}</p>
      <p>{movie.genres}</p>
    </div>
  );
};
export default MovieComponent;
