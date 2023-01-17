import React from 'react';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>{movie.overview}</p>
    </div>
  );
};

export default MovieCard;


//import React, { useState } from 'react';
//import Modal from './Modal';

// function MovieCard({ title, poster, details }) {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//       <div className="movie-card" onClick={() => setIsOpen(true)}>
//         <img src={poster} alt={title} />
//         <h2>{title}</h2>
//       </div>
//       {isOpen && (
//         <Modal closeModal={() => setIsOpen(false)}>
//           <h1>{title}</h1>
//           <img src={poster} alt={title} />
//           <p>{details}</p>
//         </Modal>
//       )}
//     </>
//   );
// }

// export default MovieCard;
//<MovieCard 
    //title="The Shawshank Redemption" 
    //poster="https://image.tmdb.org/t/p/w500/9O7gLzmreU0nGkIB6K3BsJbzvNv.jpg" 
    //details="Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency." 
///>



