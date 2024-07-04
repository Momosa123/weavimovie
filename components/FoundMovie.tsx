import { SimilarMovie } from "@/types";
import MovieComponent from "./MovieComponent";
const FoundMovie = ({ movie }: { movie: SimilarMovie }) => {
  const { similarity } = movie;
  return (
    <MovieComponent movie={movie}>
      <div className="group">
        <p className="absolute font-extrabold top-1 px-1 rounded-full block bg-green-radial ">
          {similarity?.toFixed(3)}
        </p>
        <div className="text-black absolute rounded-lg p-2 mt-8 border-[1px] shadow-lg text-xs w-48 z-40 text-center  bg-stone-100  opacity-0 transition-all duration-250 group-hover:opacity-100">
          The distance {similarity?.toFixed(3)} measures the similarity between
          the vectors of the query and the movies. A value of 0 represents a
          perfect match, while a value of 2 indicates opposing vectors. This
          distance is calculated using the nearText operator. <br />
          <a
            className="underline"
            href="https://weaviate.io/developers/weaviate/config-refs/distances"
          >
            Read more about the different search operators here
          </a>
        </div>
      </div>
    </MovieComponent>
  );
};
export default FoundMovie;
