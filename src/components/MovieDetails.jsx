import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import apicalls from "./utills/apicalls";
import noImage from './utills/images/no-image.png'
import apiUrl from './API';


const MovieDetails = (props) => {
  const [duration, SetDuration] = useState(null);
  const url = `${apiUrl.base}movie/${props.movieDetils.detils.id}?api_key=${apiUrl.key}`;
  const price = Math.floor(Math.random() * (300 - 250 + 1)) + 250;

  useEffect(() => {
    const getMovieDuration = async () => {
      const res = await apicalls(url);
      SetDuration(res.data.runtime);
    };
    getMovieDuration();
  });

  const checkTheStatus = () => {
    props.stateUpLift2(props.movieDetils,price);
  }
  let wishList;
  if(localStorage.getItem('wishlist') === null){
    wishList = [];
  } else {
    wishList = JSON.parse(localStorage.getItem('wishlist'));
  }

  const addToWishList = () => {
    if (
      wishList.some(
        (info) =>
          info.detils.id === props.movieDetils.detils.id
      )
    ) {
      return;
    } else {
      wishList.push(props.movieDetils);
      localStorage.setItem("wishlist", JSON.stringify(wishList));
    }
  }

  return (
    <div className="movie-detils">
      <div className="movie-styles">
        <img
          src={props.movieDetils.detils.poster_path===null? noImage :apiUrl.imageBase + props.movieDetils.detils.poster_path}
          alt={props.movieDetils.detils.title}
        />
        <div className="movie-right-container">
          <h3 className="movie-right-container-title">{props.movieDetils.detils.title}</h3>
          <div className="movie-right-container-rating">
            <FaStar style={{color : "yellow"}} /> {props.movieDetils.detils.vote_average}/10
          </div>
          <div className="movie-card-text">
            <span className="movie-card-text-duration">{duration} minutes</span>
            {props.movieDetils.data.map((item, index) => {
              return <span key={"span" + index}> : {item.name}</span>;
            })}
          </div>
          <p className="movie-card-text-details-overview" >{props.movieDetils.detils.overview}</p>
          <p>
            <span className="rupee">&#8377;</span>
            {price}
          </p>
          <div className="buy-wishlist">
            <button type="button" onClick={checkTheStatus}>Book Tickets</button>
            <button type="button" onClick={addToWishList}>Wishlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
