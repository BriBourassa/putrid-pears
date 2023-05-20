import React, { useState } from "react";
import './SearchBar.css';

const SearchBar = ( {allMovieTiles, setDisplayedMovies} ) => {
    const [searchQuery, setSearchQuery] = useState('')

    const handleSearchClick = () => {
        const movieNameResults = allMovieTiles.filter(
                movie => movie.title.toLowerCase().includes(searchQuery.toLowerCase())
                )
            
        setDisplayedMovies(movieNameResults)
        clearSearch()
    }
    const clearSearch = () => {
        setSearchQuery('')
    }
    return (
            <div className="search-bar">
                <input type='text' className="input-bar" placeholder="Search for a movie" onChange={event => setSearchQuery(event.target.value)} value={searchQuery}/>
                <button className="btn-search" onClick={handleSearchClick}>Search</button>
            </div>
    )
};

export default SearchBar