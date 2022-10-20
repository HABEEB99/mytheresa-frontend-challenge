import axios from "axios";
import { useEffect, useState } from "react";

// a reusable hook that fetches several movie from TMDB
export const useMoviesData = (url) => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const { data } = await axios.get(url);
        setMovies(data.results);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovies();
  }, [url]);

  return { movies };
};
