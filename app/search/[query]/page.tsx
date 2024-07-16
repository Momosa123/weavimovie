import { findMovies } from "@/action";
import Loading from "@/app/loading";
import BackgroundCarousel from "@/components/BackgroundCarrousel";
import FoundMovie from "@/components/FoundMovie";

import Movies from "@/components/Movies";
//Page displaying query results

const SearchResultsPage = async ({
  params: { query },
}: {
  params: {
    query: string;
  };
}) => {
  const searchResults = await findMovies(query);
  if (searchResults.length < 5) return <Loading />;
  return (
    <>
      <BackgroundCarousel movies={searchResults} />
      <div className="w-full p-8 md:px-24 md:py-8 ">
        <Movies>
          {searchResults.map(movie => (
            <div key={movie.movieId} className="p-2">
              <FoundMovie movie={movie} />
            </div>
          ))}
        </Movies>
      </div>
    </>
  );
};
export default SearchResultsPage;
