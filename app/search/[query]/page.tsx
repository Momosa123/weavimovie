import { findMovies } from "@/action";

import Movies from "@/components/Movies";

const SearchResultsPage = async ({
  params: { query },
}: {
  params: {
    query: string;
  };
}) => {
  const searchResults = await findMovies(query);
  return (
    <div className="w-full p-8 md:px-24 md:py-8 ">
      <Movies movies={searchResults} />
    </div>
  );
};
export default SearchResultsPage;
