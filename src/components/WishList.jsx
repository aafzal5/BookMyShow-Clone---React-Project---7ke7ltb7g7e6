import React, {useState, useEffect} from "react";
import { WishListCard } from "./WishListCard";
// import "../styles/WishList.css";

export function WishList() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
  const storedWishlist = localStorage.getItem('wishlist');
    if(storedWishlist){
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const removeMovieFromWishlist = (movieToRemoveId) => {
    const updatedWishlist = wishlist.filter(
      (movie) => movie.detils.id !== movieToRemoveId
    );
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const createWishList = (arr) => {
    if (arr.length === 0) {
      return <h1>No data added to Wishlist</h1>;
    } else {
      return arr.map((item, index) => {
        return (
          <div className="wishlist-card" key={`wish${index}`}>
            <WishListCard
              index={index}
              wishData={item}
              removeMovieFromWishlist={removeMovieFromWishlist}
            />
          </div>
        );
      });
    }
  };
  return <div className="wrapper-wishlist">{createWishList(wishlist)}</div>;
}
