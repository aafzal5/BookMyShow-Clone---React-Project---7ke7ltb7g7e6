import React from 'react';

const genres = [
  'Action',
  'Adventure',
  'Animation',
  'Comedy',
  'Crime',
  'Documentry',
  'Drama',
  'Family',
  'Fantasy',
  'History',
  'Horror',
  'Music',
  'Mystery',
  'Thriller',
  'Horror',
  'Mystery',
  'Romance',
  'Science Fiction',
];

const GenreList = () => {
  return (
    <div>
      <h3>Genres</h3>
      <ul>
        {genres.map((genre) => (
          <li key={genre}>{genre}</li>
        ))}
      </ul>
    </div>
  );
};

export default GenreList;
