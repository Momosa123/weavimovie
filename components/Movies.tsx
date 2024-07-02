"use client";
import React from "react";

import Slider from "react-slick";
import MovieComponent from "./MovieComponent";
import { Movie } from "@/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Movies = ({ movies }: { movies: Movie[] }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {movies.map(movie => (
          <div key={movie.movieId} className="p-2">
            <MovieComponent movie={movie} width={300} height={450} />;
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Movies;
