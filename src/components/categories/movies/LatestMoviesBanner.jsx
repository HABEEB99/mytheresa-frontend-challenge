import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import LatestMoviesCarousel from "./LatestMoviesCarousel";
import "./movies.scss";

const LatestMoviesBanner = () => {
  // a reusable hook that fetches all latest movies
  const { movies } = useMoviesData(
    `https://api.themoviedb.org/3/discover/movie?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }`
  );
  return (
    <section className="movies-container">
      <h2 className="movies-title">Latest Movies</h2>
      <div className="movies-banner">
        <LatestMoviesCarousel movies={movies} />
      </div>
    </section>
  );
};

export default LatestMoviesBanner;
