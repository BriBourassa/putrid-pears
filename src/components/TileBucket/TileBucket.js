import React from "react";
import MovieTile from "../MovieTile/MovieTile";
import './TileBucket.css'

const TileBucket = ({ allMovies }) => {
  const movieData = allMovies
  const mappedFilms = movieData ? movieData.map((movie)=>{
      return (
        <MovieTile movieDetails={movie} key={movie.id} />
      )}) 
      : <p>(Loading...)</p>
  return (
    <section className="tile-bucket">
      {mappedFilms}
    </section>
  )
}

export default TileBucket