import React from "react";
import LatestMoviesBanner from "../../components/categories/movies/LatestMoviesBanner";
import HorrorMoviesBanner from "../../components/categories/horror/HorrorMoviesBanner";
import TrendingMoviesBanner from "../../components/categories/trending/TrendingMoviesBanner";

const HomePage = () => {
  return (
    <>
      <TrendingMoviesBanner />
      <LatestMoviesBanner />
      <HorrorMoviesBanner />
    </>
  );
};

export default HomePage;
