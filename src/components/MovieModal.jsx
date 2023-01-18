import React from "react";
import '../styles/movieModal.css';

const MovieModal = ({ movie, setModalOpen }) => {
  return (
    <div className={`modal`}>
      <button onClick={() => setModalOpen(false)}>&times;</button>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
      <p>{movie.rating}</p>
      <p>{movie.language}</p>
      <p>{movie.time}</p>
      <p>{movie.genre}</p>
      <button>Book Ticket</button>
      <button>Wishlist</button>
    </div>
  );
};

export default MovieModal;
  