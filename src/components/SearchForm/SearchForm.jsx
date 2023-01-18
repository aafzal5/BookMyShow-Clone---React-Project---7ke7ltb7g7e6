import React, { useState } from 'react';

const SearchForm = () => {
    const [search, setSearch] = useState('');
    const [movie, setMovie] = useState(null);

    const handleSearch = (e) => {
        setSearch(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const apiKey = 'YOUR_API_KEY';
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${search}`);
            const data = await response.json();
            setMovie(data.results[0]);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for a movie" value={search} onChange={handleSearch}/>
            <button type="submit">Search</button>
        </form>
    );
}

export default SearchForm;

