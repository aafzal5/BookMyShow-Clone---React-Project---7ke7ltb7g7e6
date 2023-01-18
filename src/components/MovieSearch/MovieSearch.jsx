import React from 'react';
import SearchForm from './SearchForm';
import MovieCard from './MovieCard';

const MovieSearch = () => {
    return (
        <div>
            <SearchForm/>
            <MovieCard movie={movie}/>
        </div>
    );
}

export default MovieSearch;
