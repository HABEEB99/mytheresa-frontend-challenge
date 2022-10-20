import React from "react";
import { useMoviesData } from "../../../hooks/useMoviesData";
import HorrorMoviesCarousel from "./HorroMoviesCarousel";
import "./horror.scss";

const HorrorMoviesBanner = () => {
  // a reusable hook that fetches all horror movies
  const { movies } = useMoviesData(
    `https://api.themoviedb.org/3/trending/tv/week?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US`
  );

  https: return (
    <section className="horror-container">
      <h2 className="horror-title">Horror Movies</h2>
      <div className="horror-banner">
        <HorrorMoviesCarousel movies={movies} />
      </div>
    </section>
  );
};

export default HorrorMoviesBanner;
