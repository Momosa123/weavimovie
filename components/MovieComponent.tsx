import Image from "next/image";
type MovieProp = {
  movie: {
    id: number;
    title: string;
    releaseYear: string;
    genres: string;
    content: string;
    image: string;
  };
};
const MovieComponent = ({ movie }: MovieProp) => {
  return (
    <div>
      <Image
        className="mb-1"
        src={movie.image}
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
