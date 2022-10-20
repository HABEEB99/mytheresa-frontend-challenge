import React from "react";
import useMovieWishlistStore from "../../store/useMovieWishlistStore";
import { MdDeleteForever } from "react-icons/md";
import "./wishlist.scss";
import toast from "react-hot-toast";
import { img_300, unavailable } from "../../utils/ImageConfig";

const WishList = () => {
  // a variable that selects wishlisted movies from the store
  const moviewishlist = useMovieWishlistStore((state) => state.movieWishlist);

  // a variable that selects a funtion that removes a movie from the list
  const removeMovie = useMovieWishlistStore((state) => state.removeMovie);

  return (
    <section className="wishlist">
      {moviewishlist.map((movie) => (
        <div key={movie.id} className="wrapper">
          <span>{movie.title}</span>
          <div className="img-container">
            <img
              src={
                movie.poster_path
                  ? `${img_300}${movie.poster_path}`
                  : unavailable
              }
              alt={movie.title}
              width="100"
              height="100"
            />
            <MdDeleteForever
              className="delete"
              onClick={() => {
                removeMovie(movie);
                return toast.error(`${movie.title} removed from the wishlist`);
              }}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default WishList;
