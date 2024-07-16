"use client";
import React, { useState, useEffect } from "react";

import Slider from "react-slick";
import "./background-carrousel.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Movie } from "@/types";

const BackgroundCarousel = ({ movies }: { movies: Movie[] }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
    fade: true,
  };

  return (
    <div className="carousel-background">
      <Slider {...settings}>
        {movies.map((movie, index) => (
          <div key={index}>
            <div
              className="carousel-slide carrousel-zoom"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
            />
            <div className="carousel-overlay " />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;
