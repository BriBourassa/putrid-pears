import React from "react";
import './MovieTile.css'

const MovieTile = ({ movieDetails }) => {
  const { title, poster_path } = movieDetails
  return (
    <div className="movie-tile">
      <img className="poster" src={poster_path}/>
    </div>
  )
}

export default MovieTile;