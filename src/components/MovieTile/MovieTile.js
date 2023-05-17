import React from "react";
import "./MovieTile.css";
import { NavLink } from "react-router-dom";

const MovieTile = ({ movieDetails }) => {
  const { title, poster_path, id } = movieDetails;
  return (
      <NavLink to={`/movies/${id}`}>
        <div
          className="movie-tile"
          id={id}
         >
        <img className="poster-img" src={poster_path} id={id} alt={title}/>
        </div>
      </NavLink>
  );
};

export default MovieTile;
