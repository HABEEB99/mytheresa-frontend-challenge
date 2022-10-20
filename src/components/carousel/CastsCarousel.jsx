import axios from "axios";
import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/scss/alice-carousel.scss";
import { img_300, noPicture } from "../../utils/ImageConfig";
import "./carousel.scss";

const CastsCarousel = ({ id, media_type }) => {
  const [casts, setCasts] = useState();

  const handleDragStart = (e) => e.preventDefault();

  const items = casts?.map((c) => (
    <div className="carouselItem">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
      />
      <span>{c?.name}</span>
    </div>
  ));

  const responsive = {
    0: {
      items: 3,
    },
    512: {
      items: 5,
    },
    1024: {
      items: 7,
    },
  };

  useEffect(() => {
    //  a function that fetches the movie casts
    const fetchCasts = async () => {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${
          import.meta.env.VITE_TMDB_API_KEY
        }&language=en-US`
      );
      setCasts(data.cast);
    };

    fetchCasts();
  }, []);

  return (
    <AliceCarousel
      mouseTracking
      infinite
      disableDotsControls
      disableButtonsControls
      responsive={responsive}
      items={items}
      autoPlay
    />
  );
};

export default CastsCarousel;
