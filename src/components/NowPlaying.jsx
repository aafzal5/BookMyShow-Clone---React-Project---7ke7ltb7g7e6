import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';
import '../styles/nowPlaying.css';

const NowPlaying = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const apiKey = 'a468a5e2bdc8721c32a4a6e17a40f130';
    const nowPlayingEndpoint = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=1`;
    axios.get(nowPlayingEndpoint)
      .then(res => {
        setMovies(res.data.results);
      })
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <div className='nowPlaying'>
      <h2>Now Playing</h2>
      {movies.slice(0, 5).map((movie, index) => (
        <MovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default NowPlaying;
