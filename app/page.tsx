import React from "react";
import { getMovies } from "@/action";

import Movies from "@/components/Movies";
import MovieComponent from "@/components/MovieComponent";
const App = async () => {
  const movies = await getMovies(8);

  return (
    <div className="w-full p-8 md:px-24 md:py-8 ">
      <Movies>
        {movies.map(movie => (
          <div key={movie.movieId} className="p-2">
            <MovieComponent movie={movie} />
          </div>
        ))}
      </Movies>
    </div>
  );
};

export default App;
