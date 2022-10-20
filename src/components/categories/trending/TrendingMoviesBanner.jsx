import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import "./trending.scss";
import TrendingMoviesCarousel from "./TrendingMoviesCarousel";

const TrendingMoviesBanner = () => {
  // a reusable hook that fetches all trending movies
  const { movies } = useMoviesData(
    `https://api.themoviedb.org/3/trending/movie/week?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  );

  return (
    <section className="trending-container">
      <h2 className="trending-title">Trending Movies</h2>
      <div className="trending-banner">
        <TrendingMoviesCarousel movies={movies} />
      </div>
    </section>
  );
};

export default TrendingMoviesBanner;
