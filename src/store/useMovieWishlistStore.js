import create from "zustand";
import { persist, devtools } from "zustand/middleware";

const movieWishListStore = (set) => ({
  movieWishlist: [],

  // a funtion that adds a movie into the wishlist
  addMovie: (movie) => {
    set((state) => ({
      movieWishlist: [...state.movieWishlist, movie],
    }));
  },

  // a funtion that removes a movie from the wishlist
  removeMovie: (movie) => {
    set((state) => ({
      movieWishlist: state.movieWishlist.filter((m) => m.id !== movie.id),
    }));
  },
});

const useMovieWishlistStore = create(
  devtools(persist(movieWishListStore, { name: "MovieWishListStore" }))
);

export default useMovieWishlistStore;
