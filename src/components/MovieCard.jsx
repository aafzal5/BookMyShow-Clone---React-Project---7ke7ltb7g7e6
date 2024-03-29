import React from "react";
import { FaStar } from "react-icons/fa";
import noImage from './utills/images/no-image.png';
import apiUrl from "./API";

const MovieCard = ({ item, index }) => {
  return (
    <div className="card">
      <div className="movieStyleCard">
        <img
          className="imageCard"
          src={item.poster_path === null ? noImage :apiUrl.imageBase + item.poster_path}
          alt={item.title}
          key={"image" + index}
        />
        <div className="rating">
        <p key={"LanCard" + index}>
          {item.original_language.charAt(0).toUpperCase() +
            item.original_language.slice(1)}
        </p>
        <p key={"rateCard" + index}>
          <FaStar style={{color : "yellow"}}/> {item.vote_average}
        </p>
      </div>
      </div>
        <h4 className="movie-title" key={"h5" + index}>{item.title}</h4>
    </div>
  );
}

export default MovieCard;