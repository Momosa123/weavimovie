import Image from "next/image";
import { Movie } from "@/types";
import Link from "next/link";
import { getBlurData } from "@/utils";

//Single movie component
const MovieComponent = async ({
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
  const imageUrl = movie.poster_path;

  const { base64 } = await getBlurData(imageUrl);
  return (
    <div className="text-white relative">
      {children}
      <Link href={`/movies/${movie.uuid}`}>
        <Image
          className="mb-1"
          src={movie.poster_path}
          alt=""
          width={width}
          height={height}
          placeholder="blur"
          blurDataURL={base64}
        />
      </Link>
      <p className="font-bold">{movie.title}</p>
      <p>{movie.genres}</p>
    </div>
  );
};
export default MovieComponent;
