import React from "react";
import { useParams } from "react-router-dom";
import useMovieWishlistStore from "../../store/useMovieWishlistStore";
import { img_500, unavailable } from "../../utils/ImageConfig";
import "./horror-page.scss";
import toast from "react-hot-toast";
import { useMovieData } from "../../hooks/useMovieData";
import CastsCarousel from "../../components/carousel/CastsCarousel";

const HorrorDetailedPage = () => {
  const params = useParams();

  // a customized hook that fetches a single movie
  const { movie } = useMovieData(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${
      import.meta.env.VITE_TMDB_API_KEY
    }&language=en-US`
  );
  // a variable that selects a function that adds a movie into the  wishlist
  const addMovie = useMovieWishlistStore((state) => state.addMovie);

  // a variable that selects an array that contains all movie into the  global store
  const movieWishlist = useMovieWishlistStore((state) => state.movieWishlist);

  if (!movie) {
    return <h1>Loading Movie.....</h1>;
  }
  // a funtion that adds a movie into a wishlist
  const addMovieToWishList = () => {
    const existingMovie = movieWishlist.find((item) => item.id === movie.id);
    if (!existingMovie) {
      addMovie(movie);
      toast.success(`${movie.title} added to Wishlist`);
    } else {
      return toast.error(`${movie.title} is already in the wishlist`);
    }
  };

  return (
    <main className="horror-detailed-page">
      <div className="top">
        <div className="image-wrapper">
          <img
            src={
              movie.poster_path ? `${img_500}${movie.poster_path}` : unavailable
            }
            alt={movie.title}
            width="700"
            height="500"
          />
        </div>
        <div className="about">
          <h2>{movie.title}</h2>
          <p>{movie.overview}</p>
          <button onClick={addMovieToWishList}>Add To Wishlist</button>
        </div>
      </div>

      <div>
        <h2>Casts</h2>
        <CastsCarousel id={movie.id} media_type="movie" />
      </div>

      <div>
        <h2>Other Details</h2>
        <h3>
          Budget: <span>{movie.budget}</span>
        </h3>
        <h3>
          Revenue: <span>{movie.revenue}</span>
        </h3>
        <h3>
          Release Date: <span>{movie.release_date}</span>
        </h3>
        <h3>
          Likes: <span>{movie.vote_count}</span>
        </h3>
      </div>
    </main>
  );
};

export default HorrorDetailedPage;
