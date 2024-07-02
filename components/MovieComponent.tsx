import Image from "next/image";
import { Movie } from "@/types";
const MovieComponent = ({ movie }: { movie: Movie }) => {
  return (
    <div>
      <Image
        className="mb-1"
        src={movie.poster_path}
        alt=""
        width={300}
        height={450}
      />
      <p className="font-bold">{movie.title}</p>
      <p>{movie.genres}</p>
    </div>
  );
};
export default MovieComponent;
