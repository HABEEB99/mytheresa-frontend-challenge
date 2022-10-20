import React, { useState } from "react";
import "./header.scss";
import { BiShoppingBag } from "react-icons/bi";
import { Link } from "react-router-dom";
import WishList from "../wishlist/WishList";
import useMovieWishlistStore from "../../store/useMovieWishlistStore";

const Header = () => {
  // a variable that select wishlisted movies from the global store
  const numOfWishlistedMovies = useMovieWishlistStore(
    (state) => state.movieWishlist
  );

  const [openWishList, setOpenWishList] = useState(false);

  // a function that toggles wishlisted movies visibility
  const handleWishList = () => {
    setOpenWishList((prev) => !prev);
  };
  return (
    <header>
      <Link to="/">
        <h1>TMDB</h1>
      </Link>

      <div onClick={handleWishList} className="icon-wrapper">
        <BiShoppingBag className="icon" />
        <div className="badge">
          <span>{numOfWishlistedMovies.length}</span>
        </div>
      </div>

      {openWishList && <WishList />}
    </header>
  );
};

export default Header;
