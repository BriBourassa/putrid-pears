import React from "react";
import PropTypes from 'prop-types'
import MovieTile from "../MovieTile/MovieTile";
import "./TileBucket.css";

const TileBucket = ({ allMovies }) => {
  const mappedFilms = allMovies.map((movie) => {
    return <MovieTile movieDetails={movie} key={movie.id} />;
  });

  if (!allMovies.length) {
    return <p>(Loading...)</p>;
  }

  return <section className="tile-bucket">{mappedFilms}</section>;
};

export default TileBucket;

TileBucket.propTypes = {
  allMovies : PropTypes.array.isRequired
}