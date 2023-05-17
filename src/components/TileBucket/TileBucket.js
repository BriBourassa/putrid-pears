import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import "./TileBucket.css";

const TileBucket = ({ displayedMovies }) => {
 
  const mappedFilms = displayedMovies.map((movie) => {
    return <MovieTile movieDetails={movie} key={movie.id} />;
  });
  
  if (!displayedMovies.length) {
    return <p>(None_Movies_Left_Beef!)</p>
  }

  return <section className="tile-bucket">{mappedFilms}</section>;
};

export default TileBucket;
