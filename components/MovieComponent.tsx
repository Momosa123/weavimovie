import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";
const MovieComponent = ({
  children,
  movie,
  width = 350,
  height = 400,
}: {
  children?: React.ReactNode;
  movie: Movie;
  width?: number;
  height?: number;
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
      {children}
      <p className="font-bold">{movie.title}</p>
      <p>{movie.genres}</p>
    </div>
  );
};
export default MovieComponent;
