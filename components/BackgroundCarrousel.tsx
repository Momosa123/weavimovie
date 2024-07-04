"use client";
import React from "react";

import Slider from "react-slick";
import "./background-carrousel.css";
import { displayedMovies } from "@/sampleMovies";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BackgroundCarousel = () => {
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
  // if (displayedMovies.length === 0) {
  //   return <p>Loading</p>;
  // }

  return (
    <div className="carousel-background">
      <Slider {...settings}>
        {displayedMovies.map((movie, index) => (
          <div key={index}>
            <div
              className="carousel-slide carrousel-zoom"
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie.backdrop_path})`,
              }}
            />
            <div className="carousel-overlay" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BackgroundCarousel;
