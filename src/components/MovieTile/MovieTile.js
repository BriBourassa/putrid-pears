import React from "react";
import "./MovieTile.css";
import { NavLink } from "react-router-dom";

const MovieTile = ({ movieDetails, getData }) => {
  const { title, poster_path, id } = movieDetails;
  return (
      <NavLink to={`/movies/${id}`}>
        <div
          className="movie-tile"
          id={id}
          onClick={(event) => {
              getData(event.target.id);
            }}>
        <img className="poster-img" src={poster_path} id={id} />
        </div>
      </NavLink>
  );
};

export default MovieTile;
