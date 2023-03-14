import React from "react";
import noImage from "./utills/images/no-image.png";
import { apiUrl } from "./API";
import { FaStar } from "react-icons/fa";

export function WishListCard (props) {
    const createGenres = (arr) => {
       return arr.map((item,index)=> {
            return <span key={`span${index}`}>{item.name}</span>
        })
    }

    const handleRemoveItem = () => {
      props.removeMovieFromWishlist(props.wishData.detils.id);
    }
    // console.log(props.wishData.detils.id);
  return (
    <div className="wraper-card" key={`wraper${props.index}`}>
      <img
        src={
         props.wishData.detils.poster_path === null
            ? noImage
            : apiUrl.imageBase + props.wishData.detils.poster_path
        }
        alt={props.wishData.detils.title}
        key={`img${props.index}`}
      />
      <div className="wrap-wishlist-data" key={`div${props.index}`}>
      <h3 key={`title-wish${props.index}`}>{props.wishData.detils.title}</h3>
      <p key={`ptag${props.index}`}>
      <FaStar style={{color : "yellow"}} /> {props.wishData.detils.vote_average}/10
      </p>
      <div key={`genres${props.index}`}>{createGenres(props.wishData.data)}</div>
      <p key={`overview${props.index}`}>{props.wishData.detils.overview}</p>
      <button onClick={handleRemoveItem} >X</button>
      </div>
    </div>
  );
}
