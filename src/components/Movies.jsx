import React, { useState } from "react";
import { Overlay } from "./Overlay";
import { MovieCard } from "./MovieCard";
import { MovieDetails } from "./MovieDetails";

import "../styles/Movie.css";

export function Movies(props) {
  const [detailsData, setDetailsData] = useState(null);
  const [overlayFlag, setOverlayFlag] = useState(false);
  const genreData = JSON.parse(localStorage.getItem("genres"));

  const movieCardEvent = (ids) => {
    const showData = genreData.filter((el) => {
      return ids.genre_ids.some((f) => {
        return f === el.id;
      });
    });
    setOverlayFlag(true);
    setDetailsData({ data: showData, detils: ids });
    // props.flagStatus(ids);
  };

  const setFunction = () => {
    setOverlayFlag(false);
  };

  const movieCardList = (arr) => {
    return arr.map((item, index) => {
      return (
        <div
          className="movieCard"
          key={"movieCard" + index}
          onClick={() => {
            movieCardEvent(item);
          }}
        >
          <MovieCard item={item} index={index} />
        </div>
      );
    });
  };

  const stateLift2 = (arg,arg2) => {
    props.flagStatus(arg,arg2);
  }

  return (
    <div className="movie-container">
      {overlayFlag && (
        <Overlay functionCall={setFunction}>
          <MovieDetails stateUpLift2={stateLift2} movieDetils={detailsData} />
        </Overlay>
      )}
      <h2 className="movie-container-heading">{props.heading}</h2>
      {props.apiData === null ? (
        ""
      ) : (
        <div className="main-movie-card">{movieCardList(props.apiData)}</div>
      )}
    </div>
  );
}
