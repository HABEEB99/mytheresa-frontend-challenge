import axios from "axios";
import { useEffect, useState } from "react";

// a reusable hook that fetches a single movie from TMDB
export const useMovieData = (url) => {
  const [movie, setMovie] = useState();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(url);
        setMovie(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, [url]);

  return { movie };
};
