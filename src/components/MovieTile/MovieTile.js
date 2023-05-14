import React from "react";
import './MovieTile.css'

const MovieTile = ({ movieDetails, getData }) => {
  const { title, poster_path, id } = movieDetails
  return (
    <div className="movie-tile" id={id} onClick={(event)=>{getData(event.target.id)}}>
      
      <img className="poster-img" src={poster_path} id={id}/>
    </div>
  )
}

export default MovieTile;