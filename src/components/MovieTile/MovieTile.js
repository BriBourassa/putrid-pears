import React from "react";
import './MovieTile.css'

const MovieTile = ({ movieDetails }) => {
  const { title, poster_path } = movieDetails
  return (
    <div className="movie-tile">

      <h2 className="tile-heading">{title}</h2>
      <img className="poster" src={poster_path}/>
    </div>
  )
}

export default MovieTile;