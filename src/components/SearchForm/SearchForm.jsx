import React, { useState } from 'react';

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiKey = 'a468a5e2bdc8721c32a4a6e17a40f130';
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`);
            const data = await response.json();
            setMovie(data.results);
        } catch (err) {
            console.error(err);
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a movie" value={search} onChange={(e) => {setSearch(e.target.value)}}/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;

