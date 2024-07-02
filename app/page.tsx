import BackgroundCarousel from "@/components/BackgroundCarrousel";
import React from "react";
import { getMovies } from "@/action";

import Movies from "@/components/Movies";
const App = async () => {
  const movies = await getMovies(8);

  return (
    <div className="w-full p-8 md:px-24 md:py-8 ">
      <Movies movies={movies} />
    </div>
  );
};

export default App;
