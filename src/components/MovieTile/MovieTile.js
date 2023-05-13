import React from "react";
import './MovieTile.css'

const MovieTile = ({ movieDetails, getData }) => {
  const { title, poster_path, id } = movieDetails
  return (
    <div className="movie-tile" id={id} onClick={(event)=>{getData(event.target.id)}}>
      <h2 className="tile-heading" id={id}>{title}</h2>
      <img className="poster" src={poster_path} id={id}/>
    </div>
  )
}

export default MovieTile;