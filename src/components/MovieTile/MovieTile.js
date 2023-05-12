import React from "react";
import './MovieTile.css'

const MovieTile = ({ movieDetails }) => {
  const { title, poster_path } = movieDetails
  return (
    <div className="movie-tile">

      <h2 className="tile-heading">{title}</h2>
      <img src={poster_path}/>
      <p className="tile-detail">Details</p>
    </div>
  )
}

export default MovieTile;