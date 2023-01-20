import React from "react";
import { useState } from "react";
// import MovieModal from './MovieModal';
import "../styles/MovieCard.css";

const MovieCard = ({ movie }) => {
  const [movieDetails, setMovieDetails] = useState(false);

  const toggleSetMovieDetails = () => {
    setMovieDetails(!movieDetails);
  };

  return (
    <div className="movie-card" onClick={toggleSetMovieDetails}>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      {movieDetails && (
        <div className="modal">
        <div className="overlay">
          <div className="modal-content">
          <button className="close-details">X</button>
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
            />
            <h2>{movie.title}</h2>
            <p>{movie.overview}</p>
            <p>{movie.rating}</p>
            <p>{movie.language}</p>
            <p>{movie.time}</p>
            <p>{movie.genre}</p>
            <button className="book-tickets">Book Tickets</button>
            <button className="wishlist">Wishlist</button>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default MovieCard;
