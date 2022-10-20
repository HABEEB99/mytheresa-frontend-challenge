import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../../utils/ImageConfig";
import "./trending.scss";

const TrendingMoviesCard = ({ movie }) => {
  const { title, poster_path, name, id } = movie;

  return (
    <Link to={`trending/${id}`}>
      <div className="trending-card-wrapper">
        <h2>{title || name}</h2>
        <img
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
          alt={title}
        />
      </div>
    </Link>
  );
};

export default TrendingMoviesCard;
