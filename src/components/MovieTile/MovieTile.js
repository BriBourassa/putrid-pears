import React from "react";
import "./MovieTile.css";
import { NavLink } from "react-router-dom";
import PropTypes from 'prop-types'


const MovieTile = ({ movieDetails }) => {
  const { title, poster_path, id } = movieDetails;
  return (
      <NavLink to={`/movies/${id}`} className="tile-link">
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

MovieTile.propTypes = {
  movieDetails : PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    poster_path: PropTypes.string.isRequired})
}