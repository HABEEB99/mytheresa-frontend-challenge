import React from "react";
import { Link } from "react-router-dom";
import { img_300, unavailable } from "../../../utils/ImageConfig";
import "./horror.scss";

const HorrorMoviesCard = ({ movie }) => {
  const { title, poster_path, name, id } = movie;

  return (
    <Link to={`horror/${id}`}>
      <div className="horror-card-wrapper">
        <h2>{title || name}</h2>
        <img
          src={poster_path ? `${img_300}${poster_path}` : unavailable}
          alt={title}
        />
      </div>
    </Link>
  );
};

export default HorrorMoviesCard;
