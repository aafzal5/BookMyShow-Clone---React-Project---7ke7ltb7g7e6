import { useState } from "react";
import "./styles.css";

export default function App() {
  const [search, setSearch] = useState("");
  const [movie, setMovie] = useState([]);
  // const [show, setShow] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const apiKey = "a468a5e2bdc8721c32a4a6e17a40f130";
      const response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`
      );
      const data = await response.json();
      // console.log(data.results);
      setMovie(data.results);
      // console.log(movie);
      // setShow(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for a movie"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button type="submit">Search</button>
      </form>
      {/* {show && <MovieSearch />} */}
      <MovieCard movie={movie} />
    </div>
  );
}

function MovieCard({ movie }) {
  // console.log(movie);
  // const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="movie-card">
      {movie.map((item, index) => (
        <div key={index}>
          <img
            src={`https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${item.poster_path}`}
            alt={movie.title}
          />
          <h2>{item.title}</h2>
          <p>{item.overview}</p>
        </div>
      ))}
      {/* {modalOpen && <MovieModal movie={movie} setModalOpen={setModalOpen} />} */}
    </div>
  );
}