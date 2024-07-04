import { Movie } from "@/types";
import Link from "next/link";
import Image from "next/image";
const SingleMovie = ({ movie }: { movie: Movie }) => {
  return (
    <div className="relative max-w-4xl mt-8 mx-auto text-white md:flex justify-items-start  gap-x-5  ">
      <div className="shrink-0">
        <Link href={`/movies/${movie.uuid}`}>
          <Image
            className="mb-1"
            src={movie.poster_path}
            alt=""
            width={300}
            height={450}
          />
        </Link>
      </div>
      <div className="max-w-md">
        <p className="font-bold text-2xl">{movie.title}</p>
        <p className="font-semibold mb-10">{movie.genres}</p>
        <p className="text-lg">{movie.overview}</p>
      </div>
    </div>
  );
};
export default SingleMovie;
