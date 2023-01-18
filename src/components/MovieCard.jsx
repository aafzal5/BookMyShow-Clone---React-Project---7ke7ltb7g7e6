import React from 'react';
import { useState } from 'react';
import MovieModal from './MovieModal';
import '../styles/MovieCard.css';

const MovieCard = ({ movie }) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="movie-card" onClick={() => setModalOpen(true)}>
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h3>{movie.title}</h3>
      <p>{movie.overview}</p>
      {modalOpen && <MovieModal movie={movie} setModalOpen={setModalOpen}/>}
    </div>
  );
};

export default MovieCard;



