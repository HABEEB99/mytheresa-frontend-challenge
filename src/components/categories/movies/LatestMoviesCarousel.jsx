import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import LatestMoviesCard from "./LatestMoviesCard";

const LatestMoviesCarousel = ({ movies }) => {
  const items = movies?.map((movie) => (
    <LatestMoviesCard id={movie.id} movie={movie} />
  ));

  const responsive = {
    0: {
      items: 2,
    },
    512: {
      items: 3,
    },
    1024: {
      items: 5,
    },
  };

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default LatestMoviesCarousel;
