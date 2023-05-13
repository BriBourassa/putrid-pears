import React from "react";
import './MovieTile.css'

const MovieTile = ({ movieDetails }) => {
  const { title, poster_path } = movieDetails
  return (
    <div className="movie-tile" data-content={title}>
      <img className="poster-img" src={poster_path}/>
    </div>
  )
}

export default MovieTile;